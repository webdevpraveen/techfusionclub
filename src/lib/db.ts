import { db } from "./firebase";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  setDoc,
} from "firebase/firestore";
import type { ClubEvent } from "@/data/events";
import { events as staticEvents } from "@/data/events";
import type { Member, MemberTier } from "@/data/members";
import { members as staticMembers } from "@/data/members";
import type { Alumnus } from "@/data/alumni";
import { alumniList as staticAlumni } from "@/data/alumni";
import type { GalleryPhoto } from "@/data/gallery";
import { galleryPhotos as staticGallery } from "@/data/gallery";
import type { Announcement } from "@/data/announcements";
import { announcements as staticAnnouncements } from "@/data/announcements";

// ─── Collection Names ────────────────────────────────────────────────
const EVENTS_COLLECTION = "events";
const MEMBERS_COLLECTION = "members";
const ALUMNI_COLLECTION = "alumni";
const GALLERY_COLLECTION = "gallery";
const ANNOUNCEMENTS_COLLECTION = "announcements";
const REGISTRATIONS_COLLECTION = "registrations";
const TRASH_COLLECTION = "trash";

const ALLOWED_RESTORE_COLLECTIONS = new Set([
  EVENTS_COLLECTION,
  MEMBERS_COLLECTION,
  ALUMNI_COLLECTION,
  GALLERY_COLLECTION,
  ANNOUNCEMENTS_COLLECTION,
]);

// ═══════════════════════════════════════════════════════════════════════
//  DATA SANITIZATION & BACKWARD COMPATIBILITY NORMALIZERS
// ═══════════════════════════════════════════════════════════════════════

/**
 * Recursively cleans an object before sending to Firestore:
 * 1. Strips all keys where value is `undefined` (Firestore throws fatal error on undefined).
 * 2. Deep-cleans nested objects and arrays.
 * 3. Preserves valid primitives, arrays, nulls, and Dates.
 */
export function sanitizeFirestoreData<T>(obj: T): T {
  if (obj === null || obj === undefined) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj
      .filter((item) => item !== undefined)
      .map((item) => sanitizeFirestoreData(item)) as unknown as T;
  }
  if (typeof obj === "object" && !(obj instanceof Date)) {
    const cleaned: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(obj as Record<string, unknown>)) {
      if (val !== undefined) {
        cleaned[key] = sanitizeFirestoreData(val);
      }
    }
    return cleaned as T;
  }
  return obj;
}

/**
 * Normalizes an Event document from Firestore or static data.
 * Ensures missing optional or legacy fields have reliable defaults.
 */
export function normalizeClubEvent(
  raw: Partial<ClubEvent> & { id?: string; [key: string]: unknown },
): ClubEvent & { id: string } {
  const dateStr = String(raw.date || "").trim();
  const parsedYear =
    Number(raw.year) ||
    (dateStr && !isNaN(new Date(dateStr).getFullYear())
      ? new Date(dateStr).getFullYear()
      : new Date().getFullYear());
  const year = isNaN(parsedYear) ? new Date().getFullYear() : parsedYear;

  const validStatuses: ClubEvent["status"][] = ["draft", "upcoming", "past"];
  let status: ClubEvent["status"] = "upcoming";
  if ((raw.status as string) === "completed") {
    status = "past";
  } else if (raw.status && validStatuses.includes(raw.status as ClubEvent["status"])) {
    status = raw.status as ClubEvent["status"];
  }

  const event: ClubEvent & { id: string } = {
    id: String(raw.id || ""),
    slug: String(raw.slug || "").trim(),
    title: String(raw.title || "").trim() || "Untitled Event",
    category: (raw.category as ClubEvent["category"]) || "Workshop",
    year,
    date: dateStr,
    venue: String(raw.venue || "").trim() || "Campus Venue",
    summary: String(raw.summary || "").trim(),
    description: Array.isArray(raw.description)
      ? (raw.description.filter(Boolean).map(String) as string[])
      : raw.summary
        ? [String(raw.summary).trim()]
        : [],
    domains: Array.isArray(raw.domains) ? (raw.domains.map(String) as string[]) : [],
    cover: String(raw.cover || "").trim() || "/images/events/default-cover.jpg",
    gallery: Array.isArray(raw.gallery) ? (raw.gallery.map(String) as string[]) : [],
    status,
  };

  if (raw.endDate) event.endDate = String(raw.endDate).trim();
  if (typeof raw.attendees === "number") event.attendees = raw.attendees;
  if (Array.isArray(raw.highlights)) event.highlights = raw.highlights.map(String);
  if (Array.isArray(raw.winners)) {
    event.winners = raw.winners.map((w) => ({
      position: String(w.position || ""),
      name: String(w.name || ""),
      project: String(w.project || ""),
    }));
  }
  if (raw.registerUrl) event.registerUrl = String(raw.registerUrl).trim();
  if (raw.googleFormUrl) event.googleFormUrl = String(raw.googleFormUrl).trim();

  return event;
}

/**
 * Normalizes a Member document from Firestore.
 * Prevents runtime TypeErrors from undefined strings or social links.
 */
export function normalizeMember(
  raw: Partial<Member> & { id?: string; [key: string]: unknown },
): Member & { id: string } {
  const validTiers: MemberTier[] = ["faculty", "gsec", "jsec", "head", "core"];
  const tier: MemberTier =
    raw.tier && validTiers.includes(raw.tier as MemberTier) ? (raw.tier as MemberTier) : "core";

  const socials: Member["socials"] = {};
  if (raw.socials?.linkedin) socials.linkedin = String(raw.socials.linkedin).trim();
  if (raw.socials?.github) socials.github = String(raw.socials.github).trim();
  if (raw.socials?.instagram) socials.instagram = String(raw.socials.instagram).trim();
  if (raw.socials?.portfolio) socials.portfolio = String(raw.socials.portfolio).trim();

  return {
    id: String(raw.id || ""),
    name: String(raw.name || "").trim() || "Member",
    designation: String(raw.designation || "").trim() || "Core Member",
    tier,
    course: String(raw.course || "").trim() || "SRMU",
    bio: String(raw.bio || "").trim() || "",
    photo: String(raw.photo || "").trim(),
    club: raw.club === "Esports" ? "Esports" : "TFC",
    socials,
  };
}

/**
 * Normalizes an Alumnus document from Firestore.
 */
export function normalizeAlumnus(
  raw: Partial<Alumnus> & { id?: string; [key: string]: unknown },
): Alumnus & { id: string } {
  const alumnus: Alumnus & { id: string } = {
    id: String(raw.id || ""),
    name: String(raw.name || "").trim() || "Alumnus",
    course: String(raw.course || "").trim() || "B.Tech CSE",
    tenure: String(raw.tenure || "").trim() || "Alumni",
    post: String(raw.post || "").trim() || "Past Member",
  };
  if (raw.photo) alumnus.photo = String(raw.photo).trim();
  if (raw.socials) {
    const socials: NonNullable<Alumnus["socials"]> = {};
    if (raw.socials.linkedin) socials.linkedin = String(raw.socials.linkedin).trim();
    if (raw.socials.github) socials.github = String(raw.socials.github).trim();
    alumnus.socials = socials;
  }
  return alumnus;
}

/**
 * Normalizes a GalleryPhoto document from Firestore.
 */
export function normalizeGalleryPhoto(
  raw: Partial<GalleryPhoto> & { id?: string; [key: string]: unknown },
): GalleryPhoto & { id: string } {
  const parsedYear = Number(raw.year) || new Date().getFullYear();
  return {
    id: String(raw.id || ""),
    src: String(raw.src || "").trim(),
    alt: String(raw.alt || "").trim() || "Tech Fusion Club Event",
    event: String(raw.event || "").trim() || "Event",
    eventSlug: String(raw.eventSlug || "").trim() || "event",
    year: isNaN(parsedYear) ? new Date().getFullYear() : parsedYear,
  };
}

/**
 * Normalizes an Announcement document from Firestore.
 */
export function normalizeAnnouncement(
  raw: Partial<Announcement> & { id?: string; [key: string]: unknown },
): Announcement & { id: string } {
  const item: Announcement & { id: string } = {
    id: String(raw.id || ""),
    title: String(raw.title || "").trim() || "Announcement",
    date: String(raw.date || "").trim() || new Date().toISOString().slice(0, 10),
    summary: String(raw.summary || "").trim(),
    published: Boolean(raw.published),
  };
  if (raw.content) item.content = String(raw.content).trim();
  if (raw.image) item.image = String(raw.image).trim();
  if (raw.link) item.link = String(raw.link).trim();
  return item;
}

// ═══════════════════════════════════════════════════════════════════════
//  MULTI-TIER CACHE (L1 Memory + L2 Persistent Browser LocalStorage)
//  Saves 99%+ of Firestore Reads & Protects Free Tier Quota
// ═══════════════════════════════════════════════════════════════════════

const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes TTL for client reads
const LOCAL_STORAGE_PREFIX = "tfc_cache_v2_";

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const memoryCache: Record<string, CacheEntry<unknown>> = {};

function getCached<T>(key: string, allowStale = false): T | null {
  const now = Date.now();

  // 1. Check L1 Memory Cache
  const memEntry = memoryCache[key];
  if (memEntry) {
    if (allowStale || now - memEntry.timestamp <= CACHE_TTL_MS) {
      return memEntry.data as T;
    }
    delete memoryCache[key];
  }

  // 2. Check L2 Browser LocalStorage
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      const raw = window.localStorage.getItem(LOCAL_STORAGE_PREFIX + key);
      if (raw) {
        const parsed: CacheEntry<T> = JSON.parse(raw);
        if (allowStale || now - parsed.timestamp <= CACHE_TTL_MS) {
          // Warm L1 memory cache
          memoryCache[key] = parsed;
          return parsed.data;
        } else {
          window.localStorage.removeItem(LOCAL_STORAGE_PREFIX + key);
        }
      }
    } catch {
      // Storage access blocked or parse error
    }
  }

  return null;
}

function setCache<T>(key: string, data: T): void {
  const entry: CacheEntry<T> = { data, timestamp: Date.now() };

  // 1. Set L1 Memory Cache
  memoryCache[key] = entry;

  // 2. Set L2 Browser LocalStorage
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      window.localStorage.setItem(LOCAL_STORAGE_PREFIX + key, JSON.stringify(entry));
    } catch {
      // Ignore quota errors
    }
  }
}

function clearCache(key: string): void {
  // Clear L1 Memory Cache
  delete memoryCache[key];
  for (const k of Object.keys(memoryCache)) {
    if (k.startsWith(key)) {
      delete memoryCache[k];
    }
  }

  // Clear L2 Browser LocalStorage
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      const keysToRemove: string[] = [];
      for (let i = 0; i < window.localStorage.length; i++) {
        const storageKey = window.localStorage.key(i);
        if (
          storageKey &&
          (storageKey === LOCAL_STORAGE_PREFIX + key ||
            storageKey.startsWith(LOCAL_STORAGE_PREFIX + key))
        ) {
          keysToRemove.push(storageKey);
        }
      }
      for (const k of keysToRemove) {
        window.localStorage.removeItem(k);
      }
    } catch {
      // Ignore errors
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════
//  TRASH LOGIC (100 hours expiry)
// ═══════════════════════════════════════════════════════════════════════

const TRASH_EXPIRY_MS = 100 * 60 * 60 * 1000; // 100 hours

async function moveToTrash(collectionName: string, id: string) {
  const docRef = doc(db, collectionName, id);
  const snapshot = await getDoc(docRef);
  if (snapshot.exists()) {
    const data = snapshot.data();
    await addDoc(collection(db, TRASH_COLLECTION), {
      originalCollection: collectionName,
      originalId: id,
      deletedAt: Date.now(),
      expiresAt: Date.now() + TRASH_EXPIRY_MS,
      data: sanitizeFirestoreData(data),
    });
  }
}

export interface TrashItem {
  id: string;
  originalCollection: string;
  originalId: string;
  deletedAt: number;
  expiresAt: number;
  data: Record<string, unknown>;
}

export const getTrashItems = async (): Promise<TrashItem[]> => {
  try {
    const snapshot = await getDocs(collection(db, TRASH_COLLECTION));
    const now = Date.now();
    const items: TrashItem[] = [];

    for (const d of snapshot.docs) {
      const data = d.data() as Omit<TrashItem, "id">;
      if (now > data.expiresAt) {
        await deleteDoc(doc(db, TRASH_COLLECTION, d.id));
      } else {
        items.push({ id: d.id, ...data });
      }
    }

    return items.sort((a, b) => b.deletedAt - a.deletedAt);
  } catch (error) {
    console.warn("Error fetching trash:", error);
    return [];
  }
};

export const restoreTrashItem = async (trashId: string) => {
  const trashRef = doc(db, TRASH_COLLECTION, trashId);
  const snapshot = await getDoc(trashRef);
  if (!snapshot.exists()) return false;

  const { originalCollection, originalId, data } = snapshot.data();
  if (!ALLOWED_RESTORE_COLLECTIONS.has(originalCollection)) {
    console.error("Untrusted collection restore target:", originalCollection);
    return false;
  }

  const sanitized = sanitizeFirestoreData(data);
  await updateDoc(doc(db, originalCollection, originalId), sanitized).catch(async () => {
    await setDoc(doc(db, originalCollection, originalId), sanitized);
  });

  await deleteDoc(trashRef);
  clearCache(originalCollection);
  return true;
};

export const deleteTrashItemPermanently = async (trashId: string) => {
  await deleteDoc(doc(db, TRASH_COLLECTION, trashId));
  return true;
};

// ═══════════════════════════════════════════════════════════════════════
//  EVENTS
// ═══════════════════════════════════════════════════════════════════════

export const getEvents = async (includeDrafts = false): Promise<(ClubEvent & { id: string })[]> => {
  const cacheKey = `events:${includeDrafts ? "all" : "published"}`;
  const cached = getCached<(ClubEvent & { id: string })[]>(cacheKey);
  if (cached) return cached;

  try {
    const snapshot = await getDocs(collection(db, EVENTS_COLLECTION));
    const events = snapshot.docs.map((d) =>
      normalizeClubEvent({ id: d.id, ...(d.data() as Partial<ClubEvent>) }),
    );
    const result = includeDrafts ? events : events.filter((e) => e.status !== "draft");
    setCache(cacheKey, result);
    return result;
  } catch (error) {
    console.warn("Error fetching events from Firestore, using fallback:", error);
    const stale = getCached<(ClubEvent & { id: string })[]>(cacheKey, true);
    if (stale && stale.length > 0) return stale;
    return (includeDrafts ? staticEvents : staticEvents.filter((e) => e.status !== "draft")).map(
      (e, idx) => normalizeClubEvent({ id: `static-${idx}`, ...e }),
    );
  }
};

export const getEventBySlug = async (
  slug: string,
): Promise<(ClubEvent & { id: string }) | null> => {
  const allEvents =
    getCached<(ClubEvent & { id: string })[]>("events:all") ||
    getCached<(ClubEvent & { id: string })[]>("events:published");
  if (allEvents) {
    const found = allEvents.find((e) => e.slug === slug);
    if (found) return found;
  }

  try {
    const q = query(collection(db, EVENTS_COLLECTION), where("slug", "==", slug));
    const snapshot = await getDocs(q);
    const docSnap = snapshot.docs[0];
    if (!docSnap) return null;
    return normalizeClubEvent({ id: docSnap.id, ...(docSnap.data() as Partial<ClubEvent>) });
  } catch (error) {
    console.warn("Error fetching event:", error);
    const fallback = staticEvents.find((e) => e.slug === slug);
    return fallback ? normalizeClubEvent({ id: "static-slug", ...fallback }) : null;
  }
};

export const createEvent = async (eventData: Partial<ClubEvent>) => {
  const sanitized = sanitizeFirestoreData(eventData);
  const docRef = await addDoc(collection(db, EVENTS_COLLECTION), sanitized);
  clearCache("events");
  return docRef.id;
};

export const updateEvent = async (id: string, eventData: Partial<ClubEvent>) => {
  const sanitized = sanitizeFirestoreData(eventData);
  await updateDoc(doc(db, EVENTS_COLLECTION, id), sanitized as Record<string, unknown>);
  clearCache("events");
  return true;
};

export const deleteEvent = async (id: string) => {
  await moveToTrash(EVENTS_COLLECTION, id);
  await deleteDoc(doc(db, EVENTS_COLLECTION, id));
  clearCache("events");
  return true;
};

// ═══════════════════════════════════════════════════════════════════════
//  MEMBERS
// ═══════════════════════════════════════════════════════════════════════

export const getMembers = async (): Promise<(Member & { id: string })[]> => {
  const cacheKey = "members";
  const cached = getCached<(Member & { id: string })[]>(cacheKey);
  if (cached) return cached;

  try {
    const snapshot = await getDocs(collection(db, MEMBERS_COLLECTION));
    const result = snapshot.docs.map((d) =>
      normalizeMember({ id: d.id, ...(d.data() as Partial<Member>) }),
    );
    setCache(cacheKey, result);
    return result;
  } catch (error) {
    console.warn("Error fetching members from Firestore, using fallback:", error);
    const stale = getCached<(Member & { id: string })[]>(cacheKey, true);
    if (stale && stale.length > 0) return stale;
    return staticMembers.map((m) => normalizeMember(m));
  }
};

export const getMembersByTier = async (tier: MemberTier): Promise<(Member & { id: string })[]> => {
  const members = await getMembers();
  return members.filter((m) => m.tier === tier);
};

export const createMember = async (data: Partial<Member>) => {
  const sanitized = sanitizeFirestoreData(data);
  const docRef = await addDoc(collection(db, MEMBERS_COLLECTION), sanitized);
  clearCache("members");
  return docRef.id;
};

export const updateMember = async (id: string, data: Partial<Member>) => {
  const sanitized = sanitizeFirestoreData(data);
  await updateDoc(doc(db, MEMBERS_COLLECTION, id), sanitized as Record<string, unknown>);
  clearCache("members");
  return true;
};

export const deleteMember = async (id: string) => {
  await moveToTrash(MEMBERS_COLLECTION, id);
  await deleteDoc(doc(db, MEMBERS_COLLECTION, id));
  clearCache("members");
  return true;
};

// ═══════════════════════════════════════════════════════════════════════
//  ALUMNI
// ═══════════════════════════════════════════════════════════════════════

export const getAlumni = async (): Promise<(Alumnus & { id: string })[]> => {
  const cacheKey = "alumni";
  const cached = getCached<(Alumnus & { id: string })[]>(cacheKey);
  if (cached) return cached;

  try {
    const snapshot = await getDocs(collection(db, ALUMNI_COLLECTION));
    const result = snapshot.docs.map((d) =>
      normalizeAlumnus({ id: d.id, ...(d.data() as Partial<Alumnus>) }),
    );
    setCache(cacheKey, result);
    return result;
  } catch (error) {
    console.warn("Error fetching alumni from Firestore, using fallback:", error);
    const stale = getCached<(Alumnus & { id: string })[]>(cacheKey, true);
    if (stale && stale.length > 0) return stale;
    return staticAlumni.map((a) => normalizeAlumnus(a));
  }
};

export const createAlumnus = async (data: Partial<Alumnus>) => {
  const sanitized = sanitizeFirestoreData(data);
  const docRef = await addDoc(collection(db, ALUMNI_COLLECTION), sanitized);
  clearCache("alumni");
  return docRef.id;
};

export const updateAlumnus = async (id: string, data: Partial<Alumnus>) => {
  const sanitized = sanitizeFirestoreData(data);
  await updateDoc(doc(db, ALUMNI_COLLECTION, id), sanitized as Record<string, unknown>);
  clearCache("alumni");
  return true;
};

export const deleteAlumnus = async (id: string) => {
  await moveToTrash(ALUMNI_COLLECTION, id);
  await deleteDoc(doc(db, ALUMNI_COLLECTION, id));
  clearCache("alumni");
  return true;
};

// ═══════════════════════════════════════════════════════════════════════
//  GALLERY
// ═══════════════════════════════════════════════════════════════════════

export const getGalleryPhotos = async (): Promise<(GalleryPhoto & { id: string })[]> => {
  const cacheKey = "gallery";
  const cached = getCached<(GalleryPhoto & { id: string })[]>(cacheKey);
  if (cached) return cached;

  try {
    const snapshot = await getDocs(collection(db, GALLERY_COLLECTION));
    const result = snapshot.docs.map((d) =>
      normalizeGalleryPhoto({ id: d.id, ...(d.data() as Partial<GalleryPhoto>) }),
    );
    setCache(cacheKey, result);
    return result;
  } catch (error) {
    console.warn("Error fetching gallery from Firestore, using fallback:", error);
    const stale = getCached<(GalleryPhoto & { id: string })[]>(cacheKey, true);
    if (stale && stale.length > 0) return stale;
    return staticGallery.map((g, idx) => normalizeGalleryPhoto({ id: `static-${idx}`, ...g }));
  }
};

export const createGalleryPhoto = async (data: Partial<GalleryPhoto>) => {
  const sanitized = sanitizeFirestoreData(data);
  const docRef = await addDoc(collection(db, GALLERY_COLLECTION), sanitized);
  clearCache("gallery");
  return docRef.id;
};

export const deleteGalleryPhoto = async (id: string) => {
  await moveToTrash(GALLERY_COLLECTION, id);
  await deleteDoc(doc(db, GALLERY_COLLECTION, id));
  clearCache("gallery");
  return true;
};

// ═══════════════════════════════════════════════════════════════════════
//  ANNOUNCEMENTS
// ═══════════════════════════════════════════════════════════════════════

export const getAnnouncements = async (): Promise<(Announcement & { id: string })[]> => {
  const cacheKey = "announcements";
  const cached = getCached<(Announcement & { id: string })[]>(cacheKey);
  if (cached) return cached;

  try {
    const snapshot = await getDocs(collection(db, ANNOUNCEMENTS_COLLECTION));
    const result = snapshot.docs.map((d) =>
      normalizeAnnouncement({ id: d.id, ...(d.data() as Partial<Announcement>) }),
    );
    setCache(cacheKey, result);
    return result;
  } catch (error) {
    console.warn("Error fetching announcements from Firestore, using fallback:", error);
    const stale = getCached<(Announcement & { id: string })[]>(cacheKey, true);
    if (stale && stale.length > 0) return stale;
    return staticAnnouncements.map((a) => normalizeAnnouncement(a));
  }
};

export const createAnnouncement = async (data: Partial<Announcement>) => {
  const sanitized = sanitizeFirestoreData(data);
  const docRef = await addDoc(collection(db, ANNOUNCEMENTS_COLLECTION), sanitized);
  clearCache("announcements");
  return docRef.id;
};

export const updateAnnouncement = async (id: string, data: Partial<Announcement>) => {
  const sanitized = sanitizeFirestoreData(data);
  await updateDoc(doc(db, ANNOUNCEMENTS_COLLECTION, id), sanitized as Record<string, unknown>);
  clearCache("announcements");
  return true;
};

export const deleteAnnouncement = async (id: string) => {
  await moveToTrash(ANNOUNCEMENTS_COLLECTION, id);
  await deleteDoc(doc(db, ANNOUNCEMENTS_COLLECTION, id));
  clearCache("announcements");
  return true;
};

// ═══════════════════════════════════════════════════════════════════════
//  REGISTRATIONS (not cached — admin-only reads, students create)
// ═══════════════════════════════════════════════════════════════════════

export const getRegistrations = async (eventSlug?: string) => {
  try {
    const ref = collection(db, REGISTRATIONS_COLLECTION);
    const q = eventSlug ? query(ref, where("eventSlug", "==", eventSlug)) : ref;
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch (error) {
    console.warn("Error fetching registrations:", error);
    return [];
  }
};

export const createRegistration = async (data: Record<string, unknown>) => {
  const sanitized = sanitizeFirestoreData({
    ...data,
    submittedAt: new Date().toISOString(),
  });
  const docRef = await addDoc(collection(db, REGISTRATIONS_COLLECTION), sanitized);
  return docRef.id;
};

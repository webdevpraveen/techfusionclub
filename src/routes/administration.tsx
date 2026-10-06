import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Calendar,
  Users,
  GraduationCap,
  Image as ImageIcon,
  Megaphone,
  Trash2,
  LogOut,
  Plus,
  Search,
  FormInput,
  Edit3,
  X,
  Save,
  Loader2,
  AlertCircle,
  ShieldAlert,
  RotateCcw,
  Settings2,
} from "lucide-react";
import { club } from "@/data/club";
import { auth, signInWithGoogle, logout } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import {
  getEvents,
  createEvent,
  deleteEvent,
  updateEvent,
  getMembers,
  createMember,
  updateMember,
  deleteMember,
  getAlumni,
  createAlumnus,
  updateAlumnus,
  deleteAlumnus,
  getGalleryPhotos,
  createGalleryPhoto,
  deleteGalleryPhoto,
  getAnnouncements,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
  getRegistrations,
  getTrashItems,
  restoreTrashItem,
  deleteTrashItemPermanently,
  type TrashItem,
} from "@/lib/db";
import type { ClubEvent } from "@/data/events";
import type { Member, MemberTier } from "@/data/members";
import { tierMeta } from "@/data/members";
import type { Alumnus } from "@/data/alumni";
import type { GalleryPhoto } from "@/data/gallery";
import type { Announcement } from "@/data/announcements";
import { toast } from "sonner";
import { GlowCard } from "@/components/site/GlowCard";

export const Route = createFileRoute("/administration")({
  head: () => ({
    meta: [{ title: "Admin Portal | Tech Fusion Club" }],
  }),
  component: AdminShell,
});

function AdminShell() {
  const [user, setUser] = useState<User | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Dashboard");

  // Strict authorization list
  const AUTHORIZED_EMAILS = ["webdevpraveen@gmail.com", "techfusionclub@srmu.ac.in"];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const email = currentUser.email || "";
        if (AUTHORIZED_EMAILS.length > 0 && !AUTHORIZED_EMAILS.includes(email)) {
          setAuthError(`Unauthorized access. ${email} is not an admin.`);
          await logout();
          setUser(null);
        } else {
          setAuthError(null);
          setUser(currentUser);
          toast.success(`Welcome back, ${currentUser.displayName}`);
        }
      } else {
        setUser(null);
      }
      setLoadingAuth(false);
    });
    return () => unsubscribe();
  }, []);

  if (loadingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="size-8 animate-spin text-primary-glow" />
          <p className="text-sm font-mono tracking-widest text-muted-foreground uppercase">
            Verifying Identity...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="relative flex min-h-screen items-center justify-center bg-background px-4">
        <div className="relative z-10 max-w-md w-full rounded-2xl p-10 bg-surface border border-border shadow-xl text-center">
          <div className="mx-auto flex size-20 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 mb-8">
            <span className="font-display text-3xl font-bold text-primary">{club.initials}</span>
          </div>
          <h1 className="font-display text-3xl font-bold mb-3 tracking-tight">Admin Portal</h1>
          <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
            Secure workspace for managing Tech Fusion Club's events, members, and content.
          </p>

          {authError && (
            <div className="mb-8 flex items-start gap-3 rounded-xl bg-destructive/10 border border-destructive/20 p-4 text-left">
              <ShieldAlert className="size-5 text-destructive shrink-0 mt-0.5" />
              <p className="text-sm text-destructive font-medium leading-relaxed">{authError}</p>
            </div>
          )}

          <button
            onClick={async () => {
              setAuthError(null);
              try {
                await signInWithGoogle();
              } catch (err: unknown) {
                console.error("Sign-in error:", err);
                const error = err as { code?: string; message?: string };
                const code = error?.code || "";
                if (code === "auth/unauthorized-domain") {
                  setAuthError(
                    `Unauthorized Domain: '${window.location.hostname}' is not authorized in Firebase. Please add '${window.location.hostname}' to Firebase Console -> Authentication -> Settings -> Authorized Domains.`,
                  );
                } else if (code === "auth/popup-blocked") {
                  setAuthError(
                    "Sign-in popup was blocked by your browser. Please allow popups for this site in your browser settings.",
                  );
                } else if (code === "auth/popup-closed-by-user") {
                  setAuthError("Sign-in popup was closed before completing.");
                } else {
                  setAuthError(error?.message || "Sign-in failed. Please check browser console.");
                }
              }
            }}
            className="group relative flex w-full items-center justify-center gap-3 rounded-xl bg-background border border-border px-6 py-4 font-semibold text-foreground hover:bg-surface-strong hover:border-primary/50 transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" className="size-5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Events", icon: Calendar },
    { name: "Members", icon: Users },
    { name: "Alumni", icon: GraduationCap },
    { name: "Gallery", icon: ImageIcon },
    { name: "Announcements", icon: Megaphone },
    { name: "Trash", icon: Trash2 },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 border-r border-border bg-surface flex flex-col z-20">
        <div className="flex h-20 items-center px-8 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/20 text-primary-glow font-bold text-sm border border-primary/30">
              {club.initials}
            </div>
            <span className="font-display font-bold tracking-tight">Admin</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1.5">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.name;
            return (
              <button
                key={tab.name}
                onClick={() => {
                  setActiveTab(tab.name);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(217,72,15,0.3)]"
                    : "text-muted-foreground hover:bg-surface-strong hover:text-foreground"
                }`}
              >
                <tab.icon className={`size-4 ${isActive ? "text-primary-foreground" : ""}`} />
                {tab.name}
              </button>
            );
          })}
        </div>
        <div className="p-6 border-t border-border/40">
          <button
            onClick={() => {
              logout();
              toast.info("Logged out successfully");
            }}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
          >
            <LogOut className="size-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 flex flex-col min-h-screen bg-background">
        <header className="h-20 border-b border-border bg-background flex items-center px-10 sticky top-0 z-10 justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight">{activeTab}</h2>
            <p className="text-xs text-muted-foreground font-mono mt-1 uppercase tracking-wider">
              {`Manage ${activeTab.toLowerCase()}`}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-surface border border-border/50">
              <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center font-bold text-xs text-primary-glow border border-primary/40 overflow-hidden">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="Profile" />
                ) : (
                  user?.email?.charAt(0).toUpperCase()
                )}
              </div>
              <span className="text-sm font-medium text-muted-foreground hidden sm:block">
                {user?.email}
              </span>
            </div>
          </div>
        </header>

        <div className="flex-1 p-10 max-w-7xl mx-auto w-full">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {activeTab === "Dashboard" && <DashboardAdmin />}
            {activeTab === "Events" && <EventsAdmin />}
            {activeTab === "Members" && <MembersAdmin />}
            {activeTab === "Alumni" && <AlumniAdmin />}
            {activeTab === "Gallery" && <GalleryAdmin />}
            {activeTab === "Announcements" && <AnnouncementsAdmin />}
            {activeTab === "Trash" && <TrashAdmin />}
          </div>
        </div>
      </main>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  DASHBOARD
// ═══════════════════════════════════════════════════════════════════════

function DashboardAdmin() {
  const [stats, setStats] = useState({ events: 0, members: 0, registrations: 0 });
  const [recentEvents, setRecentEvents] = useState<ClubEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [events, members, regs] = await Promise.all([
          getEvents(true),
          getMembers(),
          getRegistrations(),
        ]);
        setStats({ events: events.length, members: members.length, registrations: regs.length });
        setRecentEvents(events.slice(0, 5));
      } catch (e) {
        toast.error("Failed to load dashboard stats");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <LoadingState />;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Total Events", value: stats.events, icon: Calendar, color: "text-blue-400" },
          { label: "Active Members", value: stats.members, icon: Users, color: "text-emerald-400" },
          {
            label: "Total Registrations",
            value: stats.registrations,
            icon: Megaphone,
            color: "text-primary-glow",
          },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-surface border border-border rounded-xl p-6 flex flex-col justify-between shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                {s.label}
              </h3>
              <s.icon className={`size-5 ${s.color}`} />
            </div>
            <p className="text-4xl font-display font-bold">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-surface rounded-xl border border-border overflow-hidden shadow-sm">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h3 className="font-display font-bold text-lg">Recent Events</h3>
        </div>
        {recentEvents.length > 0 ? (
          <div className="divide-y divide-border/30">
            {recentEvents.map((e) => (
              <div
                key={e.slug}
                className="px-6 py-4 flex items-center justify-between hover:bg-surface/30 transition-colors"
              >
                <div>
                  <p className="font-medium">{e.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {e.date} · {e.category}
                  </p>
                </div>
                <StatusBadge status={e.status} />
              </div>
            ))}
          </div>
        ) : (
          <EmptyState message="No events found in the database." />
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  EVENTS ADMIN
// ═══════════════════════════════════════════════════════════════════════

function EventsAdmin() {
  const [events, setEvents] = useState<(ClubEvent & { id?: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<(ClubEvent & { id?: string }) | null>(null);

  const fetchEvents = async () => {
    setLoading(true);
    const data = await getEvents(true);
    setEvents(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this event? This cannot be undone.")) return;
    try {
      await deleteEvent(id);
      toast.success("Moved to trash");
      fetchEvents();
    } catch {
      toast.error("Failed to delete event.");
    }
  };

  const handleSaveEvent = async (data: Partial<ClubEvent>) => {
    try {
      if (editingEvent?.id) {
        await updateEvent(editingEvent.id, data);
        toast.success("Event updated successfully");
      } else {
        await createEvent(data);
        toast.success("Event created successfully");
      }
      setShowAddForm(false);
      setEditingEvent(null);
      fetchEvents();
    } catch {
      toast.error("Failed to save event.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search events..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border/50 bg-surface/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
          />
        </div>
        <button
          onClick={() => {
            setEditingEvent(null);
            setShowAddForm(true);
          }}
          className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 transition-all w-full sm:w-auto justify-center"
        >
          <Plus className="size-4" /> Add Event
        </button>
      </div>

      {showAddForm && (
        <EventForm
          event={editingEvent}
          onSave={handleSaveEvent}
          onCancel={() => {
            setShowAddForm(false);
            setEditingEvent(null);
          }}
        />
      )}

      <div className="bg-surface rounded-2xl border border-border overflow-hidden shadow-sm">
        <table className="w-full text-sm text-left whitespace-nowrap">
          <thead className="text-xs text-muted-foreground uppercase bg-surface/50 border-b border-border/50">
            <tr>
              <th className="px-6 py-4 font-semibold tracking-wider">Event</th>
              <th className="px-6 py-4 font-semibold tracking-wider">Status</th>
              <th className="px-6 py-4 font-semibold tracking-wider">Date</th>
              <th className="px-6 py-4 font-semibold tracking-wider">Category</th>
              <th className="px-6 py-4 font-semibold tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {loading ? (
              <tr>
                <td colSpan={5} className="p-0">
                  <LoadingState />
                </td>
              </tr>
            ) : events.length > 0 ? (
              events.map((e) => (
                <tr key={e.id || e.slug} className="hover:bg-surface/30 transition-colors group">
                  <td className="px-6 py-4">
                    <p className="font-medium">{e.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{e.slug}</p>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={e.status} />
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{e.date}</td>
                  <td className="px-6 py-4 text-muted-foreground capitalize">{e.category}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => {
                          setEditingEvent(e);
                          setShowAddForm(true);
                        }}
                        className="p-2 rounded-lg text-muted-foreground hover:bg-surface hover:text-foreground transition-colors"
                        title="Edit Details"
                      >
                        <Edit3 className="size-4" />
                      </button>
                      {e.id && (
                        <button
                          onClick={() => handleDelete(e.id!)}
                          className="p-2 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-0">
                  <EmptyState message="No events found. Click 'Add Event' to create one." />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EventForm({
  event,
  onSave,
  onCancel,
}: {
  event: (ClubEvent & { id?: string }) | null;
  onSave: (data: Partial<ClubEvent>) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<Partial<ClubEvent>>({
    title: (event?.title || "") as string,
    slug: (event?.slug || "") as string,
    summary: (event?.summary || "") as string,
    description: event?.description || [],
    date: (event?.date || "") as string,
    venue: (event?.venue || "") as string,
    category: event?.category || "Workshop",
    status: event?.status || "upcoming",
    cover: (event?.cover || "") as string,
    googleFormUrl: event?.googleFormUrl || "",
  });

  const generateSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title?.trim() || !form.date || !form.summary?.trim()) {
      toast.error("Please fill all required fields");
      return;
    }
    const finalForm: Partial<ClubEvent> = { ...form };
    if (!finalForm.slug) {
      finalForm.slug = generateSlug(finalForm.title!);
    }

    // Auto-derive year from event date if not set or invalid
    const parsedDate = new Date(finalForm.date!);
    const parsedYear = !isNaN(parsedDate.getFullYear())
      ? parsedDate.getFullYear()
      : new Date().getFullYear();
    finalForm.year =
      typeof finalForm.year === "number" && !isNaN(finalForm.year) ? finalForm.year : parsedYear;

    // Ensure description contains at least summary if array is empty
    if (!finalForm.description || finalForm.description.length === 0) {
      finalForm.description = [finalForm.summary!.trim()];
    }

    if (!finalForm.domains) finalForm.domains = [];
    if (!finalForm.gallery) finalForm.gallery = [];

    // Map "completed" to "past" status
    if ((finalForm.status as string) === "completed") {
      finalForm.status = "past";
    }

    onSave(finalForm);
  };

  return (
    <div className="bg-surface rounded-xl border border-border p-6 mb-8 animate-in fade-in slide-in-from-top-4">
      <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
        <h3 className="font-display font-bold text-xl">
          {event ? "Edit Event" : "Create New Event"}
        </h3>
        <button
          type="button"
          onClick={onCancel}
          className="p-2 rounded-lg hover:bg-background text-muted-foreground transition-colors"
        >
          <X className="size-5" />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Title *
            </label>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div className="space-y-2 md:col-span-2 lg:col-span-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Summary * (Short intro)
            </label>
            <textarea
              value={form.summary}
              onChange={(e) => setForm({ ...form, summary: e.target.value })}
              rows={2}
              className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all resize-y"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Date *
            </label>
            <input
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              placeholder="e.g. May 15, 2026"
              className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              End Date (Optional)
            </label>
            <input
              value={form.endDate || ""}
              onChange={(e) => setForm({ ...form, endDate: e.target.value })}
              placeholder="e.g. May 16, 2026"
              className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Venue
            </label>
            <input
              value={form.venue}
              onChange={(e) => setForm({ ...form, venue: e.target.value })}
              className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Google Form URL
            </label>
            <input
              value={form.googleFormUrl || ""}
              onChange={(e) => setForm({ ...form, googleFormUrl: e.target.value })}
              placeholder="e.g. https://docs.google.com/forms/d/e/.../viewform"
              className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Category
            </label>
            <select
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value as ClubEvent["category"] })
              }
              className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
            >
              <option value="Workshop">Workshop</option>
              <option value="Hackathon">Hackathon</option>
              <option value="Fest">Fest</option>
              <option value="Competition">Competition</option>
              <option value="Seminar">Seminar</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Status
            </label>
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value as ClubEvent["status"] })}
              className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
            >
              <option value="upcoming">Upcoming</option>
              <option value="completed">Completed</option>
              <option value="draft">Draft</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Cover Image URL
            </label>
            <input
              value={form.cover}
              onChange={(e) => setForm({ ...form, cover: e.target.value })}
              placeholder="https://..."
              className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>
        <div className="mt-8 flex justify-end gap-4 border-t border-border/50 pt-6">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-surface transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            <Save className="size-4" /> {event ? "Save Changes" : "Create Event"}
          </button>
        </div>
      </form>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  MEMBERS ADMIN
// ═══════════════════════════════════════════════════════════════════════

function MembersAdmin() {
  const [members, setMembers] = useState<(Member & { id?: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingMember, setEditingMember] = useState<(Member & { id?: string }) | null>(null);
  const [filterTier, setFilterTier] = useState<MemberTier | "all">("all");

  const fetchMembers = async () => {
    setLoading(true);
    const data = await getMembers();
    setMembers(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchMembers();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this member?")) return;
    try {
      await deleteMember(id);
      toast.success("Moved to trash");
      fetchMembers();
    } catch {
      toast.error("Failed to delete.");
    }
  };

  const handleSave = async (data: Partial<Member>) => {
    try {
      if (editingMember?.id) {
        await updateMember(editingMember.id, data);
        toast.success("Member updated");
      } else {
        await createMember(data);
        toast.success("Member added");
      }
      setShowForm(false);
      setEditingMember(null);
      fetchMembers();
    } catch {
      toast.error("Failed to save member data.");
    }
  };

  const filteredMembers =
    filterTier === "all" ? members : members.filter((m) => m.tier === filterTier);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="relative">
          <select
            value={filterTier}
            onChange={(e) => setFilterTier(e.target.value as MemberTier | "all")}
            className="appearance-none w-full sm:w-64 rounded-xl border border-border/50 bg-surface/50 pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          >
            <option value="all">All Tiers ({members.length})</option>
            {(Object.keys(tierMeta) as MemberTier[]).map((t) => (
              <option key={t} value={t}>
                {tierMeta[t].label} ({members.filter((m) => m.tier === t).length})
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={() => {
            setEditingMember(null);
            setShowForm(true);
          }}
          className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 transition-all w-full sm:w-auto justify-center"
        >
          <Plus className="size-4" /> Add Member
        </button>
      </div>

      {showForm && (
        <MemberForm
          member={editingMember}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingMember(null);
          }}
        />
      )}

      <div className="bg-surface rounded-2xl border border-border overflow-hidden shadow-sm">
        <table className="w-full text-sm text-left whitespace-nowrap">
          <thead className="text-xs text-muted-foreground uppercase bg-surface/50 border-b border-border/50">
            <tr>
              <th className="px-6 py-4 font-semibold">Member</th>
              <th className="px-6 py-4 font-semibold">Tier</th>
              <th className="px-6 py-4 font-semibold">Designation</th>
              <th className="px-6 py-4 font-semibold">Branch</th>
              <th className="px-6 py-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {loading ? (
              <tr>
                <td colSpan={5} className="p-0">
                  <LoadingState />
                </td>
              </tr>
            ) : filteredMembers.length > 0 ? (
              filteredMembers.map((m) => (
                <tr key={m.id || m.name} className="hover:bg-surface/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-surface overflow-hidden border border-border shadow-sm">
                        {m.photo ? (
                          <img src={m.photo} alt={m.name} className="size-full object-cover" />
                        ) : (
                          <div className="size-full flex items-center justify-center font-bold text-muted-foreground">
                            {m.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="font-medium text-foreground">{m.name}</span>
                        {m.domain && (
                          <p className="text-xs text-muted-foreground mt-0.5">{m.domain}</p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full border border-border bg-surface px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider text-muted-foreground">
                      {m.tier}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{m.designation}</td>
                  <td className="px-6 py-4 text-muted-foreground">{m.branch}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => {
                          setEditingMember(m);
                          setShowForm(true);
                        }}
                        className="p-2 rounded-lg text-muted-foreground hover:bg-surface hover:text-foreground transition-colors"
                      >
                        <Edit3 className="size-4" />
                      </button>
                      {m.id && (
                        <button
                          onClick={() => handleDelete(m.id!)}
                          className="p-2 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-0">
                  <EmptyState message="No members found in this tier." />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MemberForm({
  member,
  onSave,
  onCancel,
}: {
  member: (Member & { id?: string }) | null;
  onSave: (data: Partial<Member>) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<Partial<Member>>({
    name: member?.name || "",
    designation: member?.designation || "",
    tier: member?.tier || "core",
    domain: member?.domain || "",
    branch: member?.branch || "",
    bio: member?.bio || "",
    photo: member?.photo || "",
    club: member?.club || "TFC",
    socials: member?.socials || {},
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name?.trim() || !form.designation?.trim()) {
      toast.error("Name and designation are required");
      return;
    }
    const cleanedSocials: Record<string, string> = {};
    if (form.socials) {
      for (const [k, v] of Object.entries(form.socials)) {
        if (typeof v === "string" && v.trim() !== "") {
          cleanedSocials[k] = v.trim();
        }
      }
    }
    const finalForm: Partial<Member> = {
      ...form,
      name: form.name.trim(),
      designation: form.designation.trim(),
      domain: form.domain?.trim() || "General",
      branch: form.branch?.trim() || "SRMU",
      bio: form.bio?.trim() || "",
      photo: form.photo?.trim() || "",
      club: form.club || "TFC",
      socials: cleanedSocials,
    };
    onSave(finalForm);
  };

  return (
    <div className="bg-surface rounded-xl border border-border p-6 mb-8 animate-in fade-in slide-in-from-top-4">
      <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
        <h3 className="font-display font-bold text-xl">
          {member ? "Edit Member" : "Add New Member"}
        </h3>
        <button
          type="button"
          onClick={onCancel}
          className="p-2 rounded-lg hover:bg-background text-muted-foreground transition-colors"
        >
          <X className="size-5" />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InputField
            label="Name *"
            value={form.name}
            onChange={(v) => setForm({ ...form, name: v })}
          />
          <InputField
            label="Designation *"
            value={form.designation}
            onChange={(v) => setForm({ ...form, designation: v })}
          />
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Tier *
            </label>
            <select
              value={form.tier}
              onChange={(e) => setForm({ ...form, tier: e.target.value as MemberTier })}
              className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
            >
              {(Object.keys(tierMeta) as MemberTier[]).map((t) => (
                <option key={t} value={t}>
                  {tierMeta[t].label}
                </option>
              ))}
            </select>
          </div>
          <InputField
            label="Domain"
            value={form.domain}
            onChange={(v) => setForm({ ...form, domain: v })}
          />
          <InputField
            label="Branch"
            value={form.branch}
            onChange={(v) => setForm({ ...form, branch: v })}
          />
          <div className="space-y-2 md:col-span-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Bio
            </label>
            <textarea
              value={form.bio}
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
              rows={2}
              className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all resize-y"
            />
          </div>
          <InputField
            label="Photo URL"
            value={form.photo}
            onChange={(v) => setForm({ ...form, photo: v })}
            placeholder="https://..."
          />
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Club
            </label>
            <select
              value={form.club || "TFC"}
              onChange={(e) => setForm({ ...form, club: e.target.value as "TFC" | "Esports" })}
              className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
            >
              <option value="TFC">TFC</option>
              <option value="Esports">Esports</option>
            </select>
          </div>
          <InputField
            label="LinkedIn URL"
            value={form.socials?.linkedin || ""}
            onChange={(v) => setForm({ ...form, socials: { ...form.socials, linkedin: v } })}
          />
          <InputField
            label="GitHub URL"
            value={form.socials?.github || ""}
            onChange={(v) => setForm({ ...form, socials: { ...form.socials, github: v } })}
          />
          <InputField
            label="Instagram URL"
            value={form.socials?.instagram || ""}
            onChange={(v) => setForm({ ...form, socials: { ...form.socials, instagram: v } })}
          />
        </div>
        <div className="mt-8 flex justify-end gap-4 border-t border-border/50 pt-6">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-surface transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            <Save className="size-4" /> {member ? "Update Member" : "Add Member"}
          </button>
        </div>
      </form>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  ALUMNI ADMIN
// ═══════════════════════════════════════════════════════════════════════

function AlumniAdmin() {
  const [alumni, setAlumni] = useState<(Alumnus & { id?: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingAlumnus, setEditingAlumnus] = useState<(Alumnus & { id?: string }) | null>(null);

  const fetchAlumni = async () => {
    setLoading(true);
    const data = await getAlumni();
    setAlumni(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchAlumni();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this alumnus?")) return;
    try {
      await deleteAlumnus(id);
      toast.success("Alumnus removed");
      fetchAlumni();
    } catch {
      toast.error("Failed to delete.");
    }
  };

  const handleSave = async (data: Partial<Alumnus>) => {
    try {
      if (editingAlumnus?.id) {
        await updateAlumnus(editingAlumnus.id, data);
        toast.success("Record updated");
      } else {
        await createAlumnus(data);
        toast.success("Alumnus added");
      }
      setShowForm(false);
      setEditingAlumnus(null);
      fetchAlumni();
    } catch {
      toast.error("Failed to save.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">
          Total: {alumni.length} alumni records
        </p>
        <button
          onClick={() => {
            setEditingAlumnus(null);
            setShowForm(true);
          }}
          className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 transition-all"
        >
          <Plus className="size-4" /> Add Alumnus
        </button>
      </div>

      {showForm && (
        <AlumnusForm
          alumnus={editingAlumnus}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingAlumnus(null);
          }}
        />
      )}

      <div className="bg-surface rounded-2xl border border-border overflow-hidden shadow-sm">
        <table className="w-full text-sm text-left whitespace-nowrap">
          <thead className="text-xs text-muted-foreground uppercase bg-surface/50 border-b border-border/50">
            <tr>
              <th className="px-6 py-4 font-semibold">Name</th>
              <th className="px-6 py-4 font-semibold">Course</th>
              <th className="px-6 py-4 font-semibold">Tenure</th>
              <th className="px-6 py-4 font-semibold">Post</th>
              <th className="px-6 py-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {loading ? (
              <tr>
                <td colSpan={5} className="p-0">
                  <LoadingState />
                </td>
              </tr>
            ) : alumni.length > 0 ? (
              alumni.map((a) => (
                <tr key={a.id || a.name} className="hover:bg-surface/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-surface overflow-hidden border border-border shadow-sm">
                        {a.photo ? (
                          <img src={a.photo} alt={a.name} className="size-full object-cover" />
                        ) : (
                          <div className="size-full flex items-center justify-center font-bold text-muted-foreground">
                            {a.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <span className="font-medium text-foreground">{a.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{a.course}</td>
                  <td className="px-6 py-4 font-mono text-xs">{a.tenure}</td>
                  <td className="px-6 py-4 text-muted-foreground">{a.post}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => {
                          setEditingAlumnus(a);
                          setShowForm(true);
                        }}
                        className="p-2 rounded-lg text-muted-foreground hover:bg-surface hover:text-foreground transition-colors"
                      >
                        <Edit3 className="size-4" />
                      </button>
                      {a.id && (
                        <button
                          onClick={() => handleDelete(a.id!)}
                          className="p-2 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-0">
                  <EmptyState message="No alumni records found." />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AlumnusForm({
  alumnus,
  onSave,
  onCancel,
}: {
  alumnus: (Alumnus & { id?: string }) | null;
  onSave: (data: Partial<Alumnus>) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<Partial<Alumnus>>({
    name: alumnus?.name || "",
    course: alumnus?.course || "",
    tenure: alumnus?.tenure || "",
    post: alumnus?.post || "",
    photo: alumnus?.photo || "",
    socials: alumnus?.socials || {},
  });

  return (
    <div className="bg-surface rounded-xl border border-border p-6 mb-8 animate-in fade-in slide-in-from-top-4">
      <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
        <h3 className="font-display font-bold text-xl">
          {alumnus ? "Edit Alumnus" : "Add New Alumnus"}
        </h3>
        <button
          type="button"
          onClick={onCancel}
          className="p-2 rounded-lg hover:bg-background text-muted-foreground transition-colors"
        >
          <X className="size-5" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InputField
          label="Name *"
          value={form.name}
          onChange={(v) => setForm({ ...form, name: v })}
        />
        <InputField
          label="Course"
          value={form.course}
          onChange={(v) => setForm({ ...form, course: v })}
        />
        <InputField
          label="Tenure (e.g. 2021-2025)"
          value={form.tenure}
          onChange={(v) => setForm({ ...form, tenure: v })}
        />
        <InputField
          label="Post / Role"
          value={form.post}
          onChange={(v) => setForm({ ...form, post: v })}
        />
        <InputField
          label="Photo URL"
          value={form.photo}
          onChange={(v) => setForm({ ...form, photo: v })}
        />
        <InputField
          label="LinkedIn"
          value={form.socials?.linkedin || ""}
          onChange={(v) => setForm({ ...form, socials: { ...form.socials, linkedin: v } })}
        />
      </div>
      <div className="mt-8 flex justify-end gap-4 border-t border-border/50 pt-6">
        <button
          onClick={onCancel}
          className="rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-surface transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            if (!form.name?.trim()) {
              toast.error("Name is required");
              return;
            }
            const cleanedSocials: Record<string, string> = {};
            if (form.socials) {
              for (const [k, v] of Object.entries(form.socials)) {
                if (typeof v === "string" && v.trim() !== "") {
                  cleanedSocials[k] = v.trim();
                }
              }
            }
            onSave({
              ...form,
              name: form.name.trim(),
              course: form.course?.trim() || "B.Tech CSE",
              tenure: form.tenure?.trim() || "Alumni",
              post: form.post?.trim() || "Past Member",
              photo: form.photo?.trim() || "",
              socials: cleanedSocials,
            });
          }}
          className="flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 transition-all"
        >
          <Save className="size-4" /> {alumnus ? "Update" : "Create"}
        </button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  GALLERY ADMIN
// ═══════════════════════════════════════════════════════════════════════

function GalleryAdmin() {
  const [photos, setPhotos] = useState<(GalleryPhoto & { id?: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const fetchPhotos = async () => {
    setLoading(true);
    const data = await getGalleryPhotos();
    setPhotos(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchPhotos();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this photo?")) return;
    try {
      await deleteGalleryPhoto(id);
      toast.success("Photo deleted");
      fetchPhotos();
    } catch {
      toast.error("Failed to delete.");
    }
  };

  const handleAdd = async (data: Partial<GalleryPhoto>) => {
    try {
      await createGalleryPhoto(data);
      toast.success("Photo added to gallery");
      setShowForm(false);
      fetchPhotos();
    } catch {
      toast.error("Failed to add photo.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">
          {photos.length} photos in gallery
        </p>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 transition-all"
        >
          <Plus className="size-4" /> Upload Photo
        </button>
      </div>

      {showForm && <GalleryForm onSave={handleAdd} onCancel={() => setShowForm(false)} />}

      {loading ? (
        <LoadingState />
      ) : photos.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {photos.map((p) => (
            <div
              key={p.id || p.src}
              className="group relative rounded-2xl overflow-hidden border border-border bg-surface shadow-sm"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold text-center uppercase tracking-wider">
                  {p.event}
                </p>
                <p className="text-[10px] text-muted-foreground font-mono">{p.year}</p>
                {p.id && (
                  <button
                    onClick={() => handleDelete(p.id!)}
                    className="mt-2 flex items-center gap-1.5 rounded-lg bg-destructive/10 text-destructive px-3 py-1.5 text-xs font-semibold hover:bg-destructive hover:text-destructive-foreground transition-colors"
                  >
                    <Trash2 className="size-3" /> Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState message="No photos in the gallery. Upload one to get started." />
      )}
    </div>
  );
}

function GalleryForm({
  onSave,
  onCancel,
}: {
  onSave: (data: Partial<GalleryPhoto>) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<Partial<GalleryPhoto>>({
    src: "",
    alt: "",
    event: "",
    eventSlug: "",
    year: new Date().getFullYear(),
  });

  return (
    <div className="bg-surface rounded-xl border border-border p-6 mb-8 animate-in fade-in slide-in-from-top-4">
      <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
        <h3 className="font-display font-bold text-xl">Add New Photo</h3>
        <button
          onClick={onCancel}
          className="p-2 rounded-lg hover:bg-background text-muted-foreground transition-colors"
        >
          <X className="size-5" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InputField
          label="Image URL *"
          value={form.src}
          onChange={(v) => setForm({ ...form, src: v })}
          placeholder="https://..."
        />
        <InputField
          label="Alt Text *"
          value={form.alt}
          onChange={(v) => setForm({ ...form, alt: v })}
        />
        <InputField
          label="Event Name"
          value={form.event}
          onChange={(v) => setForm({ ...form, event: v })}
        />
        <InputField
          label="Event Slug"
          value={form.eventSlug}
          onChange={(v) => setForm({ ...form, eventSlug: v })}
        />
        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Year
          </label>
          <input
            type="number"
            value={form.year}
            onChange={(e) => setForm({ ...form, year: parseInt(e.target.value) })}
            className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>
      <div className="mt-8 flex justify-end gap-4 border-t border-border/50 pt-6">
        <button
          onClick={onCancel}
          className="rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-surface transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            if (!form.src?.trim() || !form.alt?.trim()) {
              toast.error("Image URL and Alt text are required");
              return;
            }
            const parsedYear = Number(form.year) || new Date().getFullYear();
            onSave({
              ...form,
              src: form.src.trim(),
              alt: form.alt.trim(),
              event: form.event?.trim() || "Event",
              eventSlug: form.eventSlug?.trim() || "event",
              year: isNaN(parsedYear) ? new Date().getFullYear() : parsedYear,
            });
          }}
          className="flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 transition-all"
        >
          <Save className="size-4" /> Upload Photo
        </button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  ANNOUNCEMENTS ADMIN
// ═══════════════════════════════════════════════════════════════════════

function AnnouncementsAdmin() {
  const [announcements, setAnnouncements] = useState<(Announcement & { id?: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingAnnouncement, setEditingAnnouncement] = useState<
    (Announcement & { id?: string }) | null
  >(null);

  const fetchAnnouncements = async () => {
    setLoading(true);
    const data = await getAnnouncements();
    setAnnouncements(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this announcement?")) return;
    try {
      await deleteAnnouncement(id);
      toast.success("Moved to trash");
      fetchAnnouncements();
    } catch {
      toast.error("Failed to delete.");
    }
  };

  const handleSave = async (data: Partial<Announcement>) => {
    try {
      if (editingAnnouncement?.id) {
        await updateAnnouncement(editingAnnouncement.id, data);
        toast.success("Announcement updated");
      } else {
        await createAnnouncement(data);
        toast.success("Announcement posted");
      }
      setShowForm(false);
      setEditingAnnouncement(null);
      fetchAnnouncements();
    } catch {
      toast.error("Failed to save.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">
          {announcements.length} announcements
        </p>
        <button
          onClick={() => {
            setEditingAnnouncement(null);
            setShowForm(true);
          }}
          className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 transition-all"
        >
          <Megaphone className="size-4" /> New Announcement
        </button>
      </div>

      {showForm && (
        <AnnouncementForm
          announcement={editingAnnouncement}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingAnnouncement(null);
          }}
        />
      )}

      {loading ? (
        <LoadingState />
      ) : announcements.length > 0 ? (
        <div className="space-y-4">
          {announcements.map((a) => (
            <div
              key={a.id || a.title}
              className="bg-surface rounded-2xl border border-border p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-primary/30 transition-colors group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="font-display font-bold text-lg">{a.title}</h3>
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] uppercase font-mono tracking-widest border ${a.published ? "text-green-500 border-green-500/30 bg-green-500/10" : "text-yellow-500 border-yellow-500/30 bg-yellow-500/10"}`}
                  >
                    {a.published ? "Published" : "Draft"}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-3">
                  <Calendar className="size-3" /> {a.date}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.summary}</p>
              </div>
              <div className="flex gap-2 shrink-0 md:opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => {
                    setEditingAnnouncement(a);
                    setShowForm(true);
                  }}
                  className="p-3 rounded-xl bg-surface hover:bg-surface-strong hover:text-primary transition-colors border border-border"
                >
                  <Edit3 className="size-4" />
                </button>
                {a.id && (
                  <button
                    onClick={() => handleDelete(a.id!)}
                    className="p-3 rounded-xl bg-surface hover:bg-destructive/10 hover:text-destructive transition-colors border border-border"
                  >
                    <Trash2 className="size-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState message="No announcements yet. Create one to inform the club." />
      )}
    </div>
  );
}

function AnnouncementForm({
  announcement,
  onSave,
  onCancel,
}: {
  announcement: (Announcement & { id?: string }) | null;
  onSave: (data: Partial<Announcement>) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<Partial<Announcement>>({
    title: (announcement?.title || "") as string,
    date: (announcement?.date || new Date().toISOString().split("T")[0]) as string,
    summary: announcement?.summary || "",
    content: announcement?.content || "",
    image: announcement?.image || "",
    link: announcement?.link || "",
    published: announcement?.published ?? false,
  });

  return (
    <div className="bg-surface rounded-xl border border-border p-6 mb-8 animate-in fade-in slide-in-from-top-4">
      <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
        <h3 className="font-display font-bold text-xl">
          {announcement ? "Edit Announcement" : "New Announcement"}
        </h3>
        <button
          type="button"
          onClick={onCancel}
          className="p-2 rounded-lg hover:bg-background text-muted-foreground transition-colors"
        >
          <X className="size-5" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2 md:col-span-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Title *
          </label>
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Date *
          </label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
          />
        </div>
        <InputField
          label="Link (optional)"
          value={form.link}
          onChange={(v) => setForm({ ...form, link: v })}
        />
        <div className="space-y-2 md:col-span-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Summary *
          </label>
          <textarea
            value={form.summary}
            onChange={(e) => setForm({ ...form, summary: e.target.value })}
            rows={2}
            className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all resize-y"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Full Content (Supports Markdown/Text)
          </label>
          <textarea
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            rows={5}
            className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all resize-y"
          />
        </div>
        <div className="md:col-span-2">
          <InputField
            label="Image URL (optional)"
            value={form.image}
            onChange={(v) => setForm({ ...form, image: v })}
          />
        </div>
        <div className="flex items-center md:col-span-2 pt-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={form.published}
              onChange={(e) => setForm({ ...form, published: e.target.checked })}
            />
            <div className="w-11 h-6 bg-surface-strong peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            <span className="ml-3 text-sm font-medium text-foreground">Publish immediately</span>
          </label>
        </div>
      </div>
      <div className="mt-8 flex justify-end gap-4 border-t border-border/50 pt-6">
        <button
          onClick={onCancel}
          className="rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-surface transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            if (!form.title?.trim() || !form.date || !form.summary?.trim()) {
              toast.error("Title, Date, and Summary are required");
              return;
            }
            onSave({
              ...form,
              title: form.title.trim(),
              summary: form.summary.trim(),
              content: form.content?.trim() || "",
              image: form.image?.trim() || "",
              link: form.link?.trim() || "",
              published: Boolean(form.published),
            });
          }}
          className="flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 transition-all"
        >
          <Save className="size-4" /> {announcement ? "Update" : "Post Announcement"}
        </button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  TRASH ADMIN
// ═══════════════════════════════════════════════════════════════════════

function TrashAdmin() {
  const [items, setItems] = useState<TrashItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTrash = async () => {
    setLoading(true);
    const data = await getTrashItems();
    setItems(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTrash();
  }, []);

  const handleRestore = async (id: string) => {
    try {
      await restoreTrashItem(id);
      toast.success("Item restored successfully");
      fetchTrash();
    } catch {
      toast.error("Failed to restore item");
    }
  };

  const handlePermanentDelete = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this item?")) return;
    try {
      await deleteTrashItemPermanently(id);
      toast.success("Item permanently deleted");
      fetchTrash();
    } catch {
      toast.error("Failed to delete item");
    }
  };

  if (loading) return <LoadingState />;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">
          Items in trash will be permanently deleted after 100 hours.
        </p>
      </div>

      <div className="bg-surface rounded-xl border border-border overflow-hidden shadow-sm">
        <table className="w-full text-sm text-left whitespace-nowrap">
          <thead className="text-xs text-muted-foreground uppercase bg-background border-b border-border">
            <tr>
              <th className="px-6 py-4 font-semibold">Item Details</th>
              <th className="px-6 py-4 font-semibold">Collection</th>
              <th className="px-6 py-4 font-semibold">Time Remaining</th>
              <th className="px-6 py-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {items.length > 0 ? (
              items.map((item) => {
                const msLeft = item.expiresAt - Date.now();
                const hoursLeft = Math.max(0, Math.floor(msLeft / (1000 * 60 * 60)));
                const itemLabel = String(
                  item.data?.["title"] ||
                    item.data?.["name"] ||
                    item.data?.["headline"] ||
                    item.originalId,
                );

                return (
                  <tr key={item.id} className="hover:bg-surface-strong transition-colors group">
                    <td className="px-6 py-4 font-medium">{itemLabel}</td>
                    <td className="px-6 py-4 font-mono text-xs uppercase text-muted-foreground">
                      {item.originalCollection}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold ${hoursLeft < 24 ? "bg-destructive/10 text-destructive border border-destructive/20" : "bg-surface border border-border"}`}
                      >
                        {hoursLeft} hours left
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleRestore(item.id)}
                          className="p-2 rounded-lg text-emerald-500 hover:bg-emerald-500/10 transition-colors"
                          title="Restore"
                        >
                          <RotateCcw className="size-4" />
                        </button>
                        <button
                          onClick={() => handlePermanentDelete(item.id)}
                          className="p-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors"
                          title="Delete Permanently"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={4} className="p-0">
                  <EmptyState message="Trash is empty." />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  SHARED COMPONENTS
// ═══════════════════════════════════════════════════════════════════════

function InputField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value?: string | undefined;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        {label}
      </label>
      <input
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border/50 bg-surface/50 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
      />
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    upcoming: "text-blue-500 border-blue-500/30 bg-blue-500/10",
    completed: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
    draft: "text-muted-foreground border-border bg-surface",
  };
  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider ${colors[status] || colors["draft"]}`}
    >
      {status}
    </span>
  );
}

function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-muted-foreground">
      <Loader2 className="size-8 animate-spin mb-4 text-primary/50" />
      <p className="text-sm font-mono uppercase tracking-widest">Loading Data...</p>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-16 text-center border-t border-border/30">
      <div className="size-16 rounded-2xl bg-surface flex items-center justify-center mb-4 border border-border/50">
        <AlertCircle className="size-8 text-muted-foreground/50" />
      </div>
      <h3 className="font-display font-semibold text-lg mb-1">No Data Found</h3>
      <p className="text-muted-foreground text-sm max-w-sm">{message}</p>
    </div>
  );
}

// import { useMemo, useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import {
//   Bars3Icon,
//   XMarkIcon,
//   CalendarDaysIcon,
//   PhotoIcon,
//   ClipboardDocumentListIcon,
//   Cog6ToothIcon,
// } from "@heroicons/react/24/outline";

// type Item = { to: string; label: string; icon: any };

// function SideLink({
//   to,
//   label,
//   Icon,
// }: {
//   to: string;
//   label: string;
//   Icon: any;
// }) {
//   return (
//     <NavLink
//       to={to}
//       end
//       className={({ isActive }) =>
//         [
//           "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
//           "text-white/80 hover:text-white hover:bg-white/10",
//           isActive ? "bg-white/15 text-white ring-1 ring-white/15" : "",
//         ].join(" ")
//       }
//     >
//       <Icon className="h-5 w-5 text-white/70 group-hover:text-white" />
//       <span>{label}</span>
//     </NavLink>
//   );
// }

// function Sidebar({
//   items,
//   onNavigate,
// }: {
//   items: Item[];
//   onNavigate?: () => void;
// }) {
//   return (
//     <aside className="h-full w-72 border-r border-white/10 bg-black px-4 py-5">
//       <div className="mb-6">
//         <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
//           Earth Angels of Finland
//         </p>
//         <h2 className="text-base font-semibold text-white">Admin Dashboard</h2>
//       </div>

//       <nav className="space-y-1">
//         {items.map((it) => (
//           <div key={it.to} onClick={onNavigate}>
//             <SideLink to={it.to} label={it.label} Icon={it.icon} />
//           </div>
//         ))}
//       </nav>

//       <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-white/70">
//         Upload path: <span className="font-semibold text-white">public/</span>
//       </div>
//     </aside>
//   );
// }

// export default function AdminLayout() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const items: Item[] = useMemo(
//     () => [
//       { to: "/admin/events", label: "Events", icon: CalendarDaysIcon },
//       { to: "/admin/media", label: "Gallery", icon: PhotoIcon },
//       { to: "/admin/rsvps", label: "RSVPs", icon: ClipboardDocumentListIcon },
//       { to: "/admin/settings", label: "Settings", icon: Cog6ToothIcon },
//     ],
//     []
//   );

//   return (
//     <div className="min-h-dvh bg-black text-white">
//       {/* Top bar */}
//       <header className="sticky top-0 z-40 border-b border-white/10 bg-black">
//         <div className="flex h-14 items-center justify-between px-4">
//           <div className="flex items-center gap-3">
//             <button
//               className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10 lg:hidden"
//               onClick={() => setMobileOpen(true)}
//               aria-label="Open menu"
//             >
//               <Bars3Icon className="h-5 w-5" />
//             </button>

//             <div className="h-8 w-8 rounded-lg bg-white" />
//             <div className="leading-tight">
//               <p className="text-sm font-semibold">Admin</p>
//               <p className="text-xs text-white/60">Manage content</p>
//             </div>
//           </div>

//           <a
//             href="/"
//             className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
//           >
//             View site
//           </a>
//         </div>
//       </header>

//       {/* Mobile overlay + drawer */}
//       {mobileOpen && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <div
//             className="absolute inset-0 bg-black/70"
//             onClick={() => setMobileOpen(false)}
//           />
//           <div className="absolute left-0 top-0 h-full">
//             <div className="flex items-center justify-between border-b border-white/10 bg-black px-4 py-3">
//               <p className="text-sm font-semibold">Menu</p>
//               <button
//                 className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10"
//                 onClick={() => setMobileOpen(false)}
//                 aria-label="Close menu"
//               >
//                 <XMarkIcon className="h-5 w-5" />
//               </button>
//             </div>
//             <Sidebar items={items} onNavigate={() => setMobileOpen(false)} />
//           </div>
//         </div>
//       )}

//       {/* Full width shell */}
//       <div className="flex min-h-[calc(100dvh-3.5rem)]">
//         {/* Desktop sidebar */}
//         <div className="hidden lg:block">
//           <Sidebar items={items} />
//         </div>

//         {/* Content */}
//         <main className="flex-1 p-5">
//           <div className="rounded-xl border border-white/10 bg-white/5">
//             <div className="border-b border-white/10 px-5 py-4">
//               <h1 className="text-base font-semibold">Dashboard</h1>
//               <p className="text-sm text-white/60">Events, media, and RSVPs</p>
//             </div>
//             <div className="p-5">
//               <Outlet />
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

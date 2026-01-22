// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../lib/firebase";
// import { useNavigate } from "react-router-dom";

// export default function AdminLogin() {
//   const nav = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     const fd = new FormData(e.currentTarget);
//     const email = String(fd.get("email") || "").trim();
//     const password = String(fd.get("password") || "");

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       nav("/upload-test"); // temporary: go to upload test after login
//     } catch (err: any) {
//       setError(err?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="mx-auto max-w-md p-6 space-y-4">
//       <h1 className="text-2xl font-bold">Admin login</h1>
//       <form onSubmit={onSubmit} className="space-y-3">
//         <input
//           name="email"
//           placeholder="Email"
//           className="w-full rounded-xl border px-4 py-3 dark:bg-slate-900"
//         />
//         <input
//           name="password"
//           placeholder="Password"
//           type="password"
//           className="w-full rounded-xl border px-4 py-3 dark:bg-slate-900"
//         />
//         <button
//           disabled={loading}
//           className="w-full rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white disabled:opacity-60"
//         >
//           {loading ? "Signing in..." : "Sign in"}
//         </button>
//         {error && <p className="text-sm text-rose-600">{error}</p>}
//       </form>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../lib/firebase";
import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function UploadTest() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [url, setUrl] = useState("");
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setIsAuthed(!!user);
    });
  }, []);

  const [status, setStatus] = useState<"idle" | "uploading" | "done" | "error">(
    "idle"
  );

  async function onPickFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setStatus("uploading");
    setUrl("");

    try {
      const fileRef = ref(
        storage,
        `public/test-uploads/${Date.now()}-${file.name}`
      );

      const snap = await uploadBytes(fileRef, file);
      const downloadUrl = await getDownloadURL(snap.ref);
      setUrl(downloadUrl);
      setStatus("done");
    } catch (err) {
      setStatus("error");
    }
  }

  if (!isAuthed) {
    return (
      <div className="p-6 max-w-xl mx-auto space-y-3">
        <h1 className="text-2xl font-bold">Storage upload test</h1>
        <p>You must log in as admin to upload.</p>
        <a className="underline" href="/admin/login">
          Go to admin login
        </a>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Storage upload test</h1>
      <input type="file" accept="image/*" onChange={onPickFile} />
      {status === "uploading" && <p>Uploading...</p>}
      {status === "done" && (
        <div className="space-y-2">
          <p>Uploaded! Download URL:</p>
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
          <img src={url} alt="Uploaded" className="rounded-xl border mt-2" />
        </div>
      )}
      {status === "error" && (
        <p className="text-red-600">Upload failed (rules or config).</p>
      )}
    </div>
  );
}

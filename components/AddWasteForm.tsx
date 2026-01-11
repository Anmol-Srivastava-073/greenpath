"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AddWasteForm() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!file) return alert("Please upload an image");

    setLoading(true);

    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      const fileName = `${Date.now()}-${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("waste-images")
        .upload(fileName, file);

      if (uploadError) {
        alert("Upload failed");
        setLoading(false);
        return;
      }

      const imageUrl = supabase.storage
        .from("waste-images")
        .getPublicUrl(fileName).data.publicUrl;

      await supabase.from("waste_reports").insert({
        image_url: imageUrl,
        waste_type: "unknown",
        bin_type: "unknown",
        latitude,
        longitude,
      });

      alert("Waste report submitted!");
      setLoading(false);
    });
  }

  return (
    <div style={{ marginTop: 20 }}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{ marginLeft: 10 }}
      >
        {loading ? "Uploading..." : "Submit Waste"}
      </button>
    </div>
  );
}

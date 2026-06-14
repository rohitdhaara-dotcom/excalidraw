"use client";
import dynamic from "next/dynamic";

// Dynamically import Excalidraw and force Next.js to skip Server-Side Rendering
const Excalidraw = dynamic(
  () => import("@excalidraw/excalidraw").then((mod) => mod.Excalidraw),
  { ssr: false }
);

export default function ExcalidrawWrapper() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Excalidraw />
    </div>
  );
}

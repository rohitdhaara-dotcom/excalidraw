"use client";
import { Excalidraw } from "@excalidraw/excalidraw";

export default function ExcalidrawWrapper() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Excalidraw 
        initialData={{
          appState: { viewBackgroundColor: "#ffffff" },
        }} 
      />
    </div>
  );
}

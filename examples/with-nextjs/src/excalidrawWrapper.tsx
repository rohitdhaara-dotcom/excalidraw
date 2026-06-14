"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import Excalidraw and force Next.js to skip Server-Side Rendering
const Excalidraw = dynamic(
  () => import("@excalidraw/excalidraw").then((mod) => mod.Excalidraw),
  { ssr: false }
);

export default function ExcalidrawWrapper() {
  const [theme, setTheme] = useState("light");

  return (
    <div 
      style={{ 
        height: "100vh", 
        width: "100%", 
        backgroundColor: theme === "dark" ? "#121212" : "#ffffff",
      }}
    >
      <Excalidraw 
        // We removed the theme={theme} prop here! 
        // This forces Excalidraw to show its built-in dark mode toggle.
        onChange={(elements, appState) => {
          // We just listen to the canvas to update our wrapper's background
          if (appState.theme !== theme) {
            setTheme(appState.theme);
          }
        }}
      />
    </div>
  );
}

"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import Excalidraw (ssr: false is crucial here)
const Excalidraw = dynamic(
  () => import("@excalidraw/excalidraw").then((mod) => mod.Excalidraw),
  { ssr: false }
);

export default function ExcalidrawWrapper() {
  // 1. Create a state to track the current theme
  const [theme, setTheme] = useState("light");

  return (
    // 2. Force the wrapper background to match the theme so Next.js doesn't override it
    <div 
      style={{ 
        height: "100vh", 
        width: "100%", 
        backgroundColor: theme === "dark" ? "#121212" : "#ffffff",
      }}
    >
      <Excalidraw 
        theme={theme}
        // 3. Listen for clicks on the Dark Mode button in the hamburger menu
        onChange={(elements, appState) => {
          if (appState.theme !== theme) {
            setTheme(appState.theme);
          }
        }}
      />
    </div>
  );
}

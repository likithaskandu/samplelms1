"use client";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css"; // Ensure global styles are imported

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // 🛑 Disable Right-Click
    const disableRightClick = (event: MouseEvent) => event.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    // 🚫 Block Screenshots & DevTools
    const disableShortcuts = (event: KeyboardEvent) => {
      if (
        event.key === "PrintScreen" || // Screenshot
        event.key === "F12" || // DevTools
        (event.ctrlKey && event.shiftKey && ["I", "C", "J"].includes(event.key)) || // Inspect Element
        (event.ctrlKey && event.key === "U") // View Source Code
      ) {
        event.preventDefault();
        alert("Action not allowed! 🚫");
      }
    };
    document.addEventListener("keydown", disableShortcuts);

    // 📹 Screen Recording Detection (Temporarily Disabled)
    // const detectRecording = () => {
    //   let start = performance.now();
    //   requestAnimationFrame(() => {
    //     let end = performance.now();
    //     let fps = 1000 / (end - start);
    //     if (fps < 10) {
    //       alert("Screen recording detected! Please stop recording.");
    //       window.location.reload();
    //     }
    //   });
    // };
    // const recordingCheck = setInterval(detectRecording, 2000);

    // 🖥️ Blur Screen on Tab Change
    const handleVisibilityChange = () => {
      document.body.style.filter = document.hidden ? "blur(10px)" : "none";
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // 🧹 Cleanup Listeners
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableShortcuts);
      // clearInterval(recordingCheck); // No need since it's disabled
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return <Component {...pageProps} />;
}

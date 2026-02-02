"use client";
import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const startMusic = () => {
      if (audioRef.current && !playing) {
        audioRef.current.volume = 0.25;
        audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
      }
      document.removeEventListener("click", startMusic);
    };

    document.addEventListener("click", startMusic);
    return () => document.removeEventListener("click", startMusic);
  }, [playing]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop />
      <button onClick={toggleMusic} style={btnStyle}>
        {playing ? "🔊 Music" : "🔇 Mute"}
      </button>
    </>
  );
}

const btnStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "8px 14px",
  borderRadius: "20px",
  border: "none",
  background: "#ff69b4",
  color: "white",
  cursor: "pointer",
  zIndex: 9999
};


import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";


interface Props {
  active: boolean;
}

const MusicToggle = ({ active }: Props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!active) return;
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.55;
    audio.loop = true;
    audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, [active]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  if (!active) return null;

  return (
    <>
       <audio ref={audioRef} src="/shim2t.m4a" preload="auto" />
      <button
        onClick={toggle}
        aria-label={playing ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
        className="fixed bottom-4 left-4 z-50 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all hover:scale-110"
        style={{
  background: "rgba(255,255,255,.88)",
  border: "1.5px solid rgba(75,39,55,.18)",
  boxShadow: "0 6px 18px rgba(75,39,55,.12)",
}}
      >
        {playing ? (
          <Volume2 className="w-5 h-5" style={{ color: "#6E4658" }} />
        ) : (
          <VolumeX className="w-5 h-5" style={{ color: "#6E4658" }} />
        )}
      </button>
    </>
  );
};

export default MusicToggle;

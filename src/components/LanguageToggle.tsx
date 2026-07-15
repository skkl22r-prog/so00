import { useLang } from "@/i18n/LanguageContext";

const LanguageToggle = () => {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className="fixed top-4 right-4 z-50 px-3 py-1.5 rounded-full text-sm font-semibold tracking-wide backdrop-blur-md transition-all hover:scale-105"
      style={{
  background: "rgba(255,255,255,.88)",
  border: "1.5px solid rgba(75,39,55,.18)",
  color: "#6E4658",
  boxShadow: "0 6px 18px rgba(75,39,55,.12)",
  fontFamily: "'Tajawal', sans-serif",
}}
    >
      {lang === "ar" ? "EN | ع" : "AR | A"}
    </button>
  );
};

export default LanguageToggle;

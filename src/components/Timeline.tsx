import Reveal from "./Reveal";
import { useLang } from "@/i18n/LanguageContext";

const Timeline = () => {
  const { t } = useLang();
  const events = [
    { time: "8:00 PM", label: t("program_reception") },
  ];

  return (
    <div className="relative max-w-2xl mx-auto py-8">
      <div
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px"
style={{ background: "#6E4658" }}
      />
      <div className="space-y-16">
        {events.map((e, i) => (
          <Reveal key={i} delay={i * 150}>
            <div className="relative flex items-center justify-center">
              <div
                className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full z-10"
                style={{
                  background: "#F8F2ED",
border: "2px solid #6E4658",
boxShadow: "0 0 0 6px rgba(110, 70, 88, 0.15)",
                }}
              />
              <div className="grid grid-cols-2 w-full gap-8">
              <div
  className="pl-10 font-display text-2xl"
  dir="ltr"
  style={{ color: "#6E4658", textAlign: "left" }}
>
  {e.time}
</div>
<div
  className="text-right pr-10 font-tajawal text-2xl w-full"
style={{ color: "#4B2737" }}
>
                  {e.label}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

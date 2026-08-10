import { useEffect, useState } from "react";

function toFa(num) {
  return String(num).padStart(2, "0").toLocaleString?.("fa-IR") ?? num;
}

function getTimeLeft(targetDate) {
  const diff = +new Date(targetDate) - +new Date();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    ended: false,
  };
}

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const UNITS = [
  { value: timeLeft.seconds, label: "ثانیه" },
  { value: timeLeft.minutes, label: "دقیقه" },
  { value: timeLeft.hours, label: "ساعت" },
  { value: timeLeft.days, label: "روز" },
];

  if (timeLeft.ended) {
    return (
      <p className="text-sm font-bold text-neutral-400">تخفیف به پایان رسید</p>
    );
  }

  return (
    <div className="flex gap-1.5 sm:gap-2">
      {UNITS.map((u) => (
        <div key={u.label} className="text-center">
          <div
            key={u.value}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-orange-300 flex items-center justify-center font-bold text-sm sm:text-base bg-white/50 backdrop-blur-sm animate-pulseOnce"
          >
            {String(u.value).padStart(2, "0").toLocaleString("fa-IR")}
          </div>
          <p className="text-[8px] sm:text-[10px] mt-1 text-neutral-500">
            {u.label}
          </p>
        </div>
      ))}
    </div>
  );
}
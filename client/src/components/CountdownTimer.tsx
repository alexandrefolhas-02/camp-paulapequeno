/**
 * CountdownTimer — Contagem regressiva para o evento
 * Design: Blocos dourados com números grandes estilo arena
 */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const EVENT_DATE = new Date("2026-07-24T08:00:00-03:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const now = new Date();
  const diff = EVENT_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-[#0D0D0D] border border-[#DAA520]/30 shadow-lg shadow-[#DAA520]/5">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#DAA520]/50" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#DAA520]/50" />
        <span className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#DAA520] font-bold">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-2 font-display text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/40">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const isEventStarted = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  if (isEventStarted) {
    return (
      <div className="text-center">
        <p className="font-display text-xl sm:text-2xl uppercase tracking-wider text-[#DAA520]">
          O evento começou!
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4 }}
      className="flex flex-col items-center"
    >
      <p className="font-display text-xs uppercase tracking-[0.25em] text-white/50 mb-4">
        O camp começa em
      </p>
      <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
        <TimeBlock value={timeLeft.days} label="Dias" />
        <span className="font-display text-xl sm:text-2xl text-[#DAA520]/50 mt-[-1.5rem]">:</span>
        <TimeBlock value={timeLeft.hours} label="Horas" />
        <span className="font-display text-xl sm:text-2xl text-[#DAA520]/50 mt-[-1.5rem]">:</span>
        <TimeBlock value={timeLeft.minutes} label="Min" />
        <span className="font-display text-xl sm:text-2xl text-[#DAA520]/50 mt-[-1.5rem]">:</span>
        <TimeBlock value={timeLeft.seconds} label="Seg" />
      </div>
    </motion.div>
  );
}

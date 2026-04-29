import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{background: "linear-gradient(135deg, rgba(255,80,180,0.55) 0%, rgba(120,60,220,0.45) 50%, rgba(255,200,0,0.35) 100%)"}} />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-widest text-sm md:text-base opacity-80 mb-4">Фотостудия · Аренда по часам</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          Я В КАДРЕ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8">
          Твоя площадка для съёмки — от 13 лет. Профессиональный свет, сменные фоны, душевная атмосфера.
        </p>
        <a
          href="#booking"
          className="inline-block px-8 py-3 uppercase tracking-wide text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
          style={{background: "linear-gradient(90deg, #e040fb, #ff6ec7, #ffd600)", backgroundSize: "200%"}}
        >
          Забронировать
        </a>
      </div>
    </div>
  );
}
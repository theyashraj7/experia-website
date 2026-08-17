import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import CuriositySearch from "@/components/CuriositySearch";
import { LiveDot } from "@/components/atoms";
import { IMAGES, EXPERTS } from "@/data/mockData";

const LINES = ["You've seen the world.", "You haven't seen", "how it works."];

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  const avatars = [EXPERTS[0], EXPERTS[1], EXPERTS[2], EXPERTS[4]];

  return (
    <section ref={ref} className="relative min-h-[100svh] w-full overflow-hidden bg-[#0A0A0A]">
      {/* Cinematic background */}
      <motion.div
        style={reduce ? {} : { y: imgY, scale: imgScale }}
        className="absolute inset-0 h-full w-full"
      >
        <img
          src={IMAGES.heroCockpit}
          alt="Inside an airliner cockpit at dusk"
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>
      <motion.div
        style={reduce ? {} : { opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      <div className="noise opacity-[0.06]" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-28 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="max-w-3xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 backdrop-blur"
          >
            <LiveDot />
            <span className="font-accent text-xs tracking-wide text-white/80">247 watching · Inside Indian Aviation</span>
          </motion.div>

          <h1 className="font-serif text-[2.7rem] font-medium leading-[0.95] tracking-tight text-white text-shadow-cinematic sm:text-6xl lg:text-[5.5rem]">
            {LINES.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                >
                  {i === 2 ? <em className="font-display italic text-white/90">{line}</em> : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Behind every aircraft, hospital, factory, stock exchange, satellite and startup is someone
            who knows what really happens. <span className="font-semibold text-white">Ask them. Live.</span>
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-8 max-w-xl"
          >
            <CuriositySearch onDark />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              to="/live"
              data-testid="hero-cta-live"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-accent text-sm font-bold text-black transition-transform hover:-translate-y-0.5"
            >
              Explore what's happening live
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/experts"
              data-testid="hero-cta-experts"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-accent text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Meet the people behind the answers
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mt-9 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {avatars.map((a) => (
                <img
                  key={a.slug}
                  src={a.image}
                  alt=""
                  loading="lazy"
                  className="h-9 w-9 rounded-full border-2 border-black/40 object-cover"
                />
              ))}
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Users className="h-4 w-4" />
              <span className="text-sm">18,427+ curious minds exploring real experience</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Integrated live overlay */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.1 }}
        className="pointer-events-auto absolute bottom-24 right-4 z-10 hidden w-[320px] lg:bottom-10 lg:right-8 xl:block"
      >
        <Link
          to="/conversations/inside-indian-aviation"
          data-testid="hero-live-overlay"
          className="group block overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-1.5 backdrop-blur-xl transition-transform hover:-translate-y-1"
        >
          <div className="relative overflow-hidden rounded-xl">
            <img src={IMAGES.aviation} alt="Inside Indian Aviation" loading="lazy" className="h-36 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-black/50 px-2.5 py-1 backdrop-blur">
              <LiveDot />
              <span className="font-accent text-[0.65rem] font-semibold text-white">247 watching</span>
            </div>
          </div>
          <div className="p-3.5 text-white">
            <p className="font-serif text-lg leading-tight">Inside Indian Aviation</p>
            <p className="text-xs text-white/60">30 Years in the Industry</p>
            <div className="mt-3 flex items-center gap-3 border-t border-white/10 pt-3">
              <img src={EXPERTS[0].image} alt="" className="h-9 w-9 rounded-full object-cover" />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">Rahul Mehta</p>
                <p className="truncate text-[0.7rem] text-white/60">Former Airline Ops Director · 28 yrs</p>
              </div>
            </div>
            <span className="mt-3 flex items-center gap-1.5 font-accent text-xs font-bold text-white">
              Join conversation
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const rooms = [
  {
    id: "living-room",
    name: "living room",
    line: "The good world starts here.",
    detail:
      "A living room at golden hour. The window is open just enough for the garden to breathe into the house.",
    scent: "warm wood · linen · sunlight",
  },
  {
    id: "kitchen",
    name: "kitchen",
    line: "Bread cools where the manifesto rests.",
    detail:
      "Not framed. Not announced. Just pages on the table, written by hand, weighted by a small bowl of apricots.",
    scent: "bread · butter · basil",
  },
  {
    id: "table",
    name: "table",
    line: "A meal just happened here.",
    detail:
      "There are crumbs, two cups still warm, and the soft evidence that nobody was rushing to leave.",
    scent: "tea · honey · citrus peel",
  },
  {
    id: "study",
    name: "study",
    line: "Someone is writing by hand.",
    detail:
      "The lamp is low. The page is patient. A pencil waits beside a sentence that is almost ready to become true.",
    scent: "paper · cedar · rain in the distance",
  },
  {
    id: "hall",
    name: "hall",
    line: "At the end, a door is left slightly open.",
    detail:
      "No call to action. No capture form. Just a seam of light on the floor and the feeling that building can be gentle.",
    scent: "night jasmine · clean air · threshold",
  },
];

function Grain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.08] mix-blend-multiply"
      style={{
        backgroundImage:
          "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.75\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
      }}
    />
  );
}

function WindowLight() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2.2, ease: "easeOut" }}
      className="absolute right-[8vw] top-[10vh] hidden h-[46vh] w-[24vw] overflow-hidden rounded-t-[999px] rounded-b-3xl border border-amber-100/40 bg-amber-50/20 shadow-[0_0_120px_rgba(251,191,36,0.25)] md:block"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/60 via-amber-200/20 to-transparent" />
      <div className="absolute bottom-0 h-1/3 w-full bg-gradient-to-t from-green-900/25 to-transparent" />
      <div className="absolute bottom-[14%] left-[15%] h-20 w-28 rounded-full bg-green-700/20 blur-xl" />
      <div className="absolute bottom-[18%] right-[12%] h-28 w-20 rounded-full bg-emerald-900/20 blur-lg" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-amber-950/10" />
      <div className="absolute left-0 top-1/2 h-px w-full bg-amber-950/10" />
    </motion.div>
  );
}

function RoomObject({ roomId }: { roomId: string }) {
  const common = "absolute hidden md:block";

  if (roomId === "living-room") {
    return (
      <div aria-hidden="true" className={`${common} bottom-[12vh] left-[8vw]`}>
        <div className="h-24 w-64 rounded-[2rem] bg-stone-800/15 shadow-2xl" />
        <div className="-mt-8 ml-10 h-20 w-48 rounded-t-[3rem] bg-stone-700/10" />
      </div>
    );
  }

  if (roomId === "kitchen") {
    return (
      <div aria-hidden="true" className={`${common} bottom-[17vh] left-1/2 -translate-x-1/2`}>
        <div className="h-5 w-96 rounded-full bg-amber-950/25 shadow-2xl" />
        <div className="mx-auto mt-2 h-20 w-[22rem] rounded-b-[2.5rem] bg-amber-900/10" />
        <div className="absolute -top-20 left-20 rotate-[-5deg] rounded-lg bg-[#fff7df] p-5 shadow-xl">
          <p className="font-serif text-2xl italic tracking-wide text-stone-700">we build<br />what heals</p>
        </div>
        <div className="absolute -top-10 right-20 h-10 w-24 rounded-full bg-amber-700/30 blur-sm" />
      </div>
    );
  }

  if (roomId === "table") {
    return (
      <div aria-hidden="true" className={`${common} bottom-[14vh] right-[11vw]`}>
        <div className="h-4 w-80 rounded-full bg-stone-900/20" />
        <div className="mt-5 flex gap-8 pl-10">
          <div className="h-14 w-10 rounded-b-xl rounded-t-sm border border-stone-800/20 bg-white/20" />
          <div className="h-10 w-10 rounded-full border border-stone-800/20 bg-white/10" />
          <div className="h-12 w-12 rounded-full border border-stone-800/10 bg-amber-700/15" />
        </div>
      </div>
    );
  }

  if (roomId === "study") {
    return (
      <div aria-hidden="true" className={`${common} bottom-[13vh] left-[13vw]`}>
        <div className="h-52 w-40 rounded-t-full bg-amber-200/15 shadow-[0_0_80px_rgba(251,191,36,0.25)]" />
        <div className="mx-auto h-40 w-px bg-stone-900/20" />
        <div className="-mt-2 h-3 w-32 rounded-full bg-stone-900/20" />
        <div className="absolute bottom-7 left-36 rotate-3 rounded-md bg-[#f5ebd2] px-10 py-7 shadow-xl" />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={`${common} bottom-[9vh] left-1/2 -translate-x-1/2`}>
      <motion.div
        initial={{ rotateY: 0 }}
        whileInView={{ rotateY: -13 }}
        viewport={{ once: false, amount: 0.7 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="relative h-[28rem] w-48 origin-left rounded-r-2xl bg-gradient-to-r from-amber-950/30 to-amber-800/10 shadow-2xl"
      >
        <div className="absolute right-5 top-1/2 h-3 w-3 rounded-full bg-amber-100/70" />
      </motion.div>
      <div className="absolute left-36 top-0 h-[28rem] w-28 bg-gradient-to-r from-yellow-100/35 to-transparent blur-xl" />
      <div className="absolute left-40 top-[40%] h-24 w-72 bg-yellow-100/25 blur-2xl" />
    </div>
  );
}

function Room({ room, index }: { room: (typeof rooms)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.15, 1, 1, 0.15]);

  return (
    <section
      ref={ref}
      id={room.id}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24"
    >
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-3xl text-center">
        {index === 0 ? (
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.4 }}
            className="font-serif text-5xl leading-tight tracking-[-0.04em] text-stone-900 md:text-7xl"
          >
            {room.line}
          </motion.h1>
        ) : (
          <h2 className="font-serif text-4xl leading-tight tracking-[-0.035em] text-stone-900 md:text-6xl">
            {room.line}
          </h2>
        )}
        <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-stone-700 md:text-xl">{room.detail}</p>
        <p className="mt-8 text-xs uppercase tracking-[0.45em] text-stone-500">{room.name}</p>
        <p className="mt-3 font-serif text-sm italic tracking-wide text-stone-500">{room.scent}</p>
      </motion.div>
      <RoomObject roomId={room.id} />
    </section>
  );
}

function EmberTrail() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (event: MouseEvent) => setPos({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-40 hidden h-40 w-40 rounded-full bg-amber-200/20 blur-3xl md:block"
      animate={{ x: pos.x - 80, y: pos.y - 80 }}
      transition={{ type: "spring", stiffness: 40, damping: 25, mass: 0.7 }}
    />
  );
}

export default function GoodWorldHome() {
  const floatingMotes = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${8 + ((i * 17) % 84)}%`,
        delay: (i % 6) * 0.8,
        duration: 12 + (i % 5) * 2,
        size: 2 + (i % 4),
      })),
    []
  );

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#d8b66f] text-stone-900 selection:bg-amber-900/20 selection:text-stone-950">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,244,204,0.75),transparent_30%),radial-gradient(circle_at_78%_20%,rgba(255,211,127,0.45),transparent_34%),linear-gradient(180deg,#e9c981_0%,#d6ae63_38%,#b8874d_72%,#60432f_100%)]" />
      <div className="fixed inset-0 bg-[linear-gradient(90deg,rgba(58,35,20,0.20),transparent_18%,transparent_82%,rgba(58,35,20,0.22))]" />
      <WindowLight />
      <EmberTrail />
      <Grain />

      {floatingMotes.map((mote) => (
        <motion.span
          key={mote.id}
          aria-hidden="true"
          className="fixed bottom-[-2rem] z-20 rounded-full bg-yellow-100/50 blur-[1px]"
          style={{ left: mote.left, height: mote.size, width: mote.size }}
          animate={{ y: [0, -900], opacity: [0, 0.65, 0] }}
          transition={{ duration: mote.duration, delay: mote.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <div className="relative z-10">
        {rooms.map((room, index) => (
          <Room key={room.id} room={room} index={index} />
        ))}

        <section className="relative flex min-h-screen items-center justify-center px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2 }}
              className="font-serif text-3xl leading-snug tracking-[-0.025em] text-amber-50 md:text-5xl"
            >
              The possible already exists. Some of us are simply arranging the furniture.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="mt-24 text-center"
            >
              <p className="font-serif text-sm italic tracking-[0.25em] text-amber-100/80">Sheng / Go See Creator</p>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}

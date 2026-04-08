"use client";

/**
 * Standalone copy of the KinnyApps home hero (for reuse in other projects).
 * Dependencies: react, framer-motion, lucide-react, whatamesh, Tailwind CSS.
 * Use `<a href>` for links so this works in Vite as well as Next.js.
 */

import { motion } from "framer-motion";
import { ArrowRight, Grid3X3 } from "lucide-react";

import { MeshGradient } from "./MeshGradient";

const mint = "#3EE6A6";

export function Hero() {
  return (
    <section className="relative flex min-h-[min(68vh,720px)] flex-col overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <MeshGradient />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center text-center sm:py-4">
        <motion.h1
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.1] lg:text-6xl"
        >
          Premium tools for the next generation.
        </motion.h1>
        <motion.p
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600 sm:text-xl"
        >
          An ecosystem of premium digital tools designed to push the boundaries
          of what&apos;s possible. We build secure, beautifully crafted apps for
          AI era.
        </motion.p>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <a
              href="/kinny"
              className="inline-flex h-12 min-w-[200px] items-center justify-center gap-2 rounded-full px-8 text-base font-semibold text-slate-900 shadow-lg shadow-emerald-500/20"
              style={{ backgroundColor: mint }}
              aria-label="Explore Kinny — product microsite and Magic Pocket"
            >
              Explore Kinny
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <a
              href="#app-hub"
              className="inline-flex h-12 min-w-[200px] items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white/80 px-8 text-base font-semibold text-slate-800 backdrop-blur-sm transition-colors hover:border-slate-300 hover:bg-white"
              aria-label="View all apps — jump to app hub"
            >
              <Grid3X3 className="h-4 w-4" aria-hidden />
              View all apps
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

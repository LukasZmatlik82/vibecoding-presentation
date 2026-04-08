import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { MeshGradient } from "../../kinnyapps-hero-template/MeshGradient";

const mint = "#3EE6A6";

type PresentationLandingProps = {
  onEnter: () => void;
};

export function PresentationLanding({ onEnter }: PresentationLandingProps) {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <MeshGradient />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center text-center sm:py-4">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.1] lg:text-6xl"
        >
          Vibe Coding
          <br />
          and Autonomous Web Agents
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.06 }}
          className="mt-4 text-lg font-medium text-slate-700 sm:text-xl"
        >
          9. 4. 2026, Lukáš Zmátlík
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600 sm:text-xl"
        >
          Fusion Leader & Professional Programmes 2026
          <br />
          Thriving with Digital Skills
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.18 }}
          className="mt-10 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <button
              type="button"
              onClick={onEnter}
              className="inline-flex h-12 min-w-[200px] cursor-pointer items-center justify-center gap-2 rounded-full px-8 text-base font-semibold text-slate-900 shadow-lg shadow-emerald-500/20"
              style={{ backgroundColor: mint }}
              aria-label="Vstoupit do prezentace"
            >
              Enter
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

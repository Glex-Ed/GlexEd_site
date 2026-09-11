import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Rocket } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const obs = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -10% 0px" },
    );
    obs.observe(footer);
    return () => obs.disconnect();
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && !footerVisible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Volver arriba"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.92 }}
          className="group fixed bottom-5 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-brand-magenta text-white shadow-[0_12px_32px_-10px_oklch(0.44_0.18_335/0.6)] outline-none ring-offset-2 transition-colors hover:bg-brand-navy focus-visible:ring-2 focus-visible:ring-brand-magenta md:bottom-6 md:right-6 md:h-12 md:w-12"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-2 left-1/2 h-4 w-3 -translate-x-1/2 rounded-full bg-gradient-to-b from-brand-yellow to-brand-orange opacity-0 blur-md transition-opacity duration-200 group-hover:opacity-90"
          />
          <Rocket className="h-5 w-5 -rotate-45" strokeWidth={2.2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

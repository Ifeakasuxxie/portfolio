import { useEffect, useRef, useState } from "react";

export default function Showcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6 md:px-16 py-20 bg-ink">
      <p className="font-mono text-xs text-lime mb-3">in motion</p>
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-mist mb-4 max-w-xl">
        See a build in action, not just a screenshot.
      </h2>
      <p className="text-muted text-base leading-relaxed max-w-2xl mb-10">
        A scroll-through of Adire Couture, a fashion brand site built with
        React, TypeScript, and Framer Motion — editorial hero, full
        collection gallery, and a working custom-order form.
      </p>

      <div className="relative rounded-xl overflow-hidden border border-border-dark bg-ink-soft max-w-4xl mx-auto">
        <video
          ref={videoRef}
          className="w-full h-auto block"
          src="/showcase/adire-couture-demo.mp4"
          poster="/showcase/poster.jpg"
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div
          className={`absolute top-3 right-3 flex items-center gap-1.5 bg-ink/80 backdrop-blur px-2.5 py-1 rounded-md text-[11px] font-mono transition-opacity ${
            inView ? "text-lime opacity-100" : "text-muted opacity-70"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              inView ? "bg-lime animate-pulse" : "bg-muted"
            }`}
          />
          {inView ? "playing" : "scroll to play"}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <a
          href="https://github.com/Ifeakasuxxie/adire-couture-website"
          target="_blank"
          rel="noreferrer"
          className="text-mist text-sm hover:text-lime transition"
        >
          View the code ↗
        </a>
      </div>
    </section>
  );
}

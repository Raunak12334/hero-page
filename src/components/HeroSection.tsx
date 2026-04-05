import { motion } from "framer-motion";
import { Play, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = (delay: number, y: number = 16, duration: number = 0.6) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay, ease: "easeOut" as const },
});

const HeroSection = () => {
  return (
    <section className="flex-1 relative flex flex-col items-center justify-start overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full pt-10 md:pt-16 px-4">
        {/* Badge */}
        <motion.div {...fadeUp(0, 10, 0.5)} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground font-body mb-6">
          <Settings className="h-3.5 w-3.5" />
          Infra. for Multi Agent System
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1, 16, 0.6)}
          className="text-center font-display text-5xl md:text-6xl lg:text-[5rem] leading-[0.95] tracking-tight text-foreground max-w-xl"
        >
          The Future of <em className="not-italic font-display italic">Smarter</em> Automation
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.2, 16, 0.6)}
          className="mt-4 text-center text-base md:text-lg text-muted-foreground max-w-[650px] leading-relaxed font-body"
        >
          Automate your busywork with intelligent agents that learn, adapt, and execute—so your team can focus on what matters most.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.3, 16, 0.6)} className="mt-5 flex items-center gap-3">
          <Button className="rounded-full px-6 py-5 text-sm font-medium font-body">
            Book a demo
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 rounded-full border-0 bg-background hover:bg-background/80"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
          >
            <Play className="h-4 w-4 fill-foreground" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;

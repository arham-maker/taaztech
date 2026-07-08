"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const techRef = useRef<HTMLSpanElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = { x: -9999, y: -9999 };
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
    };

    let particles: Particle[] = [];
    let animationId = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = section.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(110, Math.floor((width * height) / 14000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.6 + 0.5,
        alpha: Math.random() * 0.35 + 0.2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!reducedMotion) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 160 && dist > 0) {
            const force = (160 - dist) / 160;
            p.vx -= (dx / dist) * force * 0.035;
            p.vy -= (dy / dist) * force * 0.035;
          }

          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.992;
          p.vy *= 0.992;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
          p.x = Math.max(0, Math.min(width, p.x));
          p.y = Math.max(0, Math.min(height, p.y));
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.18 * (1 - d / 130)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const onPointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    section.addEventListener("pointermove", onPointerMove);
    section.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      section.removeEventListener("pointermove", onPointerMove);
      section.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const tech = techRef.current;
    const word = wordRef.current;
    if (!section || !tech || !word) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    let raf = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      const rotateY = currentX * 0.04;
      const rotateX = -currentY * 0.04;

      tech.style.transform = `translate3d(${currentX * 0.7}px, ${currentY * 0.7}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      tech.style.textShadow = `${-currentX * 0.18}px ${-currentY * 0.18}px 22px rgba(14, 255, 42, 0.4)`;

      word.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      word.style.textShadow = `${-currentX * 0.2}px ${-currentY * 0.2}px 24px rgba(255, 255, 255, 0.28)`;

      raf = requestAnimationFrame(animate);
    };

    const onMove = (event: PointerEvent) => {
      const rect = word.getBoundingClientRect();
      const techRect = tech.getBoundingClientRect();
      const centerX = (rect.left + techRect.left + rect.width / 2 + techRect.width / 2) / 2;
      const centerY = (rect.top + techRect.top + rect.height / 2 + techRect.height / 2) / 2;
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      const max = 28;
      targetX = Math.max(-max, Math.min(max, dx * 0.08));
      targetY = Math.max(-max, Math.min(max, dy * 0.08));
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    raf = requestAnimationFrame(animate);
    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      tech.style.transform = "";
      tech.style.textShadow = "";
      word.style.transform = "";
      word.style.textShadow = "";
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`hero ${visible ? "hero--visible" : ""}`}
      id="top"
    >
      <canvas ref={canvasRef} className="hero__canvas" aria-hidden />

      <div className="hero__content">
        <h1 className="hero__title">
          <span ref={techRef} className="hero__title-line hero__title-static">
            TECH
          </span>
          <span ref={wordRef} className="hero__title-line hero__title-dynamic">
            Innovators
          </span>
        </h1>
        <h2 className="hero__subtitle">
          Trusted AI-Driven Software &amp; Marketing Agency: Powering 200+ High-Impact
          Projects
        </h2>
        <p className="hero__description">
          We are an AI-powered app development agency dedicated to helping startups and
          enterprises achieve 3× growth through custom software development services,
          high-performance applications, and growth-driven digital marketing services
          that scale adoption. Our AI &amp; digital solutions are powered by the latest AI
          technologies, including automation and data intelligence, to minimise costs,
          accelerate deployment, and ultimately maximise ROI.
        </p>
        <Link href="#services" className="btn btn--hero">
          Explore More
        </Link>
      </div>

      <div className="hero__tags">
        <span>Innovate</span>
        <span>Transform</span>
        <span>Succeed</span>
      </div>
    </section>
  );
}

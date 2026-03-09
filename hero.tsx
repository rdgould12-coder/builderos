"use client";

import { useEffect, useRef } from "react";

/**
 * Stripe-style animated gradient mesh background with noise texture.
 * Used behind slide decks for visual atmosphere.
 */
export function AnimatedMeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();

    const blobs = [
      { x: 0.2, y: 0.3, r: 0.35, color: "rgba(99,102,241,0.15)", speed: 0.0003, phase: 0 },
      { x: 0.7, y: 0.6, r: 0.30, color: "rgba(139,92,246,0.12)", speed: 0.0004, phase: 1.5 },
      { x: 0.5, y: 0.2, r: 0.25, color: "rgba(34,211,238,0.08)", speed: 0.0005, phase: 3 },
      { x: 0.8, y: 0.8, r: 0.30, color: "rgba(167,139,250,0.10)", speed: 0.0003, phase: 4.5 },
    ];

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#08080a";
      ctx.fillRect(0, 0, w, h);

      for (const blob of blobs) {
        const cx = (blob.x + Math.sin(time * blob.speed + blob.phase) * 0.05) * w;
        const cy = (blob.y + Math.cos(time * blob.speed * 0.7 + blob.phase) * 0.05) * h;
        const r = blob.r * Math.max(w, h);

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }

      // Noise overlay
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 12;
        data[i] += noise;
        data[i + 1] += noise;
        data[i + 2] += noise;
      }
      ctx.putImageData(imageData, 0, 0);

      time++;
      animFrame = requestAnimationFrame(draw);
    };

    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animFrame);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
}

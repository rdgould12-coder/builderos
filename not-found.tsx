import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const base = variant === "primary" ? "btn-primary" : variant === "ghost" ? "btn-ghost" : "text-accent hover:text-accent-solid underline-offset-4 hover:underline bg-transparent border-0 cursor-pointer";
    const sizeClass =
      size === "sm"
        ? "px-4 py-2 text-[13px]"
        : size === "md"
        ? "px-7 py-3.5 text-[15px]"
        : "px-10 py-4 text-base";

    return (
      <button ref={ref} className={cn(base, sizeClass, className)} {...props} />
    );
  }
);
Button.displayName = "Button";

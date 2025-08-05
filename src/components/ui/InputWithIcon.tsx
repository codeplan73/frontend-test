import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { cn } from "@/lib/utils";
import type { InputHTMLAttributes, ReactNode } from "react";

interface InputWithIconProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
  id?: string;
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
  ({ label, icon, className, id, ...props }, ref) => {
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <div className="relative w-full">
        {/* Icon (optional) */}
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B0BABF] pointer-events-none">
            {icon}
          </div>
        )}

        {/* Input with ring on focus and peer class */}
        <Input
          id={inputId}
          ref={ref}
          className={cn(
            "peer pl-10",
            "focus-visible:ring-[--secondary]", // use your CSS var
            className
          )}
          {...props}
        />

        {/* Floating Label */}
        <Label
          htmlFor={inputId}
          className={cn(
            "absolute left-0 -top-5 text-sm font-medium text-gray-700",
            "opacity-0 peer-focus:opacity-100 peer-placeholder-shown:opacity-0",
            "transition-opacity"
          )}
        >
          {label}
        </Label>
      </div>
    );
  }
);

InputWithIcon.displayName = "InputWithIcon";

export { InputWithIcon };

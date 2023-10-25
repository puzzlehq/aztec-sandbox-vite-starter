import { cn } from "@/lib/utils.ts";
import React from "react";

const VStack = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col",
      className
    )}
    {...props}
  />
));
VStack.displayName = "VStack";

const HStack = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex gap-4",
      className
    )}
    {...props}
  />
));
HStack.displayName = "VStack";

export { HStack, VStack };
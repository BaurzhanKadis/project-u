import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("mx-auto xl:px-4 px-2 max-w-[1536px]", className)}>
      {children}
    </div>
  );
};

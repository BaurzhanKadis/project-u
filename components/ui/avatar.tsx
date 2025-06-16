import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarProps {
  userId: string;
  className?: string;
  size?: number;
}

export function Avatar({ userId, className, size = 30 }: AvatarProps) {
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${userId}`;

  return (
    <div className={cn("relative overflow-hidden rounded-full", className)}>
      <Image
        src={avatarUrl}
        alt="Avatar"
        width={size}
        height={size}
        className="object-cover"
      />
    </div>
  );
}

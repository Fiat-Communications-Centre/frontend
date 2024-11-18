import React from "react";
import TextAvatar from "./text-avatar";
import { cn } from "@/lib/utils";

interface UserPopupProps {
  user: {
    name: string;
    role: string;
    bio?: string;
    avatar?: string;
    avatarFallback: string;
  };
  className?: string;
}

function UserBox({ user, className }: UserPopupProps) {
  return (
    <div className={cn("flex justify-start space-x-4", className)}>
      <TextAvatar  src={user.avatar} fallback={user.avatarFallback} />
      <div className="space-y-1">
        <h4 className="text-sm font-bold text-primary dark:text-white">{user.name}</h4>
        <h6 className="text-xs font-semibold">{user.role}</h6>
        {user.bio && <p className="text-sm">{user.bio}</p>}
      </div>
    </div>
  );
}

export default UserBox;

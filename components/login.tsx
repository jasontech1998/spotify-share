"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Login() {
  return (
    <div className="m-4 flex flex-col">
      <Button className="m-4">
        <Link href="/api/auth/signin">Login to Spotify</Link>
      </Button>
    </div>
  );
}

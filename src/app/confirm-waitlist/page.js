"use client";
import "next/image";
import "next/font/google";
import HomeNavBar from "../components/home-navbar";

export default function ConfirmWaitlist() {
  return (
    <div>
    <HomeNavBar />
    <div className="mx-8 flex flex-col text-center justify-center items-center h-[100vh]">
      <div className="flex-col mb-8">
        <p>
          Thank you for joining the waitlist, stay tuned on more information by
          following us on our socials
        </p>
      </div>
      <div className="flex-col space-x-8">
        <a href="https://twitter.com/PhoenixToken0"
          className="bg-[black] p-4 rounded-[10px] text-white">
            Twitter
        </a>
        <a href="https://t.me/phoenixtoken0"
          className="bg-[#229ED9] p-4 rounded-[10px] text-white">
            Telegram
        </a>
      </div>
    </div>
    </div>
  );
}

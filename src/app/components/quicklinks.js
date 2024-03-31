'use client';
import React from "react";

function QuickLinks() {
  return (
    <div className="bg-[red] mt-16 p-4 flex text-left w-screen justify-center md:w-full flex-row">
      <div className="flex-1 text-white">
        <div
          className="flex flex-col mx-4  md:mx-16"
        >
          <h1 className="text md:text-3xl w-1/3 font-bold py-4">
            Links
          </h1>
          <div  className="flex flex-col" style={{fontSize: "12px"}}>
          <a className="hover:text-[yellow]" href="https://phoenixtoken.community">Home</a>
          <a className="hover:text-[yellow]" href="">Docs</a>
          <a className="hover:text-[yellow]" href="">Partnership</a>
          <a className="hover:text-[yellow]" href="">Contact</a>
          </div>
        </div>
      </div>
      <div className="flex-1 text-white">
        <div
          className="flex flex-col w-1/3 mx-4  md:mx-16"
        >
          <h1 className="text md:text-3xl font-bold py-4">
            Socials
          </h1>
          <div className="flex flex-col" style={{fontSize: "12px"}}>
          <a className="hover:text-[yellow]" href="https://twitter.com/PhoenixToken0">Telegram</a>
          <a className="hover:text-[yellow]" href="https://t.me/PhoenixToken0">Twitter</a>
          <a className="hover:text-[yellow]" href="#">Warpcaster</a>
          <a className="hover:text-[yellow]" href="#">Medium</a>
          <a className="hover:text-[yellow]" href="#">TikTok</a>
          </div>
        </div>
      </div>
      <div className="flex-1 text-white">
        <div
          className="flex flex-col w-1/3 mx-4  md:mx-16"
        >
          <h1 className="text md:text-3xl font-bold py-4">
            Charts
          </h1>
          <div className="flex flex-col" style={{fontSize: "12px"}}>
          <a className="hover:text-[yellow]" href="#">DexScreeneer</a>
          <a className="hover:text-[yellow]" href="#">Poocoin</a>
          <a className="hover:text-[yellow]" href="#">DexTools</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default QuickLinks;

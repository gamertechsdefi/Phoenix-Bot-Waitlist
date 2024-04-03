'use client';
import React from "react";

function QuickLinks() {
  return (
    <div
    style={{
      backgroundColor: "#ff6200"
    }} 
    className="mt-16 p-4 flex text-left w-screen justify-center md:w-full flex-row">
      <div className="flex-1 text-white">
        <div
          className="flex flex-col mx-4  md:mx-16"
        >
          <h1 className="text- md:text-3xl w-1/3 font-bold py-4">
            Links
          </h1>
          <div  className="flex flex-col" style={{fontSize: "12px"}}>
          <a className="hover:text-[yellow]" href="https://phoenixtoken.community">Home</a>
          <a className="hover:text-[yellow]" href="">Docs</a>
          <a className="hover:text-[yellow]" href="">Partnership</a>
          <a className="hover:text-[yellow]" href="mailto:recipient@team@phoenixtoken.community">Contact</a>
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
          <a className="hover:text-[yellow]" href="https://twitter.com/PhoenixToken0">Twitter</a>
          <a className="hover:text-[yellow]" href="https://t.me/PhoenixToken0">Telegram</a>
          <a className="hover:text-[yellow]" href="https://warpcast.com/phoenixtoken">Warpcaster</a>
          <a className="hover:text-[yellow]" href="https://medium.com/@phoenixtoken">Medium</a>
          <a className="hover:text-[yellow]" href="https://www.tiktok.com/@phoenixtoken">TikTok</a>
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
          <a className="hover:text-[yellow]" href="https://dexscreener.com/bsc/0x8a2328b2c8e6a6f56668a0e26081efc250a8d6c0">DexScreeneer</a>
          <a className="hover:text-[yellow]" href="https://poocoin.app/tokens/0x885c99a787be6b41cbf964174c771a9f7ec48e04">Poocoin</a>
          <a className="hover:text-[yellow]" href="https://www.dextools.io/app/en/bnb/pair-explorer/0x8a2328b2c8e6a6f56668a0e26081efc250a8d6c0?t=1712168627219">DexTools</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default QuickLinks;

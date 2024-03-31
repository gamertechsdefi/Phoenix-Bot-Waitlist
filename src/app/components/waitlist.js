"use client";
import { animate, motion } from "framer-motion";

import "next/image";
import Link from "next/link";
import { useState } from "react";
import { database } from "../firebaseConfig";
import { push, ref, set } from "firebase/database";
import Head from "next/head";

export default function WaitlistFill() {
  const [emailAdddress, setEmailAddress] = useState("");
  const [walletAddress, SetWalletAddress] = useState("");

  const regexWalletAddress = /^(0x)?[0-9a-fA-F]{40}$/;
  const isValidateRegexWalletAddress = regexWalletAddress.test(walletAddress);

  const regexEmailAddress =
    /^(?!\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidateRegexEmailAddress = regexEmailAddress.test(emailAdddress);

  const handleSubmit = () => {
    try {
      if (!isValidateRegexEmailAddress) {
        alert("enter right email address");
      } else if (!isValidateRegexWalletAddress) {
        alert("enter right wallet address");
      } else {
        print(isValidateRegexWalletAddress);
        const waitlistDataRef = ref(database, "signers");
        const newWaitlistDataRef = push(waitlistDataRef);

        set(newWaitlistDataRef, {
          emailAdddress: emailAdddress,
          walletAddress: walletAddress,
        });
        setEmailAddress("");
        SetWalletAddress("");

        alert("you've successfully joined the waitlist");
      }
    } catch (error) {
      console.error("Firebase error", error);
    }
  };

  const ParentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        damping: 8,
        mass: 0.4,
        staggerChildren: 0.6
      },
    },
  }

  const HeaderVariants = {
    hidden: {
      opacity: 0,
      y: '-100vh'
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const InputVariants = {
    hidden: {
      opacity: 0,
      y: '-100vh'
    },
    visible: {
      opacity: 1,
      y: 0,
      
    },
  }

  return (
    <div
      className="mt-16"
    >
      <motion.div
      variants= {ParentVariants}
      initial = "hidden"
      animate= "visible" 
      className="">
        <motion.h1
          variants= {HeaderVariants}
          className=" my-4 font-bold text-center text-5xl md:text-9xl"
        >
          Safeguarding Communities
        </motion.h1>
        <motion.div
        variants={InputVariants}
        className="flex flex-col items-center justify-center w-full">
          <motion.input
            whileFocus={{ scale: 1.1 }}
            whileHover={{}}
            style={{
              textAlign: "center",
              borderWidth: "2px",
              borderColor: "gray",
            }}
            type="email"
            placeholder="Enter your email address"
            id="email"
            name="email"
            required
            value={emailAdddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            className=" bg-[transparent] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[80%]"
          />
          <motion.input
          whileFocus={{scale: 1.1}}
            style={{
              textAlign: "center",
              borderWidth: "2px",
              borderColor: "gray",
            }}
            type="text"
            placeholder="Enter your wallet address"
            id="text"
            name="text"
            required
            value={walletAddress}
            onChange={(e) => SetWalletAddress(e.target.value)}
            className=" bg-[transparent] mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[80%]"
          />
          <motion.button
            whileHover={{
              scale: 1.2,
              color: "red",
              backgroundColor: "#EEEEEE",
            }}
            animate={{}}
            onClick={handleSubmit}
            className="font-bold mt-4 hover:bg-[orange]"
            style={{
              color: "white",
              borderRadius: "5px",
              padding: "10px",
              backgroundColor: "red",
            }}
          >
            Sign up for waitlist
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

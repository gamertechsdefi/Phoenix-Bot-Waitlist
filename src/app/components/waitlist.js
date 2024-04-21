"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import "next/image";
import { useEffect, useState } from "react";
import { db, auth } from "../firebaseConfig";

import { collection, addDoc } from "firebase/firestore";


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
      staggerChildren: 0.6,
    },
  },
};

const HeaderVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const InputVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const buttonVariants = {
  hover: {
    scale: 1.2,
    color: "red",
    backgroundColor: "#EEEEEE",
    transition: {
      duration: 0.5,
      loop: Infinity,
      repeatType: "mirror",
    },
  },
};



export default function WaitlistFill() {
  const [isOpen, setIsOpen] = useState(false);

  const waitlistDatabase = collection(db, "signers");

const router = useRouter();

  const [emailAdddress, setEmailAddress] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  const regexEmailAddress =
    /^(?!\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidateRegexEmailAddress = regexEmailAddress.test(emailAdddress);

  const handleSubmit = async () => {

    try {
      if (!isValidateRegexEmailAddress) {
        AlertPopup("Enter correct email address", "OK");
      } else {     

            await addDoc(waitlistDatabase, {
              emailAdddress: emailAdddress,
              walletAddress: walletAddress,
            })  

           router.push('/confirm-waitlist')

          .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === "auth/email-already-in-use") {
              AlertPopup("Email already in use", "Ok");
              // You can notify the user or handle this case as needed
            } else {
              console.error("Error:", errorMessage);
            }
          });
        setEmailAddress("");
        setWalletAddress("");

      }
    } catch (error) {
      console.error("Firebase error", error);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((userCredential) => {
      console.log(userCredential);
    });
  }, []);

  return (
    <div
      className="py-8"
      style={{
        background: "rgb(199,199,199)",
        background:
          "linear-gradient(180deg, rgba(249,249,249,1) 0%, rgba(238,238,238,1) 100%)",
      }}
    >
      <motion.div
        variants={ParentVariants}
        initial="hidden"
        animate="visible"
        className="mt-8 mb-4"
      >
        <motion.h1
          variants={HeaderVariants}
          className=" my-4 mb-8 font-bold text-center text-5xl md:text-9xl"
        >
          Safeguarding Communities
        </motion.h1>
        <motion.div
          variants={InputVariants}
          className="flex flex-col items-center justify-center w-full"
        >
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
            className=" bg-[transparent] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[80%] md:w-[50%]"
          />
          <motion.input
            whileFocus={{ scale: 1.1 }}
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
            onChange={(e) => setWalletAddress(e.target.value)}
            className=" bg-[transparent] mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[80%] md:w-[50%]"
          />

          <motion.button
            variants={buttonVariants}
            initial="init"
            whileHover="hover"
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

function AlertPopup(text, buttonText) {
  // Create the alert container
  const alertContainer = document.createElement("div");
  alertContainer.classList.add("custom-alert-container");

  // Create the alert box
  const alertBox = document.createElement("div");
  alertBox.classList.add("custom-alert-box");

  // Create the text node for alert text
  const alertText = document.createElement("div");
  alertText.textContent = text;
  alertBox.appendChild(alertText); // Append the text node to the alert box

  // Create the alert button
  const alertButton = document.createElement("button");
  alertButton.classList.add("custom-alert-button");
  alertButton.textContent = buttonText;

  // Add event listener to the alert button
  alertButton.addEventListener("click", () => {
    // Remove the alert container when the button is clicked
    alertContainer.remove();
    // Re-enable scrolling
    document.body.style.overflow = "";
    // Make sticky header visible again
    const stickyHeader = document.querySelector(".sticky-header");
    if (stickyHeader) {
      stickyHeader.style.position = "sticky";
    }
  });

  // Append the alert button to the alert box
  alertBox.appendChild(alertButton);

  // Append the alert container to the body
  document.body.appendChild(alertContainer);
  alertContainer.appendChild(alertBox); // Append the alert box to the alert container

  // Style the alert container
  alertContainer.style.position = "fixed";
  alertContainer.style.top = "0";
  alertContainer.style.left = "0";
  alertContainer.style.width = "100%";
  alertContainer.style.height = "100%";
  alertContainer.style.display = "flex";
  alertContainer.style.justifyContent = "center";
  alertContainer.style.alignItems = "center";
  alertContainer.style.backgroundColor = "rgba(0, 0, 0, 0)";
  alertContainer.style.zIndex = "1000"; // Ensure it's above other content

  // Style the alert box
  alertBox.style.backgroundColor = "#fff";
  alertBox.style.padding = "20px";
  alertBox.style.borderRadius = "5px";
  alertBox.style.display = "flex";
  alertBox.style.flexDirection = "column";
  alertBox.style.alignItems = "left";

  // Style the alert button
  alertButton.style.padding = "10px 20px";
  alertButton.style.border = "none";
  alertButton.style.borderRadius = "5px";
  alertButton.style.cursor = "pointer";
  alertButton.style.marginTop = "10px";
  alertButton.style.backgroundColor = "gray";
  alertButton.style.color = "white";

  // Disable scrolling
  document.body.style.overflow = "hidden";

  // Hide sticky header
  const stickyHeader = document.querySelector(".sticky-header");
  if (stickyHeader) {
    stickyHeader.style.position = "absolute";
  }
}

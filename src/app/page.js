import Image from "next/image";
import Header from "./components/header";
import Intro from "./components/intro";
import WaitlistFill from "./components/waitlist";
import QuickLinks from "./components/quicklinks";

export default function Home() {

  return (
    <div>
      <Header />
      <WaitlistFill />
      <Intro />
      <QuickLinks />
    </div>
  );
}

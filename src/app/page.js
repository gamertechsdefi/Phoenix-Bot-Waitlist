import Intro from "./components/intro";
import WaitlistFill from "./components/waitlist";
import QuickLinks from "./components/quicklinks";
import HomeNavBar from "./components/home-navbar";

export default function Home() {

  return (
    <div>
      <HomeNavBar />
      <WaitlistFill />
      <Intro />
      <QuickLinks />
    </div>
  );
}

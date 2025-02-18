import About from "../components/About";
import ExclusiveText from "../components/includes/ExclusiveText";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import Registration from "../components/Registration";
import Rewards from "../components/Rewards";

function Landing() {
  return (
    <>
      <Hero />
      <About />
      <ExclusiveText />
      <Rewards />
      <Registration />
      <Offers />
      <Footer />
    </>
  );
}
export default Landing;

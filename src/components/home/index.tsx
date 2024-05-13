import Header from "@/layout/Header";
import HeroArea from "./HeroArea";
import Brand from "../common/Brand";
import Charity from "./Charity";
import About from "./About";
import Footer from "@/layout/Footer";
import OurCause from "./OurCause";

const Home = () => {
  return (
    <>
      <main>
        <Header style_1={false} style_2={true}/>
        <HeroArea/>
        <Brand style={true}/>
        <Charity/>
        <About/>
        <OurCause/>
        <Footer/>
      </main>
    </>
  )
}

export default Home;

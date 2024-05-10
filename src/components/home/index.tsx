import Header from "@/layout/Header";
import HeroArea from "./HeroArea";
import Brand from "../common/Brand";
import Charity from "./Charity";
import About from "./About";
import Footer from "@/layout/Footer";

const Home = () => {
  return (
    <>
      <main>
        <Header style_1={false} style_2={true}/>
        <HeroArea/>
        <Brand style={true}/>
        <Charity/>
        <About/>
        <Footer/>
      </main>
    </>
  )
}

export default Home;

import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import HeroArea from "./HeroArea";
import Brand from "../common/Brand";
import Charity from "./Charity";
import About from "./About";
import OurCause from "./OurCause";
import Volunteer from "./Volunteer";
import BecomeVolunteer from "./BecomeVolunteer";
import CtaArea from "./CtaArea";
import Event from "./Event";
import FAQ from "./FAQ";
import Testimonial from "./Testimonial";
import Features from "./Features";

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
        <Volunteer style={true}/>
        <BecomeVolunteer style={true} />
        <CtaArea/>
        <Event/>
        <FAQ style={false}/>
        <Testimonial/>
        <Features/>
        <Footer/>
      </main>
    </>
  )
}

export default Home;

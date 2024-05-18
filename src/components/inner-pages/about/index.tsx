import Brand from "@/components/common/Brand"
import Breadcrumb from "@/components/common/Breadcrumb"
import About from "@/components/home/About"
import CtaArea from "@/components/home/CtaArea"
import FAQ from "@/components/home/FAQ"
import Features from "@/components/home/Features"
import Testimonial from "@/components/home/Testimonial"
import Footer from "@/layout/Footer"
import Header from "@/layout/Header"

const AboutUs = () => {
   return (
      <>
         <main>
            <Header style_1={false} style_2={true} />
            <Breadcrumb page_title="About Us" page_list="About" style={false} />
            <Brand/>
            <About/>
            <Features/>
            <Testimonial />
            <CtaArea/>
            <FAQ/>
         </main>
         <Footer />
      </>
   )
}

export default AboutUs;

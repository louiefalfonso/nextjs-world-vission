import Breadcrumb from "@/components/common/Breadcrumb"
import Footer from "@/layout/Footer"
import Header from "@/layout/Header"
import Brand from "@/components/common/Brand"
import FAQ from "@/components/home/FAQ"
import FaqStyleOne from "./FaqStyleOne"
import CtaArea from "@/components/home/CtaArea"
import FaqStyleTwo from "./FaqStyleTwo"

const Faqs = () => {
   return (
      <>
         <Header style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="frequently asked questions" page_list="FAQ" style={true} />
            <FAQ/>
            <FaqStyleOne/>
            <CtaArea/>
            <FaqStyleTwo/>
            <Brand style={true} />
         </main>
         <Footer />
      </>
   )
}

export default Faqs;

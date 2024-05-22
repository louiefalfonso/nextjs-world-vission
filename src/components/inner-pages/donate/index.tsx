import Breadcrumb from "@/components/common/Breadcrumb"
import Footer from "@/layout/Footer"
import Header from "@/layout/Header"
import DonateArea from "./DonateArea"


const Donate = () => {
   return (
      <>
         <Header style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Donate Now" page_list="Donate" style={false} />
            <DonateArea/> 
         </main>
         <Footer />
      </>
   )
}

export default Donate;

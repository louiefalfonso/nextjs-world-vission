import Breadcrumb from "@/components/common/Breadcrumb"
import Footer from "@/layout/Footer"
import Header from "@/layout/Header"
import Brand from "@/components/common/Brand"
import CauseSliderArea from "./CauseSliderArea"

const CauseSlider = () => {
   return (
      <>
         <Header style_1={true} style_2={true} />
         <main>
            <Breadcrumb page_title="Causes Slider" page_list="Causes" style={false} />
            <CauseSliderArea />
            <Brand style={true} />
         </main>
         <Footer />
      </>
   )
}

export default CauseSlider

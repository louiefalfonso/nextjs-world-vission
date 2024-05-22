import Breadcrumb from "@/components/common/Breadcrumb"
import Footer from "@/layout/Footer"
import Header from "@/layout/Header"
import CauseArea from "./CauseArea"
import Brand from "@/components/common/Brand"

const Causes = () => {
   return (
      <>
         <Header style_1={true} style_2={true} />
         <main>
            <Breadcrumb page_title="Our Causes" page_list="Causes" style={false} />
            <CauseArea />
            <Brand style={true} />
         </main>
         <Footer />
      </>
   )
}

export default Causes

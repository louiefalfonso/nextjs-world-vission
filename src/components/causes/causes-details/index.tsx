import Breadcrumb from "@/components/common/Breadcrumb"
import Footer from "@/layout/Footer"
import Header from "@/layout/Header"
import CauseDetailsArea from "./CauseDetailsArea"

const CauseDetails = () => {
   return (
      <>
         <Header style_1={false} style_2={true} />
         <main>
            <Breadcrumb page_title="Cause Details" page_list="Cause Details" style={false} />
            <CauseDetailsArea />
         </main>
         <Footer />
      </>
   )
}

export default CauseDetails;

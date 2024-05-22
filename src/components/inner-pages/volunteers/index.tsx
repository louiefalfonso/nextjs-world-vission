import Breadcrumb from "@/components/common/Breadcrumb"
import Footer from "@/layout/Footer"
import Header from "@/layout/Header"
import VolunteerOne from "./VolunteerOne"

const Volunteers = () => {
   return (
      <>
         <Header style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Our Volunteers" page_list="Volunteers" style={false} />
            <VolunteerOne style={false} />
         </main>
         <Footer />
      </>
   )
}

export default Volunteers;

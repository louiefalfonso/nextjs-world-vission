import Breadcrumb from "@/components/common/Breadcrumb"
import Footer from "@/layout/Footer"
import Header from "@/layout/Header"
import Brand from "@/components/common/Brand"
import ContactArea from "./ContactArea"
import ContactInfo from "./ContactInfo"
import LocationMap from "./LocationMap"

const Contact = () => {
   return (
      <>
         <Header style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Contact Us" page_list="Contact" style={false} />
            <Brand style={true} />
            <ContactArea/>
            <ContactInfo/>
            <LocationMap/>
         </main>
         <Footer />
      </>
   )
}

export default Contact;

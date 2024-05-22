import Breadcrumb from "@/components/common/Breadcrumb"
import Footer from "@/layout/Footer"
import Header from "@/layout/Header"
import Brand from "@/components/common/Brand"
import EventDetailsArea from "./EventDetailsArea"

const EventDetails = () => {
   return (
      <>
         <Header style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Our Events Slider" page_list="Event" />
            <EventDetailsArea/>
            <Brand style={true} />
         </main>
         <Footer />
      </>
   )
}

export default EventDetails;

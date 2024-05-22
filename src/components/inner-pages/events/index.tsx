import Breadcrumb from "@/components/common/Breadcrumb"
import Footer from "@/layout/Footer"
import Header from "@/layout/Header"

import Brand from "@/components/common/Brand"
import EventArea from "./EventArea"

const Event = () => {
   return (
      <>
         <Header style_1={true} style_2={true} />
         <main>
            <Breadcrumb page_title="Our Latest Event" page_list="Event" style={false} />
            <EventArea/>    
            <Brand style={true} />
         </main>
         <Footer/>
      </>
   )
}

export default Event;

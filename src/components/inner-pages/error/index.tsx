import Breadcrumb from "@/components/common/Breadcrumb"
import Footer from "@/layout/Footer"
import Header from "@/layout/Header"
import ErrorArea from "./ErrorArea"

const NotFound = () => {
   return (
      <>
         <Header style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Error Page" page_list="404" style={false} />
            <ErrorArea />
         </main>
         <Footer />
      </>
   )
}

export default NotFound;

import Breadcrumb from "@/components/common/Breadcrumb"
import Footer from "@/layout/Footer"
import Header from "@/layout/Header"


const Donate = () => {
   return (
      <>
         <Header style_1={false} style_2={true} />
         <main>
            <Breadcrumb page_title="Donate Now" page_list="Donate" style={false} />
            
         </main>
         <Footer />
      </>
   )
}

export default Donate;

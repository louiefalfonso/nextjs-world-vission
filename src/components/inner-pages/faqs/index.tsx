import Breadcrumb from "@/components/common/Breadcrumb"
import Footer from "@/layout/Footer"
import Header from "@/layout/Header"
import Brand from "@/components/common/Brand"

const Faqs = () => {
   return (
      <>
         <Header style_1={false} style_2={true} />
         <main>
            <Breadcrumb page_title="frequently asked questions" page_list="Faq" style={true} />
            
            <Brand style={true} />
         </main>
         <Footer />
      </>
   )
}

export default Faqs;

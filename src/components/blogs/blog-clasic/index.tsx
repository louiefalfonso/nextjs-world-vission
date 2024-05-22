import Breadcrumb from "@/components/common/Breadcrumb"
import Footer from "@/layout/Footer"
import Header from "@/layout/Header"
import BlogClasicArea from "./BlogClasicArea"

const BlogClasic = () => {
   return (
      <>
         <Header style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Blog Clasic" page_list="Blog" style={false} />
            <BlogClasicArea />
         </main>
         <Footer />
      </>
   )
}

export default BlogClasic;

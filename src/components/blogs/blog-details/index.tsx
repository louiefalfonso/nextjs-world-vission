import Breadcrumb from "@/components/common/Breadcrumb"
import Footer from "@/layout/Footer"
import Header from "@/layout/Header"
import BlogDetailsArea from "./BlogDetailsArea"

const BlogDetails = () => {
   return (
      <>
         <Header style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Blog Details" page_list="Blog Details" style={false} />
            <BlogDetailsArea/>
         </main>
         <Footer />
      </>
   )
}

export default BlogDetails;

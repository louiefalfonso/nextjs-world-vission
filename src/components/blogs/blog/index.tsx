import Breadcrumb from "@/components/common/Breadcrumb"
import Footer from "@/layout/Footer"
import Header from "@/layout/Header"
import BlogArea from "./BlogArea"

const Blog = () => {
   return (
      <>
         <Header style_1={false} style_2={true} />
         <main>
            <Breadcrumb page_title="Blog Post" page_list="Blog" style={false} />
            <BlogArea/>
         </main>
         <Footer />
      </>
   )
}

export default Blog;

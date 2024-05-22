import Breadcrumb from "@/components/common/Breadcrumb"
import Footer from "@/layout/Footer"
import Header from "@/layout/Header"
import BlogSliderArea from "./BlogSliderArea"

const BlogSlider = () => {
   return (
      <>
         <Header style_1={false} style_2={true} />
         <main>
            <Breadcrumb page_title="Blog Slider" page_list="Blog" style={false} />
            <BlogSliderArea />
         </main>
         <Footer />
      </>
   )
}

export default BlogSlider;

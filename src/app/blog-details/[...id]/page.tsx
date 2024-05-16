import BlogDetailsArea from "@/components/blogs/blog-details/BlogDetailsArea";
import Breadcrumb from "@/components/common/Breadcrumb";
import blog_data from "@/data/blogData";
import Wrapper from "@/layout/Wrapper";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

export const metadata = {
   title: "World Vission - Charity & Donation React Next JS Project",
};
const index = ({ params }: { params: { id: number } }) => {
   const blogs = blog_data.filter(items => items.page === "inner_page");
   const single_blog = blogs.find((item) => Number(item.id) === Number(params.id));

   return (
      <Wrapper>
         <Header style_1={false} style_2={true} />
         <main>
            <Breadcrumb page_title="Blog Details" page_list="Blog Details" />
            <BlogDetailsArea single_blog={single_blog} key={single_blog?.id} />
         </main>
         <Footer />
      </Wrapper>
   )
}

export default index
import CauseDetailsArea from "@/components/causes/causes-details/CauseDetailsArea";
import Breadcrumb from "@/components/common/Breadcrumb";
import cause_data from "@/data/causeData";
import Wrapper from "@/layout/Wrapper";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

export const metadata = {
   title: "World Vission - Charity & Donation React Next JS Project",
};
const index = ({ params }: { params: { id: number } }) => {
   const causes = cause_data.filter(items => items.page === "inner_page");
   const single_cause = causes.find((item) => Number(item.id) === Number(params.id));

   return (
      <Wrapper>
         <Header />
         <main>
            <Breadcrumb page_title="Cause Details" page_list="Cause Details" />
            <CauseDetailsArea single_cause ={single_cause} key={single_cause?.id} />
         </main>
         <Footer />
      </Wrapper>
   )
}

export default index
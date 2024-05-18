import Breadcrumb from "@/components/common/Breadcrumb";
import EventDetailsArea from "@/components/events/event-details/EventDetailsArea";
import event_data from "@/data/EventData";
import Wrapper from "@/layout/Wrapper";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

export const metadata = {
   title: "World Vission - Charity & Donation React Next JS Project",
};
const index = ({ params }: { params: { id: number } }) => {
   const events = event_data.filter(items => items.page === "inner_page");
   const single_event = events.find((item) => Number(item.id) === Number(params.id));

   return (
      <Wrapper>
         <Header style_1={false} style_2={true} />
         <main>
            <Breadcrumb page_title="Blog Details" page_list="Blog Details" />
            <EventDetailsArea single_event={single_event} key={single_event?.id} />
         </main>
         <Footer />
      </Wrapper>
   )
}

export default index
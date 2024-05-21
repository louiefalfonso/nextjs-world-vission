import Donate from "@/components/inner-pages/donate";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "World Vission - Charity & Donation React Next JS Project",
};
const index = () => {
   return (
      <Wrapper>
         <Donate/>
      </Wrapper>
   )
}

export default index
"use client"
import UseSticky from "@/hooks/UseSticky";
// import ScrollToTopIcon from "@/svg/OtherIcons/ScrollToTopIcon";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
   const { sticky }: { sticky: boolean } = UseSticky();

   const [showScroll, setShowScroll] = useState(false);

   // eslint-disable-next-line react-hooks/exhaustive-deps
   const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
         setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
         setShowScroll(false);
      }
   };

   const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   // useEffect(() => {
   //    window.addEventListener("scroll", checkScrollTop);
   //    return () => window.removeEventListener("scroll", checkScrollTop);
   // }, []);
   useEffect(() => {
      const checkScrollTop = () => {
         if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
         } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
         }
      };

      window.addEventListener("scroll", checkScrollTop);
      return () => window.removeEventListener("scroll", checkScrollTop);
   }, [checkScrollTop, showScroll]);

   return (
      <>
         <div onClick={scrollTop} className={`back-to-top ${sticky ? "active" : ""}`}>
            <span className="back-top"><i className="fa fa-angle-up"></i></span>
         </div>
      </>
   )
}

export default ScrollToTop

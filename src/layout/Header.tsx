import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const Header = ({ style_1, style_2 }: any) => {
   
   const [isActive, setIsActive] = useState<boolean>(false);
   const [isSearch, setIsSearch] = useState<boolean>(false);

   const toggleMobileMenu = () => {
      setIsActive(!isActive); // Toggle the isActive state
   };

return (
      <>
         
      </>
   )
   
}

export default Header

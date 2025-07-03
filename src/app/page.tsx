import Test from "@/components/Test/page";
import CategoryRow from "@/components/CategoryRow/page";
import Hero from "@/components/Hero/page";
import AboutUs from "./AboutUs/page";
import Contact from "./Contact/page";
import { Footer } from "@/components/Footer/page";
import AuthGuard from "@/components/AuthGuard/page";

export default function Home() {
  return (
   <div>
     {/* <Test/> */}

<AuthGuard>
<CategoryRow /> 
 <Hero/>
<AboutUs/>
<Contact/>
 <Footer/>
</AuthGuard>
 
   </div>


  );
}

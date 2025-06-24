import Test from "@/components/Test/page";
import Navbar from "@/components/Navbar/page";
import CategoryRow from "@/components/CategoryRow/page";
import Hero from "@/components/Hero/page";
import { Footer } from "@/components/Footer/page";
import AuthGuard from "@/components/AuthGuard/page";

export default function Home() {
  return (
   <div>
     {/* <Test/> */}

<AuthGuard>
 <Navbar/>
<CategoryRow /> 
 <Hero/>
 <Footer/>
</AuthGuard>
 
   </div>


  );
}

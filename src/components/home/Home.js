import Header from "./Header";
import Deliver from "./Deliver";
import Countries from "./Countries";
import FakeFooter from "./FakeFooter";
import Footer from "./Footer"
import Mobile from './Mobile';


function Home() {
  return (
    <>
       <Header /> 
       <Mobile/>
       <Deliver/>
       <Countries/>
       <FakeFooter/>
       <Footer/>
    </>
  )
}

export default Home;

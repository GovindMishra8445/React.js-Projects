import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero'
import Contact from './components/contact/Contact';
import Business from './components/business/Business';
import Healthcare from './components/healthcare/Healthcare';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Delivered from './components/Delivered/Delivered';

export default function App() {
  return (
    <main>
    <Navbar />
    <Hero /> 
    <Contact />
    <Business />
    <Healthcare/>
    <Delivered/>
    {/* <CustomerService/> */}
    {/* <Printer/> */}
    <Skills />
    <Footer />
   </main>
  )
}


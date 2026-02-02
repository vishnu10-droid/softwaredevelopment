import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home/Home";
import About from "./component/pages/About/About";
import Contact from "./component/pages/Contact/Contact.jsx";
import Career from "./component/pages/Career/Career";
import Services from "./component/pages/services/Services";
import Layout from "./component/layout/Layout";
import CustomDevelopment from "./component/button/ButtonCard.jsx";
import ScrollToTop from "./component/ScrollToTop.jsx";
import CloudSolutions from "./component/button/CloudSolutions.jsx";
import AIAutomation from "./component/button/AIAutomation.jsx";
import WebDevelopment from "./component/button/WebDevelopment.jsx";
import MobileAppDevelopment from "./component/button/MobileAppDevelopment.jsx";
import SecurityMaintenance from "./component/button/SecurityMaintenance.jsx";
import OurProcess from "./component/button/OurProcess.jsx";
import WebCloudSystems from "./component/pages/About/WebCloudSystems.jsx";
import { PerksSection } from "./component/pages/Career/PerksSection.jsx";


import ContactSection from "./component/pages/Home/ContactSection.jsx";
import SideContactButtons from "./component/button/SideContactButtons.jsx";
import ContactForm from "./component/button/ContactForm.jsx";
import ScrollToTopArrow from "./component/button/ScrollToTopArrow.jsx";
import Aboutservice from "./component/pages/About/Aboutservice.jsx";
import FreeConsultation from "./component/pages/services/FreeConsultation.jsx";



const App = () => {
  return (
    <>
    <ScrollToTop />
    <SideContactButtons />
    <ContactForm/>
    <ScrollToTopArrow/>
    <Layout>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/career" element={<Career />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/customDevelopment" element={<CustomDevelopment/>}/>
      <Route path="/cloudSolutions" element={<CloudSolutions/>}/>
      <Route path="/aIAutomation" element={<AIAutomation />}/>
      <Route path="/WebDevelopment" element={<WebDevelopment/>}/>
      <Route path="/MobileAppDevelopment" element={<MobileAppDevelopment/>}/>
      <Route path="/SecurityMaintenance" element={<SecurityMaintenance/>}/>
      <Route path="/ourProcess" element={<OurProcess/>}/>
      <Route path="/WebCloudSystems" element={<WebCloudSystems/>}/>
      <Route path="/PerksSection" element={<PerksSection/>}/>
      <Route path="/freeConsultation" element={<FreeConsultation/>}/>
       <Route path="/contact" element={<ContactSection />} />
       <Route path="/aboutservices" element={<Aboutservice />} />
      
    </Routes>
    </Layout>
    </>
  );
};

export default App;

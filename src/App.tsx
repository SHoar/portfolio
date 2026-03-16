import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import HowIWork from './components/sections/HowIWork';
import WhoIWorkWith from './components/sections/WhoIWorkWith';
import Services from './components/sections/Services';
import CaseStudies from './components/sections/CaseStudies';
import FrameworksResources from './components/sections/FrameworksResources';
import Insights from './components/sections/Insights';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import SideProjects from './components/sections/SideProjects';
import Talks from './components/sections/Talks';
import Contact from './components/sections/Contact';
import SupportSection from './components/sections/SupportSection';
import { adsEnabled } from './config/ads';

function App() {
  return (
    <Layout>
      <Hero />
      <HowIWork />
      <WhoIWorkWith />
      <Services />
      <CaseStudies />
      <FrameworksResources />
      <Insights />
      <About />
      <Portfolio />
      <SideProjects />
      <Talks />
      <Contact />
      {adsEnabled && <SupportSection />}
    </Layout>
  );
}

export default App;

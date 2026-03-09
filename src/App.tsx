import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import SideProjects from './components/sections/SideProjects';
import Portfolio from './components/sections/Portfolio';
import Talks from './components/sections/Talks';
import Contact from './components/sections/Contact';
import SupportSection from './components/sections/SupportSection';
import { adsEnabled } from './config/ads';

function App() {
  return (
    <Layout>
      <Hero />
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

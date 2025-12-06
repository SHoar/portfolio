import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import SideProjects from './components/sections/SideProjects';
import Portfolio from './components/sections/Portfolio';
import Talks from './components/sections/Talks';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Portfolio />
      <SideProjects />
      <Talks />
      <Contact />
    </Layout>
  );
}

export default App;

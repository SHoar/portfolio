import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Portfolio from './components/sections/Portfolio';
import About from './components/sections/About';
import Talks from './components/sections/Talks';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Portfolio />
      <Talks />
      <Contact />
    </Layout>
  );
}

export default App;

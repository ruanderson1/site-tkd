
import Header from './layout/Header';
import Footer from './layout/Footer';
import Hero from './sections/Hero';
import Sobre from './sections/Sobre';
import Professor from './sections/Professor';
import Apostila from './sections/Apostila';
import Galeria from './sections/Galeria';
import Contato from './sections/Contato';
import WhatsAppButton from './components/WhatsAppButton';
import TreinoVideo from './sections/TreinoVideo';
import { dojoName as dojangName } from './constants/site';


function App() {
  return (
    <div className="bg-neutral-900 text-zinc-100">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Professor />
        <Apostila />
        <Galeria />
        <TreinoVideo />
        <Contato />
      </main>
      <Footer dojoName={dojangName} />
      <WhatsAppButton />
    </div>
  );
}

export default App;

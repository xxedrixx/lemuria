import { Hero, About, Footer, Services, Sports } from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="max-sm:px-10 px-20 py-20">
      <Hero />
    </section>
    <section className="max-sm:px-10 px-20 py-20">
      <Sports />
    </section>
    <section className="max-sm:px-10 px-20 py-20">
      <Services />
    </section>
    <section className="max-sm:px-10 px-20 py-20">
      <About />
    </section>
    <section className="max-sm:px-10 px-20 py-20 bg-lemuria">
      <Footer />
    </section>
  </main>
);

export default App;

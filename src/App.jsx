import { Hero, About, Footer, Services, Sports } from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <Sports />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding">
      <About />
    </section>
    <section className="bg-lemuria padding-y padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;

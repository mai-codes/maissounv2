import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Press from "./components/Press";
import ResumeButton from "./components/ResumeButton";
import Sidebar from "./components/Sidebar";
import TechAndAchievements from "./components/TechAndAchievements";
import TopNav from "./components/TopNav";
import Work from "./components/Work";

export default function AllComponentsPage() {
  return (
    <main className="prose mx-auto py-12">
      <section className="my-8">
        <TopNav />
      </section>

      <section className="my-8">
        <Hero />
      </section>

      <section className="my-8">
        <About />
      </section>

      <section className="my-8">
        <Experience />
      </section>

      <section className="my-8">
        <Work />
      </section>

      <section className="my-8">
        <TechAndAchievements />
      </section>

      <section className="my-8">
        <Press />
      </section>

      <section className="my-8">
        <Contact />
      </section>

      <section className="my-8">
        <ResumeButton />
      </section>

      <section className="my-8">
        <Sidebar />
      </section>
    </main>
  );
}

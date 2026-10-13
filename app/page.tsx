import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import SkillGroup from "@/components/SkillGroup";
import EducationCard from "@/components/EducationCard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { education, skillGroups } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />

        <section id="skills" className="section bg-navy-50/60 dark:bg-navy-900/40">
          <div className="container-page">
            <Reveal>
              <h2 className="section-heading">Skills</h2>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {skillGroups.map((group, index) => (
                <Reveal key={group.category} delay={index * 80} className="h-full">
                  <SkillGroup group={group} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container-page">
            <Reveal>
              <h2 className="section-heading">Education</h2>
            </Reveal>
            <div className="mt-8 grid gap-4">
              {education.map((item, index) => (
                <Reveal key={`${item.degree}-${item.period}`} delay={index * 60}>
                  <EducationCard item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}

import Hero from '../components/sections/Hero';
import CoursSection from '../components/sections/CoursSection';
import OutilsSection from '../components/sections/OutilsSection';
import RevisionsSection from '../components/sections/RevisionsSection';
import CorrectionsSection from '../components/sections/CorrectionsSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-12">
        <section id="cours">
          <CoursSection />
        </section>

        <section id="outils">
          <OutilsSection />
        </section>

        <section id="revisions">
          <RevisionsSection />
        </section>

        <section id="corrections">
          <CorrectionsSection />
        </section>
      </div>
    </>
  );
}

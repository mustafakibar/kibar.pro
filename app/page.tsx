import { FindMeOn } from '@/components/FindMeOn';
import { Hero } from '@/components/Hero';
import { SectionCard } from '@/components/SectionCard';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <main className="p-8">
      <Hero />
      <FindMeOn />

      <SectionCard title="Projects" className="my-4">
        <p>Coming soon...</p>
      </SectionCard>

      <SectionCard title="Snippets" className="my-4">
        <p>Coming soon...</p>
      </SectionCard>

      <SectionCard title="Blog Posts" className="my-4">
        <p>Coming soon...</p>
      </SectionCard>
    </main>
  );
};

export default HomePage;

import { FindMeOn } from '@/components/FindMeOn';
import { Hero } from '@/components/Hero';
import { SectionCard } from '@/components/SectionCard';
import { Hash } from 'lucide-react';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <main className='md:container md:mx-auto p-8'>
      <Hero />
      <FindMeOn />

      <SectionCard title='Projects'>
        <p>Coming soon...</p>
      </SectionCard>

      {/* Projects */}
      {/* Snippets */}
      {/* Blog posts / Articles */}
    </main>
  );
};

export default HomePage;

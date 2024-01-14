import { FindMeOn } from '@/components/FindMeOn';
import { Hero } from '@/components/Hero';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <main className='md:container md:mx-auto p-8'>
      <Hero />
      <FindMeOn />

      {/* Projects */}
      {/* Snippets */}
      {/* Blog posts / Articles */}
    </main>
  );
};

export default HomePage;

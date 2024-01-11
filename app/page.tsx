import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <main className='md:container md:mx-auto p-8'>
      <h1 className='text-4xl font-bold'>Hello world!</h1>
      <h3>
        My name is <span className='text-blue-500'>Mustafa Kibar</span> and
        I&apos;m a <span className='text-blue-500'>software engineer</span>.
      </h3>

      {/* Find me on */}
      {/* Projects */}
      {/* Snippets */}
      {/* Blog posts / Articles */}
    </main>
  );
};

export default HomePage;

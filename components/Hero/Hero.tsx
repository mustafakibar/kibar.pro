import { HeroProps } from './type';

const Hero: React.FC<HeroProps> = () => {
  return (
    <>
      <h1 className='text-4xl font-bold'>Hello world!</h1>
      <h3>
        My name is <span className='text-blue-500'>Mustafa Kibar</span> and
        I&apos;m a <span className='text-blue-500'>software engineer</span>.
      </h3>
    </>
  );
};

export default Hero;

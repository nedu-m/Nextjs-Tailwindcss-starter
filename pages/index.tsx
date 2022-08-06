import type { NextPage } from 'next';
import Darkmode from '@/components/Darkmode';
import SvgBackground from '@/components/SvgBackground';

const Home: NextPage = () => {
  return (
    <>
      <section className="flex items-center justify-between px-4 py-5">
        <div className="flex flex-wrap items-center text-2xl font-mono">
          Nextjs + TypeScript + Tailwindcss Starter
        </div>
        <div className="flex flex-wrap items-center text-3xl font-mono">
          <Darkmode />
        </div>
      </section>
      <section className="flex items-center justify-center px-4 py-5 ">
        <SvgBackground />
      </section>
    </>
  );
};

export default Home;

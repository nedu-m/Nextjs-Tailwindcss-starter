import type { NextPage } from 'next';
import Darkmode from '@/components/Darkmode';
import SvgBackground from '@/components/SvgBackground';

const Home: NextPage = () => {
  return (
    <>
      <section className="flex items-center justify-between px-4 py-5">
        <div className="flex flex-wrap items-center text-2xl font-mono">
          <p>Nextjs + TypeScript + Tailwindcss Starter</p>
        </div>
        <div className="flex flex-wrap items-center text-3xl font-mono">
          <Darkmode />
        </div>
      </section>
      <section className="flex items-center justify-center px-4 py-5 ">
        <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex md:items-center md:justify- h-screen">
            <div className="md:shrink-0">
              <SvgBackground />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

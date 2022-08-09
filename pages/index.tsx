import type { NextPage } from 'next';
import Darkmode from '@hooks/Darkmode';
import SvgBackground from '@components/SvgBackground';
import Seo from '@components/Seo';

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="Nextjs + TypeScript + Tailwindcss Starter"
        description="Packed with Jest and Playwright for unit, integration and e2e testing, ready-to-use project starter."
      />
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

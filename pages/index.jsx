import Layout from '../components/Layout';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <Layout className="scroll-smooth">
      <Hero />
      <div className="lg:flex w-full">
        <Sidebar className="w-1/4" />
        <InfoSection className="w-3/4" />
      </div>
    </Layout>
  );
}

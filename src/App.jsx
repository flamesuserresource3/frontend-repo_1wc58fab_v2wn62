import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white selection:bg-cyan-400 selection:text-black">
      {/* Background grid aesthetic */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.12),transparent_35%)]" />
      <div className="pointer-events-none fixed inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:56px_56px]" />

      <Navbar />
      <main className="relative z-10">
        <Hero3D />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;

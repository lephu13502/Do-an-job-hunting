import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/landing/Header';
import WorkingSection from '../components/landing/WorkingSection';
import TeamSection from '../components/landing/TeamSection';
import ContactSection from '../components/landing/ContactSection';

export default function Home() {
    return (
        <>
            <div className="absolute w-full z-20">
                <Navbar />
            </div>
            <main>
                <Header />
                <WorkingSection />
                <TeamSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
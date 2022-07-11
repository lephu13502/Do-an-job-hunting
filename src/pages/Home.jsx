import DefaultNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/landing/Header';
import WorkingSection from '../components/landing/WorkingSection';
import TeamSection from '../components/landing/TeamSection';
import ContactSection from '../components/landing/ContactSection';
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'
import { Spinner } from 'react-bootstrap'
export default function Home() {
    const { loggedIn, checkingStatus } = useAuthStatus()
    if (checkingStatus) {
        return <Spinner animation="border" variant="warning" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
    }
    return loggedIn ? (<Navigate to='/explore' />) : ( 
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <WorkingSection />
                <TeamSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    )
}
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionHeader from './components/sectionHeader';
import Testimonial from './components/Testimonial';
import Buddies from './components/Buddies';
import ContactForm from './components/contactForm';
import { images, testimonials } from "./constants";


function App() {
    return (
        <>
            <div className="relative px-16 py-6">
                <header>
                <div id="home">
                  <Navbar />
                </div>
                </header>
                <main>
                  <Hero />
                  <div id="testimonials">
                  <SectionHeader title="TESTIMONIALS" />
                  <Testimonial testimonials={testimonials} autoPlay={false} interval={5000} />
                  </div>
                  <div id="buddies">
                  <SectionHeader title="BUDDIES" />
                  <Buddies images={images}/>
                  </div>
                  <div id="contact">
                  <SectionHeader title="ADOPT NOW" />
                  <ContactForm />
                  </div>
                </main>
                <footer className="text-secondary font-inter font-extralight text-sm text-center border-t-2 border-primary mt-4 p-2">
                  © Copyright Pawdopt 2024.
                </footer>
            </div>
        </>
    );
}

export default App;

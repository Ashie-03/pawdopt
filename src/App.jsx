import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionHeader from './components/sectionHeader';
import Testimonial from './components/Testimonial';
import Buddies from './components/Buddies';
import ContactForm from './components/ContactForm';
import { images, testimonials } from "./constants";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
    return (
      <Router>
            <div className="relative px-10 md:px-16 py-6">
                <header>
                  <Navbar />
                </header>
                <main>
                  <div id="home">
                    <Hero />
                  </div>
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
      </Router>
    );
}

export default App;

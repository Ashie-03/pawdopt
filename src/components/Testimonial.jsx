import { useState, useEffect } from 'react';

const Testimonial = ({ testimonials, autoPlay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipAnimate, setFlipAnimate] = useState(false); 

  // Auto-play logic
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(()=> {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, interval);

    // Cleanup interval
    return () => clearInterval(timer);
  }, [autoPlay, interval, testimonials.length]);

  // Manual Navigation
  const goToNextSlide = () => {
    setFlipAnimate(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }

  const goToPreviousSlide = () => {
    setFlipAnimate(true);
    setCurrentIndex((prevIndex) => 
    prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
  }

  // Reset animation class after it ends
  useEffect(() => {
    if (!flipAnimate) return;

    const timer = setTimeout(() => {
      setFlipAnimate(false);
    }, 500); // Duration of animation (should match the animation duration)

    return () => clearTimeout(timer);
  }, [flipAnimate]);


  return (
    <div className="relative flex flex-col items-center md:mb-14">
      {/* Arrows */}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 px-1 py-2 rounded w-8"
        onClick={goToPreviousSlide}
      >
        <img src="../src/assets/Prev_arrow.png" alt="Previous Slide Icon" />
      </button>

      {/* Slide Content */}
      <div className="md:w-3/4 flex items-center justify-center rounded-lg border-2 border-secondary">
        {testimonials[currentIndex].type === "text" ? (
          <div className={`text-center w-3/4 py-6 text-secondary transition-all duration-500 
          ${flipAnimate ? 'animate-flip-in-ver-left' : ''}`}>
            <p className="font-inter font-light text-sm md:text-lg">{testimonials[currentIndex].testimonial}</p>
            <p className="mt-4 font-inter font-medium">{testimonials[currentIndex].personName}</p>
            <p className="mt-2">{testimonials[currentIndex].rating}</p>
          </div>
        ) : (
          <img
            src={testimonials[currentIndex].src}
            alt={testimonials[currentIndex].alt}
            className="w-full h-full object-cover rounded-lg"
          />
        )}
      </div>

      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 px-1 py-2 w-8"
        onClick={goToNextSlide}
      >
        <img src="../src/assets/Next_arrow.png" alt="Previous Slide Icon" />
      </button>
    </div>
  );
};

export default Testimonial;
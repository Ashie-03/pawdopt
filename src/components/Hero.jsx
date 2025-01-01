import heroSm from '../assets/hero-sm.jpg';
import heroMd from '../assets/hero-md.jpg';


const Hero = () => {
  return (
    <div className='flex flex-col w-full mt-10 mb-12 max-h-screen'>
      <h1 className='w-full text-center text-4xl md:text-5xl text-secondary animate-text-focus-in'>A Paw-sitive Step Towards Love</h1>
      <h3 className='font-inter font-thin text-secondary text-center mt-2 relative z-10 animate-text-focus-in md:text-2xl'>Bring joy into your life and theirs.<br></br>Adopt a furry friend today!</h3>
      <picture className="md:h-80 h-48 mt-4">
        <source srcSet={heroSm} media="(max-width: 768px)" />
        <source srcSet={heroMd} media="(min-width: 769px)" />
        <img
          src={heroMd}
          alt="Vector image of a man holding a puppy"
          className="w-full h-full object-cover md:object-fill"
        />
      </picture>
    </div>
    

  )
}

export default Hero
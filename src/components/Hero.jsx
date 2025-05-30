import heroSm from '../assets/hero-sm.jpg';
import heroMd from '../assets/hero-md.jpg';
import Button from './Button';

const Hero = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row w-full mt-10 mb-12 max-h-screen gap-8 items-center'>
      <div className='flex-1 space-y-6'>
        <h1 className='text-4xl md:text-6xl text-secondary animate-text-focus-in leading-tight'>
          Find Your Perfect <span className='text-primary'>Furry</span> Companion
        </h1>
        <p className='font-inter font-light text-secondary text-lg md:text-xl animate-text-focus-in'>
          Every pet deserves a loving home. Browse our adorable adoptable pets and give them a second chance at happiness.
        </p>
        <div className='flex gap-4'>
          <Button ctaText="MEET THEM" ctaLink="#buddies" className="text-xl" />
          <Button ctaText="ADOPT NOW" ctaLink="#contact" className="text-xl bg-background hover:bg-primary" />
        </div>
      </div>
      <div className='flex-1'>
        <picture className="block w-full overflow-hidden rounded-2xl shadow-xl">
          <source srcSet={heroSm} media="(max-width: 768px)" />
          <source srcSet={heroMd} media="(min-width: 769px)" />
          <img
            src={heroMd}
            alt="Vector image of a man holding a puppy"
            className="w-full h-full object-cover animate-flip-in-ver-left"
          />
        </picture>
      </div>
    </div>
  )
}

export default Hero
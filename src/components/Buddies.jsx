import { useState } from "react";

const Buddies = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [wobbleAnimate, setWobbleAnimate] = useState(false);

  const handleThumbnailClick = (index) => {
    setWobbleAnimate(true);
    setSelectedIndex(index);

    setTimeout(() => {
      setWobbleAnimate(false);
    }, 700);
  };

  return (
    <div className="flex gap-3 md:gap-8 items-center justify-center">
      <div className="flex flex-col gap-2">
        {images.map((image, index) => (
          <button key={index} onClick={()=> 
            handleThumbnailClick(index)
          } className="w-12 md:w-16 focus:border-primary border-2 rounded-full border-background">
            <img src={image.src} alt={image.alt} />
          </button>
        ))}
      </div>
      <div className={`text-secondary border-2 border-primary w-full h-full md:w-2/4 p-3 md:p-6 rounded-lg  transition-all duration-500 ${wobbleAnimate ? 'animate-wobble-hor-top' : ''}`}>
        <div className="flex gap-1 md:gap-4 items-center">
          <img src={images[selectedIndex].path} alt={images[selectedIndex].alt} className="rounded-lg w-1/2 md:w-full"/>
          <div className="text-center md:w-3/4 ">
          <h3 className="m-auto text-lg md:text-2xl">Meet {images[selectedIndex].name}</h3>
          <p className="font-inter font-extralight text-sm md:text-md text-center mt-4 hidden md:block">{images[selectedIndex].content}</p>
          </div>
        </div>
        <p className="font-inter font-extralight text-sm text-center mt-4 md:hidden">{images[selectedIndex].content}</p>
      </div>
    </div>
  )
};

export default Buddies;
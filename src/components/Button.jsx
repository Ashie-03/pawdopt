import { HashLink } from 'react-router-hash-link';

const Button = ({ ctaText, ctaLink, className = "", disabled = false }) => {
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault()
      return 
    }
  }

  return (
    <HashLink smooth to={disabled ? "#contact" : ctaLink} className={`py-2 px-4 rounded-xl bg-primary border border-secondary hover:bg-background ${
      disabled
        ? "bg-gray-400 cursor-not-allowed text-white border-gray-400"
        : "bg-primary border-secondary hover:bg-background"
    } ${className}`} aria-label={ ctaText } tabIndex={disabled ? -1 : 0} onClick={handleClick}>
      { ctaText }
    </HashLink>
  )
};

export default Button;


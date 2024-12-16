

const Button = ({ ctaText, ctaLink, className = "" }) => {
  return (
    <a href={ctaLink} className={`py-2 px-4 rounded-xl bg-primary border border-secondary hover:bg-background ${className}`} aria-label={ ctaText }>{ ctaText }</a>
  )
};

export default Button;


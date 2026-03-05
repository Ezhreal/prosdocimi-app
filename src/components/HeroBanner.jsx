import SectionLabel from './SectionLabel';
import lineBg from '../assets/images/line-background-blue.png';
import './HeroBanner.css';

export default function HeroBanner({
  sectionLabel,
  title,
  subtitle,
  image,
  dark = true,
  showLine = false,
}) {
  const style = image
    ? { backgroundImage: `linear-gradient(rgba(2, 36, 54, 0.7), rgba(2, 36, 54, 0.7)), url(${image})` }
    : { background: 'var(--gradient)' };

  return (
    <section className="hero-banner" style={style}>
      {showLine && (
        <img
          src={lineBg}
          alt=""
          className="hero-banner-line"
          aria-hidden
        />
      )}
      <div className="container hero-banner-inner">
        {sectionLabel && (
          <SectionLabel className="hero-banner-label">{sectionLabel}</SectionLabel>
        )}
        <h1 className="hero-banner-title">{title}</h1>
        {subtitle && <p className="hero-banner-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

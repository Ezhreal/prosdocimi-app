export default function SectionLabel({ children, className = '', light }) {
  return (
    <p className={`section-label ${light ? 'section-label--light' : ''} ${className}`}>
      {children}
    </p>
  );
}

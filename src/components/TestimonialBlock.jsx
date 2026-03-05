import { Star } from 'lucide-react';
import { TEXT_LONG } from '../constants/texts';
import './TestimonialBlock.css';

export default function TestimonialBlock({
  quote = TEXT_LONG,
  author = 'MATTHEW JOHNSON',
  company = 'Dynamic Company',
}) {
  return (
    <section className="testimonial-block">
      <div className="container">
        <div className="testimonial-inner">
          <span className="testimonial-quote-mark">"</span>
          <div className="testimonial-content">
            <p className="testimonial-text">{quote}</p>
            <p className="testimonial-author">{author}</p>
            <p className="testimonial-company">{company}</p>
            <div className="testimonial-stars">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

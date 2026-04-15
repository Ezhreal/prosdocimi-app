import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants/testimonials';
import './TestimonialBlock.css';

export default function TestimonialBlock({
  items,
  quote,
  author,
  company,
}) {
  const list =
    items && items.length > 0
      ? items
      : quote
        ? [{ quote, author: author || '—', company: company || '' }]
        : TESTIMONIALS;

  const [index, setIndex] = useState(0);
  const total = list.length;
  const current = list[index];

  const go = useCallback(
    (delta) => {
      setIndex((i) => (i + delta + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (total <= 1) return undefined;
    const id = setInterval(() => go(1), 8000);
    return () => clearInterval(id);
  }, [total, go]);

  return (
    <section className="testimonial-block">
      <div className="container">
        <div className="testimonial-inner">
          <span className="testimonial-quote-mark">"</span>
          <div className="testimonial-content">
            <p className="testimonial-text">{current.quote}</p>
            <p className="testimonial-author">{current.author}</p>
            {current.company ? (
              <p className="testimonial-company">{current.company}</p>
            ) : null}
            <div className="testimonial-stars">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            {total > 1 && (
              <div className="testimonial-nav">
                <button
                  type="button"
                  className="testimonial-nav-btn"
                  onClick={() => go(-1)}
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft size={22} />
                </button>
                <div className="testimonial-dots" role="tablist" aria-label="Selecionar depoimento">
                  {list.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`testimonial-dot ${i === index ? 'active' : ''}`}
                      onClick={() => setIndex(i)}
                      aria-label={`Depoimento ${i + 1} de ${total}`}
                      aria-current={i === index ? 'true' : undefined}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="testimonial-nav-btn"
                  onClick={() => go(1)}
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight size={22} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

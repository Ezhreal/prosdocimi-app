import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Rotas só leitura: sem scroll suave nem animação de revelação (IntersectionObserver). */
const STATIC_PAGE_PATHS = ['/termos', '/privacidade'];

export default function RouteEffects() {
  const { pathname } = useLocation();
  const isStaticLegalPage = STATIC_PAGE_PATHS.includes(pathname);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: isStaticLegalPage ? 'auto' : 'smooth',
    });
  }, [pathname, isStaticLegalPage]);

  useEffect(() => {
    if (isStaticLegalPage) {
      return undefined;
    }

    const selector = [
      'main section .container .section-label',
      'main section .container h1',
      'main section .container h2',
      'main section .container h3',
      'main section .container p',
      'main section img',
      'main section .container .btn-primary',
      'main section .container .btn-outline',
      'main section .container .btn-outline-white',
      'main section .home-service-card',
      'main section .sobre-card',
      'main section .treinamentos-grid-item',
      'main section .treinamentos-demand-item',
      'main section .workshop-item',
      'main section .case-insight',
      'main section .instagram-item',
      'main section .faq-item',
      'main section .contato-info-item',
    ].join(', ');

    const targets = Array.from(document.querySelectorAll(selector)).filter(
      (el) => !el.closest('.home-parallax, .sobre-parallax, .contato-parallax'),
    );
    if (!targets.length) return undefined;

    targets.forEach((target, index) => {
      target.classList.add('reveal-item');
      target.style.setProperty('--reveal-delay', `${Math.min(index * 45, 520)}ms`);
    });

    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('reveal-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => entry.target.classList.add('reveal-visible'));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      targets.forEach((target) => target.style.removeProperty('--reveal-delay'));
    };
  }, [pathname, isStaticLegalPage]);

  return null;
}

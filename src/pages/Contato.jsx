import { useState } from 'react';
import SectionLabel from '../components/SectionLabel';
import imgParallax from '../assets/images/img-parallax-background.jpg';
import lineBg from '../assets/images/line-background-blue.png';
import { MessageCircle, Mail } from 'lucide-react';
import './Contato.css';

const FAQ_ITEMS = [
  {
    q: 'Quais serviços a Prosdocimi oferece?',
    a: 'Oferecemos consultoria, auditoria e treinamentos em sistemas de gestão - como ISO 9001, ISO 14001, ISO 45001, NBR ISO 37001, entre outras. Também auxiliamos empresas de construção no atendimento à NBR 15575 – a norma de desempenho para construções residenciais. Atendemos diversos segmentos como construção civil, transportes, indústria, mineração e prestação de serviços.',
  },
  {
    q: 'Como agendo uma consultoria?',
    a: 'Entre em contato pelo formulário, e-mail ou WhatsApp. Nossos consultores vão entender suas necessidades e montar uma proposta personalizada.',
  },
  {
    q: 'Em quais segmentos vocês atuam?',
    a: 'Atuamos com clientes de quaisquer segmentos, principalmente em construção civil, incorporação imobiliária, infraestrutura urbana, transportes, indústria, mineração e prestação de serviços.',
  },
  {
    q: 'Qual é o prazo típico de uma consultoria?',
    a: 'O prazo varia conforme o escopo e os objetivos de cada cliente. Montamos o plano de acordo com a sua disponibilidade e metas - seja para certificação ou para melhoria de processos.',
  },
  {
    q: 'Vocês oferecem suporte após o projeto?',
    a: 'Sim. Nossos consultores ficam disponíveis para esclarecimentos e visitas sempre que necessário, mesmo após a conclusão do projeto.',
  },
  {
    q: 'Qual é a qualificação dos consultores?',
    a: 'Nossa equipe possui profissionais com larga experiência em auditorias, treinamentos e consultorias, com atuação em todo o Brasil e conhecimento técnico nas principais normas nacionais e internacionais de gestão.',
  },
];

export default function Contato() {
  const [form, setForm] = useState({ nome: '', telefone: '', email: '', mensagem: '' });
  const [errors, setErrors] = useState({});
  const [openFaq, setOpenFaq] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.nome.trim()) e.nome = 'Nome é obrigatório';
    if (!form.telefone.trim()) e.telefone = 'Telefone é obrigatório';
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) e.email = 'Email é obrigatório';
    else if (!emailRe.test(form.email)) e.email = 'Email inválido';
    if (!form.mensagem.trim()) e.mensagem = 'Mensagem é obrigatória';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    // enviar formulário (sem tag form - div com handlers)
    alert('Mensagem enviada! (simulado)');
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  return (
    <>
      <section className="contato-header" style={{ backgroundImage: `url(${lineBg})` }}>
        <div className="container contato-header-inner">
          <SectionLabel>CONTATO</SectionLabel>
          <h1>Vamos conversar?</h1>
        </div>
      </section>

      <section className="contato-form-section">
        <div className="container">
          <div className="contato-form-card">
            <div className="contato-form-inner">
              <div className="contato-field contato-field-full">
                <label htmlFor="nome">Nome *</label>
                <input
                  id="nome"
                  type="text"
                  value={form.nome}
                  onChange={(e) => handleChange('nome', e.target.value)}
                  className={errors.nome ? 'error' : ''}
                />
                {errors.nome && <span className="contato-error">{errors.nome}</span>}
              </div>
              <div className="contato-row">
                <div className="contato-field">
                  <label htmlFor="telefone">Telefone *</label>
                  <input
                    id="telefone"
                    type="tel"
                    value={form.telefone}
                    onChange={(e) => handleChange('telefone', e.target.value)}
                    className={errors.telefone ? 'error' : ''}
                  />
                  {errors.telefone && <span className="contato-error">{errors.telefone}</span>}
                </div>
                <div className="contato-field">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="contato-error">{errors.email}</span>}
                </div>
              </div>
              <div className="contato-field contato-field-full">
                <label htmlFor="mensagem">Mensagem *</label>
                <textarea
                  id="mensagem"
                  value={form.mensagem}
                  onChange={(e) => handleChange('mensagem', e.target.value)}
                  rows={5}
                  minLength={10}
                  className={errors.mensagem ? 'error' : ''}
                />
                {errors.mensagem && <span className="contato-error">{errors.mensagem}</span>}
              </div>
              <button type="button" className="btn-primary contato-submit" onClick={handleSubmit}>
                Enviar mensagem
              </button>
            </div>
          </div>

          <div className="contato-info">
            <h3 className="contato-info-title">Informações de Contato</h3>
            <div className="contato-info-item">
              <MessageCircle size={20} color="var(--gray-text)" />
              <a href="https://wa.me/5531999520720" target="_blank" rel="noreferrer">
                Fale conosco pelo WhatsApp
              </a>
            </div>
            <div className="contato-info-item">
              <Mail size={20} color="var(--gray-text)" />
              <a href="mailto:consultoria@prosdocimiconsultoria.com.br">
                consultoria@prosdocimiconsultoria.com.br
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contato-parallax" style={{ backgroundImage: `url(${imgParallax})` }} />

      <section className="contato-faq">
        <div className="container">
          <h2>Perguntas Frequentes</h2>
          <p className="contato-faq-sub">
            Respostas para as dúvidas mais comuns sobre nossos serviços
          </p>
          <div className="contato-faq-grid">
            <div className="contato-faq-column">
              {FAQ_ITEMS.slice(0, 3).map((item, i) => (
                <div
                  key={i}
                  className={`faq-item ${openFaq === i ? 'open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="faq-question">
                    <span>{item.q}</span>
                    <span className="faq-icon">{openFaq === i ? '×' : '+'}</span>
                  </div>
                  {openFaq === i && <div className="faq-answer">{item.a}</div>}
                </div>
              ))}
            </div>
            <div className="contato-faq-column">
              {FAQ_ITEMS.slice(3, 6).map((item, i) => (
                <div
                  key={i}
                  className={`faq-item ${openFaq === i + 3 ? 'open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i + 3 ? null : i + 3)}
                >
                  <div className="faq-question">
                    <span>{item.q}</span>
                    <span className="faq-icon">{openFaq === i + 3 ? '×' : '+'}</span>
                  </div>
                  {openFaq === i + 3 && <div className="faq-answer">{item.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

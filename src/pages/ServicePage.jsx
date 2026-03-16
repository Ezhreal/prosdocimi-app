import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import SectionLabel from '../components/SectionLabel';
import ComoFazemos from '../components/ComoFazemos';
import CaseSection from '../components/CaseSection';
import TestimonialBlock from '../components/TestimonialBlock';
import headerServices from '../assets/images/header-services.jpg';
import casesPortfolio from '../assets/images/cases-portfolio.png';
import lineBg from '../assets/images/line-background-blue.png';
import { TEXT_LONG, TEXT_SHORT } from '../constants/texts';
import './ServicePage.css';

const SERVICE_CONFIG = {
  Consultorias: {
    hero: {
      subtitle: 'Gestão que transforma - Inteligência em consultoria para impulsionar resultados',
    },
    intro: {
      title: 'Uma consultoria feita do seu jeito',
      left: 'Oferecemos soluções para implantação, manutenção e melhoria contínua de sistemas de gestão. Você escolhe a modalidade: presencial, online ou híbrida. Contamos com a disponibilidade dos nossos consultores para apresentar as melhores respostas e realizar visitas sempre que necessário.',
      right: 'Cada proposta é elaborada de acordo com a realidade do cliente, recursos disponíveis, prazo desejado e objetivos reais. Nossa abordagem vai além da certificação - alinhamos os resultados às expectativas das partes interessadas.',
      cta: 'Vamos trabalhar juntos',
    },
    how: {
      label: 'COMO FAZEMOS',
      title: 'Do diagnóstico à melhoria contínua',
      subtitle: 'Um processo estruturado, transparente e adaptado à sua empresa.',
      steps: [
        {
          title: 'Diagnóstico inicial',
          text: 'Avaliamos a situação atual da sua empresa, identificando lacunas e oportunidades em relação às normas e aos objetivos estratégicos.',
        },
        {
          title: 'Plano de ação personalizado',
          text: 'Desenvolvemos um roteiro sob medida, com metas, prazos e responsabilidades claras para toda a equipe envolvida.',
        },
        {
          title: 'Acompanhamento e resultados',
          text: 'Acompanhamos cada etapa da implantação, garantindo evolução real - e não apenas a aprovação em uma auditoria.',
        },
      ],
      ctaLabel: 'Solicite uma proposta',
    },
    portfolio: {
      label: 'PORTFÓLIO',
      title: 'Dezenas de empresas em todo o Brasil',
      text: 'Ao longo de mais de 20 anos, apoiamos empresas de construção civil, transportes, indústria, mineração e prestação de serviços na conquista de certificações e melhoria de processos.',
      ctaLabel: 'Baixar portfólio',
    },
  },
  Auditoria: {
    hero: {
      subtitle: 'Avaliações imparciais. Resultados reais.',
    },
    intro: {
      title: 'Avaliações imparciais para alinhar sua operação aos resultados esperados.',
      left: 'Nosso trabalho vai além de validar processos - buscamos identificar desvios reais que impedem sua empresa de alcançar os resultados esperados. Com mais de 20 anos de experiência, a Prosdocimi vai aonde você precisar.',
      right: 'Alinhar desempenho, custos, qualidade, segurança, sustentabilidade e conformidade legal: estes são os objetivos das nossas avaliações. Uma auditoria focada em resultados.',
      cta: 'Vamos trabalhar juntos',
    },
    how: {
      label: 'COMO FAZEMOS',
      title: 'Uma auditoria feita para gerar valor',
      subtitle: 'Metodologia estruturada, foco em resultados e atuação em todo o Brasil.',
      steps: [
        {
          title: 'Planejamento da auditoria',
          text: 'Definimos escopo, critérios e agenda junto com sua equipe, garantindo uma avaliação completa e alinhada aos objetivos da organização.',
        },
        {
          title: 'Execução e evidências',
          text: 'Realizamos entrevistas, inspeções e análise documental buscando evidências reais de conformidade ou desvio - sem superficialidade.',
        },
        {
          title: 'Relatório e plano de melhoria',
          text: 'Entregamos um relatório claro, com constatações objetivas e recomendações práticas para que sua empresa evolua de verdade.',
        },
      ],
      ctaLabel: 'Solicite uma proposta',
    },
    portfolio: {
      label: 'PORTFÓLIO',
      title: 'Dezenas de empresas em todo o Brasil',
      text: 'Ao longo de mais de 20 anos, apoiamos empresas de construção civil, transportes, indústria, mineração e prestação de serviços na conquista de certificações e melhoria de processos.',
      ctaLabel: 'Baixar portfólio',
    },
  },
};

function getCasesForService(heroTitle) {
  if (heroTitle === 'Consultorias') {
    return [
      {
        reverse: false,
        title: 'Grupo SAS',
        description: 'Parceria de mais de 20 anos em consultoria e auditoria que co-construiu a evolução da governança do Grupo SAS.',
        bullets: [
          {
            title: 'Parceria de longo prazo gera escala com controle',
            text: '20 anos de atuação contínua permitiram que a Prosdocimi não apenas auditasse, mas co-construísse a evolução da governança do Grupo SAS, algo impossível em relações transacionais.',
          },
          {
            title: 'Tecnologia como alavanca de padronização',
            text: 'A implantação de EAD e de um sistema próprio de gestão de auditorias transformou processos artesanais em soluções escaláveis, com maior alcance e rastreabilidade.',
          },
          {
            title: 'Apoio no nascimento de novos negócios',
            text: 'A criação da SAS Inspeções evidencia que a consultoria evoluiu para um papel estratégico: não só melhorar o que existe, mas estruturar o que ainda vai existir.',
          },
        ],
      },
      {
        reverse: true,
        title: 'Clam Ambiental',
        description: 'Projeto focado em SSO que posicionou a Clam Ambiental como referência em gestão de riscos para grandes contratantes.',
        bullets: [
          {
            title: 'Coragem regulatória recompensada',
            text: 'Decidir pela ISO 45001 antes da ISO 9001 foi uma aposta ousada que gerou diferenciação competitiva real, fortalecendo a posição da empresa junto a grandes contratantes.',
          },
          {
            title: 'SSO como fator de credibilidade comercial',
            text: 'A certificação não foi apenas um selo: ela ampliou a confiança de clientes na capacidade da Clam de gerir riscos em campo, convertendo conformidade em oportunidade de negócio.',
          },
          {
            title: 'Resultados expressivos em tempo comprimido',
            text: 'Em pouco mais de um ano, a Clam estruturou melhor seus processos, alcançou certificação internacional, provando que velocidade e solidez podem coexistir com a metodologia certa.',
          },
        ],
      },
      {
        reverse: false,
        title: 'Emccamp Residencial',
        description: 'Uma jornada que começou em auditoria e evoluiu para transformação completa de processos construtivos e de pós-entrega.',
        bullets: [
          {
            title: 'Da auditoria à transformação de processos',
            text: 'O que começou como auditoria de SGQ evoluiu para um redesenho abrangente de incorporação, da gestão  de saúde e segurança ocupacional e do pós-entrega, mostrando como a porta de entrada pode levar muito além do escopo original.',
          },
          {
            title: 'Dados no lugar de “achismos”',
            text: 'A metodologia quantitativa para análise de patologias e solicitações pós-entrega substituiu decisões intuitivas por evidências técnicas, elevando a qualidade e reduzindo custos recorrentes.',
          },
          {
            title: 'Crescimento com padronização',
            text: 'A expansão em VGV, cidades e portfólio foi acompanhada de uniformização entre MG, RJ e SP — crescer sem perder controle é o resultado mais valioso de um sistema de gestão bem implementado.',
          },
        ],
      },
    ];
  }

  if (heroTitle === 'Auditoria') {
    return [
      {
        reverse: false,
        title: 'Samid Transportes',
        description: 'Evolução estruturada de sistema de gestão em transporte, unindo certificações e resultados operacionais.',
        bullets: [
          {
            title: 'Maturidade construída em camadas',
            text: 'A jornada da ISO 9001 (2015) até o Sassmaq (2026) ilustra como a evolução gradual e sustentada de um sistema de gestão é mais eficaz do que saltos bruscos sem base consolidada.',
          },
          {
            title: 'Indicadores que provam valor',
            text: 'Redução de sinistralidade, menos multas e maior aprovação em auditorias de clientes são resultados concretos que traduziram conformidade em vantagem competitiva real no mercado de transporte.',
          },
          {
            title: 'Certificação como passaporte de fornecedor',
            text: 'O aumento na aprovação para cadastro em clientes mostra que as certificações conquistadas não são apenas internas: elas abriram portas comerciais diretamente.',
          },
        ],
      },
      {
        reverse: true,
        title: 'Log Commercial Properties',
        description: 'Auditoria integrada que posicionou a gestão de riscos como eixo central da tomada de decisão corporativa.',
        bullets: [
          {
            title: 'Auditoria como instrumento de Compliance',
            text: 'A abordagem integrou riscos técnicos, jurídicos, reputacionais e de segurança em uma visão unificada, posicionando a auditoria como ferramenta central da gestão de riscos corporativos.',
          },
          {
            title: 'Escala e rigor simultâneos',
            text: '48 dias de auditoria, 9 estados, 542.000 m² e mais de 1.900 itens avaliados demonstram que é possível operar com alto volume sem abrir mão da profundidade técnica.',
          },
          {
            title: 'Evidências que movem decisões',
            text: 'Os achados não ficaram no relatório: eles embasaram decisões de investimento, priorizaram ações corretivas e revisaram padrões documentados, fechando o ciclo entre diagnóstico e ação gerencial.',
          },
        ],
      },
    ];
  }

  return [
    {
      reverse: false,
      title: null,
      description: null,
      bullets: null,
    },
  ];
}

export default function ServicePage({ heroTitle, sectionLabel = 'Serviços' }) {
  const cases = getCasesForService(heroTitle);
  const config = SERVICE_CONFIG[heroTitle] || {};

  return (
    <>
      <HeroBanner
        sectionLabel={sectionLabel}
        title={heroTitle}
        subtitle={config.hero?.subtitle || TEXT_SHORT}
        image={headerServices}
        fullWidth
      />

      <section className="service-desc">
        <div className="container">
          <div className="service-desc-grid-wrap">
            <div className="service-desc-line-col">
              <div className="service-desc-line" />
            </div>
            <div className="service-desc-content">
              <h2>{config.intro?.title || 'Nulla mus donec a quisque convallis integer'}</h2>
              <div className="service-desc-grid">
                <p>
                  {config.intro?.left || TEXT_LONG}
                </p>
                <p>
                  {config.intro?.right || TEXT_LONG}
                </p>
              </div>
              <Link to="/contato" className="service-desc-link">
                {config.intro?.cta || 'Vamos trabalhar juntos →'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ComoFazemos
        label={config.how?.label}
        title={config.how?.title}
        subtitle={config.how?.subtitle}
        steps={config.how?.steps}
        ctaLabel={config.how?.ctaLabel}
      />

      {cases.map((cfg, index) => (
        <CaseSection
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          reverse={cfg.reverse}
          title={cfg.title}
          description={cfg.description}
          bullets={cfg.bullets}
        />
      ))}

      <section className="service-testimonial">
        <TestimonialBlock />
      </section>

      <section
        className="service-portfolio"
        style={{
          backgroundImage: `url(${lineBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container">
          <div className="service-portfolio-grid">
            <div className="service-portfolio-content">
              <SectionLabel>{config.portfolio?.label || 'Portfólio'}</SectionLabel>
              <h2>{config.portfolio?.title || 'Nulla mus donec a quisque convallis'}</h2>
              <p>
                {config.portfolio?.text || TEXT_LONG}
              </p>
              <Link to="/contato" className="btn-primary">
                {config.portfolio?.ctaLabel || 'Btn de Download'}
              </Link>
            </div>
            <div className="service-portfolio-img">
              <img src={casesPortfolio} alt="Portfólio" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import lineBg from '../assets/images/line-background-blue.png';
import './Legal.css';

export default function Termos() {
  return (
    <>
      <section className="legal-header" style={{ backgroundImage: `url(${lineBg})` }}>
        <div className="container legal-header-inner">
          <SectionLabel>LEGAL</SectionLabel>
          <h1>Termo de uso</h1>
          <p className="legal-updated">Última atualização: 19 de abril de 2026</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="container legal-prose">
          <p>
            Este Termo de Uso regula o acesso e a utilização do site institucional da <strong>Prosdocimi</strong>,
            empresa fundada em Belo Horizonte (MG), que oferece <strong>consultoria, auditoria e treinamentos</strong>{' '}
            em sistemas de gestão e serviços correlatos, conforme descrito nas páginas deste site.
          </p>

          <h2>1. Aceitação</h2>
          <p>
            Ao navegar, visualizar conteúdos ou utilizar os recursos disponibilizados neste site (incluindo links para
            contato, redes sociais e WhatsApp), você declara ter lido e compreendido este Termo. Se não concordar,
            recomendamos interromper o uso do site.
          </p>

          <h2>2. Objeto do site</h2>
          <p>
            O site tem caráter <strong>informativo e institucional</strong>, apresentando a atuação da Prosdocimi em
            consultoria, auditoria e treinamentos, cases, depoimentos e canais de contato. Informações sobre prazos,
            escopos, propostas comerciais e condições contratuais são tratadas diretamente com a equipe, por meio dos
            canais indicados na página <Link to="/contato">Contato</Link>, e não substituem documentos formais de
            proposta ou contrato.
          </p>

          <h2>3. Uso permitido</h2>
          <p>É permitido acessar o site de forma razoável, para consulta e contato legítimo com a Prosdocimi.</p>
          <p>É vedado, entre outros:</p>
          <ul>
            <li>utilizar o site de modo a prejudicar sua disponibilidade, segurança ou integridade;</li>
            <li>tentar obter acesso não autorizado a sistemas, redes ou dados;</li>
            <li>reproduzir, copiar ou distribuir conteúdos do site para fins comerciais não autorizados pela Prosdocimi;</li>
            <li>utilizar robôs ou meios automatizados de forma abusiva, salvo quando permitido por lei ou acordo prévio.</li>
          </ul>

          <h2>4. Propriedade intelectual</h2>
          <p>
            Marcas, logotipos, textos, layout, imagens e demais conteúdos exibidos neste site são de titularidade da
            Prosdocimi ou de terceiros que autorizaram o uso. Nenhum direito é concedido além da visualização para uso
            pessoal e informativo, salvo autorização expressa por escrito.
          </p>

          <h2>5. Limitação de responsabilidade</h2>
          <p>
            As informações publicadas refletem o contexto vigente à época da atualização das páginas. A Prosdocimi
            envida esforços para manter o conteúdo adequado, porém não garante que esteja livre de erros ou omissões.
            Decisões de negócio ou técnicas devem ser fundamentadas em diagnóstico específico e instrumentos formais de
            contratação.
          </p>
          <p>
            Links para sites de terceiros (redes sociais, WhatsApp, parceiros) são oferecidos apenas para conveniência; a
            Prosdocimi não controla esses ambientes e não se responsabiliza por suas políticas ou conteúdos.
          </p>

          <h2>6. Privacidade</h2>
          <p>
            O tratamento de dados pessoais realizado em conexão com este site é descrito na nossa{' '}
            <Link to="/privacidade">Política de Privacidade</Link>, em conformidade com a Lei Geral de Proteção de Dados
            (Lei nº 13.709/2018).
          </p>

          <h2>7. Alterações</h2>
          <p>
            Este Termo pode ser atualizado a qualquer momento. A data da última versão constará no topo desta página.
            Recomenda-se revisão periódica. O uso continuado do site após alterações constitui ciência das novas condições.
          </p>

          <h2>8. Lei aplicável e foro</h2>
          <p>
            Este Termo é regido pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de Belo
            Horizonte, Estado de Minas Gerais, para dirimir questões relacionadas a este documento, salvo disposição legal
            em contrário em relação a consumidores.
          </p>

          <h2>9. Contato</h2>
          <p>
            Para dúvidas sobre este Termo de Uso:{' '}
            <a href="mailto:consultoria@prosdocimiconsultoria.com.br">consultoria@prosdocimiconsultoria.com.br</a>
          </p>
        </div>
      </section>
    </>
  );
}

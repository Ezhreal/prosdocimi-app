import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import lineBg from '../assets/images/line-background-blue.png';
import './Legal.css';

export default function Privacidade() {
  return (
    <>
      <section className="legal-header" style={{ backgroundImage: `url(${lineBg})` }}>
        <div className="container legal-header-inner">
          <SectionLabel>LEGAL</SectionLabel>
          <h1>Política de privacidade</h1>
          <p className="legal-updated">Última atualização: 19 de abril de 2026</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="container legal-prose">
          <p>
            A <strong>Prosdocimi</strong> respeita a privacidade dos visitantes e dos interessados em seus serviços de{' '}
            <strong>consultoria, auditoria e treinamentos</strong>. Esta Política descreve como tratamos dados pessoais em
            conexão com o uso deste site institucional, em linha com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 —
            LGPD).
          </p>

          <h2>1. Controlador</h2>
          <p>
            O tratamento de dados ligado à prospecção de clientes e ao contato por meio deste site é de responsabilidade da
            Prosdocimi, com atuação histórica em Belo Horizonte (MG), conforme informações institucionais publicadas na
            página <Link to="/sobre">Sobre</Link>. Razão social e CNPJ podem ser informados mediante solicitação pelo canal
            indicado na seção “Contato” desta política.
          </p>

          <h2>2. Quais dados podemos tratar</h2>
          <p>Conforme sua interação conosco, podem ser tratados, entre outros:</p>
          <ul>
            <li>
              <strong>Dados enviados no formulário de contato:</strong> nome, telefone, e-mail e conteúdo da mensagem —
              quando você opta por nos escrever pela página <Link to="/contato">Contato</Link>;
            </li>
            <li>
              <strong>Dados de canal direto:</strong> número de telefone e demais informações que você voluntariamente
              compartilhar ao nos contatar pelo <strong>WhatsApp</strong> (serviço operado pela Meta), ou por{' '}
              <strong>e-mail</strong> em <a href="mailto:consultoria@prosdocimiconsultoria.com.br">consultoria@prosdocimiconsultoria.com.br</a>;
            </li>
            <li>
              <strong>Dados de navegação e dispositivo:</strong> informações técnicas usuais em conexões com sites na
              internet, como endereço IP, tipo de navegador, páginas acessadas e horários aproximados — inclusive nas
              operações de <strong>hospedagem</strong> do site (por exemplo, em provedores como o GitHub Pages, quando
              aplicável ao ambiente em que o site está publicado), conforme práticas do provedor de infraestrutura.
            </li>
          </ul>

          <h2>3. Finalidades e bases legais (LGPD)</h2>
          <p>Tratamos dados pessoais para:</p>
          <ul>
            <li>
              <strong>Responder solicitações e prestar informações</strong> sobre serviços de consultoria, auditoria e
              treinamentos — com base no seu consentimento, ao enviar o formulário ou iniciar contato, e/ou na execução de
              procedimentos preliminares a eventual contrato, conforme o caso;
            </li>
            <li>
              <strong>Manter comunicação comercial adequada</strong> com quem demonstrou interesse legítimo nos serviços,
              observando seus direitos e preferências;
            </li>
            <li>
              <strong>Cumprir obrigações legais</strong> e defender direitos em processos administrativos ou judiciais,
              quando necessário;
            </li>
            <li>
              <strong>Garantir segurança e funcionamento</strong> do site e prevenir fraudes ou usos indevidos (legítimo
              interesse, observado o equilíbrio com seus direitos).
            </li>
          </ul>

          <h2>4. Compartilhamento de dados</h2>
          <p>
            Não vendemos dados pessoais. Podemos compartilhar informações com <strong>prestadores de serviço</strong>{' '}
            necessários à operação do site (hospedagem, ferramentas de e-mail ou de comunicação), com contratos ou
            cláusulas compatíveis com a LGPD, e com <strong>autoridades</strong> quando houver obrigação legal.
          </p>
          <p>
            Ao usar o <strong>WhatsApp</strong> ou visitar nossos perfis em <strong>Facebook, Instagram ou LinkedIn</strong>, aplicam-se também as políticas de privacidade e termos dessas plataformas. Indicamos os perfis institucionais acessíveis pelo rodapé deste site.
          </p>

          <h2>5. Prazo de armazenamento</h2>
          <p>
            Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas, respeitando prazos legais e a
            necessidade de eventual defesa de direitos. Mensagens de contato podem ser arquivadas em histórico operacional
            da empresa pelo período razoável para relacionamento com clientes e prospects.
          </p>

          <h2>6. Seus direitos (titular dos dados)</h2>
          <p>Nos termos da LGPD, você pode solicitar:</p>
          <ul>
            <li>confirmação da existência de tratamento;</li>
            <li>acesso aos dados;</li>
            <li>correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
            <li>informação sobre compartilhamentos;</li>
            <li>revogação do consentimento, quando aplicável.</li>
          </ul>
          <p>
            Para exercer esses direitos ou esclarecer dúvidas sobre privacidade, utilize o e-mail abaixo. Em alguns casos
            poderemos solicitar informações para confirmar sua identidade.
          </p>

          <h2>7. Cookies e tecnologias similares</h2>
          <p>
            Este site pode utilizar cookies ou tecnologias equivalentes estritamente necessários ao funcionamento da
            aplicação ou à preferência de idioma/exibição. Caso no futuro sejam implementados cookies de medição de
            audiência ou marketing, esta política será atualizada e, quando exigido, será solicitado consentimento
            específico.
          </p>

          <h2>8. Segurança</h2>
          <p>
            Adotamos medidas técnicas e organizacionais proporcionais para proteger dados pessoais contra acessos não
            autorizados e situações acidentais ou ilícitas de destruição, perda ou alteração. Nenhum sistema é
            absolutamente invulnerável; recomendamos também o uso de canais seguros ao enviar informações sensíveis.
          </p>

          <h2>9. Alterações desta política</h2>
          <p>
            Podemos atualizar este texto para refletir mudanças no site, na legislação ou na forma de tratamento de dados.
            A data da versão vigente aparece no topo da página. Em alterações relevantes, poderemos destacar o aviso no
            site ou pelos meios de contato utilizados com você.
          </p>

          <h2>10. Contato</h2>
          <p>
            Privacidade e proteção de dados:{' '}
            <a href="mailto:consultoria@prosdocimiconsultoria.com.br">consultoria@prosdocimiconsultoria.com.br</a>
          </p>
          <p>
            Para o <Link to="/termos">Termo de Uso</Link> do site, consulte a página dedicada.
          </p>
        </div>
      </section>
    </>
  );
}

// Página de exemplo — Server Component: tudo sai pronto no HTML. Troque pelo conteúdo do projeto.
import { DsButton, DsCard, DsCarousel, DsPageHeader, DsSectionHeading } from "@plataforma-xvia/ds-react/server";
import { SITE } from "./site";

const CARDS = [
  { titulo: "Grade de cards", icone: "check-circle", texto: "Cards com a mesma altura e botão sempre embaixo (slot footer)." },
  { titulo: "Carrossel", icone: "arrow-right", texto: "DsCarousel com cards de altura igual e trilha centralizada." },
  { titulo: "Guia do DS", icone: "book", texto: "Instalação, componentes, receitas e erros comuns no Backstage." },
];

export default function Pagina() {
  return (
    <>
      <div className="section section--muted">
        <div className="wrap">
          <DsPageHeader eyebrow="SETDIG" heading={SITE.titulo} description={SITE.descricao} icon="home" />
        </div>
      </div>

      <section className="section" id="exemplos">
        <div className="wrap">
          <DsSectionHeading heading="Grade" headingLevel="2" />
          <div className="grid">
            {CARDS.map((c) => (
              <DsCard key={c.titulo} heading={c.titulo} headingLevel="3" icon={c.icone}>
                <p>{c.texto}</p>
                <div slot="footer" className="acoes">
                  <DsButton href="https://designsystem.digital.ms.gov.br" target="_blank" rel="noopener" variant="primary" fullWidth>
                    Ver no Storybook
                  </DsButton>
                </div>
              </DsCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="wrap">
          <DsSectionHeading heading="Carrossel" headingLevel="2" />
          <div className="trilha">
            <DsCarousel label="Exemplos" itemWidth="17rem" prevLabel="Anteriores" nextLabel="Próximos">
              {[...CARDS, ...CARDS].map((c, i) => (
                <div key={i} className="slide">
                  <DsCard heading={c.titulo} headingLevel="3" icon={c.icone}>
                    <p>{c.texto}</p>
                  </DsCard>
                </div>
              ))}
            </DsCarousel>
          </div>
        </div>
      </section>
    </>
  );
}

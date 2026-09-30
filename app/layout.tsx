import type { Metadata } from "next";
import { DS_FALLBACK_CSS } from "@plataforma-xvia/ds-core/fallback-css";
import { DS_THEMES_CSS, DS_TOKENS_CSS } from "@plataforma-xvia/ds-tokens/css-text";
import { DsAccessibilityBar, DsFooter, DsHeader, DsNavbar } from "@plataforma-xvia/ds-react/server";
import "./app.css";
import { href } from "./href";
import { SITE } from "./site";

// Tokens + temas + fallback do DS inline no <head>: a página já nasce com as cores certas, sem piscar
const CRITICAL_CSS = `${DS_TOKENS_CSS}\n${DS_THEMES_CSS}\n${DS_FALLBACK_CSS}`;

const NAV = JSON.stringify([
  { label: "Início", href: href("/"), icon: "home" },
  { label: "Exemplos", href: href("/#exemplos"), icon: "book" },
]);

export const metadata: Metadata = {
  title: `${SITE.titulo} · SETDIG`,
  description: SITE.descricao,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <head>
        <style dangerouslySetInnerHTML={{ __html: CRITICAL_CSS }} />
      </head>
      <body>
        <header>
          <DsAccessibilityBar
            links={JSON.stringify([
              { label: "Ir para conteúdo", href: "#conteudo" },
              { label: "Ir para rodapé", href: "#rodape" },
            ])}
          />
          <DsHeader homeHref={href("/")} homeLabel={`Início — ${SITE.titulo}`} navItems={NAV}>
            <span slot="brand" className="brand">
              {/* eslint-disable-next-line @next/next/no-img-element -- SVG estático; next/image não otimiza no export do Pages */}
              <img className="logo" src={href("/brand/ms-gov-br.svg")} alt="Governo de Mato Grosso do Sul" />
              <span className="brand__divisor" aria-hidden="true" />
              <span>
                <strong>{SITE.titulo}</strong>
                <small>SETDIG</small>
              </span>
            </span>
          </DsHeader>
          <DsNavbar label="Navegação principal" items={NAV} autoCurrent />
        </header>

        <main id="conteudo">{children}</main>

        <DsFooter
          id="rodape"
          columns={JSON.stringify([
            {
              heading: "Governo de MS",
              links: [
                { label: "ms.gov.br", href: "https://www.ms.gov.br" },
                { label: "SETDIG", href: "https://www.setdig.ms.gov.br" },
              ],
            },
          ])}
          bottomLinks={JSON.stringify([{ label: "Uso interno — acesso restrito", href: "#" }])}
        >
          <div slot="address">
            <strong>Secretaria-Executiva de Transformação Digital — SETDIG</strong>
            <br />
            {SITE.descricao}
          </div>
          <span slot="brand">
            {/* eslint-disable-next-line @next/next/no-img-element -- SVG estático; next/image não otimiza no export do Pages */}
            <img className="logo logo--rodape" src={href("/brand/estado-de-mato-grosso-do-sul.svg")} alt="Estado de Mato Grosso do Sul" />
          </span>
          <span slot="bottom-start">SETDIG | Secretaria-Executiva de Transformação Digital</span>
        </DsFooter>
      </body>
    </html>
  );
}

import "../styles/globals.css";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { ModulesContextProvider } from "../contexts/ModulesContext";
import { ProjectsContextProvider } from "../contexts/ProjectsContext";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonical = (`https://calculomoveleiro.vercel.app/` + (router.asPath === "/" ? "" : router.asPath)).split("?")[0];

  return (
    <>
      <Seo canonical={canonical} />
      <ProjectsContextProvider>
        <ModulesContextProvider>
          <Component {...pageProps} canonical={canonical} />
        </ModulesContextProvider>
      </ProjectsContextProvider>
    </>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}
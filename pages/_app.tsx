import type { AppProps } from "next/app";
import Layout from "../layout/Layout";
import "../styles/main.scss";
import { ThemeProvider } from "next-themes";

export let themeMode = "dark";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider 
      enableSystem={false}
      defaultTheme="dark" 
      forcedTheme={themeMode}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

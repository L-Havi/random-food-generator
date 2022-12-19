import "../styles/globals.css";
import type { AppProps } from "next/app";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import Script from "next/script"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-J97GR7DLV8" />
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J97GR7DLV8', {
            page_path: window.location.pathname,
          });
        `,
      }}
    />
    <Script id="Adsense-id" data-ad-client="ca-pub-2967353500308318"
      async strategy="afterInteractive"
      onError={ (e) => { console.error('Script failed to load', e) }}
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    />
    <ThemeProvider theme={theme}>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </ThemeProvider>
    </>
  );
}
export default MyApp;

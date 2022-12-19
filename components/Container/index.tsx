import Head from "next/head";
import Script from "next/script";
import { siteMetadata } from "./../../data/siteMetadata";

type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

export default function Container({ title, children }: ContainerProps) {
  return (
    <>
      <Script strategy="afterInteractive" src={"https://www.googletagmanager.com/gtag/js?id=${siteMetadata.analytics.googleAnalyticsId}"} />
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
      <Script id="Adsense-id" data-ad-client="${siteMetadata.analytics.googleAdsId}"
        async strategy="afterInteractive"
        onError={ (e) => { console.error('Script failed to load', e) }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <ins className="adsbygoogle"
        data-ad-client="${siteMetadata.analytics.googleAdsId}"
        data-ad-slot="2823115679"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
      <Head>
        <title className="">{title}</title>
        <meta name="description" content="Roll for food is a website where you can randomly generate ingredients for your next meal." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}

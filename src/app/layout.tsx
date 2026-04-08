import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";

import { getHomePageContent, getSiteContent } from "@/lib/site-content";
import { getTrackingConfig } from "@/lib/tracking-config";

import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const [site, home] = await Promise.all([
    getSiteContent(),
    getHomePageContent(),
  ]);

  return {
    title: home.seo.title || site.seo.siteTitle,
    description: home.seo.description || site.seo.siteDescription,
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const host =
    headerStore.get("x-forwarded-host") ||
    headerStore.get("host") ||
    "badmouthdigital.com";
  const tracking = await getTrackingConfig(host);

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {tracking.gtmId ? (
          <Script
            id="gtm-head"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${tracking.gtmId}');`,
            }}
          />
        ) : null}

        {tracking.customHead ? (
          <script
            id="custom-head-scripts"
            dangerouslySetInnerHTML={{ __html: tracking.customHead }}
          />
        ) : null}

        {tracking.ga4Id ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${tracking.ga4Id}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${tracking.ga4Id}');`,
              }}
            />
          </>
        ) : null}

        {tracking.fbPixelId ? (
          <Script
            id="fb-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${tracking.fbPixelId}');fbq('track','PageView');`,
            }}
          />
        ) : null}

        {tracking.badmouthSlug ? (
          <Script
            id="badmouth-js"
            data-slug={tracking.badmouthSlug}
            src="https://command.badmouthdigital.com/badmouth.js"
            strategy="afterInteractive"
          />
        ) : null}
      </head>
      <body className="min-h-full flex flex-col">
        {tracking.gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${tracking.gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}

        {children}

        {tracking.gettermsScript ? (
          <div dangerouslySetInnerHTML={{ __html: tracking.gettermsScript }} />
        ) : null}

        {tracking.customBody ? (
          <div dangerouslySetInnerHTML={{ __html: tracking.customBody }} />
        ) : null}
      </body>
    </html>
  );
}

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans+SC:wght@700&display=swap"
                  rel="stylesheet"
            />
            {/* Standard favicon */}
            <link rel="icon" href="/favicon.ico" />

            {/* Apple touch icon (for iOS home screen) */}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />

            {/* Generic PNG icon (if used by Android or others) */}
            <link rel="icon" type="image/png" sizes="32x32" href="/icon1.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png" />
            <link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512x512.png" />

            {/* Safari pinned tab (optional if supported by the SVG) */}
            <link rel="mask-icon" href="/icon0.svg" color="#000000" />

            {/* Manifest for PWA support */}
            <link rel="manifest" href="/manifest.json" />

            {/* Optional: theme color for mobile address bar */}
            <meta name="theme-color" content="#ffffff" />
        </Head>
        <body className="antialiased">
        <Main/>
        <NextScript/>
        </body>
    </Html>
  );
}

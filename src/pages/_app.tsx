import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return ( // *The following is SEO metadata *
      <>
        <Head>
          <title>Red Remington Fab | CNC & Custom Fabrication in Odessa TX</title>
          <meta
              name="description"
              content="Red Remington Fab offers CNC, welding, and metal fabrication services in Odessa and the Permian Basin."
          />
          <meta
              name="keywords"
              content="CNC, welding, fabrication, metal, Odessa, Permian Basin, Red Remington Fab, custom fabrication, Texas"
          />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="UTF-8" />
        </Head>
        <Component {...pageProps} />
      </>
  );
}

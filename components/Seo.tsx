import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';

import { openGraph } from '../libs/helper';

const defaultMeta = {
  title: '',
  description: '',
  image: '',
  url: '',
  type: 'website',
  locale: 'en_US',
  siteName: '',
  robots: 'index, follow',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  // Use siteName if there is templateTitle
  // but show full title if there is none
  meta.image = openGraph({
    description: meta.description,
    siteName: props.templateTitle ? meta.siteName : meta.title,
    templateTitle: props.templateTitle,
  });
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="image" content={meta.image} />
        <meta name="url" content={meta.url} />
        <meta name="type" content={meta.type} />
        <meta name="locale" content={meta.locale} />
        <meta name="robots" content={meta.robots} />
        <meta property="og:title" content={meta.title} />
        {/* Open Graph */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:locale" content={meta.locale} />
        <meta property="og:site_name" content={meta.siteName} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:url" content={meta.url} />

        {meta.date && (
          <>
            <meta property="article:published_time" content={meta.date} />
            <meta
              name="publish_date"
              property="og:publish_date"
              content={meta.date}
            />
            <meta name="author" property="article:author" content="Nedum" />
          </>
        )}

        {/* Favicon */}
        {favicons.map((linkProps) => (
          <link key={linkProps.rel} rel={linkProps.rel} href={linkProps.href} />
        ))}
        <meta name="theme-color" content="#fff" />
      </Head>

      {/* Schema.org */}
      <Script id="schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'http://schema.org',
          '@type': 'WebSite',
          name: meta.siteName,
          alternateName: meta.siteName,
          url: meta.url,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${meta.url}?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        })}
      </Script>

      {/* Google Analytics */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GA_TRACKING_ID}');
        `}
      </Script>

      {/* Hotjar */}
      <Script
        async
        id="hotjar"
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${process.env.HOTJAR_ID},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />
    </>
  );
}

type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
};

const favicons: Array<Favicons> = [
  {
    rel: 'icon',
    href: '/favicon.ico',
    sizes: '16x16',
    type: 'image/x-icon',
  },
  {
    rel: 'icon',
    href: '/favicon.png',
    sizes: '32x32',
    type: 'image/png',
  },
  {
    rel: 'icon',
    href: '/favicon.svg',
    sizes: '32x32',
    type: 'image/svg+xml',
  },
  {
    rel: 'icon',
    href: '/favicon.svg',
    sizes: '16x16',
    type: 'image/svg+xml',
  },
  {
    rel: 'icon',
    href: '/favicon.svg',
    sizes: '64x64',
    type: 'image/svg+xml',
  },
  {
    rel: 'icon',
    href: '/favicon.svg',
    sizes: '96x96',
    type: 'image/svg+xml',
  },
  {
    rel: 'icon',
    href: '/favicon.svg',
    sizes: '128x128',
    type: 'image/svg+xml',
  },
  {
    rel: 'icon',
    href: '/favicon.svg',
    sizes: '192x192',
    type: 'image/svg+xml',
  },
  {
    rel: 'icon',
    href: '/favicon.svg',
    sizes: '256x256',
    type: 'image/svg+xml',
  },
];

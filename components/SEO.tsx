import Head from 'next/head';

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  keywords?: string;
};

export default function SEO({ title, description, canonical = '/', ogImage, ogType = 'website', twitterCard = 'summary_large_image', keywords = '' }: SEOProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.VietnamTradeData.com';
  const fullTitle = `${title} | VietnamTradeData`;
  const ogImageEnv = process.env.NEXT_PUBLIC_OG_IMAGE || `${siteUrl}/images/og-image.jpg`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={`${siteUrl}${canonical}`} />

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={`${siteUrl}${canonical}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage || ogImageEnv} />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage || ogImageEnv} />

      <meta name="robots" content="index, follow" />
    </Head>
  );
}

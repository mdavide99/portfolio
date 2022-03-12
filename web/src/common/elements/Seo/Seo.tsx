import Head from "next/head";

interface SeoProps {
  title: string;
	description: string;
  author?: string;
  img?: string;
}

function Seo({
  title,
	description,
  author= "Davide Marinotto",
  img="/images/social-screenshot.png",
}:SeoProps) 

{
  return (
    <Head>
      <title>{title}</title>
			<meta name="description" content={description} />
			<meta name="author" content={author} />
      <meta name="og:title" content={title} />
			<meta name="og:description" content={description} />
			<meta name="og:type" content="website" />
			<meta name="og:url" content="https://davidemarinotto.com/" />
      <meta name="og:image" content={img} />
      <meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:creator" content={author} />
      <meta name="twitter:image" content={img} />
      <meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebSite",
            name: "davidemarinotto.com",
            alternateName: "Davide Marinotto",
            about: "Software engineer with diversified skills in many computer science and web development's branches.",
            url: "https://www.davidemarinotto.com",
            image: "https://www.davidemarinotto.com/images/social-screenshot.png"
          }),
        }}
      />
    </Head>
  );
}

export { Seo };

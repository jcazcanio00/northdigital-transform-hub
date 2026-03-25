import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  imageType?: string;
  keywords?: string;
  ogType?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const getImageMimeType = (image: string) => {
  const normalizedImage = image.split("?")[0].toLowerCase();

  if (normalizedImage.endsWith(".png")) return "image/png";
  if (normalizedImage.endsWith(".webp")) return "image/webp";
  if (normalizedImage.endsWith(".gif")) return "image/gif";

  return "image/jpeg";
};

const SEO = ({
  title,
  description,
  url = "https://northmkt.com.mx",
  image = "https://northmkt.com.mx/og-image.jpg",
  imageType,
  keywords,
  ogType = "website",
  jsonLd,
}: SEOProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {keywords && <meta name="keywords" content={keywords} />}
    <link rel="canonical" href={url} />

    <meta property="og:image" content={image} />
    <meta property="og:image:secure_url" content={image} />
    <meta property="og:image:type" content={imageType ?? getImageMimeType(image)} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={ogType} />
    <meta property="og:url" content={url} />
    <meta property="og:locale" content="es_MX" />
    <meta property="og:site_name" content="North" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {jsonLd && (
      <script type="application/ld+json">
        {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd)}
      </script>
    )}
  </Helmet>
);

export default SEO;

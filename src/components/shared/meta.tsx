import Head from "next/head";
export enum OgType {
    Website = "website",
    Article = "article",
    VideoMovie = "video.movie",
    VideoEpisode = "video.episode",
    VideoTvShow = "video.tv_show",
    VideoOther = "video.other",
    MusicSong = "music.song",
    MusicAlbum = "music.album",
    MusicPlaylist = "music.playlist",
    MusicRadioStation = "music.radio_station",
    Profile = "profile",
    Book = "book",
    Product = "product",
    Place = "place",
    Event = "event",
    Restaurant = "restaurant.restaurant",
    Business = "business.business",
  }

export interface MetaProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  canonicalUrl?: string;
  og?: {
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
    ogType?: OgType; // e.g., 'website', 'article', 'video.movie'
    ogSiteName?: string;
    ogLocale?: string; // e.g., 'en_US'
    ogPublishedTime?: string; // for articles
    ogModifiedTime?: string; // for articles
  };
  twitter?: {
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
    twitterCard?: string; // Usually 'summary' or 'summary_large_image'
    twitterSite?: string; // Twitter username of the website
  };
  structuredData?: object; // For JSON-LD structured data
}

const Meta: React.FC<MetaProps> = ({
  title,
  description,
  keywords = "",
  author = "",
  canonicalUrl = "",
  og = {
    ogTitle: title,
    ogDescription: description,
    ogImage: "",
    ogUrl: "",
    ogType: OgType.Website,
    ogSiteName: "",
    ogLocale: "en_US",
  },
  twitter = {
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: og?.ogImage || "",
    twitterCard: "summary_large_image",
    twitterSite: "",
  },
  structuredData = {},
}) => {


    console.log(canonicalUrl)
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      {og && (
        <>
          <meta property="og:title" content={og.ogTitle} />
          <meta property="og:description" content={og.ogDescription} />
          <meta property="og:image" content={og.ogImage} />
          <meta property="og:url" content={og.ogUrl} />
          <meta property="og:type" content={og.ogType} />
          <meta property="og:site_name" content={og.ogSiteName} />
          <meta property="og:locale" content={og.ogLocale} />
          {og.ogPublishedTime && (
            <meta property="article:published_time" content={og.ogPublishedTime} />
          )}
          {og.ogModifiedTime && (
            <meta property="article:modified_time" content={og.ogModifiedTime} />
          )}
        </>
      )}

      {/* Twitter */}
      {twitter && (
        <>
          <meta name="twitter:title" content={twitter.twitterTitle} />
          <meta name="twitter:description" content={twitter.twitterDescription} />
          <meta name="twitter:image" content={twitter.twitterImage} />
          <meta name="twitter:card" content={twitter.twitterCard} />
          {twitter.twitterSite && <meta name="twitter:site" content={twitter.twitterSite} />}
        </>
      )}

      {/* Other SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* Structured Data (JSON-LD for rich snippets) */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
};

export default Meta;

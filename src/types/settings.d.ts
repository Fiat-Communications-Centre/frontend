export interface GeneralSettingsPayload {
  siteUrl: string;
  siteTitle: string;
  siteDescription: string;
  siteLogo?: string;
  contactEmail: string;
  timezone: string;
  language: string;
}

export interface SeoSettingsPayload {
  metaUrl: string;
  metaTitle: string;
  metaDescription?: string;
  metaKeywords?: string;
  metaImage?: string;
}

export interface PostSettingsPayload {
  autoPublishPosts: boolean;
  allowComments: boolean;
  moderateComments: boolean;
  customProfanityList?: string;
}

export interface SettingsPayload<
  T = GeneralSettingsPayload | SeoSettingsPayload | PostSettingsPayload
> {
  category: "general" | "post" | "seo";
  data: T;
}

export type SettingsData<T> = Pick<SettingsPayload<T>, "category" | "data">;

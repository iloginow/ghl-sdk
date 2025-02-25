export type BlogsSearchParams = {
  locationId: string;
  limit: string;
  offset: string;
};

export type CheckSlugDto = {
  locationId: string;
  urlSlug: string;
  postId?: string;
};

export type CheckSlugResponse = {
  exists: boolean /** URL slug exists status */;
};

export type UpdatePostDto = {
  title: string /** Title of the blog */;
  locationId: string /** Location ID */;
  status: string /** Blog post status */;
  blogId?: string /** Blog ID */;
  imageUrl?: string /** Image URL */;
  description?: string /** Blog post description for SEO */;
  rawHTML?: string /** Plain HTML/TEXT for blog post */;
  wordCount?: number /** Word count of the blog post */;
  readTimeInMinutes?: number /** Read time in minutes */;
  imageAltText?: string /** Alt text for blog image for SEO */;
  categories?: string[] /** Blog post categories */;
  tags?: string[] /** Blog post tags */;
  author?: string /** Blog post author */;
  urlSlug?: string /** Blog post URL slug */;
  canonicalLink?: string /** Blog post canonical link */;
  publishedAt?: string /** Blog post published date */;
};

export type UpdatePostResponse = {
  updatedBlogPost: UpdatePostDto /** Updated blog post */;
};

export type CreatePostDto = {
  title: string /** Title of the blog */;
  locationId: string /** Location ID */;
  blogId: string /** Blog ID */;
  imageUrl: string /** Image URL */;
  description: string /** Blog post description for SEO */;
  rawHTML: string /** Plain HTML/TEXT for blog post */;
  status: string /** Blog post status */;
  wordCount: number /** Word count of the blog post */;
  readTimeInMinutes: number /** Read time in minutes */;
  imageAltText: string /** Alt text for blog image for SEO */;
  categories: string[] /** Blog post categories */;
  tags: string[] /** Blog post tags */;
  author: string /** Blog post author */;
  urlSlug: string /** Blog post URL slug */;
  canonicalLink: string /** Blog post canonical link */;
  publishedAt: string /** Blog post published date */;
  archived?: boolean /** Blog post archived status */;
  currentVersion?: string /** Blog post current version */;
  metaData?: object /** Blog post meta data */;
};

export type BlogsAuthorSocialsSchema = {
  type: string /** Social media type */;
  url: string /** Social media URL */;
};

export type CreatePostResponse = {
  data: CreatePostDto /** Created blog post */;
};

export type BlogsAuthorsSchema = {
  socials?: BlogsAuthorSocialsSchema[] /** Author social media */;
  _id?: string /** Author ID */;
  name?: string /** Author name */;
  imageUrl?: string /** Author image URL */;
  imageAltText?: string /** Author image alt text */;
  description?: string /** Author description */;
  locationId?: string /** Location ID */;
  updatedAt?: string /** Author updated date */;
};

export type ListAuthorsResponse = {
  authors: BlogsAuthorsSchema[] /** Authors */;
  count: number /** Authors count */;
  traceId: string /** Trace ID */;
};

export type BlogsCategorySchema = {
  _id: string /** Category ID */;
  label?: string /** Category label */;
  urlSlug?: string /** Category URL slug */;
  description?: string /** Category description */;
  imageUrl?: string /** Category image URL */;
  imageAltText?: string /** Category image alt text */;
  locationId?: string /** Location ID */;
  updatedAt?: string /** Category updated date */;
};

export type ListCategoriesResponse = {
  categories: BlogsCategorySchema[] /** Categories */;
  count: number /** Categories count */;
  traceId: string /** Trace ID */;
};

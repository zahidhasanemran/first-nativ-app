export interface article {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: null | string;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at: null | string;
  crossposted_at: null | string;
  published_at: string;
  last_comment_at: string | null;
  reading_time_minutes: 1;
  tag_list: string[];
  tags: string | null;
  user: {
    name: string;
    username: string;
    twitter_username: string;
    github_username: string;
    user_id: number;
    website_url: null | string;
    profile_image: string;
    profile_image_90: string;
  };
  flare_tag: {
    name: string;
    bg_color_hex: string;
    text_color_hex: string;
  };
}

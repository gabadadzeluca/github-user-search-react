export default interface GitHubData{
  name: string;
  avatar_url : string;
  login: string;
  created_at: string;
  followers: number;
  following: number;
  bio: string | null;
  location: string | null;
  twitter_username: string | null;
  blog: string;
  public_repos: number;
  company: string | null;
}
  
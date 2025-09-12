import posts from "@/data/posts.json";
import HomePageClient from "./components/HomePageClient";

export default function Home() {
  return <HomePageClient posts={posts} />;
}

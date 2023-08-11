import Image from "next/image";
import { Hero } from "./components/hero";
import { Blogs } from "./components/blogls";
import { Taiken } from "./components/taiken";
import { Story } from "./components/story";
import { StoryB } from "./components/story_b";

export default function Home() {
  return (
    <div>
      <Hero />
      <Blogs />
      <Taiken />
      <Story />
      <StoryB />
    </div>
  );
}

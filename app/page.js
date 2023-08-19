import Image from "next/image";
import { Hero } from "./components/hero";
import { Blogs } from "./components/blogls";
import { Taiken } from "./components/taiken";
import { Story_1 } from "./components/story_1";
import { Story_2 } from "./components/story_2";
import { Reiwa } from "./components/reiwa_no_tora";

export default function Home() {
  return (
    <div>
      <Hero />
      <Blogs />
      <Taiken />
      <Story_1 />
      <Story_2 />
      <Reiwa />
    </div>
  );
}

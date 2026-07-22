import FeaturedProjects from "../components/FeaturedProjects";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProjects />
    </>
  );
}
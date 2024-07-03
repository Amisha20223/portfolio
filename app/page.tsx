import Encryption from "@/src/components/main/Encryption";
import Hero from "@/src/components/main/Hero";
import Projects from "@/src/components/main/Projects";
import Skills from "@/src/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
import Cards from "@/components/cards/Cards";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <>
      <main className="flex flex-col overflow-x-hidden">
        <Header />
        <Hero />
        <Cards />
      </main>
    </>
  );
}

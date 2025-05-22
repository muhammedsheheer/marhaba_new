import Hero from "@/app/table-booking/(section)/Hero";
import TableBooking from "@/app/table-booking/(section)/TableBooking";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full bg-[#f7f4ed]">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="absolute" />
        <Hero />
        <TableBooking />
        <Footer />
      </div>
    </main>
  );
}

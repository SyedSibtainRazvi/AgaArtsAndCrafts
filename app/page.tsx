import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Testimonial } from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Testimonial />
      <Footer />
    </>
  );
}

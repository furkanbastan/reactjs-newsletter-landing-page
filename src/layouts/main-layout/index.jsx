import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";

function MainLayout() {
    return (
        <main className="container">
            <Header />
            <HeroSection />
            <Footer />
        </main>
    );
}

export { MainLayout };

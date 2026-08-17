import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import { cn } from "@/lib/utils";

export default function PageShell({ children, heroFlush = false, overHero = false }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header overHero={overHero} />
      <main className={cn("flex-1", !heroFlush && "pt-16 sm:pt-20")}>{children}</main>
      <Footer />
      <MobileBottomNav />
      <div className="h-16 lg:hidden" aria-hidden />
    </div>
  );
}

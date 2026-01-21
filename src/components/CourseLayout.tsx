
'use client';

import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft, Menu } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useMemo } from "react";

interface CourseLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function CourseLayout({ children, title }: CourseLayoutProps) {
  const [open, setOpen] = useState(false);

  const navigation = useMemo(() => [
    { name: "Introduction à Kali Linux", href: "/courses/introduction-enhanced" },
    { name: "Fondamentaux du Hacking", href: "/courses/hacking-fundamentals-optimized" },
    { name: "Tester son réseau", href: "/courses/network-testing" },
    { name: "Sécurité WiFi", href: "/courses/wifi-security" },
    { name: "Exercices pratiques", href: "/courses/exercises" },
    { name: "Ressources", href: "/courses/resources" },
  ], []);

  const NavigationContent = useMemo(() => (
    <nav className="space-y-2">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setOpen(false)}
          className="block px-4 py-2 rounded-lg hover:bg-accent transition-colors"
          prefetch={true}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  ), [navigation]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background z-50">
        <div className="w-full px-2 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/" className="flex items-center gap-2" prefetch={true}>
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <span className="font-bold text-sm sm:text-base hidden xs:inline">Kali Linux Academy</span>
            </Link>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden h-8 w-8 sm:h-10 sm:w-10">
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-[350px]">
                <div className="py-4">
                  <h3 className="font-semibold mb-4">Navigation</h3>
                  {NavigationContent}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Button asChild variant="outline" className="h-7 px-2 text-xs sm:h-8 sm:px-2 sm:text-sm">
              <Link href="/" prefetch={true}>
                <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="hidden xs:inline">Accueil</span>
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="w-full px-2 sm:px-4 py-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 max-w-7xl mx-auto">
          {/* Sidebar Navigation - Desktop */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-24 space-y-4">
              <h3 className="font-semibold text-lg mb-4">Cours</h3>
              {NavigationContent}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">{title}</h1>
            <div className="max-w-none lg:max-w-4xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

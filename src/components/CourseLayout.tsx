
'use client';

import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft, Menu } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

interface CourseLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function CourseLayout({ children, title }: CourseLayoutProps) {
  const [open, setOpen] = useState(false);

  const navigation = [
    { name: "Introduction à Kali Linux", href: "/courses/introduction" },
    { name: "Tester son réseau", href: "/courses/network-testing" },
    { name: "Cracker WPA2", href: "/courses/wpa2-cracking" },
    { name: "Comprendre WPA3", href: "/courses/wpa3" },
    { name: "Exercices pratiques", href: "/courses/exercises" },
    { name: "Ressources", href: "/courses/resources" },
  ];

  const NavigationContent = () => (
    <nav className="space-y-2">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setOpen(false)}
          className="block px-4 py-2 rounded-lg hover:bg-accent transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold hidden sm:inline">Kali Linux Academy</span>
            </Link>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="py-4">
                  <h3 className="font-semibold mb-4">Navigation</h3>
                  <NavigationContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Accueil
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-4">
              <h3 className="font-semibold text-lg mb-4">Cours</h3>
              <NavigationContent />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">{title}</h1>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

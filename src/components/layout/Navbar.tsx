"use client";

import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Menu, Search, User } from "lucide-react";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Categories" },
  { href: "/sidehustles", label: "Side Hustles" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (status === "loading") {
      console.log("Session loading...");
    } else {
      console.log("Session:", session);
    }
  }, [session, status]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "text-2xl font-bold transition-all duration-300",
            isScrolled ? "text-foreground" : "text-white"
          )}
        >
          <span className="text-blue-500">Side</span>HustleStories
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-medium transition-colors relative py-2",
                isScrolled ? "text-blue-800 hover:text-blue-600" : "text-primary hover:text-blue-600",
                "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              )}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center space-x-2">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={cn(
                  "rounded-l-full px-4 py-2 bg-white/10 border border-white/20 text-foreground focus:outline-none",
                  isScrolled ? "text-foreground" : "text-white placeholder:text-white/50"
                )}
              />
              <Button
                type="submit"
                variant="ghost"
                size="icon"
                className={cn(
                  "rounded-r-full w-10 h-10",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
            {status === "loading" ? (
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground rounded-full w-10 h-10"
                disabled
              >
                <User className="h-5 w-5" />
              </Button>
            ) : status === "authenticated" ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-foreground rounded-full w-10 h-10"
                  >
                    <User className="h-5 w-5" />
                    <span className="sr-only">User menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="font-medium">
                    {session?.user?.name ?? "User"}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="rounded-full px-6"
              >
                <User className="h-4 w-4 mr-2" /> Sign In
              </Button>
            )}
          </div>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <form onSubmit={handleSearch} className="flex items-center">
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full w-10 h-10",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </form>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "rounded-full w-10 h-10",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px] mt-2">
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="flex w-full cursor-pointer">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                {status === "loading" ? (
                  <button className="flex w-full cursor-pointer" disabled>
                    Loading...
                  </button>
                ) : status === "authenticated" ? (
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="flex w-full cursor-pointer"
                  >
                    Sign Out
                  </button>
                ) : (
                  <button
                    onClick={() => signIn("google", { callbackUrl: "/" })}
                    className="flex w-full cursor-pointer"
                  >
                    Sign In
                  </button>
                )}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
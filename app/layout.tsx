import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artiolë Abdyli — Full Stack Developer",
  description: "Portfolio of Artiolë Abdyli, a Full Stack Developer specializing in Laravel and Next.js.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

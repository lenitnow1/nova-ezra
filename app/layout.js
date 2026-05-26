import { ClerkProvider } from "@clerk/nextjs";
import { Cormorant_Garamond, Source_Serif_4, Geist_Mono } from "next/font/google";
import LibraryPixelBackground from "@/components/LibraryPixelBackground";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nova — Your Private Digital Library",
  description:
    "An AI-powered reading room. Transform documents into interactive, scholarly lessons.",
};

function LibraryBody({ children }) {
  return (
    <body
      className={`${cormorant.variable} ${sourceSerif.variable} ${geistMono.variable} antialiased`}
    >
      <div className="library-shell">
        <div className="library-ambient" aria-hidden="true" />
        <LibraryPixelBackground />
        <div className="library-grain" aria-hidden="true" />
        <div className="library-content">{children}</div>
      </div>
    </body>
  );
}

export default function RootLayout({ children }) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  return publishableKey ? (
    <ClerkProvider publishableKey={publishableKey}>
      <html lang="en">
        <LibraryBody>{children}</LibraryBody>
      </html>
    </ClerkProvider>
  ) : (
    <html lang="en">
      <LibraryBody>{children}</LibraryBody>
    </html>
  );
}

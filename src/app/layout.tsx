import type { Metadata } from "next";
import "@fontsource-variable/archivo/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Monica Fang — Interaction Designer",
    template: "%s — Monica Fang",
  },
  description:
    "Portfolio of Monica Fang, an interaction and product designer working across digital products, research, visual design, and emerging technology.",
  openGraph: {
    title: "Monica Fang — Interaction Designer",
    description:
      "Portfolio of Monica Fang, an interaction and product designer working across digital products, research, visual design, and emerging technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="siteCanvas">{children}</div>
      </body>
    </html>
  );
}

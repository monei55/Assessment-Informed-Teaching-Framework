import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Assessment Informed Teaching Framework",
  description:
    "A practical framework connecting learning, evidence, pedagogy and impact to strengthen instructional decision-making.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

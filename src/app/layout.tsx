import "./globals.css";

export const metadata = {
  title: "Coolor",
  description: "Main Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

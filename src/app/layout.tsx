import './globals.css';

export const metadata = {
  title: 'Coolor',
  description: 'Simple and minimalistic color picker. Made with love 💘',
  openGraph: {
    images: [
      "https://coolor.vercel.app/logo.png"
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}

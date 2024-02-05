import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Next.js Default Title',
    template: '%s | Otra',
  },
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
          <p>HEADER</p>
        </header>
        {children}
        <footer style={{ backgroundColor: 'ghostwhite', padding: '1rem' }}>
          <p>FOOTER</p>
        </footer>
      </body>
    </html>
  );
}

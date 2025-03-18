import './globals.css';

export const metadata = {
  title: 'Resume Builder',
  description: 'Create and download professional resumes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
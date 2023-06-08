import React from 'react';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer';
import { Particle } from '@/components/particle/Particle';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dontsul',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <main className="container">{children}</main>
        <Footer />
        <Particle />
      </body>
    </html>
  );
}

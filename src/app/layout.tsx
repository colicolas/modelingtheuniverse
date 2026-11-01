import type { Metadata } from 'next';
import { Header, Footer } from '@/components/header';
import './globals.css';
export const metadata: Metadata = { title: {default:'modeling the universe — a framework for being human',template:'%s · modeling the universe'}, description:'An evolving framework by Demi Zheng: pain, pleasure, language, power, and the ways we extend beyond ourselves.', icons:{icon:'/icon.svg'} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><a href="#main" className="skip-link">Skip to content</a><Header/>{children}<Footer/></body></html>; }

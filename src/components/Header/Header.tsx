import './Header.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <Image 
            src="/globe.svg" 
            alt="EDURA logo" 
            width={40} 
            height={40}
            priority
          />
          <h2>EDURA</h2>
        </div>
        
        <ul className="navbar__links">
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/courses">COURSES</Link></li>
          <li><Link href="/instructor">TEACHERS</Link></li>
          <li><Link href="/about">ABOUT US</Link></li>
          <li><Link href="/contact">CONTACTS</Link></li>
          <li><Link href="#contacts">RU</Link></li>
        </ul>
        <Link href="/login" className="navbar__button">LOGIN/REGISTER</Link>
      </div>
    </nav>
  );
} 
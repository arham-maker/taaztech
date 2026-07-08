import Image from "next/image";
import Link from "next/link";
import { footerQuickLinks, footerServicesIntro, socialLinks } from "@/lib/data";
import { logos } from "@/lib/images";

function SocialIcon({ type }: { type: string }) {
  if (type === "linkedin") {
    return (
      <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor" aria-hidden>
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 55.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
      </svg>
    );
  }
  if (type === "twitter") {
    return (
      <svg width="20" height="20" viewBox="0 0 512 512" fill="currentColor" aria-hidden>
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345.9L239.4 318.2 106.5 464H35.8L186.7 275.5 26.1 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
      </svg>
    );
  }
  if (type === "instagram") {
    return (
      <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor" aria-hidden>
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.2 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9s12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-94C384.3 36.5 352.5 28.3 316.6 26.6 279.5 24.6 168.5 24.6 131.4 26.6c-35.9 1.7-67.7 9.9-94 36.2-26.3 26.3-34.5 58.1-36.2 94-2 37.1-2 148.1 0 185.2 1.7 35.9 9.9 67.7 36.2 94 26.3 26.3 58.1 34.5 94 36.2 37.1 2 148.1 2 185.2 0 35.9-1.7 67.7-9.9 94-36.2 26.3-26.3 34.5-58.1 36.2-94 2-37.1 2-148.1 0-185.2zM398.8 388c-7.8 19.5-22.9 34.6-42.4 42.4-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.5-7.8-34.6-22.9-42.4-42.4-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.5 22.9-34.6 42.4-42.4 29.4-11.7 99.2-9 132.3-9s102.9-2.6 132.3 9c19.5 7.8 34.6 22.9 42.4 42.4 11.7 29.4 9 99.2 9 132.3s2.7 102.9-9 132.3z" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 512 512" fill="currentColor" aria-hidden>
      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.7 226.4 209.3 245.1V330.5H154.4V256h54.9v-47.6c0-54.2 32.3-84.1 81.6-84.1 23.6 0 48.3 4.2 48.3 4.2v53.1h-27.2c-26.8 0-35.2 16.6-35.2 33.5v40.2h59.9l-9.6 74.5h-50.3v128.6C413.3 482.4 504 379.8 504 256z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Link href="/">
            <Image
              src={logos.footer}
              alt="TaazTech"
              width={160}
              height={42}
            />
          </Link>
          <p>
            Whether it&apos;s Custom Mobile and Web Application Development or Digital
            Marketing, We Accelerate Your Digital Transformation Journey With A Focus On
            Innovation, Agility And Value Addition Of Your Business.
          </p>
          <div className="footer__social">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="footer__social-link"
              >
                <SocialIcon type={link.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__links">
          <div>
            <h4>Quick Links</h4>
            <ul>
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <p className="footer__services-intro">{footerServicesIntro}</p>
          </div>
        </div>
      </div>

      <div className="footer__divider" />

      <div className="container footer__bottom">
        <p>
          <span id="copyright-text">© 2026 | All rights reserved by TaazTech</span>
        </p>
        <ul className="footer__legal">
          <li>
            <Link href="#contact">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#contact">Terms &amp; Condition</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { footerQuickLinks, footerServicesIntro } from "@/lib/data";
import { logos } from "@/lib/images";
import { SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Link href="/">
            <Image
              src={logos.footer}
              alt={SITE_NAME}
              width={160}
              height={42}
            />
          </Link>
          <p>
            Whether it&apos;s Custom Mobile and Web Application Development or Digital
            Marketing, We Accelerate Your Digital Transformation Journey With A Focus On
            Innovation, Agility And Value Addition Of Your Business.
          </p>
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
          <span id="copyright-text">© 2026 | All rights reserved by {SITE_NAME}</span>
        </p>
        <ul className="footer__legal">
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms-and-conditions">Terms &amp; Condition</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

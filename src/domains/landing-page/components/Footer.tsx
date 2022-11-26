import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <div>
      <div className="text-white py-8 flex justify-between max-sm:flex-col px-4">
        <div className="flex flex-col">
          <Link href="/booknow" className="hover:text-secondary">
            Book Now
          </Link>
          <Link href="/" className="hover:text-secondary">
            Home
          </Link>
          <Link href="/aboutus" className="hover:text-secondary">
            About Us
          </Link>
          <Link href="/faq" className="hover:text-secondary">
            FAQ
          </Link>
        </div>
        <div className="flex flex-col">
          <Link href="/" className="hover:text-secondary">
            Twitter
          </Link>
          <Link href="/" className="hover:text-secondary">
            Instagram
          </Link>
          <Link href="/" className="hover:text-secondary">
            Email
          </Link>
        </div>
      </div>
      <p className="text-center text-white">
        © 2022 Cleaning With Love. All rights reserved
      </p>
    </div>
  );
};

export default Footer;

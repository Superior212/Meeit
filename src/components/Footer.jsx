import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#2B293D] text-[#A9A9A9] py-12 md:py-4 lg:py-8">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">FAQs</Link>
            </li>
            <li>
              <Link href="#">Terms of Service</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>git push -u origin main
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Help</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#">Account Support</Link>
            </li>
            <li>
              <Link href="#">Listing Events</Link>
            </li>
            <li>
              <Link href="#">Event Ticketing</Link>
            </li>
            <li>
              <Link href="#">Ticket Purchase Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Event Categories</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#">Concerts & Gigs</Link>
            </li>
            <li>
              <Link href="#">Festivals & Lifestyle</Link>
            </li>
            <li>
              <Link href="#">Business & Networking</Link>
            </li>
            <li>
              <Link href="#">Food & Drinks</Link>
            </li>
            <li>
              <Link href="#">Performing Arts</Link>
            </li>
            <li>
              <Link href="#">Sports & Outdoors</Link>
            </li>
            <li>
              <Link href="#">Exhibitions</Link>
            </li>
            <li>
              <Link href="#">Workshops</Link>
            </li>
            <li>
              <Link href="#">Conferences & Classes</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Social</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#">Facebook</Link>
            </li>
            <li>
              <Link href="#">Instagram</Link>
            </li>
            <li>
              <Link href="#">Twitter</Link>
            </li>
            <li>
              <Link href="#">YouTube</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[80%] mx-auto h-[1px] bg-[#A9A9A9] mt-8 "></div>
      <div className="container mx-auto px-4 md:px-6 mt-8 md:mt-12 lg:mt-16 text-center text-sm">
        <p>© 2024 Meeit. All rights reserved.</p>
      </div>
    </footer>
  );
}

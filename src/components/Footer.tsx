import { FaFacebookF, FaTwitter, FaYoutube, FaPhoneAlt, FaLocationArrow, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#18273A] text-[#C3C8D1] pt-16 pb-6 px-4 md:px-0 font-sans">
      {/* Top Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-3 mb-5">
           
            <span className="text-2xl font-bold text-white tracking-tight">Shalom Health Care Services</span>
          </div>
          <p className="mb-7 text-sm leading-relaxed text-[#C3C8D1]">
          As a home care company or service provider, you know how challenging it is to be found online by someone looking for a home care provider they can trust in their hour of need.
          </p>
         
          {/* Socials */}
          <div className="flex items-center gap-3 mt-2">
            <span className="font-medium text-[#C3C8D1]">Follow us:</span>
            <FaFacebookF className="hover:text-white text-[#C3C8D1] transition" />
            <FaTwitter className="hover:text-white text-[#C3C8D1] transition" />
            <FaLinkedinIn className="hover:text-white text-[#C3C8D1] transition" />
            <FaYoutube className="hover:text-white text-[#C3C8D1] transition" />
            <FaTiktok className="hover:text-white text-[#C3C8D1] transition" />
          </div>
        </div>
        {/* Essential */}
        <div>
          <h3 className="text-white font-bold text-xl mb-5 tracking-tight">Essential</h3>
          <ul className="space-y-3 text-base">
            <li>
              <Link to="/about" className="hover:text-white cursor-pointer transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white cursor-pointer transition">
                Our services
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white cursor-pointer transition">
                Faq
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white cursor-pointer transition">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white cursor-pointer transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Our Services */}
        <div>
          <h3 className="text-white font-bold text-xl mb-5 tracking-tight"> Our Services</h3>
          <ul className="space-y-3 text-base">
            <li>
              <Link to="/service/in-home-service" className="hover:text-white cursor-pointer transition">
                In-Home Service
              </Link>
            </li>
            <li>
              <Link to="/service/respite-care-service" className="hover:text-white cursor-pointer transition">
                Respite Care Service
              </Link>
            </li>
            <li>
              <Link to="/service/direct-support-professional" className="hover:text-white cursor-pointer transition">
                Direct Support Professional
              </Link>
            </li>
            <li>
              <Link to="/service/host-home-provider" className="hover:text-white cursor-pointer transition">
                Host Home Provider
              </Link>
            </li>
            <li>
              <Link to="/service/companion-services" className="hover:text-white cursor-pointer transition">
                Companion Services
              </Link>
            </li>
            <li>
              <Link to="/service/professional-behavioral-support" className="hover:text-white cursor-pointer transition">
                Professional Behavioral Support
              </Link>
            </li>
            <li>
              <Link to="/service/employment-specialist" className="hover:text-white cursor-pointer transition">
                Employment Specialist
              </Link>
            </li>
            <li>
              <Link to="/service/support-living-without-transportation" className="hover:text-white cursor-pointer transition">
                Support Living Without Transportation
              </Link>
            </li>
            <li>
              <Link to="/service/day-habilitation" className="hover:text-white cursor-pointer transition">
                Day Habilitation
              </Link>
            </li>
          </ul>
        </div>
        {/* Get In Touch */}
        <div>
          <h3 className="text-white font-bold text-xl mb-5 tracking-tight">Get In Touch</h3>
          <div className="flex items-center gap-3 mb-4">
            <FaPhoneAlt className="text-blue-400 text-lg" />
            <div>
              <div className="text-white font-semibold text-base">+(1) (202) 621-8792</div>
              <div className="text-xs text-[#7B8CA6]">Phone number</div>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <MdEmail className="text-blue-400 text-lg" />
            <div>
              <div className="text-white font-semibold text-base">ShalomHealthCare.com</div>
              <div className="text-xs text-[#7B8CA6]">Email address</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaLocationArrow className="text-blue-400 text-lg" />
            <div>
              <div className="text-white font-semibold text-base">Address</div>
              <div className="text-xs text-[#7B8CA6]">7826 Eastern Ave NW, Suite 201 Washington, DC 20012</div>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter */}
      <div className="max-w-5xl mx-auto mt-16 bg-[#1C2A3A] rounded-2xl flex flex-col md:flex-row items-center justify-between px-8 py-10 shadow-lg">
        <div className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-0 leading-tight">
          Ready to get the smile you always deserved?
        </div>
        <form className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Business email"
            className="rounded-l-full px-4 py-2 outline-none bg-[#22344A] text-white placeholder-[#C3C8D1] w-full md:w-64 text-base"
          />
          <button
            type="submit"
            className="rounded-r-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 font-semibold text-base transition whitespace-nowrap"
          >
            Subscribe now
          </button>
        </form>
      </div>
      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-12 border-t border-[#22344A] pt-7 text-sm">
        <div className="text-[#7B8CA6]">
           All Rights Reserved by <span className="text-blue-400">Shalom Health Care Services</span>
        </div>
        <div className="flex items-center gap-8 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer transition">Terms & Conditions</span>
          <span className="hover:text-white cursor-pointer transition">Privacy & Policy</span>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white flex items-center gap-2">
             
              {/* Shalom Health Care Services */}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
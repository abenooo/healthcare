import { FaFacebookF, FaTwitter, FaBehance, FaYoutube, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#18273A] text-[#C3C8D1] pt-16 pb-6 px-4 md:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* Logo */}
            <span className="bg-blue-500 rounded p-2">
              {/* Simple medical cross icon */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="14" y="4" width="4" height="24" rx="2" fill="#fff"/>
                <rect x="4" y="14" width="24" height="4" rx="2" fill="#fff"/>
              </svg>
            </span>
            <span className="text-2xl font-semibold text-white">Premier Healthcare</span>
          </div>
          <p className="mb-6 text-sm">
            Hospitals provide care for patients who need to stay overnight or longer for surgeries, serious illnesses, or recovery from complex procedures.
          </p>
          {/* Awards */}
          <div className="flex gap-6 mb-6">
            <img src="https://framerusercontent.com/images/awards1.svg" alt="Ultra" className="h-8" />
            <img src="https://framerusercontent.com/images/awards2.svg" alt="Hyper Best" className="h-8" />
            <img src="https://framerusercontent.com/images/awards3.svg" alt="Award" className="h-8" />
          </div>
          {/* Socials */}
          <div className="flex items-center gap-2">
            <span className="font-medium">Follow us:</span>
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaBehance className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>
        {/* Essential */}
        <div>
          <h3 className="text-white font-semibold text-xl mb-4">+ Essential</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Our team</li>
            <li>Case Studies</li>
            <li>Services</li>
            <li>Faq</li>
            <li>Contact Us</li>
          </ul>
        </div>
        {/* Our Services */}
        <div>
          <h3 className="text-white font-semibold text-xl mb-4">+ Our Services</h3>
          <ul className="space-y-2">
            <li>Diagnostic</li>
            <li>Health Care</li>
            <li>Surgical</li>
            <li>Emergency</li>
            <li>Geriatric</li>
            <li>Preventive</li>
          </ul>
        </div>
        {/* Get In Touch */}
        <div>
          <h3 className="text-white font-semibold text-xl mb-4">+ Get In Touch</h3>
          <div className="flex items-center gap-3 mb-2">
            <FaPhoneAlt className="text-blue-400" />
            <div>
              <div className="text-white font-medium">+(123) 456 789 00</div>
              <div className="text-xs">Phone number</div>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <MdEmail className="text-blue-400" />
            <div>
              <div className="text-white font-medium">info@al-medi.com</div>
              <div className="text-xs">Email address</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaLocationArrow className="text-blue-400" />
            <div>
              <div className="text-white font-medium">Address</div>
              <div className="text-xs">12/A, New Booston Tower</div>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter */}
      <div className="max-w-5xl mx-auto mt-16 bg-[#1C2A3A] rounded-lg flex flex-col md:flex-row items-center justify-between px-8 py-8">
        <div className="text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-0">
          Ready to get the smile you always deserved?
        </div>
        <form className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Business email"
            className="rounded-l-full px-6 py-3 outline-none bg-[#22344A] text-white placeholder-[#C3C8D1] w-full md:w-72"
          />
          <button
            type="submit"
            className="rounded-r-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 font-semibold transition"
          >
            Subscribe now
          </button>
        </form>
      </div>
      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 border-t border-[#22344A] pt-6 text-sm">
        <div>
          © Example 2024 · All Rights Reserved by <span className="text-blue-400">FramerDevs</span>
        </div>
        <div className="flex items-center gap-8 mt-4 md:mt-0">
          <span>Terms & Conditions</span>
          <span>Privacy & Policy</span>
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-white flex items-center gap-2">
              <span className="bg-blue-500 rounded p-1">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                  <rect x="14" y="4" width="4" height="24" rx="2" fill="#fff"/>
                  <rect x="4" y="14" width="24" height="4" rx="2" fill="#fff"/>
                </svg>
              </span>
              Premier Healthcare
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
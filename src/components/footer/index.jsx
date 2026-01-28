import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import bg from '../../assets/images/footer_bg.png';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const footerSocialClass =
  "tw-w-10 tw-h-10 tw-md:tw-w-12 tw-md:tw-h-12 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white hover:tw-opacity-90 tw-transition-opacity btn-custom-gradient";

const Footer = () => {
  return (
    <footer className="tw-bg-[#1A0936] tw-relative tw-w-full tw-overflow-x-hidden">
      {/* Background image - responsive height */}
      <div className="tw-absolute tw-bottom-0 tw-right-0 tw-pointer-events-none tw-w-full sm:tw-w-auto">
        <img
          src={bg}
          alt=""
          className="tw-h-[200px] sm:tw-h-[300px] md:tw-h-[400px] tw-w-full tw-max-w-[500px] sm:tw-max-w-none tw-object-cover tw-object-right-bottom"
        />
      </div>

      {/* Top section - stack on mobile, row on md+ */}
      <div className="tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6 tw-py-8 sm:tw-py-10 md:tw-py-12 tw-relative tw-z-10">
        <div className="tw-flex tw-flex-col tw-gap-8 sm:tw-gap-10 md:tw-flex-row md:tw-justify-between md:tw-items-center md:tw-gap-8">
          {/* Left - logo + text */}
          <div className="tw-w-full md:tw-max-w-[55%] tw-text-center md:tw-text-left">
            <div className="tw-flex tw-justify-center md:tw-justify-start tw-mb-3 sm:tw-mb-4">
              <img
                src={logo}
                alt="WLBiz"
                className="tw-max-h-10 sm:tw-max-h-12 tw-w-auto tw-object-contain"
              />
            </div>
            <p className="tw-text-white tw-text-sm sm:tw-text-base md:tw-text-lg lg:tw-text-xl tw-leading-relaxed tw-max-w-md tw-mx-auto md:tw-mx-0">
              Getting Started On WLBiz Is Ready — No Complex Registrations Or
              Technical Barriers.
            </p>
          </div>

          {/* Right - Follow Us + social icons */}
          <div className="tw-flex tw-flex-col tw-items-left md:tw-items-end tw-shrink-0">
            <p className="tw-text-white tw-text-left tw-text-sm sm:tw-text-base tw-mb-3 sm:tw-mb-4 tw-text-left md:tw-text-right">
              Follow Us
            </p>
            <div className="tw-flex tw-flex-wrap tw-gap-3 sm:tw-gap-4 tw-justify-center md:tw-justify-end">
              <a href="https://x.com" className={footerSocialClass} aria-label="X (Twitter)">
                <FaXTwitter size={18} className="tw-shrink-0" />
              </a>
              <a href="https://facebook.com" className={footerSocialClass} aria-label="Facebook">
                <FaFacebookF size={18} className="tw-shrink-0" />
              </a>
              <a href="https://instagram.com" className={footerSocialClass} aria-label="Instagram">
                <FaInstagram size={18} className="tw-shrink-0" />
              </a>
              <a href="https://twitter.com" className={footerSocialClass} aria-label="Twitter">
                <FaTwitter size={18} className="tw-shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar - responsive padding, wrap on small */}
      <div className="tw-border-t tw-border-white/10 tw-w-full">
        <div className="tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6 tw-py-4 sm:tw-py-5 md:tw-py-6">
          <div className="tw-flex tw-flex-wrap tw-justify-center md:tw-justify-start tw-gap-3 sm:tw-gap-4 md:tw-gap-6">
            <Link
              to="/privacy"
              className="tw-text-white tw-font-medium hover:tw-opacity-80 tw-text-xs sm:tw-text-sm md:tw-text-base tw-transition-opacity"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="tw-text-white tw-font-medium hover:tw-opacity-80 tw-text-xs sm:tw-text-sm md:tw-text-base tw-transition-opacity"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

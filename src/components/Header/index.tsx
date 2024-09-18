"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const usePathName = usePathname();

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleStickyNavbar = () => {
      if (window.scrollY >= 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };


      if (usePathName !== "/") {
        setSticky(true);
      } else {
        setSticky(false);
      }

    if (usePathName === '/') {
      window.addEventListener("scroll", handleStickyNavbar);
    } else {
      setSticky(true);
    }

    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, [usePathName]);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }

  };

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky || usePathName !== '/' 
            ? "bg-gray-dark shadow-sticky-dark fixed z-[9999] !bg-opacity-80 backdrop-blur-sm transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
            <div className="flex w-full items-center justify-between">
              <div className="max-w-full">
                <Link
                    href="/"
                    className={`header-logo block w-full ${
                        sticky ? "py-5 lg:py-2" : "py-8"
                    } `}
                >
                  <Image
                      src="/images/logo/logo.png"
                      alt="logo"
                      width={96}
                      height={96}
                      className=""
                  />
                </Link>
              </div>
              <div>
                <button
                    onClick={navbarToggleHandler}
                    id="navbarToggler"
                    aria-label="Mobile Menu"
                    className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-white/80 transition-all duration-300 ${
                          navbarOpen ? " top-[7px] rotate-45" : " "
                      }`}
                  />
                  <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-white/80 transition-all duration-300 ${
                          navbarOpen ? "opacity-0 " : " "
                      }`}
                  />
                  <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-white/80 transition-all duration-300 ${
                          navbarOpen ? " top-[-8px] -rotate-45" : " "
                      }`}
                  />
                </button>
                <nav
                    id="navbarCollapse"
                    className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px]  px-6 py-4 duration-300 border-body-color/20 bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                        navbarOpen
                            ? "visibility top-full opacity-100"
                            : "invisible top-[120%] opacity-0"
                    }`}
                >
                  <ul className="block lg:flex lg:space-x-9">
                    {menuData.map((menuItem, index) => (
                        <li key={index} className="group relative">
                          {menuItem.path ? (
                              <Link
                                  href={menuItem.path}
                                  className={`flex py-2 text-baselg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                                      usePathName === menuItem.path
                                          ? "text-white"
                                          : "hover:text-primary text-white/85"
                                  }`}
                              >
                                {menuItem.title}
                              </Link>
                          ) : (
                              <>
                                <p
                                    onClick={() => handleSubmenu(index)}
                                    className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary text-white/85 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                                >
                                  {menuItem.title}
                                  <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                      fill="currentColor"
                                  />
                                </svg>
                              </span>
                                </p>
                                <div
                                    className={`submenu relative left-0 top-full border-t-4 border-t-primary rounded-sm bg-dark transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                        openIndex === index ? "block" : "hidden"
                                    }`}
                                >
                                  {menuItem.submenu.map((submenuItem, index) => (
                                      <Link
                                          href={submenuItem.path}
                                          key={index}
                                          className="block rounded py-2.5 text-sm text-white/80 hover:text-primary lg:px-3"
                                      >
                                        {submenuItem.title}
                                      </Link>
                                  ))}
                                </div>
                              </>
                          )}
                        </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <div className="flex items-center justify-center">
                  <a
                      href="/"
                      aria-label="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-6 duration-300 hover:text-primary text-white/80"
                  >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                          d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                          fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                      href="/"
                      aria-label="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-6 duration-300 hover:text-primary text-white/80"
                  >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="currentColor"
                            d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"/>
                      <circle cx="16.806" cy="7.207" r="1.078" fill="currentColor"/>
                      <path fill="currentColor"
                            d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"/>
                    </svg>
                  </a>
                  <a
                      href="/"
                      aria-label="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-6 duration-300 hover:text-primary text-white/80"
                  >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        className="fill-current"
                    >
                      <path
                          d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                    </svg>
                  </a>
                  <a
                      href="/"
                      aria-label="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="duration-300 hover:text-primary text-white/80"
                  >
                    <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        className="fill-current"
                    >
                      <path
                          d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
        </div>
      </header>
    </>
  );
};

export default Header;

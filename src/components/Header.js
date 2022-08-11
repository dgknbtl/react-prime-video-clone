import Logo from "assets/svg/logo.svg";
import IconSearch from "assets/svg/search.svg";

const Header = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-secondary to-[#1b2530]">
        <div className="flex items-center py-4 px-12 h-[80px]">
          <img src={Logo} className="w-[112px] object-cover" alt="logo" />
          <nav className="sm:block md:flex px-4">
            <div className="mx-2">
              <a
                href="#!"
                className="text-neutral-300 hover:text-white items-center text-[17px] font-medium header-nav-active"
              >
                Home
              </a>
            </div>
            <div className="mx-2 items-center">
              <a
                href="#!"
                className="text-neutral-300 hover:text-white items-center text-[17px] font-medium"
              >
                TV Shows
              </a>
            </div>
            <div className="mx-2 items-center">
              <a
                href="#!"
                className="text-neutral-300 hover:text-white items-center text-[17px] font-medium"
              >
                Movies
              </a>
            </div>
            <div className="mx-2 items-center">
              <a
                href="#!"
                className="text-neutral-300 hover:text-white items-center text-[17px] font-medium"
              >
                Categories
              </a>
            </div>
          </nav>
          <div className="ml-auto mr-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-[250px] peer outline-none p-1.5 pl-9 bg-transparent border text-white border-gray-600 focus:border-gray-500 hover:border-gray-500"
              />
              <div className="peer-focus:opacity-100 peer-hover:opacity-100 opacity-80 absolute left-0 top-1/2 -translate-y-1/2 ml-3">
                <img src={IconSearch} alt="search icon" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

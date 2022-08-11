const HeaderNav = () => {
  return (
    <>
      <nav className="sm:block md:flex px-4">
        <div className="mx-2 flex items-center">
          <a
            href="#!"
            className="text-neutral-300 hover:text-white  text-[17px] font-medium header-nav-active"
          >
            Home
          </a>
        </div>
        <div className="mx-2 flex items-center z-10">
          <a
            href="#!"
            className="text-neutral-300 hover:text-white  text-[17px] font-medium"
          >
            TV Shows
          </a>
        </div>
        <div className="mx-2 flex items-center z-10">
          <a
            href="#!"
            className="text-neutral-300 hover:text-white  text-[17px] font-medium"
          >
            Movies
          </a>
        </div>
        <div className="mx-2 flex items-center z-10 headerNav-dropdown">
          <a
            href="#!"
            className="text-neutral-300 hover:text-white h-[80px] flex items-center  text-[17px] font-medium relative"
          >
            <span>Categories</span>
            <span className="-right-4 mt-[2px] absolute top-1/2 -translate-y-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent b-t-primary h-0 w-0 opacity-70"></span>
          </a>

          <div className="headerNav-dropdown_menu hidden -z-10 absolute top-full left-0 w-full h-[350px] bg-gradient-to-b from-[#101d27] to-primary  before:w-full before:h-[20px] before:transparent before:-top-[20px] before:absolute before:left-0">
            <div className="flex items-stretch justify-center h-full py-5 ">
              <div className="max-w-lg">
                <div className="text-white font-bold mb-2">Top Categories</div>
                <div className="grid grid-cols-3 flex-wrap gap-3 auto-cols-max">
                  <div className="bg-[image:var(--img-amazon-originals)] w-[158px] h-[90px] bg-no-repeat rounded-md flex items-center justify-center p-5 border-2 border-transparent hover:border-white">
                    <span className="leading-5 font-bold text-center text-white text-sm cursor-pointer ">
                      Amazon Originals
                    </span>
                  </div>
                  <div className="bg-[image:var(--img-amazon-originals)] w-[158px] h-[90px] bg-no-repeat rounded-md flex items-center justify-center p-5 border-2 border-transparent hover:border-white">
                    <span className="leading-5 font-bold text-center text-white text-sm cursor-pointer ">
                      Kids
                    </span>
                  </div>
                  <div className="bg-[image:var(--img-amazon-originals)] w-[158px] h-[90px] bg-no-repeat rounded-md flex items-center justify-center p-5 border-2 border-transparent hover:border-white">
                    <span className="leading-5 font-bold text-center text-white text-sm cursor-pointer ">
                      Recently Added Movies
                    </span>
                  </div>
                  <div className="bg-[image:var(--img-amazon-originals)] w-[158px] h-[90px] bg-no-repeat rounded-md flex items-center justify-center p-5 border-2 border-transparent hover:border-white">
                    <span className="leading-5 font-bold text-center text-white text-sm cursor-pointer ">
                      Recently Added TV
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-100 w-[1px] bg-slate-500 mx-12"></div>

              <div className="mr-12">
                <div className="text-white font-bold mb-2">Genrees</div>
                <ul className="columns-2 gap-x-[48px] text-sm ">
                  <li>
                    <a
                      href="#!"
                      className="text-slate-400 hover:text-white  font-normal py-1 flex"
                    >
                      Action and Adventure
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-slate-400 hover:text-white  font-normal py-1 flex"
                    >
                      Comedy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-slate-400 hover:text-white  font-normal py-1 flex"
                    >
                      Drama
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-slate-400 hover:text-white  font-normal py-1 flex"
                    >
                      Documentry
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-slate-400 hover:text-white  font-normal py-1 flex"
                    >
                      Kids and Family
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-slate-400 hover:text-white  font-normal py-1 flex"
                    >
                      Fantasy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-slate-400 hover:text-white  font-normal py-1 flex"
                    >
                      Horror
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-slate-400 hover:text-white  font-normal py-1 flex"
                    >
                      Romance
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-slate-400 hover:text-white  font-normal py-1 flex"
                    >
                      Science Fiction
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-slate-400 hover:text-white  font-normal py-1 flex"
                    >
                      Suspence
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-slate-400 hover:text-white  font-normal py-1 flex"
                    >
                      Anime
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-slate-400 hover:text-white  font-normal py-1 flex"
                    >
                      Sports
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-slate-400 hover:text-white  font-normal py-1 flex"
                    >
                      Crime
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <div className="text-white font-bold mb-2">
                  Other Categories
                </div>
                <ul className=" text-sm ">
                  <li>
                    <a
                      href="#!"
                      className="text-slate-400 hover:text-white  font-normal py-1 flex"
                    >
                      Award Winners
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-slate-400 hover:text-white  font-normal py-1 flex"
                    >
                      Only for a limited time on Prime
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderNav;

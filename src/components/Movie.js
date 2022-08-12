import { IoPlayOutline, IoPlaySharp, IoBanSharp } from "react-icons/io5";
import { HiPlus } from "react-icons/hi";
import { BiCommentDetail } from "react-icons/bi";

const Movie = ({ img, season, episode, title, desc, date, rating }) => {
  return (
    <>
      <div className="max-w-[350px] mx-2 my-3 relative movieCard">
        <div>
          <img
            src={img}
            alt="movie"
            className="w-full h-[195px] object-cover"
          />
        </div>

        <div className="absolute py-6 px-4 bg-gradient-to-t from-[#1a242f] to-primary hidden movieCard-body">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center ">
              <div className="rounded-full w-[36px] h-[36px] border-2 flex items-center justify-center bg-primary hover:bg-main hover:border-primary cursor-pointer">
                <IoPlaySharp className="w-[20px] h-[20px] ml-[2px]  fill-slate-100" />
              </div>
              <div className="text-white font-bold text-sm ml-2">
                Play S{season} E{episode}
              </div>
            </div>
            <div className="flex items-center">
              <a href="#!" className="px-[2px]">
                <IoPlayOutline
                  className="w-[24px] h-[24px] ml-[2px]  stroke-slate-100"
                  alt="icon"
                />
              </a>
              <a href="#!" className="px-[2px]">
                <HiPlus
                  className="w-[20px] h-[20px] ml-[2px]  fill-slate-100"
                  alt="icon"
                />
              </a>
              <a href="#!" className="px-[2px]">
                <IoBanSharp className="w-[20px] h-[20px] ml-[2px] fill-slate-100" />
              </a>
            </div>
          </div>
          <div className="text-slate-400 font-semibold text-sm mb-2">
            Included with Prime
          </div>
          <a href="#!" className="text-white text-sm font-bold">
            {title}
          </a>
          <div className="text-slate-200 text-sm text-[13px] leading-[20px] font-medium mt-[2px]">
            {desc}
          </div>
          <div className="flex items-center mt-3">
            <div className="text-slate-100 font-semibold text-xs pb-[2px]">
              {date}
            </div>
            <BiCommentDetail
              className="w-[24px] h-[24px] mx-3  fill-slate-100 stroke-[.5px]"
              alt="icon"
            />
            <div className="inline-flex items-center px-1  h-[20px] rounded-sm border border-white text-slate-100 font-medium text-[13px]">
              {rating}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;

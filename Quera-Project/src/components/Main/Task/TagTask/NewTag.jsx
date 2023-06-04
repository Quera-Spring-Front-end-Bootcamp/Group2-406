/* eslint-disable react/prop-types */
import SearchIcon from "@mui/icons-material/Search";
export const NewTag = ({ showTag, setShowTag }) => {

  return (
    <div className="relative  flex flex-col items-center " dir="rtl">
      <span className="absolute ">
        <ul
    
          style={showTag ? { display: "flex" } : { display: "none" }}
          className="w-[175px] h-[90px] rounded-md transition-all text-xs  flex flex-col  p-2 bg-white drop-shadow-lg   "
          onClick={() => {
            setShowTag(!showTag);
          }}
        >
          <li className="flex flex-row border-2  m-1 bg-slate-200 p-1">
            <SearchIcon className=" text-[#b3b7b7] ml-2 " />
            <input
              className="w-full outline-none font-dana  text-[#b3b7b7] bg-slate-200"
              onBlur={() => {
                setShowTag(false);
              }}
           
              type="text"
              placeholder="  تگ جدید"
            />
          </li>

          <span className="flex  text-center w-full justify-between p-1">
            <li className=" rounded-md text-center flex justify-center  cursor-pointer">
              <p className="  items-end w-[159px]">
                برای ساخت تگ جدید اینتر بزنید
              </p>
            </li>
          </span>
        </ul>
      </span>
    </div>
  );
};

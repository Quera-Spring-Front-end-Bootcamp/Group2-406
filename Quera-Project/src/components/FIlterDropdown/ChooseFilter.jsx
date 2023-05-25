import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { ChooseDecide } from "./ChooseDecide"
import { ChooseTag} from "./ChooseTag";
export const ChooseFilter = ({ tag, type, decide, selectDecide,id }) => {
  const [showTag, setShowTag] = useState(false);
  const [showType, setShowType] = useState(false);
  const [showDecide, setShowDecide] = useState(false);
  return (
    <article className="flex mb-6 flex-row items-center gap-[71px]">
      <article className="flex flex-row items-center  gap-[10px]">
        <p className=" text-sm">تسک‌هایی که</p>
        <button className="w-[182px] border px-2 py-1 rounded-md border-[#E9EBF0] justify-between  text-xs items-center flex flex-row">
          <p style={{ color: tag == "انتخاب کنید" ? "#959595" : "black" }}>
            {type}
          </p>
          <KeyboardArrowDownIcon className=" !text-sm" />
        </button>
        <p className=" text-sm">آن‌ها</p>
        <article  className="flex flex-col gap-1 mt-1   justify-center items-center">
        <button tabIndex="0" onBlur={()=>{setShowTag(false)}} onClick={()=>{setShowTag(!showTag)}} className="w-[146px] text-xs items-center px-2 py-1 rounded-md border border-[#E9EBF0] justify-between flex flex-row">
          <p style={{ color: type == "انتخاب کنید" ? "#959595" : "black" }}>
            {tag}
          </p>
          <KeyboardArrowDownIcon className=" !text-sm" />
        </button>
        <ChooseTag showTag={showTag} id={id} setShowTag={setShowTag}/></article>
        <article  tabIndex="0"
          onBlur={()=>{setShowDecide(false)}}
            onClick={() => {
              setShowDecide(!showDecide);
            }} className="flex flex-col gap-1 mt-1   justify-center items-center">
          <button
         
            className="w-[107px]  text-xs items-center px-2 py-1 rounded-md border border-[#E9EBF0] justify-between flex flex-row"
          >
            <p>{decide}</p>
            <KeyboardArrowDownIcon
              style={{
                rotate: showDecide && "180deg"
                
              }}
              className=" !text-sm"
            />
          </button>
          <ChooseDecide showDecide={showDecide} id={id} selectDecide={selectDecide} setShowDecide={setShowDecide}/>
        </article>
      </article>
      <article>
        <DeleteOutlineOutlinedIcon />
      </article>
    </article>
  );
};

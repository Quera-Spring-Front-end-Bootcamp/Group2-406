/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import SearchIcon from "@mui/icons-material/Search";
import { useRef, useState } from "react";
import { SelectedTag } from "../TagOptions/SelectedTags";
import { Tags } from "./Tags";
export const TagDrop = ({ showTag, setShowTag, TagDetails, setDetails }) => {
  const [inputValue, setInput] = useState("");
  const [newDetails, setNew] = useState(TagDetails);
  const [innerTag, setInner] = useState(newDetails);
  const [selectedTag, setSelectedTag] = useState([]);
  const [selectedValue, setValue] = useState("");
  const input = useRef();
  const TagColorChange=(id,color)=>{
       setDetails(TagDetails.map((item)=>{
        return {...item,bgcolor:item.id == id ? color:item.bgcolor}
       }))
       setNew(newDetails.map((item)=>{
        return {...item,bgcolor:item.id == id ? color:item.bgcolor}
       }))
       setInner(innerTag.map((item)=>{
        return {...item,bgcolor:item.id == id ? color:item.bgcolor}
       }))



  }
  const TagAdder = (e) => {
    if (e.key == "Enter" && innerTag.length == 0 && inputValue) {
      let Preventcopy = TagDetails.filter((item) => {
        return item.tag == inputValue;
      });
      if (Preventcopy.length == 0) {
        setValue(inputValue);
        let newtagtime=Date.now()
        setDetails([
          ...TagDetails,
          { id: newtagtime, tag: inputValue, bgcolor: "#46494D" },
        ]);
        setNew([
          ...newDetails,
          { id: newtagtime, tag: inputValue, bgcolor: "#46494D" },
        ]);
        setNew(
          newDetails.filter((item) => {
            return item.tag != inputValue;
          })
        );
        setInput("");
        setSelectedTag([
          ...selectedTag,
          { id: newtagtime, tagname: inputValue,bgcolor:"#46494D" },
        ]);
        setInner(
          
          newDetails.filter((item) => {console.log(newDetails),console.log(selectedValue)
            return item.tag != selectedValue;
          })
        );
      }
    } else {
      setInner(
        newDetails.filter((item) => {
          return item.tag.includes(inputValue);
        })
      );
    }
  };
  const Tagdelete=(id,newtag)=>{
    if(!newtag){
      console.log(newtag)
      setDetails(TagDetails.filter((item)=> item.id!=id))
       setNew(newDetails.filter((item)=> item.id!=id))
       setInner(innerTag.filter((item)=> item.id!=id))
    }
    else if(newtag){
      setValue("")
         setSelectedTag(selectedTag.filter((item)=> item.id!=id))
         let unselect=selectedTag.filter((item)=>{return item.id == id})
          setNew([...newDetails,{id:id,tag:unselect[0].tagname,bgcolor:unselect[0].bgcolor}])
         setInner([...newDetails,{id:id,tag:unselect[0].tagname,bgcolor:unselect[0].bgcolor}])
        

         
    }
  }
  const tagchoose = (tag) => {
    setNew(
      newDetails.filter((item) => {
        return item.tag != tag;
      })
    );
    setInner(
      newDetails.filter((item) => {
        return item.tag != tag;
      })
    );
  };

  return (
    <span
      dir="rtl"
      className="absolute font-dana  flex flex-col items-center"
    >
      <ul 
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        style={showTag ? { display: "flex" } : { display: "none" }}
        className="w-[175px] px-3 pt-3 transition-all text-xs  flex flex-col justify-center items-center rounded-lg bg-white drop-shadow-lg    "
      >
        <li className="w-full">
          <section className="flex gap-1 justify-start flex-wrap flex-row w-full ">
            {selectedTag.map((item) => {
              return (
                <SelectedTag
                Tagdelete={Tagdelete}
                  key={item.id}
                  id={item.id}
                  tagname={item.tagname}
                />
              );
            })}
          </section>
        </li>
        <li className="flex h-8 w-[151px] mb-4 bg-[#E9E9E9] rounded items-center flex-row   ">
          <SearchIcon className=" text-[#BDBDBD] " />
          <input
            value={inputValue}
            onKeyUp={TagAdder}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="w-[100px] bg-[#E9E9E9] outline-none font-dana  text-[10px]"
            ref={input}
            onBlur={() => {
              setShowTag(false);
            }}
            onClick={() => {
              input.current.focus(), setShowTag(true);
            }}
            type="text"
            placeholder="جستجو یا ساختن تگ"
          />
        </li>
        <div className="  flex flex-col  min-w-full justify-start " >
        {innerTag.length != 0 ? (
          innerTag.map((item) => {
            return (
              <Tags
              TagColorChange={TagColorChange}
                tagchoose={tagchoose}
                newDetails={newDetails}
                setNew={setNew}
                id={item.id}
                Tagdelete={Tagdelete}
                setSelectedTag={setSelectedTag}
                key={item.id}
                bgcolor={item.bgcolor}
                tag={item.tag}
              />
            );
          })
        ) : (
          <li className="text-[#3D3D3D]">برای ساختن تگ جدید اینتر بزنید</li>
        )}</div>
      </ul>
    </span>
  );
};

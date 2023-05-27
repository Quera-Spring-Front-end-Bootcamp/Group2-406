/* eslint-disable react/prop-types */

export const Task = ({
  ColorIcon,
  taskText,
  memberBoy,
  memberGirl,
  taskTime,
  prioritySign,
  descIcon,  imageExist1,
  imageExist2
}) => {
  return (
    <section className="w-full flex flex-row-reverse py-1 bg-gray-100  justify-between  mt-6  font-dana">
      <article className="w-1/2 flex  items-center  flex-row-reverse  mr-12">
        <span className="font-dana mr-4 text-base font-semibold p-1">
          {ColorIcon}
        </span>
        <span className=" font-dana  font-semibold text-[13px] " dir="rtl">
          {taskText}
        </span>
      </article>

      <article className="w-1/2 px-4 pr-1  flex mr-5 flex-row-reverse items-center ">
        <span className="w-1/4 font-dana flex text-xs mr-2">
          <span className={imageExist1?"rounded-full ml-3  w-[25px] h-[25px]  flex ":'rounded-full  w-[25px] h-[25px]  flex '}>
            {memberBoy}
          </span>
          <span className={imageExist2?"rounded-full bg-purple-950 w-[25px] h-[25px]  flex mr-3":'rounded-full  w-[25px] h-[25px]  flex'}>
            {memberGirl}
          </span>
        </span>
        <span
          className="w-1/4 font-dana text-md  tracking-tighter tex"
          dir="rtl"
        >
          <span className="mr-[80px] "> {taskTime}</span>
        </span>
        <span className="w-1/4 text-lg">{prioritySign}</span>
        <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
          {descIcon}
        </span>
      </article>
    </section>
  );
};

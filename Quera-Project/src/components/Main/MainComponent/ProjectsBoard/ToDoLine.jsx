/* eslint-disable react/prop-types */

// import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";

export const Pending = ({
  Icon,
  ProcessName,
  TaskNumber,
  Member,
  Deadline,
  Priority,
  Description,
}) => {
  return (
    <section className="w-full flex flex-row-reverse  justify-between  mt-7  font-dana">
      <article className="w-1/2 flex  items-center  flex-row-reverse  mr-10">
        <span className="flex">{Icon}</span>
        <span className="text-xl  p-1 mr-1  bg-pink-500 rounded text-white text tracking-wider">
          {ProcessName}
        </span>
        <span className="mr-3 font-dana  text-base font-semibold tracking-tighter">
          {TaskNumber}
        </span>
      </article>

      <article className="w-1/2  flex mr-5 flex-row-reverse items-center ">
        <span className="w-1/4 font-dana text-base font-semibold tracking-tighter">
          {Member}
        </span>
        <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
          {Deadline}
        </span>
        <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
          {Priority}
        </span>
        <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
          {Description}
        </span>
      </article>
    </section>
  );
};

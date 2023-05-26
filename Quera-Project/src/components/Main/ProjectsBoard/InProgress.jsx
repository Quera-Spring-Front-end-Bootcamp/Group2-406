/* eslint-disable react/prop-types */

export const InProgress = ({
  ProcessName,
  TaskNumber,
  Member,
  Deadline,
  Priority,
  Description,
}) => {
  return (
    <section className="w-full flex flex-row-reverse  justify-between  mt-8  font-dana">
      <article className="w-1/2 flex  items-center  flex-row-reverse  mr-12">
        <span className="text-xl  p-1 mr-5  bg-orange-500 rounded  tracking-wide">
          {ProcessName}{" "}
        </span>{" "}
        <span className="mr-3 font-dana  text-base font-semibold tracking-tighter">
          {" "}
          <span className="" dir="rtl">
            {TaskNumber}
          </span>
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

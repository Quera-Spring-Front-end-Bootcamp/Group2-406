export const Profilepicture=({firstname,lastname})=>{
    const Abb=lastname[0] ? firstname[0] + " " + lastname[0]:firstname[0] 
    
    return  <article className="flex flex-row-reverse justify-start items-center w-12  h-12 font-dana cursor-pointer">
    <span className="rounded-full bg-yellow-200 w-[35px] h-[35px] ml-2 flex justify-center items-center text-sm">{Abb}</span></article>
}
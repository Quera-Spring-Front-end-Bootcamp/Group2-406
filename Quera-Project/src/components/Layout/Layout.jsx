import { Outlet } from "react-router";

export const Layout = () => {

  return (
    <>
      <div className=' h-bgh z-0 absolute flex overflow-hidden bottom-0 '>
        <div className='w-screen h-bgh bg-bggradient origin-top-right -skew-y-7 '></div>
      </div>
      <Outlet />
    </>
  );
};
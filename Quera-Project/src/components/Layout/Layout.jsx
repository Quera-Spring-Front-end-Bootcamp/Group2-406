/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Outlet } from "react-router";
import { LinkButton } from "../Bottons/LinkButtons";

export const Layout = ({ children }) => {

  return (
    <>
      <Outlet />
      <LinkButton />
    </>
  );
};
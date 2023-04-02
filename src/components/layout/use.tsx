import { Outlet } from "react-router-dom";

import Header from "../../utils/header";

type Props = {};

const UserLayout = (props: Props) => {
  return (
    <>
      {/* Header */}
      <header className="bg-red-500 ">
        <Header></Header>
      </header>
      {/* Content */}
      <Outlet></Outlet>
      <footer>Footer</footer>
    </>
  );
};

export default UserLayout;

import { Outlet } from "react-router-dom";
import Header from "../../utils/Admin/header";
import Sideber from "../../utils/Admin/sidebar";

type Props = {};

const AdminLayout = (props: Props) => {
  return (
    <>
      {/* Header */}
      <header className="bg-[#00B0D7] ">
        <Header></Header>
      </header>
      <div className=" flex">
        <aside className="w-2/12">
          <Sideber />
        </aside>
        <main className="w-10/12">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminLayout;

import { Button } from "antd";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="h-screen w-screen">
      <header className="h-12 bg-red-200"></header>

      <div className="flex flex-grow h-full">
        <div className="flex flex-col w-1/4 h-full bg-purple-100">
          <Link className="my-4 w-full" to={"/admin/products"}>
            <Button>Products</Button>
          </Link>
          <Link className="my-4 w-full" to={"/admin/orders"}>
            <Button>Orders</Button>
          </Link>
          <Link className="my-4 w-full" to={"/admin/users"}>
            <Button>Users</Button>
          </Link>
          <Link className="my-4 w-full" to={"/admin/faqs"}>
            <Button>FAQs</Button>
          </Link>
        </div>
        <div className="flex flex-grow bg-green-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;

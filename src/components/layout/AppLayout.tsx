import { Navigate, Outlet } from "react-router";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "@/store/features/auth/authSlice";
// import type { RootState } from "@/store/store";
import { Navbar, Sidebar } from "@/components/layout/index";
const AppLayout = () => {
  //   const isAuthenticated = useSelector((state: RootState) => state.auth.user);
  const isAuthenticated = true;
  // const dispatch = useDispatch();

  //   const handleLogout = () => {
  //     dispatch(logout());
  //   };

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-full w-full overflow-hidden">
      <aside className="w-64 h-full bg-white z-30">
        <Sidebar />
      </aside>

      <div className="flex flex-col flex-1 h-full gap-8 bg-[#f1f1f2]">
        <header className="">
          <Navbar />
        </header>

        <main className="overflow-y-auto px-4 bg-[#f1f1f2]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;

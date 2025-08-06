import { Navigate, Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// import { logout } from "@/store/features/auth/authSlice";
// import type { RootState } from "@/store/store";
import { Navbar, Sidebar } from "@/components/layout/Index";
const AppLayout = () => {
  //   const isAuthenticated = useSelector((state: RootState) => state.auth.user);
  const isAuthenticated = true;
  const dispatch = useDispatch();

  //   const handleLogout = () => {
  //     dispatch(logout());
  //   };

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <aside className="w-64 h-full bg-white z-30">
        <Sidebar />
      </aside>

      <div className="flex flex-col flex-1 h-full">
        <header className="h-16 bg-[#F6F6F6] px-8">
          <Navbar />
        </header>

        <main className="flex-1 overflow-y-auto px-8 bg-[#F6F6F6]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;

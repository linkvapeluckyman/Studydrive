import Link from "next/link";
import Image from "next/image";

import Swal from "sweetalert2";
import { signOut } from "next-auth/react";

const AdminNavbar = () => {
  //handle signout button
  const handleSignOutButton = () => {
    Swal.fire({
      title: "Logout",
      text: "Are you sure you want to log out?",
      icon: "question",
      width: "20em",
      color: "#fff",
      background: "#13131a",
      showCancelButton: true,
      confirmButtonColor: "#4acd8d",
      cancelButtonColor: "#1c1c24",
      confirmButtonText: "Yes, log out",
      showLoaderOnConfirm: true,
      customClass: {
        cancelButton: "bordered-alert",
        popup: "bordered-alert",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        signOut({ callbackUrl: "/" });
      } else {
        console.log("cancelled");
      }
    });
  };

  return (
    <div className="navbar bg-[#1d232a] border-b border-green-400">
      <div className="flex-1">
        <Link href="/admin">
          <p className="text-[#4acd8d] subpixel-antialiased text-2xl font-bold ml-5">
            Pasc Hub
            <span className="text-white text-sm ml-1">Admin Panel</span>
          </p>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end md:mr-2">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-7">
              <Image
                src="/assets/dashboard.svg"
                width={12}
                height={12}
                alt="dashboard icon"
                className="bg-[#1d232a]"
                title="switch to another pages"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <Link href="/dashboard">
              <li>
                <div className="justify-between">
                  Dashboard
                  <span className="badge">New</span>
                </div>
              </li>
            </Link>
            <Link href="/">
              <li>
                <div>Home</div>
              </li>
            </Link>
            <li onClick={handleSignOutButton}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
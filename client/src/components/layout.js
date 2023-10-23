import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const listMenu = [
    {
      to: "user",
      path: "/user",
      name: "List User",
    },

    {
      to: "Adduser",
      path: "/AddUser",
      name: "Add User",
    },

    {
      to: "item",
      path: "/item",
      name: "List Item",
    },

    {
      to: "Additem",
      path: "/AddItem",
      name: "Add Item",
    },

    {
      to: "Login",
      path: "/login",
      name: "login",
    },
  ];

  return (
    <div className="container-fluid">
      <table className="container text-center">
        <tr>
          {listMenu &&
            listMenu.map((mn) => (
              <td>
                <Link to={`${mn.to}`}>
                  <div className="container">
                    <p className="btn btn-sm btn-info">{mn.name}</p>
                  </div>
                </Link>
              </td>
            ))}
        </tr>
      </table>
      <div className="container">
        <hr></hr>
      </div>
      <div>{<Outlet />}</div>
    </div>
  );
};

export default Layout;

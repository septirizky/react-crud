import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  const getuser = () => {
    axios({
      method: "GET",
      url: "http://localhost:3500/users",
    })
      .then((result) => {
        setUser(result.data);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteHandler = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios({
            method: "DELETE",
            url: `http://localhost:3500/users/delete/${id}`,
          });
          getuser();
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const editHandler = (id) => {
    // Menggunakan navigate untuk mengarahkan pengguna ke halaman lain
    navigate(`/edtusr/${id}`);
  };

  useEffect(() => {
    getuser();
    console.log(user);
  }, []);

  // getuser();

  return (
    <div classNama="container">
      <h3>Home Page</h3>
      {/* <button
        onClick={buttonHandler}
        classNama="btn btn-sm btn-success"
      >
        Click Me
      </button> */}

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => {
            const { id, username, email, password, role } = item;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td>{role}</td>
                <td>
                  <button
                    onClick={() => deleteHandler(id)}
                    className="btn btn-sm btn-danger"
                  >
                    <MdDeleteOutline className="me-1" />
                    Delete
                  </button>
                  <button
                    onClick={() => editHandler(id)}
                    className="btn btn-sm btn-info"
                  >
                    <MdOutlineModeEdit className="me-1" />
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;

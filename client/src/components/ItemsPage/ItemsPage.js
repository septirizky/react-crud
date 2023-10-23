import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Item = () => {
  const [item, setItem] = useState([]);

  const navigate = useNavigate();

  const getitem = () => {
    axios({
      method: "GET",
      url: "http://localhost:3500/items",
    })
      .then((result) => {
        setItem(result.data);
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
            url: `http://localhost:3500/items/delete/${id}`,
          });
          getitem();
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const editHandler = (id) => {
    // Menggunakan navigate untuk mengarahkan pengguna ke halaman lain
    navigate(`/editItem/${id}`);
  };

  useEffect(() => {
    getitem();
    console.log(item);
  }, []);

  // getitem();

  return (
    <div classNama="container">
      <h3>Home Item</h3>
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
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>UserId</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {item.map((item) => {
            const { id, name, category, price, stock, UserId } = item;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{stock}</td>
                <td>{UserId}</td>
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

export default Item;

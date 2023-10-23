import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditItem = () => {
  const [item, setItem] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });
  const [test, setTest] = useState(false);

  const { id } = useParams();

  const createHandler = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const update = async () => {
    try {
      await axios({
        method: "PUT",
        url: `http://localhost:3500/items/update/${id}`,
        data: item,
      });
      Swal.fire("Create Data Berhasil!", "This is button handler", "success");
      setTest(!test);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // Swal.fire("Create Data Berhasil!", "This is button handler", "success");
  }, [test]);

  console.log(item);

  return (
    <div>
      <div>
        <div className="container">
          <h3>Create Data User</h3>
          <br></br>
          <form action="" onSubmit={() => update()}>
            <div className="form-group mb-3">
              <label>Name :</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="name"
                onChange={(e) => createHandler(e)}
              />
            </div>
            <div className="form-group mb-3">
              <label>Category :</label>
              <input
                type="text"
                name="category"
                className="form-control"
                placeholder="category"
                onChange={(e) => createHandler(e)}
              />
            </div>
            <div className="form-group mb-3">
              <label>Price :</label>
              <input
                type="text"
                name="price"
                className="form-control"
                placeholder="price"
                onChange={(e) => createHandler(e)}
              />
            </div>
            <div className="form-group mb-3">
              <label>Stock :</label>
              <input
                type="text"
                name="stock"
                className="form-control"
                placeholder="stock"
                onChange={(e) => createHandler(e)}
              />
            </div>
            <div className="form-group mb-3">
              <label>User Id :</label>
              <input
                type="text"
                name="UserId"
                className="form-control"
                placeholder="UserId"
                onChange={(e) => createHandler(e)}
              />
            </div>
            <button className="btn btn btn-primary mb-5" type="submit">
              Simpan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditItem;

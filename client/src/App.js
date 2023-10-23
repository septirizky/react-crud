import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Components
import Layout from "./components/layout";
import User from "./components/UsersPage/UsersPage";
import Adduser from "./components/UsersPage/AddUser";
import EditUser from "./components/UsersPage/EditUser";
import EditItem from "./components/ItemsPage/EditItem";
import Additem from "./components/ItemsPage/AddItem";
import Item from "./components/ItemsPage/ItemsPage";

function App() {
  return (
    <div className="container-fluid">
      <div className="container text-center">
        <h1>Welcome to my React Web</h1>
        <p>Lorem ipsum is a dummy text</p>
        <hr />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="user" element={<User />} />
            <Route path="AddUser" element={<Adduser />}></Route>
            <Route path="edtusr/:id" element={<EditUser />}></Route>
            <Route path="item" element={<Item />}></Route>
            <Route path="AddItem" element={<Additem />}></Route>
            <Route path="editItem" element={<EditItem />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

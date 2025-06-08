import { Routes, Route } from "react-router-dom";
import DashBoard from "./components/dashboard/dashboard1.js";
import UpdateUser from "./components/updateuser/updateuser1.js";
import PostUser from "./components/postuser/postuser.js";
import NotFound from "./components/notfound/notfoun.js";

import Header from "./components/header/header.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/user" element={<PostUser />} />
          <Route path="/user/:id" element={<UpdateUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>}></Route>
      <Route path="/post" element={<h1>post Page</h1>}></Route>
      <Route path="/post/new" element={<h1>post new Page</h1>}></Route>
      <Route path="/post/edit/:id" element={<h1>post edit Page</h1>}></Route>
      <Route path="/profile" element={<h1>profile Page</h1>}></Route>
      <Route path="/profile/edit" element={<h1>profile edit Page</h1>}></Route>
      <Route
        path="/notifications"
        element={<h1>notifications Page</h1>}
      ></Route>
      <Route path="/users/login" element={<h1>login Page</h1>}></Route>
      <Route path="/users/signup" element={<h1>signup Page</h1>}></Route>
    </Routes>
  );
}

export default App;

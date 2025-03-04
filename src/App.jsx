import { Routes, Route } from "react-router-dom";
import LeftSidebar from "./components/LeftSidebar";
import MainBody from "./components/MainBody";
import RightSidebar from "./components/RightSidebar";
import AddPost from "./pages/AddPost";
import { Provider } from "react-redux";
import appStore from "./ReduxStore/appStore";
import UpdatePost from "./pages/UpdatePost";

function App() {
  return (
    <Provider store={appStore}>
      <div className="flex flex-row h-screen gap-3 justify-between">
        <LeftSidebar />

        <Routes>
          <Route path="/" element={<MainBody />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/edit-post/:id" element={<UpdatePost />} />
        </Routes>

        <RightSidebar />
      </div>
    </Provider>
  );
}

export default App;

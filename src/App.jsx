import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Layot from "./Page/Layot";
import Beranda from "./Page/Beranda";
import Kontak from "./Page/Kontak";
import Tentang from "./Page/Tentang";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layot />}>
          <Route path="/" element={<Beranda />} />,
          <Route path="/contact" element={<Kontak />} />,
          <Route path="/about" element={<Tentang />} />,
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

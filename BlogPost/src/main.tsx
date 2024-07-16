import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import About from "./components/pages/About.tsx";
import Contact from "./components/pages/Contact.tsx";
import Home from "./components/pages/Home.tsx";
import FullBlog from "./components/pages/FullBlog.tsx";
import EditBlog from "./components/pages/EditBlog.tsx";
import NotFound from "./components/Notfound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog/:Id" element={<FullBlog />} />
      <Route path="blog/:Id/edit" element={<EditBlog />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

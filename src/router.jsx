import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import { ContactPage } from "./components/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route id={"root"} path="/" element={<Root />}>
      <Route index element={<Home />} />
      {/* <Route id={"userApps"} path="user/:id/apps" element={<UserApps />} render={props => <UserApps {...props.match.params} />} loader={userAppsLoader} /> */}
      <Route id={"contact"} path={"contact"} element={<ContactPage />} />
      {/* <Route id={"terms"} path={"terms"} element={<Terms />} /> */}
      {/* <Route id={"about"} path={"about"} element={<About />} /> */}
      {/* <Route id={"noPage"} path="*" element={<NoPage />} /> */}
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}

import "./App.css";
import {
  Link,
  Route,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import HomePage from "./routingSample/HomePage";
import AboutPage from "./routingSample/AboutPage";
import { Menu, Layout, Input } from "antd";
import Promotion from "./routingSample/Promotion";
import CategoryTable from "./antdesignSample/CategoryTable";
import Template1 from "./routingSample/Template1";
import Template2 from "./routingSample/Template2";
import Template3 from "./routingSample/Template3";

const { Header, Content, Footer } = Layout;

const menuItems = [
  {
    key: "home",
    label: <Link to="/home">Home</Link>,
  },
  {
    key: "about",
    label: <Link to="/about">About</Link>,
  },
  {
    key: "table",
    label: <Link to="/tablee">CategoryTable</Link>,
  },
  {
    key: "temp1",
    label: <Link to="/temp1">Template1</Link>,
  },
  {
    key: "temp2",
    label: <Link to="/temp2">Template2</Link>,
  },
  {
    key: "temp3",
    label: <Link to="/temp3">Template3</Link>,
  },
];

function App() {
  const routeDefinition = createRoutesFromChildren(
    <Route >
      <Route path="/" element={<Promotion />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/tablee" element={<CategoryTable />} />
      <Route path="temp1" element={<Template1 />} />
      <Route path="temp2" element={<Template2 />} />
      <Route path="temp3" element={<Template3 />} />
    </Route>
  );

  const router = createBrowserRouter(routeDefinition);

  return <RouterProvider router={router} />;
}

const RootLayout = () => {
  return (
    <>
      <Layout className="layout" >
        <Header   style={{
          display:'flex',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <Menu theme="light" mode="horizontal" items={menuItems}/>
        </Header>
        <Content
          style={{
            padding: "0 50px",
            textAlign:"center",
          }}
        >
          <div
            className="site-layout-content"
            style={{
              backgroundColor: "white",
              marginTop: "4rem",
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Bastards
        </Footer>
      </Layout>
    </>
  );
};

export default App;

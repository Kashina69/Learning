import { type Component } from "solid-js";
import { Route, Router } from "@solidjs/router";
// import { createResource } from "solid-js";

// Page
import UsersPage from "./pages/Users.page";

// Components
import Layout from "./Layout";
import Product from "./common/components/Product";

// Styles
import "./styles/loader.css";

const App: Component = () => {
  return (
    <div>
      <Router root={Layout}>
        <Route path="/" component={()=>(<h1 class="text-5xl text-center my-[40vh]">Home Page</h1>)} />
        <Route path="/users" component={UsersPage} />
        <Route path="/products" component={Product} />
      </Router>
    </div>
  );
};

export default App;

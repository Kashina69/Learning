import { A } from "@solidjs/router";
import { ParentComponent } from "solid-js";

const Layout: ParentComponent = (props) => (
    <>
    <div class="flex justify-evenly items-center mt-3">
      <h1 class="text-2xl font-bold italic">Net Ninja</h1>
      <nav>
        <A class="mr-3" href="/">Home</A>
        <A class="mr-3" href="/products">Products</A>
        <A class="mr-3" href="/users">Users</A>
      </nav>
      </div>
      {props.children}
    </>
  );

export default Layout
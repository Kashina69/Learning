import { Component } from "solid-js";

const Loader:Component = () =>{
    return(
        <div class="fixed inset-0 m-auto bg-opacity-25 flex items-center justify-center z-10 transition-opacity duration-500 ease-in-out">
        <h1 class="text-4xl font-bold">
          Loading
          <span class="loading-dots">
            <span class="dot" style="animation-delay: 0s"></span>
            <span class="dot" style="animation-delay: 0.5s"></span>
            <span class="dot" style="animation-delay: 1s"></span>
          </span>
        </h1>
      </div>
    )
}
export default Loader
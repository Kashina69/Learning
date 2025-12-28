# Video 8 Solid Router

```tsx
const Layout: ParentComponent = (props) => (
  <>
    <div class="flex justify-evenly items-center mt-3">
      <h1 class="text-2xl font-bold italic">Net Ninja</h1>
      <nav>
        <A href="/">Home</A>
        <A href="/products">Products</A>
        <A href="/users">Users</A>
      </nav>
    </div>
    {props.children}
  </>
);

const App: Component = () => {
  return (
    <div>
      <Router root={Layout}>
        <Route path="/" component={() => <h1>Home Page</h1>} />
        <Route path="/users" component={UsersPage} />
        <Route path="/products" component={Product} />
      </Router>
    </div>
  );
};
```

# Video 9 Fetch Data In Solid Js

```tsx

```

# Video 10 Conditional Rendering And Looping through Data

```tsx
return (
  <Show when={condition()} fallback={<p>Loading...</p>}>
    <For each={users()}>
      {(user: User, idx: () => number) => (
        <UserCard
          user={user}
          idx={idx}
          deleteUser={(id) => deleteUser(setUsers, id)}
        />
      )}
    </For>
  </Show>
);
```

# Video 11 Route Parameter

```tsx

```

<Card rounded={true} flat={true}>
  <img src={product.img} alt="product img" />
  <h2 class="my-3 font-bold">{product.title}</h2>
  <A href={"/product/" + product.id}>View Product</A>
</Card>
```

# Video 14 Context in Solid.js

- ./context/CardContext.tsx

```tsx
import { createStore } from "solid-js/store" ;
import { createContext } from "solid-js";

export const CartContext = createContext()
function CartContextProvider(props) {
export const [items, setltems] = createStore([])
return (
  <CartContext.Provider value={{items setItems}}>
  {props.children}
  </CartContext.Provider>
)}
```

- ./index.tsx

```tsx
render(()=>(
  <CartContextProvider>
    <App>
  </CartContextProvider>
), root)
```

- ./Cart.tsx

```tsx
import Card from "../components/Card";

export default Cart(){
  const {items} = useContext(CartContext)

    return(
      <For each={items}>
      {(item)=>(
        <p>{item.title} - ${item.price} x ${item.quantity}</p>
      )}
      </For>
    )
  )
}
```

- Make a new hook for perticular context like CartContext

```tsx
export function useCartContext(){
  return useContext(CartContext)
}

```

# 15 Context in Solidjs Part 2

```tsx

```

# Video 16 Derived Values

- Values which are derived from some signal like for eg: doubleNumber outout will be dependent on number signal.
- So basically what it does is where every i will call this function to get the values if any of the dependent value in the function changes then it will automatically run and change the output so if the item in the cart increases then it will automatically reflect the value

```tsx
const { items } = useCartContext();
const quantity = () => {
  return item.reduce((arr, current) => {
    return acc + current.quantity;
  }, 0);
  // 0 is the initial value of arr which is the accumulator
};
```

# Video 17 Final Video

### Show Notification that we added the product in the card

- Disable Add to card button for a breeff moment of time

```tsx
import { type Component, createSignal, Show } from "solid-js";

const Product: Component = () => {
  //   const params = useParams();
  // const [product] = createResource(params.id, fetchProduct)
  //   const { items, setItems } = useCartContext();
  const [product, _] = createSignal({ title: "Product Title" });
  const [adding, setAdding] = createSignal(false);

  const addProduct = () => {
    setAdding(true);
    setTimeout(() => setAdding(false), 2000);
  };
  return (
    <div>
      <button class="btn" onClick={addProduct} disabled={adding()}>
        Add to Cart
      </button>
      <Show when={adding()}>
        <div class="m-2 p-2 border-amber-50 border-2 rounded-md inline-block">
          {product().title} was added to the cart
        </div>
      </Show>
    </div>
  );
};

export default Product;
```

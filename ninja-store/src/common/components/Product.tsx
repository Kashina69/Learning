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

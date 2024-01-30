const Products = async () => {
  // const productFetchBody = {
  //   productId: 1,
  // };
  // const response = await fetch("http://localhost:3000/api/products", {
  //   method: "POST",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  //   body: JSON.stringify(productFetchBody),
  // });

  // const json = await response.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="flex gap-2 lg:gap-3 flex-col pt-4 items-center w-full max-w-4xl mx-auto px-5">
        {/* <h2 className="text-4xl">{message}</h2> */}
        {/* <p>{JSON.stringify(json)}</p> */}
        <h2 className="text-4xl">Products</h2>
      </section>
    </main>
  );
};
export default Products;

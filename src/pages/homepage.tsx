import Product from "../components/product";

const Homepage = () => {
  return (
    <>
      <h1 className="uppercase mt-6 mb-3 pl-5">Điện Thoại Nổi Bật</h1>
      <div className="grid grid-cols-7 gap-5">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
    </>
  );
};

export default Homepage;

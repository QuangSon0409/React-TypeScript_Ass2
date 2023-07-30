import { useEffect, useState } from "react";
import Product from "../../components/product";
import IProduct from "../../interface/product";
import { getAllProducts } from "../../api/product";

const Homepage = () => {
  const [products, setProduct] = useState<IProduct[]>([]);
  const fetchProduct = async () => {
    const { data } = await getAllProducts();
    setProduct(data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <h1 className="uppercase mt-6 mb-3 pl-5">Điện Thoại Nổi Bật</h1>
      <div className="grid grid-cols-4 gap-5">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};

export default Homepage;

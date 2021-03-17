import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {ProductCard} from "../components/Products";
import { fetchProducts } from '../reducks/products/operations';
import {getProducts} from "../reducks/products/selectors";

const ProductList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const products = getProducts(selector);

  const query = selector.router.location.search;
  const category = /^\?category=/.test(query) ? query.split('?category=')[1] : "";

  useEffect(() => {
    dispatch(fetchProducts(category))
  },[query]);

  return (
     <section className="c-section-wrapin">
    {products.length > 0 && (
      products.map(product => (
        <ProductCard key={product.id} id={product.id} images={product.images} title={product.title} description={product.description} updated_at={product.updated_at}/>
      ))
    )}
    </section>
  )
}

export default ProductList

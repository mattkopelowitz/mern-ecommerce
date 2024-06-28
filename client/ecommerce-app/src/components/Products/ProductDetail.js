import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../../redux/actions/productActions';

const ProductDetail = ({ match }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
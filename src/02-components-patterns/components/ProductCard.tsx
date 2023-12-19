import { createContext, ReactElement } from 'react';
import styles from '../styles/styles.module.css'

import { useProducts } from '../hooks/useProducts';
import { ProductContextProps, Product } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  children?: ReactElement | ReactElement[];
  product: Product;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductCard = ({children, product, className, style}:Props) => {
  const { counter, increaseBy} = useProducts();
  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
    }}>
      <div 
        className={ `${className} ${styles.productCard}`}
        style={style}
        key={product.id}>
        {children}
      </div>
    </Provider>
  )
}
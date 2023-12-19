import { ProductContext } from "./ProductCard";
import { useContext } from 'react';
import styles from '../styles/styles.module.css'


export interface TitleProps {
  title?: string;
  className?: string;
}
export const ProductTitle = ({title = '', className}: TitleProps) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={`${className} ${styles.productDescription}`}>{title ? title : product.title}</span>
  )
}
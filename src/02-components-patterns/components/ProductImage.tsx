import { ProductContext } from "./ProductCard";
import { useContext } from 'react';
import noImage from '../assets/no-image.jpg'

import styles from '../styles/styles.module.css'

export interface Props {
  className?: string;
  img?: string
}
export const ProductImage = ({img = '', className}: Props ) => {

  const { product } = useContext(ProductContext);
  let imgToShow:string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else { 
    imgToShow = noImage
  }
  return (
    <img className={`${className} ${styles.productImg}`} src={imgToShow} alt="Product Image" />
  )
}
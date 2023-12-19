
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'

const product = {
  id:'1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppinngPage = () => {
  return (
    <div >
      <h1>ShoppinngPage</h1>
      <hr />
      <div style={{ 
        display: 'flex',
        flexDirection: 'row',
        flexWrap:'wrap'
      }}>
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title="Beverage" className="text-bold"/>
          <ProductCard.Buttons className="custom-buttons"/>
        </ProductCard>

        <ProductCard 
          product={product}
          className="bg-dark text-white"
        >
          <ProductImage className="custom-image"/>
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons"/>
        </ProductCard>
        <ProductCard 
          product={product}
          style={{ backgroundColor: 'blue'}}
        >
          <ProductImage className="custom-image"/>
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons"/>
        </ProductCard>

      </div>
    </div>
  )
}

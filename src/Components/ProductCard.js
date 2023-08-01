import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      <div className={styles.img}></div>
      <div className={styles.fullContent}>
        <span>Perfume</span>
        <h2 className={styles.title}>
        Gabrielle Essence Eau De Parfum
        </h2>
        <p className={styles.description}>
          A floral, solar and voluptuous interpretation composed by Olivier Polge, 
          Perfumer-Creator for the House of CHANEL.
        </p>

        <div className={styles.price}>
          <span className={styles.price}>$149.99</span>
          <s className={styles.oldPrice}>169.99</s>
        </div>

      <button type="button" className={styles.addToCart}>
        <img src={require("./images/icon-cart.svg").default} alt="add cart icon" />
        <span>Add To Cart</span>
      </button>
      </div>
    </div>
  )
}

export default ProductCard
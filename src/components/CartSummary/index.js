import CartContext from '../../context/CartContext'

import './index.css'

const onClickCheckout = () => (
  <>
    <h1 className="checkout-heading">Payment Successful</h1>
    <p className="checkout-para">Thank you for ordering</p>
    <button type="button" className="button">
      Return to Homepage
    </button>
  </>
)

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })
      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">Items</h1>
            <p className="total-items">
              Total{cartList.length} items : {total}
            </p>
            <button
              type="button"
              className="checkout-button d-sm-none"
              onClick={onClickCheckout()}
            >
              Checkout
            </button>
          </div>
          <button
            type="button"
            className="checkout-button d-lg-none"
            onClick={onClickCheckout()}
          >
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary

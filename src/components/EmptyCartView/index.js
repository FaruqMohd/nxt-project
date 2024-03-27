import Header from '../Header'

import './index.css'

const EmptyCartView = () => (
  <>
    <Header />
    <div className="cart-empty-view-container">
      <img src="" alt="cart empty" />
      <h1 className="cart-empty-heading">Your cart is empty</h1>
    </div>
  </>
)

export default EmptyCartView

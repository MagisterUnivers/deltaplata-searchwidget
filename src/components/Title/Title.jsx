import './Title.style.scss'

export const Title = ({ text, quantity }) => {
  return (
    <div className='title-wrapper__component'>
      <h1 className='hero-title'>{text}</h1>
      {quantity && (
        <span className='quantity-border'><p className='quantity-counter'>{quantity}</p></span>
      )}
    </div>
  )
}

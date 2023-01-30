import React, { useState } from 'react'
import './DeliveryForm.css'

const DeliveryForm = () => {
  const [cart, setCart] = useState(0)
  const [distance, setDistance] = useState(0)
  const [amount, setAmount] = useState(0)
  const [time, setTime] = useState('')
  const [price, setPrice] = useState(0)

  const priceHandler = (cart, distance, amount, time) => {
    console.log(cart);
    console.log(distance);
    console.log(amount);
    const new_price = (cart || 0) + (distance/1000 || 0) + (amount || 0)
    setPrice(new_price)
  }

  const cartValueHandler = (event) => {
    const priceValue = parseInt(event.target.value, 10)
    setCart(priceValue)
    priceHandler(priceValue, distance, amount, time)
  }

  const distanceValueHandler = (event) => {
    const distanceValue = parseInt(event.target.value, 10)
    setDistance(distanceValue)
    priceHandler(cart, distanceValue, amount, time)
  }

  const amountValueHandler = (event) => {
    const amountValue = parseInt(event.target.value, 10)
    setAmount(amountValue)
    priceHandler(cart, distance,amountValue, time)
  }

  const timeValueHandler = (event) => {
    const timeValue = new Date(event.target.value)
    setTime(timeValue)
    priceHandler(cart, distance, amount, timeValue)
  }

  return (
    <div className="delivery-calculator">
      <h1>Delivery Fee Calculator</h1>
      <div className='delivery-calculator__control'>
        <label className='delivery-calculator__label'>Cart Value</label>
        <input className='delivery-calculator__input' type="number" value={cart} onChange={cartValueHandler} />
        <p>EUR</p>
      </div>
      <div className='delivery-calculator__control'>
        <label className='delivery-calculator__label'>Delivery distance</label>
        <input className='delivery-calculator__input' type="number" value={distance} onChange={distanceValueHandler} />
        <p>m</p>
      </div>
      <div className='delivery-calculator__control'>
        <label className='delivery-calculator__label'>Amount of items</label>
        <input className='delivery-calculator__input' type="number" value={amount} onChange={amountValueHandler} />
        <p>pcs</p>
      </div>
      <div className='delivery-calculator__control'>
        <label className='delivery-calculator__label'>Time</label>
        <input className='delivery-calculator__input' type="date" value={time} onChange={timeValueHandler} />
      </div>
      <div>
        <p>Delivery price: {price} EUR</p>
      </div>
    </div>

  )
}

export default DeliveryForm

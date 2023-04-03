import React from 'react'
import Card from 'react-credit-card-payment'

export default function CreditCard  () {
  return (
    <div>
      <h4>My Card</h4>
      <Card
        bankName='ANZ Bank'
        cardHolder='Andrew White'
        cardNumber='1234567898765432'
        issuer='visa'
        theme='dark'
        sx={{ width: 500}}
      />
    </div>
  )
}

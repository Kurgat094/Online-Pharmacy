import React from 'react';

const paymentMethods = ['Mpesa', 'Credit Card', 'Paypal'];

function PaymentMethods() {
  return (
    <section className="my-4">
      <h2>Payment Methods</h2>
      <ul className="list-group">
        {paymentMethods.map((method, index) => (
          <li className="list-group-item" key={index}>
            {method}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PaymentMethods;

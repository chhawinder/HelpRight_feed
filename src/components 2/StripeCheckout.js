import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_live_51MfCVBSCX5Mf2t2sBvrVEDgexpDptitUF6cL58q4MhaRGOYl6uEZuIx83PFVYRd83TsLD7SF3l0qTXTFaPOWyC9P00k9OdRtgn";

  const onToken = (token) => {
    console.log(token);
    alert('Payment successful!');
  };

  return (
    <StripeCheckout

      label='Donate'
      name='HelpRight'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is Rs{price}`}
      amount={priceForStripe}
      panelLabel='Donate'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

import React from 'react';
// import '../../styles/CreditCard.css';

const CreditCard = () => {
  return (
    <div className="credit-card">
     <div class="container">
        <div class="circles">
            <div class="circle circle-1"></div>
            <div class="circle circle-2"></div>
          </div>
          
        <div class="card">
            <div class="visa_logo">
                <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png" alt=""/>
            </div>
            <div class="visa_info">
                <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" alt=""/>
                <p>4586 7985 9271 6388</p>
            </div>
            <div class="visa_crinfo">
                <p>02/12</p>
                <p>Adarsh</p>
            </div>
        </div>
    </div>
    </div>
  );
};

export default CreditCard;

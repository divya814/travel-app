import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Footer from '../layout/Footer';

function Bookcar() {
  
  return (
    <>
    <div className='cards'>
      <h1>Book your Car!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/car1.jpg'
              text='Hyundai Verna (5 seater)'
              label='Available'
              
            />
            <CardItem
              src='images/car2.jpg'
              text='Desire (5 seater)'
              label='Available'
             
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/car3.jpg'
              text='Honda city (5 seater)'
              label='Available'
              
            />
            <CardItem
              src='images/car4.jpg'
              text='Breza (7 seater)'
              label='Available'
              
            />
            <CardItem
              src='images/car5.jpg'
              text="Maruti Suzuki 800 (4 seater)"
              label='Available'
              
            />
          </ul>
        </div>
      </div>

    </div>
    <Footer/>
    </>
  );
}

export default Bookcar;

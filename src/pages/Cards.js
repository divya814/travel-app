import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Himachal'
              label='Adventure'
              
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Andaman and Nicobar'
              label='Luxury'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Go for river rafting in Nainital'
              label='Mystery'
              
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himalayan Mountains'
              label='Adventure'
              p
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Rajasthan Desert on a guided camel tour'
              label='Adrenaline'
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

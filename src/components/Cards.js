import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards pad' id='shop'>
      <h1>Shop by category</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem
              src='images/all_m.gif'
              text='All batteries'
              label='Bike batteries'
              path='/services'
            />
            <CardItem
              src='images/car_m.gif'
              text='Car batteries'
              label='Car batteries'
              path='/services'
            />
          </ul>
          <ul className='cards_items'>
            <CardItem
              src='images/truck_m.gif'
              text='Truck Batteries'
              label='Truck Batteries'
              path='/services'
            />
            <CardItem
              src='images/home_m.gif'
              text='Inverter Batteries'
              label='Inverter Batteries'
              path='/products'
            />
            <CardItem
              src='images/bike.gif'
              text='Bike Batteries'
              label='All Batteries'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

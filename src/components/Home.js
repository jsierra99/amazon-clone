import React from 'react';
import "../css/Home.scss";
import Product from './Product';

const Home = () => 
{
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image" 
                    src="https://m.media-amazon.com/images/I/612+l8TFoOL._SX3740_.jpg" alt="banner" 
                />
                <div className="home__row">
                    <Product 
                        id="121321341"
                        title="The lean startup" 
                        price={29.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="49538094"
                        title="Intel Core i7-9700F Desktop Processor 8 Core 3 GHz speed (Up to 4.7 GHz) Without Processor Graphics 
                        LGA1151 300 Series 65W (BX80684I79700F)"
                        price={239.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/41y3zAnKPIL._AC_SY230_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product 
                        id="23445930"
                        title="2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Silver"
                        price={1169.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71gD8WdSlaL._AC_SX270_SY140_.jpg"
                    />
                    <Product 
                        id="3254354345"
                        title="BLACK+DECKER Jig Saw, 4.5 -Amp (BDEJS300C)"
                        price={24.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/412o2rzDimS._AC_SR400,600_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="1234334534"
                        title="Shell Rotella T5 Synthetic Blend 15W-40 Diesel Engine Oil (1 Gallon, Case of 3)"
                        price={77.59}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/81t3bRNfqmL._AC_SX120_SY140_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

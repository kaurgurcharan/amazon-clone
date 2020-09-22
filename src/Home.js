import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img 
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup" 
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater. Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <div className="home__row">
        <Product 
          id="4903850"
          title="Samsung LC5678876uXen 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="23445890"
          title="Amazon Echo (3rd generation) Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71I6oj6ZFBL._AC_UL320_.jpg"
        />
        <Product
          id="742576892887"
          title="New Apple iPad Pro(12.9-inch, WiFi, 128GB- $th generation)"
          rating={4}
          price={2198.99}
          image="https://m.media-amazon.com/images/I/61z85f1XsgL._AC_UL320_.jpg"
        />
        </div>
        <div className="home__row">
        <Product
          id="8932647537698"
          price={68.99}
          title="Hair Staritner 1.2 inch"
          rating={4}
          image="https://m.media-amazon.com/images/I/61AWDqxKGfL._AC_UL320_.jpg"
        />
        </div>
      
      
      </div>
    </div>
  )
}

export default Home

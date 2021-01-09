import React from 'react'
import "./Home.css";
import Product from "./Product"

function Home() {
	return (
		<div className="home">
			<div className="header-container">
				<img className="home-img" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Coolie/launch/1500x600_Hero-Tall_np._CB411102619_.jpg" />
				<div className="home-row">
					<Product id="178364"
							 title="The Power of Now: A Guide to Spiritual Enlightenment Paperback – 30 November 2006 by Eckhart Tolle " 
							 image="https://m.media-amazon.com/images/I/81rTrhtGDvL._AC_UY327_FMwebp_QL65_.jpg"
							 price={435.00}
							 rating={5}
							 />
					
					<Product id="1234"
							 title="OnePlus Bullets Wireless Z Bass Edition with bluetooth 5.0 (Reverb Red)" 
							 image="https://images-na.ssl-images-amazon.com/images/I/61DKcGr12OL._SL1500_.jpg"
							 price={1,999.00}
							 rating={4}
							 />
					
				</div>
				<div className="home-row">
					
					<Product id="123"
							 title="OnePlus Nord 5G (Gray Ash, 12GB RAM, 256GB Storage)" 
							 image="https://images-na.ssl-images-amazon.com/images/I/71-8y4L6jKL._SL1500_.jpg"
							 price={29,999.00}
							 rating={5}
							 />
					
					<Product id="1236564"
							 title="Redmi Note 9 Pro Max (Aurora Blue, 6GB RAM, 128GB Storage) - 64MP Quad Camera  | Extra Upto INR 1500 Off on Exchange | Upto 12 Months No Cost EMI" 
							 image="https://images-na.ssl-images-amazon.com/images/I/81DvimWN5xL._SL1500_.jpg"
							 price={18,499.00}
							 rating={4}
							 />
					
					<Product id="145634"
							 title="Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)" 
							 image="https://images-na.ssl-images-amazon.com/images/I/71-Su4Wr0HL._SL1500_.jpg"
							 price={16,499.00}
							 rating={4}
							 />
					

				</div>
				<div className="home-row">
					<Product id="1236654"
							 title="AKAI 108 cm (43 Inches) Fire TV Edition Full HD Smart LED TVAKLT43S-DFS6T (Black) (2020 Model)" 
							 image="https://images-na.ssl-images-amazon.com/images/I/81imy7kHxWL._SL1500_.jpg"
							 price={23,999.00}
							 rating={5}
							 />
					
				</div>
			</div>
		</div>
	)
}

export default Home
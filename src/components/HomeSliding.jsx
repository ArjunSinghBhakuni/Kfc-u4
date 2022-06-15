import { Img } from "@chakra-ui/react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const HomeSliding = () => {
  

  return <div>   

<Carousel>

		<Carousel.Item interval={2000}>
		<img
			className="d-block w-100"
src=  "https://images.ctfassets.net/wtodlh47qxpt/4w2NU51eNqAlF0S4k3YLTB/0d9dd4031fc40bd266a2b4ac49834491/1440_x_396_Value_Burger.jpg?w=1280&fit=fill&fm=webp"
			alt="Image One"
		/>
	 
		</Carousel.Item>


		<Carousel.Item interval={2000}>
		<img
			className="d-block w-100"
src=  "https://images.ctfassets.net/wtodlh47qxpt/jxsYEVgrAX6liDnW8gxdW/17c8a5387706c5b3af41df18ab39361d/Express_pick_up_app_banner_1440x396.jpg?w=1280&fit=fill&fm=webp"
			alt="Image Two"
		/>
	 
		</Carousel.Item>

        <Carousel.Item interval={2000}>
		<img
			className="d-block w-100"
src= "https://images.ctfassets.net/wtodlh47qxpt/5477Y6AToWWjDUgchkqn5l/644a80e35a990d1bee592811b278fddd/Wedmesday_banner_1440x396px.jpg?w=1280&fit=fill&fm=webp"
			alt="Image Two"
		/>
	 
		</Carousel.Item>
    
    <Carousel.Item interval={2000}>
		<img
			className="d-block w-100"
src= "https://images.ctfassets.net/wtodlh47qxpt/2cKs5e17FbKIE7Dza5ZlNM/996c91ae970f53a25b6bba8036f97aff/Biryani_Banner_1440x396px.jpg?w=1280&fit=fill&fm=webp"
			alt="Image Two"
		/>
	 
		</Carousel.Item>

	</Carousel>
   
  </div>;
};

export default HomeSliding;

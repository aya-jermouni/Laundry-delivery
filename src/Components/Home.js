import React from "react";
import { Container ,Row , Col } from "react-bootstrap";
import Map from "./Map";
// import ItemCard from './ItemCard';
import "./Style/Home.css"
import ImgHeader from "./ImgHeader";

import Whychooseus from './Whychooseus';
import Landingpage from './Landingpage'
// import PromotionBar from './PromotionBar';
function Home() {
//   const [items, setItems] = useState([]);
//  useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const data = await import('../items.json');
//         setItems(data.default);
//       } catch (error) {
//         console.error('Error loading items:', error);
//       }
//     };

//     fetchItems();
//   }, []);

  return (
    <div> 
      <Landingpage/>
      <div style={{backgroundColor:"#a9dac4",display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin:"0"}}>
<div  className="dBTitle" style={{flex:"1"}}> <h3>Ranked Excellent by our custumors </h3>
<h4  className="dSTitle">  In categories Dry Cleaners , Laundry Service ,Tailor and Cobbler</h4>
</div>
<div style={{flex:"1"}}> <img src="/images/rating.png" style={{height:"auto",width:"100px"}}></img></div>
      </div>
      <Container className="mt-4" style={{marginBottom:"20px"}}>
     
      <Row style={{display:"flex"}}>
        
        <Col  style={{flex:"1"}} >
          <div className="intro">
            <h3 className="localisation">Welcome to Luxury Laundry Pro</h3>
          <p style={{color:"#a3a5bc "}}>
            Laundry Luxury Pro offers premium fabric care with a dedicated team ensuring cleanliness and garment longevity. 
            Our sophisticated facilities and eco-friendly practices cater to unique wardrobe needs,
            combining luxury with responsible garment care. Trust us for a precise and opulent laundry experience,
            where excellence meets elegance in every wash, including cleaning, sneaker care, and more.
          </p></div>
          </Col>
        <Col style={{flex:"1"}}> 
        <div className="map-container">
            <Map />
          </div></Col>
      </Row>
      
      </Container>
      {/* <PromotionBar/> */}
      <Whychooseus/>
      <ImgHeader />
      {/* <div className="scrolling-container">
        {items.map((item, index) => (
          <ItemCard
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div> */}
    </div>
  );
}

export default Home;

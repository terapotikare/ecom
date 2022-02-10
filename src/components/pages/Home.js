import { Card } from "antd";
import { Carousel } from "react-bootstrap";
import "./home.css";
import Footer from "../Footer";
const { Meta } = Card;
const Home = () => {
  return (
    <div>
      <Card
      
        hoverable
        style={{ height: 1000, width: 1263, border: 0, padding: 0 }}
        cover={
          <img
            alt="example"
            src="https://www.mylovebutik.com/Uploads/Slider/-49.jpg?t=20211126222900"
            
          />
        }
      ></Card>
      
      <Card
        hoverable
        style={{height: 1000,width: 1263,bottom: 280,border: 0,padding: 0,}}
        cover={
          <img
            alt="example"
            src="https://www.mylovebutik.com/Uploads/EditorUploads/blackfridaysonu-1.jpg"
          />
        }
      ></Card>

      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="slayt1"
            src="https://www.mylovebutik.com/Uploads/UrunResimleri/thumb/ceketpapa-dugme-detay-ceket-b3e1a1.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h3>Papa Düğme Detaylı Ceket</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="slayt2"
            src="https://www.mylovebutik.com/Uploads/UrunResimleri/thumb/ceketvinil-crop-ceket-6ce382.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h3>Crop ceket</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slayt3"
            src="https://www.mylovebutik.com/Uploads/UrunResimleri/thumb/takimlaryourself-baski-esofman-takimi-dcf31-.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h3>Baskı Eşofman Takımı</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer></Footer>
    </div>
  );
};
export default Home;

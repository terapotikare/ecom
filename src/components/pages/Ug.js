import React,{useState} from "react";
import { Card, Button } from "antd";
import Data from "./Data";
import Footer from "../Footer";
const { Meta } = Card;

export default function Ug() {
  console.log("I am here");
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const {number,setnumber}=useState(0);
  return (
    <div>
      <Data/>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 10 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0587/cml/orta/gold-dugme-detayli-tuvit-ceket-0187fa3e8dbd.jpg"
          />
        }
      >
        <Meta title="Gold Düğme Detaylı Tuvit Ceket " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://www.mylovebutik.com/Uploads/UrunResimleri/thumb/elbiselerdrape-detay-ellie-saten-elbis-f4757-.jpg"
          />
        }
      >
        <Meta title="Drape Detay Ellie Saten Elbise " />
        <p>₺169,00</p>
        <Button onClick={()=>{setnumber(number+1)}}>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0597/ysl/orta/arkasi-yazili-citcitli-sweatshirt-0122c328f79c.jpg"
          />
        }
      >
        <Meta title="Balıkçı Yaka Çizgili Kazak " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>

      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 290, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://resim.ozgeozgenc.com/22koz0619/khv/orta/bol-kesim-genis-paca-pantolon-0187b9531dc8.jpg"
          />
        }
      >
        <Meta title="Bol Kesim Geniş Paça Pantolon " />
        <p>₺169,00</p>
        <Button>Sepete ekle</Button>
        <Button>❤</Button>
      </Card>
      <Footer></Footer>
    </div>
  );
}

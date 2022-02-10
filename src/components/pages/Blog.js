import React from "react";
import { Card, Button } from "antd";

import Footer from "../Footer";
const { Meta } = Card;

export default function Ug() {
  console.log("I am here");
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div>
      <Card
        hoverable
        style={{ width: 229, float: "left", margin: 10 }}
        cover={
          <img
            alt="example"
            src="https://www.denizbutik.com/Uploads/Blog/Ilk-Bulusma-Icin-Kombin-Onerileri-7983.png"
          />
        }
      >
        <Meta title="There is no one who loves pain, seeks it and wants to have it. The reason is simple. because it is pain " />

        <Button>Devamını Oku</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 229, float: "left", margin: 10 }}
        cover={
          <img
            alt="example"
            src="https://www.denizbutik.com/Uploads/Blog/Ilk-Bulusma-Icin-Kombin-Onerileri-7983.png"
          />
        }
      >
        <Meta title="There is no one who loves pain, seeks it and wants to have it. The reason is simple. because it is pain " />

        <Button>Devamını Oku</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 229, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://www.denizbutik.com/Uploads/Blog/Ilk-Bulusma-Icin-Kombin-Onerileri-7983.png"
          />
        }
      >
        <Meta title="There is no one who loves pain, seeks it and wants to have it. The reason is simple. because it is pain" />
        <Button>Devamını Oku</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 229, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://www.denizbutik.com/Uploads/Blog/Ocak-Ayinda-Dogan-Oglak-Burclari-Icin-Ko-d0d4.png"
          />
        }
      >
        <Meta title="There is no one who loves pain, seeks it and wants to have it. The reason is simple. because it is pain " />
        <Button>Devamını Oku</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 229, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://www.denizbutik.com/Uploads/Blog/Kis-Icin-Nail-Art-Fikirleri-3367.png"
          />
        }
      >
        <Meta title="There is no one who loves pain, seeks it and wants to have it. The reason is simple. because it is pain " />
        <Button>Devamını Oku</Button>
      </Card>

      <Card
        hoverable
        style={{ width: 229, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://www.denizbutik.com/Uploads/Blog/Sonbahar-Gecisine-Destek-Ekip-Ceketler-1056.png"
          />
        }
      >
        <Meta title="There is no one who loves pain, seeks it and wants to have it. The reason is simple. because it is pain" />
        <Button>Devamını Oku</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 210, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://www.denizbutik.com/Uploads/Blog/Mukemmel-Sonbahar-Makyaji-Icin-5-Tuyo-851c.png"
          />
        }
      >
        <Meta title="There is no one who loves pain, seeks it and wants to have it. The reason is simple. because it is pain " />
        <Button>Devamını Oku</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 229, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://www.denizbutik.com/Uploads/Blog/Dogum-Gunu-Elbiseleri-2a12.jpg"
          />
        }
      >
        <Meta title="There is no one who loves pain, seeks it and wants to have it. The reason is simple. because it is pain " />
        <Button>Devamını Oku</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 229, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://www.denizbutik.com/Uploads/Blog/KAZAK-VE-TRIKO-BAKIMI-NASIL-YAPILIR-b860.jpg"
          />
        }
      >
        <Meta title="There is no one who loves pain, seeks it and wants to have it. The reason is simple. because it is pain " />
        <Button>Devamını Oku</Button>
      </Card>
      <Card
        hoverable
        style={{ width: 229, float: "left", margin: 12 }}
        cover={
          <img
            alt="example"
            src="https://www.denizbutik.com/Uploads/Blog/Romantik-Tarzda-Sade-Gelin-Makyaji-421c.png"
          />
        }
      >
        <Meta title="There is no one who loves pain, seeks it and wants to have it. The reason is simple. because it is pain " />
        <Button>Devamını Oku</Button>
      </Card>
     
      

      <Footer></Footer>
    </div>
  );
}

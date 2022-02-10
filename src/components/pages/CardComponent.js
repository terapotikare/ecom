import React from "react";
import { Card,Button } from "antd";

const { Meta } = Card;
export default function CardComponent(props) {
  return (
    <Card
      hoverable
      style={{ width: props.width }}
      cover={<><img alt="example" src={props.photo} />
    <input type='number' value={props.aralik} onChange={props.araligiAyarla}></input></>}
    >
      <Meta title={props.title} description={props.desc} />
      <Button> sepete ekle</Button>
    </Card>
  );
}

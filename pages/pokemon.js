import { Button, Col, Row, Table } from 'antd';
import Link from 'next/link';
import React from 'react'


const tableColumns = [
 {
  title: "id",
  dataIndex: "id",
  key: "id",
 },
 {
  title: "Name",
  dataIndex: "name",
  key: "id",
 },
 {
  title: "Height",
  dataIndex: "height",
  key: "id",
 }, 
 {
  title: "Weight",
  dataIndex: "weight",
  key: "id",
 }, 
];

const pokemon = ({pokeman, index}) => {
  return (
    <Col style={{justifyContent:"flex-end"}} xs={24}  key={index}>
     <Link href={'/'}>
      <a>Go Back</a>
    </Link>
   <Row>
   <img src={pokeman.image} alt={pokeman.name} />
   <Table
    columns={tableColumns}
    dataSource={[pokeman]}
    pagination={false} />
   </Row>
    </Col >
  )
}

export default pokemon;

export async function getServerSideProps({ query }) {
    const id = query.id;
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokeman = await res.json();
        const paddedId = ('00' + id).slice(-3);
        pokeman.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
        return {
            props: { pokeman },
        };
    } catch (err) {
        console.error(err);
    }
}
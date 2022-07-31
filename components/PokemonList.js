import { Card, Col, Row } from 'antd'
import Meta from 'antd/lib/card/Meta'
import Link from 'next/link'

const PokemonList = ({pokemon}) => {
  return (
    <>
    <Row gutter={[16,16]} >
    {pokemon.map((item, index) => (
    <Col key={index} xs={24} md={4} >
    <Card   
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={item.image} />} 
    >
    <Row>
    <h4 style={{textTransform:"capitalize"}}> {index +1}. {item.name} </h4>
    </Row>    
    <Link href={`/pokemon?id=${index + 1}`}>
      <a>Detail</a>
    </Link>
    </Card>
    </Col>
    ))}
    </Row>
    </>
  )
}

export default PokemonList
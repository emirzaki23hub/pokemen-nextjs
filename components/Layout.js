import Head from "next/head"
import { Typography, Col, Divider } from 'antd';
import Link from "next/link"
import Navbar from "./Navbar";
const { Title } = Typography;

const Layout = ({title, children}) => {
  return (
    <>
    <div style={{textAlign:'center'}}>
    <h1>Pokemon Next JS</h1>
    </div>
    <Divider />
    <div style={{margin:1, paddingLeft:30}}>
    {children}
    </div>
    </>
  )
}

export default Layout
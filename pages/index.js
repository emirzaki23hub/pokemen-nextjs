import { DatePicker, Button, Row, Col } from 'antd'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Link from 'next/Link';
import PokemonList from '../components/PokemonList';

export default function Home({pokemon}) {
  return (
    <>
    <PokemonList pokemon={pokemon} />
    </>
  )
}


export async function getStaticProps(context) {
  try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const { results } = await res.json();
      const pokemon = results.map((pokeman, index) => {
          const paddedId = ('00' + (index + 1)).slice(-3);

          const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
          return { ...pokeman, image };
      });
      return {
          props: { pokemon },
      };
  } catch (err) {
      console.error(err);
  }
}
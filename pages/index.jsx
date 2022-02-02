import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import About from './about'


export default function Home() {
  return (

    <div className="container">
      <h1>osioaiod</h1>
      <ul>
        <li>
          <Link href={'/subrota'}> go to subrota </Link>
        </li>
      </ul>
      <About/>
    </div>
  )
}

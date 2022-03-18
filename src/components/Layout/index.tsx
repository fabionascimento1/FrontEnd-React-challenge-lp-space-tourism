import { Element } from 'react-scroll'
import Crew from '../Crew'
import Destination from '../Destination'
import Home from '../Home'
import Technology from '../Technology'
import Topbar from '../Topbar'

export default function Layout() {
  return (
    <>
      <Topbar />
      <Element name='home'>
        <Home />
      </Element>
      <Element name='destination'>
        <Destination />
      </Element>
      <Element name='crew'>
        <Crew />
      </Element>
      <Element name='technology'>
        <Technology />
      </Element>
    </>
  )
}

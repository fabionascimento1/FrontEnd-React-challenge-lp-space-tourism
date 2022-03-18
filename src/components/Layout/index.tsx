import { Element } from 'react-scroll'
import Destination from '../Destination'
import Home from '../Home'
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
    </>
  )
}

import { Element } from 'react-scroll'
import Home from '../Home'
import Topbar from '../Topbar'

export default function Layout() {
  return (
    <>
      <Topbar />
      <Element name='home'>
        <Home />
      </Element>
    </>
  )
}

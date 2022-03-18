import Line from '../Line'
import Navbar from '../Navbar'

export default function Topbar() {
  return (
    <div className="fixed top-6 flex justify-between items-center w-full h-24 pl-8">
      <picture className="w-12 h-12">
        <img src="./shared/logo.svg" alt="Front Challenge React" />
      </picture>
      <Line />
      <Navbar />
    </div>
  )
}

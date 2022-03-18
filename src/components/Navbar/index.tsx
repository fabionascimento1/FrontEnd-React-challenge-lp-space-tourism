import { Link } from "react-scroll"

export default function Navbar() {
  const data = [
    {
      name: 'home',
    },
    {
      name: 'destination',
    },
    {
      name: 'crew',
    },
    {
      name: 'technology',
    },
  ]
  return (
    <div className="h-full w-3/5 backdrop-blur-lg after:w-fulll after:h-full after:absolute after:bg-blue-light after:opacity-5 after:z-10 after:top-0">
      <div className="w-full h-full flex gap-6 items-center justify-center">
        {data.map(({name}, index) => (
          <div className="text-white h-full select-none cursor-pointer hover:border-b-2 transition-all duration-300">
            <Link 
              className="h-full flex gap-2 items-center uppercase" 
              to={name}
              spy={true}
              smooth={true}
              duration={500}  
            >
            <p className="font-bold">0{index}</p>
            {name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

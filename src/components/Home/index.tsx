import content from './content'

export default function Home() {
  return (
    <div className="h-screen bg-home-desktop bg-cover bg-center">
      <div className="w-full h-full flex items-end justify-between px-[10%] py-[5%]">
        <div className="max-w-xs h-auto flex flex-col text-white gap-4">
          <div className="text-lg text-blue-light">
              {content[0].subtitle}
          </div>
          <div className="text-8xl">
              {content[0].title}
          </div>
          <div className="text-md text-blue-light">
              {content[0].description}
          </div>
        </div>
        <button className="w-56 h-56 rounded-full text-3xl bg-white uppercase hover:bg-blue-light hover:text-white transition-colors duration-300">Explorer</button>
      </div>
    </div>
  )
}

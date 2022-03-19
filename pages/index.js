import Link from "next/link"
import react from "react"

export default function Home() {
  return (<>
  <section className="text-gray-600 body-font" >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-4xl mb-2 text-gray-900 font-poppins font-bold">Shre Yash
              <br className="hidden lg:inline-block" />
            </h1>
            <h2 className="sm:text-xl text-2xl font-semibold mb-2 text-blue-700"><span className="auto-input">Front End Developer</span></h2>
            <p className="mb-8 leading-relaxed font-poppins select-none">Programming has always been my passion! I have been doing it for years and I enjoy what I do. My best languages are Python ,React , Javascript, HTML, CSS & TailwindCss. However, I can excel in all the languages I provided. I am a fast
                learner and I believe that any project always needs a lot of testing before it goes through the acceptance testing, since that is what makes projects successful. I am very friendly, and my motto is not to think outside the box but
                build a bigger box!.</p>
            <div className="flex justify-center">
              <Link href="https://project.ishreyash.com/"><a className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg font-poppins hover:scale-105" >Projects</a></Link>
              <Link href="https://github.com/ishre-yash"><a className="ml-4 inline-flex text-white hover:bg-black border-0 py-2 px-6 focus:outline-none bg-gray-900 rounded text-lg font-poppins hover:scale-105" >Github</a></Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden md:block">
            <img className="object-cover object-center rounded" alt="shreyash, ishreyash" src="https://raw.githubusercontent.com/ishre-yash/ishre-yash/main/shreyash1.webp" />
          </div>
        </div>
      </section>
  
  </>    
  )
}

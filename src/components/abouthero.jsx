export default function AboutHero(){
    return(
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

    <h3 className="title-font sm:text-4xl lg:text-3xl  mb-4  text-gray-900">
     ABOUT COMPANY
      </h3>
      <h1 className="title-font sm:text-4xl lg:text-8xl  mb-4 font-medium mt-5 text-gray-900">
     ABOUT <span className="text-red-600">US</span>
      </h1>
      <p className="mb-8 leading-relaxed text-2xl text-grey mt-5">
      We know how large objects will act, <br />
      but things on a small scale 
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg">
          Get Quote Now
        </button>
   
      </div>
    </div>
    <div className="  md:w-1/2" >
      <img
      style={{ width: '800px' }}
        className="object-cover object-center rounded"
        alt="hero"
        src="https://st2.depositphotos.com/1013513/5479/i/450/depositphotos_54795911-stock-photo-happy-young-woman-holding-shopping.jpg"
      />
    </div>
  </div>
</section>

    )
}
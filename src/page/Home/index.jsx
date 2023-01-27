import React from 'react'

const Home = () => {
  return (
    <div>
        {/* wrapper */}
        <div className="flex">
            {/* left: image */}
            <div className="flex-1">
                <img src="/src/assets/images/lips.svg" alt="" />
                <span className="sha"></span>
            </div>

            {/* right: text */}
            <div className="pt-52 flex-1 flex flex-col gap-3">
                <p className="text-redPink text-xl font-bold">#FLIP THE TIP</p>
                <p className="text-white text-6xl font-black">AMAZING<br/>HEAD</p>
                <p className="text-white text-base leading-7 font-normal pt-3">Soft, warm, fuzzy, satisfying felling wrapped around<br/> your joe and catty. Book a session and have ultimate<br/> satisfaction delivered right at your doorstep</p>
            <div className="flex items-center gap-9 pt-20">
                <button className="bg-purple rounded-full text-white px-4 py-3">Book Now</button>
                <p className="text-white">Explore the satisfaction</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home
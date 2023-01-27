import React from 'react'

const Navbar = () => {
  return (
    <div>
        {/* wrapper */}
        <div className="flex items-center justify-center pt-7">
            {/* logo: left side */}
            <div className="flex-1 px-20">
                <img src="/src/assets/images/applogo.svg" alt="" />
            </div>

            {/* menu items: right side */}
            <div className="flex-[2] flex text-redPink items-center gap-14">
                <ul className="flex gap-14">
                    <li>Models Arena</li>
                    <li>Satisfaction</li>
                    <li>Services</li>
                    <li>Know More</li>
                </ul>
                <button className="rounded-full border px-4 py-3">Support</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
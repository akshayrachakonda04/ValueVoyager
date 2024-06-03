import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './spares.css'
const spares = () => {
  return (
    <div className='home-container'>
            <div className="spare-card">
                <img src="https://res.cloudinary.com/dxy5ohowd/image/upload/v1717147176/What-is-the-Oil-Filters-Primary-Job_-1000x675-1_eyvomh.jpg" alt="oil filter" className='industry-image'/>
                <h1>Oil Filter</h1>
                <p>Rs. 599/-</p>
                <Link to="/payments">
                    <button type="button">Buy Now</button>
                </Link>
            </div>
            <div className="spare-card">
                <img src="https://res.cloudinary.com/dxy5ohowd/image/upload/v1717147927/Clutch-Kit-KT-394-2_beqao9.jpg" alt="Clutch" className='industry-image'/>
                <h1>Clutch</h1>
                <p>Rs. 2999/-</p>
                <Link to="/payments">
                    <button type="button">Buy Now</button>
                </Link>
            </div>
            <div className="spare-card">
                <img src="https://res.cloudinary.com/dxy5ohowd/image/upload/v1717148036/blog-17.5_k0rjtp.jpg" alt="spark plug" className='industry-image'/>
                <h1>Spark Plug</h1>
                <p>Rs. 799/-</p>
                <Link to="/payments">
                    <button type="button">Buy Now</button>
                </Link>
            </div>
            <div className="spare-card">
                <img src="https://res.cloudinary.com/dxy5ohowd/image/upload/v1717148189/GSP_CategoryImages_ShockAbsorbers_rlgyou.jpg" alt="shock absorber" className='industry-image'/>
                <h1>Shock Absorber</h1>
                <p>Rs. 1425/-</p>
                <Link to="/payments">
                    <button type="button">Buy Now</button>
                </Link>
            </div>
            <div className="spare-card">
                <img src="https://res.cloudinary.com/dxy5ohowd/image/upload/v1717148658/Signs_Its_Time_to_Replace_Your_Car_Air_Filter_637606531293281070_adpnk2.png" alt="air filter" className='industry-image'/>
                <h1>Air Filter</h1>
                <p>Rs. 330/-</p>
                <Link to="/payments">
                    <button type="button">Buy Now</button>
                </Link>
            </div>
    </div>
  )
}
export default spares
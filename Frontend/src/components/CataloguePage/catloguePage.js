import './index.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const CataloguePage=()=>(
    <div className='catalogue-container'>
        <div className='car-card'>
            <img src="https://images.carandbike.com/car-images/colors/kia/seltos/kia-seltos-glacier-white-pearl-aurora-black-pearl-tech.jpg?v=1695270725" alt="car" className='car-image'/>
            <h1>KIA</h1>
            <Link to="/spares">
            <button type="button">Click Here</button>
            </Link>
           
        </div>
        <div className='car-card'>
            <img src="https://d2m3nfprmhqjvd.cloudfront.net/blog/20220829193506/Spinny-Assured-Hyundai-i20-with-sunroof-1160x653.jpg" alt="car" className='car-image'/>
            <h1>Hyundai</h1>
            <Link to="/spares">
            <button type="button">Click Here</button>
            </Link>
        </div>
        <div className='car-card'>
            <img src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/122905/left-front-three-quarter0.jpeg?isig=0" alt="car" className='car-image'/>
            <h1>Maruthi Suzuki</h1>
            <Link to="/spares">
            <button type="button">Click Here</button>
            </Link>
        </div>
    </div>
)
export default CataloguePage
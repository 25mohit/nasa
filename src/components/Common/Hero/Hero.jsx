import { AiOutlineDoubleRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Hero = props => {
  return (
    <div className='hero-section'>
        <h1>{props.title}</h1>
        {props.children}
        <footer>
            <Link to={props.link}>
                <h2 className='flex-center'><span>Emplore</span> <AiOutlineDoubleRight /></h2>
            </Link>
        </footer>
    </div>
  )
}

export default Hero
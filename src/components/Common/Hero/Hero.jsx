import { AiOutlineDoubleRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { ThemeStyles } from '../../../unitilies/ThemeStyle'

const Hero = props => {
  return (
    <div className='hero-section'  style={ThemeStyles.text}>
        <h1>{props.title}</h1>
        {props.children}
        <footer>
            <Link to={props.link}>
                <h2 className='flex-center' style={ThemeStyles.text}><span>Emplore</span> <AiOutlineDoubleRight /></h2>
            </Link>
        </footer>
    </div>
  )
}

export default Hero
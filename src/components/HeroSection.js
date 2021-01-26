import Button from './Button'
import '../App'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>LET'S DO THIS</h1>
            <p>Wheels Up</p>
            <div className="hero-btns">
                <Button className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className="btns" 
                buttonStyle="btn--primary"
                buttonSize="btn--large">
                    WATCH TRAILER<i className="fa fa-play-circle-o"/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection

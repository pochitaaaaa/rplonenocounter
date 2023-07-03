import {Carousel} from 'react-bootstrap';
import jatuhkramik from './../assets/jatuhkramik.jpg'
import jogja  from './../assets/jogja_foto.jpg'
import selfi from './../assets/jogja_selfie.jpg'

const Hero = ()=> {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={jatuhkramik}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={selfi}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-1"
            src={jogja}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default Hero;
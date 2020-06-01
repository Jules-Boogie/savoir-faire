import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap'

function CarouselImage(props) {



    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {props.Image.map((image, id )=> {
                return (
            <Carousel.Item key={id}>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{props.name}</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
        //      <Carousel.Item>
        //      <img
        //              className="d-block w-100"
        //             src={props.image2}
        //              alt="Second slide"
        //          />

        //        <Carousel.Caption>
        //            <h3>Second slide label</h3>
        //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //          </Carousel.Caption>
        //      </Carousel.Item>
        //      <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //              src={props.image3}
        //              alt="Third slide"
        //          />

        //         <Carousel.Caption>
        //             <h3>Third slide label</h3>
        //              <p>
        //                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        //    </p>
        //          </Carousel.Caption>
        //     </Carousel.Item>
                )
           })} 
        </Carousel>
        

    
    );
}

export default CarouselImage;





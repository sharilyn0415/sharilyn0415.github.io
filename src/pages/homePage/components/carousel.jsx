import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Image0 from "../../../../assets/s0.png";
import Image1 from "../../../../assets/s1.png";
import Image2 from "../../../../assets/s2.png";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={Image0} text="First slide" />
        <Carousel.Caption>
          <h3>1st Feature Request</h3>
          <p>User will be able to create an experiment</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Image1} text="Second slide" />
        <Carousel.Caption>
          <h3>2nd Enhancement</h3>
          <p>Ensure data meets standards, and catch errors before publishing</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Image2} text="Third slide" width="100%" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;

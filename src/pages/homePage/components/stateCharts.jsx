import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Image0 from "../../../../assets/oven1.png";
import Image1 from "../../../../assets/oven2.png";
import Image2 from "../../../../assets/oven3.png";

function StateCharts() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={Image0} width="100%" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Image1} width="100%" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Image2} width="100%" />
      </Carousel.Item>
    </Carousel>
  );
}

export default StateCharts;

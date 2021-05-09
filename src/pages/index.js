import * as React from "react";
import Vimeo from "@u-wave/react-vimeo";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/carousel-styles.css";
import "../css/canvas-styles.css"
import styled from "styled-components";

// styles
const bodyStyles = {
  margin: 0,
};

const canvasStyles = {
};

const CarouselWrapper = styled.div`

`


const PageWrapper = styled.div `
position: relative;
`
const WithStyles = styled.div`
background-color: black;
`;

const CustomLeftArrow = styled.svg``;

const CustomRightArrow = styled.svg``;

// markup
const IndexPage = () => {
  return (
    <PageWrapper>
            <div style={canvasStyles}>
        <script src="https://threejs.org/build/three.js"></script>
        <script src="mars.js"></script>
      </div>

      <CarouselWrapper>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <WithStyles
          description="React Carousel with Server Side Rendering Support – Part 1"
          headline="w3js.com - web front-end studio"
        />
          {/* <Vimeo video="329299719" /> */}
        {/* </WithStyles> */}

        <WithStyles
          description="React Carousel with Server Side Rendering Support – Part 1"
          headline="w3js.com - web front-end studio"
        >
          <Vimeo video="329299719" />
        </WithStyles>
        <WithStyles
          description="React Carousel with Server Side Rendering Support – Part 1"
          headline="w3js.com - web front-end studio"
        >
          <Vimeo video="329299719" />
        </WithStyles>
        <WithStyles
          description="React Carousel with Server Side Rendering Support – Part 1"
          headline="w3js.com - web front-end studio"
        >
          <Vimeo video="329299719" />
        </WithStyles>
        <WithStyles
          description="React Carousel with Server Side Rendering Support – Part 1"
          headline="w3js.com - web front-end studio"
        >
          <Vimeo video="329299719" />
        </WithStyles>
      </Carousel>
      </CarouselWrapper>
    </PageWrapper>
  );
};

export default IndexPage;

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { Typography, Button, Space, Row, Col, Grid } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import FirstImg from "../../assets/Gallery/FirstImg.png";
import SecondImg from "../../assets/Gallery/SecondImg.png";
import ThirdImg from "../../assets/Gallery/ThirdImg.png";
import FourthImg from "../../assets/Gallery/FourthImg.png";
import LeftArrow from "/src/assets/OurServices/LeftArrow.svg";
import RightArrow from "/src/assets/OurServices/RightArrow.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const Gallery = () => {
  let screens = useBreakpoint();
  const images = [
    {
      url: FirstImg,
      alt: "Woman with yellow sweater",
    },
    {
      url: SecondImg,
      alt: "Woman with black dress",
    },
    {
      url: ThirdImg,
      alt: "Woman with white shirt",
    },
    {
      url: FourthImg,
      alt: "Woman with white turtleneck",
    },
    {
      url: SecondImg,
      alt: "Person with blonde hair",
    },
    {
      url: FirstImg,
      alt: "Woman with yellow sweater",
    },
    {
      url: ThirdImg,
      alt: "Woman with white shirt",
    },
  ];

  const swiperRef = useRef(null);

  return (
    <div
      class="container"
      style={{
        position: "relative",
        paddingTop: "0px",
        paddingBottomG: "0px",
        margin: "0 auto",

        paddingRight: "0px",
      }}
    >
      <Row
        style={{
          marginBottom: { xs: "24px", sm: "32px", lg: "80px" },
          alignItems: "center",
          paddingRight: screens.xxl ? "250px" : "32px",
        }}
      >
        <Col
          flex="auto"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: { xs: "16px", sm: "30px", xl: "250px" },
          }}
        >
          <Typography.Title
            level={2}
            style={{
              fontFamily: "cormorant",
              lineHeight: "40px",
              color: "#494040",
              fontWeight: "normal",
              textAlign: "left",
              borderLeft: "1px solid #84635C",
              paddingLeft: "16px",
              marginTop: "0px",
              marginBottom: "32px",
              fontSize: "32px",
            }}
          >
            GALERIA
          </Typography.Title>

          <Space
            style={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
            }}
          >
            <Text
              style={{
                display: screens.xs && !screens.md ? "none" : "block",
                fontSize: "14px",
                textDecoration: "underline",
              }}
            >
              Woman
            </Text>

            <Text
              style={{
                display: screens.xs && !screens.md ? "none" : "block",
                fontSize: "14px",
                color: "#8c8c8c",
              }}
            >
              Men
            </Text>

            <Space style={{ marginLeft: "16px", columnGap: "0px" }}>
              <Col
                onClick={() => swiperRef.current?.slidePrev()}
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid #ddc3ba",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={LeftArrow} alt="Left Arrow" />
              </Col>
              <Col
                onClick={() => swiperRef.current?.slideNext()}
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid #ddc3ba",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={RightArrow} alt="Right Arrow" />
              </Col>
            </Space>
          </Space>
        </Col>
      </Row>

      <Swiper
        modules={[Navigation, Mousewheel]}
        spaceBetween={16}
        slidesPerView="auto"
        mousewheel={true}
        grabCursor={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 0,
              }}
            >
              <img
                src={image.url}
                alt={image.alt}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  transition: "transform 0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;

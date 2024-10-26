import React from "react";
import { Typography, Button, Grid } from "antd";
import heroImageLarge from "/src/assets/HeroAssets/HeroImage.png";
import heroImageMedium from "/src/assets/HeroAssets/TabImg.png";
import heroImageSmall from "/src/assets/HeroAssets/MobileImg.png";
import MetroIcon from "../SvgIconsComp/MetroIcon";
import ParkingIcon from "../SvgIconsComp/ParkingIcon";
import ImagesGrid from "./ImagesGrid";
import HeroSlider from "./HeroSlider";
import LocationIcon from "../SvgIconsComp/LocationIcon";

const { Title } = Typography;
const { useBreakpoint } = Grid;

const SliderContent = [
  {
    id: 1,
    icon: LocationIcon,
    title: "Address:",
    detail1: "Rua Aquiles Machado 5",
    detail2: "1900-077 Lisboa",
  },
  {
    id: 2,
    icon: ParkingIcon,
    title: "Parking:",
    detail1: "Parqueamento ",
    detail2: "Junto ao salão",
  },
  {
    id: 3,
    icon: MetroIcon,
    title: "Metro:",
    detail1: "Estação de Metro ",
    detail2: "junto salão",
  },
];

const HeroSection = () => {
  const screens = useBreakpoint();

  // Dynamic background image handling
  const backgroundImage = screens.xl
    ? heroImageLarge
    : screens.lg
    ? heroImageMedium
    : heroImageSmall;

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: screens.xxl ? "start" : "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div
        style={{
          paddingTop: screens.xxl
            ? "193px"
            : screens.xl
            ? "100px"
            : screens.lg
            ? "100px"
            : "150px",
          paddingLeft: screens.xxl
            ? "250px"
            : screens.xl
            ? "150px"
            : screens.lg
            ? "30px"
            : screens.md
            ? "100px"
            : screens.sm
            ? "15px"
            : "15px",
          paddingRight: screens.lg
            ? "30px"
            : screens.md
            ? "100px"
            : screens.sm
            ? "15px"
            : "10px",
          width: "100%",
          maxWidth: "1440px", // Limit the width for large screens
        }}
      >
        {/* Title */}
        <Title
          level={1}
          style={{
            color: "white",
            marginBottom: "16px",
            fontStyle: "italic",
            fontSize: screens.xxl
              ? "120px"
              : screens.xl || screens.lg
              ? "112px"
              : screens.md
              ? "80px"
              : screens.sm
              ? "70px"
              : "52px",
            lineHeight: "110px", // Maintain consistent line height
            fontWeight: 300,
            fontFamily: "cormorant",
            textAlign: screens.md ? "start" : "center",
          }}
        >
          CABELO SEDOSO
        </Title>

        {/* Subtitle */}
        <Typography
          style={{
            color: "white",
            fontFamily: "cormorant",
            width: "100%",
            maxWidth: "634px", // Limit the width of the text for readability
            marginBottom: screens.xxl ? "64px" : "24px",
            textTransform: "uppercase",
            fontWeight: 400,
            letterSpacing: screens.lg && "-1%",
            textAlign: screens.md ? "start" : "center",
            fontSize: screens.xxl
              ? "47px"
              : screens.xl || screens.lg
              ? "47px"
              : screens.sm
              ? "36px"
              : "24px",
            lineHeight: screens.lg ? "56px" : "28px",
          }}
        >
          Não acontece por acaso Acontece por marcação
        </Typography>

        {/* Button */}
        <div
          style={{
            paddingLeft: "0px",

            width: "100%",
            display: "flex",
            justifyContent: screens.md ? "start" : "center",
          }}
        >
          <Button
            type="primary"
            style={{
              backgroundColor: "#A5775E",
              width: "100%",
              fontSize: "20px",
              padding: "24px 48px",
              lineHeight: "24px",
              fontWeight: 500,
              fontFamily: "cormorant",
              borderRadius: "0px",
              maxWidth: screens.md ? "336px" : "100%",
              letterSpacing: "5%",
            }}
          >
            FAZER MARCAÇÃO
          </Button>
        </div>

        {/* Optional Sliders */}
        <div
          style={{
            paddingTop: "48px",
            width: screens.xxl && "826px",
            display: screens.lg ? "none" : "block",
          }}
        >
          <HeroSlider SliderContent={SliderContent} />
        </div>
        <div
          style={{
            paddingTop: screens.xxl
              ? "200px"
              : screens.xl
              ? "30px"
              : screens.lg
              ? "50px"
              : "35px",
            display: screens.xxl ? "block" : "block",
            width: screens.lg ? "774px" : screens.xxl && "826px",
          }}
        >
          <ImagesGrid SliderContent={SliderContent} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

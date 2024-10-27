import React from "react";
import { Typography, Button, Row, Col, Grid } from "antd";
import BgTabDesk from "/src/assets/OurServices/BgTablet.png";
import BgDesktop from "/src/assets/OurServices/BgTabDesk.png";
import Est from "/src/assets/OurServices/Est.png";
import ColImg from "/src/assets/OurServices/Col.png";
import Cor from "/src/assets/OurServices/Cor.png";
import Cui from "/src/assets/OurServices/Cui.png";
import Tra from "/src/assets/OurServices/Tra.png";
import ForwardArrow from "/src/assets/OurServices/ForwardArrow.svg";
import LeftArrow from "/src/assets/OurServices/LeftArrow.svg";
import RightArrow from "/src/assets/OurServices/RightArrow.svg";
import BgMobile from "/src/assets/OurServices/BgMobile.svg";

const { useBreakpoint } = Grid;

const OurServices = () => {
  let screens = useBreakpoint();

  const clampStyle = {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: screens.lg ? 5 : screens.xl ? 7 : 5,
  };
  const services = [
    {
      image: Cui,
      title: "CUIDADOS COM CABELO NATURAL",
      description:
        "Celebre a beleza do seu cabelo natural com cuidados direcionados e personalizados no Paraíso das Princesas. Os nossos serviços de cuidados com cabelo natural destinam-se a indivíduos que procuram realçar e manter a textura única do seu cabelo.",
    },
    {
      image: Tra,
      title: "TRANÇAS",
      description:
        "Eleve o seu visual com tranças habilmente criadas no Paraíso das Princesas. Quer esteja à procura de um novo visual audacioso ou de um estilo protetor para manter o seu cabelo natural, os nossos serviços de tranças oferecem tanto estilo como praticidade.",
    },
    {
      image: Cor,
      title: "CORTE E MODELISMO",
      description:
        "Descubra o corte de cabelo perfeito para o seu estilo e personalidade com nossos estilistas especialistas. Do clássico ao contemporâneo, criamos looks sob medida que amplificam sua beleza natural.",
    },
    {
      image: ColImg,
      title: "COLORAÇÃO",
      description:
        "Transforme o seu cabelo com a nossa coloração especializada. Desde destaques subtis a tons audaciosos, os nossos coloristas dão vida à sua visão. Quer procure um look natural ou uma mudança dramática, confie em nós para resultados impecáveis.",
    },
    {
      image: Est,
      title: "ESTÉTICA E BEM-ESTAR",
      description:
        "Celebre a beleza do seu cabelo natural com cuidados direcionados e personalizados no Paraíso das Princesas. Os nossos serviços de cuidados com cabelo natural destinam-se a indivíduos que procuram realçar e manter a textura única do seu cabelo.",
    },
  ];

  const DiscountOffer = ({ isGrid = false }) => (
    <Row
      style={{
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#b08d76",
        color: "white",
        padding:
          isGrid && screens.xl
            ? "12px"
            : screens.lg
            ? "12px"
            : screens.xs
            ? "32px 24px"
            : "32px 64px",
        gap: screens.xxl ? "64px" : screens.lg ? "0px" : "72px",
        height: isGrid ? "100%" : "auto",
      }}
    >
      <Col>
        <Typography.Title
          level={2}
          style={{
            fontSize: screens.xxl
              ? "64px"
              : screens.lg
              ? "64px"
              : screens.md
              ? "64px"
              : screens.sm
              ? "64px"
              : "36px",
            fontWeight: "300",
            fontFamily: "Cormorant",
            textTransform: "uppercase",
            lineHeight: screens.sm ? "64px" : "32px",
            paddingBottom: "4px",
            marginTop: "0px",
            marginBottom: "0px",
            color: "white",
            textAlign: "start",
          }}
        >
          -15% DESCONTO
        </Typography.Title>
        <Typography
          style={{
            color: "#ffd8d0",
            fontSize: screens.xxl
              ? "32px"
              : screens.lg
              ? "32px"
              : screens.md
              ? "32px"
              : screens.sm
              ? "32px"
              : "20px",
            lineHeight: screens.sm ? "48px" : "32px",
            fontWeight: "300",
            textTransform: "uppercase",
            fontStyle: "italic",
            fontFamily: "Cormorant",
            textAlign: "start",
          }}
        >
          NA SUA PRIMEIRA VISITA
        </Typography>
      </Col>

      <Col
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "64px",
        }}
      >
        <Typography
          style={{
            color: "white",
            textTransform: "uppercase",
            fontSize: screens.xs ? "24px" : "2rem",
            fontWeight: "normal",
            fontFamily: "Cormorant Garamond",
          }}
        >
          FAZER MARCAÇÃO
        </Typography>
        <div
          style={{
            width: "40px",
            height: "40px",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={ForwardArrow} alt="Forward Arrow" />
        </div>
      </Col>
    </Row>
  );

  return (
    <div
      className="container"
      style={{
        backgroundColor: "white",
        color: "black",
      }}
    >
      {/* Title and Hero section remain unchanged */}
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
        OUR SERVICES
      </Typography.Title>

      <div style={{ position: "relative" }}>
        {/* Background Images section remains unchanged */}
        <img
          src={BgDesktop}
          alt="Background Desktop"
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "800px",
            objectFit: "cover",
            zIndex: 0,
            display: screens.xl ? "block" : "none",
          }}
        />
        <img
          src={BgTabDesk}
          alt="Background Tablet"
          style={{
            minHeight: "592px",
            width: "100%",
            objectFit: "cover",
            zIndex: 0,
            display: screens.md && !screens.xl ? "block" : "none",
          }}
        />
        <img
          src={BgMobile}
          alt="Background Mobile"
          style={{
            minHeight: "592px",
            width: "100%",
            objectFit: "cover",
            zIndex: 0,
            display:
              screens.xs || (screens.sm && !screens.md) ? "block" : "none",
          }}
        />

        {/* Overlay Content remains unchanged */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: screens.xl ? "50%" : "100%",
            height: screens.xl ? "100%" : "50%",
            zIndex: 10,
            background: "rgba(30, 30, 30, 0.4)",
            backdropFilter: "blur(5px)",
            color: "white",
            padding: screens.xl
              ? "251px 0px 10px 80px"
              : screens.lg
              ? "100px 48px"
              : screens.md
              ? "80px 32px"
              : screens.sm
              ? "32px 60px 0px"
              : "28px 25px",
            boxSizing: "border-box",
          }}
        >
          {/* Hero content remains unchanged */}
        </div>
      </div>

      {/* Updated Grid of services */}
      <Row
        gutter={[24, 24]}
        style={{
          display: screens.md ? "flex" : "none",
          flexWrap: "wrap",
          margin: screens.md ? "12px 0px" : "0px",
        }}
      >
        {services.map((service, index) => (
          <Col key={index} style={{ padding: 0 }} span={screens.xl ? 12 : 24}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src={service.image}
                alt={service.title}
                style={{
                  // borderRadius: "8px",
                  width: screens.xxl ? "340px" : screens.lg ? "250px" : "340px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
              <div
                style={{
                  gap: "40px",
                  padding: "32px",
                  backgroundColor: "#FAF3F2",
                  flex: 1,
                }}
              >
                <Typography
                  style={{
                    color: "#84635C",
                    fontFamily: "cormorant",
                    fontSize: screens.xxl
                      ? "24px"
                      : screens.lg
                      ? "16px"
                      : "24px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    paddingBottom: screens.xxl
                      ? "40px"
                      : screens.lg
                      ? "24px"
                      : "24px",
                    lineHeight: "24px",
                    textAlign: "left",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  style={{
                    fontWeight: "300",
                    fontSize: "16px",
                    lineHeight: "24px",
                    textAlign: screens.md ? "left" : "center",
                    ...clampStyle,
                  }}
                >
                  {service.description}
                </Typography>
              </div>
            </div>
          </Col>
        ))}

        {screens.lg && !screens.xl ? <DiscountOffer /> : null}

        {/* Discount offer integrated into grid on lg screens */}
        {screens.xl && (
          <Col span={12} style={{ padding: 0 }}>
            <div style={{ height: "100%" }}>
              <DiscountOffer isGrid={true} />
            </div>
          </Col>
        )}
      </Row>

      {/* Mobile pagination remains unchanged */}
      <Row
        style={{
          display: screens.xs || (screens.sm && !screens.md) ? "flex" : "none",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "16px 0",
          minWidth: "100%",
          height: "40px",
        }}
      >
        <Col
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
        <Typography
          style={{
            color: "#bba39b",
            fontSize: "1rem",
            fontWeight: "300",
          }}
        >
          1 / 6
        </Typography>
        <Col
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
      </Row>

      {/* Discount offer for non-lg screens */}
      {(!screens.lg && screens.xs) || (screens.sm && !screens.lg) ? (
        <DiscountOffer />
      ) : null}
    </div>
  );
};

export default OurServices;

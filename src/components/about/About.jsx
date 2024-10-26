import React from "react";
import { Row, Col, Typography, Grid } from "antd";
import AboutImg from "/src/assets/About/AboutImg.png";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const About = () => {
  const screens = useBreakpoint();

  return (
    <div style={{ position: "relative" }}>
      <Row style={{ width: "100%", display: "flex" }}>
        {/* Image Section */}
        <Col
          xs={0}
          md={12}
          style={{
            backgroundColor: "#faf5f2",
          }}
        >
          <img
            src={AboutImg}
            alt="About Us"
            style={{
              width: "100%",
              maxWidth: "771px",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Col>

        {/* Text Section */}
        <Col
          xs={24}
          md={12}
          style={{
            backgroundColor: "#FAF6F2",
            borderLeft: "1px solid #FAF6F2",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: "123px 0 122px",
            paddingLeft: screens.lg ? "150px" : "40px",
            paddingRight: screens.lg ? "150px" : "40px",
          }}
        >
          {/* Content Box */}
          <div
            style={{
              minWidth: "100%",
              maxWidth: screens.lg ? "700px" : "310px",
              borderLeft: screens.lg ? "1px solid #DDC3BB" : "0px",
              paddingLeft: screens.lg ? "34px" : "0px",
              paddingRight: screens.lg ? "34px" : "0px",
              textAlign: screens.md ? "left" : "center", 
            }}
          >
            {/* Title */}
            <Title
              level={2}
              style={{
                color: "#494040",
                fontSize: "32px",
                textTransform: "uppercase",
                lineHeight: "40px",
                margin: 0,
                fontFamily: "cormorant",
                paddingBottom: "32px",
                textAlign: screens.md ? "left" : "center", 
              }}
            >
              About us
            </Title>

            {/* Description */}
            <Text
              style={{
                fontFamily: "Mulish",
                width: "100%",
                color: "#494040",
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "24px",
                paddingTop: "32px",
                textAlign: screens.md ? "left" : "center",
                display: "block", 
              }}
            >
              Nutrindo a beleza de cada fio há mais de 18 anos, trazemos uma
              riqueza de experiência e paixão aos nossos clientes. No Paraíso
              das Princesas, criamos experiências personalizadas que elevam a
              sua confiança e o seu estilo. Desde a aplicação de extensões, à
              estética e criações vanguardistas, somos especializados em dar
              vida à sua visão.
            </Text>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;

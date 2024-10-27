import React from "react";
import { Typography, Button, Row, Col, Space, Grid } from "antd";
import styled from "styled-components";
import FirstImg from "../../assets/FollowUs/FirstImg.png";
import SecondImg from "../../assets/FollowUs/SecondImg.png";
import ThirdImg from "../../assets/FollowUs/ThirdImg.png";
import FourthImg from "../../assets/FollowUs/FourthImg.png";
import InstraIcon from "../../assets/FollowUs/InstraIcon.svg";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

// Styled Components

const ButtonHai = styled(Space)`
  display: flex;
`;

const HeaderTitle = styled(Title)`
  font-family: Cormorant, serif !important;
  color: #494040 !important;
  font-size: 32px !important;
  font-weight: normal !important;
  line-height: 40px !important;
  text-transform: uppercase;
  padding-left: 16px;
  border-left: 1px solid #faf6f2;
  margin: 0 !important;

  @media (min-width: 576px) {
    margin-left: 30px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;

  img {
    max-width: 100%;
    object-fit: contain;
    width: 200px;
    flex: 1;
  }
`;

const SocialButton = styled(Button)`
  width: 100%;
  min-height: 72px;
  padding: 24px 48px !important;
  font-family: Cormorant, serif !important;
  font-size: 20px !important;
  font-weight: 500 !important;
  text-transform: uppercase;
  border-radius: 0 !important;

  ${(props) =>
    props.variant === "instagram"
      ? `
    background-color: #a4775e !important;
    color: white !important;
    &:hover {
      background-color: #8b6550 !important;
    }
  `
      : `
    color: #83635c !important;
    border: 1px solid #83635c !important;
    &:hover {
      background-color: rgba(131, 99, 92, 0.04) !important;
      border: 1px solid #83635c !important;
    }
  `}

  @media (max-width: 576px) {
    width: 100%; /* Full width at xs breakpoint */
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 100%; /* Full width at sm breakpoint */
  }
`;

const SocialText = styled(Text)`
  color: #83635c !important;
  font-family: cormorant, serif !important;

  font-weight: 300;
  text-transform: uppercase;
  font-size: ${(props) =>
    props.size === "large"
      ? props.screens?.xs
        ? "48px"
        : "80px"
      : "32px"} !important;
  line-height: ${(props) =>
    props.size === "large"
      ? props.screens?.xs
        ? "48px"
        : "48px"
      : "32px"} !important;
  text-align: ${(props) => (props.size === "large" ? "left" : "center")};
`;

const FollowUs = () => {
  const screens = useBreakpoint();

  const renderSocialSection = (isMobile = false) => {
    const shouldShow = isMobile ? !screens.lg : screens.lg;

    if (!shouldShow) return null;

    return (
      <div
        style={{
          width: "100%",
          backgroundColor: "#faf3f2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Space
          direction="vertical"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: screens.xs ? "72px 0" : "102px 0",
            gap: screens.xs ? "45px" : "59px",
          }}
        >
          <div style={{ width: 24, height: 24 }}>
            <img
              src={InstraIcon}
              alt="Instagram Icon"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>

          <SocialText
            style={{ fontStyle: "italic" }}
            size="large"
            screens={screens}
          >
            Follow us
          </SocialText>

          <div
            className=""
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Text
              style={{
                width: screens.md && !screens.xl ? "454px" : "100%",
                maxWidth: screens.lg ? "744px" : "454px",
                color: "#83635c ",
                fontFamily: "cormorant, serif ",
                fontWeight: 300,
                textTransform: "uppercase",
                fontSize: screens.lg ? "32px" : screens.xl ? "80px" : "32px",
                lineHeight: screens?.xs ? "32px" : screens.sm ? "48px" : "32px",
                textAlign: screens.md ? "center" : "center",
              }}
            >
              ON INSTAGRAM and other social networks
            </Text>
          </div>

          <div
            style={{
              width: "100%",

              display: "flex",

              alignItems: "center",
            }}
          >
            <ButtonHai
              style={{
                width: "100%",
                flexDirection: screens.xs && !screens.md ? "column" : "row",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: screens.md ? "flex" : "block",
                }}
              >
                <SocialButton
                  variant="instagram"
                  block={isMobile && !screens.md}
                  style={{
                    marginBottom:
                      screens.xs || (screens.sm && !screens.md)
                        ? "12px"
                        : "0px",
                    marginRight: screens.md ? "12px" : "0px",
                  }}
                >
                  Instagram
                </SocialButton>
                <SocialButton
                  variant="outlined"
                  block={isMobile && !screens.md}
                >
                  Facebook
                </SocialButton>
              </div>
            </ButtonHai>
          </div>
        </Space>
      </div>
    );
  };

  return (
    <div class="container">
      <Row
        align="middle"
        justify="space-between"
        style={{
          // marginTop: "80px",
          marginBottom: "24px",
          gap: "40px",
        }}
      >
        <Col>
          <Title
            // level={4}
            style={{
              textTransform: "uppercase",
              fontFamily: "Cormorant, serif",
              color: "#494040",
              fontSize: "32px",
              lineHeight: "40px",
              fontWeight: "normal",
              borderLeft: "1px solid #DDC3BB",
              paddingLeft: 16,
              margin:0
            }}
          >
            Follow Us On Instagram
          </Title>
        </Col>
        <Col>
          <Space align="center" size={16}>
            <Text
              style={{
                color: "#494040",
                fontSize: "16px",
                fontFamily: "Mulish",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              Follow Us
            </Text>
          </Space>
        </Col>
      </Row>

      <Row justify="center" wrap={!screens.lg}>
        {/* Desktop and Tablet Images */}
        <Col xs={0} sm={24} lg={12}>
          <ImageWrapper>
            <img src={FirstImg} alt="First Image" />
            <img src={SecondImg} alt="Second Image" />
          </ImageWrapper>
        </Col>

        {/* Mobile First Image */}
        <Col xs={24} sm={0}>
          <img
            src={FirstImg}
            alt="First Image"
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Col>

        {/* Mobile/Tablet Social Section */}
        {renderSocialSection(true)}

        {/* Mobile Second Image */}
        <Col xs={24} sm={0}>
          <img
            src={SecondImg}
            alt="Second Image"
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Col>

        {/* Desktop and Tablet Images */}
        <Col xs={0} sm={24} lg={12}>
          <ImageWrapper>
            <img src={ThirdImg} alt="Third Image" />
            <img src={FourthImg} alt="Fourth Image" />
          </ImageWrapper>
        </Col>
      </Row>

      {/* Desktop Social Section */}
      {renderSocialSection()}
    </div>
  );
};

export default FollowUs;

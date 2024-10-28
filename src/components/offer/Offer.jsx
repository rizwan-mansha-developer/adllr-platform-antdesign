import React from "react";
import { Typography, Button } from "antd";
import { Grid } from "antd";
import styled from "styled-components";
import MobileBg from "/src/assets/Offers/MobileBg.svg";
import TabletBg from "/src/assets/Offers/TabletBg.svg";
import DesktopBg from "/src/assets/Offers/DesktopBg.svg";

const { useBreakpoint } = Grid;
const { Title } = Typography;

// Styled Components
const Container = styled.div`
  position: relative;
  width: 100%;
  /* margin-top: 40px; */
`;

const BackgroundImage = styled.img`
  position: relative;
  width: 100%;
  max-width: 1920px;
  object-fit: cover;
  z-index: 0;
`;

const BlurOverlay = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1920px;
  right: 0;
  bottom: 0;
  background-color: rgba(30, 30, 30, 0.4);
  backdrop-filter: blur(5px);
  color: white;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledButton = styled(Button)`
  &.ant-btn {
    width: auto;
    border-radius: 0;
    background: #a4775e;
    height: 72px;
    padding: 24px 48px;
    text-transform: uppercase;
    font-size: 20px;
    font-family: cormorant;

    &:hover {
      background: #a4775e !important;
    }
  }
`;

const Offers = () => {
  const screens = useBreakpoint();

  const getBackgroundDisplay = () => {
    if (screens.lg) return DesktopBg;
    if (screens.sm && !screens.lg) return TabletBg;
    return MobileBg;
  };

  const getBackgroundStyles = () => {
    if (screens.lg) {
      return { minHeight: "592px", maxHeight: "920px" };
    }
    if (screens.sm) {
      return { minHeight: "592px" };
    }
    return { minHeight: "735px" };
  };

  const getBlurOverlayStyles = () => {
    const baseStyles = {
      padding: screens.xs ? "0px" : undefined,
      display: screens.sm ? "flex" : "block",
      //   justifyContent: screens.sm ? "center" : undefined,
      //   alignItems: screens.sm ? "center" : undefined,
    };

    if (screens.lg) {
      return {
        ...baseStyles,
        left: "40%",
        width: "60%",
        height: "100%",
      };
    }

    return baseStyles;
  };

  const getContentStyles = () => ({
    width: screens.lg ? "100%" : "auto",
    maxWidth: screens.xl
      ? "688px"
      : screens.lg
      ? "500px"
      : screens.md
      ? "455px"
      : screens.sm
      ? "360px"
      : "100%",
    paddingTop: screens.xxl
      ? "198px"
      : screens.xl
      ? "108px"
      : screens.lg
      ? "170px"
      : screens.md
      ? "104px"
      : screens.sm
      ? "47px"
      : " 47px",
    marginBottom: screens.lg ? "0px" : screens.md ? "85px" : "66px",
    paddingLeft: screens.xxl
      ? "180px"
      : screens.xl
      ? "80px"
      : screens.lg
      ? "70px"
      : screens.md
      ? "70px"
      : "0",
    justifyContent: screens.lg ? "start" : "center",
    alignItems: screens.lg ? "start" : "center",
    textAlign: screens.lg ? "start" : "center",
  });

  return (
    <Container>
      <BackgroundImage
        src={getBackgroundDisplay()}
        alt="Background"
        style={getBackgroundStyles()}
      />

      <BlurOverlay style={getBlurOverlayStyles()}>
        <ContentWrapper style={getContentStyles()}>
          <Title
            style={{
              width: "100%",
              maxWidth: screens.lg ? "688px" : "auto",
              fontFamily: "cormorant",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: screens.xxl
                ? "96px"
                : screens.xl
                ? "80px"
                : screens.lg
                ? "64px"
                : screens.md
                ? "56px"
                : screens.sm
                ? "50px"
                : "49px",
              textTransform: "uppercase",
              letterSpacing: "-1%",
              lineHeight: screens.xl ? "90px" : screens.md ? "64px" : "50px",
              //   marginBottom: screens.md ? "8px" : "0",
              margin: "0px",
              color: "white",
            }}
          >
            Oferecemos 15% de desconto
          </Title>

          <Title
            level={2}
            style={{
              fontFamily: "Cormorant, serif",
              fontWeight: 400,
              fontSize: screens.xxl
                ? "48px"
                : screens.xl
                ? "42px"
                : screens.lg
                ? "32px"
                : screens.md
                ? "32px"
                : "24px",
              letterSpacing: "-0.24px",
              lineHeight: screens.md ? "64px" : "28px",
              textTransform: "uppercase",
              marginBottom: "80px",
              marginTop: "8px",
              color: "white",
            }}
          >
            na sua primeira visita
          </Title>

          {screens.sm ? (
            <StyledButton type="primary">Fazer Marcação</StyledButton>
          ) : (
            <div style={{ width: "100%", }}>
              <StyledButton type="primary" block>
                Fazer Marcação
              </StyledButton>
            </div>
          )}
        </ContentWrapper>
      </BlurOverlay>
    </Container>
  );
};

export default Offers;

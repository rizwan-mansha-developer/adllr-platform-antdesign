import React, { useState } from "react";
import {
  Grid,
  Layout,
  Row,
  Col,
  Typography,
  Button,
  Space,
  Collapse,
} from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";

import Logo from "/src/assets/Footer/Logo.svg";
import TextLogo from "/src/assets/Footer/TextLogo.svg";
import FbIcon from "/src/assets/Footer/FbIcon.svg";
import InstraIcon from "/src/assets/Footer/InstraIcon.svg";
import WhatsappIcon from "/src/assets/Footer/WhatsappIcon.svg";

// Components
const { Footer: AntFooter } = Layout;
const { Title, Text, Link } = Typography;
const { useBreakpoint } = Grid;

// Styled components with proper responsive handling
const StyledFooter = styled(AntFooter)`
  overflow: hidden;
  background-color: #faf7f5;
  color: #494040;
  font-size: 14px;
  font-weight: 300;
  font-family: mulish;
  letter-spacing: normal;
  position: relative;

  padding: ${({ $screens }) => {
    if ($screens.xxl) return "91px 250px";
    if ($screens.xl) return "91px 80px";
    if ($screens.lg) return "42px 100px";
    if ($screens.md) return "42px 50px";
    if ($screens.sm) return "50px 32px";
    if ($screens.xs) return "50px 16px";
    return "91px 250px";
  }};
`;

const LogoContainer = styled.div`
  display: flex;

  max-width: 100%;
  gap: 20px;
  justify-content: ${({ $screens }) =>
    $screens.xl ? "auto" : "space-between"};

  .logo-icon {
    width: ${({ $screens }) => ($screens.xl ? "78px" : "79px")};
    height: ${({ $screens }) => ($screens.xl ? "36px" : "auto")};
    margin-right: ${({ $screens }) => ($screens.xl ? "2px" : "12px")};
    object-fit: contain;
  }

  .text-logo {
    width: ${({ $screens }) =>
      $screens.xl ? "220px" : $screens.sm ? "123px" : "35%"};
    height: ${({ $screens }) => ($screens.xl ? "15px" : "auto")};
    object-fit: contain;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  padding-top: 16px;

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;

const StyledTitle = styled(Title)`
  &.ant-typography {
    width: 331px;
    color: #494040;
    font-size: 16px;
    font-weight: 700;
    font-family: Mulish;
    line-height: normal;
    margin-bottom: 8px;
  }
`;

const StyledLink = styled(Link)`
  &.ant-typography {
    color: #494040;
    &:hover {
      color: #666;
    }
  }
`;

const MobileMenuContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #faf7f5;
  padding: 16px 24px;
  z-index: 10;
  border-top: 1px solid #494040;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const screens = useBreakpoint();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const links = ["About Us", "Our Services", "Gallery", "Reviews", "Follow Us"];

  const socialLinks = [
    { icon: FbIcon, label: "Facebook" },
    { icon: InstraIcon, label: "Instagram" },
    { icon: WhatsappIcon, label: "WhatsApp" },
  ];

  const renderLinks = () => (
    <Space direction="vertical" size={8} style={{ width: "100%" }}>
      {links.map((link) => (
        <StyledLink key={link}>{link}</StyledLink>
      ))}
    </Space>
  );

  const renderHours = () => (
    <Space direction="vertical" size={8} style={{ width: "100%" }}>
      {days.map((day) => (
        <Text key={day}>
          {day}: {day === "Sunday" ? "CLOSED" : "10:00 — 19:30"}
        </Text>
      ))}
    </Space>
  );

  return (
    <StyledFooter $screens={screens}>
      { !screens.lg && (
        <Col>
          <LogoContainer $screens={screens}>
            <div style={{ display: "flex" }}>
              <img className="logo-icon" src={Logo} alt="Logo Icon" />
              <img className="text-logo" src={TextLogo} alt="Text Logo" />
            </div>

            {!screens.lg && (
              <Button
                type="text"
                icon={isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                onClick={toggleMenu}
                style={{ color: "#494040" }}
              />
            )}
          </LogoContainer>
        </Col>
      )}
      <Row
        style={{ flexFlow: screens.xl && "row nowrap" }}
        gutter={[
          { xs: 20, md: 40 },
          { xs: 20, md: 40 },
        ]}
      >
        {/* Brand and Message */}
        <Col>
          <LogoContainer $screens={screens}>
            {screens.lg && (
              <div style={{ display: "flex", justifyContent:"center", alignItems:"center" }}>
                <img className="logo-icon" src={Logo} alt="Logo Icon" />
                <img className="text-logo" src={TextLogo} alt="Text Logo" />
              </div>
            )}

            {/* {!screens.lg && (
              <Button
                type="text"
                icon={isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                onClick={toggleMenu}
                style={{ color: "#494040" }}
              />
            )} */}
          </LogoContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: screens.md ? "start" : "center",
              justifyContent: "center",
            }}
          >
            <Title
              level={5}
              style={{
                paddingTop: 28,
                paddingBottom: 12,
                fontSize: 16,
                fontWeight: 700,
                fontFamily: "mulish",
                marginBottom: 0,
              }}
            >
              Caros visitantes!
            </Title>
            <Text
              style={{
                width: "100%",
                maxWidth: screens.xxl ? "340px" : "auto",
              }}
            >
              Entre no nosso salão e deixe-nos transformar os seus sonhos de
              beleza em realidade
            </Text>
            <SocialIcons>
              {socialLinks.map((social) => (
                <StyledLink
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                >
                  <img src={social.icon} alt={social.label} />
                </StyledLink>
              ))}
            </SocialIcons>
          </div>
        </Col>

        {/* Links Section - Hidden on mobile */}
        {screens.lg && (
          <Col>
            <StyledTitle level={5}>Links</StyledTitle>
            {renderLinks()}
          </Col>
        )}

        {/* Hours Section - Hidden on mobile */}
        {screens.lg && (
          <Col md={6}>
            <StyledTitle level={5}>Horário</StyledTitle>
            {renderHours()}
          </Col>
        )}

        {/* Contact Section */}
        <Col xs={24} sm={24} md={6}>
          <Row justify="space-between" align="middle">
            <StyledTitle level={5}>Contact</StyledTitle>
          </Row>
          <Space direction="vertical" size={8} style={{ width: "100%" }}>
            <Text>Address: Rua Aquiles Machado 5, 1900-077 Lisboa</Text>
            <Text>Phone: +123 456 7890</Text>
            <Text>WhatsApp: +123 456 7890</Text>
            <Text>Email: hello@sitename.com</Text>
          </Space>
        </Col>
      </Row>

      {/* Mobile Menu */}
      {!screens.md && (
        <Collapse
          activeKey={isMenuOpen ? ["1"] : []}
          ghost
          expandIconPosition="end"
        >
          <Collapse.Panel key="1" showArrow={false} header={null}>
            <MobileMenuContent>
              <Row gutter={[32, 24]}>
                <Col xs={24} sm={12}>
                  <StyledTitle level={5}>Links</StyledTitle>
                  {renderLinks()}
                </Col>
                <Col xs={24} sm={12}>
                  <StyledTitle level={5}>Horário</StyledTitle>
                  {renderHours()}
                </Col>
              </Row>
            </MobileMenuContent>
          </Collapse.Panel>
        </Collapse>
      )}

      {/* Footer Bottom */}
      <Row
        justify="space-between"
        align="middle"
        style={{ marginTop: screens.xs ? 40 : 48 }}
      >
        <Col>
          <Text>© PARAÍSO DAS PRINCESAS 2024</Text>
        </Col>
        <Col>
          <Space split={<span style={{ margin: "0 8px" }}></span>}>
            <StyledLink>Privacy Policy</StyledLink>
            <StyledLink>Terms of Service</StyledLink>
          </Space>
        </Col>
      </Row>
    </StyledFooter>
  );
};

export default Footer;

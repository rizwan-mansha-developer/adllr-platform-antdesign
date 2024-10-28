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

const { Footer: AntFooter } = Layout;
const { Title, Text, Link } = Typography;
const { useBreakpoint } = Grid;

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
    if ($screens.xs) return "16px 16px";
    return "91px 250px";
  }};

  .ant-row {
    flex-flow:${({ $screens }) => {
      if ($screens.lg) return "row nowrap !important";
      return "row wrap";
    }}

  .ant-col {
    flex: ${({ $screens }) => {
      if ($screens.lg) return "0 0 auto !important";
      return "auto";
    }};
    width: ${({ $screens }) => {
      if ($screens.lg) return "300px";
      if ($screens.xl) return "300px";
      if ($screens.xxl) return "auto !important";
      return "auto";
    }};
    max-width: none !important;
  }}
`;

const LogoContainer = styled.div`
  display: flex;

  gap: 20px;
  justify-content: ${({ $screens }) =>
    $screens.xl ? "auto" : "space-between"};
  align-items: center;
  width: 100%;

  .logo-icon {
    width: ${({ $screens }) => ($screens.xl ? "78px" : "79px")};
    height: ${({ $screens }) => ($screens.xl ? "36px" : "auto")};
    margin-right: ${({ $screens }) => ($screens.xl ? "2px" : "12px")};
    object-fit: contain;
  }

  .text-logo {
    width: ${({ $screens }) =>
      $screens.xl
        ? "220px"
        : $screens.xs
        ? "100px"
        : $screens.sm
        ? "123px"
        : "35%"};
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
  background-color: #faf7f5;
  padding: 16px 24px;
  border-top: 1px solid #e8e8e8;
`;

const ToggleButton = styled(Button)`
  &.ant-btn {
    color: #494040;
    border: none;
    padding: 4px 8px;
    height: auto;

    &:hover,
    &:focus {
      color: #666;
      background: none;
    }
  }
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
      {!screens.lg && (
        <LogoContainer $screens={screens}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img className="logo-icon" src={Logo} alt="Logo Icon" />
            <img className="text-logo" src={TextLogo} alt="Text Logo" />
          </div>
          <ToggleButton
            type="text"
            icon={isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            onClick={toggleMenu}
          />
        </LogoContainer>
      )}

      <Row
        gutter={[
          { xs: 20, md: 40 },
          { xs: 20, md: 40 },
        ]}
      >
        <Col xs={24} md={8} lg={8}>
          {screens.lg && (
            <LogoContainer $screens={screens}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img className="logo-icon" src={Logo} alt="Logo Icon" />
                <img className="text-logo" src={TextLogo} alt="Text Logo" />
              </div>
            </LogoContainer>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: screens.md ? "start" : "center",
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
                textAlign: screens.md ? "start" : "center",
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
                  style={{
                    color: "#bba39b",
                    fontSize: "12px",
                    lineHeight: "15px",
                    fontFamily: "mulish",
                  }}
                >
                  <img src={social.icon} alt={social.label} />
                </StyledLink>
              ))}
            </SocialIcons>
          </div>
        </Col>

        {screens.lg && (
          <>
            <Col lg={8}>
              <StyledTitle level={5}>Links</StyledTitle>
              {renderLinks()}
            </Col>
            <Col lg={8}>
              <StyledTitle level={5}>Horário</StyledTitle>
              {renderHours()}
            </Col>
          </>
        )}

        <Col xs={24} md={8}>
          <StyledTitle
            level={5}
            style={{
              width: "100%",
              textAlign: !screens.md ? "center" : "start",
            }}
          >
            Contact
          </StyledTitle>
          <Space
            direction="vertical"
            size={8}
            style={{
              width: "100%",
              textAlign: !screens.md ? "center" : "start",
            }}
          >
            <Text>Address: Rua Aquiles Machado 5, 1900-077 Lisboa</Text>
            <Text>Phone: +123 456 7890</Text>
            <Text>WhatsApp: +123 456 7890</Text>
            <Text>Email: hello@sitename.com</Text>
          </Space>
        </Col>
      </Row>

      {!screens.lg && (
        <Collapse
          activeKey={isMenuOpen ? ["1"] : []}
          ghost
          style={{ marginTop: 20 }}
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

      {/* Render as Columns on small screens */}
      {screens.xs ||
        (screens.sm && !screens.md && (
          <Col
            justify="space-between"
            align="middle"
            style={{
              marginTop: 40,
              gap: "16px",
            }}
          >
            <Col order={2}>
              <Space split={<span style={{ margin: "0 8px" }}></span>}>
                <StyledLink style={{ color: "#BBA39B" }}>
                  Privacy Policy
                </StyledLink>
                <StyledLink style={{ color: "#BBA39B" }}>
                  Terms of Service
                </StyledLink>
              </Space>
            </Col>
            <Col order={1} style={{ marginTop: "19px" }}>
              <Text style={{ color: "#BBA39B" }}>
                © PARAÍSO DAS PRINCESAS 2024
              </Text>
            </Col>
          </Col>
        ))}

      {/* Render as Row on medium and larger screens */}
      {screens.md && (
        <Row
          justify="space-between"
          align="middle"
          style={{
            marginTop: 48,
            gap: 0,
          }}
        >
          <Col order={1}>
            <Space split={<span style={{ margin: "0 8px" }}></span>}>
              <StyledLink style={{ color: "#BBA39B" }}>
                Privacy Policy
              </StyledLink>
              <StyledLink style={{ color: "#BBA39B" }}>
                Terms of Service
              </StyledLink>
            </Space>
          </Col>
          <Col order={2}>
            <Text style={{ color: "#BBA39B" }}>
              © PARAÍSO DAS PRINCESAS 2024
            </Text>
          </Col>
        </Row>
      )}
    </StyledFooter>
  );
};

export default Footer;

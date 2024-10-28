import React, { useState, useEffect } from "react";
import { Layout, Menu, Button, Drawer, Typography, Row, Col, Grid } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import FbIcon from "../SvgIconsComp/navbarIcons/FbIcon";
import InstraIcon from "../SvgIconsComp/navbarIcons/InstraIcon";
import WhatsappIcon from "../SvgIconsComp/navbarIcons/WhatsappIcon";
import LogoIcon from "../SvgIconsComp/navbarIcons/LogoIcon";
import LogoName from "../SvgIconsComp/navbarIcons/LogoName";
import MobileLogo from "../SvgIconsComp/navbarIcons/MobileLogo";
import styled from "styled-components";

const { useBreakpoint } = Grid;
const { Header } = Layout;

const StyledHeader = styled(Header)`
  width: 100%;
  background-color: ${(props) => props.$appBarColor};
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.$appBarColor !== "transparent"
      ? "0 2px 8px rgba(0, 0, 0, 0.15)"
      : "none"};
  position: fixed;
  left: "0";
  right: "0";
  z-index: 1000;
  padding: ${(props) =>
    props.$screens.xxl
      ? "0 250px"
      : props.$screens.xl
      ? "0 150px"
      : props.$screens.md
      ? "0 30px"
      : "0 15px"};
  height: auto;
  line-height: normal;
`;

const NavWrapper = styled(Row)`
  padding-top: ${(props) =>
    props.$appBarColor !== "transparent"
      ? "15px"
      : props.$screens.xxl
      ? "55px"
      : props.$screens.xl
      ? "35px"
      : props.$screens.lg
      ? "25px"
      : "15px"};
  padding-bottom: ${(props) =>
    props.$appBarColor !== "transparent" ? "15px" : "0"};
  transition: all 0.3s ease;
`;

const StyledMenu = styled(Menu)`
  &.ant-menu {
    background: transparent;
    border-bottom: none;
    line-height: normal;
    width: 100%;

    .ant-menu-item {
      font-family: mulish;
      font-weight: 300;
      text-transform: capitalize;
      color: white !important;
      font-size: 16px;
      padding: 0;
      padding-right: ${(props) => (props.$screens.xxl ? "48px" : "36px")};
      line-height: 24px;
      height: 24px;
      margin: 0;

      &::after {
        display: none;
      }

      &:hover {
        color: rgba(255, 255, 255, 0.8) !important;
      }
    }
  }
`;

const LogoWrapper = styled(Row)`
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  .logo-icon {
    max-width: ${(props) =>
      props.$appBarColor !== "transparent" ? "65px" : "85px"};
    margin-right: 16px;
    transition: all 0.3s ease;
  }

  .logo-name {
    max-width: ${(props) =>
      props.$appBarColor !== "transparent" ? "130px" : "150px"};
    transition: all 0.3s ease;
  }
`;

const navItems = ["Home", "Quem Somos", "Serviços", "Galeria", "Testemunhos"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [appBarColor, setAppBarColor] = useState("transparent");
  const screens = useBreakpoint();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const viewHeight = window.innerHeight;

    if (scrollTop > viewHeight) {
      setAppBarColor("#a4775e");
    } else {
      setAppBarColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <StyledHeader $appBarColor={appBarColor} $screens={screens}>
        <NavWrapper
          $appBarColor={appBarColor}
          $screens={screens}
          justify="space-between"
          align="middle"
        >
          <LogoWrapper $appBarColor={appBarColor}>
            <LogoIcon className="logo-icon" />
            <LogoName className="logo-name" />
          </LogoWrapper>

          <Col lg={12} style={{ display: screens.lg ? "block" : "none" }}>
            <StyledMenu mode="horizontal" $screens={screens} selectedKeys={[]}>
              {navItems.map((item) => (
                <Menu.Item key={item}>{item}</Menu.Item>
              ))}
            </StyledMenu>
          </Col>

          <Col style={{ display: screens.lg ? "none" : "block" }}>
            <Button
              icon={<MenuOutlined />}
              onClick={handleDrawerToggle}
              style={{
                color: "#fff",
                fontSize: "20px",
                backgroundColor: "transparent",
                border: 0,
              }}
            />
          </Col>
        </NavWrapper>
      </StyledHeader>

      <Drawer
        placement="right"
        closable={true}
        onClose={handleDrawerToggle}
        open={mobileOpen}
        width="80%"
        closeIcon={<CloseOutlined />}
        styles={{
          body: {
            padding: 0,
          },
        }}
      >
        <Row justify="space-between" align="middle" style={{ padding: "16px" }}>
          <Col>
            <MobileLogo style={{ width: "100px" }} />
          </Col>
          <Col>
            <CloseOutlined onClick={handleDrawerToggle} />
          </Col>
        </Row>
        <Menu
          mode="vertical"
          style={{
            paddingTop: "55px",
            border: "none",
          }}
        >
          {navItems.map((item) => (
            <Menu.Item
              key={item}
              style={{
                fontFamily: "mulish",
                textTransform: "capitalize",
                height: "48px",
                lineHeight: "48px",
              }}
            >
              {item}
            </Menu.Item>
          ))}
        </Menu>
        <div style={{ padding: "16px" }}>
          <Typography.Text
            strong
            style={{ display: "block", marginBottom: "16px" }}
          >
            Horário
          </Typography.Text>
          <Typography.Text style={{ display: "block", marginBottom: "8px" }}>
            Mon - Sat: 10:00 — 19:30
          </Typography.Text>
          <Typography.Text style={{ display: "block" }}>
            Sun: CLOSED
          </Typography.Text>
          <Row style={{ paddingTop: "48px", gap: "16px" }}>
            <FbIcon />
            <InstraIcon />
            <WhatsappIcon />
          </Row>
        </div>
      </Drawer>
    </Layout>
  );
};

export default Navbar;

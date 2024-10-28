import React, { useState, useEffect } from "react";
import { Layout, Menu, Button, Drawer, Typography, Row, Col, Grid } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";
import FbIcon from "../SvgIconsComp/navbarIcons/FbIcon";
import InstraIcon from "../SvgIconsComp/navbarIcons/InstraIcon";
import WhatsappIcon from "../SvgIconsComp/navbarIcons/WhatsappIcon";
import LogoIcon from "../SvgIconsComp/navbarIcons/LogoIcon";
import LogoName from "../SvgIconsComp/navbarIcons/LogoName";
import MobileLogo from "../SvgIconsComp/navbarIcons/MobileLogo";

const { useBreakpoint } = Grid;
const { Header } = Layout;

// Styled Components
const StyledLayout = styled(Layout)`
  .ant-drawer-content-wrapper {
    width: 100% !important;
  }
`;

const StyledHeader = styled(Header)`
  width: 100%;
  background-color: ${(props) => props.$appBarColor};
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.$appBarColor !== "transparent"
      ? "0 2px 8px rgba(0, 0, 0, 0.15)"
      : "none"};
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${(props) => {
    if (props.$screens.xxl) return "0 250px";
    if (props.$screens.xl) return "0 150px";
    if (props.$screens.md) return "0 30px";
    return "0 15px";
  }};
  height: auto;
  line-height: normal;
`;

const NavWrapper = styled(Row)`
  padding-top: ${(props) => {
    if (props.$appBarColor !== "transparent") return "15px";
    if (props.$screens.xxl) return "55px";
    if (props.$screens.xl) return "35px";
    if (props.$screens.lg) return "25px";
    return "15px";
  }};

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
  }

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

const MenuButton = styled(Button)`
  color: #fff;
  font-size: 20px;
  background-color: transparent;
  border: 0;
  padding: 0;

  &:hover {
    background-color: transparent !important;
    color: rgba(255, 255, 255, 0.8) !important;
  }
`;

const DrawerContent = styled.div`
  padding: 16px;
`;

const DrawerMenu = styled(Menu)`
  padding-top: 55px;
  border: none;

  .ant-menu-item {
    font-family: mulish;
    text-transform: capitalize;
    height: 48px;
    line-height: 48px;
  }
`;

const SocialIcons = styled(Row)`
  padding-top: 48px;
  gap: 16px;
`;

const DrawerHeader = styled(Row)`
  padding: 16px;
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
    setAppBarColor(scrollTop > viewHeight ? "#a4775e" : "transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledLayout>
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
            <MenuButton icon={<MenuOutlined />} onClick={handleDrawerToggle} />
          </Col>
        </NavWrapper>
      </StyledHeader>

      <Drawer
        placement="right"
        closable={true}
        onClose={handleDrawerToggle}
        open={mobileOpen}
        closeIcon={<CloseOutlined />}
        styles={{
          body: {
            padding: 0,
          },
        }}
      >
        <DrawerHeader justify="space-between" align="middle">
          <Col>
            <MobileLogo style={{ width: "246px" }} />
          </Col>
          <Col>
            <CloseOutlined onClick={handleDrawerToggle} />
          </Col>
        </DrawerHeader>

        <DrawerMenu mode="vertical">
          {navItems.map((item) => (
            <Menu.Item key={item}>{item}</Menu.Item>
          ))}
        </DrawerMenu>

        <DrawerContent>
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
          <SocialIcons>
            <FbIcon />
            <InstraIcon />
            <WhatsappIcon />
          </SocialIcons>
        </DrawerContent>
      </Drawer>
    </StyledLayout>
  );
};

export default Navbar;

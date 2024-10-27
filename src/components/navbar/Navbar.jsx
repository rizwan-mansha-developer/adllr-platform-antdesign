import React, { useState, useEffect } from "react";
import { Layout, Menu, Button, Drawer, Typography, Row, Col, Grid } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import FbIcon from "../SvgIconsComp/navbarIcons/FbIcon";
import InstraIcon from "../SvgIconsComp/navbarIcons/InstraIcon";
import WhatsappIcon from "../SvgIconsComp/navbarIcons/WhatsappIcon";
import LogoIcon from "../SvgIconsComp/navbarIcons/LogoIcon";
import LogoName from "../SvgIconsComp/navbarIcons/LogoName";
import MobileLogo from "../SvgIconsComp/navbarIcons/MobileLogo";

const { useBreakpoint } = Grid;
const { Header } = Layout;

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
      <Header
        style={{
          backgroundColor: appBarColor,
          transition: "background-color 0.3s ease",
          boxShadow: "none",

          position: "fixed",
          zIndex: 1,
          paddingLeft: screens.xxl
            ? "250px"
            : screens.xl
            ? "150px"
            : screens.md
            ? "30px"
            : "15px",
          paddingRight: 0,
        }}
      >
        <Row
          style={{
            paddingTop: screens.xxl
              ? "55px"
              : screens.xl
              ? "35px"
              : screens.lg
              ? "25px"
              : "0px",
          }}
          justify="space-between"
          align="middle"
        >
          <Row style={{ display: "flex", alignItems: "center" }}>
            <LogoIcon style={{ maxWidth: "85px", marginRight: "16px" }} />
            <LogoName style={{ maxWidth: "150px" }} />
          </Row>

          <Col lg={12} style={{ display: screens.lg ? "block" : "none" }}>
            <Menu
              mode="horizontal"
              theme="transparent"
              style={{ width: "100%", lineHeight: "none" }}
              // align="middle"
            >
              {navItems.map((item) => (
                <Menu.Item
                  key={item}
                  style={{
                    fontFamily: "mulish",
                    fontWeight: 300,
                    textTransform: "capitalize",
                    color: "white",
                    fontSize: "16px",
                    padding: 0,
                    paddingRight: screen.xxl ? "48px" : "36px",
                    lineHeight: "24px",
                    justifyItems: "middle",
                    height: "24px",
                  }}
                >
                  {item}
                </Menu.Item>
              ))}
            </Menu>
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
        </Row>
      </Header>

      <Drawer
        placement="right"
        closable={true}
        onClose={handleDrawerToggle}
        visible={mobileOpen}
        width="80%"
        closeIcon={<CloseOutlined />}
      >
        <Row justify="space-between" align="middle" style={{ padding: "16px" }}>
          <Col>
            <MobileLogo style={{ width: "100px" }} />
          </Col>
          <Col>
            <CloseOutlined onClick={handleDrawerToggle} />
          </Col>
        </Row>
        <Menu mode="vertical" theme="light" style={{ paddingTop: "55px" }}>
          {navItems.map((item) => (
            <Menu.Item
              key={item}
              style={{ fontFamily: "mulish", textTransform: "capitalize" }}
            >
              {item}
            </Menu.Item>
          ))}
        </Menu>
        <Typography.Text style={{ padding: "16px", display: "block" }}>
          Horário
        </Typography.Text>
        <Typography.Text style={{ paddingLeft: "16px", display: "block" }}>
          Mon - Sat: 10:00 — 19:30
        </Typography.Text>
        <Typography.Text style={{ paddingLeft: "16px", display: "block" }}>
          Sun: CLOSED
        </Typography.Text>
        <Row style={{ paddingLeft: "16px", paddingTop: "48px", gap: "16px" }}>
          <FbIcon />
          <InstraIcon />
          <WhatsappIcon />
        </Row>
      </Drawer>
    </Layout>
  );
};

export default Navbar;

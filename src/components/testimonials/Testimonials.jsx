import React from "react";
import {
  Avatar,
  Button,
  Typography,
  Space,
  Rate,
  Card,
  Row,
  Col,
  Grid,
} from "antd";

import ProfileImg from "../../assets/Testimonials/ProfileImg.svg";
import StarIcon from "/src/assets/Testimonials/Star.svg";
import BrownStarIcon from "/src/assets/Testimonials/BrownStar.svg";
import LeftArrow from "/src/assets/OurServices/LeftArrow.svg";
import RightArrow from "/src/assets/OurServices/RightArrow.svg";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const Testimonials = () => {
  let screens = useBreakpoint();
  return (
    <div
      class="container"
      style={{
        position: "relative",
        paddingTop: "0px",
        paddingBottom: "0px",
      }}
    >
      {/* Heading Section */}
      <Row justify="space-between" align="middle">
        <Col>
          <Title
            level={4}
            style={{
              textTransform: "uppercase",
              fontFamily: "Cormorant, serif",
              color: "#494040",
              fontSize: "32px",
              lineHeight: "40px",
              fontWeight: "normal",
              borderLeft: "1px solid #DDC3BB",
              paddingLeft: 16,
            }}
          >
            Testimonials
          </Title>
        </Col>

        {/* Google Reviews Section */}
        <Col
          xs={0}
          sm={24}
          md={12}
          style={{
            display: screens.md ? "flex" : "none",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Space align="center">
            <Text strong>Google Reviews</Text>
            {Array(5)
              .fill()
              .map((_, index) => (
                <img
                  key={index}
                  src={StarIcon}
                  alt="Star Icon"
                  style={{ width: 24, height: 24, objectFit: "contain" }}
                />
              ))}
            <Text>4.9</Text>
          </Space>
        </Col>
      </Row>

      {/* Testimonial Content Section */}
      <Card
        style={{
          backgroundColor: "#faf6f2",
          padding: "32px",
          marginBottom: "32px",
          border: "none",
        }}
      >
        <Space
          direction="vertical"
          size="large"
          style={{ width: "100%" }}
          align="center"
        >
          <Space direction="vertical" align="center">
            <Avatar size={48} src={ProfileImg} />
            <Title
              level={4}
              style={{
                textTransform: "uppercase",
                fontFamily: "Cormorant, serif",
                color: "#83635c",
                margin: 0,
              }}
            >
              Maria Santos
            </Title>
          </Space>

          <Row align="middle" justify="center" style={{ width: "100%" }}>
            <Col xs={24} sm={20} style={{ display: "flex" }}>
              <Col
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid #ddc3ba",
                  display: screens.sm ? "flex" : "none",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={LeftArrow} alt="Left Arrow" />
              </Col>
              <div className="" style={{ width: "100%" }}>
                <Text
                  style={{
                    textAlign: "center",
                    display: "block",
                    fontFamily: "Mulish, sans-serif",
                    color: "#494040",
                    fontSize: "16px",
                    padding: screens.sm ? "0 32px" : "0 0",
                  }}
                >
                  I have been a very satisfied client for over 20 years.
                  Fatumata became a really good friend. Plus, she is an expert
                  in her line of work.
                </Text>
                <div style={{ display: screens.sm ? "block" : "none" }}>
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <img
                        key={index}
                        src={StarIcon}
                        alt="Brown Star Icon"
                        style={{
                          width: 24,
                          height: 24,
                          objectFit: "contain",
                          paddingTop: "40px",
                        }}
                      />
                    ))}
                </div>
              </div>
              <Col
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid #ddc3ba",
                  display: screens.sm ? "flex" : "none",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={RightArrow} alt="Right Arrow" />
              </Col>
            </Col>
          </Row>

          {/* Mobile Arrows and Star Ratings */}
          <Row
            justify="space-between"
            align="middle"
            style={{ maxWidth: 360, width: "100%" }}
          >
            <Col xs={24} sm={0}>
              <Space style={{ width:"100%" }} justify="space-between">
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
                <div>
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <img
                        key={index}
                        src={StarIcon}
                        alt="Brown Star Icon"
                        style={{
                          width: 24,
                          height: 24,
                          objectFit: "contain",
                        }}
                      />
                    ))}
                </div>
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
              </Space>
            </Col>
          </Row>
        </Space>
      </Card>

      {/* Customer Inquiry Section */}
      <Row justify="center" style={{ marginTop: 32 }}>
        <Title
          level={3}
          style={{
            fontFamily: "Cormorant, serif",
            color: "#83635c",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          É cliente? Deixe o seu comentário
        </Title>
      </Row>

      {/* Review Submission Section */}
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Card
          style={{
            marginTop: 32,
            border: "1px solid #ddc3ba40",
            width: screens.lg ? "700px" : "100%",
          }}
        >
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <Space align="center">
              {/* <Rate defaultValue={0} style={{ color: "#83635c" }} /> */}
              {Array(5)
                .fill()
                .map((_, index) => (
                  <img
                    key={index}
                    src={BrownStarIcon}
                    alt="Brown Star Icon"
                    style={{ width: 24, height: 24, objectFit: "contain" }}
                  />
                ))}
              <Text
                style={{ fontFamily: "Mulish, sans-serif", color: "#494040" }}
              >
                Elecioneaa classificação
              </Text>
            </Space>

            <Space direction="vertical" style={{ width: "100%" }}>
              <Text style={{ color: "#83635c" }}>
                A few things to consider in your review
              </Text>
              <Space wrap>
                {["Service Requested", "Quality", "Vibe"].map((item) => (
                  <Card
                    key={item}
                    size="small"
                    style={{
                      backgroundColor: "#efede7",
                      border: "none",
                    }}
                  >
                    <Text style={{ color: "#494040", fontSize: "14px" }}>
                      {item}
                    </Text>
                  </Card>
                ))}
              </Space>
            </Space>
          </Space>
        </Card>
      </div>

      {/* Submit Button */}
      <Row justify="center" style={{ marginTop: 32 }}>
        <Button
          type="primary"
          style={{
            width: "100%",
            maxWidth: "360px",
            height: "auto",
            backgroundColor: "#a4775e",
            color: "white",
            textTransform: "uppercase",
            fontFamily: "Cormorant, serif",
            fontSize: "20px",
            padding: "32px 48px",
            borderRadius: 0,
            lineHeight: "24px",
          }}
        >
          Deixar comentários
        </Button>
      </Row>
    </div>
  );
};

export default Testimonials;

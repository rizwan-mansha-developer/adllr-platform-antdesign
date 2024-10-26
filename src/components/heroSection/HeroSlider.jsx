import React, { useState } from "react";
import { Row, Col, Button, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const HeroSlider = ({ SliderContent }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? SliderContent.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === SliderContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* Carousel wrapper */}
      <div
        style={{
          position: "relative",
          height: "135px",
          overflow: "hidden",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {SliderContent.map((item, index) => (
          <div
            key={item.id}
            style={{
              position: "absolute",
              width: "100%",
              height: "135px",
              transition: "opacity 0.3s ease-in-out",
              opacity: index === activeIndex ? 1 : 0,
            }}
          >
            <Row
              align="middle"
              justify="center"
              style={{
                height: "100%",
                color: "#fff",
                flexDirection: "column",
              }}
            >
              {/* Textual content below the icon */}
              <Col style={{ textAlign: "center" }}>
                <item.icon style={{ width: "48px", height: "48px" }} />
                <div style={{ marginTop: "15px" }}>
                  <Typography.Title
                    level={5}
                    style={{ color: "white", fontWeight: "300", margin: 0 }}
                  >
                    {item.title}
                  </Typography.Title>
                  <Typography.Text
                    style={{
                      display: "block",
                      fontFamily: "mulish",
                      color: "white",
                      fontWeight:"400px"
                    }}
                  >
                    {item.detail1}
                  </Typography.Text>
                  <Typography.Text
                    style={{
                      fontWeight: 300,
                      fontFamily: "Mulish",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "white",
                    }}
                  >
                    {item.detail2}
                  </Typography.Text>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <Button
        type="text"
        icon={<LeftOutlined />}
        onClick={handlePrevClick}
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          color: "white",
          border: "none",
          width: "40px",
          height: "40px",
        }}
      />

      {/* Next Button */}
      <Button
        type="text"
        icon={<RightOutlined />}
        onClick={handleNextClick}
        style={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          color: "white",

          border: "none",
          width: "40px",
          height: "40px",
        }}
      />
    </div>
  );
};

export default HeroSlider;

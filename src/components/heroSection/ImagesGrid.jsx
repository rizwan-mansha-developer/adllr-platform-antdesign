import React from "react";
import { Row, Col, Typography } from "antd";

function ImagesGrid({ SliderContent }) {
  return (
    <Row
      gutter={16}
      style={{
        display: "flex",
        "@media (min-width: 768px)": { display: "flex" },
      }}
    >
      {SliderContent.slice(0, 3).map((item) => (
        <Col
          key={item.id}
          span={8}
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            gap: "15px",
          }}
        >
          <item.icon style={{ width: "48px", height: "48px" }} />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography.Title
              level={5}
              style={{
                fontWeight: 300,
                fontSize: "16px",
                lineHeight: "24px",
                marginBottom: "0",
                marginTop: "0",
                color: "white",
              }}
            >
              {item.title}
            </Typography.Title>
            <Typography.Text
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                lineHeight: "24px",
                whiteSpace: "nowrap",
                color: "white",
              }}
            >
              {item.detail1}
            </Typography.Text>
            <Typography.Text
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                lineHeight: "24px",
                color: "white",
              }}
            >
              {item.detail2}
            </Typography.Text>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default ImagesGrid;

import * as React from "react";
import { ArcGauge } from "@progress/kendo-react-gauges";
import styled from "styled-components";

const colors = [
  { from: 0, to: 50, color: "FFB496" },
  { from: 50, color: "#FF723A" },
];

// 스타일링된 컨테이너 컴포넌트
const GaugeWrapper = styled.div`
  width: ${(props) => props.width || "30vw"};
  height: ${(props) => props.height || "30vh"};
  position: ${(props) => props.position || "relative"};
`;

const ArcGaugeComponent = ({ value, width, height, position }) => {
  const arcOptions = {
    value: value,
    colors,
  };

  const arcCenterRenderer = (value) => (
    <h3
      style={{
        color: "#fff",
        position: "absolute",
        top: "80px",
        left: "39%",
        fontSize: "40px",
      }}
    >
      {value}%
    </h3>
  );

  return (
    <GaugeWrapper width={width} height={height} position={position}>
      <ArcGauge
        {...arcOptions}
        arcCenterRender={arcCenterRenderer}
        style={{ width: "30vw", height: "30vh" }} // ArcGauge를 컨테이너에 맞게 조정
      />
    </GaugeWrapper>
  );
};

export default ArcGaugeComponent;

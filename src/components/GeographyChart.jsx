import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";

import { useColors } from "../theme/colors";

import { geographyData } from "../data/testdata";
import { geoDataPoints } from "../data/geoDataPoints";

const GeographyChart = ({ inDashboard = false }) => {
  const colors = useColors();

  return (
    <ResponsiveChoropleth
      theme={{
        tooltip: {
          container: {
            background: colors.grey[800],
            color: colors.grey[100],
          },
        },
      }}
      data={geographyData}
      features={geoDataPoints.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="nivo"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionType="equalEarth"
      projectionScale={inDashboard ? 40 : 150}
      projectionTranslation={inDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#152538"
      legends={[
        {
          anchor: "bottom-left",
          direction: "column",
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: "left-to-right",
          itemTextColor: colors.grey[500],
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: colors.grey[100],
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default GeographyChart;

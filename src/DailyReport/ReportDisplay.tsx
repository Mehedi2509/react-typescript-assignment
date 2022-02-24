import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

const ReportDisplay = ({ report: any }): any => {
  const { date, reportTitle, details } = report;

  return (
    <div style={{ width: "300px" }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {date}
          </Typography>
          <Typography variant="h6" component="div">
            {reportTitle}
          </Typography>
          <Typography variant="body2">{details}</Typography>
        </CardContent>
        <Button size="small">Remove Report</Button>
      </Card>
    </div>
  );
};

export default ReportDisplay;

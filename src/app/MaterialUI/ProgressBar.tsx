"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const ProgressBar = ({ condition }) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 7,
    width: 150,
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:
        theme.palette.mode === "light" ? condition.progressColor : "#308fe8",
    },
  }));

  return (
    <>
      <div>
        <BorderLinearProgress variant="determinate" value={condition.level} />
      </div>
    </>
  );
};

export default ProgressBar;

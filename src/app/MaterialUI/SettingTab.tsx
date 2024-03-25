"use client";
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Profile from "../components/Profile/Profile";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SettingTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              scrollButtons="auto"
              variant="scrollable"
            >
              <Tab label="My details" {...a11yProps(0)} />
              <Tab label="Profile" {...a11yProps(1)} />
              <Tab label="Password" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            details
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Profile />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Passowrd
          </CustomTabPanel>
        </Box>
      </div>
    </>
  );
};

export default SettingTab;

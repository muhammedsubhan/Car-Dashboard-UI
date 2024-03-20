"use client";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const CarModelSelector = () => {
  const [model, setModel] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setModel(event.target.value);
  };
  return (
    <>
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Model</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={model}
            label="Model"
            onChange={handleChange}
            sx={{
              borderRadius: 5,
              bgcolor: "white",
              color: "#5F6165",
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            <MenuItem
              sx={{
                color: "#5F6165",
                fontSize: 16,
                fontWeight: 500,
              }}
              value="all"
            >
              <em>All</em>
            </MenuItem>
            <MenuItem
              sx={{
                color: "#5F6165",
                fontSize: 16,
                fontWeight: 500,
              }}
              value="toyota"
            >
              Toyota
            </MenuItem>
            <MenuItem
              sx={{
                color: "#5F6165",
                fontSize: 16,
                fontWeight: 500,
              }}
              value="porshe"
            >
              Porshe
            </MenuItem>
            <MenuItem
              sx={{
                color: "#5F6165",
                fontSize: 16,
                fontWeight: 500,
              }}
              value="suv"
            >
              SUV
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default CarModelSelector;

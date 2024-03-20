"use client";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ConditionSelector = () => {
  const [condition, setCondition] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCondition(event.target.value);
  };

  return (
    <>
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Condition</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={condition}
            label="Condition"
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
              value="None"
            >
              <em>None</em>
            </MenuItem>
            <MenuItem
              sx={{
                color: "#5F6165",
                fontSize: 16,
                fontWeight: 500,
              }}
              value="new"
            >
              New
            </MenuItem>
            <MenuItem
              sx={{
                color: "#5F6165",
                fontSize: 16,
                fontWeight: 500,
              }}
              value="used"
            >
              Used
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default ConditionSelector;

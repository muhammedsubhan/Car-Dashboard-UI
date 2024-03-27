"use client";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
const ServiceRadio = () => {
  const [value, setValue] = useState("data1");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <div className="mt-4 w-[330px]">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <div className="flex flex-col gap-10">
              <div className="flex items-center">
                <FormControlLabel
                  value="data1"
                  control={
                    <Radio
                      sx={{
                        color: "#A162F7",
                        "&.Mui-checked": {
                          color: "#A162F7",
                        },
                      }}
                    />
                  }
                  label=""
                />
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl font-semibold text-black">
                    Upgrade your favourite car periodically
                  </h1>
                  <div className="flex items-center gap-5 text-sm font-medium text-gray-500">
                    <p>Today, 10.00</p>
                    <span className="border-l h-5 border-gray-200 border"></span>
                    <p>Fix Price : $1,200</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <FormControlLabel
                  value="data2"
                  control={
                    <Radio
                      sx={{
                        color: "#A162F7",
                        "&.Mui-checked": {
                          color: "#A162F7",
                        },
                      }}
                    />
                  }
                  label=""
                />
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl font-semibold text-black">
                    Buy spare parts for suspension
                  </h1>
                  <div className="flex items-center gap-5 text-sm font-medium text-gray-500">
                    <p>Today, 14.00</p>
                    <span className="border-l h-5 border-gray-200 border"></span>
                    <p>Fix Price : $1,400</p>
                  </div>
                </div>
              </div>
            </div>
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
};

export default ServiceRadio;

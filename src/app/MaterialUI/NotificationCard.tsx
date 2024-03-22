"use client";
import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import Image from "next/image";
import { Badge } from "@mui/material";
import Notifications from "./Notifications";

const NotificationCard = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="relative">
        <Badge color="error" variant="dot">
          <Image
            src="/icons/bell-icon.png"
            className="cursor-pointer"
            alt="bell-icon"
            width={20}
            height={20}
            onClick={handleClick}
          />
        </Badge>
        <div className="absolute top-20">
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Notifications />
          </Menu>
        </div>
      </div>
    </>
  );
};

export default NotificationCard;

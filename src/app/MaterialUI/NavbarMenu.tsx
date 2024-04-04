"use client";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Image from "next/image";
import Link from "next/link";

const NavbarMenu = () => {
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
      <div>
        <Image
          src="/profile-pic.png"
          alt="bell-icon"
          className="rounded-full cursor-pointer"
          width={50}
          height={50}
          priority
          onClick={handleClick}
        />
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
                width: 32,
                height: 32,
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
          <Link href="/dashboard/settings">
            <MenuItem onClick={handleClose} className="mb-2">
              <Avatar /> Profile
            </MenuItem>
          </Link>

          <Divider />

          <Link href="/dashboard/settings">
            <MenuItem onClick={handleClose} className="mb-2 mt-2">
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Change Password
            </MenuItem>
          </Link>

          <Link href="/dashboard/settings">
            <MenuItem onClick={handleClose} className="mb-2 mt-2">
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
          </Link>
          <Link href="/signin">
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Link>
        </Menu>
      </div>
    </>
  );
};

export default NavbarMenu;

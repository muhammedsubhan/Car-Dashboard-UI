import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { menuItems } from "../components/Sidebar/MenuList";
import Link from "next/link";
import Image from "next/image";

const SidebarDrawer = ({ toggleDrawer, open }) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuItems.map((menuItem) => (
          <Link key={menuItem.title + menuItem.link} href={menuItem.link}>
            <ListItem disablePadding>
              <ListItemButton>
                <div className="px-4 py-2 ">
                  <div className="flex items-center gap-5  text-gray-500 font-medium">
                    <Image
                      src={menuItem.icon}
                      alt={menuItem.title}
                      height={22}
                      width={22}
                    />
                    <p className="text-xl"> {menuItem.title}</p>
                  </div>
                </div>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <div className="flex items-center gap-3 px-6 py-7">
            <Image src="/logo.png" alt="logo" height={35} width={35} />
            <h1 className="text-2xl font-semibold ">Motiv.</h1>
          </div>
          {DrawerList}
        </Drawer>
      </div>
    </>
  );
};

export default SidebarDrawer;

import {
  BookmarkBorder,
  Home,
  ListAlt,
  MailOutline,
  MoreHoriz,
  NotificationsNone,
  PermIdentity,
  Tag,
  Twitter,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <Twitter className="sidebar__Icon" />

      <SidebarOption text="Home" Icon={Home} active />
      <SidebarOption text="Explore" Icon={Tag} />
      <SidebarOption text="Notifications" Icon={NotificationsNone} />
      <SidebarOption text="Messages" Icon={MailOutline} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorder} />
      <SidebarOption text="Lists" Icon={ListAlt} />
      <SidebarOption text="Profile" Icon={PermIdentity} />
      <SidebarOption text="More" Icon={MoreHoriz} />

      <Button variant="outlined" fullWidth className="sidebar__tweet">
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;

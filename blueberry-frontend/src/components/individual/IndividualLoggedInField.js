import React from "react";
import Logo from "../default/Logo";
import profileImg from "../default/profile.png";
import "./IndividualLoggedInField.css";
import { useHistory } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import { useCookies } from "react-cookie";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from '@mui/icons-material/Logout';

function IndividualIcon(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const history = useHistory();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <div className="logged-in-field-profile">
        <div>
          <h2>{cookies.user.username}</h2>
          <p>{cookies.user.role}</p>
        </div>
        <div>
          <Avatar
            alt={cookies.user.username}
            src={profileImg}
            sx={{ width: 56, height: 56 }}
            className="logged-in-field-profile-pic"
            onClick={toggleDrawer("right", true)}
          />
        </div>
      </div>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <List>
            <ListItem button key={"Dashboard"} onClick={()=>history.push(`/profile/${cookies.user.username}`)}>
              <DashboardIcon/>
              <ListItemText primary={"Dashboard"} />
            </ListItem>
            <ListItem button key={"Sign out"} onClick={()=>{
                removeCookie("user")
                history.push("/")}}>
              <LogoutIcon/>
              <ListItemText primary={"Sign out"} />
            </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default IndividualIcon;

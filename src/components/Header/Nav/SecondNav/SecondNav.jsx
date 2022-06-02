import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./SecondNav.css";

const SecondNav = () => {
  return (
    <div className="secondNav">
      <SearchIcon />
      <a href="/#">Kids</a>
      <NotificationsIcon />
      <Avatar
        alt="Huy"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/800px-President_Barack_Obama.jpg"
      />
      <ArrowDropDownIcon />
    </div>
  );
};

export default SecondNav;

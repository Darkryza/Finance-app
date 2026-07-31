import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const AndroidSwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 38,
  padding: 0,
  display: "flex",
  "& .MuiSwitch-switchBase": {
    padding: 4,
    transform: "translateX(0px)",
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(22px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#00e676" : "#2e7d32", // Android active color
        opacity: 1,
        border: 0,
      },
      "& .MuiSwitch-thumb": {
        // Expands thumb slightly on active state (Android behavior)
        width: 30,
        height: 30,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 30,
    height: 30,
    borderRadius: "50%",
    transition: theme.transitions.create(["width", "height", "transform"], {
      duration: 200,
    }),
    backgroundColor: "#fff",
  },
  "& .MuiSwitch-track": {
    borderRadius: 38 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#616161" : "#b0bec5",
    boxSizing: "border-box",
  },
}));

export default AndroidSwitch;

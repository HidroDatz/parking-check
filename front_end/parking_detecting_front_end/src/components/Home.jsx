import { Box, Button, Typography } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    window.location.href = "/login";
  }
  const FsoftLocation = {
    lat: 21.0097,
    lng: 105.535,
  };
  const FptULocation = {
    lat: 21.01327,
    lng: 105.5248,
  }
  const CentralLocation = {
    lat: 21.01,
    lng: 105.529,
  }
  return (
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: "1rem",
        borderRadius: "4px",
      }}
    >
      <div>
        <h2 style={{ color: "black" }}>Come Visit Us At Our Campus</h2>

        <div style={{ height: "400px", width: "100%", borderRadius: "10%" }}>
          {typeof window !== "undefined" && (
            
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyCraJlPwgUYIzdFkWTPtfEH5tuhC_0leO8" }}
              defaultCenter={CentralLocation}
              defaultZoom={14}
              draggable={false}
            >
              <Icon
                icon={locationIcon}
                lat={FptULocation.lat}
                lng={FptULocation.lng}
                style={{ color: "red", fontSize: "24px" }}
              />
              <Icon
                icon={locationIcon}
                lat={FsoftLocation.lat}
                lng={FsoftLocation.lng}
                style={{ color: "red", fontSize: "24px" }}
              />
            </GoogleMapReact>
          )}
        </div>
      </div>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        style={{ color: "#66a3ff" }}
      >
        Smart Parking System
      </Typography>

      <Button variant="contained" component={Link} to="/Parking_check">
        Check
      </Button>
      <Typography
        variant="h6"
        component="h4"
        gutterBottom
        style={{ color: "#66a3ff" }}
      >
        “Press check to look for available parking spots”
      </Typography>
    </Box>
  );
};

export default Home;

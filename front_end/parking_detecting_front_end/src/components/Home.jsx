import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";
const Home = () => {
  return (
    <div className="centered">
      <Typography variant="h4" component="h1" gutterBottom>
        Smart Parking System
      </Typography>
      <div className="centered">
        <Button variant="contained" component={Link} to="/page2">
          Check
        </Button>
      </div>
    </div>
  );
};

export default Home;

import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import "../App.css";
const Page2 = () => {
  // Giả sử dữ liệu bảng
  const data = [
    { stt: 1, zone: "Slot 1", availableSlots: true },
    { stt: 2, zone: "Slot 2", availableSlots: false },
    { stt: 3, zone: "Slot 3", availableSlots: true },
  ];
  const getAvailabilityColor = (availableSlots) => {
    return availableSlots ? "green" : "red";
  };
  return (
    <div className="centered">
      <Box
        sx={{
          margin: "1rem",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          style={{ color: "#66a3ff" }}
        >
          Tracking Parking Slots
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs="auto">
          <TableContainer component={Paper}>
          <Typography gutterBottom>Tracking Parking Slots Zone 1</Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>STT</TableCell>
                  <TableCell>ZONE</TableCell>
                  <TableCell>Available Slots</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.stt}>
                    <TableCell>{row.stt}</TableCell>
                    <TableCell>{row.zone}</TableCell>
                    <TableCell>
                      <span
                        style={{
                          color: getAvailabilityColor(row.availableSlots),
                        }}
                      >
                        {row.availableSlots > 0 ? "true" : "false"}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs="auto">
          <TableContainer component={Paper}>
          <Typography gutterBottom>Tracking Parking Slots Zone 2</Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>STT</TableCell>
                  <TableCell>ZONE</TableCell>
                  <TableCell>Available Slots</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.stt}>
                    <TableCell>{row.stt}</TableCell>
                    <TableCell>{row.zone}</TableCell>
                    <TableCell>
                      <span
                        style={{
                          color: getAvailabilityColor(row.availableSlots),
                        }}
                      >
                        {row.availableSlots > 0 ? "true" : "false"}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};
export default Page2;

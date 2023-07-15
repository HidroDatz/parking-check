import {
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
    { stt: 1, zone: "Zone 1", availableSlots: 5 },
    { stt: 2, zone: "Zone 2", availableSlots: 3 },
    { stt: 3, zone: "Zone 3", availableSlots: 8 },
  ];

  return (
    <div className="centered">
      <Typography variant="h4" component="h2" gutterBottom>
        Tracking Parking Slots
      </Typography>
      <TableContainer component={Paper}>
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
                <TableCell>{row.availableSlots}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Page2;

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import cart from "../../data/cart";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useState } from "react";

const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const columns = [
  { id: "item", label: "Item", minWidth: 400 },
  { id: "qty", label: "Qty", minWidth: 100 },
  {
    id: "price",
    label: "Subtotal",
    minWidth: 60,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "delete",
    label: "",
    minWidth: 100,
  },
];

export default function CartTable() {
  const [itemNo, setItemNo] = useState(1);
  const [data, setData] = useState([...cart]);

  const handleItemNoChange = (event) => {
    if (event.target.value !== null) {
      setItemNo(event.target.value);
    }
  };

  const handleRemoveRow = (id) => {
    // Filter out the row with the provided id to remove it
    const updatedData = data.filter((row) => row.id !== id);
    setData(updatedData);
  };

  return (
    <div className="cart-carttable">
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: "100%" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    <h4>{column.label} </h4>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <div className="cart-carttable-item">
                      <img src={row.img} alt="" />
                      <div>
                        <h5>{row.name}</h5>
                        <h6>Color: Grey Space</h6>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select
                      labelId="qty"
                      id="demo-simple-select"
                      value={itemNo}
                      onChange={handleItemNoChange}
                      defaultValue="1"
                    >
                      {nums.map((num) => (
                        <MenuItem value={`${num}`}>{num}</MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <h5>${row.price}</h5>
                  </TableCell>
                  <TableCell>
                    <Button
                      color="secondary"
                      onClick={() => handleRemoveRow(row.id)}
                    >
                      <DeleteRoundedIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

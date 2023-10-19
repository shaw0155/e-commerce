import orders from "../../data/orders";
import {
  TableHead,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  TableRow,
  Paper,
} from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 180 },
  { field: "name", headerName: "Name", width: 200 },
  {
    field: "date",
    headerName: "Date",
    width: 140,
    sortable: false,
  },
  {
    field: "price",
    headerName: "Price",
    sortable: false,
    width: 120,
  },
  {
    field: "status",
    headerName: "Status",
    sortable: false,
    width: 120,
  },
];
export default function AccountOrders() {
  return (
    <div className="account-orders">
      <h2>Orders</h2>
      <div className="account-orders-table">
        <TableContainer component={Paper} sx={{ maxHeight: "100%" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.width }}
                  >
                    <h4>{column.headerName} </h4>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <p>{row.id}</p>
                  </TableCell>
                  <TableCell>
                    <p>{row.name}</p>
                  </TableCell>
                  <TableCell>
                    <p>${row.date}</p>
                  </TableCell>
                  <TableCell>
                    <p>${row.price}</p>
                  </TableCell>
                  <TableCell>
                    <h6 className={`status status-${row.color}`}>
                      {row.status}
                    </h6>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

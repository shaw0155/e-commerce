import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Notification from "../../utils/Notification";
import CircularProgress from "@mui/material/CircularProgress";
import {
  getWishlist,
  removeProductFromWishlist,
} from "../../actions/wishlist_actions";

const columns = [
  { id: "item", label: "Item", minWidth: 400 },
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

export default function WishTable() {
  const { isLoading, data: wishlistData } = useQuery({
    queryKey: ["wishTable"],
    queryFn: getWishlist,
  });
  const queryClient = useQueryClient();
  //console.log(wishlistData.data.data);
  const products = wishlistData?.data.data;

  const [openNotification, setOpenNotification] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNotification(false);
  };

  const handleNotification = (errMsg) => {
    setOpenNotification(true);
    setErrMsg(errMsg);
  };

  const handleRemoveRow = (id) => {
    setIsDeleting(true);
    removeProductFromWishlist(id)
      .then((response) => {
        queryClient.invalidateQueries("wishTable");
      })
      .catch((err) => {
        handleNotification(err.response.data.message);
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  return (
    <>
      {isLoading || isDeleting ? (
        <div className="spinner-container">
          <CircularProgress />
        </div>
      ) : (
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
                  {products?.map((row) => (
                    <TableRow key={row._id}>
                      <TableCell>
                        <div className="cart-carttable-item">
                          <img src={row.imageCover} alt="" />
                          <div>
                            <h5>{row.title}</h5>
                            <h6>Color: Grey Space</h6>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <h5>${row.price}</h5>
                      </TableCell>
                      <TableCell>
                        <Button
                          color="secondary"
                          onClick={() => handleRemoveRow(row._id)}
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
      )}
      {openNotification && (
        <Notification
          severity="error"
          openNotification={openNotification}
          msg={errMsg}
          handleClose={handleClose}
        />
      )}
    </>
  );
}

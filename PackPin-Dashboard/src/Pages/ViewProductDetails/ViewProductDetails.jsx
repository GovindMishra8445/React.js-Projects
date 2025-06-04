import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const ViewProductDetails = ({ open, handleClose, product }) => {
  if (!product) return null;

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle className="bg-[#1f2a38] text-white border-b-1">Product Details</DialogTitle>
      <DialogContent dividers className="bg-[#1f2a38] text-white">
        <div className="flex gap-4 mb-4 items-center">
          <img
            src={product.productImage}
            alt="Product"
            className="w-40 h-40 object-cover rounded"
          />
          <div>
            <Typography variant="h6" >{product.productName}</Typography>
          </div>
        </div>
        <Typography variant="body1" className="text-white pt-2">
          Description:
        </Typography>
        <Typography variant="body2" paragraph>
          {product.description}
        </Typography>
        <Typography variant="h6">Pack With Price:</Typography>
        {product.packWithPrice &&
          product.packWithPrice.map((pack) => (
            <Typography key={pack._id} variant="body2">
              Pack of {pack.packOf}: ${pack.price}
            </Typography>
          ))}
      </DialogContent>
      <DialogActions  className="bg-[#1f2a38] text-white border-t-1 border-[#374152]">
        <Button onClick={handleClose} color="primary" variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewProductDetails;

import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const ViewCategoryDetails = ({ open, handleClose, category }) => {
  if (!category) return null;

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle className="bg-[#1f2a38] text-white border-b-1">Category Details</DialogTitle>
      <DialogContent dividers className="bg-[#1f2a38] text-white">
        <div className="flex gap-4 mb-4 items-center">
          <img
            src={category.categoryImage}
            alt="Category"
            className="w-40 h-40 object-cover rounded"
          />
          <div>
            <Typography variant="h6" className=" capitalize text-white">{category.categoryName}</Typography>
          </div>
        </div>
        <Typography className="text-white pt-2" gutterBottom>
          Description:
        </Typography>
        <Typography variant="body2">{category.categoryDescription}</Typography>
      </DialogContent>
      <DialogActions  className="bg-[#1f2a38] text-white border-t-1 border-[#374152]">
        <Button onClick={handleClose} color="primary" variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewCategoryDetails;

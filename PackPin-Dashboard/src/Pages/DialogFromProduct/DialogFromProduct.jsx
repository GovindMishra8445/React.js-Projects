import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { IoCloseSharp } from "react-icons/io5";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";
import ProductFrom from "../../Components/AllFrom/ProductFrom";
import CategoryFrom from "../../Components/AllFrom/CategoryFrom";
import SubCategoryFrom from "../../Components/AllFrom/SubCategoryFrom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const DialogFromProduct = () => {
  const { isOpenDialogFromProduct, setIsOpenDialogFromProduct } =
    useContext(MyContext);

  return (
    <Dialog
      maxWidth
      open={isOpenDialogFromProduct.open}
      onClose={() => setIsOpenDialogFromProduct({ open: false })}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar className="bg-[#1f2a38]">
          <IconButton
            onClick={() => setIsOpenDialogFromProduct({ open: false })}
            aria-label="close"
          >
            <IoCloseSharp className="text-white bg-[#374152] rounded-md" />
          </IconButton>
          <Typography sx={{ flex: 1 }} variant="h6" component="div">
            <span className="text-white font-bold ">
              {isOpenDialogFromProduct?.model}
            </span>
          </Typography>
        </Toolbar>
      </AppBar>

      {isOpenDialogFromProduct?.model === "Add Product" && <ProductFrom />}
      {isOpenDialogFromProduct?.model === "Add Category" && <CategoryFrom />}
      {isOpenDialogFromProduct?.model === "Add Sub-Category" && <SubCategoryFrom />}
    </Dialog>
  );
};

export default DialogFromProduct;

import {
  Dialog,
  DialogContentText,
  DialogTitle,
  IconButton,
  Slide,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import PropTypes from "prop-types";

const FunFactsDialog = ({
  funFactDialogOpen,
  funFactModalMessage,
  funFactToggle,
  onReadMore,
}) => {
  return (
    <Dialog
      open={funFactDialogOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={funFactToggle}
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{
        style: { borderRadius: "40px", padding: "20px 24px" },
      }}
    >
      <DialogTitle>
        <IconButton
          sx={{ position: "absolute", right: "32px", top: "12px" }}
          onClick={funFactToggle}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContentText id="alert-dialog-slide-description">
        {funFactModalMessage}
      </DialogContentText>
      <ReadMoreButton onClick={onReadMore}>Read More</ReadMoreButton>
    </Dialog>
  );
};

export default FunFactsDialog;

FunFactsDialog.propTypes = {
  funFactDialogOpen: PropTypes.string,
  funFactToggle: PropTypes.func,
  funFactModalMessage: PropTypes.string,
  onReadMore: PropTypes.func,
};

FunFactsDialog.defaultProps = {
  funFactDialogOpen: null,
  funFactToggle: null,
  funFactModalMessage: null,
  onReadMore: null,
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ReadMoreButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  padding: 12px;
  color: white;
  background-color: #533f2c;
  margin: 24px 24px 4px 24px;
`;

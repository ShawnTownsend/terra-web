import { Dialog, DialogContent, DialogContentText, Slide } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import FunFacts from "../components/FunFacts";
import Header from "../components/Header";

const HomeView = () => {
  const [funFactDialogOpen, setFunFactDialogOpen] = useState(false);

  // this will be made dynamic later
  const funFactMessage =
    "Wasting food is worse than total emissions from flying (1.9%), plastic production (3.8%) and oil extraction (3.8%).";

  const funFactToggle = () => {
    setFunFactDialogOpen(!funFactDialogOpen);
  };
  // make a use effect to load the randomizer function from utils and set the funfact to
  return (
    <>
      <Header />
      <FunFacts funFactToggle={funFactToggle} funFactMessage={funFactMessage} />
      {/* refactor this */}
      <Dialog
        open={funFactDialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={funFactToggle}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {funFactMessage}
          </DialogContentText>
          <ReadMoreButton>Read More</ReadMoreButton>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HomeView;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ReadMoreButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px grey solid;
  border-radius: 1rem;
  padding: 0.5rem;
  color: white;
  background-color: rgb(179, 123, 12);
  box-shadow: 2px 3px grey;
  margin: 1rem;
`;

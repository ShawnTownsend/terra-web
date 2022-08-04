import {
  Dialog,
  DialogContentText,
  DialogTitle,
  IconButton,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FunFacts from "../components/FunFacts";
import Header from "../components/Header";

const funFactsDB = [
  {
    funFactMessage:
      "Wasting food contributes to 10% of the world’s greenhouse gas emissions.*",
    funFactRef: "* WWF",
    funFactModalMessage:
      "Food waste’s high emissions are largely due to food production using a huge amount of land, water and energy. An area the size of the Indian subcontinent (4.4m km2 ) and water volume equivalent to 304 million Olympic swimming pools are needed to produce food that never leaves the farm.",
    funFactLink: "https://updates.panda.org/driven-to-waste-report",
  },
  {
    funFactMessage:
      "Uneaten food equates to Americans throwing out as much as $218 billion each year.*",
    funFactRef: "* NRDC",
    funFactModalMessage:
      "Between 2011-2012, some experts discovered that the US lost 15.4 billion dollars of retail food annually. Fruit losses, most of it perfectly good food, were around 12.3%-that's enough to feed 5.3 million people. They also found that US households were the most significant food wasters.",
    funFactLink:
      "https://www.nrdc.org/sites/default/files/food-waste-city-level-report.pdf",
  },
  {
    funFactMessage:
      "An average of 68% of all food discarded (as tracked in kitchen diaries) was potentially edible.*",
    funFactRef: "* NRDC",
    funFactModalMessage:
      "A lot of the food we throw away is edible. Meanwhile, approximately 4-10% of food from kitchens in restaurants ends up as pre-consumer waste. For instance, McDonald's says its employees must dump all fries in the trash can after 7 minutes, while they must discard burgers after 20 mins.",
    funFactLink:
      "https://www.nrdc.org/sites/default/files/food-waste-city-level-report.pdf/updates.panda.org/driven-to-waste-report",
  },
  {
    funFactMessage:
      "14% of food produced is lost from the post-harvest stage up to, but excluding, the retail stage.*",
    funFactRef: "* FAO",
    funFactModalMessage:
      "Fruits and vegetables usually suffer massive hits from food waste when compared to cereals and pulses on farms. Harvesting, poor handling, and inadequate storage contribute to on-farm storage losses. It's imperative to identify critical loss points to resolve these issues.",
    funFactLink: " https://www.fao.org/family-farming/detail/en/c/1245425/",
  },
  {
    funFactMessage:
      "44% of fruit and veggies end up as waste in South Africa, most wasted before reaching the supermarket.*",
    funFactRef: "* WWF",
    funFactModalMessage:
      "Yearly, South Africa loses one-third of the 31 million tonnes of food produced locally. Fruit and vegetable wastage contribute a significant portion to the loss. Supermarket chains, restaurants, and the busy lifestyle of most South Africans play a considerable role in this trend.",
    funFactLink:
      "https://www.oneplanetnetwork.org/sites/default/files/wwf_food_waste_and_loss_final.pdf",
  },
];
const HomeView = () => {
  const [funFactDialogOpen, setFunFactDialogOpen] = useState(false);
  const [funFactObj, setFunFactObj] = useState({});

  useEffect(() => {
    setFunFactObj(funFactsDB[Math.floor(Math.random() * funFactsDB.length)]);
  }, []);

  const { funFactMessage, funFactRef, funFactModalMessage, funFactLink } =
    funFactObj;

  const funFactToggle = () => {
    setFunFactDialogOpen(!funFactDialogOpen);
  };

  const onReadMore = () => {
    window.open(funFactLink, "_blank", "noopener,noreferrer");
  };
  // make a use effect to load the randomizer function from utils and set the funfact to
  return (
    <>
      <Header />
      <WelcomeMessage>
        <h1>Welcome back, Jenny!</h1>
      </WelcomeMessage>
      <WelcomeSubMessage>
        <h3>Some food for thought:</h3>
      </WelcomeSubMessage>
      <FunFacts
        funFactToggle={funFactToggle}
        funFactMessage={funFactMessage}
        funFactRef={funFactRef}
      />
      <FunFactsSubText>
        <h5>Click on the fact to learn more</h5>
      </FunFactsSubText>
      <WelcomeBodyHeader>
        <h1>See any peculiar produce today?</h1>
      </WelcomeBodyHeader>
      {/* refactor this */}
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
    </>
  );
};

export default HomeView;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const WelcomeMessage = styled.div`
  margin: 40px 32px 28px 32px;
`;

const WelcomeSubMessage = styled.div`
  margin: 0px 40px;
`;

const FunFactsSubText = styled.div`
  margin: 20px 66px 47px 66px;
  display: flex;
  align-item: center;
  justify-content: center;
`;

const WelcomeBodyHeader = styled.div`
  margin: 0px 32px;
`;

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

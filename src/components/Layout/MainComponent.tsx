import React, { useState } from "react";
import { Layout } from "./Layout";
import { LeftsideLayout } from "./LeftsideLayout";
import { RightsideLayout } from "./RightSideLayout";
import ItemCard from "../ItemCard";
import ProfileCard from "../ProfileCard";
import PlayerCard from "../PlayerCard";

const MainComponent = () => {
  const [middleContent, setMiddleContent] = useState<React.ReactNode>(<></>);

  const menuOptions = [
    { label: "Cards", value: "Cards" },
    { label: "Buttons", value: "Buttons" },
    { label: "Inputs", value: "Inputs" },
  ];

  const navigationOptions = [
    { label: "Documentation", value: "documentation" },
    { label: "Code", value: "code" },
    { label: "Exemple", value: "exemple" },
  ];

  const handleMenuSelect = (option: string) => {
    switch (option) {
      case "Cards":
        setMiddleContent(
          <div className="w-full grid grid-cols-cardgrid gap-2">
            <ProfileCard name="Lionel Messi" profession="Inter Miami player" />
            <ItemCard
              title="My title"
              subtitle="This is my subtitle"
              status="Accepted"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illum eius dicta. "
            />

            <PlayerCard
              first_name="Djordje"
              last_name="Petrovic"
              number="12"
              position="Goalkeeper"
            />
          </div>,
        );
        break;

      case "Buttons":
        setMiddleContent(
          <div>
            <p className="text-1xl place-content-center underline text-white uppercase text-center">
              Button component content
            </p>
          </div>,
        );
        break;

      case "Inputs":
        setMiddleContent(
          <div>
            <p className="text-1xl text-center underline text-white uppercase justify-center">
              Input component content
            </p>
          </div>,
        );
        break;
      default:
        setMiddleContent(
          <div>

            <p className="text-1xl underline text-white uppercase text-center">
              Select an option from the menu
            </p>
          </div>,
        );
    }
  };

  return (
    <Layout
      leftContent={
        <LeftsideLayout options={menuOptions} onMenuSelect={handleMenuSelect} />
      }
      middleContent={middleContent}
      rightContent={<RightsideLayout options={navigationOptions} />}
    />
  );
};

export default MainComponent;

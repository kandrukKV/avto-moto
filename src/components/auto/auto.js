import React from "react";
import Slider from "../slider/slider";
import AutoDescription from "../auto-description/auto-description";
import TabBarItem from "../tab-bar-item/tab-bar-item";
import TabBar from "../tab-bar/tab-bar";
import {Tab, CONTACTS} from "../../const";
import AutoFeatures from "../auto-features/auto-features";
import Reviews from "../reviews/reviews";
import Contacts from "../contacts/contacts";
import AutoProp from "./auto.prop";

import "./auto.scss";

const Auto = ({car}) => {
  const {
    slides,
    name,
    params,
    price,
    features
  } = car;
  return (
    <section className="auto">
      <div className="auto__top">
        <Slider slides={slides}/>
        <AutoDescription
          name={name}
          params={params}
          price={price}
        />
      </div>
      <TabBar>
        <TabBarItem label={Tab.FEATURES}>
          <AutoFeatures
            features={features}
          />
        </TabBarItem>
        <TabBarItem label={Tab.REVIEWS}>
          <Reviews/>
        </TabBarItem>
        <TabBarItem label={Tab.CONTACTS}>
          <Contacts
            contacts={CONTACTS}
          />
        </TabBarItem>
      </TabBar>
    </section>
  );
};

Auto.propTypes = AutoProp;

export default Auto;

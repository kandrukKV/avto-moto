import React from "react";
import './app.scss';
import Header from "../header/header";
import {HEADER_NAV_LIST, FOOTER_NAV_LIST} from "../../const";
import {CAR} from "../../moks/moks";
import {Helmet} from "react-helmet";
import Main from "../main/main";
import Auto from "../auto/auto.js";
import Footer from "../footer/footer";

import openSansBold from "../../fonts/OpenSans-Bold.woff2";
import openSansSemiBold from "../../fonts/OpenSans-SemiBold.woff2";
import openSansRegular from "../../fonts/OpenSans-Regular.woff2";

const App = () => {
  return (
    <div className="app">
      <Helmet>
        <link rel="preload" href={openSansRegular} as="font" type="font/woff2"/>
        <link rel="preload" href={openSansSemiBold} as="font" type="font/woff2"/>
        <link rel="preload" href={openSansBold} as="font" type="font/woff2"/>
      </Helmet>
      <Header navList={HEADER_NAV_LIST}/>
      <Main>
        <Auto car={CAR}/>
      </Main>
      <Footer navList={FOOTER_NAV_LIST}/>
    </div>
  );
};

export default App;

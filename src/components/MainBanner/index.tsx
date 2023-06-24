import React from "react";
import { motion } from "framer-motion";

const MainBanner = () => {
    return (
        <motion.div className="app__flex main-banner">
            <div className="app__flex text">
              <div className="app__flex shape">Webinars Exclusivos</div>
              <h2>Menos Conversinha,</h2>
              <div className="app__flex principal-text">
                <h1>Mais Conversão</h1>
                <motion.img src="asset-header.png"/>
              </div>
              <hr className="line"/>
              <p>Conheça as estratégias que <span>mudaram o jogo</span> e como aplicá-las no seu negócio</p>
            </div>
        </motion.div>
    )
}

export default MainBanner;
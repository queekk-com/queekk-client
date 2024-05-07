import "./Main.css";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { IoRocketSharp } from "react-icons/io5";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BiNetworkChart } from "react-icons/bi";
import CodeBlock from "../../../components/CodeBlock";
import World from "../../../assets/svgs/world.svg";
import { motion } from 'framer-motion';

const SERVER = process.env.REACT_APP_SERVER;

function Main() {
  const benefitsRef = useRef(null);

  useGSAP({
    targets: benefitsRef.current,
    scrollTrigger: {
      trigger: benefitsRef.current,
      start: "top 80%",
      end: "bottom 80%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    y: 0,
    duration: 1,
  });

  return (
    <div className="landMain">
      <motion.div
        initial={{ rotateY: -100, opacity: 0 }}
        transition={{ delay: .6, duration: 1, type: 'tween' }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="world__image__container">
        <img src={World} alt="World" className="world__image" />
      </motion.div>

      <div className="description">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          transition={{ delay: .8, duration: 1, type: 'tween' }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Why use <span className="highlight">Queekk</span> ?
        </motion.h1>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          transition={{ delay: 1, duration: 1, type: 'tween' }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="highlight">Queekk</span> offers a seamless
          integration into websites, providing instant, accurate, and
          personalized customer support. With customizable knowledge bases and
          efficient performance, <span className="highlight">Queekk</span>{" "}
          enhances user satisfaction, making it an invaluable tool for
          businesses aiming to elevate their customer service experience.
        </motion.p>
      </div>

      <div className="benefits">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          transition={{ delay: .6, duration: 1, type: 'tween' }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="benHead">
          <h1>Benefits of using our service</h1>
        </motion.div>
        <div className="benMain" ref={benefitsRef}>
          <motion.div
            initial={{ rotateX: -100, opacity: 0 }}
            transition={{ delay: .8, duration: 1, type: 'tween' }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="ben">
            <div className="benIcon">
              <IoRocketSharp />
            </div>
            <h3>Performance</h3>
            <p>
              Queekk delivers rapid responses to user inquiries, ensuring a
              seamless and efficient customer support experience.
            </p>
          </motion.div>
          <motion.div
            initial={{ rotateX: -100, opacity: 0 }}
            transition={{ delay: .9, duration: 1, type: 'tween' }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="ben">
            <div className="benIcon">
              <AiOutlineSafetyCertificate />
            </div>
            <h3>Reliable</h3>
            <p>
              Queekk consistently provides accurate assistance, minimizing
              downtime and maintaining trust with users.
            </p>
          </motion.div>
          <motion.div
            initial={{ rotateX: -100, opacity: 0 }}
            transition={{ delay: 1, duration: 1, type: 'tween' }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="ben">
            <div className="benIcon">
              <BiNetworkChart />
            </div>
            <h3>Scalable</h3>
            <p>
              Queekk effortlessly scales to accommodate increasing user demand,
              ensuring consistent support quality regardless of workload.
            </p>
          </motion.div>
        </div >
      </div >

      <div className="samples">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          transition={{ delay: .6, duration: 1, type: 'tween' }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="sampHead">
          <h1>Basic example</h1>
        </motion.div>
        <div className="sampMain">
          <motion.CodeBlock
            initial={{ x: 100, opacity: 0 }}
            transition={{ delay: .6, duration: 1, type: 'tween' }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            language="html">
            {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Queekk</title>
    <link rel="stylesheet" href="${SERVER}/assistant.css" />
    <script async src="${SERVER}/assistant/q-xxxxxxxxx" ></script>
</head>
<body>
    <div id="queekk-container"></div >
</body>
</html>`}
          </motion.CodeBlock>
          <motion.CodeBlock
            initial={{ x: -100, opacity: 0 }}
            transition={{ delay: .6, duration: 1, type: 'tween' }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            language="javascript">
            {`import { useEffect } from "react";

useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "${SERVER}/assistant.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "${SERVER}/assistant/q-xxxxxxxxx";
    script.async = true;
    document.head.appendChild(script);
}, []);

return <div id="queekk-container" />
`}
          </motion.CodeBlock>
        </div>
      </div>
    </div >
  );
}

export default Main;

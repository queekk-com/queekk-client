import "./Main.css";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { IoRocketSharp } from "react-icons/io5";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BiNetworkChart } from "react-icons/bi";
import CodeBlock from "../../../components/CodeBlock";
import World from "../../../assets/svgs/world.svg";

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
      <div className="world__image__container">
        <img src={World} alt="World" className="world__image" />
      </div>

      <div className="description">
        <h1>
          Why use <span className="highlight">Queekk</span> ?
        </h1>
        <p>
          <span className="highlight">Queekk</span> offers a seamless
          integration into websites, providing instant, accurate, and
          personalized customer support. With customizable knowledge bases and
          efficient performance, <span className="highlight">Queekk</span>{" "}
          enhances user satisfaction, making it an invaluable tool for
          businesses aiming to elevate their customer service experience.
        </p>
      </div>

      <div className="benefits">
        <div className="benHead">
          <h1>Benefits of using our service</h1>
        </div>
        <div className="benMain" ref={benefitsRef}>
          <div className="ben">
            <div className="benIcon">
              <IoRocketSharp />
            </div>
            <h3>Performance</h3>
            <p>
              Queekk delivers rapid responses to user inquiries, ensuring a
              seamless and efficient customer support experience.
            </p>
          </div>
          <div className="ben">
            <div className="benIcon">
              <AiOutlineSafetyCertificate />
            </div>
            <h3>Reliable</h3>
            <p>
              Queekk consistently provides accurate assistance, minimizing
              downtime and maintaining trust with users.
            </p>
          </div>
          <div className="ben">
            <div className="benIcon">
              <BiNetworkChart />
            </div>
            <h3>Scalable</h3>
            <p>
              Queekk effortlessly scales to accommodate increasing user demand,
              ensuring consistent support quality regardless of workload.
            </p>
          </div>
        </div>
      </div>

      <div className="samples">
        <div className="sampHead">
          <h1>Basic example</h1>
        </div>
        <div className="sampMain">
          <CodeBlock language="html">
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
          </CodeBlock>
          <CodeBlock language="javascript">
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
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}

export default Main;

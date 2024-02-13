import React from "react";
import CodeBlock from "../../../../components/CodeBlock"; // Assuming you have a component for displaying code blocks

const Integration = () => {
  return (
    <div className="documentation__body">
      <h3 className="documentation__section-title">Integration</h3>

      <div className="documentation__content">
        <h4 className="documentation__sub-title">
          Integrating Queekk into your website is a straightforward process.
          Below, you'll find detailed instructions for integrating Queekk into
          HTML and React applications.
        </h4>

        <div className="documentation__sub-section__container">
          <h5 className="documentation__sub-section-title">HTML Integration</h5>
          <p>To integrate Queekk into your HTML website, follow these steps:</p>
          <ol>
            <li>
              Add the Queekk script tag to the <code>&lt;head&gt;</code> section
              of your HTML document. This script tag loads Queekk's JavaScript
              file asynchronously.
            </li>
          </ol>
          <br />
          <br />
          <CodeBlock language="html">
            {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Queekk</title>
    <link rel="stylesheet" href="http://localhost:8080/assistant.css" />
    <script async src="http://localhost:8080/assistant/q-xxxxxxxxx" ></script>
</head>
<body>
    <div id="queekk-container"></div >
</body>
</html>`}
          </CodeBlock>
          <br />
          <br />
          <ol start="2">
            <li>
              Place the{" "}
              <code>&lt;div id="queekk-container"&gt;&lt;/div&gt;</code> tag
              wherever you want Queekk to appear on your website. This div
              serves as the container for Queekk's user interface.
            </li>
          </ol>
        </div>

        <div className="documentation__sub-section__container">
          <h5 className="documentation__sub-section-title">
            React Integration
          </h5>
          <p>
            If you're using React, you can integrate Queekk into your
            application using the following steps:
          </p>
          <ol>
            <li>
              Install the <code>react</code> and <code>react-dom</code> packages
              if you haven't already done so.
            </li>
          </ol>
          <br />
          <br />
          <CodeBlock language="javascript">
            {`import React, { useEffect } from "react";

const MyComponent = () => {
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "http://localhost:8080/assistant.css";
        document.head.appendChild(link);

        const script = document.createElement("script");
        script.src = "http://localhost:8080/assistant/q-xxxxxxxxx";
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            // Queekk methods can be called here
        };
    }, []);

    return (
        <div id="queekk-container"></div>
    );
};

export default MyComponent;`}
          </CodeBlock>
          <br />
          <br />
          <ol start="2">
            <li>
              Once you've completed the integration steps, Queekk will be
              successfully integrated into your website or React application,
              ready to provide instant support to your users.
            </li>
          </ol>
        </div>

        <p className="documentation__conclusion">
          Next, we'll explore how to interact with Queekk and customize its
          behavior to suit your needs.
        </p>
      </div>
    </div>
  );
};

export default Integration;

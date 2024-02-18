import "./Usage.css";
import CodeBlock from "../../../../components/CodeBlock";

const Usage = () => {

  return (
    <div className="documentation__body">
      <div className="document__title">
        <h1>Usage</h1>
        <p>
          Once Queekk is integrated into your website or application, you can
          start interacting with it to provide instant support to your users.
          Below, you'll find a comprehensive guide on how to use Queekk's
          features and functionality.
        </p>
      </div>

      <div className="documentation__content">
        <div className="documentation__sub-section__integrate">
          <div className="integrate__title">
            <h3>
              Interacting with Queekk
            </h3>
            <p>
              Queekk provides various methods that you can use to interact with it
              programmatically. These methods allow you to customize Queekk's
              behavior and respond to user interactions effectively. Here are some
              common methods available on the Queekk instance:
            </p>
          </div>
          <div className="integrate__list__instruction">
            <CodeBlock language="javascript" className="doc__integrate__code">
              {`// SET QUEEKK THEME
setTheme(theme);

// OPEN QUEEKK WITH KEY PRESS
setKeyToOpen(allow, key);

// SET FIRST MESSAGE USER SEES
setIntroMessage(intro);

// SET MAIN COLORS
setMainColors(primary, secondary);`}
            </CodeBlock>
          </div>
        </div>

        <div className="documentation__sub-section__integrate">
          <div className="integrate__title">
            <h3>
              Method Descriptions
            </h3>
          </div>
          <div className="instruction__cont">
            <div className="instruction">
              <div className="no__instruct">
                <span>01</span>
              </div>
              <div className="dis__instruct">
                <p>
                  <strong>setTheme(theme):</strong> Set the theme for Queekk. The{" "}
                  <code>theme</code> parameter specifies the theme to apply to
                  Queekk's user interface.
                </p>
              </div>
            </div>
            <div className="instruction">
              <div className="no__instruct">
                <span>02</span>
              </div>
              <div className="dis__instruct">
                <p>
                  <strong>setKeyToOpen(allow, key):</strong> Configure a key press
                  to open Queekk. Set <code>allow</code> to <code>true</code> to
                  enable key press to open Queekk, and specify the <code>key</code>{" "}
                  to trigger the action.
                </p>
              </div>
            </div>
            <div className="instruction">
              <div className="no__instruct">
                <span>03</span>
              </div>
              <div className="dis__instruct">
                <p>
                  <strong>setIntroMessage(intro):</strong> Set the first message
                  users see when they interact with Queekk for the first time. The{" "}
                  <code>intro</code> parameter specifies the introductory message to
                  display.
                </p>
              </div>
            </div>
            <div className="instruction">
              <div className="no__instruct">
                <span>04</span>
              </div>
              <div className="dis__instruct">
                <p>
                  <strong>setMainColors(primary, secondary):</strong> Set the main
                  colors for Queekk. The <code>primary</code> parameter specifies
                  the primary color, and the <code>secondary</code> parameter
                  specifies the secondary color.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="documentation__sub-section__integrate">
          <div className="integrate__title">
            <h3>Example Usage</h3>
            <p>
              Here's an example of how you can use these methods to customize
              Queekk's behavior:
            </p>
          </div>
          <div className="integrate__list__instruction">
            <CodeBlock language="javascript" className="doc__integrate__code">
              {`// Set Queekk theme to 'dark'
Queekk.setTheme('dark');

// Allow opening Queekk with '/' key
Queekk.setKeyToOpen(true, '/');

// Set the introductory message
Queekk.setIntroMessage('Welcome to our support chat! How can I assist you today?');

// Set main colors to blue and white
Queekk.setMainColors('#3498db', '#ffffff');`}
            </CodeBlock>
          </div>
        </div>
      </div>
      <div className="last__page">
        <p>
          By leveraging these methods, you can tailor Queekk to match your
          brand identity and specific requirements, providing a seamless
          support experience for your users. Explore Queekk's capabilities and
          experiment with different configurations to optimize your customer
          support interactions.
        </p>
      </div>
    </div>
  );
};

export default Usage;

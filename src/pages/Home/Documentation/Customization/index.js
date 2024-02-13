import "./Customization.css";
import CodeBlock from "../../../../components/CodeBlock"; // Assuming you have a component for displaying code blocks

const Customization = () => {
  return (
    <div className="documentation__body">
      <h3 className="documentation__section-title">Customization</h3>

      <div className="documentation__content">
        <h4 className="documentation__sub-title">
          Queekk offers a range of customization options to tailor its
          appearance and behavior to suit your website's branding and specific
          requirements. In this section, we'll explore how you can customize
          Queekk to create a seamless integration with your website.
        </h4>

        <div className="documentation__sub-section__container">
          <h5 className="documentation__sub-section-title">
            Theme Customization
          </h5>
          <p>
            You can customize Queekk's theme to match your website's design
            aesthetic. Whether you prefer a light or dark theme, Queekk allows
            you to choose the color scheme that best complements your brand.
            Here's how you can set the theme:
          </p>
          <br />
          <br />
          <CodeBlock language="javascript">
            {`Queekk.setTheme('dark'); // Set Queekk theme to dark`}
          </CodeBlock>
        </div>

        <div className="documentation__sub-section__container">
          <h5 className="documentation__sub-section-title">
            Key Press Configuration
          </h5>
          <p>
            Queekk allows you to configure a key press to open the chat
            interface, providing users with a convenient way to access support.
            You can specify which key triggers the chat interface and whether to
            allow this functionality. Here's how you can configure the key
            press:
          </p>
          <br />
          <br />
          <CodeBlock language="javascript">
            {`Queekk.setKeyToOpen(true, '/'); // Allow opening Queekk with '/' key`}
          </CodeBlock>
        </div>

        <div className="documentation__sub-section__container">
          <h5 className="documentation__sub-section-title">
            Introductory Message
          </h5>
          <p>
            Set the introductory message that users see when they first interact
            with Queekk. You can personalize this message to welcome users and
            provide guidance on how to use the chat interface. Here's how you
            can set the introductory message:
          </p>
          <br />
          <br />
          <CodeBlock language="javascript">
            {`Queekk.setIntroMessage('Welcome to our support chat! How can I assist you today?');`}
          </CodeBlock>
        </div>

        <div className="documentation__sub-section__container">
          <h5 className="documentation__sub-section-title">Main Colors</h5>
          <p>
            Customize the main colors used in Queekk's user interface to align
            with your website's color scheme. You can specify primary and
            secondary colors to ensure consistency with your branding. Here's
            how you can set the main colors:
          </p>
          <br />
          <br />
          <CodeBlock language="javascript">
            {`Queekk.setMainColors('#3498db', '#ffffff'); // Set main colors to blue and white`}
          </CodeBlock>
        </div>

        <p className="documentation__conclusion">
          By leveraging these customization options, you can seamlessly
          integrate Queekk into your website while maintaining brand consistency
          and enhancing the user experience. Experiment with different
          configurations to create a personalized support experience for your
          users.
        </p>
      </div>
    </div>
  );
};

export default Customization;

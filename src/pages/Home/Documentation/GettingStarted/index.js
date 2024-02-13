import "./GettingStarted.css"

const GettingStarted = () => {
  return (
    <div className="documentation__body">
      <h3 className="documentation__section-title">Getting Started</h3>

      <div className="documentation__content">
        <h4 className="documentation__sub-title">
          Welcome to Queekk! This section will guide you through the process of
          getting started with Queekk on your website.
        </h4>

        <div className="documentation__sub-section__container">
          <h5 className="documentation__sub-section-title">
            Installation Guide
          </h5>
          <p>
            Before integrating Queekk into your website, you'll need to follow
            these steps:
          </p>
          <ol>
            <li>
              Sign Up: Create an account on the Queekk platform to access the
              necessary tools and resources.
            </li>
            <li>
              Organization Setup: Register your organization on Queekk and
              provide relevant information and documents about your company to
              personalize the assistant's knowledge base.
            </li>
            <li>
              API Key: Obtain your OpenAI API key (free) and provide it to
              Queekk during the setup process. If you're using a paid plan,
              Queekk will use its keys.
            </li>
            <li>
              Token Generation: Generate a token on Queekk's platform, which
              you'll need to place on your website to enable the integration.
            </li>
            <li>
              HTML Integration: Add the Queekk script tag to your HTML code,
              along with the container div where Queekk will be displayed.
            </li>
            <li>
              React Integration: If you're using React, follow the provided code
              example to integrate Queekk into your application.
            </li>
          </ol>
        </div>

        <div className="documentation__sub-section__container">
          <h5 className="documentation__sub-section-title">Basic Setup</h5>
          <p>
            Once you've completed the installation steps, you're ready to start
            using Queekk on your website. The basic setup involves adding
            Queekk's script tag to your website's HTML code and configuring any
            desired customization options.
          </p>
        </div>

        <div className="documentation__sub-section__container">
          <h5 className="documentation__sub-section-title">
            Configuration Options
          </h5>
          <p>
            Queekk offers various configuration options to customize its
            behavior and appearance on your website. You can set the theme,
            configure a key press to open Queekk, set the first message users
            see, and define main colors to match your brand identity.
          </p>
        </div>

        <p className="documentation__conclusion">
          Now that you've completed the setup and configuration, you're ready to
          integrate Queekk into your website and start providing instant,
          personalized support to your users. Next, we'll explore how to
          interact with Queekk and make the most of its features.
        </p>
      </div>
    </div>
  );
};

export default GettingStarted;

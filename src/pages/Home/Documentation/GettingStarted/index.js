import "./GettingStarted.css"

const GettingStarted = () => {
  const install = [
    {
      id: 1,
      head: 'Sign Up',
      text: 'Create an account on the Queekk platform to access the necessary tools and resources.'
    },
    {
      id: 2,
      head: 'Organization Setup',
      text: 'Register your organization on Queekk and provide relevant information and documents about your company to     personalize the assistant\'s knowledge base.'
    },
    {
      id: 3,
      head: 'API key',
      text: 'Obtain your OpenAI API key (free) and provide it to Queekk during the setup process. If you\'re using a paid plan, Queekk will use its keys.'
    },
    {
      id: 4,
      head: 'Token Generation',
      text: 'Generate a token on Queekk\'s platform, which you\'ll need to place on your website to enable the integration.'
    },
    {
      id: 5,
      head: 'HTML Integration',
      text: 'Add the Queekk script tag to your HTML code, along with the container div where Queekk will be displayed.'
    },
    {
      id: 6,
      head: 'React Integration',
      text: 'If you\'re using React, follow the provided code example to integrate Queekk into your application.'
    },
  ]
  return (
    <div className="documentation__body">
      <div className="document-title">
        <h1>Getting Started</h1>
        <p>
          Welcome to Queekk! This section will guide you through the process of
        </p>
      </div>

      <div className="documentation__content">
      <div className="documentation__sub-section__integrate">
        <div className="integrate__title">
          <h3>
            Installation Guide
          </h3>
          <p>
            Before integrating Queekk into your website, you'll need to follow
            these steps:
          </p>
        </div>
        <div className="doc__benefits">
          {
            install.map((ben) => (
              <div key={ben.id} className="doc__ben">
                <div className="doc__ben__head">
                  <h3>{ben.head}:</h3>
                </div>
                <div className="doc__ben__txt">
                  <p>{ben.text}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

        <div className="documentation__sub-section__integrate">
          <div className="integrate__title">
            <h3>Basic Setup</h3>
            <p>
              Once you've completed the installation steps, you're ready to start
              using Queekk on your website. The basic setup involves adding
              Queekk's script tag to your website's HTML code and configuring any
              desired customization options.
            </p>
          </div>
        </div>

        <div className="documentation__sub-section__integrate">
          <div className="integrate__title">
            <h3>
              Configuration Options
            </h3>
            <p>
              Queekk offers various configuration options to customize its
              behavior and appearance on your website. You can set the theme,
              configure a key press to open Queekk, set the first message users
              see, and define main colors to match your brand identity.
            </p>
          </div>
        </div>
      </div>

      <div className="last__page">
        <p>
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

import "./Troubleshooting.css";

const Troubleshooting = () => {
  const notWorking = [
    {
      id: 1,
      head: 'Queekk not loading on the website:',
      text: 'If Queekk fails to load on your website, ensure that you\'ve correctly added the script tag to your HTML document or React application. Check the console for any error messages that may indicate the cause of the issue.'
    },
    {
      id: 2,
      head: 'Incorrect API key:',
      text: 'If Queekk is not functioning correctly, verify that you\'ve provided the correct OpenAI API key during the setup process. Ensure that the key is valid and has the necessary permissions to access Queekk\'s features.'
    },
    {
      id: 3,
      head: 'Integration errors:',
      text: 'If you\'re encountering errors during the integration process, double-check your code for any syntax errors or misconfigurations. Compare your code with the provided examples in the documentation to ensure accuracy.'
    },
    {
      id: 4,
      head: 'Theme or customization not applying:',
      text: 'If your theme or customization settings are not being applied to Queekk, verify that you\'re calling the customization methods correctly and passing the appropriate parameters. Check for any conflicts with existing CSS styles that may be overriding Queekk\'s styles.'
    },
    {
      id: 5,
      head: 'Performance issues:',
      text: 'If Queekk is experiencing performance issues, such as slow response times or laggy behavior, consider optimizing your website\'s performance by minimizing the number of scripts and resources loaded on the page. Additionally, ensure that your hosting environment can handle the load generated by Queekk.'
    },
  ]
  return (
    <div className="documentation__body">
      <div className="document-title">
        <h1>Troubleshooting</h1>
        <p>
          In this section, we'll cover common issues you may encounter when
          using Queekk and provide solutions to resolve them. If you're
          experiencing difficulties with Queekk, refer to the troubleshooting
          guide below for assistance.
        </p>
      </div>

      <div className="documentation__content">
        <div className="documentation__sub-section__integrate">
          <div className="integrate__title">
            <h3>
              Common Issues and Solutions
            </h3>
          </div>
          <div className="integrate__list__instruction">
            {
              notWorking.map((work) => (
                <div key={work.id} className="instruction">
                  <div className="no__instruct">
                    <span>{work.id <= 9 ? `0${work.id}` : work.id}</span>
                  </div>
                  <div className="dis__instruct">
                    <h3>{work.head}</h3>
                    <p>{work.text}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="documentation__sub-section__integrate">
          <div className="integrate__title">
            <h3>
              Error Messages and Debugging Tips
            </h3>
          </div>
          <div className="instruction">
            <div className="dis__instruct">
              <p>
                When troubleshooting issues with Queekk, pay attention to any error
                messages or warnings displayed in the browser console. These
                messages can provide valuable insights into the root cause of the
                problem and guide you towards a solution. Additionally, consider
                testing Queekk in different browsers and environments to identify
                any compatibility issues.
              </p>
              <p>
                If you're unable to resolve the issue on your own, don't hesitate to
                reach out to Queekk's support team for assistance. Provide detailed
                information about the problem you're experiencing, including any
                error messages or steps to reproduce the issue, to help expedite the
                troubleshooting process.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="last__page">
        <p>
          By following these troubleshooting guidelines and leveraging the
          resources available, you can resolve issues with Queekk effectively
          and ensure a seamless experience for your users.
        </p>
      </div>
    </div>
  );
};

export default Troubleshooting;
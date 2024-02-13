import "./Troubleshooting.css";

const Troubleshooting = () => {
  return (
    <div className="documentation__body">
      <h3 className="documentation__section-title">Troubleshooting</h3>

      <div className="documentation__content">
        <p>
          In this section, we'll cover common issues you may encounter when
          using Queekk and provide solutions to resolve them. If you're
          experiencing difficulties with Queekk, refer to the troubleshooting
          guide below for assistance.
        </p>

        <div className="documentation__sub-section__container">
          <h4 className="documentation__sub-title">
            Common Issues and Solutions
          </h4>
          <ul>
            <li>
              <strong>Queekk not loading on the website:</strong> If Queekk
              fails to load on your website, ensure that you've correctly added
              the script tag to your HTML document or React application. Check
              the console for any error messages that may indicate the cause of
              the issue.
            </li>
            <li>
              <strong>Incorrect API key:</strong> If Queekk is not functioning
              correctly, verify that you've provided the correct OpenAI API key
              during the setup process. Ensure that the key is valid and has the
              necessary permissions to access Queekk's features.
            </li>
            <li>
              <strong>Integration errors:</strong> If you're encountering errors
              during the integration process, double-check your code for any
              syntax errors or misconfigurations. Compare your code with the
              provided examples in the documentation to ensure accuracy.
            </li>
            <li>
              <strong>Theme or customization not applying:</strong> If your
              theme or customization settings are not being applied to Queekk,
              verify that you're calling the customization methods correctly and
              passing the appropriate parameters. Check for any conflicts with
              existing CSS styles that may be overriding Queekk's styles.
            </li>
            <li>
              <strong>Performance issues:</strong> If Queekk is experiencing
              performance issues, such as slow response times or laggy behavior,
              consider optimizing your website's performance by minimizing the
              number of scripts and resources loaded on the page. Additionally,
              ensure that your hosting environment can handle the load generated
              by Queekk.
            </li>
          </ul>
        </div>
        <div className="documentation__sub-section__container">
          <h4 className="documentation__sub-title">
            Error Messages and Debugging Tips
          </h4>
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
        <p className="documentation__conclusion">
          By following these troubleshooting guidelines and leveraging the
          resources available, you can resolve issues with Queekk effectively
          and ensure a seamless experience for your users.
        </p>
      </div>
    </div>
  );
};

export default Troubleshooting;

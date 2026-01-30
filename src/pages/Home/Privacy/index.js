import React, { useEffect } from "react";
import "../Legal.css";
import Footer from "../../../components/Footer";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="legal-page">
        <div className="legal-header">
          <h1>Privacy Policy</h1>
          <p>Last updated: January 2024</p>
        </div>

        <div className="legal-content">
          <p>
            This page informs you of our policies regarding the collection, use,
            and disclosure of personal data when you use our Service and the
            choices you have associated with that data.
          </p>

          <h2>1. Information Collection And Use</h2>
          <p>
            We collect several different types of information for various
            purposes to provide and improve our Service to you.
          </p>
          <ul>
            <li>Personal Data (Email, Name, etc.)</li>
            <li>Usage Data</li>
            <li>Cookies and Usage Data</li>
          </ul>

          <h2>2. Use of Data</h2>
          <p>Queekk uses the collected data for various purposes:</p>
          <ul>
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To provide customer care and support</li>
            <li>To provide analysis or valuable information so that we can improve the Service</li>
            <li>To monitor the usage of the Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>

          <h2>3. Transfer Of Data</h2>
          <p>
            Your information, including Personal Data, may be transferred to —
            and maintained on — computers located outside of your state,
            province, country or other governmental jurisdiction where the data
            protection laws may differ than those from your jurisdiction.
          </p>

          <h2>4. Security Of Data</h2>
          <p>
            The security of your data is important to us, but remember that no
            method of transmission over the Internet, or method of electronic
            storage is 100% secure. While we strive to use commercially
            acceptable means to protect your Personal Data, we cannot guarantee
            its absolute security.
          </p>

          <h2>5. Service Providers</h2>
          <p>
            We may employ third party companies and individuals to facilitate
            our Service ("Service Providers"), to provide the Service on our
            behalf, to perform Service-related services or to assist us in
            analyzing how our Service is used.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at privacy@queekk.com.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;

import React, { useEffect } from "react";
import "../Legal.css";
import Footer from "../../../components/Footer";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="legal-page">
        <div className="legal-header">
          <h1>Terms of Service</h1>
          <p>Last updated: January 2024</p>
        </div>

        <div className="legal-content">
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service")
            carefully before using the Queekk website and service operated by
            Queekk ("us", "we", or "our").
          </p>

          <h2>1. Accounts</h2>
          <p>
            When you create an account with us, you must provide us information
            that is accurate, complete, and current at all times. Failure to do
            so constitutes a breach of the Terms, which may result in immediate
            termination of your account on our Service.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality
            are and will remain the exclusive property of Queekk and its
            licensors. The Service is protected by copyright, trademark, and
            other laws of both the United States and foreign countries.
          </p>

          <h2>3. Links To Other Web Sites</h2>
          <p>
            Our Service may contain links to third-party web sites or services
            that are not owned or controlled by Queekk. We have no control over,
            and assume no responsibility for, the content, privacy policies, or
            practices of any third-party web sites or services.
          </p>

          <h2>4. Termination</h2>
          <p>
            We may terminate or suspend access to our Service immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach the Terms.
          </p>

          <h2>5. Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material we will try to
            provide at least 30 days notice prior to any new terms taking
            effect.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at
            support@queekk.com.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;

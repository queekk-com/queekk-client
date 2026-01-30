import Footer from "../../../components/Footer";
import Header from "./Header";
import Main from "./Main";
import "./LandingPage.css";
import { useEffect } from "react";

function LandingPage() {
  useEffect(() => {
    const serverUrl = process.env.REACT_APP_SERVER;
    const queekkKey = process.env.REACT_APP_QUEEKK_KEY;

    if (!serverUrl || !queekkKey) {
      console.warn(
        "Queekk environment variables missing. Chat widget will not load.",
      );
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${serverUrl}/assistant.css`;
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = `${serverUrl}/assistant/${queekkKey}`;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="landing-page">
      <Header />
      <Main />
      <Footer />
      <div id="queekk-container" />
    </div>
  );
}

export default LandingPage;

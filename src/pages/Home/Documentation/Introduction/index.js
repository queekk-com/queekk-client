import "./Introduction.css";

const Introduction = () => {
  const keyFet = [
    {
      id: 1,
      head: 'Instant Support',
      text: 'ueekk offers real-time responses to user inquiries, reducing wait times and enhancing user satisfaction.'
    },
    {
      id: 2,
      head: 'Accuracy',
      text: 'Powered by state-of-the-art natural language processing models, Queekk delivers precise and relevant answers to user queries.'
    },
    {
      id: 3,
      head: 'Customization',
      text: 'Organizations can tailor Queekk to match their brand identity and specific requirements, ensuring a seamless integration into their website.'
    },
    {
      id: 4,
      head: 'Scalability',
      text: 'Queekk effortlessly scales to accommodate increasing user demand, ensuring consistent support quality regardless of workload.'
    },
    {
      id: 5,
      head: 'Enhanced User Experience',
      text: 'By providing swift and efficient support, Queekk helps organizations elevate their customer service experience, leading to higher user engagement and retention rates.'
    },
  ];

  const useCases = [
    {
      id: 1,
      head: 'E-commerce platforms',
      text: 'Offering product recommendations, answering FAQs, and resolving customer queries.'
    },
    {
      id: 2,
      head: 'Educational websites',
      text: 'Providing instant support to students and educators, offering learning resources, and answering academic-related questions.'
    },
    {
      id: 3,
      head: 'Service-based businesses',
      text: 'Assisting clients with booking appointments, providing service information, and resolving customer inquiries.'
    },
    {
      id: 4,
      head: 'Informational websites',
      text: 'Offering guidance, answering inquiries, and providing resources related to specific topics or industries.'
    }
  ]
  return (
    <div className="documentation__body">
      <div className="document-title">
        <h1>Introduction</h1>
        <p>
          Queekk is an AI-powered chat assistant designed to revolutionize
          customer support interactions on websites. With its seamless
          integration and advanced capabilities, Queekk empowers organizations
          to provide instant, accurate, and personalized assistance to their
          users.
        </p>
      </div>

      <div className="documentation__content">
        <div className="documentation__sub-section__container">
          <div className="document__title__head">
            <h1>
              Key Features and Benefits
            </h1>
          </div>
          <div className="doc__benefits">
            {
              keyFet.map((ben) => (
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

        <div className="documentation__sub-section__container">
          <div className="document__title__head">
            <h1>Use Cases</h1>
            <p>
              Queekk is suitable for a wide range of industries and applications,
              including:
            </p>
          </div>
          <div className="doc__use__cases">
            {
              useCases.map((use) => (
                <div key={use.id} className="doc__use">
                  <div className="doc__use__head">
                    <h3>{use.head}:</h3>
                  </div>
                  <div className="doc__use__txt">
                    <p>{use.text}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="last__page">
        <p className="documentation__conclusion">
          Whether you're a small business or a large enterprise, Queekk empowers
          you to deliver exceptional customer support experiences, driving user
          satisfaction and loyalty. Get started with Queekk today and take your
          customer support to the next level!
        </p>
      </div>
    </div>
  );
};

export default Introduction;

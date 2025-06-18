// app/data/projects.js
const projects = [
  {
    slug: "politicians-speech-analyzer",
    title: "Politicians Speech Analyzer Web App",
    image: "/politics-speech-analyzer.png",
    description: `
This web application enables automated analysis of Hindi political speeches using clustering algorithms and unsupervised learning techniques.

🛠️ Technologies Used
Frontend: HTML, CSS, JavaScript, Streamlit
Backend: Python, Scikit-learn, Pandas, NLTK

💡 My Contributions and Enhancements
- Developed PDF/Text upload feature for Kruti Dev conversion and clustering.
- Implemented TF-IDF vectorization with KMeans clustering.
- Designed visual UI using Streamlit with Matplotlib-based charting.

✅ What I Learned
Explored natural language processing (NLP) in Hindi with political relevance and fine-tuned clustering parameters for better topic separation.
    `.trim(),
    liveLink: "https://ed36-34-121-99-71.ngrok-free.app/",
    githubLink: "https://github.com/Pratikkumar201/speech-analyzer",
  },
  {
    slug: "bhu-news-website",
    title: "BHU News Website",
    image: "/BHU-news_site.png",
    description: `
The BHU News Website serves as the official digital media and public relations portal for Banaras Hindu University. It features updates about campus activities, achievements, events, student initiatives, and institutional announcements.

🛠️ Technologies Used
Frontend: HTML, Tailwind CSS, React, Next.js, JavaScript  
Backend: Node.js, GraphQL  
Other: GitHub (Version Control), Vercel (Deployment), Media Asset Tools

💡 My Contributions and Enhancements
- Enhanced UI consistency and responsiveness using Tailwind and component-based layout.
- Refactored header, navigation, and "BHU in Media" carousel section.
- Integrated GraphQL API for efficient data fetching.
- Added support for markdown/CMS-based content editing.
- Refactored into reusable components: NewsCard, EventSection, MediaList.

✅ What I Learned
Improved data management and real-world collaboration with PR teams and developers. Learned GraphQL integration, content optimization, and responsive design best practices.
    `.trim(),
    liveLink: "https://news.bhu.ac.in",
    githubLink: "https://github.com/Pratikkumar201/bhu-news",
  },
  {
    slug: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection (Machine Learning)",
    image: "/credit-card-fraud.png",
    description: `
Developed a fraud detection model using logistic regression on anonymized transaction data to classify legitimate vs fraudulent activities.

🛠️ Technologies Used
Python, Pandas, Scikit-learn, Matplotlib

💡 My Contributions
- Cleaned and preprocessed anonymized credit card data.
- Trained multiple classifiers and optimized using ROC-AUC metrics.
- Evaluated class imbalance with precision-recall tradeoff.

✅ What I Learned
Gained insights into binary classification, overfitting control, and cost-sensitive model evaluation.
    `.trim(),
    githubLink: "https://github.com/Pratikkumar201/credit-card-fraud"
  },
  {
    slug: "qr-code-generator",
    title: "QR Code Generator WebApp",
    image: "/qr-code.png",
    description: `Built a WebApp named QR Code Generator for Information and Public Relations office, BHU for generating QR to paste in press release or social media posts or in newsletters.
    I use Python for backend, and React.js, Node.js for frontend.`.trim(),
    githubLink: ""
  },
  {
    slug: "human-activity-recognition",
    title: "Human Activity Recognition (Deep Learning)",
    image: "/project-activity.jpg",
    description: `
Implemented deep learning models to classify physical human activities from wearable sensor time-series datasets.

🛠️ Technologies Used
Python, TensorFlow, Keras, NumPy, Matplotlib

💡 My Contributions
- Preprocessed and reshaped multivariate time-series data.
- Built CNN-LSTM architecture for sequence modeling.
- Tuned model with callbacks and dropout for performance.

✅ What I Learned
Hands-on with LSTM-CNN hybrid models for sensor data classification. Improved knowledge in temporal data processing.
    `.trim(),
    githubLink: "https://github.com/Pratikkumar201/human-activity-recognition"
  },
  {
    slug: "hr-analytics-dashboard",
    title: "HR Analytics Dashboard (Power BI)",
    image: "/hr-dashboard.jpeg",
    description: `
🛠️ Technologies Used  
Tech Stack: Power BI, DAX, Excel, Power Query

💡 My Contributions and Enhancements  
Interactive Visuals  
- Created slicers, filters, and KPI cards.  
- Designed HR attrition drilldowns and departmental views.

Data Modeling  
- Cleaned Excel data in Power Query.  
- Applied DAX to create dynamic metrics.

✅ What I Learned  
- Real-world dashboarding best practices.  
- Writing optimized DAX formulas.

🔧 Overall Impact  
- Delivered actionable HR insights.  
- Improved visibility into employee trends.
  `.trim(),
    githubLink: ""
  },
  {
    slug: "mcdonald-market-analysis",
    title: "McDonald's Market Basket Analysis",
    image: "/project-mcd.jpg",
    description: `
Performed market basket analysis using association rule mining on transaction data to discover buying patterns among McDonald's customers.

🛠️ Technologies Used
Python, Pandas, MLxtend, Apriori Algorithm

💡 My Contributions
- Generated frequent itemsets using Apriori.
- Derived lift, confidence, and support metrics.
- Visualized rules using heatmaps and graphs.

✅ What I Learned
Gained hands-on experience in unsupervised market analysis and transactional data mining.
    `.trim(),
    githubLink: "https://github.com/Pratikkumar201/mcdonald-market-analysis"
  },
];

export default projects;

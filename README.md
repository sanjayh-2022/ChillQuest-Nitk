# ChillQuest-Nitk
IPO Document Analysis with AI (RedHeist)
Project Overview
RedHeist is an innovative platform designed to analyze IPO (Initial Public Offering) documents using machine learning models to predict growth potential and risk classification. By processing DRHP (Draft Red Herring Prospectus) and RHP (Red Herring Prospectus) documents, the platform extracts key financial data, legal terminology, and company-specific metrics, presenting them in a user-friendly dashboard.

The project is aimed at simplifying the process of IPO document analysis, making it more accessible for investors and analysts to make informed decisions.

Key Features
Document Upload and Analysis: Upload IPO-related documents (DRHP and RHP) for automatic analysis.
Growth Potential Prediction: Utilizes machine learning models to predict the potential growth of a company post-IPO.
Risk Classification: Classifies IPOs into risk categories, helping investors assess the safety of their investments.
Interactive Dashboard: Presents the extracted data and predictions on a visually appealing, user-friendly dashboard.
Chatbot Integration: "The Professor" chatbot, designed using Plotch.ai, provides conversational insights and recommendations based on the data.
Technologies Used
Machine Learning Model: A custom regression model used to predict growth potential and classify risk.
Plotch.ai: Used to design "The Professor," the intelligent chatbot integrated into the platform to interact with users and provide insights.
Frontend: Built with Next.js, Tailwind CSS, and DaisyUI for an intuitive and responsive UI.
Backend: Node.js, Express, and MongoDB for data processing, storage, and API management.
Deployment: Docker for containerization and easy deployment.
Setup Instructions
1. Clone the repository
bash
Copy code
git clone https://github.com/your-username/redheist.git
cd redheist
2. Install dependencies
bash
Copy code
npm install
3. Environment Configuration
Create a .env file in the root of your project and configure the necessary environment variables:

bash
Copy code
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
PORT=your_preferred_port
4. Run the project
bash
Copy code
npm run dev
This will start the server on http://localhost:3000. Open the URL in your browser to access the application.

5. Upload IPO Documents
Once the project is running, users can upload DRHP and RHP files through the dashboard. The system will automatically analyze and display the data.

How it Works
Document Upload: The user uploads DRHP or RHP documents through the UI.
Data Extraction: The platform uses Natural Language Processing (NLP) and Optical Character Recognition (OCR) techniques to extract key data points from the documents, including financial metrics and legal terms.
Predictive Modeling: The regression model processes the data to provide predictions on the company's growth potential and classifies the IPO's associated risks.
Interactive Insights: Users can interact with "The Professor" chatbot, which uses the insights from the processed data to answer questions and offer investment recommendations.
Challenges & Solutions
Different Domain Complexity: IPO documents contain a combination of financial, legal, and company-specific data, making them more complex than other data types. We tackled this by designing a custom solution to handle the unique structure and terminology of these documents.

Ensuring Predictive Accuracy: Extracting raw data was only half the battle; ensuring that the model provided meaningful and accurate insights was key. We solved this by using a single regression model, optimizing it for both growth prediction and risk classification.

Future Improvements
Model Enhancements: Improving predictive accuracy by integrating more complex models or additional data sources.
Broader Document Support: Expanding the types of documents the system can analyze, including reports from different industries or regulatory filings.
Enhanced Chatbot Features: Adding more conversational abilities to "The Professor" for a richer user experience.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Plotch.ai for providing the tools to design "The Professor" chatbot and enhance user interaction.
Open-source contributors and the wider community for their support.

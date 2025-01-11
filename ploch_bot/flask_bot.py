from flask import Flask, request, jsonify
import os
from groclake.cataloglake import CatalogLake
from groclake.modellake import ModelLake
from groclake.datalake import DataLake
from groclake.vectorlake import VectorLake
from flask_cors import CORS


GROCLAKE_API_KEY = 'f0935e4cd5920aa6c7c996a5ee53a70f'
GROCLAKE_ACCOUNT_ID = 'f978f0105a30d3905c727707cdfe2ff0'

os.environ['GROCLAKE_API_KEY'] = GROCLAKE_API_KEY
os.environ['GROCLAKE_ACCOUNT_ID'] = GROCLAKE_ACCOUNT_ID


model_lake = ModelLake()
data_lake = DataLake()
vector_lake = VectorLake()

app = Flask(__name__)
CORS(app)

def format_with_line_breaks(text):
    return text.replace('. ', '.\n')

@app.route('/process_prompt', methods=['POST'])
@app.route('/process_prompt', methods=['POST'])
def process_prompt():
    data = request.get_json()
    user_prompt = data.get('prompt')

    if not user_prompt:
        return jsonify({"error": "Prompt is required"}), 400

    payload = {
        "messages": [
            {"role": "system", "content": "You are a financial assistant specializing in providing accurate, relevant, and detailed information on financial topics. Your primary focus is on IPOs (Initial Public Offerings), DRHPs (Draft Red Herring Prospectuses), and IPO analysis. You are an expert in evaluating DRHP documents, analyzing financial metrics, predicting IPO-related outcomes, and assessing market sentiment. Additionally, you offer insights into investment strategies, market trends, portfolio management, risk assessment, and economic indicators. When addressing user queries, prioritize IPO analysis, including expected listing price predictions, performance evaluations, risk indices, and regulatory considerations. Respond with clear, concise, and actionable insights grounded in financial principles, detailed data analysis, and industry best practices. Avoid unrelated topics and ensure your answers are tailored to the user's financial interests, especially those related to IPOs and DRHP analysis.Generate only five lines which contains very usefull information."},
            {"role": "user", "content": user_prompt}
        ]
    }

    try:
        chat_response = model_lake.chat_complete(payload)

        if isinstance(chat_response, dict) and "answer" in chat_response:
            chat_answer = chat_response["answer"]
           
            chat_answer = format_with_line_breaks(chat_answer)
        else:
            return jsonify({"error": "Invalid response from chat model"}), 500

        response_data = {
            "status": "success",
            "response": chat_answer
        }

        return jsonify(response_data)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)

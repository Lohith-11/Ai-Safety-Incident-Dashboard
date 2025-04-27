
export const initialIncidents = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in job recommendation system, resulting in unfair distribution of opportunities. Analysis showed a 23% bias toward specific educational backgrounds and a 18% bias against certain age groups. This incident highlights the need for more robust fairness metrics in recommendation systems.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "Large Language Model provided incorrect safety procedure information when queried about emergency protocols in a manufacturing setting. The model confidently described procedures that would have endangered workers if followed. This represents a serious risk when AI systems are deployed in safety-critical environments without proper validation mechanisms.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata when responding to specific query patterns. The exposed data included user interaction frequency and general topic preferences but no personally identifiable information. This demonstrates the need for comprehensive privacy testing of conversational AI systems.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  },
  {
    id: 4,
    title: "Facial Recognition False Positives",
    description: "Security system using facial recognition produced an unusually high rate (12%) of false positive matches during a system test. Investigation revealed poor performance under specific lighting conditions and with certain demographic groups. This incident underscores the importance of diverse testing datasets and regular performance audits.",
    severity: "Medium",
    reported_at: "2025-03-25T16:45:00Z"
  },
  {
    id: 5,
    title: "AI System Resource Overconsumption",
    description: "Production deployment of an AI model led to unexpected server resource consumption, causing system outages for approximately 45 minutes. The model's resource requirements scaled non-linearly with input complexity, which wasn't caught during testing. This incident highlights the need for robust load testing and resource monitoring for AI systems.",
    severity: "Medium",
    reported_at: "2025-03-18T08:30:00Z"
  },
  {
    id: 6,
    title: "Incorrect Sentiment Analysis in Healthcare",
    description: "An AI-powered sentiment analysis tool misclassified patient feedback as positive despite expressing serious dissatisfaction with care. Review revealed a 27% misclassification rate on healthcare-specific datasets. This stresses the need for domain-specific tuning and validation of NLP models.",
    severity: "High",
    reported_at: "2025-04-05T11:20:00Z"
  },
  {
    id: 7,
    title: "Automated Trading Bot Loss",
    description: "A machine learning-based trading bot misinterpreted market signals during a volatile period, leading to significant financial losses. Postmortem showed the model was overfitted to low-volatility market data and lacked sufficient guardrails during anomalies.",
    severity: "High",
    reported_at: "2025-04-10T13:45:00Z"
  },
  {
    id: 8,
    title: "Voice Assistant Misinterpretation",
    description: "A voice-controlled home automation system misinterpreted ambient conversations as commands, resulting in unintended device activations. Root cause analysis pointed to insufficient filtering of background noise and overlapping speech.",
    severity: "Medium",
    reported_at: "2025-03-22T07:10:00Z"
  },
  {
    id: 9,
    title: "Bias in Loan Approval Model",
    description: "An AI loan approval model was found to reject applications from certain postal codes at a disproportionately higher rate, indirectly reflecting socioeconomic biases. Further analysis showed a 15% lower approval rate for affected areas compared to the baseline.",
    severity: "High",
    reported_at: "2025-04-02T15:25:00Z"
  },
  {
    id: 10,
    title: "Autonomous Vehicle Sensor Glitch",
    description: "An autonomous test vehicle failed to detect certain road signs under heavy rain conditions due to water interference with sensor readings. Temporary suspension of testing was enforced while robustness improvements were implemented.",
    severity: "High",
    reported_at: "2025-03-30T12:00:00Z"
  },
  {
    id: 11,
    title: "Content Moderation Over-Filtering",
    description: "An AI-based content moderation system mistakenly flagged 8% of benign user posts as inappropriate, severely affecting platform engagement metrics. The incident pointed to an overly aggressive threshold setting and insufficient human-in-the-loop validation.",
    severity: "Medium",
    reported_at: "2025-03-28T17:30:00Z"
  },
  {
    id: 12,
    title: "Synthetic Data Privacy Breach",
    description: "Synthetic datasets generated for testing inadvertently contained traces of real user data, posing a potential privacy risk. An audit revealed that 2% of the synthetic samples could be linked back to original users with moderate confidence.",
    severity: "High",
    reported_at: "2025-04-08T10:50:00Z"
  },
  {
    id: 13,
    title: "Ad Targeting Algorithm Misfire",
    description: "An ad delivery algorithm displayed ads for sensitive topics to inappropriate audiences, leading to multiple complaints. Root cause traced to mislabeled training data and lack of ethical review for content categorization.",
    severity: "Medium",
    reported_at: "2025-03-19T08:40:00Z"
  },
  {
    id: 14,
    title: "Robotic Process Automation (RPA) Loop",
    description: "An RPA bot entered an unintended infinite loop during a scheduled financial reconciliation task, causing significant backlog and system performance degradation. Investigation showed missing fail-safes for unexpected data structures.",
    severity: "Medium",
    reported_at: "2025-03-26T06:55:00Z"
  },
  {
    id: 15,
    title: "Translation Model Cultural Insensitivity",
    description: "An AI translation service produced culturally insensitive translations in a multilingual campaign, resulting in public backlash. The incident stemmed from insufficient culturally-aware evaluation during model development.",
    severity: "Low",
    reported_at: "2025-04-04T09:05:00Z"
  }
];
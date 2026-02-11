/**
 * HomeCare Arena AI Chatbot
 * Smart chatbot with knowledge base about services
 */

const ChatbotConfig = {
  name: "Homecare Arena Bot",
  description: "A friendly chatbot to assist you with information about Homecare Arena's home care services in Accra.",
  version: "1.0",
  apikey: 'API_KEY',
  useAI: false // AI disabled — using local KnowledgeBase only
};

// Knowledge base about HomeCare Arena services
const KnowledgeBase = {
  greetings: [
    "Hello! Welcome to Homecare Arena. How can I assist you today?",
    "Hi there! I'm here to help you with information about our home care services.",
    "Welcome to Homecare Arena! What would you like to know?",
    "Hi! I'm your Homecare Arena assistant. How can I help you today?",
    "Hello! I'm here to provide information about our services. What would you like to know?",
    "Welcome! I'm your Homecare Arena chatbot. How can I assist you today?",
    "Hi! I'm here to help you with any questions about our home care services. What would you like to know?"
  ],
  
  services: {
    keywords: ['service', 'services', 'offer', 'what do you do', 'what services', 'care', 'home care', 'nursing', 'elderly care', 'post-surgery support'],
    response: `Homecare Arena offers comprehensive home care services in Accra:<br><br>

📋 Our Services Include:<br><br>

<ul>
<li>Home Nursing - Professional nursing care at your home</li>
<li>Elderly Care - Compassionate support for seniors</li>
<li>Post-Surgery Support - Recovery assistance and monitoring</li>
<li>Personalized Healthcare - Customized care plans</li>
<li>Health Monitoring - Regular check-ups and vital signs monitoring</li>
</ul>
Each service is delivered by trained, compassionate healthcare professionals. Would you like to know more about any specific service?`
  },

  about: {
    keywords: ['about', 'who are you', 'company', 'tell me about', 'background', 'info', 'information', 'details', 'what is homecare arena'],
    response: `About Homecare Arena: <br><br>

Homecare Arena is a professional home healthcare provider in Accra, dedicated to delivering high-quality nursing and elderly care services. We believe healthcare should be convenient and compassionate, provided in the comfort of your own home.<br><br>

Our team consists of experienced healthcare professionals committed to improving the quality of life for our clients. We provide reliable, affordable, and personalized healthcare services tailored to individual needs.`
  },

  location: {
    keywords: ['location', 'where', 'accra', 'address', 'office', 'areas served', 'service area', 'coverage', 'do you serve', 'service locations'],
    response: `Homecare Arena operates in Accra and surrounding areas. We provide home-based services, so we come to you!

For specific location details and service availability in your area, please contact us:<br><br>

Call our support team on +233 50 123 4567 or +233 24 765 4321 or <br>
Send us an email through our contact page`
  },

  pricing: {
    keywords: ['price', 'cost', 'fee', 'how much', 'payment', 'charges'],
    response: `Our pricing varies based on the type and frequency of service needed. We offer flexible, affordable care plans tailored to your budget and healthcare needs.

For a detailed quote and to discuss pricing options, please: <br><br>

📞 Contact us directly on +233 50 123 4567 or +233 24 765 4321 <br>
📧 Fill out our contact form <br>
💬 Ask us here for more information`
  },

  nursing: {
    keywords: ['nursing', 'nurse', 'home nursing', 'clinical care', 'medical care', 'nursing services'],
    response: `Home Nursing Services:<br><br>

Our professional nurses provide:<br>
<ul>
<li>Wound care and dressing changes</li>
<li>Medication administration</li>
<li>IV therapy</li>
<li>Medication management</li>
<li>Post-operative care</li>
<li>Vital signs monitoring</li>
<li>Catheter care</li>
<li>Injection administration</li>
<li>General patient care and support</li>
</ul>

Our nurses are qualified, experienced, and dedicated to your recovery. They work on flexible schedules to accommodate your needs.`
  },

  elderly: {
    keywords: ['elderly', 'senior', 'aging', 'older adults', 'aged care', 'senior care', 'elder care'],
    response: `Elderly Care Services:<br><br>

We provide compassionate support for seniors including:<br>
<ul><li>Daily living assistance</li>
<li>Mobility support</li>
<li>Personal hygiene assistance</li>
<li>Meal preparation and feeding</li>
<li>Medication reminders</li>
<li>Companionship and emotional support</li>
<li>Health monitoring</li>
<li>Fall prevention measures</li>
</ul>

Our caregivers are trained to provide patient, respectful, and dignified care for your loved ones.`
  },

  surgery: {
    keywords: ['surgery', 'post-surgery', 'post-operative', 'recovery', 'operation'],
    response: `Post-Surgery Support:

We help ensure smooth recovery after surgery:<br><br>
<ul><li>Wound care and dressing changes</li>
<li>Pain management support</li>
<li>Mobility and rehabilitation assistance</li>
<li>Vital signs monitoring</li>
<li>Medication administration</li>
<li>Follow-up care coordination</li>
<li>24/7 support availability</li>
</ul>


Our specialized team helps minimize complications and speeds up recovery.`
  },

  hours: {
    keywords: ['hours', 'open', 'availability', '24/7', 'schedule', 'when'],
    response: `We provide services based on your schedule:<br><br>
    <ul>li>Flexible scheduling available</li>
<li>Day and night shifts</li>
<li>Emergency support available</li>
</ul>

Contact us to arrange a service schedule that works best for you.`
  },

  booking: {
    keywords: ['book', 'appointment', 'schedule', 'register', 'sign up', 'how to book'],
    response: `How to Book Our Services:<br><br>
    
<ul>
<li>Contact Us - Call us or fill out our contact form</li>
<li>Consultation - We'll assess your needs</li>
<li>Customized Plan - We create a care plan for you</li>
<li>Schedule Service - Arrange dates and times</li>
<li>Enjoy Quality Care - Our team provides professional care</li>
</ul>

📧 Visit our contact page: contact
Or use the contact form there to get started!`
  },

  contact: {
    keywords: ['contact', 'phone', 'call', 'email', 'reach', 'support', 'help', 'customer service', 'get in touch'],
    response: `Get In Touch:

Visit our Contact page for multiple ways to reach us:<br><br>
<ul>
<li>Contact Form - Fill out the form on our contact page</li>
<li>Email - Send us an email at homecarearena25@gmail.com</li>
<li>Call us: +233 50 123 4567 or +233 24 765 4321</li>
</ul>

We're here to answer your questions and discuss how we can help you. Response time is typically within hours.<br><br>

👉 Go to: contact page`
  },

  team: {
    keywords: ['team', 'staff', 'professionals', 'qualifications', 'doctors', 'nurses'],
    response: `Our team consists of: <br><br>

    <ul>
    <li>Experienced nurses</li>
    <li>Healthcare professionals</li>
    <li>Skilled caregivers</li>
    <li>Post-surgery specialists</li>
    <li>Trained caregivers for elderly care</li>
    <li>Compassionate specialists dedicated to quality care</li>
    </ul>

All team members are qualified, certified, and committed to providing excellent care. Learn more about our team on our team page.`
  },

  faq: {
    keywords: ['faq', 'frequently asked', 'question', 'common questions'],
    response: `Visit our FAQ page for answers to common questions about our services!<br><br>

👉 Go to: FAQ page for more information`
  },

  others: {
    keywords: ['other', 'anything else', 'more', 'help', 'assist', 'support'],
    response: `I'm here to help with any questions you have about Homecare Arena's services. Feel free to ask me anything!`
  },

  default: {
    response: `I can help you with information about: <br><br>
    <ul>
    <li>Our services (nursing, elderly care, post-surgery support)</li>
    <li>Booking</li>
    <li>How to contact us</li>
    <li>Our team</li>
    <li>Service availability and hours</li>
    </ul><br>

What would you like to know?`
  }


};

class HomecareArenaBot {
  constructor() {
    this.messages = [];
    this.isOpen = false;
    this.init();
  }

  init() {
    this.createChatbotHTML();
    this.attachEventListeners();
    this.loadGreeting();
  }

  createChatbotHTML() {
    const container = document.createElement('div');
    container.className = 'chatbot-container';
    container.innerHTML = `
      <button class="chatbot-toggle" title="Chat with us">
        <i class="fas fa-comments"></i>
      </button>
      
      <div class="chatbot-window">
        <div class="chatbot-header">
          <h2>Homecare Arena Bot</h2>
          <button class="chatbot-close" title="Close chat">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div class="chatbot-messages"></div>
        
        <div class="chatbot-input-area">
          <input 
            type="text" 
            class="chatbot-input" 
            placeholder="Ask me anything..."
            autocomplete="off"
          >
          <button class="chatbot-send" title="Send message">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(container);
  }

  attachEventListeners() {
    const toggle = document.querySelector('.chatbot-toggle');
    const closeBtn = document.querySelector('.chatbot-close');
    const sendBtn = document.querySelector('.chatbot-send');
    const input = document.querySelector('.chatbot-input');
    const window = document.querySelector('.chatbot-window');

    toggle.addEventListener('click', () => this.toggleChat());
    closeBtn.addEventListener('click', () => this.closeChat());
    sendBtn.addEventListener('click', () => this.sendMessage());
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });

    // Focus input when window opens
    const observer = new MutationObserver(() => {
      if (window.classList.contains('open')) {
        setTimeout(() => input.focus(), 100);
      }
    });
    observer.observe(window, { attributes: true, attributeFilter: ['class'] });
  }

  toggleChat() {
    this.isOpen ? this.closeChat() : this.openChat();
  }

  openChat() {
    const window = document.querySelector('.chatbot-window');
    const toggle = document.querySelector('.chatbot-toggle');
    window.classList.add('open');
    toggle.classList.add('active');
    this.isOpen = true;
  }

  closeChat() {
    const window = document.querySelector('.chatbot-window');
    const toggle = document.querySelector('.chatbot-toggle');
    window.classList.remove('open');
    toggle.classList.remove('active');
    this.isOpen = false;
  }

  loadGreeting() {
    const greeting = KnowledgeBase.greetings[Math.floor(Math.random() * KnowledgeBase.greetings.length)];
    this.addMessage(greeting, 'bot');
  }

  sendMessage() {
    const input = document.querySelector('.chatbot-input');
    const message = input.value.trim();

    if (!message) return;

    this.addMessage(message, 'user');
    input.value = '';

    // Show typing indicator
    this.showTypingIndicator();

    // Get response
    setTimeout(() => {
      const response = this.getResponse(message);
      this.removeTypingIndicator();
      this.addMessage(response, 'bot');
    }, 800);
  }

  getResponse(userMessage) {
    const message = userMessage.toLowerCase();

    // Check knowledge base
    for (const [key, value] of Object.entries(KnowledgeBase)) {
      if (key !== 'greetings' && value.keywords) {
        if (value.keywords.some(keyword => message.includes(keyword))) {
          return value.response;
        }
      }
    }

    // If message contains multiple keywords, try to combine responses
    if (message.includes('contact') || message.includes('reach') || message.includes('call')) {
      return KnowledgeBase.contact.response;
    }

    // Default response
    return KnowledgeBase.default.response;
  }

  // (AI proxy removed) Using KnowledgeBase-only responses.

  addMessage(text, sender) {
    const messagesContainer = document.querySelector('.chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${sender}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'chatbot-message-content';
    contentDiv.innerHTML = text;
    
    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  showTypingIndicator() {
    const messagesContainer = document.querySelector('.chatbot-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chatbot-message bot typing-indicator';
    typingDiv.innerHTML = `
      <div class="chatbot-message-content">
        <div class="chatbot-typing">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    `;
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  removeTypingIndicator() {
    const indicator = document.querySelector('.typing-indicator');
    if (indicator) indicator.remove();
  }
}

// Initialize chatbot when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new HomecareArenaBot();
  });
} else {
  new HomecareArenaBot();
}

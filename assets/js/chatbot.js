/**
 * HomeCare Arena AI Chatbot
 * Smart chatbot with knowledge base about services
 */

const ChatbotConfig = {
  apiKey: '', // Optional: Add OpenAI API key for enhanced AI responses
  useAI: false, // Set to true if you add an API key
};

// Knowledge base about HomeCare Arena services
const KnowledgeBase = {
  greetings: [
    "Hello! Welcome to Homecare Arena. How can I assist you today?",
    "Hi there! I'm here to help you with information about our home care services.",
    "Welcome to Homecare Arena! What would you like to know?"
  ],
  
  services: {
    keywords: ['service', 'services', 'offer', 'what do you do', 'what services'],
    response: `Homecare Arena offers comprehensive home care services in Accra:

📋 Our Services Include:

1. Home Nursing - Professional nursing care at your home
2. Elderly Care - Compassionate support for seniors
3. Post-Surgery Support - Recovery assistance and monitoring
4. Personalized Healthcare - Customized care plans
5. Health Monitoring - Regular check-ups and vital signs monitoring

Each service is delivered by trained, compassionate healthcare professionals. Would you like to know more about any specific service?`
  },

  about: {
    keywords: ['about', 'who are you', 'company', 'tell me about', 'background', 'info', 'information', 'details', 'what is homecare arena'],
    response: `About Homecare Arena: <br><br>

Homecare Arena is a professional home healthcare provider in Accra, dedicated to delivering high-quality nursing and elderly care services. We believe healthcare should be convenient and compassionate, provided in the comfort of your own home.

Our team consists of experienced healthcare professionals committed to improving the quality of life for our clients. We provide reliable, affordable, and personalized healthcare services tailored to individual needs.`
  },

  location: {
    keywords: ['location', 'where', 'accra', 'address', 'office', 'areas served', 'service area', 'coverage'],
    response: `Homecare Arena operates in Accra and surrounding areas. We provide home-based services, so we come to you!

For specific location details and service availability in your area, please contact us:

📞 Call our support team
📧 Send us an email through our contact page`
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
✓ Wound care and dressing changes<br>
✓ Medication administration<br>
✓ IV therapy<br>
✓ Medication management<br>
✓ Post-operative care<br>
✓ Vital signs monitoring<br>
✓ Catheter care<br>
✓ Injection administration<br>
✓ General patient care and support<br><br>

Our nurses are qualified, experienced, and dedicated to your recovery. They work on flexible schedules to accommodate your needs.`
  },

  elderly: {
    keywords: ['elderly', 'senior', 'aging', 'older adults', 'aged care', 'senior care', 'elder care'],
    response: `Elderly Care Services:<br><br>

We provide compassionate support for seniors including:<br>
✓ Daily living assistance<br>
✓ Mobility support<br>
✓ Personal hygiene assistance<br>
✓ Meal preparation and feeding<br>
✓ Medication reminders<br>
✓ Companionship and emotional support<br>
✓ Health monitoring<br>
✓ Fall prevention measures<br><br>
✓ Medication reminders<br>
✓ Companionship and emotional support<br>
✓ Health monitoring<br>
✓ Fall prevention measures<br><br>

Our caregivers are trained to provide patient, respectful, and dignified care for your loved ones.`
  },

  surgery: {
    keywords: ['surgery', 'post-surgery', 'post-operative', 'recovery', 'operation'],
    response: `Post-Surgery Support:

We help ensure smooth recovery after surgery:
✓ Post-operative wound care
✓ Pain management support
✓ Mobility and rehabilitation assistance
✓ Vital signs monitoring
✓ Medication administration
✓ Follow-up care coordination
✓ 24/7 support availability

Our specialized team helps minimize complications and speeds up recovery.`
  },

  hours: {
    keywords: ['hours', 'open', 'availability', '24/7', 'schedule', 'when'],
    response: `We provide services based on your schedule:
✓ Flexible scheduling available
✓ Day and night shifts
✓ Emergency support available

Contact us to arrange a service schedule that works best for you.`
  },

  booking: {
    keywords: ['book', 'appointment', 'schedule', 'register', 'sign up', 'how to book'],
    response: `How to Book Our Services:<br><br>

1. Contact Us - Call us or fill out our contact form
2. Consultation - We'll assess your needs
3. Customized Plan - We create a care plan for you
4. Schedule Service - Arrange dates and times
5. Enjoy Quality Care - Our team provides professional care

📧 Visit our contact page: contact
Or use the contact form there to get started!`
  },

  contact: {
    keywords: ['contact', 'phone', 'call', 'email', 'reach', 'support', 'help'],
    response: `Get In Touch:

Visit our Contact page for multiple ways to reach us:

📧 Email us: homecarearena25@gmail.com <br>
📞 Call our team: +233 50 123 4567 or +233 24 765 4321 <br>
💬 Fill out our contact form  <br>

We're here to answer your questions and discuss how we can help you. Response time is typically within hours.

👉 Go to: contact page`
  },

  team: {
    keywords: ['team', 'staff', 'professionals', 'qualifications', 'doctors', 'nurses'],
    response: `Our team consists of: <br><br>
✓ Experienced nurses <br>
✓ Healthcare professionals <br>
✓ Skilled caregivers <br>
✓ Post-surgery specialists <br>
✓ Trained caregivers for elderly care <br><br>
✓ Compassionate specialists dedicated to quality care <br>

All team members are qualified, certified, and committed to providing excellent care. Learn more about our team on our team page.`
  },

  faq: {
    keywords: ['faq', 'frequently asked', 'question', 'common questions'],
    response: `Visit our FAQ page for answers to common questions about our services!

👉 Go to: FAQ page`
  },

  default: {
    response: `I can help you with information about: <br><br>
• Our services (nursing, elderly care, post-surgery support)<br>
• Booking</br>
• How to contact us<br>
• Our team <br>
• Service availability and hours <br><br>

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

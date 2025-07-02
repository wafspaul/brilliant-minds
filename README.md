# Brilliant Minds - Next.js Frontend + Express Backend

## 🚀 **Frontend Structure (Next.js)**
```
frontend/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx 
│   │   ├── about/page.tsx
│   │   ├── solutions/
│   │   │   ├── page.tsx
│   │   │   ├── digital-inclusion/page.tsx
│   │   │   ├── e-learning/page.tsx
│   │   │   ├── gig-economy/page.tsx
│   │   │   └── skill-development/page.tsx
│   │   ├── impact/page.tsx
│   │   ├── get-involved/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├──Navbar.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ContactForm.tsx
│   │   └── SolutionCard.tsx
│   └── styles/
│       ├── globals.css
│       └── animations.scss
├── package.json
└── next.config.ts
```

## ⚡ **Backend Structure (Express)**
```
backend/
├── src/
│   ├── routes/
│   │   ├── contact.js
│   │   ├── newsletter.js
│   │   └── donations.js
│   ├── controllers/
│   │   ├── contactController.js
│   │   ├── newsletterController.js
│   │   └── donationController.js
│   ├── middleware/
│   │   ├── cors.js
│   │   └── validation.js
│   ├── utils/
│   │   ├── email.js
│   │   └── database.js
│   └── server.js
├── package.json
└── .env
```

## 📋 **Setup Commands**

### **Frontend Setup:**
```bash
npx create-next-app@latest frontend --typescript --tailwind --eslint --app
cd frontend
rm tailwind.config.ts
npm install framer-motion react-hook-form lucide-react
npm install -D sass
```

### **Backend Setup:**
```bash
mkdir backend && cd backend
npm init -y
npm install express cors helmet morgan dotenv nodemailer express-rate-limit
npm install -D nodemon @types/node
```

## 🔧 **Backend Example**

### **server.js**
```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const contactRoutes = require('./routes/contact');
const newsletterRoutes = require('./routes/newsletter');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000'
}));
app.use(morgan('combined'));
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### **routes/contact.js**
```javascript
const express = require('express');
const { sendContactEmail } = require('../controllers/contactController');
const router = express.Router();

router.post('/', sendContactEmail);

module.exports = router;
```

### **controllers/contactController.js**
```javascript
const nodemailer = require('nodemailer');

const sendContactEmail = async (req, res) => {
  try {
    const { name, email, message, purpose } = req.body;
    
    // Email sending logic here
    // Send email using nodemailer
    
    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email' 
    });
  }
};

module.exports = { sendContactEmail };
```

## 🔗 **Frontend API Integration**

### **ContactForm.tsx**
```tsx
'use client'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
  message: string
  purpose: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', message: '', purpose: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({ name: '', email: '', message: '', purpose: '' })
      }
    } catch (error) {
      alert('Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6">
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        className="w-full p-3 border rounded-lg mb-4"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        className="w-full p-3 border rounded-lg mb-4"
        required
      />
      <textarea
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        className="w-full p-3 border rounded-lg mb-4 h-32"
        required
      />
      <select
        value={formData.purpose}
        onChange={(e) => setFormData({...formData, purpose: e.target.value})}
        className="w-full p-3 border rounded-lg mb-4"
        required
      >
        <option value="">Select Purpose</option>
        <option value="partnership">Partnership</option>
        <option value="general">General Inquiry</option>
        <option value="support">Support</option>
      </select>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
```

## ✅ **Benefits of This Approach:**

1. **Separation of concerns** - Frontend and backend independent
2. **Easy deployment** - Deploy frontend to Vercel, backend to Railway/Heroku
3. **Scalable** - Can add more backend features easily
4. **Familiar** - Standard React + Express pattern
5. **Simple** - No complex monorepo tools to learn

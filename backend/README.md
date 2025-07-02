# BrilliantMinds Backend API

A complete Node.js backend for the BrilliantMinds platform with Express, MongoDB, and JWT authentication.

## Features

- **Contact Management**: Handle contact form submissions and inquiries
- **Donation System**: Support multiple donation types (financial, device, volunteer time, skills, resources)
- **News Management**: Full CRUD operations for news articles with admin authentication
- **Admin Panel**: Secure admin authentication and dashboard
- **Data Validation**: Comprehensive input validation and sanitization
- **Error Handling**: Robust error handling and logging

## Tech Stack

- **Runtime**: Node.js 16+
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Express Validator
- **Security**: bcryptjs for password hashing
- **CORS**: Cross-origin resource sharing enabled

## Installation

1. **Clone and navigate to backend directory**
   \`\`\`bash
   cd backend
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Environment Setup**
   \`\`\`bash
   cp .env.example .env
   \`\`\`
   
   Edit `.env` with your configuration:
   \`\`\`env
   MONGODB_URI=mongodb://localhost:27017/brilliantminds
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3000
   JWT_SECRET=your-super-secret-jwt-key-change-in-production
   ADMIN_EMAIL=admin@brilliantminds.co.ke
   ADMIN_PASSWORD=admin123456
   \`\`\`

4. **Start MongoDB**
   Make sure MongoDB is running on your system

5. **Seed the database**
   \`\`\`bash
   npm run seed
   \`\`\`

6. **Start the server**
   \`\`\`bash
   # Development mode with auto-reload
   npm run dev
   
   # Production mode
   npm start
   \`\`\`

## API Endpoints

### Health Check
- `GET /api/health` - Server health status

### Contact Management
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin only)

### Donations
- `POST /api/donations` - Submit donation
- `GET /api/donations` - Get all donations (admin only)
- `GET /api/donations/stats` - Get donation statistics

### News
- `GET /api/news` - Get published news (public)
- `GET /api/news/:slug` - Get single news article by slug
- `GET /api/news/featured/articles` - Get featured news
- `GET /api/news/breaking/articles` - Get breaking news
- `GET /api/news/categories/list` - Get categories with counts
- `GET /api/news/stats/overview` - Get news statistics

### Admin
- `POST /api/admin/login` - Admin login
- `GET /api/admin/profile` - Get admin profile
- `POST /api/admin/news` - Create news article
- `GET /api/admin/news` - Get all news (including drafts)
- `PUT /api/admin/news/:id` - Update news article
- `DELETE /api/admin/news/:id` - Delete news article
- `GET /api/admin/dashboard` - Dashboard statistics

## Donation Types

The system supports multiple donation types:

1. **Financial**: Monetary pledges/commitments (no payment processing)
2. **Device**: Hardware donations (laptops, tablets, etc.)
3. **Volunteer Time**: Time-based contributions
4. **Skills**: Professional services (pro-bono)
5. **Resources**: Materials, software licenses, etc.

## Admin Authentication

Default admin credentials (change after first login):
- **Email**: admin@brilliantminds.co.ke
- **Password**: admin123456

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Account lockout after failed login attempts
- Input validation and sanitization
- CORS protection
- Rate limiting ready (can be enabled)

## Database Models

### Admin
- User management with roles and permissions
- Password hashing and login attempt tracking
- Role-based access control

### Contact
- Contact form submissions
- Status tracking and assignment
- Admin notes and follow-up

### Donation
- Multi-type donation support
- Detailed tracking for each donation type
- Status management and admin assignment

### News
- Full content management
- SEO optimization fields
- Category and tag system
- View tracking and comments

## Development

\`\`\`bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Seed database with sample data
npm run seed

# Check API health
curl http://localhost:5000/api/health
\`\`\`

## Production Deployment

1. Set `NODE_ENV=production`
2. Use a strong `JWT_SECRET`
3. Configure MongoDB connection string
4. Set up proper CORS origins
5. Enable rate limiting
6. Set up SSL/HTTPS
7. Configure logging and monitoring

## API Testing

You can test the API using tools like Postman or curl:

\`\`\`bash
# Test health endpoint
curl http://localhost:5000/api/health

# Submit contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","purpose":"General","message":"Test message"}'

# Admin login
curl -X POST http://localhost:5000/api/admin/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@brilliantminds.co.ke","password":"admin123456"}'
\`\`\`

## Contributing

1. Follow the existing code style
2. Add proper error handling
3. Include input validation
4. Write clear commit messages
5. Test your changes thoroughly

## License

MIT License - see LICENSE file for details

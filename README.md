# E-Market Frontend

Modern e-commerce web application built with ReactJS and Vite, offering a responsive and intuitive interface for exploring, filtering, and purchasing products online.

## 🚀 Features

- **Product Browsing**: Explore a wide range of products with an elegant grid layout
- **Advanced Filtering**: Filter products by category, price range, and search terms
- **Sorting Options**: Sort products by price or name (ascending/descending)
- **Product Details**: View detailed information about each product
- **Shopping Cart**: Add, remove, and manage products in your cart
- **User Authentication**: Secure JWT-based authentication system
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean and intuitive user interface with smooth transitions

## 🛠️ Technologies

- **React 19** - UI library
- **Vite** - Build tool and development server
- **React Router** - Client-side routing
- **Axios** - HTTP client for API communication
- **JWT** - JSON Web Tokens for authentication
- **CSS3** - Modern responsive styling

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Mo7amed-Boukab/E-Market.git
cd E-Market
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

Edit `.env` and set your API URL:
```
VITE_API_URL=http://localhost:8080/api
```

## 🚀 Usage

### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build the application for production:

```bash
npm run build
```

The optimized build will be created in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── common/        # Common components (ProtectedRoute)
│   ├── layout/        # Layout components (Header, Footer)
│   ├── products/      # Product-related components
│   ├── auth/          # Authentication components
│   └── cart/          # Shopping cart components
├── pages/             # Page components
│   ├── ProductList.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── Login.jsx
│   └── Register.jsx
├── context/           # React Context providers
│   ├── AuthContext.jsx
│   └── CartContext.jsx
├── services/          # API service layer
│   ├── api.js
│   ├── authService.js
│   └── productService.js
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
├── App.jsx            # Main application component
└── main.jsx           # Application entry point
```

## 🔑 Key Features Explained

### Authentication

The application uses JWT-based authentication:
- Login and registration pages
- Protected routes for authenticated users
- Automatic token management with interceptors
- Session persistence with localStorage

### Shopping Cart

Shopping cart functionality includes:
- Add products with customizable quantities
- Update quantities or remove items
- Persistent cart state (localStorage)
- Real-time cart total calculation
- Cart badge showing item count

### Product Management

Product features include:
- Product listing with grid layout
- Search functionality
- Category filtering
- Price range filtering
- Multiple sorting options
- Detailed product pages

## 🌐 API Integration

The application is designed to connect to a secure E-Market backend API. Configure the API endpoint in the `.env` file:

```
VITE_API_URL=http://your-api-url/api
```

### API Endpoints Used

- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `GET /products` - Get all products
- `GET /products/:id` - Get product details
- `GET /products/search` - Search products
- `GET /categories` - Get product categories

### Demo Mode

The application includes demo data and will work even without a backend API, making it perfect for testing and development.

## 🎨 Responsive Design

The application is fully responsive with breakpoints for:
- Mobile devices (< 768px)
- Tablets (768px - 968px)
- Desktop (> 968px)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

Built with ❤️ using React and Vite


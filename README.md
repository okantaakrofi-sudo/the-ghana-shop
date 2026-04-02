# 🌟 UAE Luxury Beauty Store

A modern, production-ready e-commerce platform built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Firebase** - purpose-built for the UAE premium beauty market.

## ✨ Features

### Customer Features
- 🛍️ **Product Catalog** - Browse premium beauty products with filters
- ⭐ **Reviews & Ratings** - 5-star rating system with verified reviews  
- 🛒 **Smart Cart** - Add/remove, update quantities with Zustand
- 💳 **Checkout** - Multi-step checkout with form validation
- 💰 **Payments** - Stripe (Card/Apple Pay/Google Pay) + Cash on Delivery
- 📱 **Mobile-First** - Fully responsive for all devices
- ❤️ **Wishlist** - Save favorite products
- 👤 **Accounts** - User profiles and order history
- 🚚 **Order Tracking** - Real-time order tracking

### Admin Features
- 📊 **Dashboard** - Analytics and key metrics
- 📦 **Products** - Manage product catalog
- 📋 **Orders** - Manage customer orders
- 📈 **Analytics** - Sales tracking and reporting

## 📁 Project Structure

```
app/
├── page.tsx              # Home with products & hero
├── cart/page.tsx         # Shopping cart
├── checkout/page.tsx     # Multi-step checkout
├── account/page.tsx      # User profile
├── admin/page.tsx        # Admin dashboard
├── context/              # React Context
└── api/                  # API Routes

components/
├── Header.tsx            # Navigation
└── ProductCard.tsx       # Product component

lib/
├── firebase.ts           # Firebase config
└── store/cartStore.ts    # Zustand store

types/index.ts            # TypeScript types
data/products.ts          # Product database
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Setup Environment Variables
Create `.env.local`:
```
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# App
NEXT_PUBLIC_URL=http://localhost:3000
```

### 3. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📦 Technologies

- **Next.js 16** - React framework with Turbopack
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Firebase** - Auth, Firestore, Storage
- **Stripe** - Payment processing
- **Zustand** - State management
- **React Hook Form** - Form handling
- **React Toastify** - Notifications

## 📱 Pages & Routes

| Route | Purpose |
|-------|---------|
| `/` | Home page |
| `/cart` | Shopping cart |
| `/checkout` | Payment checkout |
| `/account` | User profile |
| `/admin` | Admin panel |
| `/api/checkout` | Stripe API |
| `/api/orders` | Order API |

## 💳 Payment Setup

### Stripe Test Cards
- **Success**: `4242 4242 4242 4242` + any future date + any CVC
- **Auth Required**: `4000 0025 0000 3155`

### Webhook
Add to Stripe Dashboard → Webhooks:
```
https://yoursite.com/api/webhook
Events: payment_intent.succeeded, charge.refunded
```

## 🔐 Firebase Setup

### Create Collections

**users/**
- email, name, phone, createdAt

**products/**
- name, price, category, image, ingredients, benefits

**orders/**
- userId, items[], total, status, createdAt

**reviews/**
- productId, userId, rating, content, verified

**wishlist/**
- userId, productId, addedAt

## 📊 Products Format

```typescript
{
  id: "1",
  name: "Product Name",
  description: "Description",
  price: 189,
  originalPrice: 249,
  image: "/products/image.jpg",
  images: [],
  category: "Serums",
  rating: 4.8,
  reviews: 342,
  inStock: true,
  benefits: ["Benefit 1", "Benefit 2"],
  ingredients: ["Ingredient 1"],
  skinType: ["Dry", "Mature"],
  createdAt: new Date(),
}
```

## 🎯 Available Scripts

```bash
npm run dev        # Development server
npm run build      # Build for production
npm start         # Production server
npm run lint      # Run ESLint
```

## 🌐 Deployment

### Recommended: Vercel
1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy (auto on push)

### Other Platforms
- AWS Amplify
- Netlify
- Railway
- Docker (containerizable)

## 🛠️ Development Tips

### Add New Product
Edit `data/products.ts` and add to the array.

### Create New Page
```bash
mkdir app/your-page
touch app/your-page/page.tsx
```

### Use Cart Hook
```typescript
import { useCart } from '@/app/context/CartContext';

const { cart, addToCart, removeItem, total } = useCart();
```

## 🐛 Troubleshooting

### Build Errors
```bash
npm run build
```

### Tailwind Not Working
```bash
npm install @tailwindcss/postcss --legacy-peer-deps
```

### Firebase Connection Issue
- Verify `.env.local` variables
- Check Firestore security rules
- Enable APIs in Firebase Console

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Firebase](https://firebase.google.com/docs)
- [Stripe](https://stripe.com/docs)

## 📞 Admin URLs

- Admin Dashboard: [/admin](/admin)
- User Account: [/account](/account)
- Shopping Cart: [/cart](/cart)

## 📝 Next Steps

1. ✅ Firebase configuration
2. ✅ Stripe setup
3. ✅ Add product images to `/public/products/`
4. ✅ Update company details in footer
5. ✅ Configure email notifications
6. ✅ Deploy to production

## 📄 License

Open source - customize for your needs.

---

**Premium Beauty E-Commerce for UAE** ✨

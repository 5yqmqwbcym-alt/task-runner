# Task Runner

A simple, elegant task management app built with React and Tailwind CSS.

## Features

- ✅ Add and manage tasks
- 🎯 Mark tasks as complete
- 🗑️ Delete tasks
- 🔍 Filter tasks (All, Active, Completed)
- 💾 Local storage persistence
- 🎨 Clean, modern UI

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

Builds the app for production to the `build` folder.

## Technologies

- React
- Tailwind CSS
- LocalStorage API

## License

MIT

## 🚀 Deployment to AWS Amplify

This app is configured for deployment to AWS Amplify with best practices.

### Prerequisites
- AWS Account with Amplify access
- GitHub repository connected to Amplify

### Deploy Steps

1. **Connect to Amplify:**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"
   - Select GitHub and authorize
   - Choose the `task-runner` repository

2. **Build Settings:**
   - Amplify will auto-detect `amplify.yml`
   - Node version: 24.x (from `.nvmrc`)
   - Build command: `npm run build`
   - Output directory: `build`

3. **Environment Variables** (optional):
   - `CI=true` (prevents warnings from failing build)
   - `GENERATE_SOURCEMAP=false` (smaller bundle size)

4. **Deploy:**
   - Click "Save and deploy"
   - Amplify will build and deploy automatically
   - You'll get a URL like: `https://main.xxxxxx.amplifyapp.com`

### Features Configured
- ✅ SPA routing with proper redirects
- ✅ Build caching for faster deploys
- ✅ Node.js 24.x environment
- ✅ Production optimizations
- ✅ Auto-deploy on git push

### Continuous Deployment
Every push to `main` branch triggers automatic deployment.

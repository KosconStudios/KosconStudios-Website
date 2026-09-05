# Koscon Studios Website

A Next.js website that displays the Koscon Studios logo as the full-screen home page background.

## Run Locally

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The home page is in [src/app/page.tsx](src/app/page.tsx), and the background image is [public/KS_logo.png](public/KS_logo.png).

To test a production build locally:

```bash
npm run build
npm run start
```

## Learn More

To learn more about Next.js, take a look at the following resources:


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
## Push to GitHub

Create an empty repository on GitHub, then run these commands from the project folder:


```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Replace the repository URL with the URL of your GitHub repository. For future changes:

```bash
git add .
git commit -m "Update website"
git push
```

## Deploy Live with Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Select **Add New Project**, then import this GitHub repository.
3. Keep the detected Next.js settings and select **Deploy**.

Vercel provides a live `.vercel.app` URL. Each future push to the connected GitHub repository automatically creates a new deployment.

# CI/CD Setup for Vercel

This project is configured for automatic deployments to Vercel.

## Setup Instructions

### Option 1: Native Vercel GitHub Integration (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository: `Saksham-mishra-eg/vietnamTradeData`
4. Configure settings:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Click "Deploy"

**Automatic Deployments:**
- Push to `main` branch → Production deployment
- Push to other branches → Preview deployment
- Pull requests → Preview deployment

### Option 2: GitHub Actions Workflow

If you want more control, use the GitHub Actions workflow (`.github/workflows/vercel-deploy.yml`).

#### Required GitHub Secrets

Add these secrets to your GitHub repository. **You need to add each secret separately** - GitHub only allows one secret per form submission.

**Step-by-step instructions:**

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the first secret:
   - **Name**: `VERCEL_TOKEN`
   - **Secret**: Your Vercel token (e.g., `44Nrv4F5XXW3HRyV5Yvu1Qsc`)
   - Click **Add secret**
5. Click **New repository secret** again for the second secret:
   - **Name**: `VERCEL_ORG_ID`
   - **Secret**: Your organization ID (e.g., `team_MYPoKdFW2SeyXg3SsbUVnQQA`)
   - Click **Add secret**
6. Click **New repository secret** one more time for the third secret:
   - **Name**: `VERCEL_PROJECT_ID`
   - **Secret**: Your project ID (e.g., `prj_vFQAlc6Xufoo2V6RiSX67OBgjtnV`)
   - Click **Add secret**

**Summary of secrets to add:**

| Secret Name | Description | How to Get |
|------------|-------------|------------|
| `VERCEL_TOKEN` | Vercel authentication token | [Generate here](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Your Vercel organization ID | Found in `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | Your Vercel project ID | Found in `.vercel/project.json` |

#### Get Vercel IDs

Run these commands locally:
```bash
# Link project to Vercel (if not already done)
vercel link

# Your IDs will be in .vercel/project.json
cat .vercel/project.json
```

#### How It Works

- **Push to `main` branch** → Deploys to production
- **Push to other branches** → Deploys to preview
- **Pull requests** → Deploys to preview

## Environment Variables

If your project uses environment variables:
1. Go to Vercel Dashboard → Your Project
2. Navigate to **Settings** → **Environment Variables**
3. Add your variables for each environment:
   - Production
   - Preview
   - Development

## Deployment Status

You can check deployment status:
- On Vercel Dashboard: [vercel.com/dashboard](https://vercel.com/dashboard)
- GitHub Actions tab (if using GitHub workflow)
- Commit status checks on GitHub

## Troubleshooting

### Build Fails
- Check the build logs in Vercel Dashboard
- Ensure all dependencies are in `package.json`
- Verify environment variables are set

### GitHub Actions Fails
- Verify all secrets are added correctly
- Check the Actions tab for detailed error logs
- Ensure Vercel token has correct permissions

## Current Deployment

Production URL: Check your Vercel dashboard for the live URL

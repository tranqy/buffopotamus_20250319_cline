# Cloudflare Pages Deployment with GitHub Actions

This project is configured to automatically deploy to Cloudflare Pages using GitHub Actions whenever changes are pushed to the main branch. It also includes preview deployments for pull requests.

## Setup Instructions

### 1. Create a Cloudflare Pages Project

Before the GitHub Action can deploy your site, you need to create a Cloudflare Pages project:

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages**
3. Click **Create a project**
4. Choose **Direct Upload** (not Git integration, since we're using GitHub Actions)
5. Name your project `buffopotamus` (or your preferred name, but make sure it matches the `project-name` in the GitHub workflow)
6. Complete the setup

### 2. Create Required Secrets

You'll need to add these secrets to your GitHub repository:

#### `CLOUDFLARE_API_TOKEN`

1. Go to the Cloudflare dashboard
2. Navigate to **My Profile** > **API Tokens**
3. Click **Create Token**
4. Use the **Edit Cloudflare Pages** template or create a custom token with Pages edit permissions
5. Copy the token value (you'll only see it once)

#### `CLOUDFLARE_ACCOUNT_ID`

1. In the Cloudflare dashboard, look at the URL when you're logged in
2. It should contain your account ID: `https://dash.cloudflare.com/ACCOUNT_ID`
3. Or find it in the right sidebar under "API" section

#### Add to GitHub

1. Go to your GitHub repository
2. Navigate to **Settings** > **Secrets and variables** > **Actions**
3. Click **New repository secret** and add both secrets:
   - Name: `CLOUDFLARE_API_TOKEN`, Value: your API token
   - Name: `CLOUDFLARE_ACCOUNT_ID`, Value: your account ID

### 3. Deployment Process

Once set up, the deployment process works as follows:

#### Production Deployment

1. Push changes to the `main` branch (or manually trigger the workflow)
2. GitHub Actions workflow is triggered
3. The workflow:
   - Sets up Node.js
   - Installs dependencies
   - Builds the Astro site
   - Deploys to Cloudflare Pages using Wrangler

#### Preview Deployments

For pull requests:

1. Create a pull request to the `main` branch
2. GitHub Actions workflow is triggered
3. The workflow:
   - Builds the site
   - Deploys to a preview environment with a unique name based on the PR number
   - Comments on the PR with the preview URL
4. When new commits are pushed to the PR, the preview is automatically updated

### 4. Custom Domain (Optional)

If you want to use a custom domain:

1. Go to your Cloudflare Pages project
2. Navigate to **Custom domains**
3. Click **Set up a custom domain**
4. Follow the instructions to configure your domain

## Troubleshooting

- **Build Failures**: Check the GitHub Actions logs for detailed error messages
- **Deployment Issues**: Verify your API token has the correct permissions
- **Wrangler Errors**: Make sure the project name matches your Cloudflare Pages project

## Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Wrangler Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

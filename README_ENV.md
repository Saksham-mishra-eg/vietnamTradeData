Environment variables — reCAPTCHA v3 and SendGrid

Add the following to a local `.env.local` at the project root (replace placeholder values):

```powershell
# reCAPTCHA v3 (client + server)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
RECAPTCHA_SECRET=your_recaptcha_secret_here

# SendGrid (optional — if not set the app will log emails in development)
SENDGRID_API_KEY=your_sendgrid_api_key_here
FROM_EMAIL=no-reply@yourdomain.com
SENDGRID_TO_EMAIL=team@yourdomain.com

# Example (Windows PowerShell):
# copy the lines above into a file named .env.local in the project root and update the values.
```

Notes
- When `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is present the contact form will attempt to request a reCAPTCHA token before submitting. The server route will verify the token when `RECAPTCHA_SECRET` is set.
- If `SENDGRID_API_KEY` is not configured, the app will not send emails but will log a short summary in development. Configure `FROM_EMAIL` and `SENDGRID_TO_EMAIL` for real delivery.

#!/usr/bin/env node
// Simple CI check: fail if deploying to production without RECAPTCHA_SECRET
const required = 'RECAPTCHA_SECRET';
const isProd = process.env.NODE_ENV === 'production' || process.argv.includes('--prod');
if(isProd){
  if(!process.env[required]){
    console.error(`ERROR: ${required} is not set. Aborting deploy/check.`);
    console.error('Set the environment variable RECAPTCHA_SECRET in your production environment or secrets manager.');
    process.exit(1);
  }
  console.log(`${required} found — proceeding.`);
  process.exit(0);
}
// Not production — warn but do not fail
if(!process.env[required]){
  console.warn(`Warning: ${required} is not set. This check only aborts when NODE_ENV=production.`);
} else {
  console.log(`${required} is set.`);
}
process.exit(0);

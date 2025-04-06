// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://3d1945a6086fbfa642e9ef8ff615844f@o4509107776978944.ingest.us.sentry.io/4509107794739200",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
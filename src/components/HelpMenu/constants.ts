export const orgId = '00DU0000000Kwch';
export const app = 'Web_Messaging_Deployment';
export const deployment = 'ESWWebMessagingDeployme1716235390398';
export const deploymentURL = `https://openstax.my.site.com/${deployment}`;
export const scrt2URL = 'https://openstax.my.salesforce-scrt.com';
export const scriptUrl = `${deploymentURL}/assets/js/bootstrap.min.js`;
export const businessHoursURL =
  `${scrt2URL}/embeddedservice/v1/businesshours?orgId=${orgId}&esConfigName=${app}`;
export const chatEmbedDefaults = {
  orgId,
  app,
  deploymentURL,
  scrt2URL,
  scriptUrl,
  businessHoursURL,
} as const;

export const embeddedChatEvents = {
  READY: 'onEmbeddedMessagingReady',
  BUSINESS_HOURS_STARTED: 'onEmbeddedMessagingBusinessHoursStarted',
  BUSINESS_HOURS_ENDED: 'onEmbeddedMessagingBusinessHoursEnded',
} as const;
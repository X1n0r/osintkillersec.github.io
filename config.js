// API Configuration File
// Replace 'YOUR_API_KEY' placeholders with your actual API keys
// This file should be kept secure and not committed to public repositories

const API_CONFIG = {
  // Email Verification APIs
  abstractApi: 'YOUR_ABSTRACT_API_KEY',
  mailboxValidator: 'YOUR_MAILBOXVALIDATOR_KEY',

  // Domain Intelligence APIs
  whoisXml: 'YOUR_WHOISXML_KEY',
  securityTrails: 'YOUR_SECURITYTRAILS_KEY',
  hunterIo: 'YOUR_HUNTERIO_KEY',

  // IP Geolocation APIs
  ipstack: 'YOUR_IPSTACK_KEY',

  // Host Intelligence APIs
  shodan: 'YOUR_SHODAN_KEY',
  censys: {
    apiId: 'YOUR_CENSYS_API_ID',
    apiSecret: 'YOUR_CENSYS_API_SECRET'
  },

  // Premium Breach APIs
  dehashed: 'YOUR_DEHASHED_KEY',
  snusbase: 'YOUR_SNUSBASE_KEY',
  breachDirectory: 'YOUR_BREACHDIRECTORY_KEY',
  leakedSite: 'YOUR_LEAKEDSITE_KEY',

  // RapidAPI Keys (if using via RapidAPI)
  rapidApiKey: 'YOUR_RAPIDAPI_KEY'
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = API_CONFIG;
}

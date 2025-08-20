// src/config/brandingConfig.ts

import brandingOverride from './brandingOverride';

// Define default branding configuration
const defaultConfig = {
  companyName: 'NinjaSearcher Inc.',
  deploymentName: 'NinjaSearcher',
  socialLinks: {
    twitter: { enabled: false, url: 'https://twitter.com/ocolegro?lang=en' },
    github: { enabled: false, url: 'https://github.com/#' },
    discord: { enabled: false, url: 'https://discord.gg/#' },
  },
  navbar: {
    appName: 'NinjaSearcher',
    showDocsButton: false,
    menuItems: {
      home: true,
      documents: true,
      collections: true,
      chat: true,
      search: true,
      users: true,
      logs: true,
      analytics: true,
      settings: true,
    },
  },
  logo: {
    src: '/images/ninja-logo.svg',
    alt: '/images/ninja-logo.svg',
  },
  theme: 'dark',
  homePage: {
    pythonSdk: false,
    githubCard: false,
    hatchetCard: false,
  },
  nextConfig: {
    additionalRemoteDomain: '',
  },
};

// ✅ Declare `window.__BRANDING_CONFIG__` globally to avoid TypeScript errors
declare global {
  interface Window {
    __BRANDING_CONFIG__?: Partial<typeof defaultConfig>;
  }
}

// ✅ Load user-defined config from `window.__BRANDING_CONFIG__` (if available)
const userConfig =
  (typeof window !== 'undefined' && window.__BRANDING_CONFIG__) || {};

// ✅ Merge `defaultConfig`, `brandingOverride.ts`, and `userConfig`
export const brandingConfig = {
  ...defaultConfig,
  ...brandingOverride,
  ...userConfig,
};

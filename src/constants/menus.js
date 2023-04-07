import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    {
      text: 'Contributors',
      ...LINKS.contributors,
    },
    {
      text: 'Pricing',
      ...LINKS.pricing,
    },
    {
      text: 'Blog',
      ...LINKS.blog,
    },
    {
      text: 'Documentation',
      ...LINKS.documentation,
    },
    { text: 'Careers', ...LINKS.careers },
  ],
  footer: [
    [
      { text: 'Blog', ...LINKS.blog },
      { text: 'Contributors', ...LINKS.contributors },
      { text: 'Podcast', ...LINKS.podcast },
      { text: 'Pricing', ...LINKS.pricing },
      { text: 'Careers', ...LINKS.careers },
      { text: '2022 Events', ...LINKS.timeline },
    ],
    [
      { text: 'Documentation', ...LINKS.documentation },
      { text: 'Providers', ...LINKS.providers },
      { text: 'Handbook', ...LINKS.handbook },
      { text: 'Contact Us', ...LINKS.discord },
      { text: 'Press Kit', ...LINKS.pressKit },
      { text: 'Polishing Season', ...LINKS.polishing },
      { text: 'Notifications Directory', ...LINKS.notificationDirectory },
    ],
    [
      { text: 'Discord', ...LINKS.discord },
      { text: 'Twitter', ...LINKS.twitter },
      { text: 'GitHub', ...LINKS.github },
    ],
    [
      { text: 'Terms of Use', ...LINKS.termsOfUse },
      { text: 'Privacy Policy', ...LINKS.privacyPolicy },
      { text: 'DPA', ...LINKS.dataProcessingAgreement },
      { text: 'Status Page', ...LINKS.statusPage },
    ],
  ],
  mobile: [
    {
      text: 'Documentation',
      ...LINKS.documentation,
    },
    { text: 'Blog', ...LINKS.blog },
    { text: 'Contributors', ...LINKS.contributors },
    { text: 'Careers', ...LINKS.careers },
    {
      text: 'Pricing',
      ...LINKS.pricing,
    },
  ],
};

export default MENUS;

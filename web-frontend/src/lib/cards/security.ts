import type { Card } from './types';

export const securityCards: Card[] = [
  {
    id: 'authentication',
    deckId: 'security',
    term: 'authentication',
    gist: 'proving who you are',
    plain:
      'Checking that you are who you claim to be, usually with a password and a code. It is the login step, and nothing else.',
    heard: 'Shortened to “auth,” which confusingly also covers the next card.',
    aliases: ['auth', 'login'],
  },
  {
    id: 'authorization',
    deckId: 'security',
    term: 'authorization',
    gist: 'what you are allowed to do',
    plain:
      'Once the system knows who you are, this decides what you can see and change. Being logged in is not the same as being allowed.',
    heard: '“An authz bug” is the serious kind: someone saw data that was not theirs.',
    aliases: ['permissions', 'access control', 'rbac'],
  },
  {
    id: 'encryption',
    deckId: 'security',
    term: 'encryption',
    gist: 'scrambled unless you hold the key',
    plain:
      'Turning readable information into nonsense that only someone with the right key can unscramble. It is what makes the padlock in your browser mean something.',
    heard: '“End to end” means even the company carrying the message cannot read it.',
    aliases: ['e2ee', 'tls', 'ssl'],
  },
  {
    id: 'hashing',
    deckId: 'security',
    term: 'hashing',
    gist: 'scrambled with no way back',
    plain:
      'A one-way scramble, used for passwords. The site stores the scrambled version, so it can check yours is right without ever knowing what it is.',
    heard: 'This is why a real company emails a reset link instead of your old password.',
  },
  {
    id: 'two-factor',
    deckId: 'security',
    term: '2FA',
    gist: 'password plus something else',
    plain:
      'Requiring a second proof beyond your password: a code from an app, a tap on your phone, a physical key. It stops almost all password theft from mattering.',
    heard: 'App-based codes are meaningfully safer than text messages.',
    aliases: ['mfa', 'two factor'],
  },
  {
    id: 'access-token',
    deckId: 'security',
    term: 'access token',
    gist: 'a wristband instead of a password',
    plain:
      'A temporary pass the system hands you after login, which your app shows on every later request. It expires, and it can be revoked without changing your password.',
    heard: '“My token expired” means it logged him out, not that anything is wrong.',
    aliases: ['jwt', 'session', 'bearer token'],
  },
  {
    id: 'oauth',
    deckId: 'security',
    term: 'OAuth',
    gist: 'log in with Google, safely',
    plain:
      'The standard behind “continue with Google.” You prove yourself to Google, and Google vouches for you, so the other site never sees your password.',
    heard: 'SSO is the same idea inside a company: one login for every internal tool.',
    aliases: ['sso', 'single sign on'],
  },
  {
    id: 'api-key',
    deckId: 'security',
    term: 'API key',
    gist: 'a password for a program',
    plain:
      'A secret string one piece of software uses to identify itself to another. Leaking one into public code is a classic and expensive mistake.',
    heard: '“I rotated the key” means he replaced it because it might have leaked.',
    aliases: ['secret', 'credentials'],
  },
  {
    id: 'breach',
    deckId: 'security',
    term: 'breach',
    gist: 'attackers got the data',
    plain:
      'An incident where someone outside the company obtained information they should not have. Legally it triggers notifications, which is why you get those emails.',
    heard: 'Different from an outage: an outage means broken, a breach means stolen.',
    aliases: ['leak', 'hack'],
  },
  {
    id: 'phishing',
    deckId: 'security',
    term: 'phishing',
    gist: 'a fake message after your login',
    plain:
      'An email or text impersonating something you trust, to get you to type your password into a convincing copy. Still the single most successful attack there is.',
    heard: 'Companies send fake phishing emails to their own staff as a test. It is not popular.',
  },
  {
    id: 'zero-day',
    deckId: 'security',
    term: 'zero day',
    gist: 'a flaw with no fix yet',
    plain:
      'A security hole attackers found before the people who could patch it. The name refers to the number of days the defenders have had to respond.',
    heard: '“We are patching a zero day” means drop everything.',
    aliases: ['vulnerability', 'cve', 'exploit'],
  },
  {
    id: 'vpn',
    deckId: 'security',
    term: 'VPN',
    gist: 'a private tunnel to somewhere else',
    plain:
      'An encrypted connection that routes your traffic through another network. At work it grants access to internal systems, at home it mostly hides which sites you visit from your provider.',
    heard: '“I have to be on the VPN for that” is a normal workday sentence.',
  },
];

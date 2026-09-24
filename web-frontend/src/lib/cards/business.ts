import type { Card } from './types';

export const businessCards: Card[] = [
  {
    id: 'saas',
    deckId: 'business',
    term: 'SaaS',
    gist: 'software you rent monthly',
    plain:
      'Software as a service. You do not buy it once and install it, you pay every month and use it in a browser. Netflix, Spotify, and about ninety percent of business software.',
    heard: 'Pronounced “sass.” The whole industry is built on it.',
    aliases: ['software as a service'],
  },
  {
    id: 'b2b',
    deckId: 'business',
    term: 'B2B',
    gist: 'selling to companies',
    plain:
      'Business to business. The customer is an organization, the buyer is rarely the user, and the sale involves a procurement process and a contract.',
    heard: 'Fewer customers, much bigger checks.',
    aliases: ['business to business'],
  },
  {
    id: 'b2c',
    deckId: 'business',
    term: 'B2C',
    gist: 'selling to individuals',
    plain:
      'Business to consumer. Ordinary people sign up with a card, in about a minute, and leave just as easily.',
    heard: 'Millions of customers paying small amounts, and a lot of churn.',
    aliases: ['business to consumer'],
  },
  {
    id: 'b2b-saas',
    deckId: 'business',
    term: 'B2B SaaS',
    gist: 'monthly software sold to companies',
    plain:
      'The dominant business model in tech: build a tool, charge companies per user per month, and keep them renewing. Unglamorous, and where most of the money is.',
    heard: '“It is a B2B SaaS company” tells another engineer almost everything they need.',
  },
  {
    id: 'arr',
    deckId: 'business',
    term: 'ARR',
    gist: 'yearly recurring revenue',
    plain:
      'Annual recurring revenue: the predictable subscription money, counted over a year. MRR is the same number per month. It is the headline figure for any subscription company.',
    heard: '“We just crossed ten million ARR” is the thing people announce.',
    aliases: ['mrr', 'recurring revenue'],
  },
  {
    id: 'churn',
    deckId: 'business',
    term: 'churn',
    gist: 'customers leaving',
    plain:
      'The share of customers who cancel in a given period. Low churn quietly compounds into a great business; high churn means filling a leaky bucket forever.',
    heard: '“Churn is up” is genuinely bad news, said quietly.',
  },
  {
    id: 'product-market-fit',
    deckId: 'business',
    term: 'product-market fit',
    gist: 'people actually want it',
    plain:
      'The point where demand pulls harder than you push: customers arrive on their own and get upset when the product breaks. Everything before it is searching.',
    heard: '“We have not found PMF yet” means they are still guessing.',
    aliases: ['pmf'],
  },
  {
    id: 'runway',
    deckId: 'business',
    term: 'runway',
    gist: 'months of money left',
    plain:
      'How long the company can keep paying everyone before the bank account hits zero, assuming nothing changes. Measured in months, watched closely.',
    heard: '“Eighteen months of runway” is roughly the comfortable number.',
    aliases: ['burn rate'],
  },
  {
    id: 'seed',
    deckId: 'business',
    term: 'seed round',
    gist: 'the first real investment',
    plain:
      'Early money raised in exchange for a slice of the company, usually on an idea and a small team. Series A, B, and C follow as it grows, each one bigger.',
    heard: '“They raised a Series B” means they are past proving it works.',
    aliases: ['series a', 'vc', 'venture capital', 'funding'],
  },
  {
    id: 'valuation',
    deckId: 'business',
    term: 'valuation',
    gist: 'what investors say it is worth',
    plain:
      'The price tag placed on the whole company at its last fundraise. It is a negotiated number, not a bank balance, and it can go down.',
    heard: '“A unicorn” is a private company valued above a billion dollars.',
    aliases: ['unicorn'],
  },
  {
    id: 'equity',
    deckId: 'business',
    term: 'equity',
    gist: 'ownership offered as pay',
    plain:
      'A slice of the company included in compensation, which vests over several years. It is worth something if there is ever a sale or a public listing, and often is not.',
    heard: '“Options” and “RSUs” are the two usual flavors, and they are taxed differently.',
    aliases: ['options', 'rsu', 'vesting'],
  },
  {
    id: 'ipo',
    deckId: 'business',
    term: 'IPO',
    gist: 'going public on the stock market',
    plain:
      'When a private company sells shares to the public for the first time. It is the moment employee equity turns into actual money.',
    heard: 'The other way out is being acquired, which is far more common.',
    aliases: ['acquisition', 'exit'],
  },
  {
    id: 'enterprise',
    deckId: 'business',
    term: 'enterprise',
    gist: 'very large, very slow customers',
    plain:
      'Selling to big corporations. Long sales cycles, security reviews, custom requirements, and contracts worth enough to justify all of it.',
    heard: '“That is an enterprise ask” means one big customer wants a special feature.',
  },
  {
    id: 'freemium',
    deckId: 'business',
    term: 'freemium',
    gist: 'free tier, paid upgrade',
    plain:
      'Give the basic product away to get people in, charge for the parts serious users need. Works when the free version is genuinely useful.',
    heard: 'Every app that nags you about a limit is running this playbook.',
  },
  {
    id: 'kpi',
    deckId: 'business',
    term: 'KPI',
    gist: 'the number being watched',
    plain:
      'Key performance indicator: the handful of measurements a team is judged on. Sign-ups, revenue, retention. What gets measured gets optimized, for better and worse.',
    heard: '“What is the KPI for this?” means “how will we know it worked?”',
    aliases: ['metric', 'north star'],
  },
  {
    id: 'okr',
    deckId: 'business',
    term: 'OKR',
    gist: 'quarterly goals with numbers attached',
    plain:
      'Objectives and key results: a goal plus the specific measurements that prove you hit it. Set quarterly, reviewed at the end, frequently quietly abandoned in the middle.',
    heard: '“OKR season” is a real and dreaded time of year.',
  },
  {
    id: 'roadmap',
    deckId: 'business',
    term: 'roadmap',
    gist: 'the plan for the next few months',
    plain:
      'The ordered list of what the team intends to build and roughly when. It changes constantly, which everyone knows and nobody says in the meeting.',
    heard: '“That is on the roadmap” can mean soon or can mean never.',
  },
  {
    id: 'pm',
    deckId: 'business',
    term: 'PM',
    gist: 'decides what gets built',
    plain:
      'Product manager. Not his boss. They figure out what is worth building and why, and engineers figure out how. The good ones say no a lot.',
    heard: '“My PM wants it this week” means the request came from product, not management.',
    aliases: ['product manager'],
  },
  {
    id: 'stakeholder',
    deckId: 'business',
    term: 'stakeholder',
    gist: 'someone with an opinion who matters',
    plain:
      'Anyone whose approval or input the project needs: a manager, a legal team, a big customer. The word exists because “person who can stop this” is impolite.',
    heard: '“I need stakeholder buy-in” means he is going to be in meetings.',
  },
  {
    id: 'technical-interview',
    deckId: 'business',
    term: 'leetcode',
    gist: 'the puzzle test for getting hired',
    plain:
      'A site full of algorithm puzzles that tech companies use as an interview screen. The problems bear little resemblance to the job and everyone grinds them anyway.',
    heard: '“I need to grind leetcode” means he is thinking about interviewing.',
    aliases: ['technical interview', 'whiteboard'],
  },
];

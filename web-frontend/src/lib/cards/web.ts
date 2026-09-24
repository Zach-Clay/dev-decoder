import type { Card } from './types';

export const webCards: Card[] = [
  {
    id: 'api',
    deckId: 'web',
    term: 'API',
    gist: 'how two programs talk',
    plain:
      'A defined set of requests one piece of software can make to another. It is a menu: here is what you may ask for, here is what you get back. No human involved.',
    heard: '“Their API is down” means the other company’s software stopped answering.',
    aliases: ['application programming interface'],
  },
  {
    id: 'endpoint',
    deckId: 'web',
    term: 'endpoint',
    gist: 'one specific address to call',
    plain:
      'A single item on that menu, with its own address. One for fetching a user, another for updating them.',
    heard: '“I added an endpoint” means there is now one more thing the app can ask for.',
  },
  {
    id: 'rest',
    deckId: 'web',
    term: 'REST',
    gist: 'the common style for APIs',
    plain:
      'A widely used convention for organizing an API around things and standard actions on them. Why so many web addresses look like slash-users-slash-42.',
    heard: '“A REST API” mostly just means “a normal, unsurprising API.”',
    aliases: ['restful', 'graphql'],
  },
  {
    id: 'frontend',
    deckId: 'web',
    term: 'frontend',
    gist: 'everything you can see and tap',
    plain:
      'The part of the software that runs in your browser or on your phone. Buttons, layout, animations, and anything that reacts to a tap.',
    heard: '“That is a frontend bug” means it looks wrong, not that the data is wrong.',
    aliases: ['front-end', 'client side', 'ui'],
  },
  {
    id: 'backend',
    deckId: 'web',
    term: 'backend',
    gist: 'the part on the servers',
    plain:
      'The code running on machines somewhere else, doing the work you cannot see: checking passwords, saving orders, charging cards, enforcing rules.',
    heard: '“The backend is slow” means the waiting happens before anything reaches your screen.',
    aliases: ['back-end', 'server side'],
  },
  {
    id: 'full-stack',
    deckId: 'web',
    term: 'full stack',
    gist: 'works on both halves',
    plain:
      'An engineer comfortable on both the visible side and the server side. Common on small teams, where there is nobody else to hand it to.',
    heard: 'Sometimes a genuine skill set, sometimes a hiring manager saving a headcount.',
    aliases: ['fullstack'],
  },
  {
    id: 'server',
    deckId: 'web',
    term: 'server',
    gist: 'someone else’s always-on computer',
    plain:
      'A computer that sits in a data center running your software around the clock, answering requests. Not physically different from a desktop, just never turned off.',
    heard: '“The server is down” means that machine stopped answering and nothing works.',
  },
  {
    id: 'cloud',
    deckId: 'web',
    term: 'the cloud',
    gist: 'renting computers by the hour',
    plain:
      'Instead of buying servers, you rent them from Amazon, Google, or Microsoft and give them back when you are done. That is the entire idea.',
    heard: 'There is no cloud. It is a warehouse full of machines in Virginia.',
  },
  {
    id: 'aws',
    deckId: 'web',
    term: 'AWS',
    gist: 'Amazon’s half of the internet',
    plain:
      'Amazon Web Services, the largest provider of rented computing. When it has a bad day, a surprising fraction of the websites you use have a bad day too.',
    heard: '“Is it us or is it AWS?” is a real diagnostic step.',
    aliases: ['azure', 'gcp'],
  },
  {
    id: 'serverless',
    deckId: 'web',
    term: 'serverless',
    gist: 'servers, just not your problem',
    plain:
      'Code that runs on demand without anyone managing a machine for it. There are still servers. You are just not the one patching them.',
    heard: 'The name is a running joke and it stuck anyway.',
  },
  {
    id: 'http',
    deckId: 'web',
    term: 'HTTP',
    gist: 'the rules browsers speak',
    plain:
      'The agreed format for asking a server for something and getting a reply. The S in HTTPS means the conversation is encrypted, which is now the default.',
    heard: '“A 500” is the server admitting it broke. “A 404” means it does not exist.',
    aliases: ['https', '404', '500'],
  },
  {
    id: 'json',
    deckId: 'web',
    term: 'JSON',
    gist: 'the format data travels in',
    plain:
      'A plain-text way of writing structured information that both people and programs can read. Almost everything an API sends back is in it.',
    heard: '“Send me the JSON” means “show me the raw data.”',
  },
  {
    id: 'webhook',
    deckId: 'web',
    term: 'webhook',
    gist: 'they call you when something happens',
    plain:
      'The reverse of a normal request. Rather than asking repeatedly whether a payment cleared, you give the other service an address and they notify you.',
    heard: '“The webhook did not fire” means the notification never arrived.',
  },
  {
    id: 'latency',
    deckId: 'web',
    term: 'latency',
    gist: 'the wait before anything happens',
    plain:
      'How long a round trip takes. Distance matters: a request to a server in Europe is slower than one down the road, and no amount of code fixes the speed of light.',
    heard: '“High latency” means it feels sluggish even though nothing is broken.',
  },
  {
    id: 'scaling',
    deckId: 'web',
    term: 'scaling',
    gist: 'handling more people at once',
    plain:
      'Making the system cope with growth, either by using bigger machines or by using more of them. Most of the interesting problems come from choosing the second.',
    heard: '“That will not scale” means it works today and collapses at ten times the traffic.',
  },
  {
    id: 'load-balancer',
    deckId: 'web',
    term: 'load balancer',
    gist: 'the host directing traffic',
    plain:
      'A traffic cop sitting in front of several servers, spreading requests across them and skipping any that stopped responding.',
    heard: 'Why a site can stay up while individual machines are being replaced.',
  },
  {
    id: 'microservices',
    deckId: 'web',
    term: 'microservices',
    gist: 'many small apps instead of one big one',
    plain:
      'Splitting a system into separate services that talk over the network, so teams can work and deploy independently. Buys autonomy, costs complexity.',
    heard: 'Half the industry moved to them and a loud portion has been moving back.',
    aliases: ['monolith'],
  },
  {
    id: 'downtime',
    deckId: 'web',
    term: 'downtime',
    gist: 'the minutes it was broken for everyone',
    plain:
      'Time when the product was not usable. Measured obsessively, because contracts often promise a specific number of minutes per year.',
    heard: '“Four nines” means under an hour of downtime a year. It is a high bar.',
    aliases: ['uptime', 'sla'],
  },
  {
    id: 'environment-variable',
    deckId: 'web',
    term: 'environment variable',
    gist: 'settings kept outside the code',
    plain:
      'Configuration handed to the app when it starts, so passwords and addresses are not written into the code itself and can differ between test and live.',
    heard: '“The env var was missing” is a very common explanation for a failed deploy.',
    aliases: ['env var', 'config'],
  },
];

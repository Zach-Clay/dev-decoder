import type { Card } from './types';

export const slangCards: Card[] = [
  {
    id: 'yak-shaving',
    deckId: 'slang',
    term: 'yak shaving',
    gist: 'six detours from the actual task',
    plain:
      'When fixing one thing requires fixing another thing first, which requires updating a tool, which requires... and hours later you are somewhere unrecognizable.',
    heard: '“I have been yak shaving all morning” means nothing on the list got done.',
  },
  {
    id: 'bikeshedding',
    deckId: 'slang',
    term: 'bikeshedding',
    gist: 'arguing about the easy part',
    plain:
      'A group spends five minutes approving the complicated thing nobody understands, then an hour on the button color, because everyone has an opinion on button colors.',
    heard: 'From a story about a committee approving a nuclear plant, then debating the bike shed.',
  },
  {
    id: 'rubber-ducking',
    deckId: 'slang',
    term: 'rubber ducking',
    gist: 'explaining it out loud fixes it',
    plain:
      'Describing a problem step by step to something that cannot help, and finding the answer halfway through your own sentence. Traditionally to a rubber duck on the desk.',
    heard: 'If he stops mid-question and says “never mind, got it” — that is this.',
  },
  {
    id: 'works-on-my-machine',
    deckId: 'slang',
    term: 'works on my machine',
    gist: 'fine here, broken everywhere else',
    plain:
      'The classic defense when code runs perfectly on the author’s laptop and nowhere else. Almost always a difference in setup nobody wrote down.',
    heard: 'Said as a joke now, because everyone has been the person saying it.',
  },
  {
    id: 'ship-it',
    deckId: 'slang',
    term: 'ship it',
    gist: 'good enough, send it',
    plain:
      'The call to stop polishing and release. Sometimes confident, sometimes a shrug at the end of a long week.',
    heard: '“Ship it” said by one person is enthusiasm. Said by three is peer pressure.',
  },
  {
    id: 'dogfooding',
    deckId: 'slang',
    term: 'dogfooding',
    gist: 'using your own product daily',
    plain:
      'The team runs the thing they built as their real, everyday tool. It surfaces problems no amount of testing would, because now the annoyances are theirs.',
    heard: 'From “eating your own dog food,” which is not a more appetizing phrase.',
  },
  {
    id: 'hotfix',
    deckId: 'slang',
    term: 'hotfix',
    gist: 'an emergency patch, right now',
    plain:
      'A small change pushed straight to live to stop something actively breaking, skipping the normal careful process because waiting costs more.',
    heard: '“I am pushing a hotfix” means he will be at the laptop for another twenty minutes.',
    aliases: ['firefighting'],
  },
  {
    id: 'spaghetti-code',
    deckId: 'slang',
    term: 'spaghetti code',
    gist: 'tangled beyond following',
    plain:
      'Code where everything connects to everything and pulling one strand moves five others. Usually the result of years of small urgent changes.',
    heard: '“It is spaghetti in there” is a warning about how long something will take.',
  },
  {
    id: 'code-smell',
    deckId: 'slang',
    term: 'code smell',
    gist: 'not wrong, but off',
    plain:
      'Something that works but looks like a symptom of a deeper problem. Not a bug, just a raised eyebrow with a name.',
    heard: '“That smells” in a code review means “convince me this is right.”',
  },
  {
    id: 'heisenbug',
    deckId: 'slang',
    term: 'heisenbug',
    gist: 'disappears when you look for it',
    plain:
      'A bug that stops happening the moment you try to investigate, because observing it changes the timing. Maddening and real.',
    heard: 'Named after the physicist. Engineers are like this.',
  },
  {
    id: 'greenfield',
    deckId: 'slang',
    term: 'greenfield',
    gist: 'building from nothing',
    plain:
      'A brand new project with no existing code to work around. Every engineer wants one, and the second year of one is always harder than the first.',
    heard: '“Brownfield” is the opposite: working inside something that already exists.',
    aliases: ['brownfield'],
  },
  {
    id: '10x-engineer',
    deckId: 'slang',
    term: '10x engineer',
    gist: 'the mythical super-productive one',
    plain:
      'The idea that some engineers produce ten times as much as others. Half meant seriously, half mocked, and often used to justify terrible behavior from someone talented.',
    heard: '“Rockstar” and “ninja” in job ads are the same idea, and a bad sign.',
    aliases: ['rockstar', 'ninja'],
  },
  {
    id: 'bandwidth',
    deckId: 'slang',
    term: 'bandwidth',
    gist: 'capacity to take on more',
    plain:
      'Borrowed from networking to mean personal availability. “I do not have bandwidth” is the professional way to say no without saying no.',
    heard: '“Do you have bandwidth for this?” genuinely means “are you too busy?”',
  },
  {
    id: 'wip',
    deckId: 'slang',
    term: 'WIP',
    gist: 'unfinished, do not judge',
    plain:
      'Work in progress. Tagged onto anything shared before it is ready, as a request not to review it too hard yet.',
    heard: '“WIP, do not merge” is a common title on a pull request.',
    aliases: ['draft'],
  },
  {
    id: 'lgtm',
    deckId: 'slang',
    term: 'LGTM',
    gist: 'looks good to me',
    plain:
      'The approval on a code review. Depending on the sender, it means either a careful read or a glance at the title.',
    heard: '“LGTM with nits” means approved, with small complaints attached.',
    aliases: ['nit', 'nits'],
  },
  {
    id: 'pebkac',
    deckId: 'slang',
    term: 'PEBKAC',
    gist: 'the user did it',
    plain:
      'Problem exists between keyboard and chair. Old support slang for a bug that turned out to be someone not reading the screen.',
    heard: 'Never said to the customer’s face.',
  },
  {
    id: 'nerd-snipe',
    deckId: 'slang',
    term: 'nerd sniping',
    gist: 'a problem too interesting to ignore',
    plain:
      'Mentioning a puzzle so compelling that the engineer abandons whatever they were meant to be doing to solve it. Can be done accidentally or on purpose.',
    heard: '“I got nerd sniped” is an explanation for a lost afternoon.',
  },
  {
    id: 'touch-grass',
    deckId: 'slang',
    term: 'touch grass',
    gist: 'go outside, log off',
    plain:
      'Told to someone who has been too deep in a screen or an argument online. Affectionate when a friend says it, less so from a stranger.',
    heard: 'Fair to say to him at eleven on a Saturday night.',
  },
  {
    id: 'big-o',
    deckId: 'slang',
    term: 'does not scale',
    gist: 'fine now, disastrous later',
    plain:
      'A dismissal for anything that works at small size and falls apart at large size. Sometimes a real concern, often used to reject something early.',
    heard: '“Premature optimization” is the counter-argument to hearing this too soon.',
  },
  {
    id: 'happy-path',
    deckId: 'slang',
    term: 'happy path',
    gist: 'when everything goes right',
    plain:
      'The version where the user does exactly the expected thing and nothing fails. Demos live here. Real users do not.',
    heard: '“I have only tested the happy path” is an honest admission.',
  },
];

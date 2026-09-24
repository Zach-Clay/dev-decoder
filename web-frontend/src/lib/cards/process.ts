import type { Card } from './types';

export const processCards: Card[] = [
  {
    id: 'agile',
    deckId: 'process',
    term: 'agile',
    gist: 'build in small pieces, adjust often',
    plain:
      'The idea that you ship something small, see how it lands, and change course, rather than planning a year up front. In practice it mostly manifests as meetings.',
    heard: '“We are agile” is said by companies that are and companies that are not.',
  },
  {
    id: 'sprint',
    deckId: 'process',
    term: 'sprint',
    gist: 'a two-week batch of work',
    plain:
      'A fixed stretch, usually two weeks, that the team commits a set of work to. It ends, you look at what happened, you start another.',
    heard: '“That is not in this sprint” means “not for two weeks.”',
    aliases: ['scrum'],
  },
  {
    id: 'standup',
    deckId: 'process',
    term: 'standup',
    gist: 'the short daily status meeting',
    plain:
      'A brief daily check-in: what you did, what you are doing, what is blocking you. Originally done standing so it would stay short. It rarely stays short.',
    heard: '“I have standup” means fifteen minutes, give or take twenty.',
    aliases: ['daily'],
  },
  {
    id: 'backlog',
    deckId: 'process',
    term: 'backlog',
    gist: 'the list of everything not done yet',
    plain:
      'Every task, bug, and idea the team has agreed matters but has not started. It only ever grows.',
    heard: '“I will add it to the backlog” sometimes means yes and sometimes means never.',
  },
  {
    id: 'ticket',
    deckId: 'process',
    term: 'ticket',
    gist: 'one unit of tracked work',
    plain:
      'A single written-down task with a number, an owner, and a status. It is how work becomes visible to people who are not doing it.',
    heard: '“Do we have a ticket for that?” means “is this real or are we chatting?”',
    aliases: ['issue', 'story'],
  },
  {
    id: 'pull-request',
    deckId: 'process',
    term: 'pull request',
    gist: 'proposed changes, up for review',
    plain:
      'A bundle of changes offered to the project, with a description of why. Teammates read it, comment, and approve before anything joins the real code.',
    heard: '“Can you review my PR?” is the most common request an engineer makes.',
    aliases: ['pr', 'merge request'],
  },
  {
    id: 'code-review',
    deckId: 'process',
    term: 'code review',
    gist: 'a colleague reads it before it ships',
    plain:
      'Another engineer reads the proposed change looking for mistakes, unclear bits, and missed cases. It catches real bugs and is also where taste gets argued about.',
    heard: '“LGTM” means looks good to me, and is the approval stamp.',
  },
  {
    id: 'merge',
    deckId: 'process',
    term: 'merge',
    gist: 'folding the change into the real code',
    plain:
      'Combining an approved set of changes into the main version everybody builds on. After this, it is officially part of the project.',
    heard: '“It is merged” means accepted, though not necessarily live yet.',
  },
  {
    id: 'merge-conflict',
    deckId: 'process',
    term: 'merge conflict',
    gist: 'two people edited the same lines',
    plain:
      'When two changes touch the same place and the tool cannot tell which one wins, so a human has to decide. Annoying, common, rarely serious.',
    heard: '“I am stuck in a merge conflict” means tedium, not disaster.',
  },
  {
    id: 'main-branch',
    deckId: 'process',
    term: 'branch',
    gist: 'your own copy to work in',
    plain:
      'A private line of work split off from the shared version, so you can make a mess without affecting anyone. When it is ready, it merges back.',
    heard: '“Main” is the branch everyone agrees is the real one.',
    aliases: ['main', 'master'],
  },
  {
    id: 'deploy',
    deckId: 'process',
    term: 'deploy',
    gist: 'pushing it live to real users',
    plain:
      'Moving finished code onto the servers people actually use. The moment work stops being theoretical.',
    heard: '“Do not deploy on a Friday” is a superstition with a lot of evidence behind it.',
    aliases: ['ship', 'release'],
  },
  {
    id: 'ci-cd',
    deckId: 'process',
    term: 'CI/CD',
    gist: 'the robot that tests and ships',
    plain:
      'Automation that runs the tests on every change and, if they pass, puts it live. It removes the human step where somebody forgets something.',
    heard: '“CI is failing” means the robot found a problem and blocked the change.',
    aliases: ['continuous integration', 'pipeline', 'build'],
  },
  {
    id: 'rollback',
    deckId: 'process',
    term: 'rollback',
    gist: 'putting yesterday’s version back',
    plain:
      'Reverting to the last version that worked, fast, when a release goes wrong. Usually the right first move: fix the users now, understand it after.',
    heard: '“We rolled it back” means the problem stopped, not that it is solved.',
    aliases: ['revert'],
  },
  {
    id: 'staging',
    deckId: 'process',
    term: 'staging',
    gist: 'the rehearsal copy',
    plain:
      'A full copy of the system that looks and behaves like the real one but has no real users on it. Where changes get tried before the real thing.',
    heard: '“Prod” is the real one, with real customers and real consequences.',
    aliases: ['prod', 'production', 'environment'],
  },
  {
    id: 'on-call',
    deckId: 'process',
    term: 'on call',
    gist: 'the week your phone can wake you',
    plain:
      'A rotation where one engineer is responsible for responding if something breaks, including at three in the morning. It comes around every few weeks.',
    heard: '“I am on call this week” is worth knowing before making weekend plans.',
    aliases: ['pager', 'pagerduty'],
  },
  {
    id: 'incident',
    deckId: 'process',
    term: 'incident',
    gist: 'something is broken right now',
    plain:
      'A live problem affecting users, with people dropped into a call until it is fixed. Severity levels decide how many people get woken up.',
    heard: '“We are in an incident” means he is not available for anything else.',
    aliases: ['outage', 'sev1'],
  },
  {
    id: 'postmortem',
    deckId: 'process',
    term: 'postmortem',
    gist: 'writing up what went wrong',
    plain:
      'A document explaining what broke, why, and what will stop it happening again. Good teams keep it blameless, because people hide mistakes otherwise.',
    heard: '“Blameless” is the important word. The system failed, not the person.',
    aliases: ['retro', 'retrospective', 'rca'],
  },
  {
    id: 'mvp',
    deckId: 'process',
    term: 'MVP',
    gist: 'the smallest version worth shipping',
    plain:
      'Minimum viable product: the least you can build and still learn whether anyone wants it. The discipline is in what you leave out.',
    heard: '“Let us MVP it” means cut scope and get it out.',
    aliases: ['minimum viable product'],
  },
  {
    id: 'scope-creep',
    deckId: 'process',
    term: 'scope creep',
    gist: 'the project quietly getting bigger',
    plain:
      'When “just one more small thing” happens enough times that a two-week job becomes two months. Usually nobody’s fault individually.',
    heard: '“That is scope creep” is a polite way of saying no.',
  },
  {
    id: 'estimate',
    deckId: 'process',
    term: 'estimate',
    gist: 'a guess everyone treats as a promise',
    plain:
      'How long a piece of work is expected to take. Notoriously unreliable, because the hard part is usually the part nobody knew about.',
    heard: '“Two weeks” is the industry’s favorite unit of optimism.',
    aliases: ['story points', 'pointing'],
  },
  {
    id: 'blocked',
    deckId: 'process',
    term: 'blocked',
    gist: 'waiting on someone else',
    plain:
      'Unable to continue until something outside your control happens: an approval, another team’s work, access to a system.',
    heard: '“I am blocked on design” means the ball is not in his court.',
  },
];

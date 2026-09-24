import type { Card } from './types';

export const toolsCards: Card[] = [
  {
    id: 'github',
    deckId: 'tools',
    term: 'GitHub',
    gist: 'the shared drive for code',
    plain:
      'The website where teams keep their code, track every change, and argue about it in the comments. Also where most open-source software lives.',
    heard: '“It is on GitHub” means the code is somewhere he can point you at.',
  },
  {
    id: 'git',
    deckId: 'tools',
    term: 'Git',
    gist: 'unlimited undo, with names',
    plain:
      'The tool underneath GitHub that records every change anyone makes, who made it, and why. It lets several people edit the same files without destroying each other’s work.',
    heard: 'Git is the tool, GitHub is the website that hosts it. Not the same thing.',
  },
  {
    id: 'repo',
    deckId: 'tools',
    term: 'repo',
    gist: 'one project’s folder of code',
    plain:
      'Short for repository. A single project, with all of its files and its entire history of edits going back to the first day.',
    heard: '“Which repo is that in?” means “which project are we talking about?”',
    aliases: ['repository'],
  },
  {
    id: 'ide',
    deckId: 'tools',
    term: 'IDE',
    gist: 'the app he writes code in',
    plain:
      'Integrated development environment: a text editor with a lot of help built in, like autocomplete, error underlining, and a run button. Word processor is to essays what this is to code.',
    heard: 'Usually he just says “my editor.”',
    aliases: ['editor', 'integrated development environment'],
  },
  {
    id: 'vs-code',
    deckId: 'tools',
    term: 'VS Code',
    gist: 'the most popular editor',
    plain:
      'Microsoft’s free code editor, and the default choice for a huge share of the industry. Endlessly customizable, which is why everyone’s looks slightly different.',
    heard: '“Open it in VS Code” is the coding equivalent of “open it in Word.”',
    aliases: ['visual studio code', 'vscode'],
  },
  {
    id: 'cursor',
    deckId: 'tools',
    term: 'Cursor',
    gist: 'VS Code with AI baked in',
    plain:
      'A code editor built on top of VS Code, with an AI that can read your whole project and write changes across many files at once.',
    heard: 'One of the first tools that made AI coding feel normal instead of a party trick.',
  },
  {
    id: 'claude-code',
    deckId: 'tools',
    term: 'Claude Code',
    gist: 'an AI that works in his terminal',
    plain:
      'Anthropic’s coding agent. You describe a task in plain English and it reads the project, edits files, runs tests, and reports back, rather than just suggesting snippets.',
    heard: '“Claude Code did it” is increasingly a real answer to “who wrote this?”',
    aliases: ['claude'],
  },
  {
    id: 'codex',
    deckId: 'tools',
    term: 'Codex',
    gist: 'OpenAI’s coding agent',
    plain:
      'OpenAI’s tool for the same job: hand it work, it writes and edits code. The name also refers to their older code-writing models.',
    heard: 'Usually mentioned in the same breath as Claude Code, as the competing option.',
  },
  {
    id: 'copilot',
    deckId: 'tools',
    term: 'Copilot',
    gist: 'autocomplete that finishes your code',
    plain:
      'GitHub’s AI assistant, best known for suggesting the next few lines as you type. The tool that got most engineers used to AI in their editor.',
    heard: '“Copilot wrote that bit” is said with roughly the shame of using spellcheck.',
  },
  {
    id: 'terminal',
    deckId: 'tools',
    term: 'terminal',
    gist: 'the black window with text',
    plain:
      'A text-only way to control the computer by typing commands. It looks intimidating and hacker-ish, and it is mostly used for extremely boring things like listing files.',
    heard: '“Run it in the terminal” means type a command instead of clicking a button.',
    aliases: ['command line', 'cli', 'shell', 'bash'],
  },
  {
    id: 'docker',
    deckId: 'tools',
    term: 'Docker',
    gist: 'shipping the whole kitchen, not the recipe',
    plain:
      'A way to package software together with everything it needs to run, so it behaves identically on his laptop, a coworker’s laptop, and the server.',
    heard: 'The main cure for “it works on my machine.”',
    aliases: ['container', 'containers'],
  },
  {
    id: 'jira',
    deckId: 'tools',
    term: 'Jira',
    gist: 'where the work gets tracked',
    plain:
      'The software teams use to list every task, assign owners, and mark things done. Widely used and near-universally complained about.',
    heard: '“Put it in Jira” means “I will not remember this otherwise.”',
    aliases: ['linear', 'asana'],
  },
  {
    id: 'figma',
    deckId: 'tools',
    term: 'Figma',
    gist: 'where the design is drawn',
    plain:
      'The tool designers use to draw what an app should look like, before anyone builds it. Engineers open it to check spacing and colors.',
    heard: '“Check the Figma” means “the answer to what it should look like is in there.”',
  },
  {
    id: 'slack',
    deckId: 'tools',
    term: 'Slack',
    gist: 'work group chat',
    plain:
      'Chat for companies, split into channels by topic. For most software teams it has entirely replaced internal email.',
    heard: '“I will Slack you” is now a verb at basically every tech company.',
  },
  {
    id: 'postman',
    deckId: 'tools',
    term: 'Postman',
    gist: 'a tester for APIs',
    plain:
      'An app for poking at a service directly to see what it sends back, without building any interface around it first.',
    heard: '“I hit it in Postman and it works” means the problem is elsewhere.',
  },
  {
    id: 'localhost',
    deckId: 'tools',
    term: 'localhost',
    gist: 'the version only on his laptop',
    plain:
      'The copy of the app running on his own machine, invisible to everyone else. It is where every change gets tried first.',
    heard: '“It works on localhost” is one step short of a promise.',
    aliases: ['local', '127.0.0.1'],
  },
];

import type { Card } from './types';

export const codeCards: Card[] = [
  {
    id: 'code',
    deckId: 'code',
    term: 'code',
    gist: 'instructions written in a strict language',
    plain:
      'Text that tells a computer exactly what to do, in a language with no tolerance for ambiguity. A missing comma is a real problem.',
    heard: '“The code” usually means the whole body of work, not one file.',
  },
  {
    id: 'bug',
    deckId: 'code',
    term: 'bug',
    gist: 'it does the wrong thing',
    plain:
      'Any place where the software behaves differently from what was intended. Rarely dramatic, usually a small wrong assumption made three months ago.',
    heard: '“Is that a bug or a feature?” is a genuine question more often than you would hope.',
  },
  {
    id: 'function',
    deckId: 'code',
    term: 'function',
    gist: 'a named, reusable step',
    plain:
      'A chunk of code with a name, that takes some input and hands back a result. Write it once, use it everywhere, like a recipe you can refer to instead of re-explaining.',
    heard: '“I pulled that into a function” means he stopped repeating himself.',
    aliases: ['method'],
  },
  {
    id: 'variable',
    deckId: 'code',
    term: 'variable',
    gist: 'a labeled box for a value',
    plain:
      'A name attached to a piece of information so the code can refer to it later. Naming them well is a genuine and constant source of argument.',
    heard:
      'The classic joke is that naming things is one of the two hardest problems in the field.',
  },
  {
    id: 'framework',
    deckId: 'code',
    term: 'framework',
    gist: 'a prebuilt skeleton to fill in',
    plain:
      'A big starter kit that handles the boring structural parts so you only write the parts specific to your product. React is one.',
    heard: 'Choosing between them is a favorite way to spend a week not shipping anything.',
  },
  {
    id: 'library',
    deckId: 'code',
    term: 'library',
    gist: 'someone else’s code you borrow',
    plain:
      'A bundle of ready-made code you pull into your project so you do not have to write it yourself. Date formatting, charts, animations, all of it exists already.',
    heard:
      'A framework calls your code, a library is code you call. That is the actual difference.',
    aliases: ['package', 'dependency'],
  },
  {
    id: 'npm',
    deckId: 'code',
    term: 'npm',
    gist: 'the app store for code',
    plain:
      'The place JavaScript projects download their libraries from, and the command used to install them. Millions of packages, of wildly varying quality.',
    heard: '“npm install” is the first thing typed on any new project.',
  },
  {
    id: 'refactor',
    deckId: 'code',
    term: 'refactor',
    gist: 'tidying without changing behavior',
    plain:
      'Reorganizing code so it is easier to work with, while it keeps doing exactly what it did before. Nothing visible changes, which makes it hard to explain to a manager.',
    heard: '“I need to refactor this first” means the next change is too scary otherwise.',
  },
  {
    id: 'tech-debt',
    deckId: 'code',
    term: 'tech debt',
    gist: 'shortcuts that charge interest',
    plain:
      'The accumulated cost of every quick fix nobody went back and cleaned up. Each one is fine alone, and together they make everything slower.',
    heard: '“We are drowning in tech debt” means the code fights back now.',
    aliases: ['technical debt'],
  },
  {
    id: 'legacy-code',
    deckId: 'code',
    term: 'legacy code',
    gist: 'old code nobody wants to touch',
    plain:
      'Software still running the business that was written years ago, often by people who left. It works, and no one is entirely sure how.',
    heard: 'Said in the tone you would use for an old house with questionable wiring.',
  },
  {
    id: 'boilerplate',
    deckId: 'code',
    term: 'boilerplate',
    gist: 'the same setup code every time',
    plain:
      'The repetitive scaffolding every project needs before the interesting part starts. Necessary, tedious, and the first thing people hand to an AI.',
    heard: '“It is mostly boilerplate” means the work is dull, not hard.',
  },
  {
    id: 'open-source',
    deckId: 'code',
    term: 'open source',
    gist: 'code anyone can read and use',
    plain:
      'Software published publicly, free to use and modify. An enormous share of the internet runs on it, much of it maintained by volunteers.',
    heard: 'The recurring scandal is how few people maintain how much of it.',
    aliases: ['oss'],
  },
  {
    id: 'syntax',
    deckId: 'code',
    term: 'syntax',
    gist: 'the grammar rules of a language',
    plain:
      'The exact punctuation and structure a programming language demands. Get it wrong and nothing runs at all, which is at least an honest kind of failure.',
    heard: '“Syntax error” means a typo, and the computer will tell you the line.',
  },
  {
    id: 'compile',
    deckId: 'code',
    term: 'compile',
    gist: 'translating code into machine instructions',
    plain:
      'Converting the code a person wrote into the form a computer actually executes. Some languages do this up front, others do it as they go.',
    heard: '“It does not compile” means it is broken before it even had a chance to run.',
    aliases: ['build'],
  },
  {
    id: 'runtime',
    deckId: 'code',
    term: 'runtime',
    gist: 'while it is actually running',
    plain:
      'The period when the software is live and doing its job, as opposed to being written or built. Errors that show up here are the ones users see.',
    heard: '“A runtime error” is worse than a compile error, because it reached real people.',
  },
  {
    id: 'test',
    deckId: 'code',
    term: 'test',
    gist: 'code that checks the code',
    plain:
      'A small automated program that runs the real code and confirms it still does the right thing. Teams run thousands of them on every change.',
    heard: '“The tests are red” means something broke. Green means go.',
    aliases: ['unit test', 'tests'],
  },
  {
    id: 'edge-case',
    deckId: 'code',
    term: 'edge case',
    gist: 'the weird input nobody planned for',
    plain:
      'An unusual situation the code was not designed to handle: an empty name, a leap day, a hundred-character address. They cause a large share of bugs.',
    heard: '“That is an edge case” can mean it is rare, or that he would rather not deal with it.',
  },
  {
    id: 'api-contract',
    deckId: 'code',
    term: 'breaking change',
    gist: 'an update that breaks other people',
    plain:
      'A change that stops working for anyone relying on the old behavior. They require warning, coordination, and usually a version number bump.',
    heard: '“That would be breaking” is a strong argument against doing something.',
  },
];

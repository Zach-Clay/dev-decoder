import type { Card } from './types';

export const dataCards: Card[] = [
  {
    id: 'database',
    deckId: 'data',
    term: 'database',
    gist: 'the app’s permanent memory',
    plain:
      'Where an application keeps everything that has to survive a refresh: accounts, orders, messages, all of it. Picture a spreadsheet built for millions of rows and thousands of people at once.',
    heard: '“It is in the database” means the information exists and can be found.',
    aliases: ['db'],
  },
  {
    id: 'sql',
    deckId: 'data',
    term: 'SQL',
    gist: 'the language for asking a database questions',
    plain:
      'The way you ask a database for exactly the rows you want. It reads almost like English: select these columns, from this table, where this is true.',
    heard: 'Pronounced either “sequel” or spelled out, and people are weirdly firm about which.',
    aliases: ['structured query language'],
  },
  {
    id: 'query',
    deckId: 'data',
    term: 'query',
    gist: 'one question asked of the data',
    plain:
      'A single request to the database. “Every customer who ordered twice last month” is a query, and writing it well is most of the job.',
    heard: '“That query is slow” means a page is loading badly because of one bad question.',
  },
  {
    id: 'table',
    deckId: 'data',
    term: 'table',
    gist: 'one sheet of the spreadsheet',
    plain:
      'A single collection of records of the same kind. A users table, an orders table. Rows are individual records, columns are the fields each one has.',
    heard: '“Which table is that in?” means “where is that information kept?”',
    aliases: ['row', 'column'],
  },
  {
    id: 'schema',
    deckId: 'data',
    term: 'schema',
    gist: 'the shape the data must take',
    plain:
      'The agreed structure: which tables exist, what columns they have, what is required. Changing it once there is real data in there is a genuinely delicate operation.',
    heard: '“That needs a schema change” means the request is bigger than it sounds.',
  },
  {
    id: 'migration',
    deckId: 'data',
    term: 'migration',
    gist: 'a careful change to the data’s shape',
    plain:
      'A scripted, reversible change to the database structure, run on every copy in the right order. Done badly, it is one of the few ways to actually lose data.',
    heard: 'Migrations get reviewed more nervously than almost anything else.',
  },
  {
    id: 'nosql',
    deckId: 'data',
    term: 'NoSQL',
    gist: 'databases with looser rules',
    plain:
      'A family of databases that drop the rigid table structure in exchange for flexibility and scale. Good when records vary a lot, worse when you need strict guarantees.',
    heard: 'The choice between this and SQL is a whole genre of engineering argument.',
    aliases: ['mongodb', 'document database'],
  },
  {
    id: 'index',
    deckId: 'data',
    term: 'index',
    gist: 'a shortcut for finding rows',
    plain:
      'Extra bookkeeping that lets the database jump straight to what you asked for instead of reading every row. Exactly like the index at the back of a book.',
    heard: '“It needed an index” is the answer to a shocking number of slowness complaints.',
  },
  {
    id: 'cache',
    deckId: 'data',
    term: 'cache',
    gist: 'keeping the answer nearby',
    plain:
      'A temporary copy of something expensive to fetch, kept close by so it can be handed over instantly next time. Fast, and occasionally stale.',
    heard: '“Try clearing your cache” is tech support’s favorite sentence for a reason.',
  },
  {
    id: 'crud',
    deckId: 'data',
    term: 'CRUD',
    gist: 'create, read, update, delete',
    plain:
      'The four things you can do to a record, and therefore the four things most business software consists of. Said with a certain resignation.',
    heard: '“It is a CRUD app” means it is not glamorous and it works.',
  },
  {
    id: 'etl',
    deckId: 'data',
    term: 'ETL',
    gist: 'moving data somewhere useful',
    plain:
      'Extract, transform, load: pull data out of one system, clean it up, and put it somewhere it can be analyzed. Deeply unglamorous, absolutely everywhere.',
    heard: '“The pipeline broke” usually means one of these jobs failed overnight.',
    aliases: ['pipeline', 'data pipeline'],
  },
  {
    id: 'data-warehouse',
    deckId: 'data',
    term: 'data warehouse',
    gist: 'one place to analyze everything',
    plain:
      'A separate database built for answering big questions across the whole company, so that heavy analysis does not slow down the live product.',
    heard: 'Where the dashboards the executives look at get their numbers.',
    aliases: ['data lake', 'snowflake', 'bigquery'],
  },
  {
    id: 'backup',
    deckId: 'data',
    term: 'backup',
    gist: 'the copy you hope to never need',
    plain:
      'A stored snapshot of the data from a point in time. The important half is restoring it, which is the part teams discover they never tested.',
    heard: '“When did we last test the restore?” is the question that matters.',
  },
  {
    id: 'pii',
    deckId: 'data',
    term: 'PII',
    gist: 'data that identifies a real person',
    plain:
      'Personally identifiable information: names, emails, addresses, card numbers. It carries legal obligations, so it gets handled with extra care and kept out of logs.',
    heard: '“Does that log contain PII?” is a question that stops a deploy.',
    aliases: ['personally identifiable information'],
  },
];

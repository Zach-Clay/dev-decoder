import type { Card } from './types';

export const aiCards: Card[] = [
  {
    id: 'ai',
    deckId: 'ai',
    term: 'AI',
    gist: 'software that guesses well',
    plain:
      'Software that learned patterns from enormous piles of examples instead of being given step-by-step instructions. It is very good at guessing what comes next, which covers more than you would think.',
    heard: 'Nobody in the industry can finish a sentence without it right now.',
    aliases: ['artificial intelligence'],
  },
  {
    id: 'agi',
    deckId: 'ai',
    term: 'AGI',
    gist: 'the hypothetical one that does everything',
    plain:
      'Artificial general intelligence: a system that could handle any task a person could, rather than being good at one narrow thing. It does not exist, and people argue constantly about how close it is.',
    heard: '“That is an AGI problem” usually means “nobody has solved that.”',
    aliases: ['artificial general intelligence'],
  },
  {
    id: 'llm',
    deckId: 'ai',
    term: 'LLM',
    gist: 'the thing behind the chatbot',
    plain:
      'A large language model. It read an unreasonable amount of text and learned which words tend to follow which other words. Everything a chatbot does comes out of that one trick.',
    heard: '“We are calling an LLM for that” means the feature asks an AI to write the answer.',
    aliases: ['large language model'],
  },
  {
    id: 'model',
    deckId: 'ai',
    term: 'model',
    gist: 'one specific trained brain',
    plain:
      'A single trained AI, with a name and a version, like Opus 5 or Sonnet 5. Swapping models is like swapping which expert you hired: different speed, different cost, different quality.',
    heard: '“Which model are you using?” is the AI version of “which car do you drive?”',
  },
  {
    id: 'token',
    deckId: 'ai',
    term: 'token',
    gist: 'a chunk of a word',
    plain:
      'AI does not read letters or words, it reads tokens, which are word-sized pieces. Roughly three-quarters of a word each. They matter because companies charge by the token.',
    heard: '“That prompt is 40,000 tokens” means it is long and it cost real money.',
  },
  {
    id: 'token-maxxing',
    deckId: 'ai',
    term: 'token maxxing',
    gist: 'cramming in as much as possible',
    plain:
      'Joking slang for stuffing an AI with every scrap of context you can fit, on the theory that more input means a better answer. Sometimes true, often just expensive.',
    heard: 'Said with a grin, usually right before someone pastes an entire codebase into a chat.',
    aliases: ['tokenmaxxing', 'token maxing'],
  },
  {
    id: 'prompt',
    deckId: 'ai',
    term: 'prompt',
    gist: 'what you type to the AI',
    plain:
      'The instructions you hand the model. That is genuinely all it means, though people say it like it is a technical artifact.',
    heard: '“My prompt is not working” means “I asked badly and got nonsense.”',
  },
  {
    id: 'prompt-engineering',
    deckId: 'ai',
    term: 'prompt engineering',
    gist: 'learning to ask better',
    plain:
      'Rewriting your instructions until the AI reliably does the right thing. Mostly being specific, giving examples, and saying what not to do.',
    heard: 'It briefly had six-figure job postings attached to it, which tells you something.',
  },
  {
    id: 'context-window',
    deckId: 'ai',
    term: 'context window',
    gist: 'how much it can hold at once',
    plain:
      'The amount the model can keep in mind in a single conversation. Go past it and the earliest parts fall out, which is why a long chat starts forgetting things.',
    heard:
      '“It ran out of context” means the model lost the thread, not that it got confused emotionally.',
  },
  {
    id: 'hallucination',
    deckId: 'ai',
    term: 'hallucination',
    gist: 'confidently making things up',
    plain:
      'When the model states something false in the same fluent tone it uses for true things. It is not lying, it is guessing, and guessing sounds identical to knowing.',
    heard:
      '“It hallucinated the function name” means the AI invented something that does not exist.',
  },
  {
    id: 'rag',
    deckId: 'ai',
    term: 'RAG',
    gist: 'let it look things up first',
    plain:
      'Retrieval-augmented generation. Before answering, the system searches your documents and pastes the relevant bits into the prompt, so the AI answers from real sources instead of memory.',
    heard: 'Almost every company chatbot that knows your internal docs is doing this.',
    aliases: ['retrieval augmented generation'],
  },
  {
    id: 'fine-tuning',
    deckId: 'ai',
    term: 'fine-tuning',
    gist: 'extra training for one job',
    plain:
      'Taking a model that already works and training it further on your own examples so it picks up a specific style or task. Like sending a good writer to learn your house voice.',
    heard:
      '“We fine-tuned it on our support tickets” means they taught it to sound like their team.',
    aliases: ['finetune', 'fine tune'],
  },
  {
    id: 'training',
    deckId: 'ai',
    term: 'training',
    gist: 'the expensive learning phase',
    plain:
      'The months-long, extremely costly process of building a model in the first place. It happens once, long before you ever type anything into it.',
    heard: 'Distinct from using the model, which is fast and cheap by comparison.',
    aliases: ['pretraining'],
  },
  {
    id: 'inference',
    deckId: 'ai',
    term: 'inference',
    gist: 'the model actually answering',
    plain:
      'The moment a trained model is used to produce an answer. Training is school, inference is the job.',
    heard: '“Inference costs” is the bill for every answer the AI gives your users.',
  },
  {
    id: 'agent',
    deckId: 'ai',
    term: 'agent',
    gist: 'AI that takes actions, not just answers',
    plain:
      'An AI given tools and a goal, left to work in a loop until it is done. Instead of telling you how to rename the files, it renames the files.',
    heard: '“I set an agent on it” means he handed a task off and walked away.',
    aliases: ['agentic'],
  },
  {
    id: 'mcp',
    deckId: 'ai',
    term: 'MCP',
    gist: 'a standard plug for AI tools',
    plain:
      'Model Context Protocol: an agreed-upon way to connect an AI to outside tools like your calendar, your files, or a database. Think USB-C, but for giving an assistant abilities.',
    heard: '“I hooked it up over MCP” means he connected the AI to something real.',
    aliases: ['model context protocol'],
  },
  {
    id: 'vibe-coding',
    deckId: 'ai',
    term: 'vibe coding',
    gist: 'describing it and accepting whatever comes out',
    plain:
      'Building software by telling an AI what you want and running the result without closely reading the code. Great for a weekend project, nerve-wracking for anything with your bank details in it.',
    heard: 'Half brag, half confession. “I vibe coded the whole thing last night.”',
    aliases: ['vibecoding'],
  },
  {
    id: 'embedding',
    deckId: 'ai',
    term: 'embedding',
    gist: 'meaning turned into numbers',
    plain:
      'A way of turning text into a long list of numbers so that similar meanings end up near each other. It is how search finds “dog walker” when you typed “someone to walk my dog.”',
    heard: 'The machinery under any search that feels like it understood you.',
  },
  {
    id: 'multimodal',
    deckId: 'ai',
    term: 'multimodal',
    gist: 'handles images and audio too',
    plain:
      'A model that takes in more than text. You can hand it a photo, a screenshot, or a recording and it works with that directly.',
    heard: '“Just send it the screenshot, it is multimodal.”',
  },
  {
    id: 'chain-of-thought',
    deckId: 'ai',
    term: 'chain of thought',
    gist: 'making it show its work',
    plain:
      'Letting the model reason out loud, step by step, before answering. It gets noticeably better at hard problems the same way you do when you stop trying to do it in your head.',
    heard: 'Those “thinking” moments before a chatbot replies are often this.',
    aliases: ['reasoning', 'thinking'],
  },
  {
    id: 'gpu',
    deckId: 'ai',
    term: 'GPU',
    gist: 'the chip AI runs on',
    plain:
      'A graphics chip, originally built for video games, which turns out to be perfect for the math AI needs. Every AI company is fighting over them and they are wildly expensive.',
    heard: '“We are GPU constrained” means the bottleneck is hardware, not people.',
    aliases: ['graphics card', 'nvidia'],
  },
  {
    id: 'benchmark',
    deckId: 'ai',
    term: 'benchmark',
    gist: 'a standardized test for models',
    plain:
      'A fixed set of problems used to compare models against each other. Useful, and also gamed relentlessly, so a high score does not always mean a better experience.',
    heard: 'Every model launch leads with a chart of these.',
    aliases: ['evals', 'eval'],
  },
];

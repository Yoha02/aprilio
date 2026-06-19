export const siteNavigation = [
  { href: '/#live-trace', label: 'See it work' },
  { href: '/#engine', label: 'Technology' },
  { href: '/#evidence', label: 'Evidence' },
  { href: '/#applications', label: 'Applications' },
]

export const team = [
  {
    initials: 'GT',
    name: 'Gary Takahashi, MD',
    role: 'Clinical architecture',
    bio: 'Medical oncologist and creator of the original guideline retrieval system.',
  },
  {
    initials: 'AV',
    name: 'Andrew Van Benschoten',
    role: 'Systems & strategy',
    bio: 'Cloud architecture, commercial strategy, and the adaptive harness concept.',
  },
  {
    initials: 'EM',
    name: 'Eyoha Mengistu',
    role: 'Product & automation',
    bio: 'Product systems, automation, interface design, and market development.',
  },
  {
    initials: 'ET',
    name: 'Ebrahim Tarshizi',
    role: 'Operations & research',
    bio: 'Academic partnerships, research coordination, and operational execution.',
  },
]

export const architectureStages = [
  {
    number: '01',
    eyebrow: 'The process',
    title: 'Map the hidden structure',
    agent: 'Cartographer agent',
    description:
      'Aprilio reads an unfamiliar knowledge base the way an expert would: locating tables of contents, headers, indexes, and decision pathways before retrieval begins.',
    output: 'Structural blueprint',
  },
  {
    number: '02',
    eyebrow: 'The artifact',
    title: 'Build the Ontoharness',
    agent: 'Semantic annotator',
    description:
      'Clinical intent is mapped onto the source structure, creating a durable retrieval harness with navigation rules, semantic relationships, and traceable extraction logic.',
    output: 'Dataset-specific harness',
  },
  {
    number: '03',
    eyebrow: 'The action',
    title: 'Retrieve a Factum',
    agent: 'Architect agent',
    description:
      'Grounded Adaptive Retrieval assembles the relevant evidence, checks fresh external updates, and returns a coherent answer with exact provenance—or stops.',
    output: 'Verified, current Factum',
  },
]

export const applications = [
  {
    index: 'A',
    title: 'Clinical knowledge publishers',
    description:
      'Turn living guideline libraries into a traceable intelligence layer without flattening their decision logic into vector chunks.',
    tags: ['Licensing', 'White-label', 'Dataset harnesses'],
  },
  {
    index: 'B',
    title: 'Health systems',
    description:
      'Give care teams current, source-linked guidance while preserving the boundaries, governance, and audit trail enterprise medicine requires.',
    tags: ['Private deployment', 'Auditability', 'Workflow integration'],
  },
  {
    index: 'C',
    title: 'AI & clinical platforms',
    description:
      'Add deterministic retrieval, component-level failure attribution, and closed-loop harness regeneration to an existing AI product.',
    tags: ['API layer', 'Model agnostic', 'Safety tooling'],
  },
]

export const benchmarkRuns = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  aprilio: true,
  frontier: false,
}))

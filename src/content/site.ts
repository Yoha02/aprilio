export const siteNavigation = [
  { href: '/#live-trace', label: 'See it work' },
  { href: '/#engine', label: 'Architecture' },
  { href: '/#evidence', label: 'Evidence' },
  { href: '/#applications', label: 'Applications' },
]

export const team = [
  {
    initials: 'ET',
    name: 'Ebrahim Tarshizi',
    role: 'Operations & research',
    bio: 'Academic partnerships, research coordination, and operational execution.',
  },
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
]

export const architectureStages = [
  {
    number: '01',
    eyebrow: 'The process',
    title: 'Map the hidden structure',
    agent: 'Cartographer agent',
    description:
      'Reads the source hierarchy before retrieval begins, preserving sections, pathways, and decision logic.',
    output: 'Structural blueprint',
  },
  {
    number: '02',
    eyebrow: 'The artifact',
    title: 'Build a reusable source map',
    agent: 'Ontoharness',
    description:
      'Maps clinical intent onto that structure to create reusable navigation and evidence rules.',
    output: 'Dataset-specific harness',
  },
  {
    number: '03',
    eyebrow: 'The action',
    title: 'Issue a source-linked answer',
    agent: 'Factum',
    description:
      'Retrieves by structure, checks fresh updates, and returns an answer with exact provenance or stops.',
    output: 'Verified, current Factum',
  },
]

export const applications = [
  {
    index: 'A',
    title: 'Clinical knowledge publishers',
    description:
      'Turn changing guideline libraries into traceable, licensable intelligence without flattening their decision logic.',
    tags: ['Licensing', 'White-label', 'Dataset harnesses'],
  },
  {
    index: 'B',
    title: 'Health systems',
    description:
      'Give care teams current guidance with the evidence boundaries and audit trail enterprise medicine requires.',
    tags: ['Private deployment', 'Auditability', 'Workflow integration'],
  },
  {
    index: 'C',
    title: 'AI & clinical platforms',
    description:
      'Add grounded retrieval, failure attribution, and auditable answers to an existing AI product.',
    tags: ['API layer', 'Model agnostic', 'Safety tooling'],
  },
]

export const benchmarkRuns = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  aprilio: true,
  frontier: false,
}))

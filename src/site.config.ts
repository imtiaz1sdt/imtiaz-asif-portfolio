export const SITE = {
  name: 'Imtiaz Asif',
  role: '3D Artist · Apparel Engineering · Digital Product Visualisation',
  linkedin: 'https://www.linkedin.com/messaging/',
  description:
    'Textile engineer and 3D artist working across apparel development, technical design and digital product visualisation. Connecting garment knowledge with clear technical communication and compelling digital product experiences.',
  status: 'Design Director · Apparel / 3D / Technical design',
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: '3D Studio', href: '/3d-studio' },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/about' },
] as const;

export const WORK_CATEGORIES = [
  { id: 'apparel', label: 'Apparel & Product Design', short: 'Garment design', number: '01', description: 'Garment concepts, product ranges, colourways, materials and design development.' },
  { id: '3d-visualisation', label: '3D Apparel & Visualisation', short: '3D / digital garments', number: '02', description: 'Digital garments, realistic material studies, product renders and interactive 3D.' },
  { id: 'technical-design', label: 'Technical Design & Tech Packs', short: 'Technical development', number: '03', description: 'Technical flats, construction details, specifications and production communication.' },
  { id: 'motion', label: 'Motion & Visual Storytelling', short: 'Animation / image', number: '04', description: 'Product motion, compositing, animation and visual experiments.' },
] as const;

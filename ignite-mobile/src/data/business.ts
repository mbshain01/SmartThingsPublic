export const business = {
  name: 'Ignite Laser Engraving',
  tagline: 'Quality laser cutting & engraving in Sonoma County',
  owner: 'Michael Shain',
  email: 'michael.shain@ignitelaserengraving.com',
  phone: '707-385-9698',
  phoneTel: '+17073859698',
  address: {
    line1: '2362 Alvarado Avenue',
    city: 'Santa Rosa',
    state: 'CA',
    zip: '95404',
  },
  hours: '2:00 PM – 6:00 PM PDT, Monday–Friday',
  hoursNote: 'Other hours by appointment',
  etsy: 'https://www.etsy.com/shop/LaserEngravingIgnite',
  website: 'https://www.ignitelaserengraving.com',
  established: 'March 2023',
  story: [
    'Ignite Laser Engraving is a family-owned small business that was established in March of 2023.',
    'We are located in Santa Rosa, California — in the heart of the Sonoma County wine country.',
    'We offer a range of engraving and laser cutting services and products made of wood, glass and other materials. Our goal is to offer you excellent customer service and competitive prices.',
    'If you have a special occasion like a wedding, baby announcement, holiday or corporate celebration — look to Ignite Laser Engraving for a unique and thoughtful personalized gift.',
  ],
  leadTime:
    'All projects require a two-week minimum lead time. Rush requests (7 days or less) include a $50 flat fee.',
  payment:
    'Cash, check, and credit cards are accepted — with a 3.5% processing fee for credit cards.',
  filePrep:
    'Please submit designs in vector format (.SVG, .PNG, .JPG, .EPS, or .PDF) at 100% scale. We typically use BLACK fills for engraving, RED lines for cutting, and BLUE lines for scoring.',
} as const

export type ServiceKind = 'engraving' | 'cutting' | 'custom'

export const services = [
  {
    id: 'engraving' as const,
    title: 'Laser Engraving',
    blurb:
      'Personalize wood, glass, metal, tumblers, awards, and keepsakes with crisp custom etching.',
  },
  {
    id: 'cutting' as const,
    title: 'Laser Cutting',
    blurb:
      'Precision cut ornaments, boxes, signs, and custom shapes from wood, acrylic, and more.',
  },
  {
    id: 'custom' as const,
    title: 'Custom Projects',
    blurb:
      'Bring your own item or idea. We quote every project based on materials, size, and quantity.',
  },
]

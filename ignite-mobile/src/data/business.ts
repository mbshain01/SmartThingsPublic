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
  hours: [
    { day: 'Monday', text: '2:30 PM – 6:00 PM', from: 870, to: 1080 },
    { day: 'Tuesday', text: '2:30 PM – 5:00 PM', from: 870, to: 1020 },
    { day: 'Wednesday', text: '2:30 PM – 6:00 PM', from: 870, to: 1080 },
    { day: 'Thursday', text: '2:30 PM – 5:00 PM', from: 870, to: 1020 },
    { day: 'Friday', text: '2:30 PM – 6:00 PM', from: 870, to: 1080 },
    { day: 'Saturday', text: '2:30 PM – 8:00 PM', from: 870, to: 1200 },
    { day: 'Sunday', text: 'Closed', from: null, to: null },
  ],
  hoursNote: 'Other hours by appointment',
  calendly: 'https://calendly.com/michael-shain-ignitelaserengraving',
  etsy: 'https://www.etsy.com/shop/LaserEngravingIgnite',
  instagram: 'https://instagram.com/laser_ignite',
  facebook: 'https://www.facebook.com/ignitele',
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
  announcement: {
    id: 'pricing-2026-03-01',
    title: 'Pricing update effective March 1, 2026',
    body: 'We’re adjusting pricing to keep quality high as material costs rise, and introducing a formal rush fee for turnarounds under 3–5 business days. Projects quoted or booked before March 1 keep current rates.',
  },
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

/** Open-now status in America/Los_Angeles business hours. */
export function getOpenStatus(now = new Date()): {
  open: boolean
  label: string
  today: (typeof business.hours)[number]
} {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(now)
  const weekday = parts.find((p) => p.type === 'weekday')?.value ?? 'Sunday'
  const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? 0)
  const minute = Number(parts.find((p) => p.type === 'minute')?.value ?? 0)
  const minutes = hour * 60 + minute
  const today = business.hours.find((h) => h.day === weekday) ?? business.hours[6]
  if (today.from == null || today.to == null) {
    return { open: false, label: 'Closed today', today }
  }
  const open = minutes >= today.from && minutes < today.to
  return {
    open,
    label: open ? `Open · closes ${today.text.split('–')[1]?.trim() ?? ''}` : `Closed · ${today.text}`,
    today,
  }
}

import type { SiteConfig } from '@/blocks/types'
import { themePresets } from './theme-presets'

interface Template {
  keywords: string[]
  themePresetId: string
  build: (name: string) => SiteConfig
}

function getTheme(id: string) {
  return themePresets.find((p) => p.id === id)?.theme
}

const templates: Template[] = [
  {
    keywords: ['portfolio', 'personal', 'resume', 'freelance', 'designer', 'developer'],
    themePresetId: 'slate',
    build: (name) => ({
      name,
      theme: getTheme('slate'),
      blocks: [
        { id: 'block-navbar-1', type: 'navbar', variant: 'default', props: { logo: name, links: ['Work', 'About', 'Contact'], ctaText: 'Hire Me' } },
        { id: 'block-hero-1', type: 'hero', variant: 'minimal', props: { headline: `Hi, I'm ${name}`, subheadline: 'I design and build digital experiences that make a difference.', primaryCta: 'View My Work' } },
        { id: 'block-gallery-1', type: 'gallery', variant: 'grid', props: { title: 'Selected Work' } },
        { id: 'block-stats-1', type: 'stats', variant: 'counter', props: { title: 'By the Numbers', items: [{ value: '50+', label: 'Projects completed' }, { value: '8', label: 'Years experience' }, { value: '30+', label: 'Happy clients' }, { value: '5', label: 'Awards won' }] } },
        { id: 'block-testimonials-1', type: 'testimonials', variant: 'spotlight', props: { title: 'Client Feedback', items: [{ name: 'Alex Rivera', role: 'CEO at Startup', quote: 'Exceptional work. Delivered on time with incredible attention to detail.', rating: 5 }] } },
        { id: 'block-contact-1', type: 'contact', variant: 'form', props: { title: 'Get in Touch', subtitle: "Have a project in mind? Let's talk." } },
        { id: 'block-footer-1', type: 'footer', variant: 'minimal', props: { logo: name, copyright: `2026 ${name}. All rights reserved.`, links: ['LinkedIn', 'GitHub', 'Twitter'] } },
      ],
    }),
  },
  {
    keywords: ['restaurant', 'food', 'cafe', 'bakery', 'bar', 'bistro', 'pizza', 'sushi', 'kitchen'],
    themePresetId: 'amber',
    build: (name) => ({
      name,
      theme: getTheme('amber'),
      blocks: [
        { id: 'block-navbar-1', type: 'navbar', variant: 'centered', props: { logo: name, links: ['Menu', 'About', 'Reservations', 'Gallery'], ctaText: 'Book a Table' } },
        { id: 'block-hero-1', type: 'hero', variant: 'gradient', props: { headline: `Welcome to ${name}`, subheadline: 'Fresh ingredients, bold flavors, unforgettable dining experiences.', primaryCta: 'View Menu', secondaryCta: 'Make a Reservation' } },
        { id: 'block-features-1', type: 'features', variant: 'list', props: { title: 'Why Choose Us', items: [{ icon: 'Star', title: 'Farm to Table', description: 'We source locally from sustainable farms.' }, { icon: 'Globe', title: 'World Cuisine', description: 'Inspired by flavors from around the globe.' }, { icon: 'Zap', title: 'Fresh Daily', description: 'Our menu changes with the seasons.' }] } },
        { id: 'block-gallery-1', type: 'gallery', variant: 'masonry', props: { title: 'From Our Kitchen' } },
        { id: 'block-testimonials-1', type: 'testimonials', variant: 'spotlight', props: { items: [{ name: 'Maria Garcia', role: 'Food Critic', quote: 'A culinary gem. Every dish is a masterpiece of flavor and presentation.', rating: 5 }] } },
        { id: 'block-cta-1', type: 'cta', variant: 'simple', props: { headline: 'Reserve Your Table', subheadline: 'Open Tuesday through Sunday, 5pm to 11pm.', buttonText: 'Book Now' } },
        { id: 'block-footer-1', type: 'footer', variant: 'multi-column', props: { logo: name, copyright: `2026 ${name}. All rights reserved.`, links: ['Menu', 'Reservations', 'Privacy'] } },
      ],
    }),
  },
  {
    keywords: ['agency', 'studio', 'consulting', 'firm', 'digital', 'creative', 'marketing'],
    themePresetId: 'clean',
    build: (name) => ({
      name,
      theme: getTheme('clean'),
      blocks: [
        { id: 'block-navbar-1', type: 'navbar', variant: 'centered', props: { logo: name, links: ['Services', 'Work', 'About', 'Contact'], ctaText: 'Get a Quote' } },
        { id: 'block-hero-1', type: 'hero', variant: 'split', props: { badge: 'Award-Winning Agency', headline: 'We build brands that matter', subheadline: 'Strategy, design, and technology working together to drive real results.', primaryCta: 'Start a Project', secondaryCta: 'Our Work' } },
        { id: 'block-logocloud-1', type: 'logocloud', variant: 'default', props: { title: 'Trusted by Industry Leaders' } },
        { id: 'block-features-1', type: 'features', variant: 'alternating', props: { label: 'Services', title: 'What We Do', subtitle: 'End-to-end digital solutions', items: [{ icon: 'Palette', title: 'Brand Strategy', description: 'We craft brand identities that resonate with your audience and stand the test of time.' }, { icon: 'Code', title: 'Web Development', description: 'Modern, performant websites built with the latest technologies.' }, { icon: 'Rocket', title: 'Growth Marketing', description: 'Data-driven campaigns that deliver measurable results.' }] } },
        { id: 'block-stats-1', type: 'stats', variant: 'counter', props: { items: [{ value: '200+', label: 'Projects delivered' }, { value: '95%', label: 'Client retention' }, { value: '12', label: 'Team members' }, { value: '8', label: 'Years in business' }] } },
        { id: 'block-testimonials-1', type: 'testimonials', variant: 'cards', props: { title: 'What Clients Say', items: [{ name: 'James Park', role: 'VP Marketing, TechCo', quote: 'They transformed our entire digital presence. ROI exceeded expectations by 3x.', rating: 5 }, { name: 'Lisa Chen', role: 'Founder, StartupXYZ', quote: 'Professional, creative, and incredibly responsive. Our go-to agency.', rating: 5 }, { name: 'David Kim', role: 'CMO, Enterprise Inc', quote: 'The strategic thinking behind their work sets them apart from other agencies.', rating: 5 }] } },
        { id: 'block-cta-1', type: 'cta', variant: 'split', props: { headline: "Let's build something great together", subheadline: 'Schedule a free consultation to discuss your next project.', buttonText: 'Get Started' } },
        { id: 'block-footer-1', type: 'footer', variant: 'multi-column', props: { logo: name, copyright: `2026 ${name}. All rights reserved.`, links: ['Services', 'Work', 'Blog', 'Careers', 'Privacy', 'Terms'] } },
      ],
    }),
  },
  {
    keywords: ['blog', 'newsletter', 'magazine', 'journal', 'publication', 'writer', 'author'],
    themePresetId: 'ivory',
    build: (name) => ({
      name,
      theme: getTheme('ivory'),
      blocks: [
        { id: 'block-navbar-1', type: 'navbar', variant: 'default', props: { logo: name, links: ['Articles', 'Topics', 'About'], ctaText: 'Subscribe' } },
        { id: 'block-hero-1', type: 'hero', variant: 'minimal', props: { headline: name, subheadline: 'Thoughtful writing on technology, design, and the future of work.', primaryCta: 'Start Reading' } },
        { id: 'block-content-1', type: 'content', variant: 'columns', props: { body: '## Latest Thinking\n\nExploring ideas at the intersection of technology and humanity. From AI ethics to sustainable design, we cover what matters.\n\n## Featured Topics\n\n- **Technology** - The tools shaping our future\n- **Design** - Making things beautiful and useful\n- **Culture** - How work and life are evolving' } },
        { id: 'block-divider-1', type: 'divider', variant: 'dots', props: { height: 40 } },
        { id: 'block-newsletter-1', type: 'newsletter', variant: 'simple', props: { title: 'Join 5,000+ readers', subtitle: 'Get weekly insights delivered to your inbox. No spam, ever.', buttonText: 'Subscribe Free' } },
        { id: 'block-faq-1', type: 'faq', variant: 'accordion', props: { title: 'Frequently Asked Questions', items: [{ question: 'How often do you publish?', answer: 'We publish 2-3 articles per week, plus a weekly newsletter digest.' }, { question: 'Can I contribute?', answer: 'Yes! We welcome guest contributions from thoughtful writers.' }, { question: 'Is it free?', answer: 'All articles are free. We offer a premium newsletter with deeper analysis.' }] } },
        { id: 'block-footer-1', type: 'footer', variant: 'simple', props: { logo: name, copyright: `2026 ${name}. All rights reserved.`, links: ['RSS', 'Twitter', 'Privacy'] } },
      ],
    }),
  },
  {
    keywords: ['property', 'real estate', 'rental', 'airbnb', 'vacation', 'villa', 'apartment', 'lettings'],
    themePresetId: 'default',
    build: (name) =>
      ({
        name,
        theme: {
          bg0: '#0F0F10', bg1: '#161618', bg2: '#1A1A1C', bg3: '#222224', bg4: '#2A2A2C', bg5: '#333336',
          text0: '#F5F5F0', text1: '#E0E0DB', text2: '#A1A1AA', text3: '#71717A',
          accent: '#D4AF37', accentDim: '#B8962E',
          borderDefault: '#27272A', borderSubtle: '#1F1F22', borderHover: '#3F3F46',
          fontSans: 'Manrope, sans-serif', fontDisplay: 'Playfair Display, serif', fontMono: 'monospace',
          radius: 0, radiusLg: 2,
        },
        pages: [{
          id: 'page-home', name: 'Home', path: '/',
          blocks: [
            { id: 'b-nav', type: 'navbar', variant: 'default', props: { logo: 'Christiano PM', links: ['For Owners', 'Book a Stay', 'Contact'], ctaText: 'List Your Property' } },
            { id: 'b-hero', type: 'hero', variant: 'centered', props: { badge: 'Malta\'s #1 Property Management', headline: 'Your Home in Malta, Looked After Like a Hotel', subheadline: 'Handpicked luxury accommodations across Malta\'s most sought-after locations. Experience exceptional stays with personal attention.', primaryCta: 'Book Your Stay', secondaryCta: 'List Your Property', backgroundImage: 'https://images.unsplash.com/photo-1771218830084-fdd272e149a1?w=1920&q=80' } },
            { id: 'b-stats', type: 'stats', variant: 'simple', props: { items: [{ value: '9+', label: 'Years Superhost' }, { value: '100%', label: 'Response Rate' }, { value: '4.9', label: 'Avg Rating' }, { value: '50+', label: 'Properties Managed' }] } },
            { id: 'b-features', type: 'features', variant: 'grid', props: { label: 'Why Choose Us', title: 'We Know What a Good Stay Feels Like', subtitle: 'Full-service property management with over 9 years of Superhost experience in Malta', items: [{ icon: 'Star', title: 'Personally Curated', description: 'Every property handpicked and personally inspected to meet our standards.' }, { icon: 'Shield', title: 'Always Available', description: '24/7 support throughout your stay. Real people, real solutions.' }, { icon: 'Clock', title: 'Flexible Service', description: 'Early arrivals, late checkouts, and personalized arrangements on request.' }] } },
            { id: 'b-pricing', type: 'pricing', variant: 'cards', props: { label: 'Transparent Pricing', headline: 'One fee. No surprises.', description: 'A single commission on net room revenue. All new properties launch with Superhost credibility from day one.', plans: [{ name: 'Essentials', price: '15%', period: 'of Net Room Revenue + VAT', description: 'Core operations. Your property listed, managed, and maintained.', features: ['Multi-channel listing creation & management', 'Superhost status from day one', 'Smart seasonal pricing optimization', 'Guest communication & 24/7 concierge', 'Professional cleaning & laundry'] }, { name: 'Complete', price: '18%', period: 'of Net Room Revenue + VAT', popular: true, description: 'Full-service management. The guest experience that drives better returns.', features: ['Everything in Essentials', 'Welcome amenities included', 'Monthly reporting included', 'All callout fees included', 'Annual photography refresh included', 'Quarterly performance reviews'] }] } },
            { id: 'b-testimonials', type: 'testimonials', variant: 'grid', props: { label: 'Guest Reviews', headline: 'What Our Guests Say', items: [{ name: 'Katie', role: 'October 2024', content: 'Christiano was an amazing host and the apartment was flawless. From the slippers to the birthday wine for my husband, everything was spot on.' }, { name: 'Eric', role: 'October 2024', content: 'Christiano is a gracious, proactive host who made sure I had all the information I needed. Communication was excellent.' }, { name: 'Miranda', role: 'August 2024', content: 'We loved the apartment—spacious, clean, and felt like home. Perfect size for our family of four. Ideally located for seeing Valletta.' }] } },
            { id: 'b-faq', type: 'faq', variant: 'simple', props: { label: 'FAQ', headline: 'Property Owner Questions', items: [{ question: 'What types of properties do you manage?', answer: 'We manage a wide range of properties, from apartments to villas and palazzos. Whether it\'s a cozy flat or a luxurious estate, we offer tailored management solutions.' }, { question: 'What is your management fee?', answer: 'We offer two plans: Essentials at 15% and Complete at 18% of Net Room Revenue. The Complete plan includes additional services at no extra charge.' }, { question: 'How do you handle guest communication?', answer: 'We provide 24/7 guest support, ensuring all guest inquiries from check-in to check-out are promptly addressed.' }] } },
            { id: 'b-cta', type: 'cta', variant: 'simple', props: { headline: 'Ready to Maximize Your Property\'s Potential?', subheadline: 'Join our selective portfolio of Malta\'s finest properties. Get in touch for a consultation.', buttonText: 'List Your Property' } },
            { id: 'b-footer', type: 'footer', variant: 'simple', props: { logo: 'Christiano PM', copyright: '2026 Christiano Property Management. All rights reserved.', links: ['Privacy Policy', 'Terms of Service', 'Contact Us'] } },
          ],
        }],
        blocks: [],
      }) as SiteConfig,
  },
  {
    // Default: SaaS landing page
    keywords: [],
    themePresetId: 'default',
    build: (name) => ({
      name,
      theme: getTheme('default'),
      blocks: [
        { id: 'block-navbar-1', type: 'navbar', variant: 'default', props: { logo: name, links: ['Features', 'Pricing', 'About'], ctaText: 'Get Started' } },
        { id: 'block-hero-1', type: 'hero', variant: 'centered', props: { badge: 'Now in Beta', headline: `${name} - Build Better, Ship Faster`, subheadline: 'The all-in-one platform that helps teams move from idea to production in record time.', primaryCta: 'Start Free Trial', secondaryCta: 'Watch Demo' } },
        { id: 'block-logocloud-1', type: 'logocloud', variant: 'default', props: { title: 'Trusted by innovative teams' } },
        { id: 'block-features-1', type: 'features', variant: 'grid', props: { label: 'Features', title: 'Everything you need', subtitle: 'Powerful tools that grow with your team', items: [{ icon: 'Zap', title: 'Lightning Fast', description: 'Sub-100ms response times. Your team never waits.' }, { icon: 'Shield', title: 'Enterprise Security', description: 'SOC 2 compliant with end-to-end encryption.' }, { icon: 'Globe', title: 'Global Scale', description: 'Deploy to 30+ regions worldwide.' }, { icon: 'Bot', title: 'AI-Powered', description: 'Smart automation that learns your workflow.' }, { icon: 'Layers', title: 'Integrations', description: '200+ integrations with your favorite tools.' }, { icon: 'Rocket', title: 'Fast Setup', description: 'Go from signup to production in under 5 minutes.' }] } },
        { id: 'block-pricing-1', type: 'pricing', variant: 'simple', props: { title: 'Simple, transparent pricing', subtitle: 'No hidden fees. Cancel anytime.' } },
        { id: 'block-testimonials-1', type: 'testimonials', variant: 'cards', props: { title: 'Loved by developers', items: [{ name: 'Sarah Chen', role: 'CTO at TechCorp', quote: 'Cut our deployment time by 80%. The team productivity gains are incredible.', rating: 5 }, { name: 'Marcus Johnson', role: 'Lead Developer', quote: 'Best developer experience I have ever used. Period.', rating: 5 }, { name: 'Emma Wilson', role: 'Product Manager', quote: 'Finally, a tool the whole team can align on. Worth every penny.', rating: 5 }] } },
        { id: 'block-cta-1', type: 'cta', variant: 'simple', props: { headline: 'Ready to get started?', subheadline: 'Join thousands of teams shipping faster.', buttonText: 'Start Free Trial' } },
        { id: 'block-footer-1', type: 'footer', variant: 'multi-column', props: { logo: name, copyright: `2026 ${name}. All rights reserved.`, links: ['Features', 'Pricing', 'Docs', 'Blog', 'Privacy', 'Terms'] } },
      ],
    }),
  },
]

// Metadata for the 4 featured template cards on Dashboard
// icon: lucide-react icon name, mapped in rendering components
export const templateMeta = [
  { id: 'portfolio', name: 'Portfolio', description: 'Showcase your work and skills', accent: '#06b6d4', blockCount: 7, templateIndex: 0, icon: 'Briefcase' },
  { id: 'restaurant', name: 'Restaurant', description: 'Menu, reservations, and ambiance', accent: '#e8a838', blockCount: 7, templateIndex: 1, icon: 'UtensilsCrossed' },
  { id: 'agency', name: 'Agency', description: 'Services, case studies, and team', accent: '#228be6', blockCount: 8, templateIndex: 2, icon: 'Building2' },
  { id: 'blog', name: 'Blog', description: 'Articles, topics, and subscribers', accent: '#4f46e5', blockCount: 7, templateIndex: 3, icon: 'BookOpen' },
  { id: 'property', name: 'Property Mgmt', description: 'Luxury short-term rental & property management', accent: '#D4AF37', blockCount: 9, templateIndex: 4, icon: 'Building2' },
] as const

export function buildTemplate(id: string, name: string): SiteConfig {
  const meta = templateMeta.find((m) => m.id === id)
  if (!meta) return templates[templates.length - 1].build(name)
  return templates[meta.templateIndex].build(name)
}

function extractName(prompt: string): string {
  const words = prompt.split(/\s+/).slice(0, 4).join(' ')
  return words.charAt(0).toUpperCase() + words.slice(1)
}

export function getTemplateForPrompt(prompt: string): SiteConfig {
  const lower = prompt.toLowerCase()
  const name = extractName(prompt)

  // Find first template with a keyword match
  for (const template of templates) {
    if (template.keywords.length === 0) continue
    if (template.keywords.some((kw) => lower.includes(kw))) {
      return template.build(name)
    }
  }

  // Default: SaaS template (last in array)
  return templates[templates.length - 1].build(name)
}

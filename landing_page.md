# Landing Page Migration - Profe Chill

## Project Overview

Migrate the Profe Chill landing page to **Astro** with enhanced features, modern design, and multilingual support. This landing page promotes personalized Spanish/English language lessons for international professionals.

---

## Technology Stack

- **Framework**: Astro 4.x
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion / Motion One (for modern, elegant animations)
- **Dark Mode**: Tailwind dark mode with theme switcher
- **Multilingual**: Astro i18n integration (English/Spanish)
- **Icons**: Lucide React (consistency with main app)
- **Contact**: WhatsApp Business API integration
- **Newsletter**: Modal component with form submission

---

## Brand Identity

### Brand Name
**Profe Chill** (always use this exact spelling)

### Color Palette (Must Preserve)
```css
--sky-blue: #93bcfc
--beige: #fdedd2
--light-green: #a9e277
--gold: #fac504
--orange: #ff8940
```

**Backgrounds**:
- Light mode: Gradient from beige → white → slate
- Dark mode: Dark gradient using the same color family (darkened versions)

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

---

## SEO Strategy

### Primary Keywords (All variants must be supported)
The page should rank for ALL of these terms:
- Spanish Corporate Trainer
- Spanish Corporate Tutor
- Spanish Corporate Teacher
- Spanish Professor
- Spanish Language Therapist (some students search for this)
- English Corporate Trainer/Tutor/Teacher/Professor

### Implementation
- Use **all terms naturally** throughout the content
- H1: "Spanish Corporate Trainer with 10+ Years of Experience"
- Meta title variations for A/B testing
- Schema.org markup for Professional Service
- Target audience: Americas (primary), Worldwide (secondary)

### Meta Tags Template
```html
<!-- English version -->
<title>Spanish Corporate Trainer | Professional Language Lessons | Profe Chill</title>
<meta name="description" content="10+ years helping international professionals communicate confidently in Spanish through customized corporate lessons. Expert tutor for meetings, presentations, and executive communication.">
<meta name="keywords" content="spanish corporate trainer, spanish tutor, spanish teacher, spanish professor, corporate spanish lessons, executive spanish training">

<!-- Spanish version -->
<title>Profesor Corporativo de Inglés | Clases Personalizadas | Profe Chill</title>
<meta name="description" content="Más de 10 años ayudando a profesionales a comunicarse con confianza en inglés. Clases corporativas personalizadas para reuniones, presentaciones y comunicación ejecutiva.">
```

---

## Page Structure (9 Sections)

### 1. Hero Section
**Content**: First impression with clear value proposition

**Layout**: Full-screen hero with gradient background

**Elements**:
- Logo (top left)
- Language switcher (top right: EN | ES flags)
- Dark mode toggle (top right)
- H1: "Spanish Corporate Trainer with 10+ Years of Experience"
- Subtitle: "I help professionals communicate confidently in Spanish through customized corporate lessons focused on real workplace situations, meetings, presentations, and executive communication."
- Primary CTA: "Book Your Free Consultation"
- Secondary CTA: "Learn More" (smooth scroll to About section)
- Hero image/illustration (professional, modern)

**Animations**:
- Fade in + slide up on H1 and subtitle
- Floating animation on hero image

---

### 2. Value Proposition
**Content**: 3-4 clear benefits

**Layout**: 3-column grid (mobile: stack)

**Benefits**:
1. **Personalized Curriculum**
   - Icon: User/Target
   - Text: "Every lesson adapts to your role, industry, and communication needs"

2. **Corporate Focus**
   - Icon: Briefcase
   - Text: "Presentations, negotiations, reports, and executive communication"

3. **Multilingual Teaching**
   - Icon: Globe/Languages
   - Text: "Classes available in English, Spanish, Portuguese, Italian, or French"

4. **Results-Oriented**
   - Icon: TrendingUp
   - Text: "95% of students improve workplace communication in 6-8 weeks"

**Animations**:
- Stagger fade-in on scroll
- Hover scale on cards

---

### 3. About Me Section
**Content**: Extended bio with professional background

**Layout**: Two-column (image left, text right)

**Text Content (English)**:
```
About Me

I'm Juan Diego Gómez, a Spanish Corporate Trainer with more than 10 years of experience teaching executives, managers, teams, and international professionals from Europe, the U.S., and Latin America.

Before becoming a full-time language trainer, I earned a degree in Mechanical Engineering, which strongly influences the way I teach today. This background helps me break down complex concepts into clear, simple, and tangible explanations — something my students value, especially when dealing with advanced grammar or abstract communication skills.

My approach combines clear structure, real corporate scenarios, and personalized communication coaching.

Classes Available In:
• Spanish (native)
• English (C1/C2, professional and academic)
• Portuguese (B2/C1)
• Italian (B1/B2)
• French (B1/B2)

My experience learning multiple languages allows me to identify patterns, anticipate difficulties, and help students progress faster with strategies that actually work in real conversations and professional environments.
```

**Spanish version**: Translate naturally

**Image**: Professional headshot or teaching photo

**Animations**:
- Parallax effect on image
- Text fade-in on scroll

---

### 4. How My Lessons Work
**Content**: Methodology and class types

**Layout**: Accordion or tabbed interface

**Sections**:

#### A Fully Tailored Learning Experience
- Every lesson built around real needs
- Content adapts to your life, time, and goals
- Faster learning by studying only what matters

#### What We Do in Class
1. **Real Communication Practice**
   - Workplace situations (conversations, emails, presentations)

2. **Clear Explanations Adapted to You**
   - Complex grammar simplified through industry examples

3. **Guided Practice**
   - Personalized exercises and role-plays

4. **Pronunciation & Phonetics Coaching**
   - Sounds, rhythm, intonation, clarity

5. **Independent Learning Strategies**
   - Maximize short study moments (10 min/day)
   - Tools to stay consistent

#### Two Learning Structures
1. **Experience-Based Learning**
   - Start with real situation → analyze → extract rules → practice

2. **Concept-Based Learning**
   - Clear explanation → practice → full communication

#### The Profe Chill Method
Four stages:
1. Initial diagnosis (level, goals, needs, context)
2. Personalized study plan
3. Purpose-driven lessons
4. Self-learning techniques

#### Session Details
- **Duration**: 50 minutes per class
- **Platform**: Zoom
- **Format**: One-on-one personalized lessons
- **Location**: Available worldwide

**Animations**:
- Smooth accordion expansion
- Icon animations on section open

---

### 5. Corporate Spanish/English Focus
**Content**: Real workplace examples

**Layout**: Grid of use cases with icons

**Examples**:
- Business Meetings
- Email Writing
- Presentations
- Negotiations
- Reports & Documentation
- Cross-cultural Communication
- Executive Communication
- Technical Vocabulary (by industry)

**Industries Served**:
Tech, Consulting, Finance, Law, Health, HR, Operations, Marketing, Engineering, Racing, Insurance Broking, Aviation

**Animations**:
- Hover lift effect on cards
- Icon bounce on hover

---

### 6. Experience & Impact (Trust Section)
**Content**: Statistics and credibility markers

**Layout**: 4-column stat cards (mobile: 2x2 grid)

**Stats**:
1. **10+ years**
   - Teaching Spanish/English to professionals

2. **400+ students**
   - Trained in corporate settings

3. **95% success rate**
   - Students report improvement in 6-8 weeks

4. **20+ industries**
   - Tech, finance, law, health, and more

**Animations**:
- CountUp animation on numbers when in viewport
- Gradient background pulse

---

### 7. Testimonials (Comments Carousel)
**Content**: Student reviews with photos

**Layout**: Carousel/slider with 3 visible cards (mobile: 1)

**Testimonials** (Display in page language):

1. **Silvia Andrade**
   - Photo: Yes (available in PDF)
   - Text: "Taking classes with Juan Diego to improve my language skills has been one of the best decisions I've made at this point in my life. The support, the dynamic of the classes, the availability of schedules, the guides we've worked with—all of this together has allowed me to get closer and closer to achieving my goal."

2. **Lina Rodriguez**
   - Photo: Yes (available in PDF)
   - Text: "I especially like that he covers all aspects of the language: grammar, pronunciation, reading, and writing, adapting to each student's weaknesses and needs. I also appreciate how he focuses on what I like and what I need for my career. His classes are comprehensive, flexible, student-centered, and very practical."

3. **Jonathan Coy**
   - Photo: Yes (available in PDF)
   - Text: "The classes with Profe-Chill are exceptional, tailored to what you want to improve, and with a very pleasant atmosphere that helps you relax and learn in the best way possible, without pressure and always striving to improve."

4. **German Lancheros** (75 years old)
   - Photo: Yes (available in PDF)
   - Text: "At 75 years old, as we were planning a trip to visit our daughter, I wanted to improve my English. After 36 personalized lessons, I am now in Melbourne and have been able to socialize with my family in English. When I return to Colombia, I will continue my classes."

5. **David Calderón**
   - Photo: Yes (available in PDF)
   - Text (Spanish): "Tomé clases personalizadas de inglés con Juan Diego, Profe Chill, y desde el inicio se sintieron diferentes. Las clases son totalmente adaptadas a uno, sin presión y con muchísimo espacio para conversar. Este proceso me permitió moverme con facilidad en el exterior durante viajes de trabajo."

**Note**: Maximum 6 testimonials. Use real ones only (no duplicates).

**Animations**:
- Auto-play carousel (5s interval)
- Smooth slide transition
- Pause on hover
- Navigation dots

---

### 8. FAQ Section
**Content**: Common questions from executives

**Layout**: Accordion with search functionality

**Questions** (provide both EN/ES):

1. **How are the classes personalized?**
   - Every lesson is designed based on your role, industry, goals, and current level. No generic content.

2. **What if I have a busy schedule?**
   - Classes are flexible and adapt to your availability. You can schedule, reschedule, and choose frequency.

3. **Do I need prior knowledge?**
   - No. I work with all levels: from complete beginners to advanced professionals.

4. **How long until I see results?**
   - 95% of students report improvement in workplace communication within 6-8 weeks.

5. **What platform do you use?**
   - All classes are conducted via Zoom with screen sharing and interactive materials.

6. **Can I get materials in my native language?**
   - Yes. Bilingual materials (English-Spanish) are provided to accelerate learning.

7. **Do you offer group classes?**
   - Currently, all lessons are one-on-one for maximum personalization.

8. **What industries do you specialize in?**
   - I've worked with professionals in tech, consulting, finance, law, health, HR, operations, marketing, engineering, and more.

**Animations**:
- Smooth accordion expand/collapse
- Search highlight animation

---

### 9. CTA Section (Final Call-to-Action)
**Content**: Strong closing with contact options

**Layout**: Centered, full-width section with gradient background

**Elements**:
- Heading: "Ready to Improve Your Professional Communication?"
- Subheading: "Book your free consultation and start speaking with confidence"
- Primary CTA: "Book Your Free Consultation"
- Secondary CTA: WhatsApp contact button
- Newsletter signup (opens modal)

**Animations**:
- Parallax background
- Button hover effects (glow/pulse)

---

## Persistent Components

### Header (Sticky)
**Elements**:
- Logo (left) - links to home
- Navigation menu (center):
  - About
  - How It Works
  - Testimonials
  - FAQ
- Language switcher (right): EN | ES with flag icons
- Dark mode toggle (right): Sun/Moon icon
- WhatsApp button (right): Floating green button

**Behavior**:
- Sticky on scroll
- Background blur when scrolled
- Mobile: Hamburger menu

**Animations**:
- Smooth slide down on scroll up
- Hide on scroll down

---

### Footer
**Layout**: 3-column grid (mobile: stack)

**Column 1: About**
- Mini bio: "Spanish Corporate Trainer • Multilingual • 10+ Years of Experience"
- Tagline: "Helping professionals communicate clearly and confidently."

**Column 2: Quick Links**
- About Me
- How It Works
- Testimonials
- FAQ
- Privacy Policy
- Terms of Service

**Column 3: Connect**
- Email: contact@profechill.com
- WhatsApp: +57 XXX XXX XXXX
- Social media icons (LinkedIn, Instagram, Facebook)

**Bottom Bar**:
- Copyright: "© 2025 Profe Chill. All rights reserved."
- Language: EN | ES
- Dark mode toggle

---

### WhatsApp Contact Button
**Type**: Floating Action Button (FAB)

**Position**: Fixed bottom-right

**Behavior**:
- Opens WhatsApp chat with pre-filled message: "Hi! I'm interested in booking a free consultation."
- Mobile: Opens WhatsApp app
- Desktop: Opens WhatsApp Web

**Design**:
- WhatsApp green (#25D366)
- WhatsApp icon
- Pulse animation
- Tooltip on hover: "Chat with me"

**Animations**:
- Fade in after 2s on page load
- Pulse continuously
- Bounce on hover

---

### Newsletter Modal
**Trigger**: "Subscribe to Newsletter" button in CTA section

**Modal Content**:
- Heading: "Stay Updated"
- Text: "Get exclusive tips, resources, and special offers for language learners."
- Form fields:
  - Name (required)
  - Email (required)
  - Language preference: Spanish | English (radio)
- Submit button: "Subscribe"
- Close button (X)

**Behavior**:
- Overlay background (blur + darken)
- Center modal
- Close on: X click, outside click, ESC key
- Form validation
- Success message after submit
- Integration: Mailchimp / ConvertKit / Custom API

**Animations**:
- Fade in + scale up
- Form field focus animations

---

## Dark Mode Implementation

### Strategy
- Use Tailwind's built-in dark mode (`class` strategy)
- Theme toggle in header and footer
- Persist preference in localStorage
- System preference detection on first visit

### Color Adjustments for Dark Mode
```css
/* Light Mode (default) */
background: linear-gradient(beige → white → slate)
text: gray-900
cards: white

/* Dark Mode */
background: linear-gradient(dark-slate → darker-slate → black)
text: gray-100
cards: dark-gray-800
accent-colors: Keep original (sky-blue, gold, orange, light-green) but with reduced opacity/brightness
```

### Implementation
- Toggle component with smooth transition
- All sections adapt colors
- Images: Apply subtle overlay in dark mode
- Preserve brand colors with adjusted saturation

---

## Animation Guidelines

### Principles
- **Modern**: Use contemporary web animation trends
- **Elegant**: Subtle, refined, not overwhelming
- **Performant**: Use CSS transforms and opacity (GPU-accelerated)

### Animation Library
**Recommended**: Motion One (lightweight) or Framer Motion

### Specific Animations

#### On Page Load
- Hero: Fade in + slide up (stagger: title → subtitle → CTA)
- Header: Slide down from top

#### On Scroll (Intersection Observer)
- Sections: Fade in + slide up when 20% visible
- Stats: CountUp animation
- Cards: Stagger fade-in (50ms delay each)

#### Hover States
- Buttons: Scale 1.05 + glow effect
- Cards: Lift (translateY: -8px) + shadow increase
- Links: Underline slide animation

#### Transitions
- Page language switch: Fade content
- Dark mode toggle: Smooth color transition (300ms)
- Carousel: Slide with fade

#### Continuous Animations
- WhatsApp FAB: Pulse (subtle, 2s interval)
- Hero background: Gradient shift (subtle, 10s)
- Floating elements: Gentle float (20s loop)

---

## Multilingual Implementation

### Strategy
- Astro i18n with content collections
- URL structure: `/en/` and `/es/`
- Default language: English
- Detect browser language on first visit
- Language switcher persists preference

### File Structure
```
src/
├── content/
│   ├── en/
│   │   ├── hero.md
│   │   ├── about.md
│   │   ├── testimonials.md
│   │   └── faq.md
│   └── es/
│       ├── hero.md
│       ├── about.md
│       ├── testimonials.md
│       └── faq.md
├── i18n/
│   ├── en.json (UI strings)
│   └── es.json (UI strings)
```

### Translation Completeness
All content must be professionally translated (no machine translation for final version):
- Hero section
- About Me
- How My Lessons Work
- FAQ
- UI strings (buttons, labels, etc.)

### Important
- Testimonials display in the **page language** (English page = English testimonials, Spanish page = Spanish testimonials)
- Ensure testimonials are available in both languages

---

## Content Management

### Requirement
Content should be **easily editable** without touching code

### Solution Options

#### Option 1: Markdown Files (Recommended for Astro)
- All content in `/src/content/` as `.md` files
- Front matter for metadata
- Simple to edit, version control friendly
- No CMS needed

#### Option 2: Headless CMS
- Sanity.io / Strapi / Contentful
- Visual editor for non-technical users
- Real-time preview
- More setup complexity

#### Recommended: Markdown + Front Matter
```markdown
---
title: "Spanish Corporate Trainer with 10+ Years of Experience"
subtitle: "I help professionals communicate confidently..."
ctaPrimary: "Book Your Free Consultation"
ctaSecondary: "Learn More"
---

# Content goes here
```

### Editable Elements
- All text content
- Testimonials (add/remove/edit)
- FAQ items
- Stats/numbers
- Session details
- Contact information

---

## Technical Requirements

### Performance
- Lighthouse score: 90+ (all metrics)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Image optimization: WebP/AVIF with fallbacks
- Lazy loading: Images below fold
- Critical CSS: Inline above-the-fold styles

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Test on: iPhone SE, iPhone 12, iPad, Desktop 1920px

### Accessibility (WCAG 2.1 AA)
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Focus indicators
- Color contrast: 4.5:1 minimum
- Alt text on all images
- Skip to main content link

### SEO
- Semantic HTML5
- Meta tags (title, description, OG, Twitter)
- Structured data (JSON-LD): ProfessionalService schema
- Sitemap.xml
- Robots.txt
- Canonical URLs
- hreflang tags for EN/ES

### Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

---

## Integration Requirements

### WhatsApp Business
- Link format: `https://wa.me/57XXXXXXXXXX?text=Hi!%20I'm%20interested%20in%20booking%20a%20free%20consultation.`
- Pre-fill message should be in the page language

### Newsletter
- Email service: TBD (Mailchimp / ConvertKit / SendGrid)
- Double opt-in recommended
- GDPR compliant
- Success/error handling

### Analytics
- Google Analytics 4
- Event tracking:
  - CTA button clicks
  - WhatsApp clicks
  - Language switches
  - Dark mode toggles
  - Newsletter signups
  - Scroll depth

### Contact Form (Future)
- Consider adding a contact form as alternative to WhatsApp
- Fields: Name, Email, Phone, Message, Preferred Language
- reCAPTCHA v3
- Email notification to teacher

---

## Deployment

### Platform
- Vercel (recommended for Astro)
- Custom domain: profechill.com (or similar)

### Environment Variables
```env
# Newsletter
NEWSLETTER_API_KEY=xxx

# Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Contact
WHATSAPP_NUMBER=+57XXXXXXXXXX
CONTACT_EMAIL=contact@profechill.com
```

### CI/CD
- Auto-deploy on push to `main`
- Preview deployments for PRs
- Lighthouse CI on PRs

---

## File Structure

```
profe-chill-landing/
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg
│   ├── images/
│   │   ├── hero.jpg
│   │   ├── about.jpg
│   │   └── testimonials/
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── ValueProposition.astro
│   │   ├── HowItWorks.astro
│   │   ├── CorporateFocus.astro
│   │   ├── Stats.astro
│   │   ├── Testimonials.astro
│   │   ├── FAQ.astro
│   │   ├── CTA.astro
│   │   ├── WhatsAppFAB.astro
│   │   ├── NewsletterModal.astro
│   │   ├── LanguageSwitcher.astro
│   │   └── DarkModeToggle.astro
│   ├── content/
│   │   ├── en/
│   │   └── es/
│   ├── i18n/
│   │   ├── en.json
│   │   └── es.json
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro (redirects to /en/)
│   │   ├── en/
│   │   │   └── index.astro
│   │   └── es/
│   │       └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       ├── i18n.ts
│       └── animations.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

---

## Content Assets Needed

### Images
1. **Hero image**: Professional, modern (1920x1080px)
2. **About Me photo**: Headshot or teaching photo (800x800px)
3. **Testimonial photos**: 5 student photos (provided in PDF, extract and optimize)
4. **OG image**: Social sharing preview (1200x630px)
5. **Favicon**: 512x512px (multiple sizes generated)

### Copy
- All section content (provided in PDF)
- Meta descriptions (EN/ES)
- Alt text for images
- Newsletter confirmation email copy

### Branding
- Logo (SVG preferred)
- Brand colors (already defined)
- Typography (Poppins + Inter from Google Fonts)

---

## Quality Checklist

Before launch, verify:

### Functionality
- [ ] All links work (internal and external)
- [ ] WhatsApp opens with correct pre-filled message
- [ ] Newsletter modal opens/closes correctly
- [ ] Language switcher works (EN ↔ ES)
- [ ] Dark mode toggle persists preference
- [ ] All forms validate properly
- [ ] Testimonial carousel auto-plays
- [ ] FAQ accordion expands/collapses

### Design
- [ ] Matches color palette exactly
- [ ] Responsive on all breakpoints
- [ ] Typography hierarchy clear
- [ ] Images optimized and loading fast
- [ ] Animations smooth (no jank)
- [ ] Dark mode looks polished

### Content
- [ ] All text is error-free (EN/ES)
- [ ] Testimonials display in correct language
- [ ] SEO meta tags complete
- [ ] Structured data validates
- [ ] Alt text on all images

### Performance
- [ ] Lighthouse score 90+ (all)
- [ ] Images lazy load
- [ ] No console errors
- [ ] Fast on 3G network

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Color contrast passes
- [ ] Focus indicators visible

---

## Migration Notes

### From Current Next.js App
The current Profe Chill app is built with Next.js. This landing page will be:
- **Separate Astro project** (not integrated with Next.js app)
- **Standalone deployment** (different domain or subdomain)
- **Different tech stack** (Astro vs Next.js)

### Why Astro?
- Better performance for static content
- Easier content management
- Simpler multilingual setup
- Faster load times
- SEO advantages

### Links Between Projects
- Landing page → App: "Book consultation" could link to `/auth/register` in Next.js app
- Consider: Should the landing page be the main `profechill.com` and app be `app.profechill.com`?

---

## Additional Recommendations

### Content Strategy
1. **Blog section** (future): Add articles about language learning, corporate communication tips
2. **Resources page**: Free downloadable PDFs (lead magnets)
3. **Case studies**: Detailed student success stories
4. **Video testimonials**: More engaging than text

### Marketing
1. **Google Ads** landing page variant for paid traffic
2. **A/B testing**: Test different hero headlines
3. **Exit-intent popup**: Special offer when user tries to leave
4. **Social proof**: Display "200+ professionals trained this year"

### Technical Enhancements
1. **Chatbot**: AI-powered chat (future)
2. **Booking system**: Integrate Calendly or Cal.com directly
3. **Payment**: Stripe integration for course packages
4. **Student portal**: Link to dedicated student area (in Next.js app)

---

## Success Metrics

Track these KPIs:

1. **Conversion Rate**: Visitors → Consultation bookings
2. **WhatsApp Click Rate**: % of visitors who click WhatsApp button
3. **Newsletter Signup Rate**: % of visitors who subscribe
4. **Bounce Rate**: Should be < 40%
5. **Average Time on Page**: Target 2+ minutes
6. **Scroll Depth**: % reaching testimonials section
7. **Language Preference**: EN vs ES visitors

---

## Final Notes

### Content Edibility Priority
Make these sections **extremely easy to edit**:
1. Testimonials (add/remove/edit without touching code)
2. FAQ questions/answers
3. Session pricing (when added)
4. Contact information
5. Stats/numbers

### Brand Voice
- **Professional** but **approachable**
- **Confident** but not arrogant
- **Clear** and **direct** (engineer mindset)
- **Warm** and **encouraging**

### Call-to-Action Strategy
- Primary CTA: "Book Your Free Consultation" (emphasize FREE)
- Secondary CTA: WhatsApp (lower friction)
- Tertiary CTA: Newsletter (relationship building)

---

## Questions for Developer/Designer

Before starting implementation:

1. **CMS preference**: Markdown files or headless CMS?
2. **Animation library**: Motion One or Framer Motion?
3. **Newsletter service**: Which provider?
4. **Domain strategy**: Main site or subdomain?
5. **Analytics**: GA4 sufficient or add Plausible/Fathom?
6. **A/B testing**: Need variant pages for testing?

---

## Version Control & Documentation

### Git Strategy
- Main branch: `main` (production)
- Development branch: `dev`
- Feature branches: `feature/section-name`
- Commit message format: `type(scope): description`

### Documentation
- README.md: Setup instructions, content editing guide
- CONTRIBUTING.md: Code style, conventions
- CONTENT.md: How to edit content without code knowledge

---

## Maintenance Plan

### Regular Updates
- **Monthly**: Update testimonials, check links
- **Quarterly**: Refresh content, update stats
- **Yearly**: Design refresh, new features

### Technical Maintenance
- **Dependencies**: Update monthly (security patches)
- **Performance**: Monitor Lighthouse scores
- **Broken links**: Check quarterly
- **Analytics**: Review monthly, adjust strategy

---

## Contact for Questions

For clarifications during implementation:
- Content questions: [Product Owner]
- Design questions: [Design Team]
- Technical questions: [Lead Developer]

---

**Document Version**: 1.0
**Last Updated**: 2025-12-15
**Status**: Ready for Development
**Approved By**: Product Owner

---

END OF DOCUMENT

# Decoupled Catering

A catering company website starter template for Decoupled Drupal + Next.js. Built for catering businesses, event dining services, private chefs, and food service companies.

![Decoupled Catering Screenshot](docs/screenshot.png)

## Features

- **Menu Packages** - Display tiered catering packages with per-person pricing, course lists, minimum guests, and add-on options
- **Event Types** - Showcase wedding, corporate, and private party catering with service styles and guest ranges
- **Testimonials** - Share client reviews with ratings, event details, and guest counts served
- **Modern Design** - Clean, accessible UI optimized for catering and event dining content

## Quick Start

### 1. Clone the template

```bash
npx degit nextagencyio/decoupled-catering my-catering
cd my-catering
npm install
```

### 2. Run interactive setup

```bash
npm run setup
```

This interactive script will:
- Authenticate with Decoupled.io (opens browser)
- Create a new Drupal space
- Wait for provisioning (~90 seconds)
- Configure your `.env.local` file
- Import sample content

### 3. Start development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Manual Setup

If you prefer to run each step manually:

<details>
<summary>Click to expand manual setup steps</summary>

### Authenticate with Decoupled.io

```bash
npx decoupled-cli@latest auth login
```

### Create a Drupal space

```bash
npx decoupled-cli@latest spaces create "My Catering"
```

Note the space ID returned. Wait ~90 seconds for provisioning.

### Configure environment

```bash
npx decoupled-cli@latest spaces env 1234 --write .env.local
```

### Import content

```bash
npm run setup-content
```

This imports:
- Homepage with hero, stats (1,200+ events catered, 250K+ guests served, 18 years of service, 4.9 client satisfaction), and quote request CTA
- 3 menu packages: Essential ($35/person), Classic ($65/person), Premium ($110/person)
- 3 event types: Wedding Catering, Corporate Events, Private Parties & Celebrations
- 3 testimonials from wedding, corporate, and private event clients
- 2 static pages: About Ember & Oak Catering, Our Process

</details>

## Content Types

### Menu Package
- **price_per_person**: Per-person pricing (e.g., "$35", "$110")
- **minimum_guests**: Minimum guest requirement
- **package_tier**: Tier taxonomy (Essential, Classic, Premium, Luxury)
- **courses**: List of included courses and items
- **add_ons**: Available upgrade options with pricing
- **image**: Package showcase image

### Event Type
- **guest_range**: Supported guest range (e.g., "50 - 500 guests")
- **service_style**: Available service formats (Plated, Buffet, Stations, Family style, etc.)
- **highlights**: Key features and selling points
- **image**: Event type promotional image

### Testimonial
- **client_name**: Name of the client
- **event_hosted**: Type of event catered
- **rating**: Star rating (1-5)
- **guest_count_served**: Number of guests at the event

### Homepage
- **hero_title**: Main headline (e.g., "Exceptional Cuisine for Every Occasion")
- **hero_subtitle**: Tagline (e.g., "Full-Service Catering & Event Dining")
- **hero_description**: Welcome message
- **stats_items**: Key statistics (events, guests, years, satisfaction)
- **featured_packages_title**: Section heading for catering packages
- **cta_title / cta_description**: Quote request call-to-action block

### Basic Page
- General-purpose static content pages (About, Our Process, etc.)

## Customization

### Colors & Branding
Edit `tailwind.config.js` to customize colors, fonts, and spacing.

### Content Structure
Modify `data/catering-content.json` to add or change content types and sample content.

### Components
React components are in `app/components/`. Update them to match your design needs.

## Demo Mode

Demo mode allows you to showcase the application without connecting to a Drupal backend.

### Enable Demo Mode

```bash
NEXT_PUBLIC_DEMO_MODE=true
```

### Removing Demo Mode

1. Delete `lib/demo-mode.ts`
2. Delete `data/mock/` directory
3. Delete `app/components/DemoModeBanner.tsx`
4. Remove `DemoModeBanner` from `app/layout.tsx`
5. Remove demo mode checks from `app/api/graphql/route.ts`

## Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nextagencyio/decoupled-catering)

### Other Platforms
Works with any Node.js hosting platform that supports Next.js.

## Documentation

- [Decoupled.io Docs](https://www.decoupled.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Drupal GraphQL](https://www.decoupled.io/docs/graphql)

## License

MIT

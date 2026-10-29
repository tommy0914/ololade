# Ololade iPhone Repair Website

A premium, Apple inspired website for an iPhone and smartphone repair service. The site presents repair services, pricing information, business details, and contact options through a clean responsive interface.

**Live website:** https://ololade-silk.vercel.app  
**Repository:** https://github.com/tommy0914/ololade

## Project overview

Ololade is a customer facing website for a phone repair business. It is designed to help visitors understand available repair services, review pricing, learn about the business, and get in touch to request assistance.

The current repository is a frontend focused Next.js application. It does not currently declare a dedicated database or payment backend in its package configuration, so features that require server side processing or persistent data should be treated as separate integrations unless implemented elsewhere in the source.

## Website sections

The application includes routes for:

- **Home:** Main landing page and introduction to the repair service.
- **Services:** Overview of repair and support services.
- **Pricing:** Repair pricing information.
- **About:** Business information and service positioning.
- **Contact:** Ways for customers to reach the business.

The site also includes reusable navigation and footer components.

## Technology stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 |
| UI library | React 19 |
| Language | TypeScript |
| Styling | CSS Modules and global CSS |
| Rendering | Next.js App Router |
| Code quality | ESLint |
| Hosting | Vercel |

## Project structure

```text
ololade/
├── src/
│   ├── app/
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact page
│   │   ├── pricing/         # Pricing page
│   │   ├── services/        # Repair services page
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root application layout
│   │   ├── page.tsx         # Homepage
│   │   └── page.module.css  # Homepage styles
│   └── components/
│       ├── Navbar.tsx       # Site navigation
│       ├── Navbar.module.css
│       ├── Footer.tsx       # Site footer
│       ├── Footer.module.css
│       └── Icons.tsx        # Reusable icon components
├── public/                  # Static assets
├── docs/                    # Supporting project documentation
├── extracted_docs/          # Project and design reference notes
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Requirements

- Node.js compatible with the installed Next.js version
- npm
- Git

## Run locally

### 1. Clone the repository

```bash
git clone https://github.com/tommy0914/ololade.git
cd ololade
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The development script runs Next.js using Webpack, as configured in `package.json`.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production application |
| `npm run start` | Start the production server after building |
| `npm run lint` | Run ESLint checks |

Before opening a pull request or deploying, run:

```bash
npm run lint
npm run build
```

## Design goals

The project is intended to deliver:

- A premium, Apple inspired visual identity.
- Clear service and pricing information.
- Responsive layouts for mobile, tablet, and desktop.
- Consistent navigation and reusable interface components.
- Straightforward contact pathways for prospective customers.
- A lightweight frontend that can be deployed through Vercel.

## Deployment

The project is deployed on Vercel.

To deploy your own version:

1. Import the GitHub repository into Vercel.
2. Keep the framework preset set to Next.js.
3. Confirm the build command and output settings match the project defaults.
4. Deploy and test all page routes on desktop and mobile.
5. Verify contact links, service information, pricing, and external links before publishing.

See the [live website](https://ololade-silk.vercel.app) for the deployed version.

## Future enhancements

Possible next steps for the project include:

- A repair request form with server side validation.
- WhatsApp contact integration for quick customer enquiries.
- A repair booking workflow with appointment status tracking.
- An admin interface for updating service descriptions and pricing.
- Search engine metadata and structured business information.
- Accessibility checks and automated page testing.

These are potential enhancements and should not be considered implemented features unless they are present in the codebase.

## Contributing

1. Create a feature branch.
2. Make a focused change and update relevant documentation.
3. Run `npm run lint` and `npm run build`.
4. Test the affected pages at mobile and desktop sizes.
5. Submit a pull request describing the change.

## License

No license is currently specified in this repository. Contact the repository owner for permission before redistributing or reusing the code outside its intended scope.

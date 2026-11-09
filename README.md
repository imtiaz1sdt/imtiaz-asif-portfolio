# Imtiaz Asif — Portfolio

Personal portfolio for **3D Artist · Apparel Engineering · Digital Product Visualisation**.

Built with Astro and deployed on Cloudflare Pages.

## Portfolio structure

- **Work** — category-led case studies for apparel, 3D visualisation, technical design and motion.
- **3D Studio** — Sketchfab-powered interactive garment viewing.
- **Capabilities** — apparel, 3D, technical communication and motion.
- **Process** — apparel development and 3D visual production workflows.
- **About** — professional background and contact.

## Content editing

The project includes a [Pages CMS](https://app.pagescms.org/) configuration in `.pages.yml`.

1. Sign in to Pages CMS with the GitHub account that has write access to this repository.
2. Authorize the repository in Pages CMS.
3. Edit the **Portfolio projects** collection.
4. Add a title, summary, role, category, date, tags, cover image, gallery, optional Sketchfab model UID, deliverables and case-study body.
5. Save. Pages CMS writes the changes to GitHub; Cloudflare Pages builds the updated site.

The CMS edits Git-backed content; it is not a database or a replacement for Astro/Cloudflare.

## Media handling

- Small portfolio images can be uploaded through Pages CMS into `public/media/`.
- Larger originals, videos and 3D files should stay in a dedicated media service (for example ImageKit or Sketchfab) and be referenced by URL. Avoid committing large binaries to Git.
- Sketchfab model UIDs are stored per project and rendered in an embedded viewer.

## Local development

Requires Node.js 22+.

```bash
pnpm install
pnpm dev
```

Build:

```bash
pnpm build
pnpm preview
```

## Deployment

Cloudflare Pages is connected to the GitHub repository. The production branch is `main`; branch pushes create preview deployments.

- Build command: `npm run build` (or `pnpm build`)
- Output directory: `dist`

The site currently uses the Cloudflare `pages.dev` address. A custom domain is not required.

## Security and privacy

The public website is intended for public portfolio work. Do not commit confidential client material, passwords, API keys or private project files to a public repository. Public repository contents and public website assets can be copied. A password prompt on a public static page does not make files in a public repository private.

Private extended work must live in a private repository or protected asset store, with server-side access control. Keep all credentials in Cloudflare encrypted secrets, never in the source tree.

## Attribution

The temporary Sketchfab demonstration on the 3D Studio page is credited to its original creator and is not represented as Imtiaz Asif's work. Replace it with an original model before public portfolio launch.

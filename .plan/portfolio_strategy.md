# Bento Box Portfolio Blueprint

## 1. The Strategy (What to Present)

Following the "Instagram Highlights" and "Bento Box" aesthetic, the portfolio should be split into visual cards (bento items) of different sizes.

### Core Sections

- **The Hook (Hero Bento)**: Big banner/card with your photo, your punchy bio ("I write code better than I write DMs"), and links to GitHub/LinkedIn/Instagram.
- **The Professional Zone**:
  - **Projects**: 3 of your best projects from `projects.ts`. Show large, crisp images.
  - **Experience Timeline**: The "Raasta R&D" and "RFM360" roles from `info.ts`.
  - **Skills Grid**: Interactive or constantly scrolling marquee of skills (Nuxt, Python, Next.js, Django).
- **The Human Zone**:
  - **Travel Map/Gallery**: Based on your highlights ("Delhi", "GGN", "College"), create a card that is a carousel of photos, or an interactive map tracking cities visited.
  - **Playlists Card**: A Spotify iframe to showcase your music, showing exactly what public playlist you vibe to.
  - **Weird/Hobbies Card**: A "blasting off to absurdity" card that shows off random lifestyle pictures or hobbies.

## 2. Tech Stack & Packages Decision

Since you already have an excellent foundation with **Nuxt 4**, here are the packages we will use:

1. **Framework**: **Nuxt 4** (No need for Next.js/React. Nuxt is blazing fast and handles this perfectly).
2. **Styling**: **Tailwind CSS** + **@nuxt/ui** (Already installed, perfect for the bento UI components).
3. **Animations**: `@vueuse/motion`
   - _Why?_ The internet advice you pasted mentioned "Framer Motion". The Vue ecosystem's equivalent is `@vueuse/motion`. It will give you those incredibly smooth hover effects, page transitions, and bounce animations that make Bento grids feel "premium".
4. **Icons**: `@iconify-json/lucide` (Already installed).

## 3. Data Organization (The `app/data/` structure)

To make everything modular, we will expand `app/data/` so the UI can simply map over it:

### Keep

- `info.ts` (Clean this up to just hold Name, Bio, Socials, Jobs).
- `projects.ts` (Keep as is, maybe ensure every project has a `coverImage` string).

### New Data Files to Create

- **`app/data/travel.ts`**
  ```typescript
  export const highlights = [
    { city: "Delhi", icon: "/assets/images/highlights/delhi.jpg", images: [] },
    { city: "GGN", icon: "/assets/images/highlights/ggn.jpg", images: [] },
  ];
  ```
- **`app/data/playlists.ts`**
  ```typescript
  export const playlists = [
    {
      title: "Coding Focus",
      url: "https://open.spotify.com/embed/playlist/12345",
    },
  ];
  ```
- **`app/data/hobbies.ts`**
  ```typescript
  export const hobbies = [
    { title: "Absurdity", icon: "🚀", image: "/assets/images/random1.jpg" },
  ];
  ```

This organization isolates data from UI. The Vue components in `app/components/bento/` will just import these files and render the cards.

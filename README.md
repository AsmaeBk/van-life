# VanLife

VanLife is a React van rental application that allows users to browse and filter available vans, view detailed van information, submit rental requests, and manage their current rentals.

Built with React, React Router 6, JavaScript, Vite, MirageJS, and localStorage.

## Features

- Browse available vans
- Filter vans by type using URL search params
- View detailed van information
- Submit rental requests
- Manage multiple rental requests in My Rentals
- Cancel rental requests
- Loading and error states for API requests
- Responsive layout for mobile, tablet, and desktop
- Custom 404 page

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Notes

The app uses MirageJS to provide a local fake API for van data. Rental requests are stored in `localStorage`, so they stay available after refreshing the browser.

## Future Improvements

- Add rental date fields
- Add a checkout or confirmation flow
- Add a deployed app link
- Add screenshots

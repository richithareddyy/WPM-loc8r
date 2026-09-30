# Loc8r

A location-review website built for my undergraduate Web Programming course. It demonstrates server-rendered pages for finding places to work with Wi-Fi, viewing location details, and opening a review form.

**JavaScript · Node.js · Express · Pug · Bootstrap 5**

## What’s included

- Sample location listings with ratings, facilities, and distances.
- A location detail page with opening hours and example reviews.
- A review form interface.
- Express routing, Pug templates, and custom styles.

## Run locally

Install Node.js and npm, then run:

```sh
git clone https://github.com/richithareddyy/WPM-loc8r.git
cd WPM-loc8r
npm ci
npm start
```

The start script launches the server through `bin/www`.

## Project structure

| Path | Purpose |
| --- | --- |
| `app.js` | Express application setup |
| `bin/www` | Server entry point |
| `app_server/routes/` | Page routes |
| `app_server/controllers/` | Page data and rendering |
| `app_server/views/` | Pug templates |
| `public/stylesheets/` | Site styles |

## Scope

This is a coursework demonstration with sample data defined in the controllers. The displayed distances and reviews are examples, not live location data. The review form demonstrates the interface; this repository does not include a persistent review database.

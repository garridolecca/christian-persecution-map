# Global Christian Persecution Map

**[View Live Map](https://garridolecca.github.io/christian-persecution-map/)** | **[Ver Mapa en Vivo](https://garridolecca.github.io/christian-persecution-map/)**

An interactive, bilingual (English/Spanish) web application that visualizes the global landscape of Christian persecution using data compiled from seven major international monitoring organizations.

![ArcGIS](https://img.shields.io/badge/ArcGIS_JS_API-5.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Data](https://img.shields.io/badge/data_sources-7-red)
![Languages](https://img.shields.io/badge/languages-EN%20%7C%20ES-orange)
![Countries](https://img.shields.io/badge/countries-66+-purple)

## Features

- **Interactive World Map** — Color-coded markers showing persecution severity across 66+ countries
- **Bilingual Support** — Full English and Spanish interface with instant language toggle
- **Mobile-First Design** — Fully responsive with bottom tab navigation, swipe gestures, and touch-optimized controls
- **Intro/Splash Page** — Language selection, key statistics, usage guide, and data source overview
- **Detailed Country Profiles** — Scores, persecution breakdowns, summaries, and key facts
- **Persecution Breakdown** — Six sub-categories: Private Life, Family Life, Community Life, National Life, Church Life, and Violence
- **Prayer Points** — Country-specific prayer requests generated from persecution data
- **Take Action Links** — Direct links to donate, support missionaries, and write to persecuted prisoners for each country
- **Missionary Information** — HeartCry Missionary Society presence data by region
- **Filtering & Search** — Filter by persecution level (Extreme, Very High, High, Moderate), search by country or region
- **Global Statistics Dashboard** — Key figures including Christians killed, churches attacked, and people detained
- **Source Cross-Reference** — See which organizations flag each country and their designations

## Screenshots

| Desktop | Mobile |
|---------|--------|
| Interactive map with country list sidebar and detail panel | Bottom tab navigation with swipe-to-dismiss panels |

## Data Sources

| Source | Countries | Data Type |
|--------|-----------|-----------|
| [Open Doors World Watch List 2025](https://www.opendoors.org/en-US/persecution/world-watch-list/) | 78 | Scored ranking (0-100) |
| [USCIRF 2025 Annual Report](https://www.uscirf.gov/countries/2025-recommendations) | 28 | CPC / SWL designations |
| [Aid to the Church in Need 2025](https://acninternational.org/religiousfreedomreport/) | 196 | Persecution / Discrimination / Monitored |
| [Pew Research Center 2022](https://www.pewresearch.org/religion/2024/12/18/government-restrictions-on-religion-stayed-at-peak-levels-globally-in-2022/) | 198 | Government Restrictions Index |
| [Voice of the Martyrs](https://www.persecution.com/prayerguide/) | 68 | Restricted / Hostile / Monitored |
| [International Christian Concern 2025](https://persecution.org/gpi/) | 20 | Qualitative analysis |
| [HeartCry Missionary Society](https://heartcrymissionary.com/the-field/) | 76 | Missionary presence data |

## Persecution Levels

| Level | Score Range | Countries |
|-------|------------|-----------|
| Extreme | 81-100 | 13 |
| Very High | 61-80 | 37 |
| High | 41-60 | 3 |
| Moderate | — | 8 |

## Tech Stack

- **[ArcGIS Maps SDK for JavaScript 5.0](https://developers.arcgis.com/javascript/latest/)** — Interactive mapping with FeatureLayer and UniqueValueRenderer
- **Vanilla JavaScript** — No frameworks, no build tools required
- **CSS Custom Properties** — Dark theme with responsive design
- **GitHub Pages** — Static hosting with automated deployment

## Global Statistics (2024 Reporting Period)

- **365 million** Christians face high levels of persecution and discrimination
- **4,998** Christians killed for faith-related reasons
- **14,766** churches and Christian buildings attacked
- **3,906** Christians detained without trial
- **3,300** Christians abducted

## Running Locally

Simply serve with any static file server:

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .
```

Then open `http://localhost:8080` in a modern browser.

## Disclaimer

This map is for educational and awareness purposes. Data reflects the most recently available reports from each organization. Conditions change rapidly and this map may not reflect the current situation in every country.

## License

MIT

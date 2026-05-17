# Shri Mataji Talk Source Data

Purpose: critical source material from talks of H. H. Shri Mataji Nirmala Devi for Sahaj Yoga school/college outreach work.

## Folder Use

- `raw/` — paste/save original data exactly as received. Do not rewrite, summarize, correct, or translate.
- `formatted/` — cleaned copies for agent use, with headings, metadata, and references, while preserving meaning.

## Rules For Agents

1. Treat `raw/` as source of truth.
2. Do not alter raw files except when Pranav explicitly asks.
3. When using a quote, preserve exact wording from raw source if available.
4. If formatting, create a new file in `formatted/`.
5. Mark uncertain source metadata clearly as `unknown`, not guessed.
6. Separate Shri Mataji's direct words from agent summaries.

## Suggested File Naming

Use:

```text
YYYY-MM-DD-location-topic.md
```

If date/location unknown:

```text
unknown-date-topic.md
```

## Suggested Metadata Block

```yaml
---
speaker: "H. H. Shri Mataji Nirmala Devi"
date: "unknown"
location: "unknown"
event: "unknown"
topic: "children / education / science / meditation"
source_url: "unknown"
raw_file: "../raw/example.md"
---
```


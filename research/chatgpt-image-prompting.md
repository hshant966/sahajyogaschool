# ChatGPT / OpenAI Image Prompting Guide for Sahaja Yoga School Outreach

**Updated:** 2026-05-16
**Focus:** School posters, WhatsApp status, proposal visuals, children meditation themes

---

## Official Model Reference

**Current Production Models:**

| Model | Use Case | Cost | Quality | Text Support |
|-------|----------|------|---------|--------------|
| `gpt-image-2` | Final posters, structured layouts, text-heavy assets | Standard | Highest | Best (improved) |
| `gpt-image-1.5` | Existing workflows, legacy integrations | Lower | High | Good |
| `gpt-image-1-mini` | Fast drafts, high-volume exploration, variations | Lowest | Good | Fair |

**Key Facts:**
- Default for new API workflows: `gpt-image-2`
- Text rendering improved in `gpt-image-2` but still imperfect for exact placement
- Complex prompts may take up to 2 minutes
- Brand/character consistency can drift across generations — use reference images or regenerate strategically
- Does NOT support transparent backgrounds
- Process image inputs at high fidelity by default

---

## Aspect Ratios & Size Guidance

### For Sahaja Yoga Project

| Asset Type | Aspect Ratio | API Size | Notes |
|------------|-------------|----------|-------|
| **Square Social Post** | 1:1 | `1024x1024` | Instagram, Facebook profile content |
| **School Poster (Portrait)** | 3:4 or 4:5 | `1024x1536` | Printable A4 or school bulletin boards |
| **WhatsApp Status** | 9:16 | `1080x1920` or custom | Optimal mobile vertical format |
| **Proposal/Presentation Slide** | 16:9 | `1536x1024` | PowerPoint, Google Slides |
| **Wide Banner** | 21:9 | `1536x672` | Website header, WhatsApp group cover |

### Size Constraints for `gpt-image-2`

- **Max edge:** 3840 px
- **Both edges:** multiples of 16
- **Aspect ratio:** ≤ 3:1 (don't exceed 3x in any direction)
- **Total pixel range:** 655,360 to 8,294,400

---

## Core Prompt Formula for Posters & Outreach

Always follow this structure for consistency:

```
Purpose and Audience
↓
Scene & Main Subject
↓
Composition & Layout
↓
Visual Style, Lighting, Palette, Emotion
↓
Exact Text (if needed)
↓
Production Constraints
```

### Master Template

```text
Create a [ASSET TYPE] for [AUDIENCE/USE CASE].

Scene: [specific subject/action/location].

Composition: [portrait/landscape], [subject placement], 
[negative space for text], [foreground/background details].

Style: [photography/illustration style], [lighting], 
[color palette], [mood/emotion].

Text: exact words "[SHORT COPY]" shown once only, 
[font description], [placement], high contrast, fully legible.

Constraints: clean, uncluttered, no watermark, no extra logos, 
no distorted text, no overlapping elements, no religious symbols.
```

---

## Lighting & Atmosphere for Soft Themes

### Recommended Lighting Setups

For school outreach with children, use natural, gentle, trust-building light:

| Lighting Type | Effect | When to Use |
|---------------|--------|-------------|
| **Soft high-key lighting** | Bright, even, minimal shadows | Children, peaceful scenes, safety |
| **Golden hour** | Warm, gentle, natural feel | Sunset/morning classroom scenes |
| **Window light from left** | Directional but soft, natural | Documentary classroom realism |
| **Diffused daylight** | Even, flattering, no harsh shadows | School environments, safety messaging |
| **Gentle rim light** | Subtle back-lighting for separation | Meditation/focus themes |

### Lighting Language for Prompts

```text
Soft high-key documentary daylight, no harsh shadows, 
gentle window light from the left, natural and even exposure, 
warm but not golden, innocent and approachable mood.
```

NOT:
- Dramatic lighting
- High contrast shadows
- Neon or artificial light
- Theatrical/spiritual effects

---

## Color Palette Specification

### Soft, Pastel, Child-Friendly Palettes

**For School & Trust-Building:**

```text
Pastel white, soft sky blue, light leaf green, warm cream, 
gentle yellow, muted purple-lavender.
```

**For Meditation/Calm:**

```text
Soft white, pale blue, light sage green, warm beige, 
pale lavender, natural wood tones.
```

**For Energy & Engagement (while staying soft):**

```text
Bright white background, sky blue accents, fresh green, 
warm golden yellow, soft orange, touches of coral.
```

### Color Specification in Prompts

Don't just say "blue" — be specific:

```text
WRONG: "Use blues and greens"
CORRECT: "Palette of soft sky blue, pale leaf green, warm cream, 
and pale lavender with natural white breathing room"
```

### How to Describe Tones

- **Pastel:** soft, desaturated, light, gentle
- **Muted:** desaturated, calm, understated
- **Warm:** golden, creamy, approachable
- **Cool:** calming, focused, peaceful
- **Natural:** white, cream, wood, earth tones

---

## Photography Style Keywords

For photorealistic school scenes, use camera/lens language:

### Lens Choice
- **35mm:** Documentary, natural field of view, classroom realism
- **50mm:** Balanced, natural human perspective, trusted
- **85mm:** Soft portrait compression, professional, approachable
- **24mm:** Wide, environmental context, classrooms

### Photographic Style

```text
Documentary photography, candid classroom realism, 
unposed natural expressions, light touch, honest and trustworthy, 
no glamorization, real texture, imperfect and human.
```

### Avoid
- "Glamorous"
- "Stylized"
- "Filtered"
- "Instagram aesthetic"
- "Perfectly lit" (sounds artificial for school context)

---

## Text in Images: Critical Guidance

### Best Practice

For posters and WhatsApp status, **do NOT overload text inside the generated image.**

Instead:

1. **Generate artwork without text** ← preferred
2. Add final text in Canva/Figma ← for posters/proposals
3. Use ONLY if text is central to the concept

### When You Must Include Text

**Text Prompt Block:**

```text
Poster text: exact and verbatim, no extra characters, shown once only
"FREE MEDITATION"

Typography: large clean bold sans-serif, dark teal, positioned 
top center with breathing room.

Ensure the text appears once, is perfectly legible, no distortion, 
high contrast against background, no extra characters.
```

### Text Limits

- **Max characters:** 25-30 (longer text = rendering errors)
- **Number of phrases:** 1-2 maximum
- **Font types:** "clean sans-serif", "bold sans-serif", "rounded sans-serif"
- **Font styles NOT to request:** "decorative", "cursive", "hand-drawn" (models struggle with these)

### Placement Language

| Position | Phrasing |
|----------|----------|
| **Top Center** | "top center with clear space below" |
| **Bottom** | "bottom 1/3 of image, centered" |
| **Left Side** | "left 1/4, vertically centered" |
| **Within Frame** | "centered vertically and horizontally" |

---

## Illustration Style Guidance

For non-photorealistic assets:

### Illustration Styles That Work Well

```text
Gentle watercolor illustration, soft watercolor with 
delicate brushwork, hand-painted feeling
```

```text
Clean vector illustration, modern friendly design, 
minimalist with warmth
```

```text
Soft acrylic painting, dreamy pastel illustration, 
children's book illustration style
```

### Style Modifiers

| Style | Effect | Best For |
|-------|--------|----------|
| **Watercolor** | Soft, flowing, dreamy, peaceful | Meditation, calm, nature themes |
| **Vector/Flat** | Clean, modern, accessible, digital | Posters, web, educational material |
| **Acrylic** | Warm, organic, slightly textured | School outreach, approachable |
| **Gouache** | Opaque, soft, painterly | Illustrated posters |
| **Ink & Watercolor** | Artistic, sketch + color | Creative, artistic themes |

---

## Indian Cultural Context & School Setting

### Critical for Trust & Authenticity

```text
Real Indian school classroom environment, Indian children, 
typical school uniforms, authentic school materials and notebooks, 
Indian teacher, real wood desks and chalkboards/whiteboards.
```

### What to AVOID

- Stock photo aesthetics
- Western classroom assumptions
- Over-spiritualized imagery
- Stereotypical yoga poses
- Religious symbols or deity imagery
- Exaggerated facial features or "model-perfect" looks
- Overly polished/glamorous styling

### Tone Setting Language

```text
Honest documentary school realism, innocent and peaceful, 
trustworthy and approachable for parents and teachers, 
science-informed wellness focus, secular school program.
```

---

## Negative Constraints (What to Exclude)

Always include explicit constraints:

```text
Constraints: 
- No religious symbols, deity imagery, or spiritual iconography
- No exaggerated yoga poses or flexibility displays
- No watermark, copyright notice, or logo
- No distorted hands, fingers, or text
- No extra text beyond what's specified
- No clutter or excessive background detail
- No artificial filters or overly styled appearance
- No mystical effects, auras, or supernatural elements
- No violence, scary, or inappropriate content
```

---

## Photorealism Prompting for School Scenes

When using photorealistic style:

```text
Soft high-key documentary photography, 35mm lens perspective, 
gentle natural daylight from windows, light pastel palette 
(soft white, sky blue, soft yellow, light green), real Indian 
classroom with authentic details, honest natural expressions, 
candid unposed moments, real skin texture and fabric detail, 
innocent and peaceful mood, no glamorization.
```

### Breakdown

| Component | Detail |
|-----------|--------|
| **Photography style** | documentary, candid, reportage |
| **Lens** | 35mm (natural), 50mm (balanced), 85mm (portrait) |
| **Lighting** | soft high-key, natural window light, golden hour |
| **Mood** | innocent, peaceful, trustworthy, approachable |
| **Details** | real texture, authentic clothing, visible school items |

---

## Editing & Refinement Workflow

### When You Need Adjustments

**Edit Template:**

```text
Change only [target area].

Keep [identity/layout/background/colors/composition] unchanged.

New element/change: [specific details].

Do not restyle the entire image.
```

### Example

```text
Change only the text in the poster to "FIND YOUR FOCUS" 
(keeping everything else identical — same layout, background, 
colors, composition, teacher expression, children, classroom).

Use the same bold sans-serif font, same dark teal color, 
same top-center placement.

No other changes.
```

### Reference Images for Consistency

If generating multiple assets (school poster, WhatsApp status, proposal cover):

1. Generate strongest first version
2. Save as reference image
3. Include reference in follow-up prompts
4. Request "similar visual style and palette"

---

## Ready-to-Use Prompt Templates

### Template 1: School Outreach Poster (Vertical A4)

```text
Create a gentle school outreach poster for a free meditation 
program for children.

Audience: school principals, teachers, and parents in India.

Scene: Indian school children sitting calmly in a bright classroom 
after a simple meditation session, relaxed peaceful faces, 
notebooks and school bags nearby, teacher observing with 
a kind expression, window light visible.

Composition: vertical portrait poster 1024x1536, children positioned 
in lower-center third, open clean space at top for headline, 
subtle school environment in soft-focus background.

Style: soft high-key documentary photography, natural daylight, 
gentle window light, pastel white, sky blue, soft yellow, and 
fresh leaf green palette, innocent and peaceful mood, no 
glamorization, candid authentic expressions.

Constraints: secular school wellness communication, no religious 
symbols, no deity imagery, no exaggerated yoga poses, no watermark, 
no clutter, no distorted hands, clean and professional.
```

### Template 2: WhatsApp Status (9:16 Vertical)

```text
Create a 9:16 WhatsApp status image for a free meditation proposal 
to Indian schools.

Subject: school children sitting peacefully with eyes gently closed 
during a simple meditation practice, teacher nearby observing 
kindly, school notebooks and water bottles visible.

Context: bright Indian classroom, morning natural daylight through 
windows, clean walls, soft plants near the window, authentic 
school environment.

Composition: children positioned in the middle safe zone (not near 
edges), open space above for headline text, no important details 
in top or bottom UI areas where WhatsApp covers content.

Style: soft documentary photography, high-key natural light, warm 
but not golden, pastel white, sky blue, soft yellow, fresh green 
palette, innocent and calm mood, real Indian school setting.

Constraints: no religious symbols, no deity image, no dramatic 
yoga pose, no clutter, no watermark, secular school wellness focus.
```

### Template 3: Proposal Cover Page (16:9 Landscape)

```text
Create a professional proposal slide cover for a free meditation 
and focus-building program for Indian schools.

Subject: Indian school children in a bright classroom environment, 
calm focused expressions, engaged and peaceful, school materials 
visible, thoughtful and positive.

Context: modern Indian school classroom, natural window light, 
clean bright space, authentic school setting with books and 
learning materials, morning daylight.

Composition: 16:9 landscape 1536x1024, children and teacher on 
left and center, clean negative space on the right side for 
proposal title and text, balanced professional layout.

Style: realistic editorial photography, soft natural lighting, 
clean white, soft teal, warm gold accents, focused and aspirational 
mood, professional yet approachable.

Constraints: no religious symbols, no mystical effects, no 
exaggerated poses, clean composition, high professional quality, 
no watermark.
```

### Template 4: Children Meditation Visual (Square 1:1)

```text
Create a square social media image of children in a peaceful 
meditation moment.

Subject: 5-8 year old Indian school children sitting peacefully 
with eyes closed in meditation, relaxed shoulders, gentle breathing, 
peaceful expressions, school uniforms, notebooks nearby, teacher 
standing gently behind with a warm expression.

Context: bright classroom with soft window light, clean whitewashed 
walls, green plant in corner, morning light, authentic Indian 
school environment.

Composition: 1024x1024 square, children centered, visual balance 
on all sides, enough breathing room for social media borders.

Style: soft watercolor illustration style with documentary realism 
elements, gentle brushwork feel, pastel palette (soft white, sky 
blue, pale green, warm cream), calm and innocent mood, hand-painted 
warmth but photographically realistic.

Constraints: no religious symbols, no deity imagery, secular 
wellness focus, no watermark.
```

### Template 5: Before/After Focus Visual (Horizontal)

```text
Create a before/after style image showing the contrast between 
stressed and calm students.

Left side: Indian school child looking worried, stressed, holding 
head, distracted expression, scattered notebook, tense shoulders.

Right side (same child/space): same child looking peaceful, focused, 
calm expression, neat notebook, relaxed posture, engaged and 
positive after meditation.

Composition: 16:9 landscape with clear visual division showing 
transformation, same classroom background, soft before lighting 
vs bright after lighting to emphasize change.

Style: documentary photography, left side cooler and slightly dimmer 
mood, right side warm and bright with peaceful mood, pastel palette 
throughout, realistic but hopeful, no exaggeration.

Constraints: sensitive portrayal of stress (not scary), clear 
positive transformation, no judgment, authentic and relatable, 
no religious symbols.
```

### Template 6: Teacher Trust-Building Visual

```text
Create an image showing a trusted teacher facilitating a calm 
meditation session.

Subject: Indian school teacher (30-50 years old, warm expression) 
sitting or standing peacefully near Indian school children 
(8-12 years old) during meditation, teacher present and kind, 
children peaceful, authentic school uniforms and materials.

Context: bright classroom with morning window light, clean walls, 
educational posters, authentic school environment, safe and 
professional.

Composition: teacher in center or slightly left, children visible 
around, peaceful and professional arrangement, focus on trust and 
safety, balanced composition.

Style: soft documentary photography, natural daylight, pastel white, 
sky blue, soft green palette, warm and approachable mood, 
professional but personal, honest expressions.

Constraints: no religious symbols, no mystical elements, secular 
school wellness program, high trust and professionalism, no 
watermark.
```

---

## Common Failure Modes & Fixes

| Problem | Cause | Fix |
|---------|-------|-----|
| **Text misspelled/broken** | Model struggles with exact characters | Use fewer words, max 25 chars, or add text in Canva post-generation |
| **Layout not obeyed** | Composition too complex | Simplify directions: "children lower third, space above", avoid multiple focal points |
| **Looks too spiritual/mystical** | Model defaulting to yoga/meditation stereotypes | Explicitly say "secular school wellness", "no religious symbols", "science-informed" |
| **Too stock-photo-like** | Generic template result | Request "documentary realism", "candid unposed", "real classroom details", "imperfect and human" |
| **Faces too polished/model-like** | Beauty/glamour bias | Request "candid natural expressions", "innocent", "unposed", "real people", "honest faces" |
| **Wrong Indian context** | Model using generic/Western classroom | Say "Indian school classroom", "Indian children", "school uniforms", "authentic details" |
| **Hands distorted** | Complex hand anatomy | Keep hands simple or in background, or avoid close-up hand focus |
| **Dark/scary mood** | Lighting misinterpreted | Use "high-key bright", "soft natural light", "no shadows" |
| **Over-saturated color** | Model amplifying palette | Say "pastel", "soft", "desaturated", "gentle palette" |

---

## Comparison: ChatGPT vs Gemini

### When to Use ChatGPT / gpt-image-2

✅ **Use `gpt-image-2` when:**
- Text is central to the image (poster headlines, exact wording)
- Complex poster layouts with structured elements
- High-fidelity character/object consistency needed
- Final professional assets requiring minimal retakes
- Brand consistency across multiple images
- Maximum artistic control and style precision

### When to Use Gemini / Imagen

✅ **Use Gemini when:**
- Fast iteration and multiple variations needed
- Indian cultural realism and authenticity is priority
- Interactive editing/refinement in conversation
- Cost efficiency on high-volume generation
- Testing multiple directions quickly
- Reference image consistency (up to 14 images)

---

## Workflow Recommendation for Sahaja Yoga Project

### Phase 1: Exploration
- Use Gemini for fast variations (3-5 options)
- Test different compositions and moods
- Gather feedback on best direction

### Phase 2: Production
- Use ChatGPT `gpt-image-2` for final poster images
- Generate background without text
- Add Marathi/English/Hindi text in Canva/Figma for reliability

### Phase 3: Consistency
- Save strongest image as reference
- Use for follow-up posters, WhatsApp status, proposal covers
- Request "similar visual style and palette" in follow-up prompts

---

## Production Checklist

Before approving any generated image for use:

- [ ] Text is legible and correct (if included)
- [ ] Aspect ratio matches intended use
- [ ] Color palette is soft and age-appropriate
- [ ] Children/teacher expressions are authentic and peaceful
- [ ] Indian school context is clear and authentic
- [ ] No religious symbols or spiritual imagery
- [ ] No watermark or copyright notice visible
- [ ] Lighting feels natural and trustworthy
- [ ] Composition is balanced and professional
- [ ] No distorted hands, faces, or text
- [ ] Ready for target platform (social, print, proposal)

---

## Sources

### OpenAI Official Documentation
- [OpenAI Image Generation Guide](https://developers.openai.com/api/docs/guides/image-generation)
- [GPT Image Prompting Guide](https://developers.openai.com/cookbook/examples/multimodal/image-gen-models-prompting-guide)
- [ChatGPT Images Help](https://help.openai.com/en/articles/11084440-images-in-chatgpt)

### Prompting Best Practices
- [Prompting Guide: How to Use DALL-E 3 with ChatGPT](https://www.agenticworkers.com/blog/getting-started-with-dall-e-3-and-chatgpt-a-guide-for-everyday-users-rWb4qJ)
- [DALL-E Prompt Writing: How To Create Great Prompts](https://foundationinc.co/lab/dall-e-prompts/)
- [AI Lighting Prompts Guide](https://artlist.io/blog/ai-lighting-prompts/)

### Comparative Analysis
- [DALL-E 3 vs Gemini Comparison 2025](https://slashdot.org/software/comparison/DALL-E-3-vs-Gemini-Google/)
- [DALLE3 vs Gemini 2.5 Flash Image Analysis](https://centrox.ai/blogs/artificial-intelligence/dall-e-3-vs-gemini-2-5-flash-image)

# Google Gemini / Imagen Image Prompting Guide for Sahaja Yoga School Outreach

**Updated:** 2026-05-16
**Focus:** School posters, WhatsApp status, proposal visuals, Indian cultural authenticity

---

## Official Model Reference

### Gemini Image Generation Models

| Model | Name | Strength | Cost | Text Support |
|-------|------|----------|------|--------------|
| `gemini-3.1-flash-image-preview` | Nano Banana 2 | Best balance (quality/speed/cost) | Low | Good |
| `gemini-3-pro-image-preview` | Nano Banana Pro | Professional assets, complex layouts | Medium | Excellent |
| `gemini-2.5-flash-image` | Nano Banana | Speed, efficiency, high-volume | Lowest | Fair |
| `imagen-3.0-generate-001` | Imagen 3 | Specialized image model | Medium | Good |
| `imagen-4-ultra` | Imagen 4 Ultra | Maximum quality, one at a time | High | Best |

**Key Characteristics:**

- Google uses "Nano Banana" as public marketing name
- All Gemini-generated images include SynthID watermarking (invisible/visible detection)
- Supports up to 14 reference images for consistency
- Excellent at Indian cultural authenticity
- Conversational refinement in real-time
- Fast iteration and multi-variant generation
- Strong understanding of context and intent

---

## Aspect Ratios & Size Guidance

### For Sahaja Yoga Project

| Asset Type | Aspect Ratio | Output Size (Gemini 3) | Notes |
|------------|-------------|----------------------|-------|
| **Square Social Post** | 1:1 | 1024x1024 | Instagram, WhatsApp DP, Facebook |
| **School Poster (Portrait)** | 4:5 or 3:4 | 1280x1600 or 1200x1600 | Print-friendly, bulletin boards |
| **WhatsApp Status** | 9:16 | 768x1344 | Mobile vertical format, optimal |
| **Proposal Slide Cover** | 16:9 | 1344x768 | PowerPoint, Google Slides |
| **Wide Banner** | 21:9 | 1536x672 | Website header, LinkedIn cover |
| **Cinematic** | 19:9 | 1424x674 | Dramatic horizontal format |

### Gemini 2.5 Flash Output Sizes
- `1:1` → 1024x1024
- `9:16` → 768x1344
- `16:9` → 1344x768
- `21:9` → 1536x672

### Gemini 3 Support
- More aspect ratio flexibility
- Up to 4K-class outputs depending on model variant
- Explicit aspect ratio specification recommended

---

## Core Prompt Formula for Gemini

Gemini uses a simpler, more conversational structure than DALL-E 3.

**Official Google Structure:**

```
Subject + Context/Background + Style
```

**For Production Work:**

```text
Create [asset type] for [purpose and audience].

Subject: [who/what, age/context, action].

Context: [location, background, cultural details].

Composition: [aspect ratio], [camera angle], [subject placement], 
[safe space for UI/text].

Style: [photo/illustration style], [lighting], [palette], [mood].

Text: [if needed—short exact text only].

Constraints: [positive desired qualities], [minimal exclusions].
```

### Master Template

```text
Create a [ASSET TYPE] for [AUDIENCE and PURPOSE].

Subject: [WHO is in image, AGE, ACTION they're doing].

Context: [WHERE—location, environment, cultural setting].

Composition: [ASPECT RATIO], [CAMERA ANGLE], [subject placement], 
[space for text/UI if needed].

Style: [PHOTO/ILLUSTRATION STYLE], [lighting approach], 
[color palette], [mood/emotion].

Text: [if needed] exact words "[SHORT PHRASE]", font style, placement.

Constraints: [what you DO want], then [minimal exclusions if needed].
```

---

## Prompt Best Practices (Gemini-Specific)

### What Works Best

✅ **Be hyper-specific:** Details give you control. "Children sitting peacefully" is less effective than "8-10 year old Indian school children in blue school uniforms, sitting cross-legged on the floor, eyes gently closed, backs straight, peaceful expressions, in a bright classroom."

✅ **Provide intent:** Tell Gemini WHY you're making this. "For a school principal's proposal to convince them to adopt meditation program" is much better than "children meditating."

✅ **Use positive language:** Describe what you WANT, not what to avoid (though Gemini handles both).

✅ **Iterate from core:** Start with one good prompt, then add details instead of rewriting. Each iteration refines, not resets.

✅ **For cultural authenticity:** Gemini excels at understanding Indian school contexts, uniforms, classroom designs, and cultural nuance. Be specific: "Indian school classroom" not "generic classroom."

### Gemini's Strength Areas

- Multi-image fusion and consistency
- Iterative refinement through conversation
- Cultural context understanding
- Fast variation generation
- Reference image handling (up to 14 images)
- Natural conversational flow

---

## Text in Images (Imagen 3 / Gemini Guidance)

### Text Limits & Best Practice

- **Keep to 25 characters or less** for reliable rendering
- **Use 1-2 phrases maximum** (not 3+ competing text elements)
- **Expect some placement variation** (not pixel-perfect)
- **Specify general font style** ("clean sans-serif", "bold sans-serif") not exact font family
- **For reliable text in posters/proposals:** Generate artwork without text, add text in Canva/Figma

### Text Prompt Block

```text
Exact text only (no extra characters): "FREE MEDITATION"

Font: large clean sans-serif, bold weight, dark teal color.

Placement: top center with clear breathing room below.

Requirement: text appears exactly once, fully legible, 
high contrast, no distortion.
```

### Pro Tip for 100% Accuracy

First, finalize exact text in chat with Gemini:

```
The text I want is: "FREE MEDITATION"
Does this match what I should request in the image prompt?
[Wait for confirmation]

Now create an image with exactly this text...
```

This meta-step ensures the model understands exact wording before generating.

---

## Lighting Specification for Soft School Scenes

### Gemini Lighting Language

Gemini understands natural language for lighting. Use conversational descriptions:

```text
Soft natural daylight coming through classroom windows, 
gentle and even illumination, no harsh shadows, 
warm but not golden, bright and approachable mood.
```

### Named Lighting Techniques

Instead of vague "dramatic" or "beautiful", use specific photography terms:

| Technique | Description | Effect |
|-----------|-------------|--------|
| **High-key** | Bright, even light, minimal shadows | Safe, innocent, trustworthy |
| **Soft key light** | Directional but diffused, flattering | Professional yet personal |
| **Window light from left** | Natural directional light | Authentic documentary feel |
| **Golden hour** | Warm evening/morning light | Approachable, peaceful |
| **Diffused daylight** | Even all-directional light | Safe, bright, unintimidating |
| **Gentle rim light** | Subtle backlight for separation | Focus themes, meditation |

### Lighting Prompt Language

```text
"Soft high-key lighting from classroom windows, gentle and even 
illumination, no harsh shadows, warm natural daylight, 
bright and approachable feeling, innocent mood."
```

---

## Color Palette Specification

### Soft, Pastel, Indian School Appropriate

**Core Palette for Trust & Safety:**

```text
Palette: soft white background, sky blue accents, pale leaf green, 
warm cream tones, gentle yellow, soft lavender, natural wood 
textures.
```

**For Meditation/Calm Theme:**

```text
Palette: pristine white, pale blue, light sage green, warm beige, 
pale lavender, natural materials.
```

**For Engagement (while staying soft):**

```text
Palette: bright white, sky blue, fresh green, warm golden yellow, 
soft orange touches, natural earthy tones.
```

### How Gemini Understands Color

- Be specific about saturation: "desaturated blue" vs "vibrant blue"
- Use temperature: "warm cream" vs "cool white"
- Reference emotional tone: "calm palette", "peaceful tones", "bright yet gentle"
- Describe as if curating: "mostly white with sky blue accents and soft green touches"

### Avoid Generic Color Names

| Don't Say | Do Say |
|-----------|--------|
| "blue" | "soft sky blue" or "pale blue" |
| "green" | "pale leaf green" or "light sage green" |
| "bright" | "bright yet gentle" or "clear and vibrant but soft" |
| "calming colors" | "palette of soft white, sky blue, pale green, warm cream" |

---

## Photography Style Guidance

For photorealistic school scenes with Gemini:

### Camera/Lens Language

```text
Documentary photography, 35mm lens perspective, soft natural 
daylight, gentle and honest, unposed candid moments, real 
classroom texture and details, Indian school authenticity.
```

### Photography Approach

| Style | Effect | Best For |
|-------|--------|----------|
| **Documentary** | Candid, honest, unposed, real | School outreach, trust-building |
| **Editorial** | Professional, thoughtful, composed | Proposal covers, formal materials |
| **Reportage** | Journalistic, authentic, detailed | Classroom realism, evidence |
| **Studio** | Controlled, clean, focused | NOT recommended for school trust |
| **Cinematic** | Dramatic, storytelling | NOT recommended for school (too staged) |

### Style Prompt for School Outreach

```text
Soft documentary photography style, authentic Indian school 
classroom environment, natural daylight through windows, candid 
unposed moments, real skin texture and fabric details, honest 
and trustworthy mood, no glamorization, innocent peaceful 
expressions.
```

---

## Illustration Style Guidance

For non-photographic assets:

### Illustration Styles That Work

```text
Gentle watercolor illustration, soft brushwork, dreamy and 
peaceful, hand-painted feeling, delicate colors and flowing lines.
```

```text
Clean vector illustration, modern friendly design, bright and 
accessible, flat color style, minimal line work.
```

```text
Soft acrylic painting style, warm and organic, slightly textured, 
children's book illustration aesthetic.
```

### When to Use Illustration vs Photography

| Approach | Best For | Avoid For |
|----------|----------|-----------|
| **Watercolor** | Meditation themes, calm visuals, dreamy | Hard deadline, text-heavy |
| **Vector** | Clean posters, social media, Web | High-photorealism needs |
| **Acrylic** | Warm school outreach, approachable | Professional proposal covers |
| **Photography** | Trust-building, authentic school context | Soft/dreamy meditation visuals |

---

## Indian Cultural Context & Authenticity

### Critical for Genuine School Connection

Gemini excels at understanding Indian school context. Be specific:

```text
Real Indian school classroom with authentic details: whitewashed 
walls, wooden desks and benches, Indian school uniforms (blue and 
white standard school dress), small classroom windows with natural 
light, educational posters in Hindi/English, wooden chalkboard or 
whiteboard, real school materials, Indian teacher and children.
```

### What to Request

✅ Specify Indian context explicitly
✅ Name authentic school uniform styles
✅ Request classroom materials/designs specific to Indian schools
✅ Ask for authentic Indian faces and features
✅ Request Marathi/Hindi text or signage if appropriate
✅ Emphasize "secular school wellness program" vs spiritual framing

### What to Avoid

❌ Generic Western classroom assumptions
❌ Over-spiritualized or stereotypical yoga imagery
❌ Exaggerated poses or flexibility display
❌ Religious symbols or deity imagery
❌ "Model-perfect" or glamorous styling (lacks authenticity)
❌ Stock photo aesthetic
❌ Stereotypical representations

### Authenticity Prompt Language

```text
Secular school wellness program, not spiritual or religious, 
science-informed meditation approach, honest and practical, 
trustworthy for school administrators and parents, authentic 
Indian school environment with real details, candid authentic 
expressions showing genuine calm (not staged), modest and 
appropriate.
```

---

## Using Reference Images (Up to 14)

### Gemini's Secret Advantage: Reference Image Consistency

Gemini 3 can maintain style/consistency across up to 14 reference images.

### How to Use References

1. **Generate strongest first image** for your school poster
2. **Save that image**
3. **In follow-up prompts, include the image and say:**

```text
Create [new asset] with visual style similar to the reference 
image I've provided. Keep the same soft photography style, 
palette (soft white, sky blue, pale green), and innocent 
peaceful mood, but [NEW SUBJECT/COMPOSITION].
```

### Example Multi-Asset Workflow

```
Step 1: Create "School Poster" with Gemini
  ↓
Step 2: Save best version
  ↓
Step 3: Create "WhatsApp Status" 
  + Include poster as reference
  + Request "same visual style, different composition"
  ↓
Step 4: Create "Proposal Cover"
  + Include both previous assets as reference
  + Request "consistent with visual style, landscape format"
```

### Reference Image Benefits

- Maintain consistent child portrayal and age across assets
- Keep color palette identical
- Preserve visual identity across all school outreach materials
- Ensure lighting and mood consistency
- Speed up iteration (model understands your direction better)

---

## Negative Prompts (Conditional Support)

### Important: Model Version Matters

**Negative prompts supported in:**
- `imagen-3.0-generate-001`
- `imagen-3.0-fast-generate-001`
- `imagen-3.0-capability-001`

**NOT supported in:**
- `imagen-3.0-generate-002` and newer
- Gemini 2.5+ models

### When Available: Negative Prompt Format

Use plain omitted terms (not "no walls" but just "wall"):

```text
Negative prompt: religious symbols, deity imagery, exaggerated 
yoga poses, watermark, text distortion, harsh shadows, clutter, 
mystical effects.
```

### For Newer Models: Use Positive Constraints Instead

```text
Constraints: Clean uncluttered composition, plain bright 
background, crisp readable typography (if text included), 
natural hands and expressions, calm peaceful faces, secular 
school wellness setting, no religious imagery, no watermark, 
authentic Indian school environment.
```

---

## Ready-to-Use Prompt Templates for Gemini

### Template 1: School Principal Proposal Poster (Portrait 4:5)

```text
Create a professional school proposal poster for a free meditation 
program for children, for sharing with school principals and teachers.

Subject: Indian school children (8-12 years old) in school uniforms 
sitting peacefully in meditation with eyes gently closed, relaxed 
shoulders, peaceful expressions, teacher nearby observing kindly 
with warm expression.

Context: bright authentic Indian school classroom, morning natural 
light through windows, whitewashed walls, wooden desks and benches, 
educational materials and notebooks visible, safe and academic 
environment.

Composition: 4:5 portrait aspect ratio, children positioned in lower 
and center area, clean open space at top for headline/text, balanced 
and professional arrangement, no important details in very top or 
bottom edges.

Style: soft documentary photography, 35mm lens perspective, high-key 
natural daylight, gentle even lighting from windows, warm but not 
golden tones, pastel palette (soft white, sky blue, soft yellow, 
pale leaf green), innocent and peaceful mood, honest unposed candid 
moments, no glamorization.

Constraints: authentic Indian school authenticity, no religious 
symbols or deity imagery, no exaggerated yoga poses, no watermark, 
clean professional appearance, trustworthy for administrators, real 
skin texture, honest expressions, secular school wellness focus.
```

### Template 2: WhatsApp Status (9:16 Mobile Vertical)

```text
Create a 9:16 WhatsApp vertical status image for a meditation 
program announcement to schools.

Subject: school children sitting peacefully with eyes gently closed 
in meditation, natural peaceful expressions, school uniforms visible, 
teacher nearby with kind presence.

Context: bright Indian classroom, morning daylight through windows, 
clean walls, authentic school materials visible, calm and safe 
environment.

Composition: 9:16 aspect ratio vertical, children positioned in 
center safe zone away from left and right edges, clear space above 
for headline text, no important details in top 1/6 or bottom 1/4 
(where WhatsApp covers content with status info).

Style: soft high-key documentary photography, natural window light, 
gentle even illumination, pastel palette (soft white, sky blue, 
soft yellow, light green), peaceful and innocent mood.

Text: if needed, only "FREE MEDITATION", clean bold sans-serif, 
top center, dark teal color, fully legible and high contrast.

Constraints: authentic Indian school setting, no religious symbols, 
no watermark, clean and professional.
```

### Template 3: Proposal Cover Slide (16:9 Landscape)

```text
Create a professional 16:9 landscape proposal cover for a school 
meditation program.

Subject: Indian school children (8-12 years old) in classroom after 
meditation, calm focused expressions, peaceful and confident, school 
uniforms, teacher present with warm expression, school materials 
visible.

Context: modern bright Indian school classroom, natural window light, 
clean white walls, wooden furniture, authentic school environment, 
academic and safe atmosphere.

Composition: 16:9 landscape, children and teacher on left and center, 
clean open space on right side for proposal title and text layout, 
balanced professional composition.

Style: realistic editorial photography, soft natural daylight, warm 
and approachable, clean white, teal, and gold palette, focused and 
aspirational mood, professional yet personal, high quality.

Constraints: no religious imagery, no mystical effects, clean 
professional layout, high trust, authentic school setting, no 
watermark.
```

### Template 4: Children Meditation Calm Visual (1:1 Square)

```text
Create a peaceful 1:1 square image suitable for social media showing 
children in meditation.

Subject: 6-10 year old Indian school children, peaceful meditation, 
eyes gently closed, relaxed and calm expressions, various seated 
positions, natural and honest, school environment visible.

Context: bright classroom with soft window light, clean walls, green 
plant or natural element visible, morning light, authentic Indian 
school setting.

Composition: 1:1 square aspect ratio, children positioned centrally 
with balanced space around, no important details near edges, suitable 
for social media crop/borders.

Style: soft watercolor illustration style blended with documentary 
realism, gentle brushwork appearance, pastel colors (soft white, sky 
blue, pale green, warm cream, light lavender), calm and innocent mood, 
hand-painted warmth with realistic authenticity.

Constraints: no religious symbols, secular wellness focus, innocent 
and peaceful, no watermark, no exaggerated poses.
```

### Template 5: Teacher Trust-Building (Vertical 3:4)

```text
Create a 3:4 portrait image showing a trusted teacher guiding 
children in meditation to build school administrator confidence.

Subject: warm Indian school teacher (35-55 years old) with kind 
expression, present and supportive, overseeing school children (8-12 
years old) in peaceful meditation in uniform, calm and safe 
environment, genuine care visible.

Context: authentic bright Indian school classroom, morning natural 
light, clean professional environment, school materials and furniture 
visible, safe and academic setting.

Composition: 3:4 portrait, teacher positioned prominently showing 
warmth and presence, children visible in background/sides, balanced 
composition showing supervision and care.

Style: soft documentary photography, natural daylight, warm and 
approachable, pastel palette (soft white, sky blue, soft yellow, 
pale green), trustworthy and professional mood, honest expressions, 
genuine emotion.

Constraints: authentic Indian school setting, no religious symbols, 
professional and appropriate, high trust level, warm but not 
sentimental, no watermark.
```

### Template 6: Before/After Focus Comparison (16:9)

```text
Create a 16:9 landscape before/after image showing the contrast 
between stressed and focused students.

LEFT SIDE: Indian school student looking stressed, worried or 
distracted, hand to head or scattered focus, tense posture, anxious 
expression, school materials scattered.

RIGHT SIDE: same student (or similar student) looking calm, focused, 
confident, good posture, peaceful expression, organized materials, 
engaged and positive.

Composition: 16:9 with clear visual divide showing transformation, 
same classroom background or setting, clear visual progression from 
left to right.

Style: left side cooler lighting and slightly muted mood showing 
stress; right side bright warm lighting and peaceful mood showing 
calm, overall documentary photography style, authentic school 
environment.

Constraints: sensitive portrayal of initial stress (not scary or 
exaggerated), clear positive transformation visible, authentic and 
relatable, no judgment or stigma, no religious symbols, hopeful 
message.
```

### Template 7: Multi-Child Group Meditation (Horizontal 16:9)

```text
Create a 16:9 horizontal image of a diverse group of Indian school 
children meditating together during school time.

Subject: 8-12 different Indian school children from various 
backgrounds, sitting peacefully in meditation, eyes closed or gently 
down, calm peaceful expressions, school uniforms, diverse representation.

Context: bright authentic Indian school classroom or assembly area, 
morning natural light through windows, open space, school materials 
visible, academic and inclusive environment.

Composition: 16:9 landscape, children distributed naturally across 
frame showing group/community aspect, arranged in relaxed circle or 
rows, balanced composition showing unity and diversity, teacher 
visible observing.

Style: soft documentary photography, high-key natural daylight, warm 
and inclusive mood, pastel palette (soft white, sky blue, soft green, 
warm yellow), peaceful and community-focused, honest and authentic, 
no staged feeling.

Constraints: authentic representation of Indian school diversity, no 
stereotypes, inclusive and welcoming, no religious symbols, peaceful 
and secular focus, no watermark.
```

---

## Gemini-Specific Workflow Tips

### 1. Conversational Refinement

Gemini is conversational. You can:

```
First message:
"Create a WhatsApp status image for a school meditation program..."

Second message:
"Make the children look younger and more innocent."

Third message:
"The text color should be darker teal, not blue."

Fourth message:
"Generate a horizontal version of this same image."
```

Each iteration refines without full rewriting.

### 2. Multi-Variant Generation

Ask Gemini to generate 3-5 variations at once:

```
Create 3 different versions of a school poster showing:
- Version A: children sitting in circles
- Version B: children sitting in rows
- Version C: children with classroom visible in background

Same style, palette, and mood for all three.
```

### 3. Reference + Variant Workflow

```
Step 1: Generate base poster image
Step 2: Save it
Step 3: "Now create the same style but as a 9:16 WhatsApp status 
        with children more in center, using this image as reference."
Step 4: Generate again
Step 5: "Create a horizontal 16:9 version for a proposal slide, 
        keeping the same visual style and palette."
```

---

## Failure Modes & Fixes (Gemini-Specific)

| Problem | Cause | Gemini Fix |
|---------|-------|-----------|
| **Looks too spiritual** | Default meditation → yoga stereotype | Say "secular school wellness", "science-informed", explicitly no religious symbols |
| **Wrong lighting mood** | Lighting interpreted as dramatic | Say "soft high-key", "no shadows", "bright and innocent", "approachable" |
| **Text not readable** | Too complex or too long | Keep text to 25 chars, 1 phrase only, or remove text from generation |
| **Style inconsistent across images** | No reference image used | Use previous successful image as reference for next generation |
| **Composition off-center** | Placement instructions unclear | Be very specific: "children centered", "space on right for title", "top 1/3 clear" |
| **Hands distorted** | Complex hand focus | Keep hands simple or in background, or ask Gemini to "refine hands" in next iteration |
| **Classroom details missing** | Context not specific enough | Name details: "wooden desks, whitewashed walls, Indian school uniforms, educational posters" |
| **Looks too polished/unreal** | Model defaulting to idealized | Request "candid", "unposed", "real expressions", "honest", "imperfect details" |
| **Wrong Indian context** | Generic classroom assumption | Say "authentic Indian school", name specific details, describe uniforms, teaching materials |

---

## When to Use Which Gemini Model

### `gemini-3.1-flash-image-preview` (Recommended Default)
✅ Best balance of quality, speed, and cost
✅ Good for all school outreach assets
✅ Fast iteration and variants
✅ Excellent Indian cultural understanding
⏱️ Fastest generation time

### `gemini-3-pro-image-preview` (Professional Assets)
✅ Higher quality than Flash variant
✅ Better text rendering (if text needed)
✅ More complex instruction handling
✅ Reference image handling up to 14 images
💰 Medium cost, slower generation

### `gemini-2.5-flash-image` (High Volume)
✅ Fastest and cheapest
✅ Good for drafts and testing
✅ Less precise than 3.1
⚠️ Use for exploration only, not final assets

### `imagen-4-ultra` (Maximum Quality)
✅ Highest quality output
✅ One image at a time
✅ Best for final proposal covers
💰 Most expensive, slowest

---

## Workflow Recommendation for Sahaja Yoga Project

### Phase 1: Direction & Exploration (2-3 iterations)
- Use `gemini-3.1-flash-image-preview`
- Generate 3-5 variations quickly
- Test different compositions, moods, children ages
- Get feedback on best direction

### Phase 2: Refinement (1-2 iterations)
- Use best variation from Phase 1 as reference
- Generate refined versions
- Test WhatsApp status and proposal variants
- Finalize color palette and style

### Phase 3: Production (Final Assets)
- Switch to `gemini-3-pro-image-preview`
- Use strongest designs as reference images
- Generate final poster, status, proposal, social variants
- Maintain consistency across all assets

### Phase 4: Text Addition
- Generate all assets WITHOUT text first
- Add Marathi/English/Hindi text in Canva/Figma
- Ensure 100% accuracy and perfect placement

---

## Production Checklist

Before approving any Gemini-generated image for school outreach:

- [ ] Authentic Indian school context evident
- [ ] Children ages and expressions age-appropriate and innocent
- [ ] Lighting is soft and trustworthy
- [ ] Color palette is soft and pastel throughout
- [ ] No religious symbols or spiritual imagery
- [ ] No exaggerated yoga poses
- [ ] Teacher visible with warm, kind expression
- [ ] School uniforms and materials visible and authentic
- [ ] Composition is balanced and professional
- [ ] Suitable for target platform/size
- [ ] No watermark or copyright notice
- [ ] Expression of children is honest (not perfect/polished)
- [ ] Ready for text addition in design tool

---

## Comparison with ChatGPT / DALL-E 3

### When to Use Gemini

✅ **Gemini excels at:**
- Fast iteration and variants
- Indian cultural authenticity
- Reference image consistency (up to 14)
- Conversational refinement
- Multi-image generation
- Conversational UI reduces friction

### When to Use ChatGPT / DALL-E 3

✅ **DALL-E 3 excels at:**
- Final text placement in posters
- Complex poster layouts with multiple elements
- Consistent character/object across images
- Maximum artistic control and precision
- Single best-quality asset (fewer retries)
- Brand consistency without reference images

---

## Sources

### Google Official Documentation
- [Gemini Image Generation API](https://ai.google.dev/gemini-api/docs/image-generation)
- [Imagen Prompt and Image Attribute Guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- [Gemini Prompting Strategies](https://ai.google.dev/gemini-api/docs/prompting-strategies)

### Best Practices & Guides
- [Gemini 3 Prompting Guide - November 2025](https://promptbuilder.cc/blog/gemini-3-prompting-playbook-november-2025)
- [Gemini 3 Prompting: Best Practices for General Usage](https://www.philschmid.de/gemini-3-prompt-practices)
- [Gemini Imagen 3 Complete Guide](https://www.the-ai-corner.com/p/gemini-imagen-3-complete-guide)

### Comparative Analysis
- [Gemini 2.5 vs DALL-E 3 Comprehensive Review](https://chatsmith.io/blogs/comparison/gemini-2-5-vs-dall-e-3-00025)
- [DALLE3 vs Gemini 2.5 Flash Image Analysis](https://centrox.ai/blogs/artificial-intelligence/dall-e-3-vs-gemini-2-5-flash-image)
- [DALL-E vs Gemini vs Stability GenAI Evaluations](https://www.edge-ai-vision.com/2025/01/dall-e-vs-gemini-vs-stability-genai-evaluations/)

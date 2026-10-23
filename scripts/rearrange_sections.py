import re

file_path = '/Users/maulikdaraniya/Desktop/Vimal/products-v4.html'

with open(file_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Helper to find contents between tags
def get_section(start_tag, end_tag):
    pattern = re.escape(start_tag) + r'(.*?)' + re.escape(end_tag)
    match = re.search(pattern, html, re.DOTALL)
    if match:
        return match.group(1).strip()
    else:
        raise ValueError(f"Could not find section boundaries: {start_tag} to {end_tag}")

# Extract parts of the HTML
header_part = html.split('<!-- SECTION 1: PRODUCT HERO -->')[0].strip()

hero_sec = get_section('<!-- SECTION 1: PRODUCT HERO -->', '<!-- SECTION 2: PRODUCT FAMILY SHOWCASE -->')
family_sec = get_section('<!-- SECTION 2: PRODUCT FAMILY SHOWCASE -->', '<!-- SECTION 3: FEATURED COMPONENT SHOWCASE (Storytelling layout) -->')
featured_sec = get_section('<!-- SECTION 3: FEATURED COMPONENT SHOWCASE (Storytelling layout) -->', '<!-- SECTION 4: WHERE OUR PRODUCTS WORK (Interactive Industry Explorer) -->')
industry_sec = get_section('<!-- SECTION 4: WHERE OUR PRODUCTS WORK (Interactive Industry Explorer) -->', '<!-- SECTION 5: FROM DRAWING TO FINISHED COMPONENT -->')
material_sec = get_section('<!-- SECTION 6: MATERIAL & GRADE EXPERTISE (Interactive Matrix) -->', '<!-- SECTION 7: WHY OEMS CHOOSE VIMAL FORGE LLP -->')
gallery_sec = get_section('<!-- SECTION 8: APPLICATION GALLERY (Masonry Layout) -->', '<!-- SECTION 9: CUSTOM COMPONENT DEVELOPMENT (Drawing upload callout) -->')
custom_sec = get_section('<!-- SECTION 9: CUSTOM COMPONENT DEVELOPMENT (Drawing upload callout) -->', '<!-- SECTION 10: PRODUCTION STRENGTH (Animated Counters) -->')

footer_part = html.split('<!-- Footer Section -->')[1].strip()

# Refine section titles and text contents
# 1. Product Family Showcase -> Product Family Explorer
family_sec = family_sec.replace('Product Family Showcase', 'Product Family Explorer')
family_sec = family_sec.replace('family-showcase-section', 'family-explorer-section')

# 2. Featured Component Showcase -> Featured Products Showcase
featured_sec = featured_sec.replace('Featured OEM Components', 'Featured Products Showcase')

# 3. Where Our Products Work -> Industry Application Explorer
industry_sec = industry_sec.replace('Interactive Industry Explorer', 'Industry Application Explorer')

# 4. Application Gallery -> Product Application Gallery
gallery_sec = gallery_sec.replace('Component Application Gallery', 'Product Application Gallery')
gallery_sec = gallery_sec.replace('Product Showcase Gallery', 'Component Gallery')

# 5. Why OEM Buyers Choose These Products (New Section 8 HTML)
why_choose_sec_html = '''
    <!-- SECTION 8: WHY OEM BUYERS CHOOSE THESE PRODUCTS -->
    <section class="section-bg-dark advantages-section">
      <div class="section-container">
        <div class="text-center mb-5">
          <span class="section-tagline">Why Choose Us</span>
          <h2 class="section-title text-white">Why OEM Buyers Choose These Products</h2>
          <p class="section-subtitle text-grey-light">Precision engineering and strict processes designed to meet strict B2B procurement standards.</p>
        </div>

        <div class="advantages-grid">
          <!-- Card 1: Material Traceability -->
          <div class="advantage-card" data-anim="fade-up">
            <div class="adv-icon">⛓️</div>
            <h3>Material Traceability</h3>
            <p>100% heat-code traceability from raw steel mill certificate bars to final dispatched forgings.</p>
          </div>
          <!-- Card 2: Custom Manufacturing -->
          <div class="advantage-card" data-anim="fade-up" data-anim-delay="0.1">
            <div class="adv-icon">🛠️</div>
            <h3>Custom Manufacturing</h3>
            <p>Flexible closed-die and ring-rolling setups tailored strictly to customer drawings and CAD files.</p>
          </div>
          <!-- Card 3: Close Tolerance Production -->
          <div class="advantage-card" data-anim="fade-up" data-anim-delay="0.2">
            <div class="adv-icon">📐</div>
            <h3>Close Tolerance Production</h3>
            <p>Advanced CNC roughing and finish turning capabilities holding strict dimensional tolerances.</p>
          </div>
          <!-- Card 4: Engineering Support -->
          <div class="advantage-card" data-anim="fade-up" data-anim-delay="0.3">
            <div class="adv-icon">🤝</div>
            <h3>Engineering Support</h3>
            <p>Direct CAD modeling review and metallurgical feasibility consultation with plant engineers.</p>
          </div>
          <!-- Card 5: OEM Development -->
          <div class="advantage-card" data-anim="fade-up" data-anim-delay="0.4">
            <div class="adv-icon">🔩</div>
            <h3>OEM Development</h3>
            <p>Rapid die shop tooling iterations inside a 15-day cycle for first-sample validation.</p>
          </div>
          <!-- Card 6: Consistent Quality -->
          <div class="advantage-card" data-anim="fade-up" data-anim-delay="0.5">
            <div class="adv-icon">🏆</div>
            <h3>Consistent Quality</h3>
            <p>ISO 9001:2015 certified process controls, crack testing (MPI), and spectrometer verification.</p>
          </div>
        </div>
      </div>
    </section>
'''

# 6. RFQ / Engineering Review CTA (Section 9)
rfq_sec_html = '''
    <!-- SECTION 9: RFQ / ENGINEERING REVIEW CTA -->
    <include src="components/cta-section.html"></include>
'''

# Construct the refined HTML body
refined_html = f"""{header_part}

    <!-- SECTION 1: PRODUCT HERO -->
    {hero_sec}


    <!-- SECTION 2: PRODUCT FAMILY EXPLORER -->
    {family_sec}


    <!-- SECTION 3: FEATURED PRODUCTS SHOWCASE -->
    {featured_sec}


    <!-- SECTION 4: INDUSTRY APPLICATION EXPLORER -->
    {industry_sec}


    <!-- SECTION 5: MATERIAL & GRADE EXPERTISE -->
    {material_sec}


    <!-- SECTION 6: CUSTOM COMPONENT DEVELOPMENT -->
    {custom_sec}


    <!-- SECTION 7: PRODUCT APPLICATION GALLERY -->
    {gallery_sec}


    {why_choose_sec_html}


    {rfq_sec_html}


    <!-- Footer Section -->
    {footer_part}"""

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(refined_html)

print("HTML Sections successfully rearranged, renamed, and de-duplicated!")

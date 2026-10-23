const fs = require('fs');
const path = require('path');
const glob = require('glob');

const htmlFiles = glob.sync('/Users/maulikdaraniya/Desktop/Vimal/*.html');

// The new simplified nav block (without active class — we preserve that per file)
const newNavBlock = `<ul class="nav-links">
          <li><a href="/index.html" class="nav-item">Home</a></li>
          <li><a href="/about.html" class="nav-item">About</a></li>
          <li class="has-dropdown">
            <a href="/facilities.html" class="nav-item">Capabilities</a>
            <ul class="dropdown-menu">
              <li><a href="/facilities.html">Manufacturing Facilities</a></li>
              <li><a href="/manufacturing-process.html">Manufacturing Process</a></li>
              <li><a href="/quality.html">Quality Assurance</a></li>
              <li><a href="/global-supply-capability.html">Global Supply</a></li>
            </ul>
          </li>
          <li><a href="/products.html" class="nav-item">Products</a></li>
          <li class="has-dropdown">
            <a href="/industries.html" class="nav-item">Industries</a>
            <ul class="dropdown-menu">
              <li><a href="/bearing-industry.html">Bearing Industry</a></li>
              <li><a href="/automotive-industry.html">Automotive Industry</a></li>
              <li><a href="/hydraulic-industry.html">Hydraulic Industry</a></li>
              <li><a href="/oil-gas-industry.html">Oil &amp; Gas Industry</a></li>
              <li><a href="/agriculture-industry.html">Agriculture Industry</a></li>
              <li><a href="/power-transmission-industry.html">Power Transmission</a></li>
            </ul>
          </li>
          <li class="has-dropdown">
            <a href="/resources.html" class="nav-item">Resources</a>
            <ul class="dropdown-menu">
              <li><a href="/tour.html">Factory Tour</a></li>
              <li><a href="/case-studies.html">Case Studies</a></li>
              <li><a href="/resources.html">Downloads</a></li>
              <li><a href="/blog.html">Blog</a></li>
            </ul>
          </li>
          <li><a href="/contact.html" class="nav-item">Contact</a></li>
          <li class="nav-rfq"><a href="/rfq.html" class="btn btn-primary nav-rfq-btn">Request RFQ</a></li>
        </ul>`;

// Regex to match the entire <ul class="nav-links">...</ul> block
const navRegex = /<ul class="nav-links">[\s\S]*?<\/ul>\s*(?=\s*<\/nav>)/;

let updated = 0;
htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (navRegex.test(content)) {
    // Determine which page this is for setting active state
    const filename = path.basename(file);
    let newNav = newNavBlock;

    // Apply active class to correct nav item
    if (filename === 'index.html') {
      newNav = newNav.replace('href="/index.html" class="nav-item"', 'href="/index.html" class="nav-item active"');
    } else if (filename === 'about.html') {
      newNav = newNav.replace('href="/about.html" class="nav-item"', 'href="/about.html" class="nav-item active"');
    } else if (['facilities.html','manufacturing-process.html','quality.html','global-supply-capability.html'].includes(filename)) {
      newNav = newNav.replace('"nav-item">Capabilities', '"nav-item active">Capabilities');
    } else if (filename === 'products.html') {
      newNav = newNav.replace('href="/products.html" class="nav-item"', 'href="/products.html" class="nav-item active"');
    } else if (['industries.html','bearing-industry.html','automotive-industry.html','hydraulic-industry.html','oil-gas-industry.html','agriculture-industry.html','power-transmission-industry.html'].includes(filename)) {
      newNav = newNav.replace('"nav-item">Industries', '"nav-item active">Industries');
    } else if (['resources.html','tour.html','case-studies.html','blog.html'].includes(filename)) {
      newNav = newNav.replace('"nav-item">Resources', '"nav-item active">Resources');
    } else if (filename === 'contact.html') {
      newNav = newNav.replace('href="/contact.html" class="nav-item"', 'href="/contact.html" class="nav-item active"');
    } else if (filename === 'rfq.html') {
      newNav = newNav.replace('"nav-rfq-btn"', '"nav-rfq-btn active"');
    }

    content = content.replace(navRegex, newNav);
    fs.writeFileSync(file, content, 'utf8');
    updated++;
    console.log(`✓ Updated: ${filename}`);
  } else {
    console.log(`⚠ No nav found: ${path.basename(file)}`);
  }
});

console.log(`\n✅ Done — updated ${updated}/${htmlFiles.length} files`);

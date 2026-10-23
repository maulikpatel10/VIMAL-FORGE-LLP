import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readFileSync } from 'fs';

function htmlComponentPlugin() {
  return {
    name: 'html-component-plugin',
    transformIndexHtml(html) {
      const regex = /<include\s+src="([^"]+)"\s*(.*?)><\/include>/gs;
      return html.replace(regex, (match, src, attrsString) => {
        try {
          const filePath = resolve(__dirname, src);
          let fileContent = readFileSync(filePath, 'utf-8');
          
          // Parse attributes
          const attrsRegex = /(\w+)="([^"]*)"/g;
          let m;
          while ((m = attrsRegex.exec(attrsString)) !== null) {
            const [_, key, val] = m;
            fileContent = fileContent.replace(new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'g'), val);
          }
          
          // Clear remaining placeholders
          fileContent = fileContent.replace(/\{\{\s*\w+\s*\}\}/g, '');
          return fileContent;
        } catch (err) {
          console.error(`Error including file ${src}:`, err);
          return match;
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [htmlComponentPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        facilities: resolve(__dirname, 'facilities.html'),
        products: resolve(__dirname, 'products.html'),
        productsV1: resolve(__dirname, 'products-v1.html'),
        productsV2: resolve(__dirname, 'products-v2.html'),
        productsV3: resolve(__dirname, 'products-v3.html'),
        productsV4: resolve(__dirname, 'products-v4.html'),
        productV5: resolve(__dirname, 'product-v5.html'),
        industries: resolve(__dirname, 'industries.html'),
        quality: resolve(__dirname, 'quality.html'),
        capabilities: resolve(__dirname, 'capabilities.html'),
        tour: resolve(__dirname, 'tour.html'),
        caseStudies: resolve(__dirname, 'case-studies.html'),
        resources: resolve(__dirname, 'resources.html'),
        blog: resolve(__dirname, 'blog.html'),
        rfq: resolve(__dirname, 'rfq.html'),
        rfqsample: resolve(__dirname, 'rfqsample.html'),
        contact: resolve(__dirname, 'contact.html'),
        facilityNetworkDemo: resolve(__dirname, 'facility-network-demo.html'),
        bearingIndustry: resolve(__dirname, 'bearing-industry.html'),
        automotiveIndustry: resolve(__dirname, 'automotive-industry.html'),
        hydraulicIndustry: resolve(__dirname, 'hydraulic-industry.html'),
        oilGasIndustry: resolve(__dirname, 'oil-gas-industry.html'),
        agricultureIndustry: resolve(__dirname, 'agriculture-industry.html'),
        powerTransmissionIndustry: resolve(__dirname, 'power-transmission-industry.html'),
        constructionEquipment: resolve(__dirname, 'construction-equipment.html'),
        earthMovingEquipment: resolve(__dirname, 'earth-moving-equipment.html'),
        industrialMachinery: resolve(__dirname, 'industrial-machinery.html'),
        heavyEngineering: resolve(__dirname, 'heavy-engineering.html'),
        manufacturingProcess: resolve(__dirname, 'manufacturing-process.html'),
        forgedRingManufacturerIndia: resolve(__dirname, 'forged-ring-manufacturer-india.html'),
        bearingRaceManufacturerIndia: resolve(__dirname, 'bearing-race-manufacturer-india.html'),
        ringRollingManufacturerIndia: resolve(__dirname, 'ring-rolling-manufacturer-india.html')
      }
    }
  }
});

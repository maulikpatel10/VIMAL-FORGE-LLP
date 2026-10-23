/* ==========================================================================
   VIMAL FORGE LLP - CLEAN & SIMPLE PREMIUM ENGINEERING RFQ PORTAL LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const rfqForm = document.getElementById('rfq-portal-form');
  const submitBtn = document.getElementById('rfq-submit-btn');
  
  // File Upload State
  const uploadZone = document.getElementById('rfq-upload-zone');
  const fileInput = document.getElementById('rfq-file-input');
  const fileListDisplay = document.getElementById('rfq-file-list');
  let uploadedFilesList = [];

  // 1. Advanced File Upload Drag-and-Drop Processing
  if (uploadZone) {
    ['dragenter', 'dragover'].forEach(eventName => {
      uploadZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        uploadZone.classList.add('dragover');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      uploadZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        uploadZone.classList.remove('dragover');
      }, false);
    });

    uploadZone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      handleFiles(files);
    });

    uploadZone.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', () => {
      handleFiles(fileInput.files);
    });
  }

  function handleFiles(files) {
    const validExtensions = ['.pdf', '.step', '.stp', '.dwg', '.dxf', '.zip'];
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const ext = '.' + file.name.split('.').pop().toLowerCase();
      
      // Limit file size to 25MB
      if (file.size > 25 * 1024 * 1024) {
        alert(`File ${file.name} exceeds the 25MB limit.`);
        continue;
      }

      if (!validExtensions.includes(ext)) {
        alert(`Extension ${ext} is not supported. Supported extensions: PDF, STEP, DWG, DXF, ZIP`);
        continue;
      }

      // Check if file already added
      if (uploadedFilesList.some(f => f.name === file.name && f.size === file.size)) {
        continue;
      }

      addFileToQueue(file);
    }
  }

  function addFileToQueue(file) {
    const fileId = 'file_' + Math.random().toString(36).substring(2, 9);
    const fileObj = {
      id: fileId,
      name: file.name,
      size: formatBytes(file.size),
      raw: file
    };

    uploadedFilesList.push(fileObj);

    // Create file preview UI card
    const card = document.createElement('div');
    card.className = 'rfq-file-card';
    card.id = fileId;
    card.innerHTML = `
      <div class="rfq-file-card-details">
        <div class="rfq-file-card-icon">📄</div>
        <div class="rfq-file-card-info">
          <span class="rfq-file-card-name">${fileObj.name}</span>
          <span class="rfq-file-card-size">${fileObj.size}</span>
        </div>
      </div>
      <button type="button" class="rfq-file-card-delete" data-id="${fileId}">✕</button>
      <div class="rfq-file-card-progress"></div>
    `;

    fileListDisplay.appendChild(card);

    // Trigger upload simulation progress bar
    setTimeout(() => {
      const progressBar = card.querySelector('.rfq-file-card-progress');
      if (progressBar) {
        progressBar.style.width = '100%';
      }
    }, 50);

    // Complete simulated upload
    setTimeout(() => {
      card.classList.add('complete');
      const deleteBtn = card.querySelector('.rfq-file-card-delete');
      if (deleteBtn) {
        deleteBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          removeFile(fileId);
        });
      }
    }, 1550);
  }

  function removeFile(fileId) {
    uploadedFilesList = uploadedFilesList.filter(f => f.id !== fileId);
    const element = document.getElementById(fileId);
    if (element) {
      element.style.opacity = '0';
      element.style.transform = 'scale(0.9)';
      setTimeout(() => {
        element.remove();
      }, 300);
    }
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  // 2. Form Submission Mocking
  rfqForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Field Validations
    const name = document.getElementById('rfq-name').value.trim();
    const company = document.getElementById('rfq-company').value.trim();
    const email = document.getElementById('rfq-email').value.trim();
    const phone = document.getElementById('rfq-phone').value.trim();
    const requirements = document.getElementById('rfq-requirements').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || company === "" || !emailRegex.test(email) || phone === "" || requirements === "") {
      alert("Please fill in all company and project requirement fields correctly.");
      return;
    }

    if (uploadedFilesList.length === 0) {
      alert("At least one technical drawing or CAD file is required to initiate engineering review.");
      return;
    }

    // Change button text to loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '⚙️ Requesting Engineering Review...';

    // Simulated API dispatch
    setTimeout(() => {
      const card = document.querySelector('.rfq-portal-card');
      const rfqId = 'RFQ-' + Math.floor(100000 + Math.random() * 900000);
      
      // Wipe content and transition to Success Dialog
      card.innerHTML = `
        <div class="rfq-success-card">
          <div class="rfq-success-icon">✓</div>
          <h3>RFQ Successfully Logged</h3>
          <p>Request Reference: <strong>${rfqId}</strong></p>
          <p>Your technical drawings and requirements have been securely uploaded to the Vimal Forge directory. A Sourcing Director will complete the initial feasibility audit and respond within 24 business hours.</p>
          
          <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); padding: 1.25rem; border-radius: 12px; text-align: left; width: 100%; margin-top: 1rem;">
            <div style="font-size:0.8rem; text-transform:uppercase; letter-spacing:1px; color:var(--color-rfq-accent); margin-bottom:0.5rem; font-weight:700;">Secure NDA Protection</div>
            <div style="font-size:0.85rem; color:#ffffff; line-height:1.45;">Strict NDA active. Sourcing data and 3D files are protected under enterprise confidentiality guidelines.</div>
          </div>
          
          <a href="/" class="rfq-btn-submit" style="margin-top: 1.5rem; text-decoration: none; max-width: 240px; font-size: 0.95rem; padding: 1rem 2rem;">Return to Homepage</a>
        </div>
      `;

      // Trigger GSAP entry animation if available
      if (window.gsap) {
        gsap.from('.rfq-success-card > *:not(a)', {
          opacity: 0,
          y: 15,
          stagger: 0.12,
          duration: 0.5,
          ease: 'power2.out'
        });
      }
    }, 1800);
  });
});

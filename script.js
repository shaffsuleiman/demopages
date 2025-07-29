// Enhanced Demo Section Functionality
document.addEventListener('DOMContentLoaded', function() {
  const imageUpload = document.getElementById('imageUpload');
  const preview = document.getElementById('preview');
  const uploadZone = document.getElementById('uploadZone');
  const uploadText = document.querySelector('.upload-text');
  const uploadSubtext = document.querySelector('.upload-subtext');

  // Image Transformation Demo
  const transformBtn = document.getElementById('transformBtn');
  const btnText = document.getElementById('btnText');
  const demoDescription = document.getElementById('demoDescription');
  const imageSet1 = document.getElementById('imageSet1');
  const imageSet2 = document.getElementById('imageSet2');
  
  let isShowingOriginal = true;

  // Image transformation functionality
  if (transformBtn) {
    transformBtn.addEventListener('click', function() {
      // Add loading state
      transformBtn.classList.add('loading');
      
      setTimeout(() => {
        if (isShowingOriginal) {
          // Switch to processed images
          imageSet1.classList.remove('active');
          imageSet1.classList.add('exit');
          
          setTimeout(() => {
            imageSet2.classList.add('active');
            btnText.textContent = 'Show Original Images';
            demoDescription.textContent = 'Notice how sWTA processing creates more visually similar representations across different domains';
            isShowingOriginal = false;
            imageSet1.classList.remove('exit');
          }, 300);
          
        } else {
          // Switch back to original images
          imageSet2.classList.remove('active');
          imageSet2.classList.add('exit');
          
          setTimeout(() => {
            imageSet1.classList.add('active');
            btnText.textContent = 'Show ViT Patches';
            demoDescription.textContent = 'Click to see how sWTA processing creates more uniform representations across different domains';
            isShowingOriginal = true;
            imageSet2.classList.remove('exit');
          }, 300);
        }
        
        // Remove loading state
        transformBtn.classList.remove('loading');
      }, 500);
    });
  }

  // File upload handling
  function handleFileUpload(file) {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        preview.src = e.target.result;
        
        // Update upload zone text
        uploadText.textContent = 'Image uploaded successfully!';
        uploadSubtext.textContent = 'Click to upload a different image';
        
        // Add success styling
        uploadZone.style.borderColor = '#0F1923';
        uploadZone.style.backgroundColor = 'rgba(15, 25, 35, 0.1)';
        
        // Reset styling after a moment
        setTimeout(() => {
          uploadText.textContent = 'Click to upload an image or drag and drop';
          uploadSubtext.textContent = 'Supports JPG, PNG, and GIF files';
          uploadZone.style.borderColor = '#4A5568';
          uploadZone.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        }, 2000);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a valid image file (JPG, PNG, or GIF)');
    }
  }

  // File input change event
  if (imageUpload) {
    imageUpload.addEventListener('change', function(event) {
      const file = event.target.files[0];
      handleFileUpload(file);
    });
  }

  // Drag and drop functionality
  if (uploadZone) {
    uploadZone.addEventListener('dragover', function(e) {
      e.preventDefault();
      uploadZone.classList.add('dragover');
    });

    uploadZone.addEventListener('dragleave', function(e) {
      e.preventDefault();
      uploadZone.classList.remove('dragover');
    });

    uploadZone.addEventListener('drop', function(e) {
      e.preventDefault();
      uploadZone.classList.remove('dragover');
      
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        handleFileUpload(files[0]);
      }
    });

    // Click to upload
    uploadZone.addEventListener('click', function() {
      imageUpload.click();
    });
  }

  // Smooth scrolling for demo link
  const demoLinks = document.querySelectorAll('a[href="#demo"]');
  demoLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('demo').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    });
  });

  // Contact form smooth scrolling
  const contactLinks = document.querySelectorAll('a[href="#contact"]');
  contactLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    });
  });
});

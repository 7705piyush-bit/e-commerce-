const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Copy Male Fashion directory to public
const sourceDir = path.join(process.cwd(), 'Male Fashion');
const targetDir = path.join(publicDir, 'Male Fashion');

if (fs.existsSync(sourceDir)) {
  // Copy directory recursively
  function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (let entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      
      if (entry.isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
  
  copyDir(sourceDir, targetDir);
  console.log('✅ Assets copied to public directory');
} else {
  console.log('⚠️  Male Fashion directory not found');
}

console.log('🚀 Setup complete! Run "npm run dev" to start the development server.');
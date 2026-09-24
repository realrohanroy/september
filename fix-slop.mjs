import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

function processFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Colors
  content = content.replace(/\bbg-gray-50\b/g, 'bg-paper');
  content = content.replace(/\bbg-gray-100\b/g, 'bg-paper');
  content = content.replace(/\bbg-gray-200\b/g, 'bg-rule');
  content = content.replace(/\bbg-gray-800\b/g, 'bg-ink');
  content = content.replace(/\bbg-gray-900\b/g, 'bg-ink');
  content = content.replace(/\bbg-white\b/g, 'bg-card');
  content = content.replace(/\btext-white\b/g, 'text-paper');
  
  content = content.replace(/\btext-gray-900\b/g, 'text-ink');
  content = content.replace(/\btext-gray-800\b/g, 'text-ink');
  content = content.replace(/\btext-gray-700\b/g, 'text-ink/80');
  content = content.replace(/\btext-gray-600\b/g, 'text-ink/70');
  content = content.replace(/\btext-gray-500\b/g, 'text-ink/60');
  content = content.replace(/\btext-gray-400\b/g, 'text-ink/50');
  content = content.replace(/\btext-gray-300\b/g, 'text-ink/40');
  
  content = content.replace(/\bborder-gray-100\b/g, 'border-rule');
  content = content.replace(/\bborder-gray-200\b/g, 'border-rule');
  content = content.replace(/\bborder-gray-300\b/g, 'border-rule');

  // Specific old custom colors
  content = content.replace(/\bbg-secondary\b/g, 'bg-sindoor');
  content = content.replace(/\bbg-secondary-hover\b/g, 'bg-sindoor hover:opacity-90');
  content = content.replace(/\btext-secondary\b/g, 'text-sindoor');
  content = content.replace(/\bbg-blue-dark\b/g, 'bg-ink');
  content = content.replace(/\bbg-blue-50\b/g, 'bg-paper');
  content = content.replace(/\btext-blue-500\b/g, 'text-sindoor');
  content = content.replace(/\btext-blue-100\b/g, 'text-paper/80');
  content = content.replace(/\btext-blue-200\b/g, 'text-paper/60');
  content = content.replace(/\bborder-white\/20\b/g, 'border-paper/20');
  
  content = content.replace(/\bbg-orange-50\b/g, 'bg-sindoor/10');
  content = content.replace(/\bbg-orange-100\b/g, 'bg-sindoor/20');
  content = content.replace(/\btext-orange-400\b/g, 'text-sindoor');
  content = content.replace(/\btext-orange-500\b/g, 'text-sindoor');
  content = content.replace(/\btext-orange-600\b/g, 'text-sindoor');
  content = content.replace(/\btext-orange-800\b/g, 'text-sindoor');
  content = content.replace(/\bborder-orange-100\b/g, 'border-sindoor/20');
  content = content.replace(/\bborder-orange-200\b/g, 'border-sindoor/20');
  
  content = content.replace(/\bbg-red-500\b/g, 'bg-sindoor');
  content = content.replace(/\btext-red-500\b/g, 'text-sindoor');
  content = content.replace(/\bbg-green-700\b/g, 'bg-ink');
  content = content.replace(/\btext-green-600\b/g, 'text-sindoor'); // Deployed is sindoor

  // Shadows
  content = content.replace(/\bshadow-sm\b/g, 'shadow-[0_1px_0_var(--rule)]');
  content = content.replace(/\bshadow-md\b/g, '');
  content = content.replace(/\bshadow-lg\b/g, '');
  content = content.replace(/\bshadow-xl\b/g, '');
  content = content.replace(/\bshadow-2xl\b/g, '');
  content = content.replace(/\bshadow-\[[^\]]+\]\b/g, ''); // Removes arbitrary shadows
  
  // Border radius (0 for cards/images, 2px for buttons/inputs)
  // We'll just strip rounded-2xl, rounded-3xl, etc.
  content = content.replace(/\brounded-[a-z0-9\[\]]+\b/g, (match) => {
    if (match.includes('full')) return 'rounded-full'; // avatars/circles
    if (match === 'rounded-[2px]') return match;
    if (match === 'rounded-[4px]') return 'rounded-[2px]';
    return 'rounded-none';
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

walkDir('./app', processFile);
walkDir('./components', processFile);
console.log('Refactor complete.');

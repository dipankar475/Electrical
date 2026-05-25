const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split(/\r?\n/);
const firstPart = lines.slice(0, 666).join('\n');
const lastPart = lines.slice(1371).join('\n');
const newContent = firstPart + '\n<script src="app.js"></script>\n' + lastPart;
fs.writeFileSync('index.html', newContent, 'utf8');
console.log('Successfully updated index.html');

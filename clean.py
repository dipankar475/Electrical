import os

path = r'C:\Users\Windows11 Pro\.gemini\antigravity\scratch\electrical-audit-platform\index.html'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

target = '<script src="app.js"></script>'
pos = content.find(target)
if pos != -1:
    new_content = content[:pos + len(target)] + '\n</body>\n</html>\n'
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully cleaned index.html")
else:
    print("Could not find script tag in index.html")

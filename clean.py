import os

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.splitlines()
first_part = '\n'.join(lines[:666])
last_part = '\n'.join(lines[1371:])
new_content = first_part + '\n<script src="app.js"></script>\n' + last_part

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully updated index.html")

#!/bin/bash

# Script untuk memperbaiki path assets setelah build
# Simpan sebagai scripts/fix-github-pages.sh

echo "Fixing GitHub Pages paths..."

# Buat file .nojekyll untuk mencegah Jekyll processing
touch dist/.nojekyll

# Fix index.html untuk memastikan semua assets menggunakan relative path
if [ -f "dist/index.html" ]; then
    echo "Fixing paths in index.html..."
    
    # Ganti absolute paths dengan relative paths jika diperlukan
    sed -i 's|href="/assets/|href="./assets/|g' dist/index.html
    sed -i 's|src="/assets/|src="./assets/|g' dist/index.html
    
    echo "✅ Fixed index.html paths"
else
    echo "❌ index.html not found in dist/"
fi

echo "✅ GitHub Pages fix completed"
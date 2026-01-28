# Portfolio Dashboard - Admin Panel

Dashboard admin yang lengkap dan responsif untuk mengelola konten portfolio website Anda.

## 🎨 Fitur

- **Dashboard Utama** - Tampilan ringkas statistik dan konten terbaru
- **Kelola Konten** - Interface untuk membuat, edit, dan publish konten
- **Media Library** - Galeri untuk mengelola semua file media
- **Responsive Design** - Fully responsive di semua ukuran layar
- **Modern UI** - Dibangun dengan Tailwind CSS untuk styling yang konsisten
- **Navigasi Sidebar** - Navigation menu yang intuitif dan mudah digunakan

## 📂 Struktur File

```
src/
├── pages/
│   ├── dashboard.astro      # Halaman dashboard utama
│   ├── content.astro        # Halaman kelola konten
│   └── media.astro          # Halaman media library
├── components/
│   ├── ContentManager.astro # Component untuk manajemen konten
│   └── MediaManager.astro   # Component untuk manajemen media
├── layouts/
│   └── Layout.astro         # Layout template utama
└── styles/
    └── globals.css          # Global styles dengan Tailwind directives
```

## 🚀 Cara Menggunakan

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Server akan berjalan di `http://localhost:3000`

### 3. Akses Dashboard

- **Dashboard**: `/dashboard.astro`
- **Kelola Konten**: `/content.astro`
- **Media Library**: `/media.astro`

## 🎯 Halaman-Halaman

### Dashboard (`/dashboard.astro`)

Tampilan utama dengan:

- 4 stat cards (Total Konten, Proyek Aktif, Media, Pengunjung)
- Tabel konten terbaru
- Quick actions untuk membuat konten baru

### Kelola Konten (`/content.astro`)

Interface untuk manajemen konten dengan:

- Search & filter functionality
- List view untuk semua konten
- Status indicators (Aktif/Draft)
- Edit dan delete actions

### Media Library (`/media.astro`)

Galeri media dengan:

- Grid view untuk media
- Preview on hover
- Edit dan delete buttons
- Upload functionality

## 🎨 Tailwind CSS

Dashboard ini menggunakan Tailwind CSS v4 dengan:

- Responsive design utilities
- Custom color schemes
- Pre-built components
- Dark mode support (dapat diaktifkan)

### Kustomisasi Warna

Edit `tailwind.config.mjs` untuk mengubah:

- Primary color
- Secondary color
- Accent color
- Dan warna lainnya

## 📱 Responsive Design

Dashboard fully responsive dengan breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚙️ Fitur Teknologi

- **Astro** - Framework yang cepat dan modern
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Grid** - CSS Grid dan Flexbox
- **SVG Icons** - Icon yang scalable
- **Hover Effects** - Interactive UI components

## 🔧 Customization

### Menambah Menu Item

Edit sidebar di masing-masing halaman astro, tambahkan:

```astro
<a href="#" class="flex items-center px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    {/* Icon SVG */}
  </svg>
  Label Menu
</a>
```

### Mengubah Color Scheme

1. Buka `src/styles/globals.css`
2. Modifikasi CSS variables di `:root` dan `.dark`
3. Atau edit `tailwind.config.mjs`

### Menambah Component

Buat file baru di `src/components/` dengan ekstensi `.astro`:

```astro
---
// Component logic
---

<div>
  <!-- Component content -->
</div>
```

## 📦 Build untuk Production

```bash
npm run build
```

Hasil build akan ada di folder `dist/`

## 🚀 Deploy

Dashboard dapat di-deploy ke:

- Vercel
- Netlify
- GitHub Pages
- Hosting lainnya yang support static sites

## 📄 License

Project ini bebas digunakan untuk kebutuhan personal maupun komersial.

## 💡 Tips

- Gunakan Tailwind CSS utility classes untuk styling cepat
- Manfaatkan responsive classes (md:, lg:, dll) untuk design responsif
- Customize warna sesuai brand Anda di config file
- Tambahkan interactivity menggunakan JavaScript di components

---

Happy coding! 🎉

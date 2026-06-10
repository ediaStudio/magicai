// ============================================================
//  CONFIG.JS — Modifie ce fichier pour personnaliser ton site
// ============================================================

const APP_CONFIG = {

  // ── INFOS GÉNÉRALES ──────────────────────────────────────
  appName:      "Magic AI Video",
  tagline:      "AI Your Face",
  description:  "Create viral AI photos and videos in seconds with FaceBot. Generate cinematic selfies, AI videos, headshots, age predictions, styles, and more.",
  year:         "2026",
  contactEmail: "contact@dhastudio.xyz",

  // ── ICÔNE ────────────────────────────────────────────────
  // Place ton icône dans /assets/ et indique le nom du fichier
  iconFile: "assets/icon.jpg",   // ex: "assets/icon.png"

  // ── LIENS STORES ─────────────────────────────────────────
  appStoreUrl:  "https://apps.apple.com/us/app/id6777791103",
  playStoreUrl: "https://play.google.com/store/apps/details?id=video.ai.generator",

  // ── COULEURS ─────────────────────────────────────────────
  colors: {
    accent:  "#6c63ff",   // couleur principale (boutons, highlights)
    accent2: "#ff6584",   // couleur secondaire (dégradé titre)
    bg:      "#0a0a0f",   // fond général
    surface: "#13131a",   // fond des cartes
  },

  // ── FEATURES ─────────────────────────────────────────────
  // Tu peux en ajouter ou en supprimer (max recommandé : 6)
features: [
  {
    icon: "🎬",
    title: "AI Videos",
    desc: "Turn your selfies into cinematic AI videos with viral-ready animations and effects."
  },
  {
    icon: "✨",
    title: "AI Selfie Styles",
    desc: "Transform your photos into stunning AI styles inspired by movies, anime, fantasy, and more."
  },
  {
    icon: "🧠",
    title: "Smart AI Tools",
    desc: "Analyze age, beauty score, emotions, and enhance your photos instantly with AI."
  },
  {
    icon: "🪄",
    title: "Background Removal",
    desc: "Remove and replace backgrounds in seconds with clean AI-powered cutouts."
  },
  {
    icon: "📸",
    title: "HD Enhancer",
    desc: "Upscale blurry or low-quality images into sharp high-definition portraits."
  },
  {
    icon: "🚀",
    title: "Create Viral Content",
    desc: "Generate eye-catching AI photos and videos designed for TikTok, Reels, and Shorts."
  },
],

  // ── SCREENSHOTS ──────────────────────────────────────────
  // Place tes screenshots dans /screenshots/ et liste les noms ici
  // Laisser vide affiche des placeholders gris
  screenshots: [
    "screenshots/screen1.png",
    "screenshots/screen2.png",
    "screenshots/screen3.png",
    "screenshots/screen4.png",
    "screenshots/screen5.png",
    "screenshots/screen6.png",
  ],

  // ── BADGE HERO ───────────────────────────────────────────
  // Texte affiché dans la pastille en haut du hero
  heroBadge: "✦ Available on iOS & Android",

  // ── SECTIONS TITRES ──────────────────────────────────────
sections: {
  features: {
    label: "Features",
    title: "Powerful AI creations",
    subtitle: "Create viral AI photos, cinematic videos, and stunning selfie transformations in seconds.",
  },
  screenshots: {
    label: "Screenshots",
    title: "See Magic AI in action",
    subtitle: "Explore AI-generated selfies, videos, effects, and powerful editing tools directly inside the app.",
  },
  download: {
    title: "Download Magic AI today",
    subtitle: "Create stunning AI photos and videos on iOS and Android.",
  },
},

};

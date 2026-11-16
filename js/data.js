/* =====================================================================
   ALTSAKE RECORDS — SITE DATA
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit for everyday updates:
   artists, shop items, news, emails and links.

   Rules of thumb:
   - Text goes inside "quotes". Keep the commas between items.
   - Leave a value as "" (empty) to hide it on the site.
   - Images: put files in /images/... and write the path, e.g.
     "images/artists/samiejaa.jpg"
   ===================================================================== */

window.ALTSAKE = {

  /* ---------------- GENERAL SETTINGS ---------------- */
  config: {
    labelName: "AltSake Records",
    founded: "2026",
    basedIn: "Denmark",

    // Logo: leave "" to show the placeholder. When your logo is ready,
    // put it in /images/ and write e.g. "images/logo.svg"
    logo: "",

    // Emails (tip: Namecheap gives you free email forwarding to your Gmail)
    contactEmail: "contact@altsakerecords.com", // TODO: change to your real domain
    demoEmail: "demos@altsakerecords.com",      // TODO
    pressEmail: "press@altsakerecords.com",     // TODO

    // Demo form: paste your free access key from https://web3forms.com
    web3formsKey: "38e7d735-6a5d-432a-acf6-83466ae3de85",

    // Label socials (leave "" to hide)
    socials: [
      { label: "Instagram", url: "" },
      { label: "TikTok",    url: "" },
      { label: "YouTube",   url: "" },
      { label: "Spotify",   url: "" }
    ],

    // Main shop link (Bandcamp / Big Cartel / your store)
    shopUrl: "https://store.samiejaa.com"
  },

  /* ---------------- LATEST NEWS (first one is shown on the front page) ---------------- */
  news: [
    {
      label: "New single",
      title: "COME ON!",
      artistLine: "Samiejaa & wikuro prod. Xaduma",
      date: "16 November 2026",
      text: "A high-energy collab between Samiejaa and wikuro, produced by Xaduma. Out now.",
      image: "images/news/come-on-cover.webp",
      link: "artist.html?a=samiejaa",
      linkLabel: "Go to Samiejaa"
    }
  ],

  /* ---------------- ROSTER ----------------
     To add an artist: copy one whole { ... } block, paste it after the
     last one (remember the comma between blocks) and change the info.
     "id" must be unique, lowercase, no spaces — it becomes the page link:
     artist.html?a=your-id
  ------------------------------------------ */
  artists: [
    {
      id: "samiejaa",
      name: "Samiejaa",
      featured: true,                       // show on the front page
      roles: ["Artist"],
      genres: ["Hyperpop", "Electronic", "Dance"],
      location: "Denmark",
      activeSince: "2023",
      forFansOf: "odetari, asteria, 6arelyhuman, kets4eki, lumi athena",
      photo: "",                            // e.g. "images/artists/samiejaa.jpg"
      tagline: "Energetic electronic pop built to move to.",
      short: "The loud, bright side of AltSake's founder — hyperpop, EDM and dance music with a lot of heart.",
      bio: [
        "Samiejaa is the electronic project of Danish artist and producer Mikkel Hammershøy. Energetic, playful and made to move to, it pulls from hyperpop, EDM and dance music while heading in its own direction.",
        "The debut album \"Diary of Desire\" arrived in October 2026, with vinyl, CD and an album merch collection alongside it. Singles include \"secret little dancer\" and \"COME ON!\", a collaboration with wikuro featuring Xaduma.",
        "Samiejaa is also where AltSake Records started: the label grew out of wanting the kind of support, community and creative freedom an independent artist rarely gets."
      ],
      pressBio: "Samiejaa is the high-energy electronic project of Danish artist and producer Mikkel Hammershøy, blending hyperpop, EDM and dance. Debut album \"Diary of Desire\" (2026) is out now on all platforms.",
      releases: [
        { title: "COME ON! (with wikuro feat. Xaduma)", type: "Single", year: "2026", url: "" },
        { title: "Diary of Desire",                    type: "Album",  year: "2026", url: "" },
        { title: "secret little dancer",               type: "Single", year: "",     url: "" }
      ],
      links: [
        { label: "Spotify",  url: "" },   // TODO: paste Spotify artist link
        { label: "TikTok",   url: "https://www.tiktok.com/@samiejaa.makesmusic" },
        { label: "Instagram",url: "https://instagram.com/samiejaa.makesmusic" },
        { label: "Website",  url: "https://samiejaa.com" },
        { label: "Merch",    url: "https://store.samiejaa.com" }
      ],
      spotifyArtistId: "6hWIpKW9JVwSA25vYeVZKI", 
      pressPhotos: [],                      // e.g. ["press/samiejaa-1.jpg", "press/samiejaa-2.jpg"]
      pressKitPdf: ""                       // e.g. "press/samiejaa-epk.pdf"
    },

    {
      id: "mikkel-hammershoy",
      name: "Mikkel Hammershøy",
      featured: true,
      roles: ["Artist", "Founder", "Manager", "In-house producer", "Engineer"],
      genres: ["Indie", "Rock", "Pop"],
      location: "Denmark",
      activeSince: "2025",
      forFansOf: "",
      photo: "",
      tagline: "Darker, more personal songs — and the person who keeps AltSake running.",
      short: "Indie, rock and pop with deeper lyrics. Also AltSake's founder, manager and in-house producer and engineer.",
      bio: [
        "Mikkel Hammershøy is the official indie project of the Danish artist best known as Samiejaa. Where Samiejaa is bright and energetic, this side is darker and more personal: indie, rock and pop built around lyrics that go deeper.",
        "The first indie release, \"Yearn For You\", came out in November 2025, followed by songs like \"Dead 2 u\", \"Love Beyond Death\" and \"Goodbye\". In 2026 the indie songs moved to their own artist page, so listeners can find the sound they came for.",
        "Behind the scenes, Mikkel founded AltSake Records and works as the label's manager and in-house producer and engineer."
      ],
      pressBio: "Mikkel Hammershøy is a Danish indie, rock and pop artist and the founder of AltSake Records, where he also works as manager and in-house producer and engineer. Also known as Samiejaa.",
      releases: [
        { title: "Yearn For You",      type: "Single", year: "2025", url: "" },
        { title: "Dead 2 u",           type: "Single", year: "2026",     url: "" },
        { title: "Love Beyond Death",  type: "Single", year: "2026",     url: "" },
        { title: "Goodbye",            type: "Single", year: "2025",     url: "" }
      ],
      links: [
        { label: "Spotify",   url: "5lpaLJnkk8DqMLwwZBjmYM" },
        { label: "TikTok",    url: "https://tiktok.com/@samiejaa.makesmusic" },
        { label: "Instagram", url: "https://instagram.com/samiejaa.makesmusic" }   
      ],
      spotifyArtistId: "5lpaLJnkk8DqMLwwZBjmYM",
      pressPhotos: [],
      pressKitPdf: ""
    },

     {
      id: "myron-blueboy",
      name: "Myron Blueboy",
      featured: true,
      roles: ["Artist", "Digital artist"],
      genres: ["Indie"],
      location: "",
      activeSince: "",
      forFansOf: "",
      photo: "",                            // e.g. "images/artists/myron-blueboy.jpg"
      tagline: "Indie songs and visuals from the same set of hands.",
      short: "Indie musician and digital artist, making both the songs and the art that goes with them.",
      bio: [
        "Myron Blueboy is an indie musician and digital artist in the AltSake family. He writes and releases his own music, mainly in the indie genre, and also creates visual work for the label.",
        "Earlier releases may appear under his previous artist name, myroblue."
      ],
      pressBio: "Myron Blueboy is an indie musician and digital artist signed to AltSake Records. Formerly known as myroblue.",
      releases: [],
      links: [
        { label: "Spotify",   url: "" },  // TODO
        { label: "TikTok",    url: "" },  // TODO
        { label: "Instagram", url: "" }   // TODO
      ],
      spotifyArtistId: "",
      pressPhotos: [],
      pressKitPdf: ""
    }

  ],
/* ---------------- TEAM (shown on the About page) ----------------
     "artistId" links the person to their roster page (leave "" if they're not an artist).
  ------------------------------------------------------------------ */
  team: [
    { name: "Mikkel Hammershøy", roles: ["Founder", "Manager", "In-house producer", "Engineer"], photo: "", artistId: "mikkel-hammershoy",
      text: "Artist under the names Mikkel Hammershøy and Samiejaa. Started AltSake to give artists the support he wished he'd had." },
    { name: "Karolina Bernekier", roles: ["Co-founder", "Manager"], photo: "", artistId: "",
      text: "Co-founder of AltSake Records, helping run the label and supporting the artists day to day." },
    { name: "Myron Blueboy", roles: ["Digital artist", "Musician"], photo: "", artistId: "myron-blueboy",
      text: "Indie musician and digital artist, making music and visuals for the AltSake family." },
    { name: "Sunuri", roles: ["Digital artist", "Social media"], photo: "", artistId: "",
      text: "Digital artist and the person behind AltSake's social media." }
  ],

  /* ---------------- SHOP ----------------
     Each item links out to your store (Bandcamp / Big Cartel / etc.),
     which handles payment and shipping.
  ------------------------------------------ */
  shop: [
    { name: "Diary of Desire — Vinyl / CD", artist: "Samiejaa", category: "Music", price: "", image: "", url: "https://store.samiejaa.com" },
    { name: "Diary of Desire — Hoodie",     artist: "Samiejaa", category: "Merch", price: "", image: "", url: "https://store.samiejaa.com" },
    { name: "Diary of Desire — T-shirt",    artist: "Samiejaa", category: "Merch", price: "", image: "", url: "https://store.samiejaa.com" },
    { name: "Diary of Desire — Beanie",     artist: "Samiejaa", category: "Merch", price: "", image: "", url: "https://store.samiejaa.com" },
    { name: "AltSake Records label merch",  artist: "AltSake Records", category: "Merch", price: "", image: "", url: "", comingSoon: true }
  ]
};

/* =====================================================================
   ALTSAKE RECORDS — SITE DATA
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit for everyday updates:
   artists, shop items, news, emails and links.

   Rules of thumb:
   - Text goes inside "quotes". Keep the commas between items.
   - Leave a value as "" (empty) to hide it on the site.
   ===================================================================== */

window.ALTSAKE = {

  /* ---------------- GENERAL SETTINGS ---------------- */
  config: {
    labelName: "AltSake Records",
    founded: "2026",
    basedIn: "Denmark",
    logo: "images/logo.png",

  
    contactEmail: "contact@altsakerecords.com",
    demoEmail: "demos@altsakerecords.com",
    pressEmail: "press@altsakerecords.com",

    web3formsKey: "38e7d735-6a5d-432a-acf6-83466ae3de85",

    // Label socials (leave "" to hide)
    socials: [
      { label: "Instagram", url: "https://instagram.com/altsake.records" },
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
      photo: "images/artists/samiejaa-altsake.jpg",
      tagline: "Energetic electronic pop built to move to.",
      short: "The loud, bright side of AltSake's founder — hyperpop, EDM and dance music with a lot of heart.",
      bio: [
        "Samiejaa is the electronic project of Danish artist and producer Mikkel Hammershøy. Energetic, playful and made to move to, it pulls from hyperpop, EDM and dance music while heading in its own direction.",
        "The debut album \"Diary of Desire\" arrived in October 2026, with vinyl, CD and an album merch collection alongside it. Singles include \"secret little dancer\" and \"COME ON!\", a collaboration with wikuro featuring Xaduma.",
        "Samiejaa is also where AltSake Records started: the label grew out of wanting the kind of support, community and creative freedom an independent artist rarely gets."
      ],
      pressBio: "Samiejaa is the high-energy electronic project of Danish artist and producer Mikkel Hammershøy, blending hyperpop, EDM and dance. Debut album \"Diary of Desire\" (2026) is out now on all platforms.",
      releases: [
        { title: "COME ON! (with wikuro feat. Xaduma)", type: "Single", year: "2026", url: "https://share.amuse.io/track/samiejaa-come-on" },
        { title: "Diary of Desire",                    type: "Album",  year: "2026", url: "https://share.amuse.io/album/samiejaa-diary-of-desire" },
        { title: "Secret Little Dancer",               type: "Single", year: "2026",  url: "https://share.amuse.io/track/samiejaa-secret-little-dancer" }
      ],
      links: [
        { label: "Spotify",  url: "https://open.spotify.com/artist/6hWIpKW9JVwSA25vYeVZKI" }, 
        { label: "TikTok",   url: "https://www.tiktok.com/@samiejaa.makesmusic" },
        { label: "Instagram",url: "https://instagram.com/samiejaa.makesmusic" },
        { label: "Website",  url: "https://samiejaa.com" },
        { label: "Merch",    url: "https://store.samiejaa.com" }
      ],
      spotifyArtistId: "6hWIpKW9JVwSA25vYeVZKI", 
      pressPhotos: [],                      // e.g. ["press/samiejaa-1.jpg", "press/samiejaa-2.jpg"]
      pressKitPdf: "press/samiejaa-press-kit.pdf"
    },

    {
      id: "mikkel-hammershoy",
      name: "Mikkel Hammershøy",
      featured: false,
      roles: ["Artist", "Founder", "Manager", "In-house producer", "Engineer"],
      genres: ["Indie", "Rock", "Pop"],
      location: "Denmark",
      activeSince: "2025",
      forFansOf: "tame impala, laufey, arctic monkeys, montell fish",
      photo: "images/artists/mikkel-hammershoy.jpg",
      tagline: "Darker, more personal songs — and the person who keeps AltSake running.",
      short: "Indie, rock and pop with deeper lyrics. Also AltSake's founder, manager and in-house producer and engineer.",
      bio: [
        "Mikkel Hammershøy is the official indie project of the Danish artist best known as Samiejaa. Where Samiejaa is bright and energetic, this side is darker and more personal: indie, rock and pop built around lyrics that go deeper.",
        "The first indie release, \"Yearn For You\", came out in November 2025, followed by songs like \"Dead 2 u\", \"Love Beyond Death\" and \"Goodbye\". In 2026 the indie songs moved to their own artist page, so listeners can find the sound they came for.",
        "Behind the scenes, Mikkel founded AltSake Records and works as the label's manager and in-house producer and engineer."
      ],
      pressBio: "Mikkel Hammershøy is a Danish indie, rock and pop artist and the founder of AltSake Records, where he also works as manager and in-house producer and engineer. Also known as Samiejaa.",
      releases: [
        { title: "Yearn For You",      type: "Single", year: "2025", url: "https://open.spotify.com/track/5gjPQyqFWUI2L0W7cd9yPr" },
        { title: "dead2u",             type: "Single", year: "2026", url: "https://open.spotify.com/track/2pb5AOvPd3xITt4gDSQNP0" },
        { title: "Love Beyond Death",  type: "Single", year: "2026", url: "https://open.spotify.com/track/5V8AhPE82Xv8BOYl8aa5fo" },
        { title: "Goodbye",            type: "Single", year: "2025", url: "" }
      ],
      links: [
        { label: "Spotify",   url: "https://open.spotify.com/artist/5lpaLJnkk8DqMLwwZBjmYM" },
        { label: "TikTok",    url: "https://tiktok.com/@samiejaa.makesmusic" },
        { label: "Instagram", url: "https://instagram.com/samiejaa.makesmusic" }   
      ],
      spotifyArtistId: "5lpaLJnkk8DqMLwwZBjmYM",
      pressPhotos: [],
      pressKitPdf: "press/mikkel-hammershoy-press-kit.pdf"
    },

     {
      id: "myron-blueboy",
      name: "Myron Blueboy",
      featured: true,
      roles: ["Artist", "Digital artist"],
      genres: ["Indie", "rock", "pop"],
      location: "Canada",
      activeSince: "2025",
      forFansOf: "Ari Abdul, Tame Impala, Arctic Monkeys, Montell Fish",
      photo: "images/artists/myron-blueboy.jpg",
      tagline: "Indie songs and visuals from the same set of hands.",
      short: "Indie musician and digital artist, making both the songs and the art that goes with them.",
      bio: [
        "Myron Blueboy is an indie musician and digital artist in the AltSake family. He writes and releases his own music, mainly in the indie genre, and also creates visual work for the label.",
        "He reached out to Samiejaa in 2025 about a collab back when his name was myroblue, and they have done collabs ever since."
      ],
      pressBio: "Myron Blueboy is an indie musician and digital artist signed to AltSake Records. Formerly known as myroblue.",
      releases: [
        { title: "dead2u", type: "Single", year: "2026", url: "https://open.spotify.com/track/2pb5AOvPd3xITt4gDSQNP0" },
        { title: "watch me decay", type: "Single", year: "2026", url: "https://open.spotify.com/track/5kwJoKiYLWJjsb0Awulkmc" },
        { title: "HEART EYES", type: "Single", year: "2026", url: "https://open.spotify.com/track/3FqVsgvB4rs8LlTeCNSvg7" },
      ],
      links: [
        { label: "Spotify",   url: "https://open.spotify.com/artist/15IrxSEKgXqolEY1UZepIc" },
        { label: "TikTok",    url: "https://www.tiktok.com/@myronblueboy" },
        { label: "Instagram", url: "https://www.instagram.com/myronblueboy/" } 
      ],
      spotifyArtistId: "15IrxSEKgXqolEY1UZepIc",
      pressPhotos: [],
      pressKitPdf: ""
    }

    {
      id: "poem",
      name: "Poem",
      featured: true,
      roles: ["Artist", "Digital artist"],
      genres: ["EDM", "Hyperpop", "Synthpop", "Dark pop"],
      location: "Unknown",
      activeSince: "2026",
      forFansOf: "Odetari, Hatsune Miku, Chris Grey",
      photo: "images/artists/Poem.jpg",
      tagline: "A young, strong and talented voice.",
      short: "One of the strongest voices on our roster, with striking visual art to match.",
      bio: [
        "Poem is a singer and digital artist blending EDM, hyperpop, synthpop and dark pop. She started out posting covers on TikTok and passed a thousand followers within just a few days.",
        "Since then her audience has kept growing fast, with several videos passing 100,000 views. Alongside the covers, she has now started writing and releasing original music, and she creates her own visual art to go with it."
      ],
      pressBio: "Poem is a singer and digital artist making EDM, hyperpop, synthpop and dark pop. After building a fast-growing TikTok following with covers that have passed 100,000 views, she is now releasing original music with AltSake Records.",
      releases: [
        { title: "Bellydancer", type: "Single", year: "2026", url: "" }   // TODO: link when it's out
      ],
      links: [
        { label: "Spotify",   url: "" },    // TODO
        { label: "TikTok",    url: "https://www.tiktok.com/@poemianie" },
        { label: "Instagram", url: "" }     // TODO
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
    { name: "Mikkel Hammershøy", roles: ["Founder", "Manager", "In-house producer", "Engineer"], photo: "images/artists/mikkel-hammershoy.jpg", artistId: "mikkel-hammershoy",
      text: "Artist under the names Mikkel Hammershøy and Samiejaa. Started AltSake to give artists the support he wished he'd had." },
    { name: "Kamri", roles: ["Co-founder", "Manager"], photo: "", artistId: "",
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
  ]
};

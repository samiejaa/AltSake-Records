/* =====================================================================
   ALTSAKE RECORDS — SITE ENGINE
   You normally don't need to edit this file. Content lives in data.js.
   ===================================================================== */
(function () {
  "use strict";

  var D = window.ALTSAKE || { config: {}, artists: [], shop: [], news: [] };
  var C = D.config;
  var page = document.body.getAttribute("data-page");

  /* ---------- helpers ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function initials(n) {
    return String(n).split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join("").toUpperCase();
  }
  function artistUrl(a) { return "artist.html?a=" + encodeURIComponent(a.id); }
  function hasUrl(l) { return l && l.url && l.url.trim() !== ""; }
  function ext(url) { return /^https?:\/\//i.test(url); }
  function linkAttrs(url) { return ext(url) ? ' target="_blank" rel="noopener"' : ""; }

  function photo(a, cls) {
    if (a.photo) {
      return '<img class="' + (cls || "") + '" src="' + esc(a.photo) + '" alt="' + esc(a.name) + '" loading="lazy">';
    }
    return '<div class="ph ' + (cls || "") + '" role="img" aria-label="' + esc(a.name) + ' — photo coming soon"><span>' + esc(initials(a.name)) + "</span></div>";
  }

  function winBar(label) {
    return '<div class="win-bar"><span class="dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="win-title">' + esc(label) + "</span></div>";
  }

  function chips(list) {
    if (!list || !list.length) return "";
    return '<ul class="chips">' + list.map(function (g) { return "<li>" + esc(g) + "</li>"; }).join("") + "</ul>";
  }

  /* ---------- header & footer (shared on every page) ---------- */
  var NAV = [
    ["index.html", "Home", "home"],
    ["about.html", "About", "about"],
    ["roster.html", "Roster", "roster"],
    ["shop.html", "Shop", "shop"]
  ];

  function logoMark() {
    if (C.logo) return '<img class="logo-img" src="' + esc(C.logo) + '" alt="' + esc(C.labelName) + ' logo">';
    return '<span class="logo-ph" aria-hidden="true">LOGO</span>';
  }

  function renderHeader() {
    var el = $("#site-header");
    if (!el) return;
    var active = page === "artist" ? "roster" : page;
    el.innerHTML =
      '<div class="container nav-wrap">' +
        '<a href="index.html" class="brand" aria-label="' + esc(C.labelName) + ' — home">' + logoMark() +
          '<span class="brand-name">AltSake <em>Records</em></span></a>' +
        '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-menu">' +
          '<span class="bar"></span><span class="bar"></span><span class="bar"></span><span class="sr-only">Menu</span></button>' +
        '<nav id="nav-menu" class="nav" aria-label="Main">' +
          NAV.map(function (n) {
            return '<a href="' + n[0] + '"' + (active === n[2] ? ' class="is-active" aria-current="page"' : "") + ">" + n[1] + "</a>";
          }).join("") +
          '<a href="demos.html" class="btn btn-primary btn-sm' + (page === "demos" ? " is-active" : "") + '">Send a demo</a>' +
        "</nav>" +
      "</div>";

    var btn = $(".nav-toggle", el), menu = $("#nav-menu", el);
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      document.body.classList.toggle("menu-open", !open);
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { btn.setAttribute("aria-expanded", "false"); document.body.classList.remove("menu-open"); }
    });
    window.addEventListener("scroll", function () {
      el.classList.toggle("scrolled", window.scrollY > 8);
    }, { passive: true });
  }

  function renderFooter() {
    var el = $("#site-footer");
    if (!el) return;
    var socials = (C.socials || []).filter(hasUrl);
    el.innerHTML =
      '<div class="container footer-grid">' +
        '<div class="footer-brand">' +
          '<a href="index.html" class="brand">' + logoMark() + '<span class="brand-name">AltSake <em>Records</em></span></a>' +
          '<p>An independent label run like a family. Everyone helps everyone.</p>' +
          '<p class="mono small acid">// No AI music. Real people. Real work.</p>' +
        "</div>" +
        '<div><h4>Label</h4><ul>' +
          '<li><a href="about.html">About us</a></li><li><a href="roster.html">Roster</a></li>' +
          '<li><a href="shop.html">Shop</a></li><li><a href="demos.html">Send a demo</a></li></ul></div>' +
        '<div><h4>Contact</h4><ul>' +
          (C.contactEmail ? '<li><a href="mailto:' + esc(C.contactEmail) + '">' + esc(C.contactEmail) + "</a></li>" : "") +
          (C.pressEmail ? '<li><a href="mailto:' + esc(C.pressEmail) + '">' + esc(C.pressEmail) + "</a></li>" : "") +
          '<li><a href="demos.html">Demo submissions</a></li></ul></div>' +
        (socials.length ? '<div><h4>Follow</h4><ul>' + socials.map(function (s) {
          return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + " ↗</a></li>";
        }).join("") + "</ul></div>" : "") +
      "</div>" +
      '<div class="container footer-bottom mono small">' +
        "<span>© " + new Date().getFullYear() + " " + esc(C.labelName) + "</span>" +
        "<span>Est. " + esc(C.founded) + " · " + esc(C.basedIn) + "</span>" +
      "</div>";
  }

  /* ---------- roster cards ---------- */
  function artistCard(a) {
    var url = artistUrl(a);
    var more = (a.bio || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    return (
      '<article class="win artist-card">' +
        winBar("roster/" + a.id) +
        '<a class="artist-photo" href="' + url + '" aria-label="Open ' + esc(a.name) + "'s page\">" +
          photo(a, "") + '<span class="photo-cta mono">Open profile →</span></a>' +
        '<div class="artist-body">' +
          '<h3 class="artist-name"><a href="' + url + '">' + esc(a.name) + "</a></h3>" +
          '<p class="roles mono">' + esc((a.roles || []).join(" · ")) + "</p>" +
          chips(a.genres) +
          '<p class="artist-short">' + esc(a.short) + "</p>" +
          '<details class="more"><summary><span class="when-closed">Read more</span><span class="when-open">Show less</span></summary>' +
            '<div class="more-body">' + more +
            '<a class="link-arrow" href="' + url + '">Full profile &amp; press kit →</a></div>' +
          "</details>" +
        "</div>" +
      "</article>"
    );
  }

  function renderRosterGrid(sel, list) {
    var el = $(sel);
    if (!el) return;
    el.innerHTML = list.length ? list.map(artistCard).join("") : '<p class="muted">New artists coming soon.</p>';
  }

  /* ---------- front page ---------- */
  function renderHome() {
    renderRosterGrid("#featured-roster", (D.artists || []).filter(function (a) { return a.featured; }).slice(0, 3));
    var n = (D.news || [])[0], el = $("#latest");
    if (!el) return;
    if (!n) { el.style.display = "none"; return; }
    el.innerHTML =
      '<div class="win latest">' + winBar("now_playing.exe") +
        '<div class="latest-inner">' +
          '<div class="latest-art">' + (n.image ? '<img src="' + esc(n.image) + '" alt="' + esc(n.title) + ' cover">' : '<div class="ph"><span>♪</span></div>') + "</div>" +
          '<div class="latest-text">' +
            '<p class="kicker">' + esc(n.label) + (n.date ? " · " + esc(n.date) : "") + "</p>" +
            '<h2 class="chrome display">' + esc(n.title) + "</h2>" +
            '<p class="latest-artist">' + esc(n.artistLine) + "</p>" +
            "<p>" + esc(n.text) + "</p>" +
            (n.link ? '<a class="btn btn-ghost" href="' + esc(n.link) + '"' + linkAttrs(n.link) + ">" + esc(n.linkLabel || "Listen") + " →</a>" : "") +
          "</div>" +
        "</div>" +
      "</div>";
  }

  /* ---------- artist page ---------- */
  function renderArtist() {
    var el = $("#artist");
    if (!el) return;
    var id = new URLSearchParams(location.search).get("a");
    var a = (D.artists || []).filter(function (x) { return x.id === id; })[0];

    if (!a) {
      el.innerHTML =
        '<section class="container section center"><p class="kicker">Error 404</p>' +
        '<h1 class="chrome display">Artist not found</h1>' +
        '<p class="muted">This artist doesn\'t exist (anymore). Check out the full roster instead.</p>' +
        '<a class="btn btn-primary" href="roster.html">Back to roster</a></section>';
      return;
    }

    document.title = a.name + " — " + C.labelName;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", a.short);

    var links = (a.links || []).filter(hasUrl);
    var releases = a.releases || [];
    var facts = [
      ["Artist", a.name],
      ["Role", (a.roles || []).join(", ")],
      ["Genre", (a.genres || []).join(", ")],
      ["Based in", a.location],
      ["Active since", a.activeSince],
      ["For fans of", a.forFansOf],
      ["Label", C.labelName]
    ].filter(function (f) { return f[1]; });

    el.innerHTML =
      '<section class="container artist-hero">' +
        '<div class="win artist-hero-photo">' + winBar(a.id + ".jpg") + photo(a, "") + "</div>" +
        '<div class="artist-hero-info">' +
          '<a class="back mono" href="roster.html">← Back to roster</a>' +
          '<p class="kicker">' + esc(C.labelName) + " · Roster</p>" +
          '<h1 class="chrome display artist-title">' + esc(a.name) + "</h1>" +
          '<p class="roles mono">' + esc((a.roles || []).join(" · ")) + "</p>" +
          chips(a.genres) +
          (a.tagline ? '<p class="lead">' + esc(a.tagline) + "</p>" : "") +
          '<div class="btn-row">' +
            '<a class="btn btn-primary" href="#press-kit">Press kit</a>' +
            links.map(function (l) {
              return '<a class="btn btn-ghost" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + " ↗</a>";
            }).join("") +
          "</div>" +
        "</div>" +
      "</section>" +

      '<section class="container section artist-main">' +
        '<div class="artist-col">' +
          '<h2 class="h2"><span class="num mono">01</span> About</h2>' +
          (a.bio || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
          (a.spotifyArtistId ?
            '<div class="embed"><iframe title="' + esc(a.name) + ' on Spotify" src="https://open.spotify.com/embed/artist/' + esc(a.spotifyArtistId) +
            '?theme=0" width="100%" height="352" frameborder="0" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></div>' : "") +
        "</div>" +
        '<div class="artist-col">' +
          '<h2 class="h2"><span class="num mono">02</span> Releases</h2>' +
          (releases.length ?
            '<ul class="releases">' + releases.map(function (r) {
              var meta = [r.type, r.year].filter(Boolean).join(" · ");
              var inner = '<span class="rel-title">' + esc(r.title) + '</span><span class="rel-meta mono">' + esc(meta) + "</span>";
              return "<li>" + (r.url ? '<a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + inner + '<span class="rel-go">↗</span></a>' : "<div>" + inner + "</div>") + "</li>";
            }).join("") + "</ul>" :
            '<p class="muted">Releases coming soon.</p>') +
        "</div>" +
      "</section>" +

      '<section class="container section" id="press-kit">' +
        '<div class="win presskit">' + winBar("press_kit/" + a.id) +
          '<div class="presskit-inner">' +
            '<div class="presskit-head"><h2 class="h2"><span class="num mono">03</span> Press kit</h2>' +
              '<p class="muted">Everything journalists, bookers and blogs need. Free to use with credit to the artist and ' + esc(C.labelName) + ".</p></div>" +
            '<div class="pk-grid">' +
              '<div class="pk-block"><h3 class="h3">Short bio</h3>' +
                '<p id="pk-bio">' + esc(a.pressBio || a.short) + "</p>" +
                '<button class="btn btn-ghost btn-sm" type="button" data-copy="#pk-bio">Copy bio</button></div>' +
              '<div class="pk-block"><h3 class="h3">Quick facts</h3><dl class="facts">' +
                facts.map(function (f) { return "<div><dt>" + esc(f[0]) + "</dt><dd>" + esc(f[1]) + "</dd></div>"; }).join("") +
              "</dl></div>" +
              '<div class="pk-block pk-wide"><h3 class="h3">Press photos</h3>' +
                ((a.pressPhotos || []).length ?
                  '<div class="pk-photos">' + a.pressPhotos.map(function (p, i) {
                    return '<a href="' + esc(p) + '" download><img src="' + esc(p) + '" alt="' + esc(a.name) + " press photo " + (i + 1) + '" loading="lazy"><span class="mono">Download ↓</span></a>';
                  }).join("") + "</div>" :
                  '<p class="muted">Hi-res press photos are available on request.</p>') +
              "</div>" +
              '<div class="pk-block"><h3 class="h3">Downloads</h3>' +
                (a.pressKitPdf ? '<a class="btn btn-primary btn-sm" href="' + esc(a.pressKitPdf) + '" download>Download full EPK (PDF) ↓</a>' : '<p class="muted">Full EPK available on request.</p>') +
              "</div>" +
              '<div class="pk-block"><h3 class="h3">Press &amp; booking</h3>' +
                (C.pressEmail ? '<a class="link-arrow" href="mailto:' + esc(C.pressEmail) + "?subject=" + encodeURIComponent("Press / booking: " + a.name) + '">' + esc(C.pressEmail) + " →</a>" : "") +
              "</div>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</section>";

    var cp = $("[data-copy]", el);
    if (cp) cp.addEventListener("click", function () {
      var txt = $(cp.getAttribute("data-copy")).textContent;
      var done = function () { cp.textContent = "Copied ✓"; setTimeout(function () { cp.textContent = "Copy bio"; }, 1800); };
      if (navigator.clipboard) navigator.clipboard.writeText(txt).then(done, function () {});
    });
  }

  /* ---------- shop ---------- */
  function renderShop() {
    var grid = $("#shop-grid"), filters = $("#shop-filters");
    if (!grid) return;
    var items = D.shop || [];
    var artists = ["All"].concat(items.map(function (i) { return i.artist; }).filter(function (v, i, arr) { return v && arr.indexOf(v) === i; }));

    function card(i) {
      var img = i.image ? '<img src="' + esc(i.image) + '" alt="' + esc(i.name) + '" loading="lazy">' : '<div class="ph"><span>' + esc(i.category === "Music" ? "◎" : "✦") + "</span></div>";
      var action = i.comingSoon || !i.url ?
        '<span class="btn btn-ghost btn-sm is-disabled" aria-disabled="true">Coming soon</span>' :
        '<a class="btn btn-primary btn-sm" href="' + esc(i.url) + '" target="_blank" rel="noopener">' + (i.price ? "Buy" : "View in store") + " ↗</a>";
      return '<article class="win product">' + winBar(i.category || "item") +
        '<div class="product-img">' + img + (i.comingSoon ? '<span class="tag mono">Soon</span>' : "") + "</div>" +
        '<div class="product-body"><p class="kicker">' + esc(i.artist) + "</p>" +
          '<h3 class="product-name">' + esc(i.name) + "</h3>" +
          '<div class="product-foot"><span class="price mono">' + esc(i.price || "") + "</span>" + action + "</div>" +
        "</div></article>";
    }

    function draw(filter) {
      var list = filter === "All" ? items : items.filter(function (i) { return i.artist === filter; });
      grid.innerHTML = list.map(card).join("");
    }

    if (filters && artists.length > 2) {
      filters.innerHTML = artists.map(function (a, n) {
        return '<button type="button" class="filter' + (n === 0 ? " is-active" : "") + '" data-f="' + esc(a) + '">' + esc(a) + "</button>";
      }).join("");
      filters.addEventListener("click", function (e) {
        var b = e.target.closest("button");
        if (!b) return;
        filters.querySelectorAll("button").forEach(function (x) { x.classList.toggle("is-active", x === b); });
        draw(b.getAttribute("data-f"));
      });
    }
    draw("All");

    var storeBtn = $("#store-link");
    if (storeBtn && C.shopUrl) storeBtn.setAttribute("href", C.shopUrl);
  }

  /* ---------- demo form ---------- */
  function renderDemos() {
    document.querySelectorAll("[data-demo-email]").forEach(function (a) {
      a.textContent = C.demoEmail;
      a.setAttribute("href", "mailto:" + C.demoEmail + "?subject=" + encodeURIComponent("Demo submission: [your artist name]"));
    });

    var form = $("#demo-form");
    if (!form) return;
    var status = $("#form-status");
    var intro = $("#intro"), counter = $("#intro-count");
    if (intro && counter) {
      var upd = function () { counter.textContent = intro.value.length + " / 1500"; };
      intro.addEventListener("input", upd); upd();
    }

    function show(type, msg) {
      status.className = "form-status " + type;
      status.innerHTML = msg;
      status.hidden = false;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      if (!C.web3formsKey || /^YOUR_/.test(C.web3formsKey)) {
        show("error", "The form isn't connected yet. For now, send your demo to <a href=\"mailto:" + esc(C.demoEmail) + "\">" + esc(C.demoEmail) + "</a>.");
        return;
      }

      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      if (data.botcheck) return; // spam bot
      data.access_key = C.web3formsKey;
      data.subject = "🎧 New demo: " + (data.artist_name || "Unknown artist");
      data.from_name = C.labelName + " — Demo form";

      var btn = $("button[type=submit]", form);
      btn.disabled = true; btn.textContent = "Sending…";

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data)
      })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res.success) {
            form.reset();
            form.hidden = true;
            show("success", "<strong>Demo received.</strong> Thank you for trusting us with your music. We listen to every submission and will reach out by email if it's a fit.");
            status.scrollIntoView({ behavior: "smooth", block: "center" });
          } else { throw new Error(res.message); }
        })
        .catch(function () {
          show("error", "Something went wrong sending your demo. Please try again, or email it to <a href=\"mailto:" + esc(C.demoEmail) + "\">" + esc(C.demoEmail) + "</a>.");
        })
        .then(function () { btn.disabled = false; btn.textContent = "Send demo"; });
    });
  }

  /* ---------- boot ---------- */
  renderHeader();
  renderFooter();
  if (page === "home") renderHome();
  if (page === "roster") renderRosterGrid("#roster-grid", D.artists || []);
  if (page === "artist") renderArtist();
  if (page === "shop") renderShop();
  if (page === "demos") renderDemos();

  // Fill any element with data-config="key" from config
  document.querySelectorAll("[data-config]").forEach(function (n) {
    var v = C[n.getAttribute("data-config")];
    if (v) n.textContent = v;
  });
})();

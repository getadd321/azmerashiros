/* ==========================================================================
   AZMERA SHIRO — script.js
   Vanilla JS only. No dependencies. Includes English / Amharic i18n.
   ========================================================================== */
(() => {
  "use strict";

  /* ---------------------------------------------------------------------
     0. Loading screen
  --------------------------------------------------------------------- */
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.classList.add("is-hidden");
      setTimeout(() => loader.remove(), 600);
    }
  });

  /* ---------------------------------------------------------------------
     1. Weave divider — stamp the signature SVG pattern into each divider
  --------------------------------------------------------------------- */
  const weaveTemplate = document.getElementById("weave-template");
  document.querySelectorAll("[data-weave]").forEach((el) => {
    el.appendChild(weaveTemplate.content.cloneNode(true));
  });

  /* ---------------------------------------------------------------------
     2. Sticky header on scroll
  --------------------------------------------------------------------- */
  const header = document.getElementById("siteHeader");
  const onScrollHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 60);
  };
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  /* ---------------------------------------------------------------------
     3. Mobile nav toggle
  --------------------------------------------------------------------- */
  const navToggle = document.getElementById("navToggle");
  const primaryNav = document.getElementById("primaryNav");
  navToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------------------------------------------------------------------
     4. Scroll-triggered reveal animations
  --------------------------------------------------------------------- */
  const revealTargets = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------------------------------------------------------------------
     5. i18n — English / Amharic dictionary
  --------------------------------------------------------------------- */
  const I18N = {
    "a11y.skip": { en: "Skip to main content", am: "ወደ ዋናው ይዘት ዝለል" },

    "nav.about": { en: "About", am: "ስለ እኛ" },
    "nav.menu": { en: "Menu", am: "ሜኑ" },
    "nav.catering": { en: "Catering", am: "ግብዣ አገልግሎት" },
    "nav.reserve": { en: "Reserve", am: "ቦታ ያስይዙ" },
    "nav.gallery": { en: "Gallery", am: "ማዕከለ ስዕላት" },
    "nav.location": { en: "Location", am: "አድራሻ" },
    "nav.contact": { en: "Contact", am: "አግኙን" },
    "nav.reserveCta": { en: "Reserve a Table", am: "ጠረጴዛ ያስይዙ" },

    "hero.title": { en: "Azmera Shiro", am: "አዝመራ ሽሮ" },
    "hero.eyebrow": { en: "Bole · Hayahulet · Addis Ababa · Since 2007 E.C.", am: "ቦሌ · ሃያሁለት · አዲስ አበባ · ከ2007 ዓ.ም. ጀምሮ" },
    "hero.tagline": { en: "Authentic Ethiopian Flavors, Served Fresh Every Day", am: "ትክክለኛ የኢትዮጵያ ጣዕም፣ በየቀኑ ትኩስ ሆኖ ይቀርባል" },
    "hero.viewMenu": { en: "View Menu", am: "ሜኑ ይመልከቱ" },
    "hero.orderCatering": { en: "Order Catering", am: "ግብዣ ያዙዙ" },
    "hero.contactUs": { en: "Contact Us", am: "ያግኙን" },

    "about.eyebrow": { en: "Our Story", am: "ታሪካችን" },
    "about.title": { en: "A table set with tradition", am: "በደንብ የተዘጋጀ ማዕድ" },
    "about.lead": {
      en: "Azmera Shiro is a traditional Ethiopian restaurant specializing in delicious shiro, vegan and non-vegan foods, traditional dishes, and catering services for weddings, meetings, birthdays, and special events.",
      am: "አዝመራ ሽሮ ወግ እና ባህል የጠበቀ ልዩ ጣዕም ያላቸው የጾምና የፍስክ ምግቦች፤ እንዲሁም ለሰርግ፣ ለስብሰባ፣ ለልደት እና ለልዩ ዝግጅቶች ካተሪንግ ወይም የግብዣ አገልግሎትን የሚያቀርብ የኢትዮጵያ ምግብ ቤት ነው።"
    },
    "about.point1.title": { en: "Special shiro", am: "ልዩ ሽሮ" },
    "about.point1.desc": { en: "Slow-ground berbere and chickpea flour, simmered daily", am: "በጥንቃቄ በተቀመመ በርበሬ እና የሽንብራ ዱቄት፣ በየቀኑ የሚቀርብ" },
    "about.point2.title": { en: "Vegan & non-Vegan friendly menu", am: "የጾምና የፍስክ ሜኑ" },
    "about.point2.desc": { en: "Full vegan, non-vegan & vegeterian dishes, always available", am: "ሙሉ የጾምና የፍስክ ምግቦች ሁሌም ያገኛሉ" },
    "about.point3.title": { en: "Full-service catering", am: "ሙሉ የግብዣ አገልግሎት" },
    "about.point3.desc": { en: "Weddings, meetings, birthdays & special events", am: "ለሰርግ፣ ስብሰባ፣ ልደት እና ልዩ ዝግጅቶች" },

    "menu.eyebrow": { en: "Taste of Ethiopia", am: "የኢትዮጵያ ጣዕም" },
    "menu.title": { en: "Our Menu", am: "ሜኑያችን" },
    "menu.searchPlaceholder": { en: "Search dishes… (e.g. tibs, shiro, coffee)", am: "ምግብ ይፈልጉ… (ለምሳሌ ጥብስ፣ ሽሮ፣ ቡና)" },
    "menu.catAll": { en: "All", am: "ሁሉም" },
    "menu.catFasting": { en: "Vegan", am: "የጾም" },
    "menu.catNonfasting": { en: "Non-vegan", am: "የፍስክ" },
    "menu.catBreakfast": { en: "Breakfast", am: "ቁርስ" },
    "menu.catCoffee": { en: "Coffee-Milk", am: "ቡና፟ወተት" },
    "menu.catTea": { en: "Tea", am: "ሻይ" },
    "menu.catJuice": { en: "Juice", am: "ጭማቂ" },
    "menu.catSoft": { en: "SoftDrink", am: "ለስላሳ" },
    "menu.catIced": { en: "Ice Tea-Coffee", am: "አይስቲ፟ኮፊ" },
    "menu.catExtras": { en: "Wine-Beer", am: "ወይን፟ቢራ" },
    "menu.empty": { en: "No dishes match your search. Try another word or category.", am: "ምንም ምግብ አልተገኘም። ሌላ ቃል ወይም ምድብ ይሞክሩ።" },

    "catering.eyebrow": { en: "For Every Occasion", am: "ለማንኛውም ዝግጅት" },
    "catering.title": { en: "Catering Services", am: "የግብዣ አገልግሎቶች" },
    "catering.lead": {
      en: "From an intimate family gathering to a 500-guest wedding, our catering team brings the Azmera Shiro buffet to you — full mesob service, coffee ceremony and all.",
      am: "ከትንሽ የቤተሰብ ስብሰባ እስከ የ500 እንግዳ ሰርግ ድረስ፣ የካተሪንግ (የግብዣ) ቡድናችን ሙሉ የቡፌ አገልግሎት እና የቡና ሥነ ሥርዓትን ወደ እርስዎ ያመጣል።"
    },
    "catering.card1.title": { en: "Weddings", am: "ሰርግ" },
    "catering.card1.desc": { en: "Traditional mesob spreads and modern buffet setups for your big day.", am: "ለታላቁ ቀንዎ የቡፌ አቀራረብ እና ዘመናዊ ቡፌ አዘገጃጀት።" },
    "catering.card2.title": { en: "Corporate Events", am: "የድርጅት ዝግጅቶች" },
    "catering.card2.desc": { en: "Reliable, on-time delivery for launches, retreats and office gatherings.", am: "ለምርቃት፣ ለምስጋና እና ለቢሮ ስብሰባዎች በሰዓቱ የሚደርስ አስተማማኝ አገልግሎት።" },
    "catering.card3.title": { en: "Meetings", am: "ስብሰባዎች" },
    "catering.card3.desc": { en: "Working lunches, coffee ceremony breaks, and boxed/agelgil platters.", am: "የስራ ምሳ፣ የቡና ዕረፍት እና የአግልግል ምግብ።" },
    "catering.card4.title": { en: "Birthday Parties", am: "የልደት በዓላት" },
    "catering.card4.desc": { en: "Colorful spreads for kids and adults, from finger food to full menus.", am: "ለልጆችና ለአዋቂዎች ከቀላል መክሰስ እስከ ሙሉ ሜኑ አሸብራቂ ዝግጅቶች።" },
    "catering.card5.title": { en: "Graduation", am: "ምረቃ" },
    "catering.card5.desc": { en: "Celebrate milestones with a festive spread for family and friends.", am: "ከቤተሰብ እና ከጓደኞች ጋር ስኬትን በደማቅ ግብዣ ያክብሩ።" },
    "catering.card6.title": { en: "Family Gatherings", am: "የቤተሰብ ስብሰባዎች" },
    "catering.card6.desc": { en: "Home-style comfort food, sized for reunions of any size.", am: "ለማንኛውም መሰባሰብ የሚሆን እንደቤተሰብ ተስተናግደው የሚመገቡት።" },
    "catering.bookBtn": { en: "Book Catering", am: "ግብዣ ይያዙ" },

    "reserve.eyebrow": { en: "Book a Table", am: "ጠረጴዛ ይያዙ" },
    "reserve.title": { en: "Reserve Your Seat at Azmera", am: "በአዝመራ ቦታዎን ያስይዙ" },
    "reserve.desc": {
      en: "Tell us when you're coming and how many are joining — we'll have your table ready. For groups over 15, please call us directly so we can prepare properly.",
      am: "መቼ እንደሚመጡ እና ለስንት ሰው ይንገሩን — ጠረጴዛዎ ዝግጁ ይሆናል። ከ15 በላይ ለሆኑ እንግዶች እባክዎ በቀጥታ ይደውሉልን።"
    },
    "reserve.hoursLabel": { en: "Hours", am: "ሰዓታት" },
    "reserve.hoursValue": { en: "Monday – Sunday, 7:00 AM – 10:00 PM", am: "ሰኞ – እሁድ፣ 1:00 ጠዋት – 4:00 ማታ" },
    "reserve.phoneLabel": { en: "Bole Atlas", am: "ቦሌ አትላስ" },
    "reserve.phoneLabel1": { en: "Haya Hulet", am: "ሃያ ሁለት" },
    "reserve.whatsappNote": { en: "Tapping the button below opens WhatsApp with your details filled in — just hit send to reach us.", am: "ከታች ያለውን በተን ሲነኩ ዝርዝርዎ የተሞላበት ዋትስአፕ ይከፈታል — ለመላክ ብቻ ይጫኑ።" },

    "form.name": { en: "Full Name", am: "ሙሉ ስም" },
    "form.phone": { en: "Phone Number", am: "ስልክ ቁጥር" },
    "form.phonePlaceholder": { en: "09XX XXX XXX", am: "09XX XXX XXX" },
    "form.date": { en: "Date", am: "ቀን" },
    "form.time": { en: "Time", am: "ሰዓት" },
    "form.guests": { en: "Number of Guests", am: "የእንግዶች ብዛት" },
    "form.notes": { en: "Special Requests", am: "ልዩ ጥያቄዎች" },
    "form.notesPlaceholder": { en: "Allergies, seating preference, celebration details…", am: "አለርጂ፣ የቦታ ምርጫ፣ የበዓል ዝርዝሮች…" },
    "form.submit": { en: "Send Reservation via WhatsApp", am: "ማስያዣውን በዋትስአፕ ይላኩ" },

    "gallery.eyebrow": { en: "A Look Inside", am: "ውስጣዊ እይታ" },
    "gallery.title": { en: "Gallery", am: "ማዕከለ ስዕላት" },

    "location.eyebrow": { en: "Find Us", am: "እኛን ያግኙ" },
    "location.title": { en: "Visit Azmera Shiro", am: "አዝመራ ሽሮን ይጎብኙ" },
    "location.lead": { en: "We welcome you at two locations in Addis Ababa — stop by whichever is closer to you.", am: "በአዲስ አበባ በሁለት ቦታዎች እናስተናግዳለን — ለእርስዎ ቅርብ የሆነውን ይምረጡ።" },
    "location.address": { en: "Two locations in Addis Ababa", am: "በአዲስ አበባ ሁለት ቅርንጫፎች" },
    "location.branch1.name": { en: "Azmera Shiro — Bole Atlas", am: "አዝመራ ሽሮ — ቦሌ አትላስ" },
    "location.branch1.address": { en: "Bole, Addis Ababa, Ethiopia", am: "ቦሌ፣ አዲስ አበባ፣ ኢትዮጵያ" },
    "location.branch2.name": { en: "Azmera Shiro — Hayahulet", am: "አዝመራ ሽሮ — 22" }, 
    "location.branch2.address": { en: "Hayahulet, Addis Ababa, Ethiopia", am: "ሃያሁለት፣ አዲስ አበባ፣ ኢትዮጵያ" },
    "location.openMaps": { en: "Open in Google Maps", am: "በGoogle Maps ይክፈቱ" },
    "location.getDirections": { en: "Get Directions", am: "አቅጣጫ ይመልከቱ" },

    "contact.eyebrow": { en: "Get in Touch", am: "ያግኙን" },
    "contact.title": { en: "Contact Us", am: "አግኙን" },
    "contact.phone": { en: "Phone", am: "ስልክ" },
    "contact.whatsapp": { en: "WhatsApp", am: "ዋትስአፕ" },
    "contact.whatsappCta": { en: "Chat with us", am: "ያውሩን" },
    "contact.telegram": { en: "Telegram", am: "ቴሌግራም" },
    "contact.email": { en: "Email", am: "ኢሜይል" },
    "contact.facebook": { en: "Facebook", am: "ፌስቡክ" },
    "contact.instagram": { en: "Instagram", am: "ኢንስታግራም" },
    "contact.tiktok": { en: "TikTok", am: "ቲክቶክ" },

    "hours.eyebrow": { en: "Open Every Day", am: "በየቀኑ ክፍት ነው" },
    "hours.time": { en: "7:00 AM – 10:00 PM", am: "1:00 ጠዋት – 4:00 ማታ"},
    "hours.days": { en: "Monday through Sunday", am: "ከሰኞ እስከ እሁድ" },

    "reviews.eyebrow": { en: "What Guests Say", am: "እንግዶቻችን ምን ይላሉ" },
    "reviews.title": { en: "Customer Reviews", am: "የደንበኞች አስተያየት" },
    "reviews.r1": { en: "\u201cThe special shiro tastes exactly like my grandmother's. This is my family's go-to spot for Sunday lunch.\u201d", am: "\u201cየስፔሻል ሽሮው ጣዕም እንደ አያቴ ሽሮ ነው። ለቤተሰቤ የእሁድ ምሳ መደበኛ ቦታችን ነው።\u201d" },
    "reviews.r2": { en: "\u201cCatered our office retreat and every single tray came back empty. Punctual, more than enough portions, great flavor.\u201d", am: "\u201cየቢሮ ዝግጅታችንን ቡፌ ሲያቀርቡ፣ ሁሉም ትሪ ባዶ ሆኖ ተመልሷል። ሰዓት አክባሪ፣ ሙሉ እና ጣፋጭ።\u201d" },
    "reviews.r2role": { en: "Corporate Client", am: "የድርጅት ደንበኛ" },
    "reviews.r3": { en: "\u201cWarm staff, amayzing decoration,full buffet and coffee ceremony that made our anniversary feel truly special.\u201d", am: "\u201cደግ ሰራተኞች በምቹ አዘገጃጀት የጋብቻ በዓላችንን ልዩና የሚያምር አድርገውታል፣ የምግቡ ዓይነትና ጣዕም እንዲሁም የቡና ሥነ ሥርዓቱ ወደነዋል።\u201d" },
    "reviews.r4": { en: "\u201cBest fasting menu in Bole. Big portions, fresh ingredients, and they never rush you out.\u201d", am: "\u201cበቦሌ ምርጥ የጾም ሜኑ። በየአይነቱ፣ ትኩስ እና በደንብ የተዘጋጀና ተረጋገተው የሚመገቡት።\u201d" },

    "faq.eyebrow": { en: "Good to Know", am: "ጠቃሚ መረጃ" },
    "faq.title": { en: "Frequently Asked Questions", am: "ተደጋጋሚ ጥያቄዎች" },
    "faq.q1": { en: "Do you offer catering?", am: "የካተሪንግ (የግብዣ) አገልግሎት ይሰጣሉ?" },
    "faq.a1": { en: "Yes — we cater weddings, corporate events, meetings, birthdays, graduations and family gatherings. Reach out through the Catering section or call us to plan your menu.", am: "አዎ — ለሰርግ፣ የድርጅት ዝግጅት፣ ስብሰባ፣ ልደት፣ ምረቃ እና የቤተሰብ ስብሰባዎች እናገለግላለን። ሜኑዎን ለማቀድ በግብዣ ክፍል በኩል ወይም በስልክ ያግኙን።" },
    "faq.q2": { en: "Can I reserve tables?", am: "ጠረጴዛ ማስያዝ እችላለሁ?" },
    "faq.a2": { en: "Absolutely. Use the reservation form above with your date, time and party size, or call us directly for groups larger than 15 guests.", am: "አዎ። ከላይ ያለውን የማስያዣ ቅጽ በቀን፣ ሰዓት እና የቡድን መጠን ይሙሉ፣ ወይም ከ15 እንግዶች በላይ ለሆኑ ቡድኖች በቀጥታ ይደውሉልን።" },
    "faq.q3": { en: "Do you deliver?", am: "ማድረስ ይችላሉ?" },
    "faq.a3": { en: "We offer delivery within Bole,Hayahulet and nearby areas. Message us on WhatsApp or Telegram to check availability for your location.", am: "በቦሌ ፣ በ22 እና በአካባቢው ማድረስ እንችላለን። ለማረጋገጥ በዋትስአፕ ወይም በቴሌግራም ይላኩልን።" },
    "faq.q4": { en: "Do you prepare fasting foods?", am: "የጾም ምግብ ያዘጋጃሉ?" },
    "faq.a4": { en: "Yes, our fasting (ye-tsome) menu is available every day and includes a full range of vegan shiro, misir wot, gomen and more.", am: "አዎ፣ የጾም ሜኑያችን በየቀኑ ይገኛል፤ ሙሉ የሽሮ፣ የምስር ወጥ፣ የጎመን ምግቦችን ያካትታል።" },
    "faq.q5": { en: "Do you accept large group bookings?", am: "በቡድን ለሚመጡ ቦታ ወይም ጠረጴዛ ማስያዝ ይቻላል?" },
    "faq.a5": { en: "We regularly host groups of 20–100+ for celebrations and corporate events. Call ahead so our team can prepare seating and menu in advance.", am: "ከ20–100+ እንግዶችን ለበዓላት እና ለተለያዩ ዝግጅቶች እናስተናግዳለን። ቡድናችን ቦታ እና ምግብ አስቀድሞ እንዲያዘጋጅ ቀድመው ይደውሉ።" },

    "footer.tagline": { en: "Authentic Ethiopian flavors, served fresh every day, in Bole & Hayahulet, Addis Ababa.", am: "ትክክለኛ የኢትዮጵያ ጣዕም፣ በየቀኑ ትኩስ ሆኖ በቦሌና በሃያሁለት ይቀርባል።" },
    "footer.quickLinks": { en: "Quick Links", am: "ፈጣን አገናኞች" },
    "footer.hours": { en: "Hours", am: "ሰዓታት" },
    "footer.hoursValue1": { en: "Monday – Sunday", am: "ሰኞ – እሁድ" },
    "footer.hoursValue2": { en: "7:00 AM – 10:00 PM", am: "1:00 ጠዋት – 4:00 ማታ" },
    "footer.copyright": { en: "© 2026 Azmera Shiro. All Rights Reserved.", am: "© 2026 አዝመራ ሽሮ። መብቱ በህግ የተጠበቀ ነው።" },
  };

  const FORM_ERRORS = {
    name: { en: "Please enter your full name.", am: "እባክዎ ሙሉ ስምዎን ያስገቡ።" },
    phone: { en: "Enter a valid phone number.", am: "ትክክለኛ ስልክ ቁጥር ያስገቡ።" },
    dateEmpty: { en: "Please choose a date.", am: "እባክዎ ቀን ይምረጡ።" },
    datePast: { en: "Please choose today or a future date.", am: "እባክዎ የዛሬን ወይም የወደፊት ቀን ይምረጡ።" },
    time: { en: "Please choose a time.", am: "እባክዎ ሰዓት ይምረጡ።" },
    guests: { en: "Guests must be between 1 and 50.", am: "የእንግዶች ብዛት ከ1 እስከ 50 መሆን አለበት።" },
  };

  let currentLang = localStorage.getItem("azmera-lang") || "am";

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem("azmera-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const entry = I18N[key];
      if (entry) el.innerHTML = entry[lang];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const entry = I18N[key];
      if (entry) el.setAttribute("placeholder", entry[lang]);
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    renderMenu();
    updateGalleryCaptionIfOpen();
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  /* ---------------------------------------------------------------------
     6. Menu data + render + search + filter (bilingual)
  --------------------------------------------------------------------- */
  const CATEGORY_LABELS = {
    fasting: { en: "Fasting Food", am: "የጾም ምግቦች" },
    nonfasting: { en: "Non-Fasting", am: "የፍስክ ምግቦች" },
    breakfast: { en: "Breakfast", am: "ቁርስ" },
    coffee: { en: "Hot Coffee", am: "የቡና ነገሮች" },
    tea: { en: "Hot Drinks", am: "የሻይ ነገሮች" },
    juice: { en: "Juice", am: "ጭማቂ" },
    soft: { en: "Soft Drinks", am: "ለስላሳ መጠጦች" },
    iced: { en: "Iced Drinks", am: "የበረዶ መጠጦች" },
    extras: { en: "Wine-Beer", am: "ወይን፟ቢራ" },
  };

  const MENU = [
    // Fasting Food / የጾም ምግቦች
   
    { cat: "fasting", price: 1198, img: "A70-agelgil-full",
      en: { name: "Agelgil, Full (Fasting)" },
      am: { name: "ሙሉ የፆም አገልግል" } },
    { cat: "fasting", price: 798, img: "A69-agelgil-half",
      en: { name: "Agelgil, Half (Fasting)" },
      am: { name: "ግማሽ የፆም አገልግል" } },
    { cat: "fasting", price: 798, img: "A13-beyaynetu",
      en: { name: "Beyaynetu (Mixed Fasting Platter)" },
      am: { name: "ዓይነት" } },
    { cat: "fasting", price: 648, img: "A12-chickpea-fish-stew",
      en: { name: "Chickpea \"Fish\" Stew" },
      am: { name: "ሽንብራ አሳ" } },
    { cat: "fasting", price: 748, img: "A14-dekeko",
      en: { name: "Dekeko (Split Pea Stew)" },
      am: { name: "ደቀቆ" } },
    { cat: "fasting", price: 648, img: "A10-dirkosh-firfir",
      en: { name: "Dirkosh Firfir (Dried Injera)" },
      am: { name: "ድርቆሽ ፍርፍር" } },
    { cat: "fasting", price: 798, img: "A67-fasting-half-half",
      en: { name: "Fasting Half & Half" },
      am: { name: "የጾም ሃፍ ሃፍ" } },
    { cat: "fasting", price: 878, img: "A20-fasting-half-half-with-avocado",
      en: { name: "Fasting Half & Half with Avocado" },
      am: { name: "ኣቮካዶ ከ ጾም ሃፍ ሃፍ" } },
    { cat: "fasting", price: 548, img: "A11-fasting-injera-firfir",
      en: { name: "Fasting Injera Firfir" },
      am: { name: "የጾም ፍርፍር" } },
    { cat: "fasting", price: 1496, img: "A65-fasting-mahberawi",
      en: { name: "Fasting Mahberawi (Sharing Platter)" },
      am: { name: "የጾም ማህበራዊ" } },
    { cat: "fasting", price: 698, img: "A4-hilbet",
      en: { name: "Hilbet (Spiced Bean Purée)" },
      am: { name: "ሕልበት" } },
    { cat: "fasting", price: 648, img: "A21-kinche-with-chechebsa",
      en: { name: "Kinche with Chechebsa (Half & Half)" },
      am: { name: "ቅንጬ፡በጨጨብሳ1/2 1/2" } },
    { cat: "fasting", price: 698, img: "A3-kosta-tibs",
      en: { name: "Kosta Tibs (Sautéed Collard Stems)" },
      am: { name: "ቆስጣ ጥብስ" } },
    { cat: "fasting", price: 648, img: "A15-lentil",
      en: { name: "Lentil" },
      am: { name: "ምስር" } },
    { cat: "fasting", price: 598, img: "A5-linseed-scramble",
      en: { name: "Linseed Scramble" },
      am: { name: "ተልባ" } },
    { cat: "fasting", price: 648, img: "A16-pasta",
      en: { name: "Pasta" },
      am: { name: "ፓስታ" } },
    { cat: "fasting", price: 548, img: "A19-potato-key-wot",
      en: { name: "Potato Key Wot" },
      am: { name: "ድንች ወጥ" } },
    { cat: "fasting", price: 648, img: "A17-rice",
      en: { name: "Rice" },
      am: { name: "ሩዝ" } },
    { cat: "fasting", price: 598, img: "A7-salad",
      en: { name: "Salad" },
      am: { name: "ሰላጣ" } },
    { cat: "fasting", price: 748, img: "A8-salad-with-avocado",
      en: { name: "Salad with Avocado" },
      am: { name: "ሰላጣ በኣቮካዶ" } },
    { cat: "fasting", price: 698, img: "A2-saut-ed-collard-greens",
      en: { name: "Sautéed Collard Greens" },
      am: { name: "ጎመን" } },
    { cat: "fasting", price: 588, img: "A1-shiro",
      en: { name: "Shiro", desc: "Split peas, garlic, white and black cumin, and korarima, simmered to order." },
      am: { name: "ሽሮ", desc: "ክክ፣ ነጭ ሽንኩርት፣ ነጭና ጥቁር አዝሙድ እንዲሁም ኮሮሪማ በጥንቃቄ ተዘጋጅቶ የሚቀርብ።" } },
    { cat: "fasting", price: 598, img: "A6-sunflower-crumble",
      en: { name: "Sunflower Crumble", desc: "Made from broad bean and fenugreek." },
      am: { name: "ሱፍ ፍትፍት", desc: "ከባቄላ እና ከአብሽ የተዘጋጀ።" } },
    { cat: "fasting", price: 2478, img: "A79-tihlo",
      en: { name: "Tihlo (Fasting)" },
      am: { name: "ጥሕሎ  የፆም" } },
    { cat: "fasting", price: 598, img: "A9-tomato-salad",
      en: { name: "Tomato Salad" },
      am: { name: "ቲማቲም" } },
    // Non-Fasting / የፍስክ ምግቦች
    { cat: "nonfasting", price: 2178, img: "A72-agelgil-full",
      en: { name: "Agelgil, Full (Non-Fasting)" },
      am: { name: "ሙሉ የፍስክ አገልግል" } },
    { cat: "nonfasting", price: 1496, img: "A71-agelgil-half",
      en: { name: "Agelgil, Half (Non-Fasting)" },
      am: { name: "ግማሽ የፍስክ አገልግል" } },
    { cat: "nonfasting", price: 30000, img: "A125-agelgil-non-fasting",
      en: { name: "Agelgil, Non-Fasting (Full Basket)" },
      am: { name: "አገልግል የፍስክ" } },
    { cat: "nonfasting", price: 848, img: "A53-bozena-shiro",
      en: { name: "Bozena Shiro" },
      am: { name: "ቦዘና ሽሮ" } },
    { cat: "nonfasting", price: 998, img: "A60-bulla-with-kitfo",
      en: { name: "Bulla with Kitfo" },
      am: { name: "ቡላ በ ክትፎ" } },
    { cat: "nonfasting", price: 1398, img: "A75-chikena-tibs",
      en: { name: "Chikena Tibs" },
      am: { name: "የጭቅና ጥብስ" } },
    { cat: "nonfasting", price: 948, img: "A55-collard-greens-with-meat",
      en: { name: "Collard Greens with Meat" },
      am: { name: "ጎመን በስጋ" } },
    { cat: "nonfasting", price: 1098, img: "A62-dirkosh-firfir-with-dried-meat",
      en: { name: "Dirkosh Firfir with Dried Meat" },
      am: { name: "ድርቆሽ ፍርፍር በቋንጣ" } },
    { cat: "nonfasting", price: 998, img: "A63-dirkosh-with-meat",
      en: { name: "Dirkosh with Meat" },
      am: { name: "ድርቆሽ በስጋ" } },
    { cat: "nonfasting", price: 1048, img: "A50-doro",
      en: { name: "Doro (Chicken with Berbere)" },
      am: { name: "ደሮ" } },
    { cat: "nonfasting", price: 1548, img: "A47-dry-lamb-tibs",
      en: { name: "Dry Lamb Tibs" },
      am: { name: "ደረቅ ጥብስ" } },
    { cat: "nonfasting", price: 848, img: "A59-dulet-kitfo",
      en: { name: "Dulet Kitfo" },
      am: { name: "ዱለት ክትፎ" } },
    { cat: "nonfasting", price: 1348, img: "A73-gored-gored",
      en: { name: "Gored Gored (Cubed Raw Beef)" },
      am: { name: "ጎረድ ጎረድ" } },
    { cat: "nonfasting", price: 1048, img: "A52-kikil",
      en: { name: "Kikil (Lamb Shank Stew)" },
      am: { name: "ቅቅል" } },
    { cat: "nonfasting", price: 1548, img: "A74-kitfo",
      en: { name: "Kitfo (Minced Beef, Spiced Butter)" },
      am: { name: "ክትፎ" } },
    { cat: "nonfasting", price: 1048, img: "A49-lamb-stew-with-ayib",
      en: { name: "Lamb Stew with Ayib (Cottage Cheese)" },
      am: { name: "ቀይወጥ በአይብ" } },
    { cat: "nonfasting", price: 1198, img: "A44-lamb-tibs",
      en: { name: "Lamb Tibs" },
      am: { name: "የበግ ጥብስ" } },
    { cat: "nonfasting", price: 1098, img: "A45-lamb-tibs-stir-fried",
      en: { name: "Lamb Tibs, Stir-Fried" },
      am: { name: "ጥብስ ተፈርሾ" } },
    { cat: "nonfasting", price: 1098, img: "A64-lentils-with-dried-meat",
      en: { name: "Lentils with Dried Meat" },
      am: { name: "ምስር በቋንጣ" } },
    { cat: "nonfasting", price: 848, img: "A54-lentils-with-meat",
      en: { name: "Lentils with Meat" },
      am: { name: "ምስር በስጋ" } },
    { cat: "nonfasting", price: 848, img: "A77-macaroni-with-meat",
      en: { name: "Macaroni with Meat" },
      am: { name: "መኮረኒ በስጋ" } },
    { cat: "nonfasting", price: 848, img: "A51-minchet-abish",
      en: { name: "Minchet Abish (Spiced Minced Beef)" },
      am: { name: "ምንቸት" } },
    { cat: "nonfasting", price: 1189, img: "A68-non-fasting-half-half",
      en: { name: "Non-Fasting Half & Half" },
      am: { name: "ግማሽ ግማሽ የፍስክ" } },
    { cat: "nonfasting", price: 2714, img: "A66-non-fasting-mahberawi",
      en: { name: "Non-Fasting Mahberawi (Sharing Platter)" },
      am: { name: "ፍስክ ማህበራዊ" } },
    { cat: "nonfasting", price: 848, img: "A57-pasta-with-meat",
      en: { name: "Pasta with Meat" },
      am: { name: "ፓስታ በስጋ" } },
    { cat: "nonfasting", price: 848, img: "A56-potato-with-meat",
      en: { name: "Potato with Meat" },
      am: { name: "ድንች በስጋ" } },
    { cat: "nonfasting", price: 1098, img: "A61-quanta-firfir",
      en: { name: "Quanta Firfir (Dried Meat)" },
      am: { name: "ቋንጣ ፍርፍር" } },
    { cat: "nonfasting", price: 848, img: "A58-rice-with-meat",
      en: { name: "Rice with Meat" },
      am: { name: "ሩዝ በስጋ" } },
    { cat: "nonfasting", price: 698, img: "A42-shiro-with-butter",
      en: { name: "Shiro with Butter" },
      am: { name: "ሽሮ በቅቤ" } },
    { cat: "nonfasting", price: 1796, img: "A76-special-rice-with-tibs",
      en: { name: "Special Rice with Tibs" },
      am: { name: "ስፔሻል ሩዝ በጥብስ" } },
    { cat: "nonfasting", price: 898, img: "A48-stir-fried-meat-firfir",
      en: { name: "Stir-Fried Meat Firfir" },
      am: { name: "ጥብስ ፍርፍር" } },
    { cat: "nonfasting", price: 1098, img: "A46-tibs-wot",
      en: { name: "Tibs Wot (Lamb Stew, Diced)" },
      am: { name: "ጥብስ ወጥ (የበግ)" } },
    { cat: "nonfasting", price: 2478, img: "A80-tihlo",
      en: { name: "Tihlo (Non-Fasting)" },
      am: { name: "ጥሕሎ የፍስክ" } },
    // Breakfast / ቁርስ
    { cat: "breakfast", price: 588, img: "A25-barley-porridge",
      en: { name: "Barley Porridge (Fasting)" },
      am: { name: "የገብስ ገንፎ የጾም" } },
    { cat: "breakfast", price: 588, img: "A26-bulla-porridge",
      en: { name: "Bulla Porridge (Fasting)" },
      am: { name: "የቡላ ገንፎ የጾም" } },
    { cat: "breakfast", price: 548, img: "A33-chechebsa",
      en: { name: "Chechebsa (Fasting)" },
      am: { name: "ጨጨብሳ የየጾም" } },
    { cat: "breakfast", price: 598, img: "A34-chechebsa-with-egg-honey",
      en: { name: "Chechebsa with Egg & Honey" },
      am: { name: "ጨጨብሳ የፍስክ" } },
    { cat: "breakfast", price: 748, img: "A40-dulet-with-lamb-tripe",
      en: { name: "Dulet with Lamb Tripe" },
      am: { name: "ዱለት / ጨጓሯ የበግ" } },
    { cat: "breakfast", price: 548, img: "A38-egg-firfir",
      en: { name: "Egg Firfir" },
      am: { name: "እንቁላል ፍርፍር" } },
    { cat: "breakfast", price: 548, img: "A35-egg-sandwich",
      en: { name: "Egg Sandwich" },
      am: { name: "እንቁላል ሳንዱች" } },
    { cat: "breakfast", price: 548, img: "A22-fasting-bread-firfir",
      en: { name: "Fasting Bread Firfir" },
      am: { name: "ዳቦ ፍርፍር የጾም" } },
    { cat: "breakfast", price: 648, img: "A31-fasting-breakfast-combo",
      en: { name: "Fasting Breakfast Combo" },
      am: { name: "የጾም ቁርስ ኮምቦ" } },
    { cat: "breakfast", price: 588, img: "A27-fasting-bulla-porridge-special",
      en: { name: "Fasting Bulla Porridge, Special" },
      am: { name: "የፍስክ ቡላ ገንፎ" } },
    { cat: "breakfast", price: 548, img: "A29-fasting-ful",
      en: { name: "Fasting Ful" },
      am: { name: "ፉል የጾም" } },
    { cat: "breakfast", price: 548, img: "A23-fasting-kinche",
      en: { name: "Fasting Kinche" },
      am: { name: "ቂንጬ የጾም" } },
    { cat: "breakfast", price: 748, img: "A41-kintibab",
      en: { name: "Kintibab" },
      am: { name: "ቅንጥብጣቢ" } },
    { cat: "breakfast", price: 598, img: "A18-macaroni",
      en: { name: "Macaroni" },
      am: { name: "ሞኮሮኒ" } },
    { cat: "breakfast", price: 548, img: "A37-omelet",
      en: { name: "Omelet" },
      am: { name: "ኦምሌት" } },
    { cat: "breakfast", price: 698, img: "A39-scrambled-egg-with-meat",
      en: { name: "Scrambled Egg with Meat" },
      am: { name: "እንቁላል በስጋ" } },
    { cat: "breakfast", price: 548, img: "A36-scrambled-egg-with-sauce",
      en: { name: "Scrambled Egg with Sauce" },
      am: { name: "እንቁላል ስልስ" } },
    { cat: "breakfast", price: 748, img: "A32-special-breakfast-combo",
      en: { name: "Special Breakfast Combo" },
      am: { name: "እስፔሻል ኮምቦ" } },
    { cat: "breakfast", price: 598, img: "A30-special-ful",
      en: { name: "Special Ful" },
      am: { name: "ፉል እስፔሻል" } },
    { cat: "breakfast", price: 498, img: "A24-special-kinche",
      en: { name: "Special Kinche" },
      am: { name: "እስፔሻል ቂንጬ" } },
    { cat: "breakfast", price: 588, img: "A28-special-porridge",
      en: { name: "Special Porridge" },
      am: { name: "ስፔሻል ገንፎ" } },
    { cat: "breakfast", price: 548, img: "A43-tomato-salsa",
      en: { name: "Tomato Salsa" },
      am: { name: "ቲማቲም ስልስ" } },
    // Hot Coffee / የቡና ነገሮች
    { cat: "coffee", price: 90, img: "A119-americano",
      en: { name: "Americano" },
      am: { name: "አመሪካኖ" } },
    { cat: "coffee", price: 90, img: "A120-cappuccino",
      en: { name: "Cappuccino" },
      am: { name: "ካፕችኖ" } },
    { cat: "coffee", price: 130, img: "A194-coffee-kerebot",
      en: { name: "Coffee Kerebot (Ethiopian Blend)" },
      am: { name: "ኮፊ ከረቦት" } },
    { cat: "coffee", price: 148, img: "A108-coffee-latte",
      en: { name: "Coffee Latte" },
      am: { name: "ቡና በወተት" } },
    { cat: "coffee", price: 110, img: "A189-cortado",
      en: { name: "Cortado" },
      am: { name: "ኮርታዶ" } },
    { cat: "coffee", price: 180, img: "A109-double-macchiato",
      en: { name: "Double Macchiato" },
      am: { name: "ዳብል ማክያቶ" } },
    { cat: "coffee", price: 120, img: "A107-espresso",
      en: { name: "Espresso" },
      am: { name: "እስፕሪሶ" } },
    { cat: "coffee", price: 160, img: "A106-fasting-macchiato",
      en: { name: "Fasting Macchiato" },
      am: { name: "የዖም ማኪያቶ" } },
    { cat: "coffee", price: 130, img: "A188-lungo",
      en: { name: "Lungo" },
      am: { name: "ሎንጎ" } },
    { cat: "coffee", price: 100, img: "A105-macchiato",
      en: { name: "Macchiato" },
      am: { name: "ማኪያቶ" } },
    { cat: "coffee", price: 105, img: "A111-machine-brewed-coffee",
      en: { name: "Machine-Brewed Coffee" },
      am: { name: "የማሽን ቡና" } },
    { cat: "coffee", price: 105, img: "A121-milk",
      en: { name: "Milk" },
      am: { name: "ወተት" } },
    { cat: "coffee", price: 110, img: "A191-mocha-macchiato",
      en: { name: "Mocha Macchiato" },
      am: { name: "ሞቻ ማክያቶ" } },
    { cat: "coffee", price: 110, img: "A193-piccolo",
      en: { name: "Piccolo" },
      am: { name: "ፒኮሎ" } },
    { cat: "coffee", price: 85, img: "A192-ristretto",
      en: { name: "Ristretto" },
      am: { name: "ሪስትሬቶ" } },
    { cat: "coffee", price: 75, img: "A104-traditional-jebena-coffee",
      en: { name: "Traditional Jebena Coffee" },
      am: { name: "የጀበና ቡና" } },
    // Hot Drinks / የሻይ ነገሮች
    { cat: "tea", price: 95, img: "A103-black-tea",
      en: { name: "Black Tea" },
      am: { name: "ሻይ" } },
    { cat: "tea", price: 90, img: "A196-chamomile-tea",
      en: { name: "Chamomile Tea" },
      am: { name: "ካሞሚል ሻይ" } },
    { cat: "tea", price: 158, img: "A112-double-tea",
      en: { name: "Double Tea" },
      am: { name: "ደብል ሻይ" } },
    { cat: "tea", price: 90, img: "A115-ginger-tea",
      en: { name: "Ginger Tea" },
      am: { name: "ዝንጅብል ሻይ" } },
    { cat: "tea", price: 120, img: "A116-ginger-tea-with-honey",
      en: { name: "Ginger Tea with Honey" },
      am: { name: "ዝንጅብል ሻይ በማር" } },
    { cat: "tea", price: 95, img: "A110-green-tea",
      en: { name: "Green Tea" },
      am: { name: "ግሪን ሻይ" } },
    { cat: "tea", price: 130, img: "A190-hot-chocolate",
      en: { name: "Hot Chocolate" },
      am: { name: "ሆት ቸኮሊት" } },
    { cat: "tea", price: 98, img: "A118-lemon-tea",
      en: { name: "Lemon Tea" },
      am: { name: "ሎሚ ሻይ" } },
    { cat: "tea", price: 90, img: "A195-moringa-tea",
      en: { name: "Moringa Tea" },
      am: { name: "ሞሪንጋ ሻይ" } },
    { cat: "tea", price: 248, img: "A113-special-tea",
      en: { name: "Special Tea" },
      am: { name: "ስፔሻል ሻይ" } },
    { cat: "tea", price: 275, img: "A114-special-tea-with-alcohol",
      en: { name: "Special Tea with Alcohol" },
      am: { name: "ስፔሻል ሻይ በኣልኮል" } },
    { cat: "tea", price: 120, img: "A117-spris-tea",
      en: { name: "Spris Tea (Mixed Spice)" },
      am: { name: "ሻይ ስፕሪስ" } },
    { cat: "tea", price: 75, img: "A122-traditional-tea",
      en: { name: "Traditional Tea" },
      am: { name: "ባህላዊ ሻይ" } },
    // Juice / ጭማቂ
    { cat: "juice", price: 250, img: "A197-azmera-mix-juice",
      en: { name: "Azmera Mix Juice" },
      am: { name: "አዝመራ ጁስ" } },
    { cat: "juice", price: 325, img: "A82-flax-juice",
      en: { name: "Flax (Telba) Juice" },
      am: { name: "ተልባ ጁስ" } },
    { cat: "juice", price: 325, img: "A81-safflower-seed-juice",
      en: { name: "Safflower Seed Juice" },
      am: { name: "ሱፍ ጁስ" } },
    { cat: "juice", price: 325, img: "A83-spris-juice",
      en: { name: "Spris Juice (Layered Mixed Juice)" },
      am: { name: "ስፕሪስ ጁስ" } },
    // Soft Drinks / ለስላሳ መጠጦች
   { cat: "soft", price: 110, img: "A87-malta",
      en: { name: "Malta (Malt Drink)" },
      am: { name: "ማልታ" } },
    { cat: "soft", price: 80, img: "A187-novida",
      en: { name: "Novida (Soft Drink)" },
      am: { name: "ኖቪዳ" } },
    { cat: "soft", price: 85, img: "A86-soft-drink",
      en: { name: "Soft Drink" },
      am: { name: "ለስላሳ" } },
    { cat: "soft", price: 78, img: "A85-water-1-liter",
      en: { name: "Water, 1 Liter" },
      am: { name: "1 ሊትር ውሃ" } },
    { cat: "soft", price: 48, img: "A84-water-half-liter",
      en: { name: "Water, Half Liter" },
      am: { name: "ግማሽ ውሃ" } },
    // Iced Drinks / የበረዶ መጠጦች
    { cat: "iced", price: 150, img: "A185-iced-americano",
      en: { name: "Iced Americano" },
      am: { name: "አይስ አመሪካኖ" } },
    { cat: "iced", price: 150, img: "A181-iced-coffee",
      en: { name: "Iced Coffee" },
      am: { name: "አይስ ኮፊ" } },
    { cat: "iced", price: 150, img: "A186-iced-dalgona",
      en: { name: "Iced Dalgona" },
      am: { name: "አይስ ዳሎኛ" } },
    { cat: "iced", price: 150, img: "A180-iced-latte",
      en: { name: "Iced Latte" },
      am: { name: "አይስ ላቴ-" } },
    { cat: "iced", price: 150, img: "A183-iced-lemon",
      en: { name: "Iced Lemon" },
      am: { name: "አይስ ሌመን" } },
    { cat: "iced", price: 150, img: "A182-iced-mocha",
      en: { name: "Iced Mocha" },
      am: { name: "አይስ ሙቻ" } },
    { cat: "iced", price: 150, img: "A184-iced-tea",
      en: { name: "Iced Tea" },
      am: { name: "አይስ ቲ" } },
    // Wine-Beer / ወይን፟ቢራ
    { cat: "extras", price: 200, img: "habesha",
      en: { name: "Habesha Beer" },
      am: { name: "ሐበሻ ቢራ" } },
    { cat: "extras", price: 200, img: "StGorge",
      en: { name: "Giorgis Beer" },
      am: { name: "ጊዮርጊስ ቢራ" } },
    { cat: "extras", price: 200, img: "heineken",
      en: { name: "Heineken Beer" },
      am: { name: "ሀይኒከን ቢራ" } },
     { cat: "extras", price: 100, img: "A78-araki",
      en: { name: "Araki (Local Spirit)" },
      am: { name: "አረቄ" } },
    { cat: "extras", price: 3200, img: "rift-cabernet",
      en: { name: "Rift Valley Cabernet" },
      am: { name: "ሪፍትቫሊ ከባድ ወይን " } },
    { cat: "extras", price: 2800, img: "rift-cuvee",
      en: { name: "Rift Valley Cuvée" },
      am: { name: "ሪፍትቫሊ ቀላል ወይን" } },
    { cat: "extras", price: 2500, img: "acacia-red",
      en: { name: "Acacia Dry Red" },
      am: { name: "አካቻ ቀይ ወይን" } },
    { cat: "extras", price: 2500, img: "axumit-wine",
      en: { name: "Axumit" },
      am: { name: "አክሱማዊት ወይን" } },
   
  ];

  const menuGrid = document.getElementById("menuGrid");
  const menuEmpty = document.getElementById("menuEmpty");
  const menuSearch = document.getElementById("menuSearch");
  const categoryButtons = document.querySelectorAll("#menuCategories .chip");

  let activeCategory = "all";
  let searchTerm = "";

  function renderMenu() {
    const filtered = MENU.filter((item) => {
      const inCategory = activeCategory === "all" || item.cat === activeCategory;
      const t = item[currentLang];
      const inSearch =
        !searchTerm ||
        t.name.toLowerCase().includes(searchTerm) ||
        (t.desc && t.desc.toLowerCase().includes(searchTerm));
      return inCategory && inSearch;
    });

    menuGrid.innerHTML = filtered
      .map((item) => {
        const t = item[currentLang];
        const catLabel = CATEGORY_LABELS[item.cat][currentLang];
        const descHtml = t.desc ? `<p class="menu-card__desc">${t.desc}</p>` : "";
        return `
      <article class="menu-card">
        <div class="menu-card__img-wrap">
          <span class="menu-card__cat">${catLabel}</span>
          <img src="images/menu/${item.img}.jpg" alt="${t.name}" loading="lazy" width="500" height="375" onerror="this.onerror=null;this.src='images/menu/placeholder.jpg';">
        </div>
        <div class="menu-card__body">
          <div class="menu-card__top">
            <h3 class="menu-card__name">${t.name}</h3>
            <span class="menu-card__price">${item.price} ETB</span>
          </div>
          ${descHtml}
        </div>
      </article>`;
      })
      .join("");

    menuEmpty.hidden = filtered.length !== 0;
  }

  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      activeCategory = btn.dataset.filter;
      renderMenu();
    });
  });

  menuSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value.trim().toLowerCase();
    renderMenu();
  });

  /* ---------------------------------------------------------------------
     7. Gallery lightbox (bilingual captions)
  --------------------------------------------------------------------- */
  const galleryItems = Array.from(document.querySelectorAll(".gallery__item"));
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    const item = galleryItems[index];
    const img = item.querySelector("img");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = item.dataset["caption" + (currentLang === "am" ? "Am" : "En")] || "";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    lightboxClose.focus();
  }

  function updateGalleryCaptionIfOpen() {
    if (!lightbox.hidden) openLightbox(currentIndex);
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }

  function showRelative(delta) {
    currentIndex = (currentIndex + delta + galleryItems.length) % galleryItems.length;
    openLightbox(currentIndex);
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => openLightbox(index));
  });
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => showRelative(-1));
  lightboxNext.addEventListener("click", () => showRelative(1));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showRelative(-1);
    if (e.key === "ArrowRight") showRelative(1);
  });

  /* ---------------------------------------------------------------------
     8. FAQ accordion
  --------------------------------------------------------------------- */
  document.querySelectorAll(".faq-item__q").forEach((btn) => {
    const answer = btn.nextElementSibling;
    btn.addEventListener("click", () => {
      const isOpen = btn.getAttribute("aria-expanded") === "true";

      document.querySelectorAll(".faq-item__q").forEach((otherBtn) => {
        otherBtn.setAttribute("aria-expanded", "false");
        otherBtn.nextElementSibling.style.maxHeight = null;
      });

      if (!isOpen) {
        btn.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  /* ---------------------------------------------------------------------
     9. Reservation form validation (client-side only, no backend, bilingual)
  --------------------------------------------------------------------- */
  const reserveForm = document.getElementById("reserveForm");
  const reserveConfirm = document.getElementById("reserveConfirm");

  const validators = {
    rName: (v) => v.trim().length >= 2 || FORM_ERRORS.name[currentLang],
    rPhone: (v) => /^[0-9+\s-]{7,15}$/.test(v.trim()) || FORM_ERRORS.phone[currentLang],
    rDate: (v) => {
      if (!v) return FORM_ERRORS.dateEmpty[currentLang];
      const chosen = new Date(v + "T00:00:00");
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return chosen >= today || FORM_ERRORS.datePast[currentLang];
    },
    rTime: (v) => !!v || FORM_ERRORS.time[currentLang],
    rGuests: (v) => (Number(v) >= 1 && Number(v) <= 50) || FORM_ERRORS.guests[currentLang],
  };

  function validateField(id) {
    const field = document.getElementById(id);
    const errorEl = document.getElementById("err-" + id);
    field.dataset.touched = "true";
    const result = validators[id](field.value);
    if (result === true) {
      errorEl.textContent = "";
      return true;
    }
    errorEl.textContent = result;
    return false;
  }

  Object.keys(validators).forEach((id) => {
    const field = document.getElementById(id);
    field.addEventListener("blur", () => validateField(id));
  });

  // Same number used for the WhatsApp contact card and floating button —
  // update this once and every WhatsApp touchpoint on the site stays in sync.
  const RESTAURANT_WHATSAPP_NUMBER = "251XXXXXXXXX";

  const RESERVATION_LABELS = {
    en: { title: "New Table Reservation", name: "Name", phone: "Phone", date: "Date", time: "Time", guests: "Guests", notes: "Special Requests" },
    am: { title: "አዲስ የጠረጴዛ ማስያዣ", name: "ስም", phone: "ስልክ", date: "ቀን", time: "ሰዓት", guests: "እንግዶች", notes: "ልዩ ጥያቄ" },
  };

  function buildReservationMessage(data) {
    const l = RESERVATION_LABELS[currentLang];
    let msg = `*${l.title}*\n`;
    msg += `${l.name}: ${data.name}\n`;
    msg += `${l.phone}: ${data.phone}\n`;
    msg += `${l.date}: ${data.date}\n`;
    msg += `${l.time}: ${data.time}\n`;
    msg += `${l.guests}: ${data.guests}\n`;
    if (data.notes) msg += `${l.notes}: ${data.notes}\n`;
    return msg;
  }

  const CONFIRM_MSG = {
    en: () => "Opening WhatsApp with your reservation details — just tap Send to complete your request.",
    am: () => "የማስያዣ ዝርዝርዎን ይዞ ዋትስአፕ በመክፈት ላይ — ጥያቄዎን ለማጠናቀቅ ላክ የሚለውን ይጫኑ።",
  };

  reserveForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const allValid = Object.keys(validators)
      .map(validateField)
      .every(Boolean);

    if (!allValid) {
      reserveConfirm.hidden = true;
      const firstInvalid = reserveForm.querySelector(".form-error:not(:empty)");
      if (firstInvalid) firstInvalid.previousElementSibling?.focus();
      return;
    }

    const data = {
      name: document.getElementById("rName").value.trim(),
      phone: document.getElementById("rPhone").value.trim(),
      date: document.getElementById("rDate").value,
      time: document.getElementById("rTime").value,
      guests: document.getElementById("rGuests").value,
      notes: document.getElementById("rNotes").value.trim(),
    };

    const message = buildReservationMessage(data);
    const waUrl = `https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener");

    reserveConfirm.textContent = CONFIRM_MSG[currentLang]();
    reserveConfirm.hidden = false;
    reserveForm.reset();
    Object.keys(validators).forEach((id) => {
      document.getElementById(id).dataset.touched = "false";
      document.getElementById("err-" + id).textContent = "";
    });
  });

  /* ---------------------------------------------------------------------
     10. Scroll-to-top button
  --------------------------------------------------------------------- */
  const toTop = document.getElementById("toTop");
  window.addEventListener(
    "scroll",
    () => {
      const show = window.scrollY > 500;
      toTop.hidden = false;
      toTop.classList.toggle("is-visible", show);
    },
    { passive: true }
  );
  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------------------------------------------------------------------
     11. Initial language application (defaults to English, remembers choice)
  --------------------------------------------------------------------- */
  applyLanguage(currentLang);
})();

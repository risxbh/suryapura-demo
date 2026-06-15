import React from "react";
import {
  GraduationCap,
  Wheat,
  Construction,
  Landmark,
  Fingerprint,
  ArrowRight,
  Quote,
  Heart,
  MessageCircle,
  Send,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  User,
  Sun,
  Signal,
  Wifi,
  BatteryFull,
  Play,
  Video,
} from "lucide-react";

/* ---------------------------------------------------------
   सूर्योदय किरणें — Signature decorative element
   (Sunrise rays — used in the hero & as a recurring motif)
--------------------------------------------------------- */
function SunRays({ count = 18, className = "" }) {
  const cx = 200;
  const cy = 250;
  const rInner = 150;
  const rOuter = 232;
  const rays = Array.from({ length: count }).map((_, i) => {
    const theta = Math.PI - (i / (count - 1)) * Math.PI;
    const x1 = cx + rInner * Math.cos(theta);
    const y1 = cy - rInner * Math.sin(theta);
    const x2 = cx + rOuter * Math.cos(theta);
    const y2 = cy - rOuter * Math.sin(theta);
    return { x1, y1, x2, y2, key: i };
  });

  return (
    <svg
      viewBox="0 0 400 260"
      className={className}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sunCore" cx="50%" cy="100%" r="75%">
          <stop offset="0%" stopColor="#FFE3A6" />
          <stop offset="55%" stopColor="#F4A93B" />
          <stop offset="100%" stopColor="#E08214" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rayGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE3A6" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FFE3A6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx={cx} cy={cy} r={rInner + 10} fill="url(#sunCore)" />
      {rays.map((r) => (
        <line
          key={r.key}
          x1={r.x1}
          y1={r.y1}
          x2={r.x2}
          y2={r.y2}
          stroke="url(#rayGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
      <circle cx={cx} cy={cy} r={rInner} fill="#F4A93B" opacity="0.18" />
    </svg>
  );
}

/* ---------------------------------------------------------
   छोटा सूर्य आइकन — small mark used in nav / footer
--------------------------------------------------------- */
function SunMark({ size = 34 }) {
  return (
    <span
      className="sun-mark"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Sun size={size * 0.6} strokeWidth={2.2} />
    </span>
  );
}

/* ---------------------------------------------------------
   मीडिया कॉन्फ़िग — यहां अपनी असली, licensed तस्वीरें/वीडियो डालें
   (जैसे Pexels/Unsplash/अपनी खुद की shoot की गई images/videos)।
   खाली (" ") छोड़ने पर नीचे दी गई premium illustrated artwork
   दिखेगी — कोई टूटी हुई लिंक या copyright risk नहीं।
--------------------------------------------------------- */
const MEDIA = {
  heroVideoUrl: "", // e.g. "https://yourcdn.com/suryapura-sunrise.mp4"
  gallery: {
    fields: "", // सूर्योदय व खेत
    farmer: "", // किसान
    road: "", // सड़क निर्माण
    school: "", // स्कूल
    panchayat: "", // पंचायत / डिजिटल पहचान
  },
};

/* ---------------------------------------------------------
   ग्राम चित्रावली — Illustrated "stock photo" panels
   (हाथ से बनाई गई vector art, theme-matching रंगों में —
   real photos का lightweight, license-free विकल्प)
--------------------------------------------------------- */
function VillageArt({ type, src, label }) {
  if (src) {
    return <img src={src} alt={label || type} className="village-photo" />;
  }

  switch (type) {
    case "fields":
      return (
        <svg
          viewBox="0 0 400 300"
          className="village-photo"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="sky-fields" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#16233D" />
              <stop offset="55%" stopColor="#C8593A" />
              <stop offset="100%" stopColor="#FCD98A" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#sky-fields)" />
          <circle cx="290" cy="150" r="46" fill="#FFE9BE" opacity="0.9" />
          <circle cx="290" cy="150" r="46" fill="#F4A93B" opacity="0.55" />
          <polygon
            points="40,168 80,140 120,168"
            fill="#3a2c30"
            opacity="0.85"
          />
          <polygon
            points="130,172 165,148 200,172"
            fill="#3a2c30"
            opacity="0.85"
          />
          <rect
            x="48"
            y="168"
            width="64"
            height="22"
            fill="#3a2c30"
            opacity="0.85"
          />
          <rect
            x="138"
            y="172"
            width="55"
            height="20"
            fill="#3a2c30"
            opacity="0.85"
          />
          <rect y="190" width="400" height="110" fill="#7a8f3f" />
          <rect y="215" width="400" height="85" fill="#5E8C4F" />
          <rect y="245" width="400" height="55" fill="#4f7a41" />
          {Array.from({ length: 9 }).map((_, i) => (
            <path
              key={i}
              d={`M ${i * 46 - 10} 300 Q ${i * 46 + 23} 230 ${i * 46 + 56} 300`}
              stroke="#D9A857"
              strokeWidth="3"
              fill="none"
              opacity="0.35"
            />
          ))}
        </svg>
      );
    case "farmer":
      return (
        <svg
          viewBox="0 0 400 300"
          className="village-photo"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="sky-farmer" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F4A93B" />
              <stop offset="100%" stopColor="#FFF3DC" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#sky-farmer)" />
          <circle cx="320" cy="60" r="34" fill="#FFFFFF" opacity="0.5" />
          <rect y="190" width="400" height="110" fill="#5E8C4F" />
          <rect y="230" width="400" height="70" fill="#4f7a41" />
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={i}
              x1={i * 42}
              y1="300"
              x2={i * 42 + 18}
              y2="195"
              stroke="#3f6535"
              strokeWidth="4"
              opacity="0.5"
            />
          ))}
          <g fill="#16233D">
            <circle cx="170" cy="150" r="16" />
            <path d="M148 200 Q150 160 170 166 Q190 160 196 205 L190 245 L150 245 Z" />
            <rect
              x="120"
              y="225"
              width="34"
              height="9"
              rx="4"
              transform="rotate(-18 120 225)"
            />
            <line
              x1="118"
              y1="262"
              x2="118"
              y2="160"
              stroke="#16233D"
              strokeWidth="5"
            />
          </g>
          <g stroke="#E08214" strokeWidth="4" strokeLinecap="round" fill="none">
            <line x1="250" y1="260" x2="246" y2="190" />
            <line x1="268" y1="260" x2="270" y2="180" />
            <line x1="286" y1="260" x2="292" y2="195" />
          </g>
        </svg>
      );
    case "road":
      return (
        <svg
          viewBox="0 0 400 300"
          className="village-photo"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="sky-road" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#16233D" />
              <stop offset="100%" stopColor="#F4A93B" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#sky-road)" />
          <circle cx="200" cy="150" r="40" fill="#FFE9BE" opacity="0.85" />
          <polygon
            points="0,190 400,190 400,210 0,225"
            fill="#5E8C4F"
            opacity="0.8"
          />
          <polygon points="150,300 250,300 210,150 190,150" fill="#4a4541" />
          <polygon points="170,300 230,300 205,150 195,150" fill="#6b6258" />
          {Array.from({ length: 6 }).map((_, i) => (
            <rect
              key={i}
              x={196 - i * 1.5}
              y={290 - i * 24}
              width={8 + i * 3}
              height="5"
              fill="#FCD98A"
              opacity="0.8"
            />
          ))}
          <line
            x1="60"
            y1="300"
            x2="160"
            y2="160"
            stroke="#3a2c30"
            strokeWidth="5"
          />
          <line
            x1="340"
            y1="300"
            x2="245"
            y2="160"
            stroke="#3a2c30"
            strokeWidth="5"
          />
          <line
            x1="60"
            y1="300"
            x2="30"
            y2="260"
            stroke="#3a2c30"
            strokeWidth="5"
          />
          <line
            x1="340"
            y1="300"
            x2="370"
            y2="260"
            stroke="#3a2c30"
            strokeWidth="5"
          />
        </svg>
      );
    case "school":
      return (
        <svg
          viewBox="0 0 400 300"
          className="village-photo"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="sky-school" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F4A93B" />
              <stop offset="100%" stopColor="#FBF1E1" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#sky-school)" />
          <circle cx="80" cy="60" r="32" fill="#FFFFFF" opacity="0.6" />
          <rect y="230" width="400" height="70" fill="#C8B79A" />
          <rect
            x="110"
            y="120"
            width="180"
            height="115"
            fill="#F4F0E6"
            stroke="#C8593A"
            strokeWidth="3"
          />
          <polygon points="100,120 200,70 300,120" fill="#C8593A" />
          <line
            x1="200"
            y1="70"
            x2="200"
            y2="40"
            stroke="#16233D"
            strokeWidth="3"
          />
          <rect x="196" y="40" width="22" height="14" fill="#5E8C4F" />
          <rect x="130" y="150" width="34" height="34" fill="#3a5278" />
          <rect x="186" y="150" width="34" height="34" fill="#3a5278" />
          <rect x="242" y="150" width="34" height="34" fill="#3a5278" />
          <rect x="186" y="195" width="34" height="40" fill="#16233D" />
          <g fill="#16233D">
            <circle cx="330" cy="225" r="9" />
            <rect x="320" y="234" width="20" height="26" rx="4" />
            <circle cx="355" cy="230" r="8" />
            <rect x="346" y="238" width="18" height="22" rx="4" />
          </g>
        </svg>
      );
    case "panchayat":
      return (
        <svg
          viewBox="0 0 400 300"
          className="village-photo"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="sky-panch" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#16233D" />
              <stop offset="100%" stopColor="#D9A857" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#sky-panch)" />
          <rect y="240" width="400" height="60" fill="#E6D9C4" />
          <rect x="90" y="150" width="220" height="95" fill="#F4F0E6" />
          <polygon points="80,150 200,105 320,150" fill="#16233D" />
          {Array.from({ length: 5 }).map((_, i) => (
            <rect
              key={i}
              x={108 + i * 42}
              y="160"
              width="16"
              height="85"
              fill="#C8593A"
            />
          ))}
          <rect x="180" y="195" width="40" height="50" fill="#16233D" />
          <g>
            <rect
              x="250"
              y="60"
              width="100"
              height="64"
              rx="8"
              fill="#FBF1E1"
              stroke="#F4A93B"
              strokeWidth="3"
            />
            <circle cx="272" cy="84" r="10" fill="#C8593A" />
            <rect
              x="292"
              y="76"
              width="44"
              height="6"
              rx="3"
              fill="#16233D"
              opacity="0.6"
            />
            <rect
              x="292"
              y="88"
              width="34"
              height="6"
              rx="3"
              fill="#16233D"
              opacity="0.35"
            />
            <rect x="262" y="102" width="14" height="14" fill="#16233D" />
            <rect
              x="280"
              y="102"
              width="14"
              height="14"
              fill="#16233D"
              opacity="0.6"
            />
            <rect
              x="298"
              y="102"
              width="14"
              height="14"
              fill="#16233D"
              opacity="0.3"
            />
          </g>
        </svg>
      );
    default:
      return null;
  }
}

/* ---------------------------------------------------------
   मुख्य घटक — Main Component
--------------------------------------------------------- */
export default function SuryapuraPortal() {
  const pillars = [
    {
      icon: GraduationCap,
      tone: "saffron",
      tag: "शिक्षा",
      title: "हर बच्चे के हाथ में किताब",
      desc: "5 नए स्मार्ट क्लासरूम, डिजिटल लाइब्रेरी और बालिका छात्रवृत्ति योजना — सूर्यपुरा के हर बच्चे के लिए बराबर मौका।",
      stat: "1,840 विद्यार्थी लाभान्वित",
    },
    {
      icon: Wheat,
      tone: "leaf",
      tag: "किसान कल्याण",
      title: "मिट्टी से समृद्धि तक",
      desc: "सॉइल हेल्थ कार्ड, बूंद-बूंद सिंचाई और सीधी मंडी कनेक्टिविटी से किसानों की आमदनी में सीधा सुधार।",
      stat: "3,500 किसान परिवार जुड़े",
    },
    {
      icon: Construction,
      tone: "terracotta",
      tag: "सड़क व बुनियादी ढांचा",
      title: "हर गली, हर शहर से जुड़ी",
      desc: "42 किमी पक्की सड़कें, सोलर स्ट्रीट लाइट और हर मोहल्ले तक पानी की पाइपलाइन — अब बारिश में भी रुकावट नहीं।",
      stat: "12 गांव आपस में जुड़े",
    },
    {
      icon: Landmark,
      tone: "indigo",
      tag: "पंचायत व डिजिटल पहचान",
      title: "पारदर्शी पंचायत, डिजिटल नागरिक",
      desc: "ई-पंचायत पोर्टल, ऑनलाइन शिकायत निवारण और हर परिवार के लिए डिजिटल पहचान कार्ड — कागज़ी लाइनों का अंत।",
      stat: "1,200+ डिजिटल पहचान जारी",
    },
  ];

  const stats = [
    { num: "42 किमी", label: "नई सड़कें बनीं" },
    { num: "1,200+", label: "डिजिटल पहचान कार्ड" },
    { num: "08", label: "नए स्मार्ट स्कूल" },
    { num: "3,500", label: "किसान परिवार लाभान्वित" },
  ];

  return (
    <div className="sp-app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Yatra+One&family=Hind:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');

        :root {
          --ink: #2B2620;
          --cream: #FBF1E1;
          --cream-soft: #FFFBF3;
          --indigo: #16233D;
          --indigo-soft: #233556;
          --saffron: #F4A93B;
          --saffron-deep: #E08214;
          --terracotta: #C8593A;
          --leaf: #5E8C4F;
          --gold: #D9A857;
        }

        .sp-app {
          font-family: 'Hind', sans-serif;
          color: var(--ink);
          background: var(--cream);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }
        .sp-app * { box-sizing: border-box; }
        .sp-app img, .sp-app svg { display: block; }

        .sp-display {
          font-family: 'Yatra One', cursive;
          font-weight: 400;
          letter-spacing: 0.5px;
        }
        .sp-eng {
          font-family: 'Poppins', sans-serif;
        }

        /* ---------- NAV ---------- */
        .sp-nav {
          position: sticky;
          top: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px clamp(18px, 5vw, 56px);
          background: rgba(22, 35, 61, 0.92);
          backdrop-filter: blur(8px);
          color: var(--cream-soft);
        }
        .sp-nav-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .sun-mark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(145deg, var(--saffron), var(--saffron-deep));
          color: var(--indigo);
          flex: none;
        }
        .sp-nav-brand-text {
          font-size: 20px;
          letter-spacing: 0.5px;
        }
        .sp-nav-brand-sub {
          display: block;
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 2px;
          color: var(--gold);
          text-transform: uppercase;
        }
        .sp-nav-links {
          display: flex;
          gap: 28px;
          font-size: 15px;
        }
        .sp-nav-links a {
          color: rgba(251, 241, 225, 0.85);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .sp-nav-links a:hover { color: var(--saffron); }
        .sp-nav-cta {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 600;
          padding: 9px 20px;
          border-radius: 999px;
          background: var(--saffron);
          color: var(--indigo);
          text-decoration: none;
          white-space: nowrap;
        }
        @media (max-width: 800px) {
          .sp-nav-links { display: none; }
        }

        /* ---------- HERO ---------- */
        .sp-hero {
          position: relative;
          overflow: hidden;
          background-image:
            linear-gradient(165deg, rgba(22,35,61,0.50) 0%, rgba(74,58,69,0.38) 42%, rgba(200,89,58,0.25) 78%, rgba(244,169,59,0.42) 100%),
            url('https://images.unsplash.com/photo-1609252509102-aa73ff792667?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          background-size: cover;
          background-position: center;
          color: var(--cream-soft);
          padding: clamp(48px, 8vw, 96px) clamp(18px, 5vw, 56px) clamp(90px, 14vw, 140px);
        }
        .sp-hero-rays {
  position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0.2;
    z-index: 0;
        }
        .sp-hero-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.3fr 0.9fr;
          gap: clamp(28px, 5vw, 64px);
          align-items: center;
          max-width: 1180px;
          margin: 0 auto;
        }
        .sp-eyebrow {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--saffron);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
              text-align: center;
    justify-content: center;

        }
        .sp-eyebrow::before {
          content: "";
          width: 28px;
          height: 1px;
          background: var(--saffron);
          display: inline-block;
        }
        .sp-headline {
          font-size: clamp(48px, 9vw, 96px);
          line-height: 1.05;
          margin: 0 0 6px;
          background: linear-gradient(95deg, #FFF3DC 0%, #FCD98A 55%, #F4A93B 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .sp-headline-en {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(251, 241, 225, 0.55);
          margin: 0 0 22px;
        }
        .sp-tagline {
          font-size: clamp(20px, 2.6vw, 28px);
          font-weight: 600;
          max-width: 560px;
          margin: 0 0 16px;
          color: #FFF6E8;
        }
        .sp-hero-text {
          font-size: 16px;
          max-width: 540px;
          color: rgba(251, 241, 225, 0.82);
          margin: 0 0 32px;
        }
        .sp-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
              justify-content: center;
        }
        .btn {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 999px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .btn:hover { transform: translateY(-2px); }
        .btn-primary {
          background: var(--saffron);
          color: var(--indigo);
          box-shadow: 0 10px 30px -10px rgba(244, 169, 59, 0.7);
        }
        .btn-secondary {
          background: transparent;
          color: #FFF6E8;
          border: 1.5px solid rgba(251, 241, 225, 0.35);
        }

        /* ---------- LEADER CARD (in hero) ---------- */
        .sp-leader-card {
          position: relative;
          background: rgba(255, 246, 232, 0.07);
          border: 1px solid rgba(251, 241, 225, 0.18);
          border-radius: 28px;
          padding: 28px;
          text-align: center;
          backdrop-filter: blur(6px);
        }
        .leader-avatar {
          width: 116px;
          height: 116px;
          margin: 0 auto 16px;
          border-radius: 50%;
          background: linear-gradient(150deg, var(--saffron) 0%, var(--terracotta) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFF6E8;
          border: 3px solid rgba(255, 246, 232, 0.5);
          box-shadow: 0 0 0 8px rgba(255, 246, 232, 0.06);
        }
        .leader-name {
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 4px;
          color: #FFF6E8;
        }
        .leader-role {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--saffron);
          margin: 0 0 16px;
        }
        .leader-quote {
          font-size: 14px;
          color: rgba(251, 241, 225, 0.85);
          border-top: 1px solid rgba(251, 241, 225, 0.18);
          padding-top: 14px;
          margin: 0;
          font-style: normal;
        }

        @media (max-width: 900px) {
          .sp-hero-inner {
            grid-template-columns: 1fr;
          }
          .sp-hero-text, .sp-tagline { max-width: 100%; }
        }

        /* ---------- STATS STRIP ---------- */
        .sp-stats {
          background: var(--indigo);
          color: var(--cream-soft);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin-top: -64px;
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin-left: auto;
          margin-right: auto;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 24px 60px -24px rgba(22, 35, 61, 0.55);
        }
        .sp-stat {
          padding: 28px 16px;
          text-align: center;
          border-right: 1px solid rgba(217, 168, 87, 0.22);
        }
        .sp-stat:last-child { border-right: none; }
        .sp-stat-num {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: clamp(22px, 3vw, 32px);
          color: var(--saffron);
          margin: 0 0 4px;
        }
        .sp-stat-label {
          font-size: 13px;
          color: rgba(251, 241, 225, 0.78);
          margin: 0;
        }
        @media (max-width: 760px) {
          .sp-stats { grid-template-columns: repeat(2, 1fr); border-radius: 16px; margin-top: -40px; }
          .sp-stat:nth-child(2) { border-right: none; }
          .sp-stat:nth-child(1), .sp-stat:nth-child(2) {
            border-bottom: 1px solid rgba(217, 168, 87, 0.22);
          }
        }

        /* ---------- SECTION GENERIC ---------- */
        .sp-section {
          padding: clamp(56px, 9vw, 110px) clamp(18px, 5vw, 56px);
          max-width: 1180px;
          margin: 0 auto;
        }
        .sp-section-head {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 48px;
        }
        .sp-section-eyebrow {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--terracotta);
          margin: 0 0 10px;
        }
        .sp-section-title {
          font-family: 'Yatra One', cursive;
          font-size: clamp(28px, 4.5vw, 44px);
          color: var(--indigo);
          margin: 0 0 14px;
        }
        .sp-section-sub {
          font-size: 15px;
          color: #6b6258;
          margin: 0;
        }

        /* ---------- PILLARS ---------- */
        .sp-pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        .pillar-card {
          background: var(--cream-soft);
          border-radius: 20px;
          padding: 26px 22px;
          box-shadow: 0 12px 30px -18px rgba(43, 38, 32, 0.35);
          border-top: 4px solid var(--saffron);
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: transform 0.2s ease;
        }
        .pillar-card:hover { transform: translateY(-6px); }
        .pillar-card.tone-saffron { border-top-color: var(--saffron); }
        .pillar-card.tone-leaf { border-top-color: var(--leaf); }
        .pillar-card.tone-terracotta { border-top-color: var(--terracotta); }
        .pillar-card.tone-indigo { border-top-color: var(--indigo); }

        .pillar-icon {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pillar-card.tone-saffron .pillar-icon { background: rgba(244, 169, 59, 0.14); color: var(--saffron-deep); }
        .pillar-card.tone-leaf .pillar-icon { background: rgba(94, 140, 79, 0.14); color: var(--leaf); }
        .pillar-card.tone-terracotta .pillar-icon { background: rgba(200, 89, 58, 0.14); color: var(--terracotta); }
        .pillar-card.tone-indigo .pillar-icon { background: rgba(22, 35, 61, 0.1); color: var(--indigo); }

        .pillar-tag {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #a39a8c;
          margin: 0;
        }
        .pillar-title {
          font-size: 19px;
          font-weight: 600;
          margin: 0;
          color: var(--ink);
        }
        .pillar-desc {
          font-size: 14px;
          color: #6b6258;
          margin: 0;
          flex: 1;
        }
        .pillar-stat {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: var(--indigo);
          padding-top: 12px;
          border-top: 1px dashed #e6d9c4;
        }
        @media (max-width: 1000px) {
          .sp-pillars-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 620px) {
          .sp-pillars-grid { grid-template-columns: 1fr; }
        }

        /* ---------- LEADER SPOTLIGHT ---------- */
        .sp-spotlight {
          background: linear-gradient(135deg, var(--indigo) 0%, #2c3f63 100%);
          color: var(--cream-soft);
          border-radius: 28px;
          padding: clamp(32px, 5vw, 56px);
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: clamp(28px, 5vw, 56px);
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .spotlight-photo-wrap {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .spotlight-photo {
          width: clamp(160px, 22vw, 220px);
          height: clamp(160px, 22vw, 220px);
          border-radius: 50%;
          background: linear-gradient(150deg, var(--saffron) 0%, var(--terracotta) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff6e8;
          position: relative;
          z-index: 1;
          border: 4px solid rgba(255, 246, 232, 0.5);
        }
        .spotlight-ring {
          position: absolute;
          inset: -22px;
          border: 1.5px dashed rgba(244, 169, 59, 0.45);
          border-radius: 50%;
          animation: sp-spin 26s linear infinite;
        }
        @keyframes sp-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .spotlight-ring { animation: none; }
        }
        .spotlight-eyebrow {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--saffron);
          margin: 0 0 12px;
        }
        .spotlight-quote {
          font-family: 'Yatra One', cursive;
          font-size: clamp(20px, 2.6vw, 30px);
          line-height: 1.5;
          margin: 0 0 18px;
          color: #FFF6E8;
        }
        .spotlight-name {
          font-size: 17px;
          font-weight: 700;
          margin: 0;
        }
        .spotlight-role {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          letter-spacing: 1.5px;
          color: rgba(251, 241, 225, 0.65);
          text-transform: uppercase;
          margin: 4px 0 0;
        }
        @media (max-width: 760px) {
          .sp-spotlight { grid-template-columns: 1fr; text-align: center; }
        }

        /* ---------- SOCIAL POSTS ---------- */
        .social-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }
        .social-card {
          background: var(--cream-soft);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 14px 36px -20px rgba(43, 38, 32, 0.4);
          border: 1px solid #f0e3cc;
        }
        .social-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 16px;
        }
        .social-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(150deg, var(--saffron), var(--terracotta));
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff6e8;
          flex: none;
        }
        .social-handle {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 600;
          margin: 0;
          color: var(--indigo);
        }
        .social-handle-sub {
          font-size: 11px;
          color: #a39a8c;
          margin: 0;
          font-family: 'Poppins', sans-serif;
        }
        .social-card-image {
          aspect-ratio: 1 / 1;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          gap: 4px;
          color: #fff6e8;
          text-align: center;
          padding: 24px;
          overflow: hidden;
        }
        .social-card-image .village-photo {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .social-card-image::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .social-card-image.v1::before {
          background: linear-gradient(180deg, rgba(200,89,58,0.15) 0%, rgba(22,35,61,0.78) 100%);
        }
        .social-card-image.v2::before {
          background: linear-gradient(180deg, rgba(22,35,61,0.15) 0%, rgba(22,35,61,0.82) 100%);
        }
        .social-card-image > :not(.village-photo) {
          position: relative;
          z-index: 2;
        }
        .social-card-image h3 {
          font-family: 'Yatra One', cursive;
          font-size: clamp(22px, 3vw, 30px);
          margin: 0;
          line-height: 1.3;
        }
        .social-card-image p {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin: 0;
          opacity: 0.85;
        }
        .social-card-body {
          padding: 14px 16px 18px;
        }
        .social-actions {
          display: flex;
          gap: 16px;
          color: var(--indigo);
          margin-bottom: 10px;
        }
        .social-caption {
          font-size: 14px;
          margin: 0 0 6px;
          color: var(--ink);
        }
        .social-caption b { color: var(--indigo); }
        .social-hashtags {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: var(--terracotta);
          margin: 0;
        }
        @media (max-width: 760px) {
          .social-grid { grid-template-columns: 1fr; }
        }

        /* ---------- VILLAGE PHOTO GALLERY ---------- */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .gallery-card {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          aspect-ratio: 3 / 4;
          box-shadow: 0 14px 32px -18px rgba(43, 38, 32, 0.45);
        }
        .gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .gallery-card:hover img { transform: scale(1.06); }
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(22,35,61,0.85) 0%, rgba(22,35,61,0.05) 55%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 16px;
          color: #fff6e8;
        }
        .gallery-tag {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--saffron);
          margin: 0 0 4px;
        }
        .gallery-title {
          font-family: 'Yatra One', cursive;
          font-size: 17px;
          margin: 0;
          line-height: 1.25;
        }
        @media (max-width: 1000px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .gallery-grid { grid-template-columns: 1fr; }
          .gallery-card { aspect-ratio: 16 / 10; }
        }

        /* ---------- VIDEO SHOWCASE ---------- */
        .video-wrap {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 24px 60px -24px rgba(22, 35, 61, 0.5);
          background: var(--indigo);
          max-width: 880px;
          margin: 0 auto;
        }
        .video-wrap video {
          display: block;
          width: 100%;
          max-height: 480px;
          object-fit: cover;
          background: var(--indigo);
        }
        .video-caption-bar {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          padding: 18px 22px;
          background: linear-gradient(0deg, rgba(22,35,61,0.92) 0%, rgba(22,35,61,0) 100%);
          color: #fff6e8;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .video-caption-bar h4 {
          font-family: 'Yatra One', cursive;
          font-size: 18px;
          margin: 0;
        }
        .video-caption-bar p {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--saffron);
          margin: 2px 0 0;
        }
        .video-play-badge {
          width: 46px; height: 46px; border-radius: 50%;
          background: var(--saffron);
          color: var(--indigo);
          display: flex; align-items: center; justify-content: center;
          flex: none;
          box-shadow: 0 0 0 6px rgba(244,169,59,0.18);
        }
        .video-note {
          text-align: center;
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: #6b6258;
          margin: 16px auto 0;
          max-width: 560px;
        }

        /* ---------- MOBILE PREVIEW ---------- */
        .sp-mobile-section {
          background: linear-gradient(180deg, var(--indigo) 0%, #2c3f63 100%);
          padding: clamp(56px, 9vw, 110px) clamp(18px, 5vw, 56px);
          color: var(--cream-soft);
        }
        .mobile-preview-wrap {
          display: flex;
          justify-content: center;
        }
        .phone-frame {
          width: 290px;
          border-radius: 38px;
          background: #0f1626;
          padding: 14px;
          box-shadow: 0 30px 70px -20px rgba(0,0,0,0.6);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .phone-screen {
          background: var(--cream);
          border-radius: 26px;
          overflow: hidden;
          font-family: 'Hind', sans-serif;
        }
        .phone-statusbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px 4px;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          color: var(--indigo);
          background: var(--cream);
        }
        .phone-hero {
          background: linear-gradient(165deg, #16233D 0%, #4A3A45 42%, #C8593A 78%, #F4A93B 100%);
          color: #fff6e8;
          padding: 22px 18px 40px;
          position: relative;
          overflow: hidden;
        }
        .phone-hero .sp-hero-rays {
          height: 70%;
          opacity: 0.9;
        }
        .phone-brand {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          margin-bottom: 22px;
          position: relative;
          z-index: 1;
        }
        .phone-headline {
          font-family: 'Yatra One', cursive;
          font-size: 30px;
          margin: 0 0 6px;
          position: relative;
          z-index: 1;
          background: linear-gradient(95deg, #FFF3DC 0%, #FCD98A 55%, #F4A93B 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .phone-tagline {
          font-size: 12px;
          max-width: 200px;
          color: rgba(251,241,225,0.85);
          margin: 0 0 16px;
          position: relative;
          z-index: 1;
        }
        .phone-btn {
          display: inline-block;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 600;
          padding: 9px 18px;
          border-radius: 999px;
          background: var(--saffron);
          color: var(--indigo);
          position: relative;
          z-index: 1;
        }
        .phone-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          background: var(--indigo);
          color: #fff6e8;
          margin: -24px 14px 0;
          border-radius: 14px;
          position: relative;
          z-index: 2;
          overflow: hidden;
        }
        .phone-stat {
          padding: 12px;
          text-align: center;
          border-right: 1px solid rgba(217,168,87,0.22);
          border-bottom: 1px solid rgba(217,168,87,0.22);
        }
        .phone-stat:nth-child(2n) { border-right: none; }
        .phone-stat:nth-last-child(-n+2) { border-bottom: none; }
        .phone-stat-num {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 15px;
          color: var(--saffron);
          margin: 0;
        }
        .phone-stat-label {
          font-size: 10px;
          color: rgba(251,241,225,0.75);
          margin: 2px 0 0;
        }
        .phone-pillars {
          padding: 18px 14px 8px;
        }
        .phone-section-title {
          font-family: 'Yatra One', cursive;
          font-size: 16px;
          color: var(--indigo);
          text-align: center;
          margin: 0 0 12px;
        }
        .phone-pillar-row {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--cream-soft);
          border-radius: 12px;
          padding: 10px 12px;
          margin-bottom: 8px;
          border-left: 3px solid var(--saffron);
          box-shadow: 0 6px 16px -12px rgba(43,38,32,0.4);
        }
        .phone-pillar-row.l2 { border-left-color: var(--leaf); }
        .phone-pillar-row.l3 { border-left-color: var(--terracotta); }
        .phone-pillar-row.l4 { border-left-color: var(--indigo); }
        .phone-pillar-icon {
          width: 30px; height: 30px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(244,169,59,0.15); color: var(--saffron-deep); flex: none;
        }
        .phone-pillar-row.l2 .phone-pillar-icon { background: rgba(94,140,79,0.15); color: var(--leaf); }
        .phone-pillar-row.l3 .phone-pillar-icon { background: rgba(200,89,58,0.15); color: var(--terracotta); }
        .phone-pillar-row.l4 .phone-pillar-icon { background: rgba(22,35,61,0.1); color: var(--indigo); }
        .phone-pillar-text p { margin: 0; }
        .phone-pillar-text .t1 { font-size: 12px; font-weight: 600; color: var(--ink); }
        .phone-pillar-text .t2 { font-size: 10px; color: #a39a8c; }
        .phone-navbar {
          display: flex;
          justify-content: space-around;
          padding: 10px 0 16px;
          background: var(--cream-soft);
          border-top: 1px solid #f0e3cc;
          font-family: 'Poppins', sans-serif;
          font-size: 9px;
          color: #a39a8c;
        }
        .phone-navbar .active { color: var(--saffron-deep); font-weight: 600; }
        .mobile-caption {
          text-align: center;
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--saffron);
          margin-top: 24px;
        }

        /* ---------- HERO ART / VIDEO LAYER ---------- */
        .sp-hero-art {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.32;
          mix-blend-mode: luminosity;
        }
        .sp-hero-art .village-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .sp-hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          opacity: 0.4;
        }

        /* ---------- VILLAGE GALLERY ---------- */
        .sp-gallery-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }
        .gallery-card {
          background: var(--cream-soft);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 14px 32px -20px rgba(43, 38, 32, 0.4);
          border: 1px solid #f0e3cc;
          transition: transform 0.2s ease;
        }
        .gallery-card:hover { transform: translateY(-5px); }
        .gallery-card-img {
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }
        .village-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .gallery-caption {
          padding: 12px 14px;
        }
        .gallery-caption .hi {
          font-size: 13.5px;
          font-weight: 600;
          color: var(--indigo);
          margin: 0 0 2px;
        }
        .gallery-caption .en {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          color: #a39a8c;
          margin: 0;
        }
        @media (max-width: 1000px) {
          .sp-gallery-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 620px) {
          .sp-gallery-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* ---------- DESIGN RATIONALE ---------- */
        .rationale-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 36px;
        }
        .rationale-card {
          background: var(--cream-soft);
          border-radius: 18px;
          padding: 22px;
          border: 1px solid #f0e3cc;
        }
        .rationale-card h4 {
          font-family: 'Yatra One', cursive;
          font-size: 18px;
          color: var(--indigo);
          margin: 0 0 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .rationale-card p {
          font-size: 14px;
          color: #6b6258;
          margin: 0;
        }
        .rationale-card .en {
          font-family: 'Poppins', sans-serif;
          font-size: 11.5px;
          color: #a39a8c;
          margin-top: 8px;
          font-style: italic;
        }
        @media (max-width: 760px) {
          .rationale-grid { grid-template-columns: 1fr; }
        }

        /* ---------- FOOTER ---------- */
        .sp-footer {
          background: var(--indigo);
          color: rgba(251, 241, 225, 0.7);
          padding: 48px clamp(18px, 5vw, 56px) 28px;
        }
        .footer-top {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 24px;
          max-width: 1180px;
          margin: 0 auto 28px;
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #fff6e8;
          font-size: 19px;
        }
        .footer-contact {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          font-size: 13px;
          font-family: 'Poppins', sans-serif;
        }
        .footer-contact span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .footer-note {
          max-width: 1180px;
          margin: 0 auto;
          padding-top: 20px;
          border-top: 1px solid rgba(217, 168, 87, 0.2);
          font-size: 12px;
          font-family: 'Poppins', sans-serif;
          line-height: 1.8;
        }
      `}</style>

      {/* ---------- NAV ---------- */}
      <nav className="sp-nav">
        <div className="sp-nav-brand">
          <SunMark size={38} />
          <div>
            <div className="sp-nav-brand-text sp-display">सूर्यपुरा</div>
            <span className="sp-nav-brand-sub">Gram Vikas Portal</span>
          </div>
        </div>
        <div className="sp-nav-links">
          <a href="#pillars">योजनाएं</a>
          <a href="#gallery">तस्वीरें</a>
          <a href="#leader">नेता</a>
          <a href="#social">समाचार</a>
          <a href="#mobile">मोबाइल ऐप</a>
        </div>
        <a className="sp-nav-cta" href="#contact">
          शिकायत दर्ज करें
        </a>
      </nav>

      {/* ---------- HERO ---------- */}
      <header className="sp-hero">
        {MEDIA.heroVideoUrl ? (
          <video
            className="sp-hero-video"
            src={MEDIA.heroVideoUrl}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <div className="sp-hero-art">
            <VillageArt
              type="fields"
              src={MEDIA.gallery.fields}
              label="सूर्योदय व खेत"
            />
          </div>
        )}
        <SunRays className="sp-hero-rays" />
        <div className="sp-hero-inner">
          <div>
            <p className="sp-eyebrow">
              ग्राम विकास पोर्टल · सूर्यपुरा पंचायत, मध्य प्रदेश
            </p>
            <h1 className="sp-headline sp-display">सूर्यपुरा</h1>
            <p className="sp-headline-en">
              Suryapura · A New Sunrise for Rural India
            </p>
            <p className="sp-tagline">
              हर सुबह एक नया सूर्योदय, हर गांव के लिए एक नया भविष्य
            </p>
            <p className="sp-hero-text">
              शिक्षा से सशक्तिकरण, सड़कों से जुड़ाव, खेतों से समृद्धि और डिजिटल
              पहचान से सम्मान — यही है सूर्यपुरा ग्राम विकास पोर्टल का संकल्प।
              हर योजना, हर अपडेट, अब आपकी जेब में।
            </p>
            <div className="sp-cta-row">
              <a className="btn btn-primary" href="#pillars">
                विकास यात्रा देखें <ArrowRight size={16} />
              </a>
              <a className="btn btn-secondary" href="#leader">
                ग्राम विकास दूत से जुड़ें
              </a>
            </div>
          </div>

          <div className="sp-leader-card">
            <div className="leader-avatar">
              <User size={52} strokeWidth={1.6} />
            </div>
            <p className="leader-name sp-display">अर्जुन सिंह तोमर</p>
            <p className="leader-role">ग्राम विकास दूत, सूर्यपुरा</p>
            <p className="leader-quote">
              "गांव तभी आगे बढ़ता है जब हर घर की रोशनी, हर बच्चे की किताब और हर
              किसान का खेत — एक साथ चमकें।"
            </p>
          </div>
        </div>
      </header>

      {/* ---------- STATS ---------- */}
      <section className="sp-stats">
        {stats.map((s) => (
          <div className="sp-stat" key={s.label}>
            <p className="sp-stat-num">{s.num}</p>
            <p className="sp-stat-label">{s.label}</p>
          </div>
        ))}
      </section>

      {/* ---------- PILLARS ---------- */}
      <section className="sp-section" id="pillars">
        <div className="sp-section-head">
          <p className="sp-section-eyebrow">चार स्तंभ · एक सूर्यपुरा</p>
          <h2 className="sp-section-title">विकास के चार स्तंभ</h2>
          <p className="sp-section-sub">
            शिक्षा, किसान कल्याण, बुनियादी ढांचा और डिजिटल शासन — सूर्यपुरा के
            विकास मॉडल की चार नींव, जो हर परिवार तक पहुंचती हैं।
          </p>
        </div>
        <div className="sp-pillars-grid">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div className={`pillar-card tone-${p.tone}`} key={p.tag}>
                <div className="pillar-icon">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <p className="pillar-tag">{p.tag}</p>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.desc}</p>
                <p className="pillar-stat">{p.stat}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- LEADER SPOTLIGHT ---------- */}
      <section className="sp-section" id="leader">
        <div className="sp-spotlight">
          <div className="spotlight-photo-wrap">
            <div className="spotlight-ring" />
            <div className="spotlight-photo">
              <User size={88} strokeWidth={1.4} />
            </div>
          </div>
          <div>
            <p className="spotlight-eyebrow">विकास का संकल्प</p>
            <Quote
              size={28}
              style={{ color: "var(--saffron)", marginBottom: 8 }}
            />
            <p className="spotlight-quote">
              "जब मैं छोटा था, तो हमारे गांव में स्कूल जाने के लिए कच्ची सड़क पर
              5 किलोमीटर पैदल चलना पड़ता था। आज सूर्यपुरा का हर बच्चा पक्की सड़क
              से स्कूल जाता है, हर किसान का डेटा डिजिटल है, और हर परिवार की अपनी
              पहचान है। यह सिर्फ शुरुआत है — सूर्यपुरा अब रुकेगा नहीं।"
            </p>
            <p className="spotlight-name">अर्जुन सिंह तोमर</p>
            <p className="spotlight-role">
              ग्राम विकास दूत · सूर्यपुरा ग्राम पंचायत
            </p>
          </div>
        </div>
      </section>

      {/* ---------- VILLAGE GALLERY ---------- */}
      <section className="sp-section">
        <div className="sp-section-head">
          <p className="sp-section-eyebrow">गांव की झलकियां</p>
          <h2 className="sp-section-title">सूर्यपुरा का रोज़ का जीवन</h2>
          <p className="sp-section-sub">
            खेत, सड़क, स्कूल और पंचायत — सूर्यपुरा की बदलती तस्वीर, एक नज़र में।
          </p>
        </div>
        <div className="sp-gallery-grid">
          <div className="gallery-card">
            <div className="gallery-card-img">
              <VillageArt
                type="fields"
                src={MEDIA.gallery.fields}
                label="सूर्योदय व खेत"
              />
            </div>
            <div className="gallery-caption">
              <p className="hi">सूर्योदय के साथ सूर्यपुरा के खेत</p>
              <p className="en">Sunrise over Suryapura's fields</p>
            </div>
          </div>
          <div className="gallery-card">
            <div className="gallery-card-img">
              <VillageArt
                type="farmer"
                src={MEDIA.gallery.farmer}
                label="मेहनतकश किसान"
              />
            </div>
            <div className="gallery-caption">
              <p className="hi">मेहनतकश किसान, समृद्ध भविष्य</p>
              <p className="en">Hardworking farmers, a richer future</p>
            </div>
          </div>
          <div className="gallery-card">
            <div className="gallery-card-img">
              <VillageArt
                type="road"
                src={MEDIA.gallery.road}
                label="नई सड़क"
              />
            </div>
            <div className="gallery-caption">
              <p className="hi">हर गांव तक पक्की सड़क</p>
              <p className="en">Paved roads to every village</p>
            </div>
          </div>
          <div className="gallery-card">
            <div className="gallery-card-img">
              <VillageArt
                type="school"
                src={MEDIA.gallery.school}
                label="स्मार्ट क्लासरूम"
              />
            </div>
            <div className="gallery-caption">
              <p className="hi">स्मार्ट क्लासरूम में पढ़ाई</p>
              <p className="en">Learning in smart classrooms</p>
            </div>
          </div>
          <div className="gallery-card">
            <div className="gallery-card-img">
              <VillageArt
                type="panchayat"
                src={MEDIA.gallery.panchayat}
                label="डिजिटल पंचायत भवन"
              />
            </div>
            <div className="gallery-caption">
              <p className="hi">डिजिटल पंचायत भवन</p>
              <p className="en">A digitally-enabled panchayat bhavan</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SOCIAL MEDIA POSTS ---------- */}
      <section className="sp-section" id="social">
        <div className="sp-section-head">
          <p className="sp-section-eyebrow">सोशल मीडिया अपडेट</p>
          <h2 className="sp-section-title">
            सूर्यपुरा की कहानी, गांव की ज़ुबानी
          </h2>
          <p className="sp-section-sub">
            हर बड़ी उपलब्धि की झलक — सीधे @suryapura_vikas के पन्ने से।
          </p>
        </div>
        <div className="social-grid">
          {/* Post 1 */}
          <div className="social-card">
            <div className="social-card-header">
              <div className="social-avatar">
                <SunMark size={28} />
              </div>
              <div>
                <p className="social-handle">@suryapura_vikas</p>
                <p className="social-handle-sub">सूर्यपुरा ग्राम पंचायत</p>
              </div>
            </div>
            <div className="social-card-image v1">
              <VillageArt
                type="road"
                src={MEDIA.gallery.road}
                label="नई सड़क"
              />
              <Construction size={36} strokeWidth={1.8} />
              <h3 className="sp-display">सड़क का सपना, साकार!</h3>
              <p>Suryapura–Rampur Road · 12 KM</p>
            </div>
            <div className="social-card-body">
              <div className="social-actions">
                <Heart size={20} />
                <MessageCircle size={20} />
                <Send size={20} />
              </div>
              <p className="social-caption">
                <b>आज का दिन ऐतिहासिक है!</b> सूर्यपुरा–रामपुर मार्ग का उद्घाटन
                हुआ। अब बारिश में भी स्कूल, अस्पताल और मंडी तक पहुंचना आसान — 12
                गांवों के 8,000+ लोगों को सीधा लाभ। 🛣️🌅
              </p>
              <p className="social-hashtags">
                #सूर्यपुरा_विकास #नई_सड़क #ग्राम_पंचायत #डिजिटल_इंडिया
              </p>
            </div>
          </div>

          {/* Post 2 */}
          <div className="social-card">
            <div className="social-card-header">
              <div className="social-avatar">
                <SunMark size={28} />
              </div>
              <div>
                <p className="social-handle">@suryapura_vikas</p>
                <p className="social-handle-sub">सूर्यपुरा ग्राम पंचायत</p>
              </div>
            </div>
            <div className="social-card-image v2">
              <Fingerprint size={44} strokeWidth={1.6} />
              <h3 className="sp-display">डिजिटल पहचान शिविर</h3>
              <p>Camp Date · 18 June 2026</p>
            </div>
            <div className="social-card-body">
              <div className="social-actions">
                <Heart size={20} />
                <MessageCircle size={20} />
                <Send size={20} />
              </div>
              <p className="social-caption">
                <b>📢 सूचना:</b> इस शनिवार पंचायत भवन में डिजिटल पहचान शिविर
                आयोजित होगा। अपना आधार, राशन कार्ड और परिवार पहचान पत्र लेकर आएं
                — मौके पर ही बनेगा आपका ई-कार्ड। सभी ग्रामवासियों से उपस्थिति की
                अपील।
              </p>
              <p className="social-hashtags">
                #डिजिटल_पहचान #सूर्यपुरा #ई_गवर्नेंस #गांव_की_आवाज़
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- VILLAGE PHOTO GALLERY ---------- */}
      <section className="sp-section" id="gallery">
        <div className="sp-section-head">
          <p className="sp-section-eyebrow">तस्वीरों में सूर्यपुरा</p>
          <h2 className="sp-section-title">गांव की झलकियाँ</h2>
          <p className="sp-section-sub">
            खेतों की हरियाली, स्कूल की किलकारियां और नई सड़कों की रौनक —
            सूर्यपुरा की रोज़मर्रा की तस्वीरें।
          </p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-card">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=70"
              alt="सूर्यपुरा के खेतों का सूर्योदय दृश्य"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <p className="gallery-tag">नया सवेरा</p>
              <h3 className="gallery-title sp-display">
                सूर्यपुरा का सूर्योदय
              </h3>
            </div>
          </div>
          <div className="gallery-card">
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=70"
              alt="खेत में काम करता किसान परिवार"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <p className="gallery-tag">किसान कल्याण</p>
              <h3 className="gallery-title sp-display">मिट्टी से समृद्धि तक</h3>
            </div>
          </div>
          <div className="gallery-card">
            <img
              src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=70"
              alt="गांव की नई पक्की सड़क"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <p className="gallery-tag">बुनियादी ढांचा</p>
              <h3 className="gallery-title sp-display">
                हर गांव से जुड़ी सड़क
              </h3>
            </div>
          </div>
          <div className="gallery-card">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=70"
              alt="गांव के स्कूल में पढ़ते बच्चे"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <p className="gallery-tag">शिक्षा</p>
              <h3 className="gallery-title sp-display">हर बच्चे का स्कूल</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- VIDEO SHOWCASE ---------- */}
      <section className="sp-section" id="video">
        <div className="sp-section-head">
          <p className="sp-section-eyebrow">वीडियो</p>
          <h2 className="sp-section-title">सूर्यपुरा की विकास यात्रा</h2>
          <p className="sp-section-sub">
            2 मिनट में देखें — कैसे शिक्षा, सड़क, किसान कल्याण और डिजिटल पहचान
            ने सूर्यपुरा की तस्वीर बदली।
          </p>
        </div>
        <div className="video-wrap">
          <video
            poster="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=70"
            controls
            preload="none"
          >
            {/* असली वीडियो यहाँ जोड़ें: */}
            <source src="/videos/suryapura-vikas-yatra.mp4" type="video/mp4" />
          </video>
          <div className="video-caption-bar">
            <div className="video-play-badge">
              <Play size={20} fill="currentColor" />
            </div>
            <div>
              <h4 className="sp-display">विकास यात्रा 2025–26</h4>
              <p>Suryapura Vikas Yatra · 02:14</p>
            </div>
          </div>
        </div>
        <p className="video-note">
          <Video size={14} style={{ verticalAlign: "-2px", marginRight: 6 }} />
          डेमो के लिए poster image दिखाई गई है। असली प्रोजेक्ट में यहाँ ड्रोन
          फुटेज, पंचायत बैठक या लाभार्थियों के interviews वाला वीडियो file
          (.mp4) या YouTube/Vimeo embed जोड़ा जा सकता है।
        </p>
      </section>

      {/* ---------- MOBILE VIEW PREVIEW ---------- */}
      <section className="sp-mobile-section" id="mobile">
        <div className="sp-section-head" style={{ color: "#fff6e8" }}>
          <p className="sp-section-eyebrow" style={{ color: "var(--saffron)" }}>
            मोबाइल व्यू
          </p>
          <h2 className="sp-section-title" style={{ color: "#fff6e8" }}>
            हर किसी की जेब में सूर्यपुरा
          </h2>
          <p
            className="sp-section-sub"
            style={{ color: "rgba(251,241,225,0.75)" }}
          >
            पोर्टल पूरी तरह मोबाइल-फ्रेंडली है — कम इंटरनेट स्पीड में भी आसानी
            से खुलता है।
          </p>
        </div>
        <div className="mobile-preview-wrap">
          <div className="phone-frame">
            <div className="phone-screen">
              <div className="phone-statusbar">
                <span>9:41</span>
                <span style={{ display: "flex", gap: 6 }}>
                  <Signal size={12} /> <Wifi size={12} />{" "}
                  <BatteryFull size={12} />
                </span>
              </div>
              <div className="phone-hero">
                <SunRays className="sp-hero-rays" count={14} />
                <div className="phone-brand">
                  <SunMark size={26} />
                  <span className="sp-display">सूर्यपुरा</span>
                </div>
                <h3 className="phone-headline sp-display">नया सूर्योदय</h3>
                <p className="phone-tagline">
                  हर गांव के लिए नया भविष्य — शिक्षा, सड़क, किसान और डिजिटल
                  पहचान।
                </p>
                <span className="phone-btn">विकास यात्रा देखें</span>
              </div>
              <div className="phone-stats">
                <div className="phone-stat">
                  <p className="phone-stat-num">42 किमी</p>
                  <p className="phone-stat-label">नई सड़कें</p>
                </div>
                <div className="phone-stat">
                  <p className="phone-stat-num">1,200+</p>
                  <p className="phone-stat-label">डिजिटल पहचान</p>
                </div>
                <div className="phone-stat">
                  <p className="phone-stat-num">08</p>
                  <p className="phone-stat-label">स्मार्ट स्कूल</p>
                </div>
                <div className="phone-stat">
                  <p className="phone-stat-num">3,500</p>
                  <p className="phone-stat-label">किसान परिवार</p>
                </div>
              </div>
              <div className="phone-pillars">
                <h4 className="phone-section-title">विकास के स्तंभ</h4>
                <div className="phone-pillar-row">
                  <div className="phone-pillar-icon">
                    <GraduationCap size={15} />
                  </div>
                  <div className="phone-pillar-text">
                    <p className="t1">शिक्षा</p>
                    <p className="t2">हर बच्चे के हाथ में किताब</p>
                  </div>
                </div>
                <div className="phone-pillar-row l2">
                  <div className="phone-pillar-icon">
                    <Wheat size={15} />
                  </div>
                  <div className="phone-pillar-text">
                    <p className="t1">किसान कल्याण</p>
                    <p className="t2">मिट्टी से समृद्धि तक</p>
                  </div>
                </div>
                <div className="phone-pillar-row l3">
                  <div className="phone-pillar-icon">
                    <Construction size={15} />
                  </div>
                  <div className="phone-pillar-text">
                    <p className="t1">सड़क व बुनियादी ढांचा</p>
                    <p className="t2">हर गली, हर शहर से जुड़ी</p>
                  </div>
                </div>
                <div className="phone-pillar-row l4">
                  <div className="phone-pillar-icon">
                    <Landmark size={15} />
                  </div>
                  <div className="phone-pillar-text">
                    <p className="t1">पंचायत व डिजिटल पहचान</p>
                    <p className="t2">पारदर्शी पंचायत</p>
                  </div>
                </div>
              </div>
              <div className="phone-navbar">
                <span className="active">होम</span>
                <span>योजनाएं</span>
                <span>नेता</span>
                <span>शिकायत</span>
              </div>
            </div>
          </div>
        </div>
        <p className="mobile-caption">320px – 768px पर पूरी तरह रिस्पॉन्सिव</p>
      </section>

      {/* ---------- DESIGN RATIONALE ---------- */}
      <section className="sp-section">
        <div className="sp-section-head">
          <p className="sp-section-eyebrow">डिज़ाइन नोट</p>
          <h2 className="sp-section-title">डिज़ाइन ऐसा क्यों बनाया?</h2>
          <p className="sp-section-sub">
            यह design सिर्फ सुंदर दिखने के लिए नहीं, बल्कि "सूर्यपुरा" नाम की
            भावना और ग्रामीण भारत के असली अनुभव को digital रूप में दिखाने के लिए
            बनाया गया है।
          </p>
        </div>
        <div className="rationale-grid">
          <div className="rationale-card">
            <h4>
              <Sun size={18} style={{ color: "var(--saffron-deep)" }} />{" "}
              सूर्योदय थीम (Color & Signature)
            </h4>
            <p>
              "सूर्यपुरा" नाम से ही सूर्य/सूर्योदय का भाव आता है, इसलिए hero
              section में रात के गहरे नीले (इंडिगो) से सुबह के सुनहरे रंग
              (saffron) में बदलता gradient रखा गया है — यह "नए सवेरे" और "नई
              शुरुआत" का प्रतीक है, जो ग्राम विकास की भावना से सीधा जुड़ता है।
              यही sunrise-rays motif पूरे पोर्टल में दोहराया गया है, जिससे एक
              पहचान बनती है।
            </p>
            <p className="en">
              A dawn gradient (indigo → saffron) ties the name "Suryapura" to
              the emotional idea of a new beginning, repeated as a signature ray
              motif.
            </p>
          </div>
          <div className="rationale-card">
            <h4>
              <Sparkles size={18} style={{ color: "var(--terracotta)" }} />{" "}
              टाइपोग्राफी (Typography)
            </h4>
            <p>
              बड़े headings के लिए "Yatra One" फॉन्ट चुना गया है, जो देवनागरी
              में त्योहारी और गर्मजोशी वाला भाव देता है — जैसे गांव के बैनर और
              स्वागत-द्वार पर लिखी इबारत। बाकी सारा पढ़ने वाला टेक्स्ट "Hind"
              फॉन्ट में है, जो साफ़ और मोबाइल पर आसानी से पढ़ा जा सकता है।
              अंग्रेज़ी लेबल और आंकड़ों के लिए "Poppins" का उपयोग प्रोफेशनल टच
              देता है।
            </p>
            <p className="en">
              A festive Devanagari display face for emotion, a clean Devanagari
              body face for readability, and Poppins for numbers/labels keeps it
              both warm and credible.
            </p>
          </div>
          <div className="rationale-card">
            <h4>
              <Landmark size={18} style={{ color: "var(--indigo)" }} /> चार
              स्तंभों वाला Layout
            </h4>
            <p>
              शिक्षा, किसान, सड़क और पंचायत/डिजिटल पहचान — इन चार विषयों को
              बराबर महत्व देने के लिए grid-cards का उपयोग किया गया है, हर कार्ड
              का रंग उसके विषय से जुड़ा है (हरा = खेती, टेराकोटा = सड़क/मिट्टी,
              इंडिगो = शासन)। इससे योजनाओं को आसानी से पहचानना और याद रखना आसान
              हो जाता है।
            </p>
            <p className="en">
              Color-coded pillar cards make the four themes instantly scannable
              and memorable, even for first-time or low-literacy users.
            </p>
          </div>
          <div className="rationale-card">
            <h4>
              <User size={18} style={{ color: "var(--saffron-deep)" }} /> Hero
              Character का इमोशनल कनेक्ट
            </h4>
            <p>
              पोर्टल के केंद्र में एक "ग्राम विकास दूत" को रखा गया है, जिसकी
              कहानी और quote लोगों से व्यक्तिगत जुड़ाव बनाते हैं। एक leader का
              चेहरा और आवाज़ किसी भी सरकारी योजना को ज़्यादा भरोसेमंद और इंसानी
              बनाती है — खासकर ग्रामीण दर्शकों के लिए।
            </p>
            <p className="en">
              A relatable human ambassador builds trust and emotional connection
              — essential for rural government communication.
            </p>
          </div>
          <div className="rationale-card">
            <h4>
              <Phone size={18} style={{ color: "var(--leaf)" }} /> मोबाइल-फर्स्ट
              सोच
            </h4>
            <p>
              ज़्यादातर ग्रामीण उपयोगकर्ता मोबाइल से इंटरनेट इस्तेमाल करते हैं,
              इसलिए layout को single-column, बड़े बटन, बड़े फॉन्ट और कम loading
              वाले graphics के साथ डिज़ाइन किया गया है। Mobile preview अलग से
              दिखाया गया है ताकि साफ़ हो कि छोटे स्क्रीन पर भी अनुभव वैसा ही
              प्रीमियम रहे।
            </p>
            <p className="en">
              Large tap targets, single-column stacking and lightweight graphics
              ensure the experience holds up on entry-level smartphones.
            </p>
          </div>
          <div className="rationale-card">
            <h4>
              <MessageCircle size={18} style={{ color: "var(--terracotta)" }} />{" "}
              सोशल मीडिया से जुड़ाव
            </h4>
            <p>
              आज ज़्यादातर ग्रामीण विकास की खबरें Facebook/Instagram से ही फैलती
              हैं। इसलिए वेबसाइट में असली पोस्ट जैसे mockups जोड़े गए हैं, ताकि
              पोर्टल सिर्फ एक "सरकारी साइट" न लगे, बल्कि एक जीती-जागती community
              की कहानी लगे।
            </p>
            <p className="en">
              Social-style post mockups make the portal feel like an active
              community story, not a static government page.
            </p>
          </div>
          <div className="rationale-card">
            <h4>
              <Video size={18} style={{ color: "var(--leaf)" }} /> असली तस्वीरें
              व वीडियो
            </h4>
            <p>
              illustration-only design भावनात्मक रूप से दूर लग सकता है, इसलिए
              hero background, gallery और video section में असली खेत, सड़क,
              स्कूल और सूर्योदय की rural-India stock photography जोड़ी गई है —
              taki पोर्टल "कल्पना" के बजाय "ज़मीनी हकीकत" जैसा लगे। Video
              section की संरचना तैयार है, बस असली drone/interview footage डालने
              की जरूरत है।
            </p>
            <p className="en">
              Real rural-India photography (fields, roads, schools, sunrise)
              grounds the emotional sunrise theme in reality; the video section
              is wired up and ready for real footage.
            </p>
          </div>
        </div>
      </section>
      <footer className="sp-footer" id="contact">
        <div className="footer-top">
          <div className="footer-brand">
            <SunMark size={32} />
            <span className="sp-display">सूर्यपुरा ग्राम विकास पोर्टल</span>
          </div>
          <div className="footer-contact">
            <span>
              <MapPin size={14} /> सूर्यपुरा पंचायत भवन, मध्य प्रदेश
            </span>
            <span>
              <Phone size={14} /> +91 98XXX-XXXXX
            </span>
            <span>
              <Mail size={14} /> info@suryapura.gov.in (fictional)
            </span>
          </div>
        </div>
        <div className="footer-note">
          © 2026 सूर्यपुरा ग्राम विकास पोर्टल — यह एक fictional / demo प्रोजेक्ट
          है, जो rural development concept दिखाने के लिए design पोर्टफोलियो के
          तौर पर बनाया गया है। सभी नाम, आंकड़े और तस्वीरें कल्पित (illustrative)
          हैं।
        </div>
      </footer>
    </div>
  );
}

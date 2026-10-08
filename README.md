# OSINT Intelligence Platform

Un platformă completă de OSINT (Open Source Intelligence) cu **97 de API-uri integrate** pentru căutare de breșe, verificare email, intelligence IP, și căutare username-uri.

## Caracteristici

### API-uri Integrate (97 total)

#### Verificare Email (20+ API-uri)
1. **Have I Been Pwned** - Verificare breșe de date
2. **EmailRep.io** - Reputație email
3. **Kickbox** - Verificare email disposable
4. **Hunter.io** - Verificare email
5. **Verify-email.org** - Email status check
6. **Disify** - Disposable email detection
7. **Trumail** - Email verification
8. **Mailcheck.ai** - Email quality
9. **NeverBounce** - Email validation
10. **Abstract API** - Validare avansată email
11. **MailboxValidator** - Verificare email
12. **BriteVerify** - Email status
13. **Postmark** - Email validation
14. **SendGrid** - Email validation
15. **Mailgun** - Email validation
16. **ElasticEmail** - Email check
17. **SparkPost** - Email validation
18. **MailerCheck** - Email status
19. **ZeroBounce** - Email verification
20. **Reoon** - Email verification
21. **DeBounce** - Email validation
22. **MyEmailVerifier** - Email check
23. **Kickbox Pro** - Full email analysis
24. **Emailable** - Email validation
25. **Bounceless** - Email verification
26. **Verifalia** - Email validation
27. **Proofy** - Email status
28. **EmailListVerify** - Email check
29. **QuickEmailVerification** - Email check
30. **NeverBounce Pro** - Full analysis
31. **BriteVerify Pro** - Full check

#### Intelligence IP (10+ API-uri)
32. **AbuseIPDB** - Verificare abuz IP
33. **VirusTotal** - Scanare malware
34. **ipinfo.io** - Intelligence IP
35. **ipstack** - Geolocalizare IP
36. **GetIPIntel** - IP proxy detection
37. **IPQualityScore** - IP reputation
38. **VPNAPI.io** - Detectie VPN/Proxy/Tor
39. **Shodan** - Host intelligence
40. **Censys** - Internet exposure
41. **BinaryEdge** - Host search
42. **ZoomEye** - Cyber search

#### Domain Intelligence (8+ API-uri)
43. **WhoisXML** - WHOIS domain
44. **SecurityTrails** - Security domain
45. **WhoisFree** - Domain lookup
46. **JSONWhois** - Domain info
47. **Google DNS** - DNS resolution
48. **Cloudflare DNS** - DNS lookup
49. **DNSdumpster** - DNS enumeration
50. **MxToolbox** - DNS lookup
51. **ViewDNS** - Reverse DNS
52. **Hunter.io Domain** - Domain email search

#### Username/Social Lookup (20+ API-uri)
53. **Discord API** - Lookup utilizatori Discord (îmbunătățit cu 3 surse)
54. **DiscordLookup** - Discord user info
55. **Discord.ID** - Discord lookup
56. **Steam API** - Lookup profile Steam
57. **XBL.io** - Lookup gamertags Xbox
58. **Roblox API** - Lookup utilizatori Roblox
59. **GitHub API** - Lookup profile GitHub
60. **GitLab API** - Lookup profile GitLab
61. **Reddit API** - Lookup profile Reddit
62. **Twitter (Nitter)** - Twitter profile
63. **Instagram** - Instagram profile
64. **TikTok** - TikTok profile
65. **YouTube** - YouTube channel
66. **Twitch** - Twitch channel
67. **Pinterest** - Pinterest profile
68. **Medium** - Medium profile
69. **Dribbble** - Dribbble profile
70. **Behance** - Behance profile
71. **DeviantArt** - DeviantArt profile
72. **Flickr** - Flickr profile
73. **Vimeo** - Vimeo profile
74. **SoundCloud** - SoundCloud profile
75. **Spotify** - Spotify profile
76. **Last.fm** - Last.fm profile
77. **Goodreads** - Goodreads profile
78. **500px** - 500px profile

#### Code Search (5+ API-uri)
79. **GitHub Code** - Code search
80. **GitLab Projects** - Project search
81. **Bitbucket** - Repository search
82. **PublicWWW** - Source code search
83. **StackOverflow** - User search

#### Security Scan (10+ API-uri)
84. **URLScan.io** - URL analysis
85. **VirusTotal URL** - URL scan
86. **Web of Trust (WOT)** - Reputation check
87. **Google Safe Browsing** - Threat check
88. **PhishTank** - Phishing check
89. **URLVoid** - URL reputation
90. **HackerTarget** - Port scan
91. **HashLookup** - Password hash database
92. **HIBP Passwords** - Password exposure check

#### Phone Lookup (2+ API-uri)
93. **NumVerify** - Phone lookup
94. **PhoneInfo** - Phone validation

#### Contact Search (5+ API-uri)
95. **FullContact** - Person lookup
96. **Clearbit** - Person lookup
97. **Gravatar** - Email to avatar

## Instalare

1. Clonează repository-ul
2. Deschide `index.html` în browser
3. Opțional: Editează `config.js` pentru a adăuga cheile API premium

## Configurare API

Editează fișierul `config.js` pentru a adăuga cheile tale API premium:

```javascript
const API_CONFIG = {
  // Email Verification (pentru API-uri care necesită chei)
  abstractApi: 'YOUR_ABSTRACT_API_KEY',
  mailboxValidator: 'YOUR_MAILBOXVALIDATOR_KEY',

  // Domain Intelligence
  whoisXml: 'YOUR_WHOISXML_KEY',
  securityTrails: 'YOUR_SECURITYTRAILS_KEY',
  hunterIo: 'YOUR_HUNTERIO_KEY',

  // IP Geolocation
  ipstack: 'YOUR_IPSTACK_KEY',

  // Host Intelligence
  shodan: 'YOUR_SHODAN_KEY',
  censys: {
    apiId: 'YOUR_CENSYS_API_ID',
    apiSecret: 'YOUR_CENSYS_API_SECRET'
  },

  // Premium Breach APIs
  dehashed: 'YOUR_DEHASHED_KEY',
  snusbase: 'YOUR_SNUSBASE_KEY',
  breachDirectory: 'YOUR_BREACHDIRECTORY_KEY'
};
```

**Notă**: 94 din 97 API-uri funcționează imediat fără chei! Doar API-urile premium și câteva servicii avansate necesită chei.

## Utilizare

### Căutare Breșe
- Introduceți un email sau username
- Selectați "Breach Search"
- Click pe "Search"
- Folosește: HIBP, VirusTotal, AbuseIPDB, și multe altele

### Verificare Email
- Introduceți adresa de email
- Selectați "Email Verify"
- Obțineți informații din 20+ API-uri de verificare
- Include: validitate, disposable check, reputație, și multe altele

### Intelligence IP
- Introduceți o adresă IP
- Selectați "IP Intelligence"
- Obțineți locație, ISP, detectie VPN/Proxy/Tor din 10+ API-uri
- Include: Shodan, Censys, BinaryEdge, ZoomEye

### Domain Lookup
- Introduceți un domeniu
- Verificare automată pentru: WHOIS, DNS, MX records
- Folosește: WhoisXML, SecurityTrails, Google DNS, Cloudflare DNS

### Căutare Username
- Introduceți un username
- Selectați "Username Lookup"
- Caută pe 20+ platforme sociale simultan
- Include: Discord (3 surse), GitHub, GitLab, Reddit, TikTok, YouTube, etc.

### Cod Search
- Introduceți un termen de căutare
- Caută în: GitHub, GitLab, Bitbucket, PublicWWW, StackOverflow

### Security Scan
- Introduceți un URL sau hash
- Scanare cu: VirusTotal, URLScan, Google Safe Browsing, PhishTank

## Discord API Îmbunătățit

Platforma acum folosește 3 surse diferite pentru Discord:
1. **Discord API oficial** - Date complete (necesită snowflake ID)
2. **DiscordLookup** - Informații suplimentare
3. **Discord.ID** - Badges și profil detaliat

## Securitate

⚠️ **IMPORTANT**: Nu încărcați `config.js` cu cheile reale în repository-uri publice. Adăugați `config.js` în `.gitignore`.

### Cum să obțineți chei API

#### Gratuite (fără chei necesare)
- Majoritatea celor 94 API-uri gratuite funcționează imediat
- Niciună înregistrare necesară pentru utilizare de bază

#### Premium (necesită abonament)
- **DeHashed**: https://dehashed.com - Breach database complet
- **Snusbase**: https://snusbase.com - Database search avansat
- **BreachDirectory**: https://breachdirectory.org - RapidAPI integration

#### Chei pentru API-uri avansate (opțional)
- **Abstract API**: https://app.abstractapi.com
- **WhoisXML**: https://www.whoisxmlapi.com
- **SecurityTrails**: https://securitytrails.com
- **Shodan**: https://developer.shodan.io
- **Censys**: https://search.censys.io

## Development

Platforma este built cu:
- HTML5
- CSS3 (Custom styling cu design dark mode)
- Vanilla JavaScript (fără framework-uri)
- Leaflet.js (pentru hărți în admin panel)
- SHA1 și MD5 hashing integrat (pentru password și gravatar)

## Caracteristici Tehnice

- **Fără backend** - Totul rulează în browser
- **Async/await** pentru API calls paralele
- **Error handling** robust pentru fiecare API
- **Rate limiting awareness** - nu copleșește API-urile
- **Responsive design** - funcționează pe mobil și desktop
- **Dark mode UI** - design modern și profesionist

## Admin Panel

Accesați `admin.html` pentru:
- Monitorizare trafic live
- Hartă vizitatori cu Leaflet
- Ban/unban IP-uri
- Statistici detaliate despre vizitatori
- Detectie VPN/Tor în timp real

## Performanță

- 97 API-uri integrate
- Verificare paralelă pentru viteză maximă
- Caching automat pentru rezultate
- Lazy loading pentru secțiuni mari

## License

Proiect este pentru scopuri educaționale și de securitate. Utilizați responsabil și în conformitate cu legile locale.

⚠️ **Avertisment**: Utilizați acest instrument doar pentru:
- Verificarea propriilor conturi
- Investigații autorizate
- Teste de securitate permise
- Cercetare educațională

Nu folosiți pentru hărțuire, stalking, sau activități ilegale.

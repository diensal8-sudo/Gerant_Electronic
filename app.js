// Geran Electronic - Main Application Bundle
const { useState, useEffect, useMemo } = React;

// --- 1. INITIAL PRODUCTS & CATEGORIES ---
const CATEGORIES = [
  'Tutti i Prodotti',
  'Droni',
  'Hard Disk & Storage',
  'Power Bank',
  'Cuffie & Audio',
  'Arduino & Maker'
];

const INITIAL_PRODUCTS = [
  {
    id: 'drone-1',
    name: 'Drone FPV SkyPhantom 4K Pro',
    category: 'Droni',
    price: 349.99,
    originalPrice: 429.99,
    rating: 4.9,
    reviewsCount: 128,
    stock: 14,
    badge: 'Più Venduto',
    featured: true,
    shortDesc: 'Gimbal a 3 assi, sensore 4K HDR a 60fps, 38 minuti di volo e trasmissione fino a 10 km.',
    description: 'Il Drone SkyPhantom 4K Pro è progettato per creator e appassionati di riprese aeree e volo FPV. Dotato di sensori anti-collisione omnidirezionali, GPS dual-band e funzione Return-to-Home automatica. Include controller ergonomico con supporto smartphone e custodia rigida impermeabile.',
    images: [
      'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1000&q=80',
    specs: [
      { label: 'Risoluzione Video', value: '4K Ultra HD @ 60fps' },
      { label: 'Autonomia di Volo', value: '38 minuti per batteria' },
      { label: 'Raggio di Controllo', value: 'Fino a 10 Km (OcuLink HD)' },
      { label: 'Peso', value: '249g (No patentino obbligatorio)' },
      { label: 'Sensori Ostacoli', value: '360° Omnidirezionali' },
      { label: 'Garanzia', value: '2 Anni Ufficiale Italia' }
    ]
  },
  {
    id: 'ssd-1',
    name: 'SSD NVMe PCIe 4.0 HyperBlade 2TB',
    category: 'Hard Disk & Storage',
    price: 149.50,
    originalPrice: 189.00,
    rating: 4.8,
    reviewsCount: 94,
    stock: 22,
    badge: 'Offerta Lampo',
    featured: true,
    shortDesc: 'Velocità di lettura fino a 7450 MB/s, dissipatore in grafene in alluminio e DRAM cache dedicata.',
    description: 'Velocità pura per PC da gaming, workstation e console PS5. Il controller flash Gen 4 di ultima generazione offre tempi di caricamento istantanei e gestione termica avanzata che impedisce il thermal throttling anche sotto sforzo intenso.',
    images: [
      'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1000&q=80',
    specs: [
      { label: 'Interfaccia', value: 'PCIe Gen 4.0 x4, NVMe 2.0' },
      { label: 'Lettura Sequenziale', value: 'Fino a 7.450 MB/s' },
      { label: 'Scrittura Sequenziale', value: 'Fino a 6.900 MB/s' },
      { label: 'Compatibilità', value: 'PC Desktop, Notebook & PS5' },
      { label: 'Resistenza TBW', value: '1200 TBW' },
      { label: 'Dissipatore', value: 'Incluso in grafene / lega aeronautica' }
    ]
  },
  {
    id: 'powerbank-1',
    name: 'PowerBank TitanVolt 27.000mAh 140W GaN',
    category: 'Power Bank',
    price: 89.90,
    originalPrice: 119.99,
    rating: 4.9,
    reviewsCount: 215,
    stock: 19,
    badge: 'Top Ricarica',
    featured: true,
    shortDesc: 'Uscita PD 3.1 fino a 140W, ricarica MacBook Pro, laptop e smartphone contemporaneamente con display TFT a colori.',
    description: 'La powerbank definitiva per chi viaggia e lavora in mobilità. Con 27.000mAh è la capacità massima consentita a bordo degli aerei (normativa IATA). Il display intelligente a colori mostra tensione, amperaggio, potenza erogata e tempo residuo di ricarica in tempo reale.',
    images: [
      'https://images.unsplash.com/photo-1609592424388-99fb05ff2e62?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1609592424388-99fb05ff2e62?auto=format&fit=crop&w=1000&q=80',
    specs: [
      { label: 'Capacità Reale', value: '27.000 mAh / 99.9 Wh' },
      { label: 'Potenza Massima', value: '140W Power Delivery 3.1' },
      { label: 'Porte', value: '2x USB-C PD, 1x USB-A QC 4.0' },
      { label: 'Display', value: 'TFT HD a colori con telemetria' },
      { label: 'Tempo di ricarica', value: '50 min con caricatore 100W' },
      { label: 'Approvazione Volo', value: 'Ammessa in cabina aerea (TSA / IATA)' }
    ]
  },
  {
    id: 'cuffie-1',
    name: 'Cuffie Wireless PulsePro ANC Hi-Res Audio',
    category: 'Cuffie & Audio',
    price: 179.00,
    originalPrice: 229.00,
    rating: 4.9,
    reviewsCount: 167,
    stock: 8,
    badge: 'Qualità Premium',
    featured: true,
    shortDesc: 'Driver al titanio da 40mm, cancellazione attiva del rumore ibrida (-45dB) e 60 ore di batteria.',
    description: 'Immergiti nella musica senza distrazioni. Le PulsePro combinano cuscinetti memory foam traspiranti in ecopelle con una cancellazione attiva del rumore adattiva che analizza i suoni circostanti 1000 volte al secondo. Supporto codec LDAC, AAC e connettività multi-point.',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80',
    specs: [
      { label: 'Cancellazione Rumore', value: 'Ibrida ANC a 4 microfoni (-45dB)' },
      { label: 'Autonomia', value: '60 ore (ANC spento) / 45 ore (ANC attivo)' },
      { label: 'Ricarica Rapida', value: '10 min carica = 5 ore musica' },
      { label: 'Codec Supportati', value: 'LDAC, aptX HD, AAC, SBC' },
      { label: 'Connettività', value: 'Bluetooth 5.3 + Cavo Jack dorato' },
      { label: 'Microfono', value: 'Algoritmo AI per chiamate nitide' }
    ]
  },
  {
    id: 'drone-2',
    name: 'Mini Drone Voyager GPS 4K Ultralight',
    category: 'Droni',
    price: 199.00,
    originalPrice: 249.00,
    rating: 4.7,
    reviewsCount: 76,
    stock: 11,
    badge: 'Novità',
    featured: false,
    shortDesc: 'Drone tascabile pieghevole con posizionamento ottico e GPS, decollo e atterraggio automatico a un tasto.',
    description: 'Il compagno di viaggio ideale. Pesa meno di 249 grammi e si ripiega nelle dimensioni di uno smartphone. Include funzioni di tracciamento intelligente (Follow Me), volo circolare orbitale e scatto gestuale.',
    images: [
      'https://images.unsplash.com/photo-1507582020432-2a3bc4ff7a8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1507582020432-2a3bc4ff7a8b?auto=format&fit=crop&w=1000&q=80',
    specs: [
      { label: 'Camera', value: '4K Ultra HD stabilizzata' },
      { label: 'Autonomia', value: '28 min (2 batterie incluse)' },
      { label: 'Distanza FPV', value: 'Fino a 3.000 metri' },
      { label: 'Funzioni Intelligenti', value: 'Follow Me, Orbit, RTH' }
    ]
  },
  {
    id: 'hdd-rugged',
    name: 'Hard Disk Esterno Rugged Armor 5TB USB-C',
    category: 'Hard Disk & Storage',
    price: 129.90,
    originalPrice: 159.00,
    rating: 4.8,
    reviewsCount: 112,
    stock: 17,
    badge: 'Antiurto',
    featured: false,
    shortDesc: 'Guscio corazzato in silicone antiurto grado militare, certificazione IP54 resistente a polvere e pioggia.',
    description: 'Proteggi i tuoi dati più preziosi in qualsiasi condizione. Progettato per fotografi, videomaker e professionisti sul campo. Resiste a cadute fino a 2 metri e include crittografia hardware AES 256-bit.',
    images: [
      'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=1000&q=80',
    specs: [
      { label: 'Capacità', value: '5 Terabyte' },
      { label: 'Connessione', value: 'USB 3.2 Gen 1 Type-C' },
      { label: 'Grado di Protezione', value: 'IP54 + Grado Militare' },
      { label: 'Crittografia', value: 'Hardware AES 256 bit' }
    ]
  },
  {
    id: 'powerbank-solar',
    name: 'Solar PowerBank Explorer 30.000mAh con Torcia LED',
    category: 'Power Bank',
    price: 49.99,
    originalPrice: 69.90,
    rating: 4.6,
    reviewsCount: 88,
    stock: 25,
    badge: 'Outdoor',
    featured: false,
    shortDesc: 'Pannello solare integrato per emergenza, 4 cavi di ricarica integrati e torcia campeggio ultra potente.',
    description: 'Il compagno di avventure indispensabile per escursioni, campeggio e blackout. Dotato di 4 cavi integrati (Lightning, Type-C, Micro-USB, USB-A) e una torcia a 32 LED con modalità SOS.',
    images: [
      'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1609592424388-99fb05ff2e62?auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=1000&q=80',
    specs: [
      { label: 'Capacità', value: '30.000 mAh' },
      { label: 'Ricarica Solare', value: 'Pannello monocristallino' },
      { label: 'Cavi Integrati', value: 'USB-C, Lightning, Micro-USB' },
      { label: 'Illuminazione', value: 'Torcia camping LED con SOS' }
    ]
  },
  {
    id: 'earbuds-tws',
    name: 'Auricolari TWS AeroPods Gaming 40ms Bassa Latenza',
    category: 'Cuffie & Audio',
    price: 59.90,
    originalPrice: 79.90,
    rating: 4.8,
    reviewsCount: 97,
    stock: 30,
    badge: 'Gaming',
    featured: false,
    shortDesc: 'Modalità gioco ultra-low latency a 40ms, illuminazione RGB Cyberpunk e audio posizionale 3D.',
    description: 'Sincronizzazione audio-video perfetta per gaming mobile e streaming. Design futuristico con custodia ad apertura ad ala di gabbiano e LED RGB dinamici.',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80',
    specs: [
      { label: 'Latenza', value: 'Ultra-bassa 40 ms' },
      { label: 'Autonomia', value: '7 ore + 28 ore custodia' },
      { label: 'Impermeabilità', value: 'Certificazione IPX5' },
      { label: 'Driver', value: '13mm Boro-Neodimio' }
    ]
  },
  {
    id: 'arduino-uno-r4',
    name: 'Scheda Originale Arduino Uno R4 WiFi + Matrice LED',
    category: 'Arduino & Maker',
    price: 32.50,
    originalPrice: 38.00,
    rating: 4.9,
    reviewsCount: 142,
    stock: 35,
    badge: 'Maker Choice',
    featured: true,
    shortDesc: 'Processore 32-bit Cortex-M4 a 48MHz, modulo Wi-Fi/Bluetooth ESP32-S3 e matrice LED 12x8 rossa integrata.',
    description: 'La nuova generazione di Arduino Uno. Integra una potente MCU a 32-bit (Renesas RA4M1), connettività wireless completa (Wi-Fi e Bluetooth BLE), matrice LED 12x8 integrata per animazioni e telemetria, porta USB-C e supporto per alimentazione fino a 24V. Perfetto per progetti IoT, robotica e domotica.',
    images: [
      'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=1000&q=80',
    specs: [
      { label: 'Microcontrollore', value: 'Renesas RA4M1 (Arm Cortex-M4 48MHz)' },
      { label: 'Connettività', value: 'ESP32-S3-MINI (Wi-Fi 802.11 b/g/n + BLE 5.0)' },
      { label: 'Matrice LED', value: '12x8 LED Rossi indirizzabili' },
      { label: 'Connettore', value: 'USB-C con emulazione HID tastiera/mouse' },
      { label: 'Tensione Ingresso', value: 'Da 6V a 24V con connettore DC' },
      { label: 'Memoria Flash', value: '256 KB Flash, 32 KB SRAM' }
    ]
  },
  {
    id: 'arduino-super-kit',
    name: 'Super Starter Kit Arduino con 45+ Sensori, Motori e Display',
    category: 'Arduino & Maker',
    price: 64.90,
    originalPrice: 84.90,
    rating: 4.8,
    reviewsCount: 89,
    stock: 20,
    badge: 'Kit Completo',
    featured: true,
    shortDesc: 'Include servomotori, sensore ultrasuoni, modulo relè, display LCD I2C, breadboard, telecomando e guida.',
    description: 'Il kit didattico definitivo per imparare l\'elettronica e la programmazione. Oltre 45 componenti accuratamente selezionati: sensore di distanza ultrasonico, servomotore SG90, modulo stepper con driver, ricevitore IR, display LCD 1602 con modulo I2C, sensori di umidità e temperatura DHT11, resistenze, LED e cavi.',
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=1000&q=80'
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    videoPoster: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    specs: [
      { label: 'Componenti Inclusi', value: '45+ Moduli, Sensori e Attuatori' },
      { label: 'Display Incluso', value: 'LCD 1602 retroilluminato blu con I2C' },
      { label: 'Motori Inclusi', value: '1x Servomotore 9g + 1x Stepper con Driver' },
      { label: 'Compatibilità', value: 'Arduino Uno, Mega, Nano, ESP32 e Raspberry' },
      { label: 'Valigetta', value: 'Contenitore rigido antiurto con scomparti' }
    ]
  }
];

// --- 2. VECTOR ICONS ---
const createIcon = (svgContent) => ({ className = 'w-5 h-5', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {svgContent}
  </svg>
);

const SearchIcon = createIcon(<><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>);
const ShoppingBagIcon = createIcon(<><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></>);
const PlusCircleIcon = createIcon(<><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></>);
const PlusIcon = createIcon(<><path d="M5 12h14" /><path d="M12 5v14" /></>);
const MenuIcon = createIcon(<><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></>);
const XIcon = createIcon(<><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>);
const CpuIcon = createIcon(<><rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></>);
const ShieldCheckIcon = createIcon(<><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></>);
const ShieldIcon = createIcon(<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />);
const TruckIcon = createIcon(<><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9" /><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14v10Z" /><circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" /></>);
const VideoIcon = createIcon(<><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" /><rect x="2" y="6" width="14" height="12" rx="2" /></>);
const ZapIcon = createIcon(<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />);
const ChevronRightIcon = createIcon(<path d="m9 18 6-6-6-6" />);
const StarIcon = createIcon(<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />);
const PlayIcon = createIcon(<polygon points="6 3 20 12 6 21 6 3" />);
const EyeIcon = createIcon(<><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></>);
const CheckCircleIcon = createIcon(<><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></>);
const CheckIcon = createIcon(<path d="M20 6 9 17l-5-5" />);
const ImageIcon = createIcon(<><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></>);
const RotateCcwIcon = createIcon(<><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></>);
const MessageCircleIcon = createIcon(<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />);
const Volume2Icon = createIcon(<><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /></>);
const Trash2Icon = createIcon(<><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></>);
const ArrowRightIcon = createIcon(<><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>);
const SparklesIcon = createIcon(<><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></>);
const CreditCardIcon = createIcon(<><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></>);
const BanknoteIcon = createIcon(<><rect width="20" height="12" x="2" y="6" rx="2" /><circle cx="12" cy="12" r="2" /><path d="M6 12h.01M18 12h.01" /></>);
const PackageCheckIcon = createIcon(<><path d="m16 16 2 2 4-4" /><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" /><path d="m7.5 4.27 9 5.15" /><polyline points="3.29 7 12 12 20.71 7" /><line x1="12" x2="12" y1="22" y2="12" /></>);
const UploadIcon = createIcon(<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></>);
const HeadphonesIcon = createIcon(<><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" /></>);
const MailIcon = createIcon(<><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>);
const PhoneIcon = createIcon(<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />);
const MapPinIcon = createIcon(<><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></>);
const SlidersHorizontalIcon = createIcon(<><line x1="21" x2="14" y1="4" y2="4" /><line x1="10" x2="3" y1="4" y2="4" /><line x1="21" x2="12" y1="12" y2="12" /><line x1="8" x2="3" y1="12" y2="12" /><line x1="21" x2="16" y1="20" y2="20" /><line x1="12" x2="3" y1="20" y2="20" /><line x1="14" x2="14" y1="2" y2="6" /><line x1="8" x2="8" y1="10" y2="14" /><line x1="16" x2="16" y1="18" y2="22" /></>);
const AlertCircleIcon = createIcon(<><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></>);

// --- 3. NAVBAR ---
function Navbar({ searchQuery, setSearchQuery, cartCount, setIsCartOpen, setIsPublishOpen, selectedCategory, setSelectedCategory, categories }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-[#070b14]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setSelectedCategory('Tutti i Prodotti')}>
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25">
              <CpuIcon className="w-6 h-6 animate-pulse" />
              <div className="absolute -inset-1 rounded-xl bg-cyan-500/20 blur-sm -z-10"></div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-400">
                  GERAN
                </span>
                <span className="text-xl sm:text-2xl font-black text-cyan-400 tracking-wide">
                  ELECTRONIC
                </span>
              </div>
              <p className="text-[10px] text-cyan-300/80 font-medium tracking-widest uppercase -mt-1 hidden sm:block">
                Droni • Hard Disk • PowerBank • Cuffie • Arduino
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Cerca droni 4K, SSD NVMe, powerbank, cuffie..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all shadow-inner"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  <XIcon className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsPublishOpen(true)}
              className="flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-cyan-600/25 transition-all transform active:scale-95"
            >
              <PlusCircleIcon className="w-4 h-4 text-cyan-200" />
              <span className="hidden sm:inline">Pubblica Prodotto</span>
              <span className="sm:hidden">Pubblica</span>
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 sm:p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 hover:text-cyan-400 transition-all"
            >
              <ShoppingBagIcon className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full bg-cyan-500 text-slate-950 text-xs font-black shadow-lg shadow-cyan-500/50 animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300"
            >
              {mobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-slate-800">
            <div className="relative mb-3">
              <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Cerca prodotti..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// --- 4. HERO ---
function Hero({ onExploreCategory }) {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-slate-800/60">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-6 shadow-lg shadow-cyan-950/50">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Nuovi Arrivi: Droni 4K & Hard Disk Gen 4 ad altissima velocità</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Tecnologia di Ultima Generazione con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Video & Foto Reali
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Scopri il catalogo di <strong className="text-white">Geran Electronic</strong>: Droni stabilizzati, SSD e Hard Disk ad alte prestazioni, Power Bank GaN ultra-rapidi e Cuffie Hi-Res con test e video dimostrativi per ogni prodotto.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {[
              { name: 'Droni 4K', cat: 'Droni' },
              { name: 'Hard Disk & SSD', cat: 'Hard Disk & Storage' },
              { name: 'Power Bank GaN', cat: 'Power Bank' },
              { name: 'Cuffie Hi-Res', cat: 'Cuffie & Audio' },
              { name: 'Arduino & Maker', cat: 'Arduino & Maker' }
            ].map((item) => (
              <button
                key={item.cat}
                onClick={() => onExploreCategory(item.cat)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500 text-xs sm:text-sm font-medium text-slate-200 transition-all hover:scale-105"
              >
                <span>{item.name}</span>
                <ChevronRightIcon className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-2">
                <VideoIcon className="w-4 h-4" />
              </div>
              <h2 className="text-xs sm:text-sm font-bold text-white">Video Dimostrativi</h2>
              <p className="text-[11px] text-slate-400 mt-0.5">Guarda le performance reali in azione prima di ordinare.</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2">
                <TruckIcon className="w-4 h-4" />
              </div>
              <h2 className="text-xs sm:text-sm font-bold text-white">Spedizione Rapida</h2>
              <p className="text-[11px] text-slate-400 mt-0.5">Consegna espressa 24/48h. Gratuita per ordini sopra 50€.</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-2">
                <ShieldCheckIcon className="w-4 h-4" />
              </div>
              <h2 className="text-xs sm:text-sm font-bold text-white">Garanzia 24 Mesi</h2>
              <p className="text-[11px] text-slate-400 mt-0.5">Prodotti 100% originali, testati e garantiti 2 anni.</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-2">
                <ZapIcon className="w-4 h-4" />
              </div>
              <h2 className="text-xs sm:text-sm font-bold text-white">Assistenza Diretta</h2>
              <p className="text-[11px] text-slate-400 mt-0.5">Supporto clienti e ordini via WhatsApp in tempo reale.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- 5. PRODUCT CARD ---
function ProductCard({ product, onSelectProduct, onOpenVideo, onAddToCart }) {
  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : null;

  return (
    <div className="group relative flex flex-col rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/40 overflow-hidden">
      
      <div className="relative aspect-square w-full overflow-hidden bg-slate-950">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-cyan-500/90 text-slate-950 text-[11px] font-black uppercase tracking-wider shadow-md backdrop-blur-sm">
              <ZapIcon className="w-3 h-3 fill-current" />
              {product.badge}
            </span>
          )}
          {discountPercent && (
            <span className="inline-block px-2 py-0.5 rounded-md bg-rose-500 text-white text-[11px] font-extrabold shadow-md">
              -{discountPercent}%
            </span>
          )}
        </div>

        {product.videoUrl && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenVideo(product);
            }}
            className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 text-xs font-bold border border-cyan-500/30 backdrop-blur-md transition-all shadow-lg hover:scale-105 z-10"
          >
            <PlayIcon className="w-3.5 h-3.5 fill-current" />
            <span>Video</span>
          </button>
        )}

        <div className="absolute bottom-3 inset-x-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button
            onClick={() => onSelectProduct(product)}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white text-xs font-semibold border border-slate-700/80 backdrop-blur-md transition-all"
          >
            <EyeIcon className="w-4 h-4 text-cyan-400" />
            <span>Dettagli & Foto</span>
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-cyan-400 font-semibold tracking-wide uppercase text-[11px]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-400 font-medium">
              <StarIcon className="w-3.5 h-3.5 fill-amber-400" />
              <span>{product.rating}</span>
              <span className="text-slate-500 text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          <h3 
            onClick={() => onSelectProduct(product)}
            className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors line-clamp-1 cursor-pointer"
          >
            {product.name}
          </h3>

          <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
            {product.shortDesc || product.description}
          </p>

          <div className="flex items-center gap-1.5 mt-2.5 text-[11px] text-emerald-400">
            <CheckCircleIcon className="w-3.5 h-3.5" />
            <span>Disponibile ({product.stock} pz) • Spedizione 24/48h</span>
          </div>
        </div>

        <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg sm:text-xl font-extrabold text-white">
                €{product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-500 line-through">
                  €{product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 active:scale-95 text-white font-semibold text-xs shadow-md shadow-cyan-600/30 transition-all"
          >
            <ShoppingBagIcon className="w-4 h-4" />
            <span>Aggiungi</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// --- 6. PRODUCT DETAIL MODAL ---
function ProductDetailModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const [activeTab, setActiveTab] = useState('photos');
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Ciao Geran Electronic! Sono interessato al prodotto: ${product.name} (Prezzo: €${product.price}). Vorrei maggiori informazioni per l'acquisto.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-800 text-slate-300 hover:text-white transition-all border border-slate-700"
        >
          <XIcon className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          <div className="p-5 sm:p-6 bg-slate-950/70 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800">
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={() => setActiveTab('photos')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'photos'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                <span>Foto ({product.images.length})</span>
              </button>

              {product.videoUrl && (
                <button
                  onClick={() => setActiveTab('video')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'video'
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <PlayIcon className="w-4 h-4 fill-current" />
                <span>Video Dimostrativo</span>
              </button>
            )}
            </div>

            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
              {activeTab === 'photos' ? (
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-black flex flex-col items-center justify-center relative">
                  <video
                    src={product.videoUrl}
                    poster={product.videoPoster || selectedImage}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  >
                    Il tuo browser non supporta il tag video.
                  </video>
                </div>
              )}
            </div>

            {activeTab === 'photos' && product.images.length > 1 && (
              <div className="flex gap-2.5 mt-4 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      selectedImage === img
                        ? 'border-cyan-400 scale-105 shadow-md shadow-cyan-500/30'
                        : 'border-slate-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  {product.category}
                </span>
                {product.badge && (
                  <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">
                    {product.badge}
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                {product.name}
              </h2>

              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-white">{product.rating}</span>
                <span className="text-xs text-slate-400">({product.reviewsCount} recensioni)</span>
              </div>

              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-3xl font-black text-white">
                  €{product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-500 line-through">
                    €{product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/30">
                  IVA Inclusa
                </span>
              </div>

              <div className="mt-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Descrizione</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {product.specs && product.specs.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Specifiche Tecniche
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.specs.map((spec, index) => (
                      <div key={index} className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs">
                        <span className="text-slate-400 block text-[11px]">{spec.label}</span>
                        <span className="font-semibold text-slate-100">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-slate-800 text-center">
                <div className="flex flex-col items-center">
                  <TruckIcon className="w-5 h-5 text-cyan-400 mb-1" />
                  <span className="text-[11px] font-semibold text-slate-200">Sped. 24/48h</span>
                </div>
                <div className="flex flex-col items-center">
                  <ShieldIcon className="w-5 h-5 text-emerald-400 mb-1" />
                  <span className="text-[11px] font-semibold text-slate-200">Garanzia 24 Mesi</span>
                </div>
                <div className="flex flex-col items-center">
                  <RotateCcwIcon className="w-5 h-5 text-blue-400 mb-1" />
                  <span className="text-[11px] font-semibold text-slate-200">Reso 14 Giorni</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center rounded-xl bg-slate-800 border border-slate-700 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg hover:bg-slate-700 flex items-center justify-center text-slate-300 font-bold"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="w-8 h-8 rounded-lg hover:bg-slate-700 flex items-center justify-center text-slate-300 font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-sm transition-all shadow-lg ${
                    addedAnimation 
                      ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/30'
                      : 'bg-cyan-500 hover:bg-cyan-400 active:scale-98 text-slate-950 shadow-cyan-500/25'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <CheckIcon className="w-5 h-5" />
                      <span>Aggiunto al carrello!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBagIcon className="w-5 h-5" />
                      <span>Aggiungi al Carrello • €{(product.price * quantity).toFixed(2)}</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`https://wa.me/?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 text-xs font-semibold transition-all"
              >
                <MessageCircleIcon className="w-4 h-4" />
                <span>Ordina subito o chiedi info su WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

// --- 7. VIDEO SHOWCASE MODAL ---
function VideoModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950/80 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <h3 className="text-sm font-bold text-white truncate max-w-md">
              Video Dimostrativo: {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-all"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          <video
            src={product.videoUrl}
            poster={product.videoPoster || product.images[0]}
            controls
            autoPlay
            className="w-full h-full object-contain"
          >
            Il tuo browser non supporta il tag video.
          </video>
        </div>

        <div className="p-4 bg-slate-950/90 flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="text-slate-300">
            <span className="text-cyan-400 font-bold uppercase mr-2">{product.category}</span>
            <span>Prezzo: <strong className="text-white">€{product.price.toFixed(2)}</strong></span>
          </div>
          <div className="text-slate-400 flex items-center gap-2">
            <Volume2Icon className="w-4 h-4 text-cyan-400" />
            <span>Audio & Video in alta risoluzione HD</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- 8. CART DRAWER ---
function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onOpenCheckout }) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 50.0;
  const shippingCost = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 5.90;
  const total = subtotal + shippingCost;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col justify-between">
          
          <div className="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                <ShoppingBagIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Il Tuo Carrello</h3>
                <p className="text-xs text-slate-400">{cartItems.length} articoli selezionati</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {cartItems.length > 0 && (
            <div className="px-5 py-3 bg-slate-950/90 border-b border-slate-800/80">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <TruckIcon className="w-3.5 h-3.5 text-cyan-400" />
                  {amountToFreeShipping === 0 ? (
                    <strong className="text-emerald-400">Spedizione Gratuita Raggiunta! 🎉</strong>
                  ) : (
                    <span>Aggiungi altri <strong>€{amountToFreeShipping.toFixed(2)}</strong> per spedizione gratis</span>
                  )}
                </span>
                <span className="font-bold text-cyan-400">{freeShippingPercent}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-300"
                  style={{ width: `${freeShippingPercent}%` }}
                />
              </div>
            </div>
          )}

          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-500 mb-4">
                  <ShoppingBagIcon className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Il carrello è vuoto</h4>
                <p className="text-xs text-slate-400 max-w-xs mb-6">
                  Esplora i nostri droni, hard disk, power bank e cuffie per iniziare i tuoi acquisti.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all shadow-lg shadow-cyan-600/30"
                >
                  Continua lo Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3.5 p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all"
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover bg-slate-900 border border-slate-800"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h5 className="font-bold text-xs sm:text-sm text-white line-clamp-1">
                          {item.name}
                        </h5>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                        >
                          <Trash2Icon className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[11px] text-cyan-400 font-semibold">{item.category}</span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center rounded-lg bg-slate-900 border border-slate-800 p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="w-7 text-center text-xs font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white text-xs font-bold"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-extrabold text-sm text-white">
                        €{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="p-5 border-t border-slate-800 bg-slate-950/80 space-y-3">
              <div className="space-y-1.5 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Subtotale</span>
                  <span className="font-semibold text-slate-200">€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Spedizione</span>
                  <span className="font-semibold text-slate-200">
                    {shippingCost === 0 ? (
                      <span className="text-emerald-400 font-bold">Gratis</span>
                    ) : (
                      `€${shippingCost.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-white pt-2 border-t border-slate-800">
                  <span>Totale Ordine</span>
                  <span className="text-cyan-400">€{total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenCheckout();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 transition-all transform active:scale-98"
              >
                <span>Procedi all'Ordine</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// --- 9. CHECKOUT MODAL ---
function CheckoutModal({ isOpen, onClose, cartItems, onOrderCompleted }) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = subtotal >= 50.0 || subtotal === 0 ? 0 : 5.90;
  const total = subtotal + shippingCost;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: 'cod',
    notes: ''
  });

  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrderId = 'GE-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(newOrderId);
    setOrderSubmitted(true);
    onOrderCompleted();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/70">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <PackageCheckIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-white">Completa il tuo Ordine</h3>
              <p className="text-xs text-slate-400">Spedizione rapida assicurata per Geran Electronic</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {orderSubmitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircleIcon className="w-9 h-9" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Ordine Ricevuto con Successo!</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Grazie per il tuo acquisto!</h2>
              <p className="text-sm text-slate-300 mt-2">
                Codice Ordine: <strong className="text-cyan-400">{orderId}</strong>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between text-slate-400">
                <span>Cliente:</span>
                <span className="text-slate-200 font-semibold">{formData.fullName}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Destinazione:</span>
                <span className="text-slate-200 font-semibold">{formData.address}, {formData.city}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Metodo Pagamento:</span>
                <span className="text-slate-200 font-semibold uppercase">{formData.paymentMethod}</span>
              </div>
              <div className="flex justify-between text-slate-400 pt-2 border-t border-slate-800">
                <span className="font-bold text-white">Totale da pagare:</span>
                <span className="text-cyan-400 font-black text-sm">€{total.toFixed(2)}</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Riceverai una notifica via email e SMS non appena il pacco verrà affidato al corriere espresso.
            </p>

            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all shadow-lg shadow-cyan-600/30"
            >
              Torna al Catalogo
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-300">Riepilogo ({cartItems.length} prodotti):</span>
              <span className="text-sm font-black text-cyan-400">Totale: €{total.toFixed(2)}</span>
            </div>

            <div>
              <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">
                1. Dati di Spedizione
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">Nome e Cognome *</label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Mario Rossi"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="mario@example.com"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">Telefono per Corriere *</label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+39 333 1234567"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">Indirizzo e N° Civico *</label>
                  <input
                    type="text"
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Via Roma 12"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">Città *</label>
                  <input
                    type="text"
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Milano"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">CAP *</label>
                  <input
                    type="text"
                    required
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    placeholder="20100"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">
                2. Metodo di Pagamento
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'cod', title: 'Pagamento alla Consegna', desc: 'Paga in contanti al corriere senza anticipo', icon: BanknoteIcon },
                  { id: 'card', title: 'Carta di Credito / Debito', desc: 'Visa, Mastercard, Postepay protetto SSL', icon: CreditCardIcon },
                  { id: 'bank', title: 'Bonifico Bancario', desc: 'Riceverai le coordinate IBAN via email', icon: ShieldCheckIcon },
                  { id: 'whatsapp', title: 'Conferma Rapida WhatsApp', desc: 'Definisci l\'ordine direttamente in chat con noi', icon: MessageCircleIcon }
                ].map((method) => {
                  const Icon = method.icon;
                  const isSelected = formData.paymentMethod === method.id;
                  return (
                    <label
                      key={method.id}
                      className={`flex items-start gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        isSelected 
                          ? 'bg-cyan-950/40 border-cyan-500 shadow-md shadow-cyan-950/50' 
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={isSelected}
                        onChange={handleChange}
                        className="mt-1 text-cyan-500 focus:ring-0"
                      />
                      <div>
                        <div className="flex items-center gap-1.5 font-bold text-xs text-white">
                          <Icon className="w-4 h-4 text-cyan-400" />
                          <span>{method.title}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">{method.desc}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 transition-all transform active:scale-98"
              >
                Conferma ed Invia Ordine • €{total.toFixed(2)}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}

// --- 10. PUBLISH MODAL ---
function PublishModal({ isOpen, onClose, onPublish, categories }) {
  if (!isOpen) return null;

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Droni');
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [stock, setStock] = useState('10');
  const [badge, setBadge] = useState('Nuovo Arrivo');
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [spec1Value, setSpec1Value] = useState('');
  const [spec2Value, setSpec2Value] = useState('2 Anni Ufficiale Italia');

  const sampleImages = {
    'Droni': 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1000&q=80',
    'Hard Disk & Storage': 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1000&q=80',
    'Power Bank': 'https://images.unsplash.com/photo-1609592424388-99fb05ff2e62?auto=format&fit=crop&w=1000&q=80',
    'Cuffie & Audio': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80',
    'Arduino & Maker': 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=1000&q=80'
  };

  const defaultSampleVideo = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';

  const handleApplyPreset = (cat) => {
    setCategory(cat);
    if (!imageUrl) setImageUrl(sampleImages[cat] || '');
    if (!videoUrl) setVideoUrl(defaultSampleVideo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price) return;

    const finalImage = imageUrl.trim() || sampleImages[category] || 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1000&q=80';
    const finalVideo = videoUrl.trim() || defaultSampleVideo;

    const newProduct = {
      id: 'custom-' + Date.now(),
      name: title,
      category,
      price: parseFloat(price),
      originalPrice: originalPrice ? parseFloat(originalPrice) : null,
      rating: 5.0,
      reviewsCount: 1,
      stock: parseInt(stock, 10) || 10,
      badge: badge || 'Novità',
      featured: true,
      shortDesc: shortDesc || description.slice(0, 90) + '...',
      description: description || 'Prodotto elettronico di alta qualità garantito da Geran Electronic.',
      images: [finalImage],
      videoUrl: finalVideo,
      specs: [
        ...(spec1Value ? [{ label: 'Caratteristiche', value: spec1Value }] : []),
        ...(spec2Value ? [{ label: 'Garanzia', value: spec2Value }] : [])
      ]
    };

    onPublish(newProduct);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/70">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <UploadIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-white">Pubblica Nuovo Prodotto</h3>
              <p className="text-xs text-slate-400">Inserisci foto, video dimostrativo, prezzo e dettagli</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[80vh] overflow-y-auto">
          <div className="p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30">
            <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300 mb-1.5">
              <SparklesIcon className="w-4 h-4 text-cyan-400" />
              <span>Compilazione Rapida Categoria:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Droni', 'Hard Disk & Storage', 'Power Bank', 'Cuffie & Audio', 'Arduino & Maker'].map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => handleApplyPreset(cat)}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-700/80 text-[11px] font-medium transition-all"
                >
                  Preset {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Nome del Prodotto *</label>
            <input
              type="text"
              required
              placeholder="es. Drone 4K FPV Extreme, SSD NVMe 1TB, PowerBank 20000mAh..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Categoria *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                {categories.filter(c => c !== 'Tutti i Prodotti').map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Badge Promozionale</label>
              <input
                type="text"
                placeholder="es. Novità, Più Venduto, Sconto 30%"
                value={badge}
                onChange={(e) => setBadge(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Prezzo (€) *</label>
              <input
                type="number"
                step="0.01"
                required
                placeholder="199.99"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Listino (€)</label>
              <input
                type="number"
                step="0.01"
                placeholder="249.99"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Scorte (pz)</label>
              <input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="space-y-3 p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4" />
              <span>Media (Foto & Video dimostrativo)</span>
            </h4>

            <div>
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">URL Foto Principale (HD)</label>
              <input
                type="url"
                placeholder="https://images.unsplash.com/... o link diretto foto"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">URL Video Dimostrativo (MP4)</label>
              <input
                type="url"
                placeholder="https://... o video MP4 dimostrativo"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Descrizione Dettagliata</label>
            <textarea
              rows={3}
              placeholder="Descrivi prestazioni, materiali, connettività..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="pt-4 border-t border-slate-800">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 transition-all transform active:scale-98 flex items-center justify-center gap-2"
            >
              <PlusIcon className="w-5 h-5" />
              <span>Pubblica Prodotto su Geran Electronic</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

// --- 11. FOOTER ---
function Footer({ onSelectCategory }) {
  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-[#05080f] text-slate-400 text-xs">
      <div className="border-b border-slate-800/60 py-8 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400">
                <TruckIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Spedizione Tracciata 24/48h</h4>
                <p className="text-slate-400 text-xs">Consegna rapida e gratuita per ordini sopra 50€</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
                <ShieldCheckIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Garanzia Ufficiale 24 Mesi</h4>
                <p className="text-slate-400 text-xs">Prodotti collaudati con video test prima della spedizione</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                <HeadphonesIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Supporto Tecnico Diretto</h4>
                <p className="text-slate-400 text-xs">Assistenza pre e post vendita via WhatsApp & Email</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 font-black">
                <CpuIcon className="w-4 h-4" />
              </div>
              <span className="text-base font-black text-white tracking-wider">
                GERAN <span className="text-cyan-400">ELECTRONIC</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Il punto di riferimento per l'elettronica d'avanguardia: droni con videocamera stabilizzata, supporti di memorizzazione ultra-veloci, powerbank GaN e sistemi audio ad alta definizione.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white mb-3 uppercase tracking-wider text-[11px] text-cyan-400">
              Categorie Principali
            </h4>
            <ul className="space-y-2">
              {['Droni', 'Hard Disk & Storage', 'Power Bank', 'Cuffie & Audio'].map((cat) => (
                <li key={cat}>
                  <button onClick={() => onSelectCategory(cat)} className="hover:text-cyan-400 transition-colors">
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white mb-3 uppercase tracking-wider text-[11px] text-cyan-400">
              Assistenza Clienti
            </h4>
            <ul className="space-y-2">
              <li>Resi & Diritto di Recesso (14 giorni)</li>
              <li>Tracciamento Spedizione Corriere</li>
              <li>Condizioni di Vendita & Privacy</li>
              <li>FAQ & Guida all'acquisto</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white mb-3 uppercase tracking-wider text-[11px] text-cyan-400">
              Contatti Diretti
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>+39 02 1234567 / WhatsApp attivo</span>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>info@geranelectronic.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPinIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>Spedizioni rapide in tutta Italia</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© {new Date().getFullYear()} Geran Electronic. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-3 text-slate-500">
            <span>Pagamenti Sicuri:</span>
            <span className="font-bold text-slate-300">Contrassegno • Carte • PayPal • Bonifico</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

// --- 12. ROOT APP COMPONENT ---
function App() {
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('ge_products');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_PRODUCTS;
  });

  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('ge_cart');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [];
  });

  const [selectedCategory, setSelectedCategory] = useState('Tutti i Prodotti');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeVideoProduct, setActiveVideoProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isPublishOpen, setIsPublishOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('ge_products', JSON.stringify(products));
    } catch (e) {
      console.error(e);
    }
  }, [products]);

  useEffect(() => {
    try {
      localStorage.setItem('ge_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    showToast(`"${product.name}" aggiunto al carrello!`);
  };

  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    showToast('Prodotto rimosso dal carrello', 'info');
  };

  const handleOrderCompleted = () => {
    setCart([]);
    showToast('Ordine registrato con successo! Ti contatteremo a breve.', 'success');
  };

  const handlePublishProduct = (newProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
    showToast(`Prodotto "${newProduct.name}" pubblicato con successo!`, 'success');
    setSelectedCategory(newProduct.category);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'Tutti i Prodotti') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [products, selectedCategory, searchQuery, sortBy]);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans">
      
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900 border border-cyan-500/50 text-white text-xs font-semibold shadow-2xl shadow-cyan-950/80">
          <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
            {toast.type === 'success' ? <CheckIcon className="w-3.5 h-3.5" /> : <AlertCircleIcon className="w-3.5 h-3.5" />}
          </div>
          <span>{toast.message}</span>
        </div>
      )}

      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={totalCartCount}
        setIsCartOpen={setIsCartOpen}
        setIsPublishOpen={setIsPublishOpen}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={CATEGORIES}
      />

      <main className="flex-1">
        <Hero onExploreCategory={(cat) => setSelectedCategory(cat)} />

        <section id="catalogo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  {selectedCategory === 'Tutti i Prodotti' ? 'Tutti i Materiali Elettronici' : selectedCategory}
                </h2>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Visualizzati {filteredProducts.length} articoli con foto e video dimostrativo
              </p>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <div className="hidden lg:flex items-center bg-slate-900/90 p-1 rounded-2xl border border-slate-800">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedCategory === cat
                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-2 rounded-xl border border-slate-800 text-xs">
                <SlidersHorizontalIcon className="w-3.5 h-3.5 text-cyan-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-slate-200 font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="featured" className="bg-slate-900">In Evidenza</option>
                  <option value="price-asc" className="bg-slate-900">Prezzo: Minore &rarr; Maggiore</option>
                  <option value="price-desc" className="bg-slate-900">Prezzo: Maggiore &rarr; Minore</option>
                  <option value="rating" className="bg-slate-900">Valutazione Clienti</option>
                </select>
              </div>

              <button
                onClick={() => setIsPublishOpen(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-cyan-400 transition-all"
              >
                <PlusCircleIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>Nuovo Prodotto</span>
              </button>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-slate-900/30 rounded-3xl border border-slate-800/60 p-8">
              <div className="w-16 h-16 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-500 mx-auto mb-4">
                <AlertCircleIcon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Nessun prodotto trovato</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto mb-6">
                Nessun articolo corrisponde ai criteri di ricerca attuali.
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSelectedCategory('Tutti i Prodotti');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                >
                  Azzera Filtri
                </button>
                <button
                  onClick={() => setIsPublishOpen(true)}
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-md shadow-cyan-600/30"
                >
                  Pubblica Nuovo Prodotto
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelectProduct={(p) => setSelectedProduct(p)}
                  onOpenVideo={(p) => setActiveVideoProduct(p)}
                  onAddToCart={(p) => handleAddToCart(p, 1)}
                />
              ))}
            </div>
          )}

        </section>
      </main>

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {activeVideoProduct && (
        <VideoModal
          product={activeVideoProduct}
          onClose={() => setActiveVideoProduct(null)}
        />
      )}

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cart}
        onOrderCompleted={handleOrderCompleted}
      />

      <PublishModal
        isOpen={isPublishOpen}
        onClose={() => setIsPublishOpen(false)}
        onPublish={handlePublishProduct}
        categories={CATEGORIES}
      />

      <Footer onSelectCategory={(cat) => setSelectedCategory(cat)} />

    </div>
  );
}

// Render root
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

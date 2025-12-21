
import { Service, PortfolioItem, Value, BlogPost } from './types';

export interface Benefit {
  id: string;
  title: { en: string; fr: string };
  description: { en: string; fr: string };
  icon: string;
}

export const BENEFITS: Benefit[] = [
  {
    id: 'ben-1',
    title: { en: 'Peace of Mind (Insured & Bonded)', fr: 'Tranquillité d\'Esprit (Assuré et Garanti)' },
    description: {
      en: 'We are fully bonded, licensed, and insured for your protection. This ensures that you, your property, and our staff are covered against any unforeseen incidents during our service.',
      fr: 'Nous sommes entièrement garantis, licenciés et assurés pour votre protection. Cela garantit que vous, votre propriété et notre personnel êtes couverts.'
    },
    icon: 'ShieldCheck'
  },
  {
    id: 'ben-2',
    title: { en: 'No Long-Term Contracts', fr: 'Pas de Contrats à Long Terme' },
    description: {
      en: 'We believe in earning your business with every visit. Enjoy the flexibility of our services without being locked into lengthy legal agreements.',
      fr: 'Nous croyons qu\'il faut gagner votre confiance à chaque visite. Profitez de la flexibilité de nos services sans être lié par des accords juridiques.'
    },
    icon: 'FileText'
  },
  {
    id: 'ben-3',
    title: { en: 'Customized Cleaning Plans', fr: 'Plans de Nettoyage Personnalisés' },
    description: {
      en: 'Every space is unique. We create a personalized cleaning checklist that fits your specific needs, preferences, and budget.',
      fr: 'Chaque espace est unique. Nous créons une liste de contrôle personnalisée qui correspond à vos besoins spécifiques.'
    },
    icon: 'ClipboardCheck'
  },
  {
    id: 'ben-4',
    title: { en: 'Consistency & Reliability', fr: 'Consistance et Fiabilité' },
    description: {
      en: 'We strive to send the same team to your location for every visit. This builds trust and ensures your specific preferences are followed.',
      fr: 'Nous nous efforçons d\'envoyer la même équipe chez vous à chaque visite. Cela renforce la confiance.'
    },
    icon: 'UserCheck'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'jan-1',
    title: { en: 'Commercial Janitorial Services', fr: 'Services de Conciergerie Commerciale' },
    description: { en: 'Comprehensive facility maintenance for corporate towers and shopping malls.', fr: 'Entretien complet des installations pour tours d\'affaires et centres commerciaux.' },
    detailedDescription: {
      en: 'SkyBlue Cleaning provides a complete, custom-tailored janitorial program for your commercial property. We understand that a clean building is essential to your professional image.\n\nOur program includes daily maintenance of lobbies, workstations, and high-traffic areas. We implement a rigorous supervision model where every floor is audited nightly before handover.',
      fr: 'SkyBlue Cleaning propose un programme de conciergerie complet. Nous comprenons qu\'un bâtiment propre est essentiel à votre image.\n\nNotre programme comprend l\'entretien quotidien des halls, des postes de travail et des zones à fort trafic.'
    },
    icon: 'Building2',
    category: 'Commercial',
    includedTasks: {
      en: ['Daily Workspace Sanitization', 'Lobby & Reception Detailing', 'Trash & Recycling Management', 'Restroom Supply Restocking', 'Entrance Glass Polishing'],
      fr: ['Désinfection quotidienne', 'Détails du hall et réception', 'Gestion des déchets', 'Réapprovisionnement sanitaires', 'Polissage des vitres d\'entrée']
    },
    specifications: {
      en: ['Supervisor Audited Daily', 'Color-Coded Hygiene System', 'Hospital-Grade Chemicals', 'Uniformed Professionals'],
      fr: ['Audit quotidien superviseur', 'Système hygiène couleur', 'Produits grade hospitalier', 'Professionnels en uniforme']
    }
  },
  {
    id: 'off-1',
    title: { en: 'Expert Office Cleaning', fr: 'Nettoyage de Bureau Expert' },
    description: { en: 'Tailored sanitation for professional work environments to boost productivity.', fr: 'Assainissement sur mesure pour les environnements de travail.' },
    detailedDescription: {
      en: 'A clean office is a productive office. We focus on the high-frequency touchpoints that harbor bacteria—keyboards, telephones, and door handles. Our staff is trained to handle sensitive electronics and data environments with care.',
      fr: 'Un bureau propre est un bureau productif. Nous nous concentrons sur les points de contact fréquents qui abritent des bactéries.'
    },
    icon: 'Briefcase',
    category: 'Commercial',
    includedTasks: {
      en: ['Keyboard & Phone Sanitizing', 'Conference Table Polishing', 'Breakroom Deep Clean', 'Upholstery Vacuuming', 'Monitor Dusting (Anti-static)'],
      fr: ['Désinfection claviers/tels', 'Polissage tables conférence', 'Nettoyage profond cuisine', 'Aspiration tissus', 'Dépoussiérage moniteurs']
    },
    specifications: {
      en: ['After-Hours Availability', 'Confidentiality Signed Staff', 'HEPA Air Filtration', 'Electronics-Safe Agents'],
      fr: ['Disponibilité hors-heures', 'Personnel sous confidentialité', 'Filtration d\'air HEPA', 'Produits sûrs électronique']
    }
  },
  {
    id: 'med-1',
    title: { en: 'Medical & Clinical Sanitation', fr: 'Assainissement Médical et Clinique' },
    description: { en: 'Specialized bio-hazard cleaning for clinics and dental offices.', fr: 'Nettoyage spécialisé pour cliniques et cabinets dentaires.' },
    detailedDescription: {
      en: 'In healthcare, cleaning is a matter of safety. SkyBlue Cleaning follows strict protocols for medical facility sanitation, ensuring all patient areas and surgical rooms are sterilized according to international health standards.',
      fr: 'Dans le secteur de la santé, le nettoyage est une question de sécurité. SkyBlue Cleaning suit des protocoles stricts pour les installations médicales.'
    },
    icon: 'Shield',
    category: 'Specialized',
    includedTasks: {
      en: ['Operating Room Sterilization', 'Waiting Room Disinfection', 'Safe Bio-Hazard Disposal', 'Clinical Grade Floor Scrubbing', 'Exam Table Sanitization'],
      fr: ['Stérilisation blocs opératoires', 'Désinfection salles d\'attente', 'Gestion déchets bio-risques', 'Lavage sols grade clinique', 'Désinfection tables d\'examen']
    },
    specifications: {
      en: ['EPA Approved Sterilants', 'Bloodborne Pathogen Trained', 'Cross-Contamination Prevention', 'Audit-Ready Logs'],
      fr: ['Stérilisants approuvés EPA', 'Personnel formé pathogènes', 'Prévention contamination', 'Registres conformité']
    }
  },
  {
    id: 'win-1',
    title: { en: 'Professional Window Cleaning', fr: 'Nettoyage de Vitres Professionnel' },
    description: { en: 'Crystal clear results for high-rises and storefronts.', fr: 'Résultats cristallins pour gratte-ciel et boutiques.' },
    detailedDescription: {
      en: 'Using pure water technology and high-reach pole systems, we deliver a streak-free finish that lasts longer. We clean frames, sills, and tracks as part of every standard service.',
      fr: 'Utilisant la technologie de l\'eau pure, nous offrons une finition sans traces. Nous nettoyons les cadres et les rails.'
    },
    icon: 'Maximize',
    category: 'Commercial',
    includedTasks: {
      en: ['Double-Sided Glass Washing', 'Track & Sill Detailing', 'Screen Cleaning', 'Hard Water Stain Removal', 'High-Access Operations'],
      fr: ['Lavage vitres double face', 'Détails rails et rebords', 'Lavage moustiquaires', 'Enlèvement calcaire', 'Opérations en hauteur']
    },
    specifications: {
      en: ['Pure Water Feed System', 'Height Access Certified', 'Streak-Free Guarantee', 'Wind-Safety Protocols'],
      fr: ['Système à eau pure', 'Certifié accès hauteur', 'Garantie sans traces', 'Protocoles sécurité vent']
    }
  },
  {
    id: 'carp-1',
    title: { en: 'Industrial Carpet Cleaning', fr: 'Nettoyage de Tapis Industriel' },
    description: { en: 'Deep extraction for high-traffic corporate floorings.', fr: 'Extraction profonde pour les sols de bureaux.' },
    detailedDescription: {
      en: 'Our industrial hot-water extraction process removes deep-seated dirt, allergens, and bacteria. We use low-moisture technology to ensure your office carpets are dry and usable within hours.',
      fr: 'Notre processus d\'extraction à l\'eau chaude élimine la saleté incrustée. Nous utilisons une technologie à faible humidité.'
    },
    icon: 'Layers',
    category: 'Commercial',
    includedTasks: {
      en: ['Deep Steam Extraction', 'Stain Pre-Treatment', 'Fiber Deodorizing', 'Industrial Pre-Vacuum', 'pH Balancing Rinse'],
      fr: ['Extraction vapeur profonde', 'Pré-traitement taches', 'Désodorisation fibres', 'Aspiration industrielle', 'Rinçage équilibre pH']
    },
    specifications: {
      en: ['Fast Drying Time (2-4 hrs)', 'Wool-Safe Certified', 'Deep Allergen Removal', 'Non-Toxic Solutions'],
      fr: ['Séchage rapide (2-4h)', 'Certifié Wool-Safe', 'Élimination allergènes', 'Solutions non toxiques']
    }
  },
  {
    id: 'wax-1',
    title: { en: 'Floor Stripping & Waxing', fr: 'Décapage et Cirage de Sols' },
    description: { en: 'Restorative treatment for VCT and hard surface flooring.', fr: 'Traitement de restauration pour surfaces dures.' },
    detailedDescription: {
      en: 'Revitalize your hard floors. We strip away old, yellowed wax layers and apply multiple coats of high-solids industrial finish for a mirror-like, slip-resistant shine.',
      fr: 'Revitalisez vos sols. Nous décapons les anciennes couches de cire et appliquons un fini industriel haute brillance.'
    },
    icon: 'Zap',
    category: 'Industrial',
    includedTasks: {
      en: ['Complete Wax Removal', 'Edge & Corner Detailing', 'Neutralizing Rinse', '4-5 Coats of Premium Wax', 'High-Speed Burnishing'],
      fr: ['Retrait complet cire', 'Détails coins et bords', 'Rinçage neutralisant', '4-5 couches cire premium', 'Lustrage haute vitesse']
    },
    specifications: {
      en: ['Mirror-Finish Standards', 'Slip-Resistant Surface', 'Industrial Buffers Used', 'Long-Life Polymer'],
      fr: ['Standards fini miroir', 'Surface antidérapante', 'Polisseuses industrielles', 'Polymère longue durée']
    }
  },
  {
    id: 'post-1',
    title: { en: 'Post-Construction Detailing', fr: 'Nettoyage Après Construction' },
    description: { en: 'Fine dust and debris removal for newly renovated sites.', fr: 'Enlèvement de poussière fine pour sites rénovés.' },
    detailedDescription: {
      en: 'Construction dust settles everywhere. Our specialized team performs a 3-stage clean (Rough, Final, and Polish) to ensure your new building is ready for immediate occupancy.',
      fr: 'La poussière de construction s\'infiltre partout. Notre équipe effectue un nettoyage en 3 étapes (Brut, Final, Polissage).'
    },
    icon: 'HardHat',
    category: 'Specialized',
    includedTasks: {
      en: ['Fine Silica Dust Removal', 'Inside Cabinet Cleaning', 'Adhesive & Sticker Removal', 'Fixture Polishing', 'HVAC Vent Cleaning'],
      fr: ['Retrait poussière silice', 'Nettoyage intérieur armoires', 'Retrait adhésifs', 'Polissage robinetterie', 'Nettoyage conduits air']
    },
    specifications: {
      en: ['HEPA Filter Vacuums', 'PPE Equipped Crew', 'Strict Deadlines Met', 'Handover Quality Audit'],
      fr: ['Aspirateurs filtres HEPA', 'Équipe équipée EPI', 'Respect des délais', 'Audit qualité remise']
    }
  },
  {
    id: 'dis-1',
    title: { en: 'Electrostatic Disinfection', fr: 'Désinfection Électrostatique' },
    description: { en: '360-degree pathogen protection using fogging technology.', fr: 'Protection pathogène à 360° par brumisation.' },
    detailedDescription: {
      en: 'Our electrostatic sprayers charge disinfectant particles, causing them to wrap around surfaces for total 360-degree coverage. Ideal for gyms, offices, and schools.',
      fr: 'Nos pulvérisateurs chargent les particules de désinfectant pour une couverture totale à 360 degrés.'
    },
    icon: 'Sparkles',
    category: 'Specialized',
    includedTasks: {
      en: ['Full Room Sterilization', 'Electronics-Safe Fogging', 'High-Touch Area Treatment', 'Odor Neutralization', 'Surface Validation'],
      fr: ['Stérilisation totale', 'Brumisation électronique', 'Traitement zones contact', 'Neutralisation odeurs', 'Validation surfaces']
    },
    specifications: {
      en: ['EPA List N Solutions', 'Kills 99.9% of Viruses', 'Safe for All Surfaces', 'No-Wipe Technology'],
      fr: ['Solutions liste N EPA', 'Tue 99,9% des virus', 'Sûr pour toutes surfaces', 'Technologie sans essuyage']
    }
  },
  {
    id: 'ind-1',
    title: { en: 'Industrial Warehouse Cleaning', fr: 'Nettoyage d\'Entrepôt Industriel' },
    description: { en: 'Heavy-duty maintenance for logistics and manufacturing hubs.', fr: 'Entretien intensif pour centres logistiques.' },
    detailedDescription: {
      en: 'Industrial sites present unique safety challenges. We provide heavy floor scrubbing, high-level dusting of racking systems, and specialized oil degreasing services.',
      fr: 'Les sites industriels présentent des défis uniques. Nous proposons le lavage mécanique des sols et le dégraissage.'
    },
    icon: 'Factory',
    category: 'Industrial',
    includedTasks: {
      en: ['Ride-On Floor Scrubbing', 'Oil Spill Remediation', 'High-Rack Dusting', 'Loading Dock Cleanup', 'Industrial Waste Disposal'],
      fr: ['Lavage mécanique sols', 'Dégraissage déversements', 'Dépoussiérage racks', 'Nettoyage quais', 'Gestion déchets industriels']
    },
    specifications: {
      en: ['Heavy Equipment Certified', 'Industrial Degreasers', 'After-Hours Scheduling', 'Strict PPE Protocols'],
      fr: ['Certifié engins lourds', 'Dégraissants industriels', 'Horaires flexibles', 'Protocoles EPI stricts']
    }
  },
  {
    id: 'res-1',
    title: { en: 'Premium Residential Deep Clean', fr: 'Nettoyage Résidentiel Profond' },
    description: { en: 'Elite home detailing for luxury estates and residences.', fr: 'Détails de luxe pour propriétés et résidences.' },
    detailedDescription: {
      en: 'More than a standard house clean, our Deep Clean service focuses on every corner of your home. From crown moldings to baseboards, we restore your sanctuary to its original brilliance.',
      fr: 'Plus qu\'un simple ménage, notre nettoyage profond se concentre sur chaque recoin de votre maison.'
    },
    icon: 'Home',
    category: 'Residential',
    includedTasks: {
      en: ['Inside Oven & Fridge Clean', 'Baseboard & Molding Detailing', 'Internal Window Washing', 'Deep Bathroom Sanitizing', 'Upholstery Vacuuming'],
      fr: ['Nettoyage four et frigo', 'Détails plinthes et moulures', 'Lavage vitres intérieur', 'Désinfection sanitaires', 'Aspiration canapés']
    },
    specifications: {
      en: ['Eco-Safe for Kids/Pets', 'Background Checked Staff', 'Same-Team Guarantee', 'Equipment Included'],
      fr: ['Sûr enfants/animaux', 'Personnel vérifié', 'Garantie même équipe', 'Équipement fourni']
    }
  },
  {
    id: 'mov-1',
    title: { en: 'Move-In / Move-Out Cleaning', fr: 'Nettoyage Déménagement / Emménagement' },
    description: { en: 'Total vacancy preparation for tenants and landlords.', fr: 'Préparation complète pour locataires et propriétaires.' },
    detailedDescription: {
      en: 'Moving is stressful enough. SkyBlue Cleaning handles the heavy lifting by sterilizing the entire property, ensuring it meets strict lease handover standards for maximum deposit return.',
      fr: 'Déménager est stressant. SkyBlue Cleaning s\'occuppe de tout en stérilisant la propriété pour une remise des clés sans soucis.'
    },
    icon: 'Key',
    category: 'Residential',
    includedTasks: {
      en: ['Wall Spot Cleaning', 'Inside All Cabinetry', 'Deep Appliance Scrubbing', 'Closet Detailing', 'Floor Restoration'],
      fr: ['Nettoyage taches murs', 'Intérieur de tous placards', 'Récurage appareils', 'Détails garde-robes', 'Restauration des sols']
    },
    specifications: {
      en: ['Same-Day Readiness', 'Deposit-Back Guarantee', 'Photo Verification Report', 'Heavy Duty Supplies'],
      fr: ['Prêt le jour même', 'Garantie caution', 'Rapport photo validation', 'Produits haute puissance']
    }
  },
  {
    id: 'pre-1',
    title: { en: 'High-Pressure Exterior Washing', fr: 'Lavage Haute Pression Extérieur' },
    description: { en: 'Revitalizing driveways, decks, and building exteriors.', fr: 'Revitalisation des allées, terrasses et façades.' },
    detailedDescription: {
      en: 'Remove years of grime, mold, and stains from your exterior surfaces. Our industrial pressure washing systems restore stone, concrete, and brick to their like-new appearance.',
      fr: 'Éliminez des années de crasse, moisissures et taches. Nos systèmes restaurent pierre, béton et brique.'
    },
    icon: 'Waves',
    category: 'Industrial',
    includedTasks: {
      en: ['Driveway Oil Removal', 'Building Facade Wash', 'Deck & Patio Detailing', 'Fence Restoration', 'Gutter Exterior Polish'],
      fr: ['Dégraissage allées', 'Lavage façade bâtiment', 'Détails terrasse et patio', 'Restauration clôture', 'Polissage extérieur gouttières']
    },
    specifications: {
      en: ['3500 PSI Power Units', 'Eco-Friendly Degreasers', 'Surface-Safe Nozzles', 'Water Recovery Options'],
      fr: ['Unités 3500 PSI', 'Dégraissants éco', 'Buses sécurisées surfaces', 'Récupération d\'eau']
    }
  },
  {
    id: 'uph-1',
    title: { en: 'Upholstery & Leather Care', fr: 'Entretien Tissus et Cuir' },
    description: { en: 'Premium maintenance for sofas, chairs, and office seating.', fr: 'Entretien premium pour canapés et sièges de bureau.' },
    detailedDescription: {
      en: 'Extend the life of your furniture. We offer specialized steam cleaning for fabrics and gentle conditioning for leather, removing oils, skin cells, and deep-seated dust.',
      fr: 'Prolongez la vie de vos meubles. Nous proposons un nettoyage à la vapeur pour les tissus et un soin pour le cuir.'
    },
    icon: 'Armchair',
    category: 'Specialized',
    includedTasks: {
      en: ['Fabric Steam Cleaning', 'Leather Conditioning', 'Pet Hair Removal', 'Odor Neutralizing', 'Anti-Stain Protection'],
      fr: ['Nettoyage vapeur tissu', 'Soin nourrissant cuir', 'Retrait poils animaux', 'Neutralisation odeurs', 'Protection anti-taches']
    },
    specifications: {
      en: ['Fast Dry Technology', 'pH Balanced Cleaners', 'Gentle Fiber Care', 'Deep Dirt Extraction'],
      fr: ['Technologie séchage vite', 'Nettoyants pH neutre', 'Soin fibres délicates', 'Extraction saleté']
    }
  },
  {
    id: 'kit-1',
    title: { en: 'Commercial Kitchen Sanitation', fr: 'Assainissement Cuisine Commerciale' },
    description: { en: 'Deep cleaning for restaurants, hotels, and food plants.', fr: 'Nettoyage profond pour restaurants et hôtels.' },
    detailedDescription: {
      en: 'Food safety is non-negotiable. SkyBlue Cleaning provides specialized degreasing of hood systems, deep sterilization of food prep surfaces, and heavy floor maintenance for industrial kitchens.',
      fr: 'La sécurité alimentaire est non négociable. SkyBlue Cleaning propose le dégraissage des hottes et la stérilisation des plans de travail.'
    },
    icon: 'Utensils',
    category: 'Commercial',
    includedTasks: {
      en: ['Hood & Duct Degreasing', 'Stainless Steel Polishing', 'Drain Sanitization', 'High-Temp Steam Cleaning', 'Backsplash Scrubbing'],
      fr: ['Dégraissage hottes/conduits', 'Polissage inox', 'Désinfection drains', 'Lavage vapeur haute temp', 'Récurage crédences']
    },
    specifications: {
      en: ['Food-Grade Chemicals', 'Health Code Compliant', 'Night Service Priority', 'Certificates Issued'],
      fr: ['Produits grade alimentaire', 'Conformité code santé', 'Priorité service de nuit', 'Certificats délivrés']
    }
  },
  {
    id: 'edu-1',
    title: { en: 'School & Daycare Cleaning', fr: 'Nettoyage École et Crèche' },
    description: { en: 'Safe, non-toxic environment for educational facilities.', fr: 'Environnement sûr et non toxique pour écoles.' },
    detailedDescription: {
      en: 'Protect your students. We use kid-safe, botanical disinfectants to sterilize classrooms and play areas, significantly reducing the spread of seasonal illnesses.',
      fr: 'Protégez vos élèves. Nous utilisons des désinfectants botaniques pour stériliser les classes et les zones de jeux.'
    },
    icon: 'GraduationCap',
    category: 'Specialized',
    includedTasks: {
      en: ['Desk & Chair Sanitizing', 'Play Equipment Sterilization', 'Cafeteria Deep Clean', 'Safe Restroom Hygiene', 'Gymnasium Floor Care'],
      fr: ['Désinfection tables/chaises', 'Stérilisation jeux', 'Nettoyage cantine', 'Hygiène sanitaires sûre', 'Entretien sols gymnase']
    },
    specifications: {
      en: ['100% Non-Toxic Agents', 'Daily Surface Logs', 'Background Checked Staff', 'Allergy-Safe HEPA Vacs'],
      fr: ['Agents 100% non toxiques', 'Journaux passage quotidiens', 'Personnel vérifié', 'Aspirateurs HEPA anti-allergie']
    }
  },
  {
    id: 'air-1',
    title: { en: 'Short-Term Rental Turnover', fr: 'Rotation Location Courte Durée' },
    description: { en: 'High-speed cleaning for Airbnb and rental properties.', fr: 'Nettoyage rapide pour Airbnb et locations.' },
    detailedDescription: {
      en: 'Maintain your 5-star rating. SkyBlue Cleaning provides rapid turnover services including laundry management and property restaging, ensuring every guest feels like the first one.',
      fr: 'Maintenez vos 5 étoiles. SkyBlue Cleaning assure une rotation rapide incluant la gestion du linge pour vos locations.'
    },
    icon: 'Star',
    category: 'Residential',
    includedTasks: {
      en: ['Bed Linen Change', 'Toiletries Restocking', 'Staged Presentation', 'Kitchen Sanitization', 'Inventory Reporting'],
      fr: ['Changement des draps', 'Réapprovisionnement savon', 'Mise en scène accueil', 'Désinfection cuisine', 'Rapport inventaire']
    },
    specifications: {
      en: ['Guaranteed Check-in Ready', 'Photo Report per Stay', 'Laundry Management', 'Emergency Call-outs'],
      fr: ['Prêt pour le check-in', 'Rapport photo par séjour', 'Gestion blanchisserie', 'Interventions d\'urgence']
    }
  },
  {
    id: 'sol-1',
    title: { en: 'Solar Panel Maintenance', fr: 'Entretien de Panneaux Solaires' },
    description: { en: 'Maximizing energy efficiency through professional cleaning.', fr: 'Optimisation de l\'énergie par un nettoyage pro.' },
    detailedDescription: {
      en: 'Dust and bird droppings can reduce solar efficiency by up to 25%. We use deionized water and soft-brush technology to restore your panels to peak performance safely.',
      fr: 'La poussière réduit l\'efficacité solaire jusqu\'à 25%. Nous utilisons l\'eau déionisée pour restaurer les performances.'
    },
    icon: 'Sun',
    category: 'Industrial',
    includedTasks: {
      en: ['Deionized Water Rinse', 'Soft-Brush Dust Removal', 'Bird Nest Clearance', 'Inverter Exterior Wipe', 'Efficiency Pre/Post Test'],
      fr: ['Rinçage eau déionisée', 'Retrait poussière brosse douce', 'Nettoyage nids d\'oiseaux', 'Soin extérieur onduleur', 'Test efficacité pré/post']
    },
    specifications: {
      en: ['No-Chemical Process', 'Safe Roof Access Crew', 'Non-Abrasive Technology', 'Performance Reports'],
      fr: ['Processus sans chimie', 'Équipe accès toit sûre', 'Technologie non abrasive', 'Rapports de performance']
    }
  }
];

export const VALUES: Value[] = [
  {
    title: { en: 'Bonded & Insured', fr: 'Assuré et Garanti' },
    description: { 
      en: 'Full liability coverage for all technicians across West Africa.', 
      fr: 'Assurance responsabilité civile complète pour tous nos techniciens.' 
    },
    icon: 'ShieldCheck'
  },
  {
    title: { en: 'Hospital-Grade Quality', fr: 'Qualité Hospitalière' },
    description: { 
      en: 'EPA-approved disinfectants that kill 99.9% of pathogens.', 
      fr: 'Désinfectants approuvés EPA qui tuent 99,9% des pathogènes.' 
    },
    icon: 'Sparkles'
  },
  {
    title: { en: 'Sustainability First', fr: 'La Durabilité d\'Abord' },
    description: { 
      en: '100% biodegradable, non-toxic agents safe for the planet.', 
      fr: 'Agents 100% biodégradables et non toxiques.' 
    },
    icon: 'Leaf'
  },
  {
    title: { en: 'Reliability & Trust', fr: 'Fiabilité et Confiance' },
    description: { 
      en: 'Rigorous background checks and continuous elite training.', 
      fr: 'Vérifications rigoureuses et formation d\'élite continue.' 
    },
    icon: 'Users'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Mamadou Traoré",
    role: "Property Manager, Plateau Finance Center",
    text: {
      en: "SkyBlue Cleaning has transformed our building's hygiene standards. Their team is punctual, professional, and the floors have never looked better.",
      fr: "SkyBlue Cleaning a transformé les standards d'hygiène de notre bâtiment. L'équipe est ponctuelle et professionnelle."
    }
  },
  {
    id: 2,
    name: "Clarisse Kouamé",
    role: "Riviera Estate Owner",
    text: {
      en: "The move-out cleaning service was exceptional. They saved me so much time and the apartment was spotless for the new tenants.",
      fr: "Le service de nettoyage de déménagement était exceptionnel. L'appartement était impeccable."
    }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: { en: 'Why Office Sanitation Boosts Productivity', fr: 'Pourquoi l\'Assainissement des Bureaux Booste la Productivité' },
    excerpt: { en: 'A clean workspace reduces employee sick days and increases focus.', fr: 'Un espace de travail propre réduit les jours de maladie et augmente la concentration.' },
    date: 'Mar 15, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800',
    author: 'Expert Team'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    title: { en: 'Corporate Tower Refresh', fr: 'Rafraîchissement de Tour d\'Affaires' },
    location: 'Plateau, Abidjan',
    description: { en: 'Daily janitorial for 20 floors of elite workspace.', fr: 'Entretien quotidien pour 20 étages d\'espace de travail.' },
    results: { en: 'Gold Grade Hygiene Certification', fr: 'Certification Hygiène Niveau Or' },
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    category: 'Commercial'
  },
  {
    id: 'p2',
    title: { en: 'Airport Hangar Jet-Cleaning', fr: 'Nettoyage Jet de Hangar Aéroportuaire' },
    location: 'Abidjan FHB Int Airport',
    description: { en: 'Specialized industrial jet cleaning for aviation maintenance hangars and runway aprons.', fr: 'Nettoyage jet industriel spécialisé pour les hangars de maintenance et les aires de trafic.' },
    results: { en: 'International Safety Standard Compliant', fr: 'Conforme aux Normes de Sécurité Internationales' },
    imageUrl: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800',
    category: 'Industrial'
  },
  {
    id: 'p3',
    title: { en: 'Industrial Refinery Jet-Wash', fr: 'Lavage Jet de Raffinerie Industrielle' },
    location: 'San Pedro Industrial Zone',
    description: { en: 'High-pressure petrochemical facility cleaning for storage tanks and piping systems.', fr: 'Nettoyage haute pression d\'installations pétrochimiques pour les réservoirs et les tuyauteries.' },
    results: { en: '0 Incidents Reported', fr: '0 Incidents Signalés' },
    imageUrl: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800',
    category: 'Industrial'
  },
  {
    id: 'p4',
    title: { en: 'Abidjan Mall Large Surface Care', fr: 'Entretien Grandes Surfaces Abidjan Mall' },
    location: 'Riviera, Abidjan',
    description: { en: 'Daily maintenance of 30,000m² of luxury retail floor space and structural glass.', fr: 'Entretien quotidien de 30 000 m² de surfaces commerciales de luxe et de vitrages structurels.' },
    results: { en: 'Diamond Standard Rating', fr: 'Évaluation Norme Diamant' },
    imageUrl: 'https://images.unsplash.com/photo-1567449300518-034b4224ee02?auto=format&fit=crop&q=80&w=800',
    category: 'Commercial'
  }
];

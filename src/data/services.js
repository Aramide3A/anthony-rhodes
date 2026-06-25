import architecturalBlueprint from "../assets/images/services/architectural-blueprint.jpg";
import assetManagement from "../assets/images/services/asset-management.jpg";
import auditDocuments from "../assets/images/services/audit-documents.jpg";
import buildingConstruction from "../assets/images/services/building-construction.jpg";
import civilWorks from "../assets/images/services/civil-works.jpg";
import cleaningSupplies from "../assets/images/services/cleaning-supplies.jpg";
import decorPaintRollers from "../assets/images/services/decor-paint-rollers.jpg";
import electricMeters from "../assets/images/services/electric-meters.jpg";
import electricalPanel from "../assets/images/services/electrical-panel.jpg";
import fireExtinguisher from "../assets/images/services/fire-extinguisher.jpg";
import generator from "../assets/images/services/generator.jpg";
import greenBuilding from "../assets/images/services/green-building.jpg";
import helpDesk from "../assets/images/services/help-desk.jpg";
import hvacUnits from "../assets/images/services/hvac-units.jpg";
import infrastructureMaintenance from "../assets/images/services/infrastructure-maintenance.jpg";
import inventoryBoxes from "../assets/images/services/inventory-boxes.jpg";
import janitorialBottles from "../assets/images/services/janitorial-bottles.jpg";
import landSurvey from "../assets/images/services/land-survey.jpg";
import landscapingLawn from "../assets/images/services/landscaping-lawn.jpg";
import leasingKeys from "../assets/images/services/leasing-keys.jpg";
import maintenanceTools from "../assets/images/services/maintenance-tools.jpg";
import paintCan from "../assets/images/services/paint-can.jpg";
import perimeterFence from "../assets/images/services/perimeter-fence.jpg";
import pestControl from "../assets/images/services/pest-control.jpg";
import procurementDocuments from "../assets/images/services/procurement-documents.jpg";
import projectFinancing from "../assets/images/services/project-financing.jpg";
import propertyDevelopment from "../assets/images/services/property-development.jpg";
import propertyDocuments from "../assets/images/services/property-documents.jpg";
import realEstateSales from "../assets/images/services/real-estate-sales.jpg";
import securityCameras from "../assets/images/services/security-cameras.jpg";
import utilityInfrastructure from "../assets/images/services/utility-infrastructure.jpg";
import voltageMeter from "../assets/images/services/voltage-meter.jpg";
import wasteBins from "../assets/images/services/waste-bins.jpg";
import waterTreatment from "../assets/images/services/water-treatment.jpg";

const landscapingDetails = {
  summary: [
    "AnthonyRhodes specializes in the design, installation and maintenance of commercial and residential landscapes.",
    "Its full service approach enables it to respond to new installations, renovations and ongoing maintenance while creating outdoor settings that add value, beauty and enjoyment to a home, office or building."
  ],
  highlights: [
    "Design, installation and maintenance",
    "Commercial and residential landscapes",
    "New installations and renovations",
    "Ongoing maintenance"
  ]
};

const cleaningDetails = {
  summary: [
    "AnthonyRhodes offers janitorial service and building maintenance company support, with detailed office cleaning services and industrial cleaning services for commercial and residential buildings.",
    "Its cleaning service range includes office and residential cleaning, housekeeping and guest house management, post-construction cleaning, floor maintenance and restoration, carpet and upholstery cleaning, fumigation and pest control, recruitment, training and consultancy."
  ],
  highlights: [
    "Office and residential cleaning",
    "Housekeeping and guest house management",
    "Post-construction cleaning",
    "Floor maintenance and restoration"
  ]
};

const securityDetails = {
  summary: [
    "AnthonyRhodes building security solutions are delivered through trained and experienced staff, state of the art security technologies and responsive service support.",
    "Its service plans are structured so clients can select the right package for their needs across corporate real-estate properties, commercial real-estate properties, residential properties, shopping centers, healthcare facilities, data centers and educational facilities."
  ],
  highlights: [
    "Intrusion Detection and Control Plan",
    "Fire and Life Safety Plan",
    "Video Surveillance Plan",
    "Electronic Access Control Plan"
  ]
};

const waterTreatmentDetails = {
  summary: [
    "AnthonyRhodes water and wastewater treatment solutions are geared towards providing clients with advanced, sustainable and cost-effective water and wastewater handling systems.",
    "Its services focus on industrial, residential, hospital, hotel and IT company environments, with strong expertise to handle different grades of water and effluents."
  ],
  highlights: [
    "Sewage Treatment Plants (STP)",
    "Effluent Treatment Plants (ETP)",
    "Reverse Osmosis Plants",
    "Automatic Water Softener"
  ]
};

const infrastructureDetails = {
  summary: [
    "AnthonyRhodes Integrated Infrastructure Management Services are led by a team of exceptional professionals trained to be proactive rather than reactive.",
    "The company provides a wide range of facilities and asset management services designed to develop optimum facility management solutions that meet existing business needs and can be adapted as the business develops."
  ],
  highlights: [
    "Integrated infrastructure management",
    "Facilities and asset management services",
    "Proactive maintenance teams",
    "Business-ready facility solutions"
  ]
};

const pestControlDetails = {
  summary: [
    "AnthonyRhodes provides fumigation and pest control solutions using safe, green and environmentally friendly products to control and eradicate pests common in Nigeria.",
    "Its team handles residential and commercial pest control for issues involving bed bugs, termites, rats, snakes, houseflies, cockroaches, ants, lizards, spiders, mosquitoes and silverfish."
  ],
  highlights: [
    "Eco-friendly fumigation solutions",
    "Residential pest control",
    "Commercial pest control",
    "Control of bed bugs, termites, rats and more"
  ]
};

const wasteRemovalDetails = {
  summary: [
    "AnthonyRhodes provides prompt and effective waste collection and disposal services to residential apartments, hotels, restaurants, banks, lock-up shops and offices.",
    "Its waste removal work extends to industries, construction and demolition sites, shopping malls and markets, supported by waste transfer station and landfill facility management."
  ],
  highlights: [
    "Household waste collection and disposal",
    "Commercial and industrial waste disposal",
    "Construction and demolition waste handling",
    "Waste transfer station and landfill management"
  ]
};

const paintingDetails = {
  summary: [
    "AnthonyRhodes offers specialist painting and decoration services for commercial and residential refurbishments, maintenance contracting and wider fit-out work.",
    "Its project teams work on small to medium jobs directly for developers, landlords and managing agents, and also support larger projects alongside contractors, architects and interior designers."
  ],
  highlights: [
    "Commercial refurbishments",
    "Residential refurbishment",
    "Ceiling replacement and flooring work",
    "Project-managed decoration support"
  ]
};

const auditDetails = {
  summary: [
    "Regular inspections are vital to the safe, efficient functioning of a facility, and AnthonyRhodes delivers professional inspection and audit services to document and rate the condition of building elements.",
    "Its inspection process includes visual surveys, operating fixtures, equipment and systems, taking photographs, noting code violations, and determining whether updates or repairs are necessary."
  ],
  highlights: [
    "Visual surveys and system checks",
    "Photo documentation",
    "Building code violation notes",
    "Condition reports for repairs and updates"
  ]
};

const janitorialDetails = {
  summary: cleaningDetails.summary,
  highlights: [
    "Detailed office cleaning services",
    "Industrial cleaning services",
    "Commercial and residential buildings",
    "Cleaning, housekeeping and consultancy support"
  ]
};

const realEstateRangeSummary =
  "AnthonyRhodes offers a full range of real estate services including Project Development, Project Management, Project Financing, Leasing, Strategic Planning & Procurement, Sales Services, Architectural Designs, Land Survey and Asset Management Services.";

export const services = [
  {
    title: "Facility Management Services",
    description:
      "Integrated hard and soft facility management services for residential, commercial, estate, and corporate properties.",
    path: "/services/facility-management",
    icon: "Building2"
  },
  {
    title: "Real Estate Development",
    description:
      "Property development support across building, construction, estate security, landscaping, and land title readiness.",
    path: "/services/real-estate-development",
    icon: "Landmark"
  },
  {
    title: "Project Management Services",
    description:
      "Project planning, coordination, supervision, and delivery support for facility and real estate development work.",
    path: "/services/project-management",
    icon: "ClipboardCheck"
  }
];

export const facilityServices = [
  {
    title: "MEP Services",
    image: electricalPanel,
    alt: "Electrical control panel with breakers and colored wiring",
    details: {
      summary: [
        "AnthonyRhodes offers mechanical, electrical and plumbing engineering for all types of buildings, transportation facilities and industry projects according to clients' specific requirements.",
        "Its MEP services are comprehensive for building design and permitting needs, with plan review and operations analysis covering HVAC systems, fire alarm systems, lighting and power systems, sprinkler and standpipe systems, and fire suppression systems."
      ],
      highlights: [
        "Mechanical engineering",
        "Electrical engineering",
        "Plumbing engineering",
        "Plan review and operations analysis"
      ]
    }
  },
  {
    title: "HVAC Services",
    image: hvacUnits,
    alt: "Multiple outdoor air conditioning units arranged beside a building",
    details: {
      summary: [
        "AnthonyRhodes provides preventive maintenance services to keep furnaces and air conditioners running in top condition, including periodic inspections and duct cleaning services.",
        "Its HVAC repair technicians handle heating and cooling problems across different system types and review core components such as the heat exchanger, blower motor, belts, filters and safety controls."
      ],
      highlights: [
        "Maintenance service",
        "Heater service",
        "A/C conditioning service",
        "24/7 emergency availability"
      ]
    }
  },
  {
    title: "Power Vending Services",
    image: electricMeters,
    alt: "Rows of electric meters mounted on an outdoor utility panel",
    details: {
      summary: [
        "AnthonyRhodes Power Vending Services include smart energy meters, smart water meters, intelligent data collection systems for energy and water meters, Advanced Metering Infrastructure (AMI) and electronic testing equipment.",
        "Its power vending management system works across devices such as tablets and smartphones so clients can monitor vending operations and stay prepared for customer demand."
      ],
      highlights: [
        "Smart energy meter",
        "Smart water meter",
        "Advanced Metering Infrastructure (AMI)",
        "Tablet and smartphone monitoring"
      ]
    }
  },
  {
    title: "Civil Works Services",
    image: civilWorks,
    alt: "Yellow excavator working on brown soil at a civil works site",
    details: {
      summary: [
        "AnthonyRhodes performs civil works that include road building, sewerage, stormwater, concrete works and earthworks.",
        "Its team supports industrial, commercial and residential projects with water and sewerage services, pipe installation, pressure testing, pump stations and treatment plants."
      ],
      highlights: [
        "Road building",
        "Sewerage and stormwater works",
        "Concrete works and earthworks",
        "Pump stations and treatment plants"
      ]
    }
  },
  {
    title: "Landscaping Services",
    image: landscapingLawn,
    alt: "Large green lawn bordered by shrubs and trees",
    details: landscapingDetails
  },
  {
    title: "Cleaning Services",
    image: cleaningSupplies,
    alt: "Cleaning spray bottles arranged on a table",
    details: cleaningDetails
  },
  {
    title: "Security Services",
    image: securityCameras,
    alt: "Two surveillance cameras mounted on a building wall",
    details: securityDetails
  },
  {
    title: "Fire Protection & Detection Services",
    image: fireExtinguisher,
    alt: "Red fire extinguisher mounted on a gray wall",
    details: {
      summary: [
        "AnthonyRhodes offers fire detection, protection and evacuation management services and equipment for residential and commercial environments.",
        "Its offerings include the sale, service, installation and repair of extinguishers, hose reels, fire blankets and signage, alongside broader fire systems support."
      ],
      highlights: [
        "Fire panels and programming",
        "Emergency lighting",
        "Thermal and smoke detectors",
        "Fire hydrants and HVAC shutdown support"
      ]
    }
  },
  {
    title: "Water Treatment Plant Installation Services",
    image: waterTreatment,
    alt: "Aerial view of circular tanks at a water treatment facility",
    details: waterTreatmentDetails
  },
  {
    title: "Infrastructure Maintenance Services",
    image: utilityInfrastructure,
    alt: "Outdoor electrical transformer and utility infrastructure",
    details: infrastructureDetails
  },
  {
    title: "Pest Control Services",
    image: pestControl,
    alt: "Close-up pest control reference image showing grouped insects",
    details: pestControlDetails
  },
  {
    title: "Waste Removal Services",
    image: wasteBins,
    alt: "Color-coded waste bins lined beside a wall",
    details: wasteRemovalDetails
  },
  {
    title: "Painting & Decoration Services",
    image: paintCan,
    alt: "Green paint can sitting on a cardboard box for decoration work",
    details: paintingDetails
  },
  {
    title: "Asset Review Services",
    image: auditDocuments,
    alt: "Stacks of organized documents for asset review",
    details: {
      summary: [
        "AnthonyRhodes evaluates the performance of building portfolios for asset planning purposes to optimize alignment between the building portfolio, service delivery requirements and broader objectives.",
        "Its asset review work covers capital works investment, maintenance planning and disposal of surplus assets, together with inspection reports and follow-up inspections until rectification works are completed."
      ],
      highlights: [
        "Capital works investment strategy",
        "Maintenance planning",
        "Disposal of surplus assets",
        "Inspection reports and follow-up checks"
      ]
    }
  },
  {
    title: "Snagging & Handover Assistance Services",
    image: maintenanceTools,
    alt: "Assorted maintenance tools arranged on a work table",
    details: {
      summary: [
        "AnthonyRhodes supports property owners with pre-handover inspections conducted with the property developer, either alongside the owner or on the owner's behalf.",
        "Its trained inspectors identify faults that can be costly to repair once the warranty has expired and check items for serviceability and quality control during the handover period."
      ],
      highlights: [
        "Pre-handover inspection support",
        "Developer handover attendance",
        "Fault identification before warranty expiry",
        "Serviceability and quality control checks"
      ]
    }
  },
  {
    title: "Inspection & Facility Audit",
    image: propertyDocuments,
    alt: "Eyeglasses resting on printed inspection documents",
    details: auditDetails
  },
  {
    title: "Utilities Optimization",
    image: voltageMeter,
    alt: "Close-up analog voltage meter for utility monitoring",
    details: {
      summary: [
        "AnthonyRhodes says its facility management services offer tangible benefits that reduce costs while improving standards and operational efficiency.",
        "Its utility-focused support includes power vending systems built around smart energy meters, smart water meters, intelligent data collection systems and Advanced Metering Infrastructure (AMI)."
      ],
      highlights: [
        "Cost reduction and operational efficiency",
        "Smart energy meters",
        "Smart water meters",
        "Advanced Metering Infrastructure (AMI)"
      ]
    }
  },
  {
    title: "Janitorial Services",
    image: janitorialBottles,
    alt: "White janitorial bottles arranged in a cleaning container",
    details: janitorialDetails
  },
  {
    title: "Generator Maintenance Services",
    image: generator,
    alt: "Industrial generator equipment positioned outdoors",
    details: {
      summary: [
        "AnthonyRhodes provides generator maintenance services covering calibration, reconditioning and repair of industrial and marine equipment, together with overall checking of generator sets and damaged parts.",
        "Its work starts with proper planning, reading job instructions and using industry-approved tools and equipment to execute maintenance tasks in a professional and safe manner."
      ],
      highlights: [
        "Repair",
        "Annual service",
        "Semi-annual maintenance inspections",
        "Cooling system checks"
      ]
    }
  },
  {
    title: "24/7 Help Desk Services",
    image: helpDesk,
    alt: "Laptop on a desk prepared for online support work",
    details: {
      summary: [
        "AnthonyRhodes helpdesk services focus on the service marketplace with help desk, call center support and customer service solutions backed by a customer-focused business philosophy.",
        "Its IT help desk services are delivered by certified professionals and are available 24x7 via web chat, phone, email and a secure web portal."
      ],
      highlights: [
        "24x7 coverage operations",
        "Online and live support chat",
        "Trouble ticket tracking and reporting",
        "Web-based incident reporting tools"
      ]
    }
  },
  {
    title: "24/7 Inventories",
    image: inventoryBoxes,
    alt: "Warehouse aisle filled with labeled inventory boxes",
    details: {
      summary: [
        "AnthonyRhodes property inventory services deliver comprehensive property inventories, check-in and check-out services, and mid-tenancy inspections.",
        "Its reports are designed to be detailed, impartial and easy to read, combining descriptive text with digital photos and 24/7 online viewing, commenting and signing."
      ],
      highlights: [
        "Property inventories",
        "Check-in and check-out services",
        "Mid-tenancy inspections",
        "24/7 online report access"
      ]
    }
  }
];

export const homeFacilityServices = [
  { title: "Power Vending", icon: "Zap" },
  { title: "MEP Services", icon: "Cable" },
  { title: "Civil Works", icon: "Hammer" },
  { title: "Landscaping", icon: "TreePine" },
  { title: "Fire Protection & Detection", icon: "Siren" },
  { title: "Cleaning Services", icon: "Sparkles" },
  { title: "Janitorial and All-Purpose Cleaning", icon: "Sparkles" },
  { title: "Building and General Security Services", icon: "ShieldCheck" },
  { title: "Building Repairs and Maintenance", icon: "Wrench" },
  { title: "Infrastructure Maintenance", icon: "Building2" },
  { title: "Pest Control and Fumigation", icon: "Bug" }
];

export const realEstateServices = [
  {
    title: "Property Development Services",
    image: propertyDevelopment,
    alt: "Concrete building under construction with exposed floors",
    details: {
      summary: [
        "Property Development embraces a number of differing skills, and AnthonyRhodes positions itself to draw on the skills required to bring projects to fruition.",
        "Its property development work covers site identification and acquisition, site analysis, land acquisition and due diligence, supported by concept design, architectural design, feasibility studies, construction management, finance and facilities management."
      ],
      highlights: [
        "Site identification and acquisition",
        "Concept design and master planning",
        "Feasibility studies and cash flow analyses",
        "Development finance and expenditure management"
      ]
    }
  },
  {
    title: "Project Financing",
    image: projectFinancing,
    alt: "House keys, money, and a wallet arranged for real estate financing",
    details: {
      summary: [
        realEstateRangeSummary,
        "AnthonyRhodes also lists feasibility studies and cash flow analyses together with development finance and expenditure management within its Property Development service offering."
      ],
      highlights: [
        "Project financing within the real estate service range",
        "Feasibility studies",
        "Cash flow analyses",
        "Development finance and expenditure management"
      ]
    }
  },
  {
    title: "Leasing",
    image: leasingKeys,
    alt: "A bunch of property keys on a wooden table",
    details: {
      summary: [
        realEstateRangeSummary,
        "AnthonyRhodes says it is always looking for ways to improve the functionality of its estates to make them better and more accommodating to existing clients, prospective clients and property users."
      ],
      highlights: [
        "Leasing within the real estate service range",
        "Residential and commercial property focus",
        "Estate functionality improvements",
        "Support for clients and property users"
      ]
    }
  },
  {
    title: "Strategic Planning & Procurement",
    image: procurementDocuments,
    alt: "Procurement paperwork and a pen on a wooden table",
    details: {
      summary: [
        realEstateRangeSummary,
        "AnthonyRhodes says it has been developing and refining methods and procedures to efficiently control time, cost and quality of a client's construction program, while optimizing strategies for procurement and phase construction."
      ],
      highlights: [
        "Strategic planning within the real estate service range",
        "Procurement strategy",
        "Time, cost and quality control",
        "Phase construction planning"
      ]
    }
  },
  {
    title: "Sales Services",
    image: realEstateSales,
    alt: "Miniature house model on a table for real estate sales",
    details: {
      summary: [
        realEstateRangeSummary,
        "AnthonyRhodes says it provides affordable landed properties and homes to property investors, both commercial and private, and focuses on estate development for residential and commercial property investment."
      ],
      highlights: [
        "Sales services within the real estate service range",
        "Affordable landed properties and homes",
        "Commercial property investors",
        "Private property investors"
      ]
    }
  },
  {
    title: "Architectural Designs",
    image: architecturalBlueprint,
    alt: "Architectural blueprint sheets spread across a work surface",
    details: {
      summary: [
        realEstateRangeSummary,
        "AnthonyRhodes includes concept design and master planning together with architectural design and documentation in its Property Development service listing."
      ],
      highlights: [
        "Architectural designs within the real estate service range",
        "Concept design and master planning",
        "Architectural design",
        "Documentation support"
      ]
    }
  },
  {
    title: "Land Survey",
    image: landSurvey,
    alt: "Survey tripod set up in an open green field",
    details: {
      summary: [
        realEstateRangeSummary,
        "AnthonyRhodes links land-related project support to site identification and acquisition, site analysis, planning approval risk analysis, land acquisition and due diligence on proposed real estate transactions."
      ],
      highlights: [
        "Site identification and acquisition",
        "Planning approval risk analysis",
        "Land acquisition",
        "Due diligence on proposed real estate transactions"
      ]
    }
  },
  {
    title: "Asset Management Services",
    image: assetManagement,
    alt: "Aerial view of residential properties in a managed estate",
    details: {
      summary: [
        realEstateRangeSummary,
        "AnthonyRhodes says it provides a wide range of facilities and asset management services designed to develop optimum facility management solutions that meet existing business needs and can be adapted as the business develops."
      ],
      highlights: [
        "Asset management within the real estate service range",
        "Facilities and asset management services",
        "Business-ready management solutions",
        "Adaptable long-term service support"
      ]
    }
  },
  {
    title: "Building & Construction",
    image: buildingConstruction,
    alt: "Crane positioned above a building under construction",
    details: {
      summary: [
        "AnthonyRhodes says its Building Construction Services bring expertise in the design, installation and management of building services.",
        "Its construction teams focus on controlling time, cost and quality through procurement strategy, phase construction planning and a workforce that covers both mechanical and electrical aspects of building services."
      ],
      highlights: [
        "Water Treatment Systems",
        "Sewage Treatment and Management systems",
        "HVAC Systems",
        "Security and Alarm systems"
      ]
    }
  },
  {
    title: "Public & Private Cleaning Services",
    image: cleaningSupplies,
    alt: "Cleaning spray bottles arranged on a table",
    details: cleaningDetails
  },
  {
    title: "Building Security Services",
    image: securityCameras,
    alt: "Two surveillance cameras mounted on a building wall",
    details: securityDetails
  },
  {
    title: "Aesthetics, Decor & Landscaping Services",
    image: decorPaintRollers,
    alt: "Colorful paint rollers used for interior decoration",
    details: landscapingDetails
  },
  {
    title: "Civil Works",
    image: civilWorks,
    alt: "Yellow excavator working on brown soil at a civil works site",
    details: {
      summary: [
        "AnthonyRhodes performs civil works that include road building, sewerage, stormwater, concrete works and earthworks.",
        "Its teams support industrial, commercial and residential projects with water and sewerage services, pipe installation, pressure testing, pump stations and treatment plants."
      ],
      highlights: [
        "Road building",
        "Sewerage and stormwater works",
        "Concrete works and earthworks",
        "Water and sewerage services"
      ]
    }
  },
  {
    title: "Landscaping",
    image: landscapingLawn,
    alt: "Large green lawn bordered by shrubs and trees",
    details: landscapingDetails
  },
  {
    title: "Perfected Land Titles",
    image: propertyDocuments,
    alt: "Eyeglasses resting on printed legal property documents",
    details: {
      summary: [
        "AnthonyRhodes helps clients secure title to land and process the perfection of land instruments through stamping, registration and obtaining the consent of the Governor or relevant local authority.",
        "It explains that registration and perfection help show the land is encumbered by the buyer, support a presumption of ownership, pass legal estate in the land and strengthen documentary proof of title."
      ],
      highlights: [
        "Stamping",
        "Registration",
        "Governor or local authority consent",
        "Perfection of land instruments"
      ]
    }
  },
  {
    title: "Pest Control Services",
    image: pestControl,
    alt: "Close-up pest control reference image showing grouped insects",
    details: pestControlDetails
  },
  {
    title: "Waste Removal Services",
    image: wasteBins,
    alt: "Color-coded waste bins lined beside a wall",
    details: wasteRemovalDetails
  },
  {
    title: "Perimeter Fencing",
    image: perimeterFence,
    alt: "White wooden perimeter fence beside green trees",
    details: {
      summary: [
        "AnthonyRhodes provides perimeter fencing solutions designed to be stylish, secure and hard wearing for schools, offices, homes and work premises.",
        "Its range includes high-security and temporary fencing options together with site survey support to help clients choose the right system based on cost and security requirements."
      ],
      highlights: [
        "Vertical Bar Security Fencing",
        "Welded Security Mesh Panels",
        "Metal Railings",
        "Site survey capability"
      ]
    }
  },
  {
    title: "Nature-Friendly Environment",
    image: greenBuilding,
    alt: "Green building covered with plants and trees",
    details: {
      summary: [
        "AnthonyRhodes lists Nature Friendly Environment within its real estate service range and says it is always looking for ways to improve the functionality of its estates to make them better and more accommodating.",
        "Its aesthetics and landscaping work focuses on creating outdoor settings that add value, beauty and enjoyment to a home, office or building."
      ],
      highlights: [
        "Improved estate functionality",
        "Outdoor settings that add value and beauty",
        "Commercial and residential landscapes",
        "Installation and maintenance support"
      ]
    }
  },
  {
    title: "Janitorial Services",
    image: janitorialBottles,
    alt: "White janitorial bottles arranged in a cleaning container",
    details: janitorialDetails
  },
  {
    title: "Water Treatment Plant Installation Services",
    image: waterTreatment,
    alt: "Aerial view of circular tanks at a water treatment facility",
    details: waterTreatmentDetails
  },
  {
    title: "Infrastructure Maintenance Services",
    image: infrastructureMaintenance,
    alt: "Crane and concrete structure prepared for infrastructure maintenance",
    details: infrastructureDetails
  },
  {
    title: "Painting & Decoration Services",
    image: paintCan,
    alt: "Green paint can sitting on a cardboard box for decoration work",
    details: paintingDetails
  },
  {
    title: "Inspection & Facility Audit Services",
    image: auditDocuments,
    alt: "Stacks of organized documents for inspection and facility audit",
    details: auditDetails
  }
];

export const facilityCoverage = [
  "Residential apartment buildings",
  "Commercial buildings",
  "Master / estate communities",
  "Public and private buildings"
];

export const industriesServed = [
  "Airports & Airlines",
  "Schools & Universities",
  "Residential & Commercial",
  "Medical Facilities",
  "Estate & Malls",
  "Entertainment Venues"
];

export const realEstateValuePropositions = [
  "Property document storage",
  "Rental management",
  "Commercial property maintenance",
  "Real estate support",
];

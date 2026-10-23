import json
import os

industries = [
    {
        "id": "bearing",
        "filename": "bearing-industry.html",
        "seo_title": "Bearing Components & Rings Manufacturer India | Vimal Forge LLP",
        "seo_desc": "High-performance bearing races, inner/outer rings, and slewing rings forged in SAE 52100 chrome steel for anti-friction bearings.",
        "hero_badge": "Bearing Industry Solutions",
        "hero_title": "Precision Bearing Rings &amp; Races Forging",
        "hero_subtitle": "High-cleanliness chrome steel bearing components developed to tight tolerances for heavy-duty rotation machinery.",
        "hero_video": "ring_rolling_loop",
        "stats": [
            {"value": "100%", "label": "Ultrasonic Tested"},
            {"value": "SAE 52100", "label": "Chrome Steel"},
            {"value": "IT7 Grade", "label": "Turning Tolerance"}
        ],
        "applications": [
            {"title": "Inner Races", "desc": "Spheroidized chrome steel tracks to secure high radial rotation load."},
            {"title": "Outer Races", "desc": "Continuous grain boundaries forged to resist wear under B2B load fatigue."},
            {"title": "Bearing Sleeves", "desc": "CNC rough-turned sleeves ready for final grinding lines."},
            {"title": "Lock Nuts &amp; Washers", "desc": "Threaded locking caps and spacer washers for axial shaft stacks."}
        ],
        "products": [
            {
                "title": "Precision Bearing Races",
                "desc": "Outer and inner races spheroidize-annealed to obtain 100% pearlite structure for anti-wear parameters.",
                "material": "SAE 52100 Chrome Steel / 100Cr6",
                "apps": "Deep groove ball bearings, tapered bearing sets",
                "image": "/assets/images/bearing_races_showcase.png"
            },
            {
                "title": "Bearing Sleeves &amp; Turned Rings",
                "desc": "Bushing sleeves rough-machined within 15 microns. Ready for heat treatment.",
                "material": "SAE 52100 / Alloy Carbon",
                "apps": "Industrial speed reducers, shaft gear boxes",
                "image": "/assets/images/bearing-rotating.png"
            },
            {
                "title": "Thrust Washers &amp; Lock Nuts",
                "desc": "Thin flat washers drop forged to prevent air gap faults in high torque boxes.",
                "material": "Medium Carbon / Alloy steel",
                "apps": "Transmission couplers, axle assemblies",
                "image": "/assets/images/about_leadership.png"
            }
        ],
        "materials": [
            {
                "tag": "SAE 52100",
                "title": "SAE 52100 / 100Cr6 Chrome Steel",
                "products": "Inner/Outer races, roller tracks, bearing cups",
                "apps": "Anti-friction ball and roller bearings",
                "process": "Spheroidize Annealed to 180-207 HB to ensure machineability",
                "industries": "Bearing OEMs, Industrial gearboxes"
            },
            {
                "tag": "100Cr6",
                "title": "100Cr6 High Carbon Chromium Steel",
                "products": "Heavy duty turned sleeves, slewing gear blanks",
                "apps": "Wind turbine rotation assemblies, railway wheelsets",
                "process": "Isothermal annealing for uniform carbide dispersal",
                "industries": "Heavy Machinery, Renewable Energy"
            }
        ],
        "capabilities": [
            {"title": "Induction Billet Heating", "desc": "Precise heat audit prevent grain structure boundaries from overheating."},
            {"title": "Radial CNC Ring Rolling", "desc": "Seamless expansion of inner/outer races up to 500mm OD."},
            {"title": "Spheroidized Annealing", "desc": "Controlled oven cycles secure uniform carbide grain spheroids."}
        ],
        "gallery": [
            {"img": "/assets/images/bearing_races_showcase.png", "title": "Precision Bearing Races"},
            {"img": "/assets/images/bearing-rotating.png", "title": "Turned Sleeves"},
            {"img": "/assets/images/about_story_factory.png", "title": "Forging Plant CNC Line"}
        ]
    },
    {
        "id": "automotive",
        "filename": "automotive-industry.html",
        "seo_title": "Automotive Forged Components Manufacturer | Vimal Forge LLP",
        "seo_desc": "High-tensile closed-die automotive forgings. Differential gears, universal joint flange yokes, axel spindles, and prop shafts.",
        "hero_badge": "Automotive Drivetrain Solutions",
        "hero_title": "High-Tensile Automotive Forged Parts",
        "hero_subtitle": "Denseclosed-die drivetrain components forged to resist critical torsional vibrations and gear shocks.",
        "hero_video": "forging_loop",
        "stats": [
            {"value": "20MnCr5", "label": "Primary Alloy Grade"},
            {"value": "0.00%", "label": "Field Failure Rate"},
            {"value": "15 Days", "label": "Die Prototyping"}
        ],
        "applications": [
            {"title": "Differential Couplers", "desc": "High density crown gear rings and bevel pinions for transmission stacks."},
            {"title": "Wheel Hub Spindles", "desc": "Axle hubs turned and splined to resist commercial truck weight."},
            {"title": "Universal Flange Yokes", "desc": "Drive couplers designed for continuous high-torque drivetrain runs."},
            {"title": "Camshaft Links", "desc": "Reciprocating valve actuating cams and brake drum linkages."}
        ],
        "products": [
            {
                "title": "AXEL HUB Spindle Sets",
                "desc": "Commercial truck hubs CNC splined. Quenched and tempered to achieve heavy shear limits.",
                "material": "EN19 / EN24 Alloy Steels",
                "apps": "Heavy duty commercial vehicles, trailers",
                "image": "https://vimalsteelforge.com/wp-content/uploads/2024/09/NTN-SPINDLE.jpg"
            },
            {
                "title": "Cam Shaft &amp; Brake Drum Parts",
                "desc": "Solid actutation brackets forged in closed drop hammers. Shot blasted.",
                "material": "EN8 / EN9 Medium Carbon",
                "apps": "Commercial transport brakes, suspension",
                "image": "https://vimalsteelforge.com/wp-content/uploads/2021/04/cam-shaft-break-drum.png"
            },
            {
                "title": "FLANGE YOKE drive couplers",
                "desc": "Universal prop shaft couplings. Continuous grain alignment prevents crack propagation.",
                "material": "20MnCr5 / SAE 8620 / C45",
                "apps": "Automotive drivetrains, PTO assemblies",
                "image": "https://vimalsteelforge.com/wp-content/uploads/2024/09/Flange-Yoke.jpg"
            }
        ],
        "materials": [
            {
                "tag": "20MnCr5",
                "title": "20MnCr5 Case Hardening Alloy",
                "products": "Gear blanks, crown rings, companion yokes",
                "apps": "Automotive transmissions, rear axle gears",
                "process": "Isothermally Annealed for structural machining and case hardening ease",
                "industries": "Automotive Drivetrain, Off-Highway Vehicles"
            },
            {
                "tag": "SAE 8620",
                "title": "SAE 8620 Case Hardening Steel",
                "products": "Universal joint couplers, differential pinions",
                "apps": "Heavy truck propeller shafts, bevel sets",
                "process": "Gas carburized for high surface hardness (HRC 58-62) and ductile core",
                "industries": "Commercial Vehicles, Transmissions"
            }
        ],
        "capabilities": [
            {"title": "Closed-Die Drop Forging", "desc": "High pressure hammers shape metal with exact fiber grain directions."},
            {"title": "Spline Machining", "desc": "Precision internal and external splines on multi-axis CNC centers."},
            {"title": "Quench &amp; Tempering", "desc": "Targeted liquid cooling maximizes ultimate yield and shear limits."}
        ],
        "gallery": [
            {"img": "https://vimalsteelforge.com/wp-content/uploads/2024/09/NTN-SPINDLE.jpg", "title": "Hub Spindles"},
            {"img": "https://vimalsteelforge.com/wp-content/uploads/2024/09/Flange-Yoke.jpg", "title": "Flange Yokes"},
            {"img": "/assets/images/gear_blanks_showcase.png", "title": "Automotive Gear Rings"}
        ]
    },
    {
        "id": "agriculture",
        "filename": "agriculture-industry.html",
        "seo_title": "Agriculture Equipment Forgings &amp; Rings | Vimal Forge LLP",
        "seo_desc": "High-durability forged gears, ring rolled spacers, and linkage rods for farm tractors, harvesters, and tillers.",
        "hero_badge": "Agricultural Equipment Solutions",
        "hero_title": "Heavy Forged Agriculture Components",
        "hero_subtitle": "Severe impact wear-resistant components engineered to withstand soil friction, dust, and continuous loading.",
        "hero_video": "forging_loop",
        "stats": [
            {"value": "100%", "label": "Heat Code Traceable"},
            {"value": "EN8 / C45", "label": "Tough Carbon Steel"},
            {"value": "ISO 9001", "label": "Quality Certified"}
        ],
        "applications": [
            {"title": "Harvester Gear Blanks", "desc": "CNC rolled rings machined with teeth for heavy rotary drives."},
            {"title": "Linkage Arm Connectors", "desc": "Closed die drop forged rods for tractor implement tow hitches."},
            {"title": "Drive Shaft Spindles", "desc": "High load power take-off (PTO) splined shafts."},
            {"title": "Tiller Soil Hubs", "desc": "Soil plow discs and rotavator coupling hubs."}
        ],
        "products": [
            {
                "title": "Gear Ring Blanks",
                "desc": "Seamless rolled gear rings with uniform planetary density to handle PTO shocks.",
                "material": "20MnCr5 / 16MnCr5 / EN8",
                "apps": "Tractor gearboxes, planetary gear systems",
                "image": "/assets/images/rolled_rings_showcase.png"
            },
            {
                "title": "Large Rolled Spacers",
                "desc": "Thick ring sleeves to align drive bearings in dirty field conditions.",
                "material": "EN8 / C45 / Carbon Steel",
                "apps": "Rotavators, soil prep assemblies",
                "image": "/assets/images/custom_forgings_showcase.png"
            },
            {
                "title": "Closed Die Linkage Rods",
                "desc": "Structural linkage brackets drop forged to eliminate void crack failures.",
                "material": "Medium Carbon Steels",
                "apps": "Tractor rear hitch systems, tillers",
                "image": "https://vimalsteelforge.com/wp-content/uploads/2024/09/Chain-Link.jpg"
            }
        ],
        "materials": [
            {
                "tag": "C45 Carbon",
                "title": "C45 / EN8 Medium Carbon Steel",
                "products": "Tractor linkages, PTO brackets, sleeve rings",
                "apps": "Agricultural implement frames, rotavator drives",
                "process": "Normalized to secure high fatigue limits and easy machining",
                "industries": "Agriculture Machinery, Structural Engineering"
            },
            {
                "tag": "EN19",
                "title": "EN19 / 4140 Chrome Molybdenum Steel",
                "products": "Soil tiller shafts, splined axle couplers",
                "apps": "Heavy harvester drive shafts, PTO shafts",
                "process": "Hardened and Tempered to BHN 280-320 for severe shear strength",
                "industries": "Agriculture Drives, Off-Highway Powertrains"
            }
        ],
        "capabilities": [
            {"title": "CNC Ring Rolling", "desc": "Tough seamless rings up to 500mm diameter for harvester gears."},
            {"title": "Closed-Die Drop Forgings", "desc": "Drop hammers shape high strength links for tractor hitches."},
            {"title": "In-house Tool Design", "desc": "Fast 15-day prototype loops for custom implement drawings."}
        ],
        "gallery": [
            {"img": "/assets/images/rolled_rings_showcase.png", "title": "Seamless Rolled Rings"},
            {"img": "/assets/images/custom_forgings_showcase.png", "title": "Forged Connectors"},
            {"img": "/assets/images/about_leadership.png", "title": "Precision Turned Spacers"}
        ]
    },
    {
        "id": "construction",
        "filename": "construction-equipment.html",
        "seo_title": "Construction Equipment Components Manufacturer | Vimal Forge LLP",
        "seo_desc": "High-strength loader linkages, crane swivel rings, excavator connecting rods, and articulated joint forgings.",
        "hero_badge": "Construction Machinery Solutions",
        "hero_title": "High-Strength Construction Forgings",
        "hero_subtitle": "Engineered closed-die structural blocks and gears developed to withstand variable load stress.",
        "hero_video": "machining_loop",
        "stats": [
            {"value": "50,000T", "label": "Annual Capacity"},
            {"value": "EN19/24", "label": "Alloy Grades"},
            {"value": "100%", "label": "MPI Checked"}
        ],
        "applications": [
            {"title": "Articulated Joints", "desc": "Drop forged loader pivots to withstand heavy excavator loading."},
            {"title": "Connecting Rods", "desc": "High compression dense engine links for concrete mixer machines."},
            {"title": "Swivel Rings", "desc": "Planetary gear ring blanks for crane rotation manifolds."},
            {"title": "Forged Brackets", "desc": "High density frame mount lugs for earth movers."}
        ],
        "products": [
            {
                "title": "Connecting Rod Components",
                "desc": "reciprocating pump and diesel engine rods forged to eliminate micro voids.",
                "material": "EN19 / 20MnCr5 Steel",
                "apps": "Industrial pumps, concrete engines",
                "image": "https://vimalsteelforge.com/wp-content/uploads/2024/09/Connecting-Rod-1.png"
            },
            {
                "title": "Multi-Throw Crankshafts",
                "desc": "Drop forged crankshafts with continuous grain lines to maximize torque limits.",
                "material": "EN19 / EN24 Alloy Steels",
                "apps": "Excavator pump drives, piston pumps",
                "image": "https://vimalsteelforge.com/wp-content/uploads/2022/12/Crank-Shaft.png"
            },
            {
                "title": "Custom Hydraulic Ends",
                "desc": "Forged base cylinders ends developed from customer 3D models.",
                "material": "C45 / EN8 Carbon Steel",
                "apps": "Backhoe cylinder assemblies, lift arms",
                "image": "/assets/images/cylinder_ends_showcase.png"
            }
        ],
        "materials": [
            {
                "tag": "EN19 Alloy",
                "title": "EN19 / AISI 4140 Alloy Steel",
                "products": "Crankshafts, connecting rods, loader spindles",
                "apps": "Excavator engines, concrete pump gear drives",
                "process": "Quenched & Tempered to BHN 280-320 for ultimate shear strength",
                "industries": "Construction Equipment, Off-Highway Vehicles"
            },
            {
                "tag": "EN24 Alloy",
                "title": "EN24 / AISI 4340 Nickel-Alloy",
                "products": "Heavy duty steering shafts, gear blanks",
                "apps": "Heavy duty earth compactors, loader drive sets",
                "process": "Double temper cycles to achieve high impact fracture limits",
                "industries": "Earth Moving, Heavy Transport"
            }
        ],
        "capabilities": [
            {"title": "Closed-Die Hot Forging", "desc": "Massive screw press and hammer forging ensures voidless metal flow."},
            {"title": "VMC Tool Machining", "desc": "In-house tooling center shapes custom dies in 15 days."},
            {"title": "Spectrometer Analysis", "desc": "Italy GNR spectrometers verify chemistry before forging."}
        ],
        "gallery": [
            {"img": "https://vimalsteelforge.com/wp-content/uploads/2024/09/Connecting-Rod-1.png", "title": "Connecting Rods"},
            {"img": "https://vimalsteelforge.com/wp-content/uploads/2022/12/Crank-Shaft.png", "title": "Multi-Throw Crankshafts"},
            {"img": "/assets/images/custom_forgings_showcase.png", "title": "Loader Pivot Forgings"}
        ]
    },
    {
        "id": "earthmoving",
        "filename": "earth-moving-equipment.html",
        "seo_title": "Earth Moving Equipment Forging Components | Vimal Forge LLP",
        "seo_desc": "High-durability excavator track links, drive sprocket blanks, heavy gear rings, and loader pin forgings.",
        "hero_badge": "Earth Moving Equipment Solutions",
        "hero_title": "Premium Forgings For Earth Movers",
        "hero_subtitle": "Severe wear and impact-resistant forged crawler track links and drive sprocket components.",
        "hero_video": "machining_loop",
        "stats": [
            {"value": "Quenched", "label": "Targeted Hardening"},
            {"value": "EN24 Nickel", "label": "Impact Core Toughness"},
            {"value": "Zero Voids", "label": "Forced Grain Flow"}
        ],
        "applications": [
            {"title": "Crawler Track Links", "desc": "High density link forgings to resist abrasive granite quarry wear."},
            {"title": "Drive Sprocket Rings", "desc": "Planetary wheel drive ring blanks for track crawl motors."},
            {"title": "Quarry Crusher Shafts", "desc": "Heavy load drives designed for high torque shock."},
            {"title": "Dumper Axle Spindles", "desc": "Heavy utility axle spindles for off-highway mining dumpers."}
        ],
        "products": [
            {
                "title": "Chain Links &amp; Track Parts",
                "desc": "Conveyor and track links forged to secure high impact resistance in rock fields.",
                "material": "EN8 / EN9 / Carbon Alloys",
                "apps": "Mining excavators, track dozers",
                "image": "https://vimalsteelforge.com/wp-content/uploads/2024/09/Chain-Link.jpg"
            },
            {
                "title": "Sprocket Ring Blanks",
                "desc": "Closed-die sprocket blanks with perfect grain flow to prevent teeth fracturing.",
                "material": "20MnCr5 / EN19 / Carbon Steel",
                "apps": "Excavator crawl motors, wheel loaders",
                "image": "/assets/images/rolled_rings_showcase.png"
            },
            {
                "title": "Heavy Axle Spindles",
                "desc": "Solid turned axels developed to absorb severe wheel loading.",
                "material": "EN19 / EN24 Alloy Steels",
                "apps": "Off-highway haulage dumper tracks",
                "image": "https://vimalsteelforge.com/wp-content/uploads/2024/09/NTN-SPINDLE.jpg"
            }
        ],
        "materials": [
            {
                "tag": "EN24",
                "title": "EN24 Nickel-Chrome-Moly Steel",
                "products": "Crawler track axles, heavy joint pins, gears",
                "apps": "Quarry excavators, track bulldozers",
                "process": "Normalized, Quenched, and double tempered for fracture safety",
                "industries": "Earth Moving, Mining Equipment"
            },
            {
                "tag": "20MnCr5",
                "title": "20MnCr5 Alloy Case Steel",
                "products": "Wheel drive sprocket hubs, bevel pinions",
                "apps": "Planetary travel boxes, gearbox rings",
                "process": "Carburized to obtain HRC 58-62 surface shell with ductile core",
                "industries": "Transmission, Earth Moving Gears"
            }
        ],
        "capabilities": [
            {"title": "Die Forging Press", "desc": "Closed die hammers optimize fiber boundary directions in track links."},
            {"title": "Liquid Quenching", "desc": "Controlled cooling achieves target hardness depths on wear surfaces."},
            {"title": "Spectrometry QA", "desc": "Spectrometer analysis ensures correct alloy contents for quarry use."}
        ],
        "gallery": [
            {"img": "https://vimalsteelforge.com/wp-content/uploads/2024/09/Chain-Link.jpg", "title": "Forged Track Links"},
            {"img": "/assets/images/rolled_rings_showcase.png", "title": "Sprocket Ring Blanks"},
            {"img": "/assets/images/about_story_factory.png", "title": "Factory Machining Bay"}
        ]
    },
    {
        "id": "hydraulic",
        "filename": "hydraulic-industry.html",
        "seo_title": "Hydraulic Components Manufacturer India | Vimal Forge LLP",
        "seo_desc": "Leak-free forged hydraulic cylinder ends, turned guide bushings, cylinder base caps, and high-pressure flanges.",
        "hero_badge": "Hydraulic Industry Solutions",
        "hero_title": "Leak-Free Hydraulic Forgings",
        "hero_subtitle": "Dense base caps and rod eyes developed to eliminate hydraulic weeping under 350+ bar pressure.",
        "hero_video": "machining_loop",
        "stats": [
            {"value": "350+ Bar", "label": "Leak-Free Limit"},
            {"value": "C45 Steel", "label": "Weldability Standard"},
            {"value": "10 Microns", "label": "CNC Tolerances"}
        ],
        "applications": [
            {"title": "Cylinder Rod Eyes", "desc": "High pressure forged cylinder ends that hold structural rod loops."},
            {"title": "Turned Bushing Guides", "desc": "CNC turned bushings ready for seals to block pressure fluid leaks."},
            {"title": "High-Pressure Flanges", "desc": "Dense flow manifold flanges to link tubing sections."},
            {"title": "Cylinder Base Caps", "desc": "Solid steel caps forged to secure main pressure chamber bottoms."}
        ],
        "products": [
            {
                "title": "Custom Hydraulic Cylinder Ends",
                "desc": "Base caps and rod eyes drop forged with excellent weldability profiles.",
                "material": "C45 / EN8 Carbon Steels",
                "apps": "Backhoe loaders, dump truck actuators",
                "image": "/assets/images/cylinder_ends_showcase.png"
            },
            {
                "title": "Turned Guide Bushings",
                "desc": "CNC guide glands turned within 10-micron limits to fit dynamic pressure packings.",
                "material": "SAE 52100 / Carbon Alloys",
                "apps": "Industrial cylinders, scissor lifts",
                "image": "/assets/images/bearing-rotating.png"
            },
            {
                "title": "Manifold Joint Flanges",
                "desc": "Thick-walled pipe connection flanges designed to prevent leakage.",
                "material": "C20 / C45 / SS316",
                "apps": "High flow hydraulic manifolds, subsea valves",
                "image": "/assets/images/custom_forgings_showcase.png"
            }
        ],
        "materials": [
            {
                "tag": "C45 / EN8",
                "title": "C45 / EN8 Medium Carbon Steel",
                "products": "Cylinder ends, rod eyes, guide caps",
                "apps": "Loader lift cylinders, industrial press actuators",
                "process": "Normalized to optimize mechanical yield limits and welding safety",
                "industries": "Hydraulics, Agricultural Implements"
            },
            {
                "tag": "C20 / EN3",
                "title": "C20 Low Carbon Steel",
                "products": "Weldable spacer rings, low-pressure collars",
                "apps": "Sanitary piping manifolds, light brackets",
                "process": "Stress relieved to obtain high ductility and ease of welding",
                "industries": "Hydraulic Plumbing, Light Engineering"
            }
        ],
        "capabilities": [
            {"title": "Press Forging Punching", "desc": "Hot punches shape inside holes, reducing machining chips by 30%."},
            {"title": "CNC Turning Tolerances", "desc": "Lathe lines hold IT7 tolerances (+/- 10 microns) for seal packs."},
            {"title": "Weldability Assurance", "desc": "Low carbon equivalent controls avoid hardening cracks at client plants."}
        ],
        "gallery": [
            {"img": "/assets/images/cylinder_ends_showcase.png", "title": "Hydraulic Cylinder Ends"},
            {"img": "/assets/images/bearing-rotating.png", "title": "Turned Bushings"},
            {"img": "/assets/images/about_story_factory.png", "title": "VMC Machine Tooling Shop"}
        ]
    },
    {
        "id": "oilgas",
        "filename": "oil-gas-industry.html",
        "seo_title": "Oil &amp; Gas Forged Components Manufacturer | Vimal Forge LLP",
        "seo_desc": "Corrosion-resistant forged elbows, subsea valve adaptor housings, blind flanges, and gasket rings matching ASTM standards.",
        "hero_badge": "Oil &amp; Gas Piping Solutions",
        "hero_title": "Corrosion-Resistant Forgings",
        "hero_subtitle": "Dense alloy flanges and adaptors meeting strict ASTM pressure ratings for offshore pipelines.",
        "hero_video": "quality_loop",
        "stats": [
            {"value": "SS316L", "label": "High-Corrosion Alloy"},
            {"value": "NACE", "label": "Compliant Materials"},
            {"value": "Zero leaks", "label": "ASTM Standard Flanges"}
        ],
        "applications": [
            {"title": "Adaptor Housings", "desc": "Couplers to connect offshore manifold piping loops safely."},
            {"title": "Pipeline Flanges", "desc": "Blind and weld-neck flanges to cap off high-pressure gas lines."},
            {"title": "Forged Elbow Joints", "desc": "Curved piping junctions drop forged to handle flow abrasive wear."},
            {"title": "Gasket Seal Rings", "desc": "Precision flat spacer rings designed for leak-free subsea valves."}
        ],
        "products": [
            {
                "title": "Adeptor Housing",
                "desc": "High pressure pipe adapters with thick walls to resist corrosive offshore elements.",
                "material": "SS316 / SS304 / C45",
                "apps": "Drilling manifolds, gas loops",
                "image": "https://vimalsteelforge.com/wp-content/uploads/2024/09/FORGE-HOUSING.jpg"
            },
            {
                "title": "Seamless Valve Rings",
                "desc": "Ring rolled valve gaskets. radial-axial rolling ensures no grain breaks.",
                "material": "SS316L / SS304 / Duplex",
                "apps": "High temperature subsea valve manifolds",
                "image": "/assets/images/rolled_rings_showcase.png"
            },
            {
                "title": "High-Pressure Piping Flanges",
                "desc": "Raised face flanges CNC turned. 100% MPI tested.",
                "material": "SS316, SS304, Medium Carbon",
                "apps": "Plumbing manifolds, gas pipelines",
                "image": "/assets/images/custom_forgings_showcase.png"
            }
        ],
        "materials": [
            {
                "tag": "SS 316",
                "title": "SS 316 / Grade 1.4401 Stainless",
                "products": "Manifold adaptors, valve gasket rings, elbows",
                "apps": "Offshore drilling manifolds, chemical fertilizer pipelines",
                "process": "Solution Annealed (Carbide Dissolution) for pitting corrosion safety",
                "industries": "Petrochemical Pipelines, Offshore Gas"
            },
            {
                "tag": "SS 304",
                "title": "SS 304 / Grade 1.4301 Stainless",
                "products": "Connection flanges, protective pipeline rings",
                "apps": "Corrosive fluid lines, subsea sleeves",
                "process": "Heat treated to maximize weld joint corrosion immunity",
                "industries": "Chemical processing, Plumbing networks"
            }
        ],
        "capabilities": [
            {"title": "Stainless Forging press", "desc": "Targeted temperatures prevent carbide precipitations in stainless steel."},
            {"title": "Italy GNR Spectrometer", "desc": "Optical emission spectrometer verifies chrome/nickel content accuracy."},
            {"title": "Solution Annealing", "desc": "Solution oven cooling resolves stainless grains for pitting defense."}
        ],
        "gallery": [
            {"img": "https://vimalsteelforge.com/wp-content/uploads/2024/09/FORGE-HOUSING.jpg", "title": "Adeptor Housing"},
            {"img": "/assets/images/rolled_rings_showcase.png", "title": "Valve Seat Rings"},
            {"img": "/assets/images/about_story_factory.png", "title": "Spectrometry Laboratory"}
        ]
    },
    {
        "id": "machinery",
        "filename": "industrial-machinery.html",
        "seo_title": "Industrial Machinery Components Manufacturer | Vimal Forge LLP",
        "seo_desc": "High-torque compressor crankshafts, industrial pump connecting rods, gearbox spacer rings, and turned bushing sleeves.",
        "hero_badge": "Industrial Machinery Solutions",
        "hero_title": "High-Precision Machine Components",
        "hero_subtitle": "Dense closed-die forged shafts and connecting rods designed for low vibration and wear resistance.",
        "hero_video": "machining_loop",
        "stats": [
            {"value": "15+ Years", "label": "Engineering Experience"},
            {"value": "All Alloys", "label": "Custom Grade Mix"},
            {"value": "IT8 Capable", "label": "Precision CNC Lathes"}
        ],
        "applications": [
            {"title": "Compressor Cranks", "desc": "Drop forged multi-throw crankshaft webs designed for low vibration."},
            {"title": "Pump Connecting Rods", "desc": "High compression dense link bars for reciprocating piston pump lines."},
            {"title": "Bushing Sleeves", "desc": "anti-wear turned sleeves ready for heat case hardening."},
            {"title": "Gearbox Spacers", "desc": "Seamless ring spacer tubes designed to bridge gear shafts."}
        ],
        "products": [
            {
                "title": "Connecting Rods &amp; Shafts",
                "desc": "High density connecting rods for industrial piston compressors.",
                "material": "EN19 / 20MnCr5 / Carbon Steel",
                "apps": "Piston pumps, compressor air systems",
                "image": "https://vimalsteelforge.com/wp-content/uploads/2024/09/Connecting-Rod-1.png"
            },
            {
                "title": "Seamless Spacer Rings",
                "desc": "Spacer tubes rolled to eliminate structural voids. CNC turned.",
                "material": "EN8 / C45 / C20 Carbon",
                "apps": "Industrial transmissions, speed reducers",
                "image": "/assets/images/rolled_rings_showcase.png"
            },
            {
                "title": "Turned Bushing Sleeves",
                "desc": "Precision sleeves turned and ground to minimize wear friction.",
                "material": "SAE 52100 / Alloy steels",
                "apps": "Paper mills, machinery pivot sleeves",
                "image": "/assets/images/bearing-rotating.png"
            }
        ],
        "materials": [
            {
                "tag": "EN19 Alloy",
                "title": "EN19 Chrome Molybdenum Alloy",
                "products": "Pump crankshafts, heavy connecting rods",
                "apps": "Reciprocating pumps, compressor motors",
                "process": "Quenched & Tempered to BHN 280-320 to secure ultimate wear limits",
                "industries": "Machinery Power, Oilfield Pumps"
            },
            {
                "tag": "C45 Carbon",
                "title": "C45 Medium Carbon Steel",
                "products": "Gear shaft sleeves, spacer rings, flange plates",
                "apps": "Industrial gearboxes, pulley sleeves",
                "process": "Normalized to eliminate internal residual forging stresses",
                "industries": "General Engineering, Heavy Machinery"
            }
        ],
        "capabilities": [
            {"title": "Drop Hammer Forging", "desc": "High density drop forged blocks ensure structural shaft yield."},
            {"title": "Rough &amp; Finish CNC Turning", "desc": "CNC lathes turn inside diameters within 15-micron limits."},
            {"title": "MPI Crack Testing", "desc": "Magnetic particle crack testing verifies structural surface safety."}
        ],
        "gallery": [
            {"img": "https://vimalsteelforge.com/wp-content/uploads/2024/09/Connecting-Rod-1.png", "title": "Machined Connecting Rods"},
            {"img": "/assets/images/bearing-rotating.png", "title": "Bushing Sleeves"},
            {"img": "/assets/images/about_story_factory.png", "title": "CNC Lathe Turning Lines"}
        ]
    },
    {
        "id": "heavy",
        "filename": "heavy-engineering.html",
        "seo_title": "Heavy Engineering Components &amp; Rings | Vimal Forge LLP",
        "seo_desc": "Seamless rolled rings up to 500mm OD, heavy gearbox ring gears, customized closed-die drop forgings for OEMs.",
        "hero_badge": "Heavy Engineering Solutions",
        "hero_title": "Seamless Rolled Rings &amp; Forgings",
        "hero_subtitle": "Custom drawing-based forged rings up to 500mm OD developed inside a rapid 15-day tooling loop.",
        "hero_video": "ring_rolling_loop",
        "stats": [
            {"value": "500mm OD", "label": "Max Ring Rolling"},
            {"value": "In-house", "label": "Tooling Shops"},
            {"value": "GNR Italy", "label": "Spectrometer Lab"}
        ],
        "applications": [
            {"title": "Wind Turbine Pitch Rings", "desc": "Planetary pitch ring gear blanks to rotate windmill blades."},
            {"title": "Heavy Gearbox Blanks", "desc": "Large rings rolled to minimize scrap weights during gear teeth cutting."},
            {"title": "Thick Spacer Sleeves", "desc": "Seamless cylinder sleeve sleeves designed to hold heavy axle loads."},
            {"title": "Customized Forged Blocks", "desc": "Heavy closed die structural forgings for industrial turbines."}
        ],
        "products": [
            {
                "title": "Seamless Rolled Rings",
                "desc": "Seamless rolled ring blanks. Radial-axial rolling ensures no grain breaks.",
                "material": "EN8, C45, C20, SS316",
                "apps": "Wind turbine gear rings, heavy gearbox frames",
                "image": "https://vimalsteelforge.com/wp-content/uploads/2021/04/costmise-forged-ring.png"
            },
            {
                "title": "Large Spacer sleeves",
                "desc": "Seamless tubes punched and rolled. Rough turned to customer specs.",
                "material": "EN8 / C45 / Carbon Steel",
                "apps": "Paper mills, industrial gear boxes",
                "image": "/assets/images/custom_forgings_showcase.png"
            },
            {
                "title": "Customized Die Forgings",
                "desc": "Heavy closed-die components machined with custom tool layouts.",
                "material": "Carbon &amp; Alloy steels",
                "apps": "Heavy machine frames, industrial pumps",
                "image": "/assets/images/rolled_rings_showcase.png"
            }
        ],
        "materials": [
            {
                "tag": "C45 Carbon",
                "title": "C45 / EN8 Carbon Steel",
                "products": "Large rolled rings, spacer sleeves, flanges",
                "apps": "Piping couplers, windmill frames",
                "process": "Normalized to secure stable mechanical properties",
                "industries": "Heavy Machinery, Wind Turbines"
            },
            {
                "tag": "EN24 Nickel",
                "title": "EN24 Nickel-Chrome-Moly Alloy",
                "products": "Heavy duty main shafts, gear rings",
                "apps": "High torque windmill drive sets, large gearboxes",
                "process": "Quenched & tempered to BHN 280-320 for ultimate shear load",
                "industries": "Wind Energy, Mining Machinery"
            }
        ],
        "capabilities": [
            {"title": "Radial-Axial Ring Rolling", "desc": "High dimensional reproducibility for gear ring blanks up to 500mm OD."},
            {"title": "In-house Die shops", "desc": "Dies carved inside a 15-day development loop for custom drawings."},
            {"title": "NDT QA Inspection", "desc": "100% MPI crack testing and Italy spectrometer checks ensure zero defect shipments."}
        ],
        "gallery": [
            {"img": "https://vimalsteelforge.com/wp-content/uploads/2021/04/costmise-forged-ring.png", "title": "Large Rolled Rings"},
            {"img": "/assets/images/custom_forgings_showcase.png", "title": "Thick Spacer Sleeves"},
            {"img": "/assets/images/about_story_factory.png", "title": "Heavy Forging Shop"}
        ]
    }
]

template_html = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{seo_title}</title>
  <meta name="description" content="{seo_desc}">
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/motion.css">
  <link rel="stylesheet" href="/css/products-v4.css">
</head>
<body>
  <div id="page-content">

    <!-- Header Section -->
    <include src="components/header.html"></include>

    <!-- SECTION 1: Industry Hero -->
    <section class="industry-hero-section">
      <video autoplay loop muted playsinline class="industry-video-bg">
        <source src="/assets/videos/{hero_video}.webm" type="video/webm">
        <source src="/assets/videos/{hero_video}.mp4" type="video/mp4">
      </video>
      <div class="hero-v4-overlay"></div>
      <div class="industry-hero-content">
        <span class="hero-v4-badge" data-anim="slide-left">{hero_badge}</span>
        <h1 class="hero-v4-title text-white" data-anim="fade-up" style="font-size: clamp(2.2rem, 5vw, 4rem); max-width:800px; font-weight: 800; font-family: var(--font-heading);">
          {hero_title}
        </h1>
        <p class="hero-v4-subtitle text-grey-light" data-anim="fade-up" data-anim-delay="0.1" style="max-width:700px;">
          {hero_subtitle}
        </p>
        <div class="hero-v4-buttons" data-anim="scale" data-anim-delay="0.2">
          <a href="#rfq-section" class="btn btn-primary">Request Industry RFQ</a>
          <a href="#applications" class="btn btn-secondary">Explore Applications</a>
        </div>
        
        <div class="industry-stats-row" data-anim="fade-up" data-anim-delay="0.3">
          {stats_html}
        </div>
      </div>
    </section>

    <!-- SECTION 2: Applications In This Industry -->
    <section id="applications" style="padding: 8rem 0; background: #060913;">
      <div class="section-container">
        <div class="text-center mb-5">
          <span class="section-tagline">System Applications</span>
          <h2 class="section-title text-white">Where Our Components Work</h2>
          <p class="section-subtitle text-grey-light">Precision engineering configurations designed for severe service environments in the {hero_badge} market.</p>
        </div>
        
        <div class="grid-4" style="margin-top: 3.5rem;">
          {apps_html}
        </div>
      </div>
    </section>

    <!-- SECTION 3: Products Used In This Industry -->
    <section style="padding: 8rem 0; background: #03060a; border-top: 1px solid rgba(255,255,255,0.03);">
      <div class="section-container">
        <div class="text-center mb-5">
          <span class="section-tagline">Sourcing Catalog</span>
          <h2 class="section-title text-white">Relevant Products Used</h2>
          <p class="section-subtitle text-grey-light">OEM drawing-based components manufactured from certified raw steel with uniform grain boundaries.</p>
        </div>

        <div class="showcase-cards-list" style="margin-top: 4rem;">
          {products_html}
        </div>
      </div>
    </section>

    <!-- SECTION 4: Material Grades Used -->
    <section style="padding: 8rem 0; background: #060913; border-top: 1px solid rgba(255,255,255,0.03);">
      <div class="section-container">
        <div class="text-center mb-5">
          <span class="section-tagline">Chemical &amp; Mechanical Limits</span>
          <h2 class="section-title text-white">Material Grade Matrix</h2>
          <p class="section-subtitle text-grey-light">Alloy grades heat treated to match client specifications for ultimate tensile yield and fatigue defense.</p>
        </div>

        <div class="mat-selector-container">
          <!-- Left: Nav List -->
          <div class="mat-nav-list">
            {mat_buttons}
          </div>
          <!-- Right: Details Card -->
          <div class="mat-details-box">
            <div class="mat-details-header">
              <span class="badge-tag industry-badge" id="gd-family-badge">Loading...</span>
              <h3 id="gd-title" class="text-white">Alloy Detail Panel</h3>
            </div>
            <div class="mat-details-body">
              <div class="mat-details-row">
                <span>Compatible Components</span>
                <p id="gd-products">---</p>
              </div>
              <div class="mat-details-row">
                <span>Core Applications</span>
                <p id="gd-apps">---</p>
              </div>
              <div class="mat-details-row">
                <span>Heat Treatment Process</span>
                <p id="gd-process">---</p>
              </div>
              <div class="mat-details-row">
                <span>Target Verticals</span>
                <p id="gd-industries">---</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: Manufacturing Capabilities Used -->
    <section style="padding: 8rem 0; background: #03060a; border-top: 1px solid rgba(255,255,255,0.03);">
      <div class="section-container">
        <div class="text-center mb-5">
          <span class="section-tagline">Process Strength</span>
          <h2 class="section-title text-white">Capabilities &amp; Workflow Used</h2>
          <p class="section-subtitle text-grey-light">How we carve dies, forge billets, and turn components to ensure fully dense structures.</p>
        </div>

        <div class="cap-flow-container">
          {caps_html}
        </div>
      </div>
    </section>

    <!-- SECTION 6: Industry Gallery -->
    <section style="padding: 8rem 0; background: #060913; border-top: 1px solid rgba(255,255,255,0.03);">
      <div class="section-container">
        <div class="text-center mb-5">
          <span class="section-tagline">Factory Inventory</span>
          <h2 class="section-title text-white">Machinery &amp; Product Gallery</h2>
          <p class="section-subtitle text-grey-light">Unretouched B2B photographs showing actual products, CNC lathe lines, and hammer presses.</p>
        </div>

        <div class="grid-3" style="margin-top: 4rem; gap: 2rem;">
          {gallery_html}
        </div>
      </div>
    </section>

    <!-- SECTION 7: Quality & Traceability -->
    <section style="padding: 8rem 0; background: #03060a; border-top: 1px solid rgba(255,255,255,0.03);">
      <div class="section-container">
        <div class="text-center mb-5">
          <span class="section-tagline">Zero Defects Promise</span>
          <h2 class="section-title text-white">Quality Assurance &amp; Material Traceability</h2>
          <p class="section-subtitle text-grey-light">We protect B2B client integrity using certified spectrometer inspection and heat-code barcoding audits.</p>
        </div>

        <div class="grid-3" style="margin-top: 4rem; gap: 2.2rem;">
          <div class="advantage-card" data-anim="fade-up">
            <div class="adv-icon">🧪</div>
            <h3 class="text-white">Spectrometer Chemistry</h3>
            <p class="text-grey-light" style="font-size:0.92rem; line-height:1.55;">GNR Italy optical emission spectrometers check alloy contents. Zero billing is approved without chemical conformity logs.</p>
          </div>
          <div class="advantage-card" data-anim="fade-up" data-anim-delay="0.1">
            <div class="adv-icon">🔍</div>
            <h3 class="text-white">100% MPI Crack Audits</h3>
            <p class="text-grey-light" style="font-size:0.92rem; line-height:1.55;">Magnetic particle inspection (MPI) filters out any micro-voids, boundary folds, or internal fissures on high-stress components.</p>
          </div>
          <div class="advantage-card" data-anim="fade-up" data-anim-delay="0.2">
            <div class="adv-icon">⛓️</div>
            <h3 class="text-white">Heat Code laser stamping</h3>
            <p class="text-grey-light" style="font-size:0.92rem; line-height:1.55;">Each component receives a laser-stamped batch heat number, linking raw material chemical certificates to the final product shipment.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 8: Industry RFQ CTA (Global Component) -->
    <div id="rfq-section">
      <include src="components/cta-section.html"></include>
    </div>

    <!-- Footer Section -->
    <include src="components/footer.html"></include>

  </div> <!-- end #page-content -->

  <!-- Sticky Overlays -->
  <div class="sticky-widgets-container">
    <a href="https://wa.me/919979777787?text=Hi%20Vimal%20Forge,%20we%20have%20an%20RFQ%20inquiry." class="floating-btn floating-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">💬</a>
    <a href="/rfq.html" class="floating-btn floating-rfq" aria-label="Request Quotation">RFQ</a>
  </div>
  <div class="mobile-call-bar">
    <a href="tel:+919979777787">📞 Call Sourcing Manager (+91 99797 77787)</a>
  </div>

  <!-- Schema Markup -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "{hero_title}",
    "description": "{seo_desc}",
    "brand": {{
      "@type": "Brand",
      "name": "Vimal Forge LLP"
    }},
    "offers": {{
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "itemCondition": "https://schema.org/NewCondition"
    }}
  }}
  </script>

  <!-- Immersive Motion Design Engines -->
  <script src="https://cdn.jsdelivr.net/npm/lenis@1.1.14/dist/lenis.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
  <script type="module" src="/js/motion.js"></script>
  <script type="module">
    // Interactive Selector Database
    const database = {materials_db_json};
    
    document.addEventListener('DOMContentLoaded', () => {{
      const btns = document.querySelectorAll('.mat-nav-btn');
      const badge = document.getElementById('gd-family-badge');
      const title = document.getElementById('gd-title');
      const products = document.getElementById('gd-products');
      const apps = document.getElementById('gd-apps');
      const process = document.getElementById('gd-process');
      const industries = document.getElementById('gd-industries');
      
      function updateDetails(idx) {{
        const item = database[idx];
        if (!item) return;
        
        if (typeof gsap !== 'undefined') {{
          gsap.to([badge, title, products, apps, process, industries], {{
            opacity: 0,
            y: 5,
            duration: 0.15,
            stagger: 0.02,
            onComplete: () => {{
              badge.textContent = item.family || 'Alloy Carbon';
              title.textContent = item.title;
              products.textContent = item.products;
              apps.textContent = item.apps;
              process.textContent = item.process;
              industries.textContent = item.industries;
              
              gsap.to([badge, title, products, apps, process, industries], {{
                opacity: 1,
                y: 0,
                duration: 0.25,
                stagger: 0.02
              }});
            }}
          }});
        }} else {{
          badge.textContent = item.family || 'Alloy Carbon';
          title.textContent = item.title;
          products.textContent = item.products;
          apps.textContent = item.apps;
          process.textContent = item.process;
          industries.textContent = item.industries;
        }}
      }}
      
      btns.forEach((btn, idx) => {{
        btn.addEventListener('click', () => {{
          btns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          updateDetails(idx);
        }});
      }});
      
      // Load first item
      updateDetails(0);

      // Card 3D tilt interaction
      const cards = document.querySelectorAll('.showcase-story-card');
      if (cards.length && typeof gsap !== 'undefined') {{
        cards.forEach(card => {{
          card.addEventListener('mousemove', e => {{
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xc = rect.width / 2;
            const yc = rect.height / 2;
            const angleX = (yc - y) / 20;
            const angleY = (x - xc) / 20;
            
            gsap.to(card, {{
              rotateX: angleX,
              rotateY: angleY,
              ease: 'power1.out',
              duration: 0.35,
              transformPerspective: 1000
            }});
          }});
          card.addEventListener('mouseleave', () => {{
            gsap.to(card, {{
              rotateX: 0,
              rotateY: 0,
              ease: 'power2.out',
              duration: 0.6
            }});
          }});
        }});
      }}
    }});
  </script>
  <script type="module" src="/js/main.js"></script>
</body>
</html>
"""

output_dir = '/Users/maulikdaraniya/Desktop/Vimal'

for ind in industries:
    # Build Stats HTML
    stats_html = ""
    for stat in ind["stats"]:
        stats_html += f'''
          <div class="industry-stat-item">
            <h3>{stat["value"]}</h3>
            <p>{stat["label"]}</p>
          </div>'''
          
    # Build Apps HTML
    apps_html = ""
    for app in ind["applications"]:
        apps_html += f'''
          <div class="advantage-card" style="text-align:left; background:rgba(255,255,255,0.015); border:1px solid rgba(255,255,255,0.04); padding:2rem; border-radius:8px;">
            <span style="font-size:1.5rem; display:block; margin-bottom:0.8rem; color:var(--color-accent);">✔</span>
            <h4 class="text-white" style="font-size:1.15rem; font-weight:700; margin-bottom:0.5rem; font-family:var(--font-heading);">{app["title"]}</h4>
            <p class="text-grey-light" style="font-size:0.88rem; line-height:1.5;">{app["desc"]}</p>
          </div>'''
          
    # Build Products HTML
    products_html = ""
    is_reverse = False
    for prod in ind["products"]:
        rev_class = " reverse-row" if is_reverse else ""
        products_html += f'''
          <div class="showcase-story-card{rev_class}">
            <div class="card-media-col">
              <img src="{prod["image"]}" alt="{prod["title"]}">
            </div>
            <div class="card-info-col">
              <div class="card-badges">
                <span class="badge-tag industry-badge">{ind["hero_badge"]}</span>
                <span class="badge-tag material-badge">{prod["material"]}</span>
              </div>
              <h4>{prod["title"]}</h4>
              <p class="card-desc">{prod["desc"]}</p>
              <div class="card-specs-table">
                <div class="spec-row"><span>Material Specification:</span><strong>{prod["material"]}</strong></div>
                <div class="spec-row"><span>Primary Applications:</span><strong>{prod["apps"]}</strong></div>
              </div>
              <a href="/rfq.html?product={prod["title"].replace(' ', '%20')}" class="btn btn-primary">Request Draw RFQ</a>
            </div>
          </div>'''
        is_reverse = not is_reverse
        
    # Build Material Selector buttons
    mat_buttons = ""
    for idx, mat in enumerate(ind["materials"]):
        act_class = " active" if idx == 0 else ""
        mat_buttons += f'''
            <button class="mat-nav-btn{act_class}" data-idx="{idx}">{mat["tag"]}</button>'''
            
    # Build Capabilities timeline flow
    caps_html = ""
    for idx, cap in enumerate(ind["capabilities"]):
        caps_html += f'''
          <div class="cap-flow-step">
            <div class="cap-flow-marker">0{idx+1}</div>
            <div class="cap-flow-content">
              <h4>{cap["title"]}</h4>
              <p>{cap["desc"]}</p>
            </div>
          </div>'''
          
    # Build Gallery HTML
    gallery_html = ""
    for item in ind["gallery"]:
        gallery_html += f'''
          <div class="hud-card-media" style="border-radius:8px; overflow:hidden; aspect-ratio:4/3; border: 1px solid rgba(255,255,255,0.06); box-shadow:0 10px 25px rgba(0,0,0,0.35);">
            <img src="{item["img"]}" alt="{item["title"]}" style="width:100%; height:100%; object-fit:cover;">
          </div>'''

    # Generate Final HTML
    html_content = template_html.format(
        seo_title=ind["seo_title"],
        seo_desc=ind["seo_desc"],
        hero_video=ind["hero_video"],
        hero_badge=ind["hero_badge"],
        hero_title=ind["hero_title"],
        hero_subtitle=ind["hero_subtitle"],
        stats_html=stats_html,
        apps_html=apps_html,
        products_html=products_html,
        mat_buttons=mat_buttons,
        materials_db_json=json.dumps(ind["materials"]),
        caps_html=caps_html,
        gallery_html=gallery_html
    )
    
    file_path = os.path.join(output_dir, ind["filename"])
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(html_content)
        
    print(f"Generated page: {ind['filename']}")

print("All 9 industry pages generated successfully!")

// Mega Array of vehicles
let vehicles = [
  {
    name: "Hawaii Perry",
    driver: "Gilmore Colon ",
    position: "Maple Avenue",
    regNr: "DZM443",
    make: "Volvo",
    model: "FL6 H42R",
    vin: "72661565610221139",
    services: [
      {
        name: "Positioning",
        active: 0,
      },
      {
        name: "Positioning +",
        active: 1,
      },
      {
        name: "Driver Times",
        active: 0,
      },
      {
        name: "Fuel & Environment",
        active: 1,
      },
      {
        name: "Uptime Data",
        active: 1,
      },
    ],
    profile: [
      {
        type: "Long Haul 4",
        euroClass: "EURO 6",
      },
    ],
  },
  {
    name: "Connecticut Flynn",
    driver: "Concepcion Levy ",
    position: "Rodney Street",
    regNr: "OHH200",
    make: "Volvo",
    model: "B12B 97",
    vin: "84281794475903097",
    services: [
      {
        name: "Positioning",
        active: 1,
      },
    ],
    profile: [
      {
        type: "Long Haul 3",
        euroClass: "EURO 2",
      },
    ],
  },
  {
    name: "Vermont Berg",
    driver: "Abbott Miranda ",
    position: "Aurelia Court",
    regNr: "ARL774",
    make: "Volvo",
    model: "FH13 62T",
    vin: 15189981171256392,
    services: [
      {
        name: "Positioning",
        active: 1,
      },
      {
        name: "Positioning +",
        active: 1,
      },
      {
        name: "Driver Times",
        active: 0,
      },
      {
        name: "Fuel & Environment",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Long Haul Rough",
        euroClass: "EURO 2",
      },
    ],
  },
  {
    name: "South Dakota Olsen",
    driver: "Brigitte Yang ",
    position: "Irwin Street",
    regNr: "XWU969",
    make: "Volvo",
    model: "FH16 62R",
    vin: 35075928552430504,
    services: [
      {
        name: "Positioning",
        active: 1,
      },
      {
        name: "Positioning +",
        active: 0,
      },
      {
        name: "Driver Times",
        active: 1,
      },
      {
        name: "Fuel & Environment",
        active: 1,
      },
      {
        name: "Uptime Data",
        active: 0,
      },
      {
        name: "Vehicle Data",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Long Haul 4",
        euroClass: "EURO 6",
      },
    ],
  },
  {
    name: "Northern Mariana Islands Walton",
    driver: "Sheri Riley ",
    position: "Pierrepont Place",
    regNr: "CKR401",
    make: "Volvo",
    model: "FL6 H42R",
    vin: 27127788351539244,
    services: [
      {
        name: "Positioning",
        active: 0,
      },
      {
        name: "Positioning +",
        active: 0,
      },
      {
        name: "Driver Times",
        active: 0,
      },
      {
        name: "Fuel & Environment",
        active: 1,
      },
    ],
    profile: [
      {
        type: "Long Haul 5",
        euroClass: "EURO 6",
      },
    ],
  },
  {
    name: "Michigan Payne",
    driver: "Bridgette Baker ",
    position: "Girard Street",
    regNr: "LMQ385",
    make: "Volvo",
    model: "FH13A64T",
    vin: 42552895633728040,
    services: [],
    profile: [
      {
        type: "Construction Very Rough",
        euroClass: "EURO 1",
      },
    ],
  },
  {
    name: "Oregon Carson",
    driver: "Pena Mcmahon ",
    position: "Whitwell Place",
    regNr: "UYX877",
    make: "Volvo",
    model: "FH16 62R",
    vin: 3789384642911216,
    services: [
      {
        name: "Positioning",
        active: 0,
      },
      {
        name: "Positioning +",
        active: 1,
      },
      {
        name: "Driver Times",
        active: 1,
      },
    ],
    profile: [
      {
        type: "Long Haul Heavy",
        euroClass: "EURO 4",
      },
    ],
  },
  {
    name: "Delaware Palmer",
    driver: "Stephanie Sanders ",
    position: "Heath Place",
    regNr: "WTO670",
    make: "Volvo",
    model: "FH12 42R",
    vin: 41979491758440664,
    services: [],
    profile: [
      {
        type: "Distribution Rough",
        euroClass: "EURO 5",
      },
    ],
  },
  {
    name: "Oklahoma Logan",
    driver: "Patrick Lara ",
    position: "Franklin Street",
    regNr: "SRX712",
    make: "Volvo",
    model: "FH13 62T",
    vin: 1266907904457631,
    services: [
      {
        name: "Positioning",
        active: 1,
      },
    ],
    profile: [
      {
        type: "Long Haul 6",
        euroClass: "EURO 1",
      },
    ],
  },
  {
    name: "Indiana Sears",
    driver: "Lang Blackburn ",
    position: "Riverdale Avenue",
    regNr: "BBR789",
    make: "Volvo",
    model: "FL6 H42R",
    vin: 47766541819404750,
    services: [
      {
        name: "Positioning",
        active: 0,
      },
      {
        name: "Positioning +",
        active: 0,
      },
      {
        name: "Driver Times",
        active: 1,
      },
      {
        name: "Fuel & Environment",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Long Haul 6",
        euroClass: "EURO 4",
      },
    ],
  },
  {
    name: "Georgia Pena",
    driver: "Duran Hamilton ",
    position: "Franklin Avenue",
    regNr: "ERS696",
    make: "Volvo",
    model: "FH12 42R",
    vin: 46435092237485700,
    services: [
      {
        name: "Positioning",
        active: 1,
      },
    ],
    profile: [
      {
        type: "Long Haul 5",
        euroClass: "EURO 2",
      },
    ],
  },
  {
    name: "Maine Jensen",
    driver: "Allie Mays ",
    position: "Lincoln Avenue",
    regNr: "WRH799",
    make: "Volvo",
    model: "B12B 97",
    vin: 59583798453801930,
    services: [],
    profile: [
      {
        type: "Long Haul 5",
        euroClass: "EURO 6",
      },
    ],
  },
  {
    name: "Guam Fitzpatrick",
    driver: "Lilian Torres ",
    position: "Stillwell Avenue",
    regNr: "YOX398",
    make: "Volvo",
    model: "FH13A64T",
    vin: 24809861987751744,
    services: [],
    profile: [
      {
        type: "Construction Very Rough",
        euroClass: "EURO 4",
      },
    ],
  },
  {
    name: "Kentucky Gutierrez",
    driver: "Lyons Hopkins ",
    position: "Hampton Place",
    regNr: "QAR061",
    make: "Volvo",
    model: "FH16 62R",
    vin: 63288805068646240,
    services: [
      {
        name: "Positioning",
        active: 0,
      },
      {
        name: "Positioning +",
        active: 0,
      },
      {
        name: "Driver Times",
        active: 0,
      },
      {
        name: "Fuel & Environment",
        active: 1,
      },
      {
        name: "Uptime Data",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Long Haul 3",
        euroClass: "EURO 6",
      },
    ],
  },
  {
    name: "New Hampshire Rodgers",
    driver: "Mitchell Caldwell ",
    position: "Schenck Place",
    regNr: "FPU554",
    make: "Volvo",
    model: "FH13 62T",
    vin: 828675883354520,
    services: [
      {
        name: "Positioning",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Construction Very Rough",
        euroClass: "EURO 2",
      },
    ],
  },
  {
    name: "Nebraska Barker",
    driver: "Clare Owen ",
    position: "Newport Street",
    regNr: "LUB613",
    make: "Volvo",
    model: "FH16 62R",
    vin: 37872482360232980,
    services: [
      {
        name: "Positioning",
        active: 1,
      },
      {
        name: "Positioning +",
        active: 1,
      },
    ],
    profile: [
      {
        type: "Construction Very Rough",
        euroClass: "EURO 1",
      },
    ],
  },
  {
    name: "North Carolina Tucker",
    driver: "Carter Dickerson ",
    position: "Beacon Court",
    regNr: "HAQ747",
    make: "Volvo",
    model: "B12B 97",
    vin: 5099498656231808,
    services: [
      {
        name: "Positioning",
        active: 0,
      },
      {
        name: "Positioning +",
        active: 0,
      },
      {
        name: "Driver Times",
        active: 1,
      },
      {
        name: "Fuel & Environment",
        active: 0,
      },
      {
        name: "Uptime Data",
        active: 0,
      },
      {
        name: "Vehicle Data",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Construction Very Rough",
        euroClass: "EURO 1",
      },
    ],
  },
  {
    name: "Utah Calhoun",
    driver: "Linda Durham ",
    position: "Ainslie Street",
    regNr: "DCT136",
    make: "Volvo",
    model: "FH13 62T",
    vin: 64436010455509976,
    services: [
      {
        name: "Positioning",
        active: 1,
      },
      {
        name: "Positioning +",
        active: 0,
      },
      {
        name: "Driver Times",
        active: 1,
      },
      {
        name: "Fuel & Environment",
        active: 0,
      },
      {
        name: "Uptime Data",
        active: 1,
      },
      {
        name: "Vehicle Data",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Long Haul 4",
        euroClass: "EURO 2",
      },
    ],
  },
  {
    name: "South Carolina Strong",
    driver: "Jana Carter ",
    position: "Fanchon Place",
    regNr: "HAJ265",
    make: "Volvo",
    model: "FH12 42R",
    vin: 73150356122707900,
    services: [
      {
        name: "Positioning",
        active: 1,
      },
    ],
    profile: [
      {
        type: "Long Haul Rough",
        euroClass: "EURO 2",
      },
    ],
  },
  {
    name: "Arkansas Lindsey",
    driver: "Bolton Dean ",
    position: "Lyme Avenue",
    regNr: "USM249",
    make: "Volvo",
    model: "FH13A64T",
    vin: 70877650633935256,
    services: [
      {
        name: "Positioning",
        active: 1,
      },
      {
        name: "Positioning +",
        active: 0,
      },
      {
        name: "Driver Times",
        active: 0,
      },
      {
        name: "Fuel & Environment",
        active: 0,
      },
      {
        name: "Uptime Data",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Long Haul Smooth",
        euroClass: "EURO 3",
      },
    ],
  },
  {
    name: "Ohio Day",
    driver: "Briggs Garrison ",
    position: "Seaview Avenue",
    regNr: "HNS012",
    make: "Volvo",
    model: "FH13A64T",
    vin: 60321517934391970,
    services: [],
    profile: [
      {
        type: "Long Haul 3",
        euroClass: "EURO 2",
      },
    ],
  },
  {
    name: "Alabama Whitley",
    driver: "Nieves Gilliam ",
    position: "Indiana Place",
    regNr: "UGS321",
    make: "Volvo",
    model: "FH13 62T",
    vin: 69116238339208984,
    services: [
      {
        name: "Positioning",
        active: 0,
      },
      {
        name: "Positioning +",
        active: 1,
      },
      {
        name: "Driver Times",
        active: 1,
      },
      {
        name: "Fuel & Environment",
        active: 0,
      },
      {
        name: "Uptime Data",
        active: 1,
      },
      {
        name: "Vehicle Data",
        active: 1,
      },
    ],
    profile: [
      {
        type: "Long Haul Smooth",
        euroClass: "EURO 4",
      },
    ],
  },
  {
    name: "New Mexico Singleton",
    driver: "Merle Townsend ",
    position: "Havens Place",
    regNr: "ERR309",
    make: "Volvo",
    model: "FH16 62R",
    vin: 4681959803737625,
    services: [
      {
        name: "Positioning",
        active: 1,
      },
      {
        name: "Positioning +",
        active: 1,
      },
    ],
    profile: [
      {
        type: "Long Haul 5",
        euroClass: "EURO 2",
      },
    ],
  },
  {
    name: "Montana Ruiz",
    driver: "Dunn Arnold ",
    position: "Dikeman Street",
    regNr: "NCQ870",
    make: "Volvo",
    model: "B12B 97",
    vin: 27097380331012600,
    services: [
      {
        name: "Positioning",
        active: 1,
      },
      {
        name: "Positioning +",
        active: 0,
      },
      {
        name: "Driver Times",
        active: 1,
      },
      {
        name: "Fuel & Environment",
        active: 0,
      },
      {
        name: "Uptime Data",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Long Haul 3",
        euroClass: "EURO 6",
      },
    ],
  },
  {
    name: "Iowa Norman",
    driver: "Imelda Dominguez ",
    position: "Williams Place",
    regNr: "KVK994",
    make: "Volvo",
    model: "FH13A64T",
    vin: 63850314104387090,
    services: [
      {
        name: "Positioning",
        active: 0,
      },
      {
        name: "Positioning +",
        active: 1,
      },
    ],
    profile: [
      {
        type: "Long Haul 6",
        euroClass: "EURO 1",
      },
    ],
  },
  {
    name: "Florida James",
    driver: "Everett Richards ",
    position: "Furman Street",
    regNr: "QRM750",
    make: "Volvo",
    model: "FH16 62R",
    vin: 42909015464308010,
    services: [
      {
        name: "Positioning",
        active: 0,
      },
      {
        name: "Positioning +",
        active: 1,
      },
      {
        name: "Driver Times",
        active: 0,
      },
      {
        name: "Fuel & Environment",
        active: 0,
      },
      {
        name: "Uptime Data",
        active: 1,
      },
      {
        name: "Vehicle Data",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Distribution Smooth",
        euroClass: "EURO 1",
      },
    ],
  },
  {
    name: "Mississippi Ewing",
    driver: "Jenifer Byers ",
    position: "Manor Court",
    regNr: "TTV916",
    make: "Volvo",
    model: "FH13 62T",
    vin: 29690040799475810,
    services: [
      {
        name: "Positioning",
        active: 1,
      },
      {
        name: "Positioning +",
        active: 1,
      },
      {
        name: "Driver Times",
        active: 1,
      },
      {
        name: "Fuel & Environment",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Long Haul 4",
        euroClass: "EURO 3",
      },
    ],
  },
  {
    name: "Alaska Schultz",
    driver: "Gilda Hodge ",
    position: "Vanderbilt Street",
    regNr: "TIL848",
    make: "Volvo",
    model: "FH13 62T",
    vin: 17408061103560872,
    services: [
      {
        name: "Positioning",
        active: 1,
      },
      {
        name: "Positioning +",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Long Haul 3",
        euroClass: "EURO 5",
      },
    ],
  },
  {
    name: "Palau Nunez",
    driver: "Ofelia Savage ",
    position: "Little Street",
    regNr: "ZLT342",
    make: "Volvo",
    model: "FH16 62R",
    vin: 40948772321076390,
    services: [
      {
        name: "Positioning",
        active: 1,
      },
      {
        name: "Positioning +",
        active: 0,
      },
      {
        name: "Driver Times",
        active: 0,
      },
      {
        name: "Fuel & Environment",
        active: 1,
      },
      {
        name: "Uptime Data",
        active: 1,
      },
      {
        name: "Vehicle Data",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Construction Very Rough",
        euroClass: "EURO 5",
      },
    ],
  },
  {
    name: "Federated States Of Micronesia King",
    driver: "Vanessa Curry ",
    position: "Wallabout Street",
    regNr: "OEX195",
    make: "Volvo",
    model: "FH13A64T",
    vin: 15565791238565062,
    services: [
      {
        name: "Positioning",
        active: 0,
      },
      {
        name: "Positioning +",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Long Haul 4",
        euroClass: "EURO 2",
      },
    ],
  },
  {
    name: "North Dakota Fitzgerald",
    driver: "Anastasia Davis ",
    position: "Sharon Street",
    regNr: "RNM790",
    make: "Volvo",
    model: "FH13A64T",
    vin: 92697462652693820,
    services: [],
    profile: [
      {
        type: "Distribution Rough",
        euroClass: "EURO 3",
      },
    ],
  },
  {
    name: "New Jersey Morin",
    driver: "Lourdes Castaneda ",
    position: "Seba Avenue",
    regNr: "UNR006",
    make: "Volvo",
    model: "FL6 H42R",
    vin: 81201900492309650,
    services: [
      {
        name: "Positioning",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Long Haul 3",
        euroClass: "EURO 5",
      },
    ],
  },
  {
    name: "Colorado Adams",
    driver: "Weiss Eaton ",
    position: "Cambridge Place",
    regNr: "INP905",
    make: "Volvo",
    model: "FH13A64T",
    vin: 4382225946322513,
    services: [
      {
        name: "Positioning",
        active: 0,
      },
      {
        name: "Positioning +",
        active: 1,
      },
      {
        name: "Driver Times",
        active: 1,
      },
      {
        name: "Fuel & Environment",
        active: 1,
      },
      {
        name: "Uptime Data",
        active: 1,
      },
      {
        name: "Vehicle Data",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Long Haul 6",
        euroClass: "EURO 6",
      },
    ],
  },
  {
    name: "Tennessee Cameron",
    driver: "Rodriguez Mercer ",
    position: "Boerum Street",
    regNr: "EIX815",
    make: "Volvo",
    model: "FH12 42R",
    vin: 37055957966865830,
    services: [
      {
        name: "Positioning",
        active: 1,
      },
      {
        name: "Positioning +",
        active: 0,
      },
      {
        name: "Driver Times",
        active: 1,
      },
      {
        name: "Fuel & Environment",
        active: 1,
      },
      {
        name: "Uptime Data",
        active: 1,
      },
      {
        name: "Vehicle Data",
        active: 1,
      },
    ],
    profile: [
      {
        type: "Long Haul Heavy",
        euroClass: "EURO 1",
      },
    ],
  },
  {
    name: "American Samoa Leon",
    driver: "Lucy Cruz ",
    position: "Oak Street",
    regNr: "VHY520",
    make: "Volvo",
    model: "FH12 42R",
    vin: 7394200800873676,
    services: [
      {
        name: "Positioning",
        active: 0,
      },
      {
        name: "Positioning +",
        active: 1,
      },
      {
        name: "Driver Times",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Construction Very Rough",
        euroClass: "EURO 3",
      },
    ],
  },
  {
    name: "Louisiana Holland",
    driver: "Savannah Sloan ",
    position: "Arlington Place",
    regNr: "WPW424",
    make: "Volvo",
    model: "FH16 62R",
    vin: 31537098091174010,
    services: [
      {
        name: "Positioning",
        active: 0,
      },
      {
        name: "Positioning +",
        active: 0,
      },
      {
        name: "Driver Times",
        active: 1,
      },
    ],
    profile: [
      {
        type: "Construction Very Rough",
        euroClass: "EURO 2",
      },
    ],
  },
  {
    name: "Illinois Duran",
    driver: "Mann Wilcox ",
    position: "Grafton Street",
    regNr: "ZXQ699",
    make: "Volvo",
    model: "FH13A64T",
    vin: 97491421572194220,
    services: [
      {
        name: "Positioning",
        active: 1,
      },
      {
        name: "Positioning +",
        active: 1,
      },
      {
        name: "Driver Times",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Long Haul 4",
        euroClass: "EURO 1",
      },
    ],
  },
  {
    name: "Wisconsin Garza",
    driver: "Kay Martin ",
    position: "Nostrand Avenue",
    regNr: "WNW617",
    make: "Volvo",
    model: "FL6 H42R",
    vin: 9464197794276140,
    services: [
      {
        name: "Positioning",
        active: 1,
      },
      {
        name: "Positioning +",
        active: 0,
      },
      {
        name: "Driver Times",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Distribution Rough",
        euroClass: "EURO 1",
      },
    ],
  },
  {
    name: "Puerto Rico Carpenter",
    driver: "Lynne Franks ",
    position: "Pioneer Street",
    regNr: "FBX402",
    make: "Volvo",
    model: "FH12 42R",
    vin: 90670748140274300,
    services: [
      {
        name: "Positioning",
        active: 0,
      },
      {
        name: "Positioning +",
        active: 1,
      },
      {
        name: "Driver Times",
        active: 1,
      },
      {
        name: "Fuel & Environment",
        active: 1,
      },
    ],
    profile: [
      {
        type: "Distribution Rough",
        euroClass: "EURO 5",
      },
    ],
  },
  {
    name: "New York Livingston",
    driver: "Becker Hansen ",
    position: "Eldert Street",
    regNr: "JJC797",
    make: "Volvo",
    model: "FH16 62R",
    vin: 12526164622897040,
    services: [],
    profile: [
      {
        type: "Long Haul 6",
        euroClass: "EURO 6",
      },
    ],
  },
  {
    name: "Virgin Islands Lyons",
    driver: "Aline Owens ",
    position: "Louis Place",
    regNr: "QBF120",
    make: "Volvo",
    model: "FL6 H42R",
    vin: 34182750121410150,
    services: [],
    profile: [
      {
        type: "Long Haul Rough",
        euroClass: "EURO 6",
      },
    ],
  },
  {
    name: "Idaho Olson",
    driver: "Acevedo Ramsey ",
    position: "Kosciusko Street",
    regNr: "UHI822",
    make: "Volvo",
    model: "FH16 62R",
    vin: 88885554292863400,
    services: [],
    profile: [
      {
        type: "Distribution Rough",
        euroClass: "EURO 6",
      },
    ],
  },
  {
    name: "Marshall Islands Simpson",
    driver: "Catalina Middleton ",
    position: "Aster Court",
    regNr: "NJW961",
    make: "Volvo",
    model: "FH12 42R",
    vin: 31065427813454484,
    services: [],
    profile: [
      {
        type: "Long Haul 4",
        euroClass: "EURO 1",
      },
    ],
  },
  {
    name: "Wyoming Lowery",
    driver: "Alma Melendez ",
    position: "Highland Avenue",
    regNr: "GWQ394",
    make: "Volvo",
    model: "FH13A64T",
    vin: 62469039999959620,
    services: [
      {
        name: "Positioning",
        active: 1,
      },
      {
        name: "Positioning +",
        active: 0,
      },
      {
        name: "Driver Times",
        active: 1,
      },
    ],
    profile: [
      {
        type: "Long Haul Smooth",
        euroClass: "EURO 5",
      },
    ],
  },
  {
    name: "Pennsylvania Clayton",
    driver: "Douglas Thornton ",
    position: "Crescent Street",
    regNr: "YSP204",
    make: "Volvo",
    model: "FH13A64T",
    vin: 87014679934905550,
    services: [
      {
        name: "Positioning",
        active: 1,
      },
      {
        name: "Positioning +",
        active: 1,
      },
      {
        name: "Driver Times",
        active: 0,
      },
      {
        name: "Fuel & Environment",
        active: 1,
      },
      {
        name: "Uptime Data",
        active: 0,
      },
      {
        name: "Vehicle Data",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Long Haul Heavy",
        euroClass: "EURO 1",
      },
    ],
  },
  {
    name: "Minnesota Dunlap",
    driver: "Callie Battle ",
    position: "Monitor Street",
    regNr: "III299",
    make: "Volvo",
    model: "FH13A64T",
    vin: 26154450368508732,
    services: [
      {
        name: "Positioning",
        active: 0,
      },
      {
        name: "Positioning +",
        active: 0,
      },
      {
        name: "Driver Times",
        active: 1,
      },
    ],
    profile: [
      {
        type: "Long Haul Heavy",
        euroClass: "EURO 2",
      },
    ],
  },
  {
    name: "Rhode Island Frost",
    driver: "Davidson Thomas ",
    position: "Walker Court",
    regNr: "HJH151",
    make: "Volvo",
    model: "FH12 42R",
    vin: 35551392239272504,
    services: [
      {
        name: "Positioning",
        active: 1,
      },
      {
        name: "Positioning +",
        active: 0,
      },
      {
        name: "Driver Times",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Long Haul Rough",
        euroClass: "EURO 1",
      },
    ],
  },
  {
    name: "Virginia Ward",
    driver: "Navarro Griffin ",
    position: "Coffey Street",
    regNr: "BUK521",
    make: "Volvo",
    model: "FH13 62T",
    vin: 69311686811625920,
    services: [
      {
        name: "Positioning",
        active: 1,
      },
      {
        name: "Positioning +",
        active: 1,
      },
      {
        name: "Driver Times",
        active: 0,
      },
      {
        name: "Fuel & Environment",
        active: 1,
      },
      {
        name: "Uptime Data",
        active: 1,
      },
    ],
    profile: [
      {
        type: "Distribution Rough",
        euroClass: "EURO 6",
      },
    ],
  },
  {
    name: "Missouri Allen",
    driver: "Aimee Ingram ",
    position: "Keap Street",
    regNr: "ADI228",
    make: "Volvo",
    model: "FH13A64T",
    vin: 29373479102961784,
    services: [
      {
        name: "Positioning",
        active: 0,
      },
      {
        name: "Positioning +",
        active: 1,
      },
      {
        name: "Driver Times",
        active: 0,
      },
      {
        name: "Fuel & Environment",
        active: 0,
      },
    ],
    profile: [
      {
        type: "Distribution Rough",
        euroClass: "EURO 6",
      },
    ],
  },
  {
    name: "Nevada Padilla",
    driver: "Selena Little ",
    position: "Euclid Avenue",
    regNr: "ZUH687",
    make: "Volvo",
    model: "B12B 97",
    vin: 4398589194464279,
    services: [],
    profile: [
      {
        type: "Distribution Smooth",
        euroClass: "EURO 6",
      },
    ],
  },
];

// Create array for storing values from readonly selection
let selectionArray = [];

const defArray = ["SOMETHING WENT WRONG"];
const vehicleNames = [];
const userNames = [];
const regNrs = [];
const vinNrs = [];
const models = [];
const streets = [];
const services = [];

const CheckForNonTextObjects = (selection) => {
  // Check for non text objects and throw an error if there are any. Otherwise put selections into a new array
  selection.map((s) => {
    if (s.type != "TEXT") {
      figma.closePlugin();
      throw "All selected fields are not text objects";
    } else selectionArray = selection;
  });
};

const CreateArrays = () => {
  console.log(vehicles);
  vehicles.map((v) => {
    vehicleNames.push(v.name);
    userNames.push(v.driver);
    regNrs.push(v.regNr);
    vinNrs.push(v.vin.toString());
    models.push(v.model);
    streets.push(v.position);
    v.services.map((s) => services.push(s.name));
  });
};

const LoopAndChangeText = (selection: Array<any>, arrayType: string) => {
  let textArray = [];
  switch (arrayType) {
    case "vehicles":
      textArray = vehicleNames;
      break;
    case "users":
      textArray = userNames;
      break;
    case "vin":
      textArray = vinNrs;
      break;
    case "model":
      textArray = models;
      break;
    case "services":
      textArray = services;
      break;
    case "street-position":
      textArray = streets;
      break;
    case "reg-numbers":
      textArray = regNrs;
      break;
    default:
      textArray = defArray;
  }
  selection.map(async (item) => {
    const random = Math.floor(Math.random() * textArray.length);
    await figma.loadFontAsync(item.fontName);
    item.characters = textArray[random];
  });
};

// This shows the HTML page in "ui.html".
figma.showUI(__html__);
figma.ui.resize(320, 700)

// Calls to "parent.postMessage" from within the HTML page will trigger this function.
// Set to async because of fontloading required.
figma.ui.onmessage = async (msg) => {
  const currentSelection = figma.currentPage.selection;

  // Checking if there are any objects in the selection that aren't TEXT objects.
  CheckForNonTextObjects(currentSelection);
  CreateArrays();
  LoopAndChangeText(selectionArray, msg.type);

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};

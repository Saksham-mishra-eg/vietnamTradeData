// Mock data for Trade Search Results
// Replace with actual API calls in production

export const mockSearchData = {
  meta: {
    total_shipments: 4910,
    total_value_usd: 441510000,
    date_range: {
      from: "2025-01-01",
      to: "2025-11-27"
    },
    page: 1,
    page_size: 25,
    total_pages: 197
  },
  filters: {
    hs_codes: [
      { code: "2710124130", count: 1250, name: "Gasoline, Automobile Grade" },
      { code: "8471300000", count: 890, name: "Portable Computers" },
      { code: "8517120000", count: 650, name: "Telephones" },
      { code: "6203420000", count: 420, name: "Men's Cotton Trousers" },
      { code: "6204620000", count: 380, name: "Women's Cotton Trousers" }
    ],
    destination_countries: [
      { name: "United States", count: 1450 },
      { name: "Japan", count: 980 },
      { name: "South Korea", count: 750 },
      { name: "China", count: 620 },
      { name: "Germany", count: 450 }
    ],
    ports_loading: [
      { name: "Haiphong", count: 1800 },
      { name: "Ho Chi Minh City", count: 1500 },
      { name: "Da Nang", count: 890 },
      { name: "Hai Duong", count: 420 }
    ],
    ports_unloading: [
      { name: "Los Angeles", count: 980 },
      { name: "Tokyo", count: 850 },
      { name: "Busan", count: 670 },
      { name: "Shanghai", count: 550 }
    ],
    transport_modes: [
      { name: "Sea", count: 3800 },
      { name: "Air", count: 890 },
      { name: "Road", count: 220 }
    ]
  },
  shipments: [
    {
      id: "s_001",
      date: "2025-08-30",
      hs_code: "2710124130",
      product_description: "Gasoline, Automobile Grade Ai-92-k2-l, Octane Rating 92, Lead-Free Premium Quality For Automotive Use",
      importer_name: "Locked",
      importer_locked: true,
      exporter_name: "Bukhara Oil Refinery LLC",
      exporter_locked: false,
      destination_country: "UZBEKISTAN",
      origin_country: "VIETNAM",
      quantity: 1036.525,
      quantity_unit: "TON",
      net_weight_kg: 1036525,
      total_value_usd: 288770,
      unit_price_usd: 278.65,
      import_port: "Tashkent",
      export_port: "Haiphong",
      transport_mode: "Sea",
      bl_number: "BL123456789",
      invoice_number: "INV-2025-08-001",
      container_number: "CONT-45678-XX"
    },
    {
      id: "s_002",
      date: "2025-08-28",
      hs_code: "8471300000",
      product_description: "Portable Automatic Data Processing Machines, Weight Not Exceeding 10 Kg, Consisting Of At Least A Central Processing Unit, A Keyboard And A Display",
      importer_name: "TechWorld Distribution Inc",
      importer_locked: false,
      exporter_name: "Locked",
      exporter_locked: true,
      destination_country: "UNITED STATES",
      origin_country: "VIETNAM",
      quantity: 5000,
      quantity_unit: "UNITS",
      net_weight_kg: 12500,
      total_value_usd: 1250000,
      unit_price_usd: 250,
      import_port: "Los Angeles",
      export_port: "Ho Chi Minh City",
      transport_mode: "Sea",
      bl_number: "BL987654321",
      invoice_number: "INV-2025-08-002",
      container_number: "CONT-78901-YY"
    },
    {
      id: "s_003",
      date: "2025-08-25",
      hs_code: "8517120000",
      product_description: "Telephones For Cellular Networks Or For Other Wireless Networks, Smartphones With 5G Capability",
      importer_name: "Mobile Electronics Corp",
      importer_locked: false,
      exporter_name: "VN Electronics Manufacturing Ltd",
      exporter_locked: false,
      destination_country: "JAPAN",
      origin_country: "VIETNAM",
      quantity: 15000,
      quantity_unit: "UNITS",
      net_weight_kg: 3000,
      total_value_usd: 3750000,
      unit_price_usd: 250,
      import_port: "Tokyo",
      export_port: "Da Nang",
      transport_mode: "Air",
      bl_number: "AWB456789123",
      invoice_number: "INV-2025-08-003",
      container_number: "N/A"
    },
    {
      id: "s_004",
      date: "2025-08-22",
      hs_code: "6203420000",
      product_description: "Men's Or Boys' Trousers, Bib And Brace Overalls, Breeches And Shorts Of Cotton, Not Knitted",
      importer_name: "Locked",
      importer_locked: true,
      exporter_name: "Saigon Textile Manufacturing Co",
      exporter_locked: false,
      destination_country: "GERMANY",
      origin_country: "VIETNAM",
      quantity: 25000,
      quantity_unit: "PIECES",
      net_weight_kg: 18750,
      total_value_usd: 625000,
      unit_price_usd: 25,
      import_port: "Hamburg",
      export_port: "Haiphong",
      transport_mode: "Sea",
      bl_number: "BL111222333",
      invoice_number: "INV-2025-08-004",
      container_number: "CONT-11223-ZZ"
    },
    {
      id: "s_005",
      date: "2025-08-20",
      hs_code: "6204620000",
      product_description: "Women's Or Girls' Trousers, Bib And Brace Overalls, Breeches And Shorts Of Cotton, Not Knitted",
      importer_name: "Fashion Retail Group",
      importer_locked: false,
      exporter_name: "Locked",
      exporter_locked: true,
      destination_country: "SOUTH KOREA",
      origin_country: "VIETNAM",
      quantity: 30000,
      quantity_unit: "PIECES",
      net_weight_kg: 22500,
      total_value_usd: 750000,
      unit_price_usd: 25,
      import_port: "Busan",
      export_port: "Ho Chi Minh City",
      transport_mode: "Sea",
      bl_number: "BL444555666",
      invoice_number: "INV-2025-08-005",
      container_number: "CONT-44556-AA"
    }
  ]
};

// Additional mock data for Importers tab
export const mockImportersData = [
  {
    id: "imp_001",
    name: "TechWorld Distribution Inc",
    country: "United States",
    total_shipments: 450,
    total_value_usd: 125000000,
    top_products: ["Computers", "Electronics", "Phones"],
    locked: false
  },
  {
    id: "imp_002",
    name: "Locked",
    country: "Germany",
    total_shipments: 380,
    total_value_usd: 95000000,
    top_products: ["Textiles", "Apparel"],
    locked: true
  },
  {
    id: "imp_003",
    name: "Mobile Electronics Corp",
    country: "Japan",
    total_shipments: 320,
    total_value_usd: 88000000,
    top_products: ["Electronics", "Phones"],
    locked: false
  }
];

// Mock data for Suppliers tab
export const mockSuppliersData = [
  {
    id: "sup_001",
    name: "VN Electronics Manufacturing Ltd",
    country: "Vietnam",
    total_shipments: 890,
    total_value_usd: 285000000,
    top_products: ["Electronics", "Phones", "Computers"],
    locked: false
  },
  {
    id: "sup_002",
    name: "Locked",
    country: "Vietnam",
    total_shipments: 650,
    total_value_usd: 198000000,
    top_products: ["Textiles"],
    locked: true
  },
  {
    id: "sup_003",
    name: "Saigon Textile Manufacturing Co",
    country: "Vietnam",
    total_shipments: 540,
    total_value_usd: 145000000,
    top_products: ["Apparel", "Textiles"],
    locked: false
  }
];

// Country list for dropdown
export const countries = [
  "Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Austria",
  "Bangladesh", "Belgium", "Brazil", "Bulgaria", "Cambodia", "Canada",
  "Chile", "China", "Colombia", "Croatia", "Czech Republic", "Denmark",
  "Egypt", "Estonia", "Finland", "France", "Germany", "Greece",
  "Hong Kong", "Hungary", "India", "Indonesia", "Iran", "Iraq",
  "Ireland", "Israel", "Italy", "Japan", "Jordan", "Kazakhstan",
  "Kenya", "South Korea", "Kuwait", "Latvia", "Lebanon", "Lithuania",
  "Luxembourg", "Malaysia", "Mexico", "Morocco", "Netherlands", "New Zealand",
  "Nigeria", "Norway", "Oman", "Pakistan", "Peru", "Philippines",
  "Poland", "Portugal", "Qatar", "Romania", "Russia", "Saudi Arabia",
  "Singapore", "Slovakia", "Slovenia", "South Africa", "Spain", "Sri Lanka",
  "Sweden", "Switzerland", "Taiwan", "Thailand", "Turkey", "Ukraine",
  "United Arab Emirates", "United Kingdom", "United States", "Uzbekistan",
  "Vietnam", "Yemen"
];

// API Contract Documentation
/**
 * API ENDPOINT: GET /api/trade/search
 * 
 * Query Parameters:
 * - country: string (e.g., "VIETNAM")
 * - type: "import" | "export"
 * - hs: string (HS code, optional)
 * - product: string (product name/keyword, optional)
 * - date_from: string (ISO date, e.g., "2025-01-01")
 * - date_to: string (ISO date, e.g., "2025-11-27")
 * - page: number (default: 1)
 * - page_size: number (default: 25)
 * - filters: JSON string (encoded filter object)
 * 
 * Filters Object Structure:
 * {
 *   hs_codes: string[],
 *   destination_countries: string[],
 *   ports_loading: string[],
 *   ports_unloading: string[],
 *   transport_modes: string[],
 *   exporters: string[],
 *   buyers: string[],
 *   suppliers: string[],
 *   importers: string[],
 *   value_range: { min: number, max: number },
 *   quantity_range: { min: number, max: number }
 * }
 * 
 * Response Structure: See mockSearchData above
 * 
 * Authentication:
 * - Include Bearer token in Authorization header
 * - Header: { 'Authorization': 'Bearer YOUR_API_TOKEN' }
 * 
 * Error Responses:
 * - 400: Bad Request (invalid parameters)
 * - 401: Unauthorized (missing/invalid token)
 * - 403: Forbidden (locked data, upgrade required)
 * - 429: Too Many Requests (rate limit exceeded)
 * - 500: Internal Server Error
 */

// Example fetch function
export async function fetchSearchResults(params: Record<string, string | number>) {
  // TODO: Replace with actual API endpoint
  const queryString = new URLSearchParams(
    Object.entries(params).reduce((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {} as Record<string, string>)
  ).toString();
  
  try {
    const response = await fetch(`/api/trade/search?${queryString}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // TODO: Add authentication token from your auth context
        // 'Authorization': `Bearer ${authToken}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Log error to monitoring service
    // console.error('Error fetching search results:', error);
    // Return mock data for development
    return mockSearchData;
  }
}

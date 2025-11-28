# Trade Search Results Feature

## Overview
Complete, production-ready Trade Search Results UI modeled after MarketInside and ExportGenius. This feature provides a comprehensive interface for searching, filtering, and analyzing Vietnam import/export data.

## Components

### 1. **SearchResultsPage.tsx**
Main orchestrator component that manages all state and coordinates sub-components.

**State Management:**
- `loading`: API call loading state
- `searchData`: Search results from API
- `activeTab`: Current tab (shipments/importers/suppliers/visualize)
- `selectedFilters`: User-applied filters
- `currentPage`: Pagination state
- `pageSize`: Items per page
- `selectedShipment`: Shipment for detail modal
- `sortBy`, `sortOrder`: Table sorting state

**Key Functions:**
- `loadSearchResults()`: Fetches data from API
- `handleSearch()`: Processes new search from hero
- `handleFilterChange()`: Updates filters
- `handleViewDetails()`: Opens shipment detail modal
- `handlePageChange()`, `handlePageSizeChange()`: Pagination
- `handleSort()`: Table column sorting

### 2. **SearchHero.tsx**
Top search interface with country, import/export toggle, and HS code/product input.

**Features:**
- Country dropdown (80+ countries)
- Import/Export toggle (pill-style buttons)
- Product or HS Code search input
- Auto-detection of HS codes (numeric input)
- Gradient background (blue-cyan-purple)

**Props:**
- `onSearch`: Callback with search parameters
- `initialValues`: Pre-fill values from URL params

### 3. **MetricsBar.tsx**
Summary statistics bar showing total shipments, value, and date range.

**Features:**
- Total shipments (formatted: K/M)
- Total value USD (formatted: $K/$M)
- Date range with picker icon
- Gradient icon backgrounds
- Responsive grid layout

**Props:**
- `totalShipments`: number
- `totalValue`: number
- `dateRange`: { from: string, to: string }

### 4. **FiltersPanel.tsx**
Left sidebar with collapsible filter sections.

**Filter Types:**
- Date Range (date pickers)
- HS Code (searchable, multi-select)
- Origin Country (multi-select)
- Destination Country (multi-select)
- Import Ports (multi-select with counts)
- Transport Mode (radio, PRO - locked)
- Importers (checkbox, PRO - locked)
- Value Range (inputs, PRO - locked)

**Features:**
- Collapsible sections with chevron icons
- Clear button per section
- Clear All button in header
- Active filter count badge
- Locked feature indicators with upgrade CTAs
- Sticky positioning

**Props:**
- `filters`: Current selected filters object
- `availableFilters`: Available options for each filter
- `onFilterChange`: Callback when filters change

### 5. **TabsSection.tsx**
Tab navigation for different data views.

**Tabs:**
- Shipments (active, unlocked)
- Importers (unlocked)
- Suppliers (unlocked)
- Visualize Data (locked, PRO feature)

**Features:**
- Count badges on each tab
- Lock icon on restricted tabs
- Tooltip on locked tab with upgrade CTA
- Active tab highlighting (blue border, bg)

**Props:**
- `activeTab`: Current active tab
- `onTabChange`: Callback when tab clicked
- `counts`: { shipments, importers, suppliers }

### 6. **ShipmentsTable.tsx**
Main data table with 11 columns, sorting, and row expansion.

**Columns:**
1. View (eye icon button)
2. Date (sortable)
3. HS Code (link)
4. Product Description (truncated, expandable)
5. Importer (locked indicator)
6. Exporter (locked indicator)
7. Destination Country
8. Quantity (sortable)
9. Net Weight (KG)
10. Total Value USD (sortable)
11. Exporter Name (locked indicator)

**Features:**
- Edit Columns dropdown (select/deselect columns)
- Download CSV/XLSX button
- Sort indicators on sortable columns
- Row expansion for additional details
- Locked field indicators
- Empty state message
- Responsive table overflow

**Props:**
- `shipments`: Array of shipment records
- `onViewDetails`: Callback to open detail modal
- `sortBy`, `sortOrder`: Current sort state
- `onSort`: Callback when column header clicked

### 7. **DetailsModal.tsx**
Full-screen modal with complete shipment details.

**Sections:**
- Basic Info (date, HS code, value) with colored cards
- Product Information (full description)
- Importer & Exporter (side-by-side, locked if not subscribed)
- Trade Details (countries, ports, transport)
- Quantity & Weight (detailed measurements)
- Shipping Documents (B/L, invoice, container numbers)
- Upgrade CTA (for locked fields)

**Features:**
- Gradient header
- Close button
- Scrollable content
- Locked field placeholders with upgrade buttons
- Icons for each data type
- Backdrop click to close

**Props:**
- `shipment`: Full shipment object or null
- `onClose`: Callback to close modal

### 8. **Pagination.tsx**
Page navigation controls.

**Features:**
- Previous/Next buttons (disabled at boundaries)
- Numbered page buttons (with ellipsis for many pages)
- Active page highlighting (blue gradient)
- Results count display ("Showing X to Y of Z")
- Page size selector (10/25/50/100)
- Smart page number display algorithm

**Props:**
- `currentPage`: Current page number
- `totalPages`: Total number of pages
- `pageSize`: Current items per page
- `totalItems`: Total items across all pages
- `onPageChange`: Callback for page change
- `onPageSizeChange`: Callback for page size change

### 9. **CTACards.tsx**
Three call-to-action cards at bottom of page.

**Cards:**
1. Schedule a Demo (blue gradient, calendar icon)
2. Try Free Sample (purple gradient, featured badge, file icon)
3. Already a Member? (green gradient, login icon)

**Features:**
- Hover animations (translate-y, shadow)
- Gradient backgrounds
- Arrow icons with hover animation
- Featured badge on middle card

### 10. **mockData.ts**
Comprehensive mock data and API contract documentation.

**Exports:**
- `mockSearchData`: Full search response structure
- `mockImportersData`: Sample importers list
- `mockSuppliersData`: Sample suppliers list
- `countries`: Array of 80+ country names
- `fetchSearchResults()`: Template API function with error handling

**API Contract Documentation:**
```
GET /api/trade/search

Query Parameters:
- country (string, required)
- type (import|export, required)
- hs (string, optional)
- product (string, optional)
- page (number, default: 1)
- page_size (number, default: 25)
- filters (JSON string, optional)

Authentication:
- Bearer token in Authorization header

Response Format:
{
  meta: { total_shipments, total_value_usd, date_range, pagination },
  filters: { hs_codes, countries, ports, transport_modes with counts },
  shipments: [ array of shipment objects ]
}

Error Responses:
- 400: Invalid parameters
- 401: Unauthorized
- 500: Server error
```

## Routing

**Page:** `/search`

**URL Parameters:**
- `country`: Country name (e.g., "VIETNAM")
- `type`: "import" or "export"
- `hs`: HS code (optional)
- `product`: Product name (optional)

**Example URLs:**
```
/search?country=VIETNAM&type=import&hs=8703
/search?country=CHINA&type=export&product=electronics
```

## Mock Data Structure

**Shipment Object:**
```typescript
{
  id: string
  date: string (ISO 8601)
  hs_code: string
  product_description: string
  importer_name: string
  importer_locked?: boolean
  exporter_name: string
  exporter_locked?: boolean
  origin_country: string
  destination_country: string
  quantity: number
  quantity_unit: string
  net_weight_kg: number
  total_value_usd: number
  import_port?: string
  export_port?: string
  transport_mode?: string
  bl_number?: string
}
```

## Features

### ✅ Implemented
- Complete search interface with filters
- Responsive design (mobile, tablet, desktop)
- Table with 11 columns and sorting
- Row expansion for additional details
- Pagination with page size selector
- Locked feature indicators
- Upgrade CTAs for pro features
- Detail modal with full shipment info
- Edit columns dropdown
- Download button placeholder
- Breadcrumbs navigation
- Mobile filter toggle
- Empty state messages
- Loading state management

### 🔒 PRO Features (Locked)
- Transport Mode filtering
- Importer/Exporter filtering
- Value/Quantity range filtering
- Full importer/exporter details
- Visualize Data tab
- Export functionality (full implementation)

### 🎨 Design Patterns
- Gradient backgrounds (blue-cyan-purple)
- Orange accent for CTAs and pro features
- White cards with shadow-lg
- Rounded corners (rounded-xl, rounded-2xl)
- Hover effects (translate-y, shadow changes)
- Locked icons (orange color)
- Count badges (gray for inactive, blue for active)

### ♿ Accessibility
- ARIA labels on buttons
- aria-modal, aria-labelledby on modal
- aria-current on active page number
- Semantic HTML (nav, table, button)
- Keyboard navigation support
- Focus indicators
- Screen reader friendly

## Backend Integration

To connect to real API:

1. **Update fetchSearchResults in mockData.ts:**
```typescript
const response = await fetch(`/api/trade/search?${params}`, {
  headers: {
    'Authorization': `Bearer ${getAuthToken()}`,
    'Content-Type': 'application/json'
  }
});
```

2. **Handle authentication:**
   - Add auth token to requests
   - Handle 401 responses (redirect to login)
   - Refresh token logic

3. **Error handling:**
   - Add toast/notification system
   - Show user-friendly error messages
   - Implement retry logic

4. **Analytics tracking:**
   - Track search events
   - Track filter usage
   - Track tab switches
   - Track detail views

## Testing Checklist

- [ ] Search with different countries
- [ ] Toggle import/export
- [ ] Enter HS code vs product name
- [ ] Apply multiple filters
- [ ] Clear individual filters
- [ ] Clear all filters
- [ ] Switch between tabs
- [ ] Click on locked features (see upgrade modal)
- [ ] Sort by date, quantity, value
- [ ] Expand table rows
- [ ] Open shipment detail modal
- [ ] Close modal (X button, backdrop click)
- [ ] Navigate pages
- [ ] Change page size
- [ ] Edit columns (select/deselect)
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Mobile filter toggle
- [ ] Click CTAs (Schedule Demo, Try Free, Sign In)

## Development Notes

**Dependencies:**
- React 18.2.0
- Next.js 14.2.33 (App Router)
- Lucide React 0.553.0 (icons)
- Tailwind CSS (styling)

**File Structure:**
```
app/
  search/
    page.tsx (route with metadata)
components/
  SearchResults/
    SearchResultsPage.tsx (orchestrator)
    SearchHero.tsx
    MetricsBar.tsx
    FiltersPanel.tsx
    TabsSection.tsx
    ShipmentsTable.tsx
    DetailsModal.tsx
    Pagination.tsx
    CTACards.tsx
    mockData.ts
```

**Performance Considerations:**
- Use React.memo for expensive components
- Virtualize table rows for very large datasets (react-window)
- Debounce filter changes
- Lazy load modal content
- Optimize image sizes

**Future Enhancements:**
- Bulk actions (select multiple shipments)
- Export to CSV/XLSX (working implementation)
- Save search queries
- Email alerts for new matches
- Comparison view (side-by-side shipments)
- Advanced visualizations (charts, graphs)
- Bookmark/favorite shipments
- Share search results link
- Print view

## Support

For questions or issues with this feature:
- Check mock data structure in mockData.ts
- Review API contract comments
- Test with different filter combinations
- Verify URL parameters are correct
- Check browser console for errors

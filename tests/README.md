# Website Tests

This directory contains end-to-end tests for the domi.lu website using Playwright.

## Test Coverage

### 1. Color Tests
Tests verify that all text and background colors match the design system:
- **Light Mode Colors:**
  - Text: Secondary color (#001F4E)
  - Background: White (#FFFFFF)
  - Secondary background: #DFF3FD
  - Links: Primary color (#006FBA)

- **Dark Mode Colors:**
  - Text: White (#FFFFFF)
  - Background: Secondary color (#001F4E)
  - Links: Highlight color (#00A4E4)

### 2. Dark/Light Mode Toggle Tests
Tests verify the theme switcher functionality:
- Toggle button switches between light and dark modes
- Correct icons displayed (moon in light mode, sun in dark mode)
- Theme persists across multiple toggles
- All color changes apply correctly when toggling

### 3. Tab Navigation Tests
Tests verify the sticky navigation behavior:
- Tab bar has sticky positioning (`position: sticky`)
- Tab bar stays at top when scrolling down
- Active tab updates when scrolling to different sections
- Clicking tabs navigates to correct sections
- Active tab has correct styling in both light and dark modes
- Navigation has appropriate z-index (`z-index: 50`)

### 4. Z-Index and Layering Tests
Tests verify element stacking order:
- Dark mode toggle is on top of all elements (`z-index: 100`)
- Toggle remains visible and clickable when scrolling
- Sticky navigation is below toggle but above content (`z-index: 50`)
- Proper layering maintained in all scenarios

### 5. Mobile Compatibility Tests
Tests verify responsive design on mobile devices (375x667 viewport):
- Layout displays correctly on mobile
- Text sizing is appropriate (not too large or small)
- Sticky navigation works on mobile
- Dark mode toggle is visible and accessible
- Project cards stack vertically
- Proper padding and margins
- Smooth scrolling works
- Dark mode maintains readability

### 6. Tablet Compatibility Tests
Tests verify responsive design on tablets (768x1024 viewport):
- Layout displays correctly on tablet
- Uses medium breakpoint styles
- Project cards use horizontal layout
- Text sizing adjusts for larger viewport

### 7. Link Validation Tests
Tests verify all links on the website are working properly:
- **Internal Links**: Navigation links (#projects, #about) work correctly
- **External Link Attributes**: All external links have proper security attributes (target="_blank", rel="noopener noreferrer")
- **URL Validation**: All URLs are properly formatted and valid
- **App Store Links**: eBanking app links to Google Play and Apple App Store verified
- **Technology Tags**: All technology tag links (iOS, Android, Kotlin, Swift, Java) working
- **Product Links**: ZKB product page link validated
- **HTTP Status Checks**: External links return valid HTTP status codes (200-399)
- **Anchor Links**: Internal anchor links point to existing elements
- **Accessibility**: All links have accessible text or aria-labels
- **Image Assets**: Store badge images load correctly

## Running Tests

### Prerequisites
```bash
# Install dependencies (if not already done)
npm install
```

### Run Tests

```bash
# Run all tests in headless mode
npm test

# Run tests with UI mode (interactive)
npm run test:ui

# Run tests in headed mode (see browser)
npm run test:headed

# View test report (after running tests)
npm run test:report
```

### Run Specific Tests

```bash
# Run only color tests
npx playwright test --grep "Color Tests"

# Run only dark mode tests
npx playwright test --grep "Dark/Light Mode"

# Run only mobile tests
npx playwright test --grep "Mobile Compatibility"

# Run only on specific browser
npx playwright test --project=chromium
npx playwright test --project=mobile
```

## Test Projects

The test configuration includes two projects:

1. **chromium** - Desktop Chrome browser
2. **mobile** - iPhone 13 viewport (390x844)

Tests run on both projects by default to ensure compatibility.

## Development Server

The tests automatically start the development server before running. If the server is already running on port 4321, it will be reused.

## Continuous Integration

In CI environments:
- Tests run with 2 retries on failure
- Only 1 worker is used to avoid resource conflicts
- Server must start fresh (no reuse)

## Test Structure

Each test suite is organized by feature:
- `test.describe()` groups related tests
- Helper functions extract computed styles and colors
- RGB colors are converted to hex for comparison
- Waits are used for transitions and animations

## Debugging Failed Tests

If tests fail:

1. **View the HTML report:**
   ```bash
   npm run test:report
   ```

2. **Run in headed mode to see what's happening:**
   ```bash
   npm run test:headed
   ```

3. **Run with UI mode for step-by-step debugging:**
   ```bash
   npm run test:ui
   ```

4. **Check screenshots:**
   Screenshots are automatically captured on failure in `test-results/`

5. **Check traces:**
   Traces are captured on first retry and can be viewed in the report

## Coverage Summary

Total test cases: **78** (39 on desktop, 39 on mobile)

- ✅ Text color verification (light/dark modes)
- ✅ Background color verification (light/dark modes)
- ✅ Link color verification (light/dark modes)
- ✅ Theme toggle functionality
- ✅ Theme icon display
- ✅ Sticky navigation positioning
- ✅ Active tab tracking
- ✅ Z-index layering
- ✅ Mobile responsive design
- ✅ Tablet responsive design
- ✅ Smooth scrolling
- ✅ Accessibility on mobile
- ✅ Internal navigation links
- ✅ External link validation
- ✅ App store links
- ✅ Technology tag links
- ✅ Link accessibility
- ✅ HTTP status verification

## Adding New Tests

To add new tests:

1. Open `website.spec.ts`
2. Add a new `test()` block within an existing `test.describe()` or create a new describe block
3. Follow the existing patterns for consistency
4. Run tests to verify they pass

Example:
```typescript
test('should have correct border radius', async ({ page }) => {
  await page.goto('/');

  const borderRadius = await page.evaluate(() => {
    const card = document.querySelector('.rounded-design');
    if (!card) return '';
    return window.getComputedStyle(card).borderRadius;
  });

  expect(borderRadius).toBe('20px');
});
```

# Luma+

A responsive React e-commerce storefront using functional components and no application dependencies beyond the existing Create React App toolchain.

## Run and verify

`npm install` then `npm start`. Run `npm test` for the interaction tests or `npm run build` for a production bundle.

## Technical terms

- **Functional component:** a JavaScript function that returns JSX; the app uses `App` as its main component.
- **JSX:** HTML-like syntax used inside JavaScript to describe the interface.
- **State:** changing component data held with React's `useState` hook (filters, search, cart, and drawer state).
- **Derived state:** values calculated from state, such as product results, bag count, and subtotal.
- **Hook:** a React function that provides component capabilities; this app uses `useState` and `useMemo`.
- **Event handler:** a function called by an interaction, such as adding an item or changing a category.
- **Accessible name:** the label assistive technology uses for a control; add buttons include product-specific `aria-label` values.
- **Responsive CSS:** media-query rules that adapt navigation, product grid, and artwork for smaller screens.

Product data is local so the experience works without an API. Checkout is a visual endpoint only; payment and backend integration are intentionally out of scope.

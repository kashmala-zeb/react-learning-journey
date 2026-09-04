# Concept 02: Props (Properties) in React 🔄

**Props** (short for "properties") are the primary mechanism in React for passing data from parent components to child components. They enable component reusability and maintain a clean unidirectional data flow.

---

## 🔑 Key Concepts Covered

1. **Passing Props**: Providing attributes to JSX components (e.g. `<Card brand="Google" pay="$85/hr" />`).
2. **Receiving & Destructuring Props**: Reading `props` inside functional components, or destructuring directly in parameters `({ brand, pay })`.
3. **Dynamic Data with `.map()`**: Iterating over arrays of data objects and rendering component instances with unique keys.
4. **Passing Functions & Callbacks**: Passing event handler functions down to child components.
5. **Children Prop**: Passing nested elements and content using `props.children`.

---

## 🛠️ Mini Projects in this Folder

| Project | Description | Tech Stack | Status |
|---|---|---|---|
| [01-job-listing-cards](./01-job-listing-cards) | Reusable job card components displaying company info, tags, and compensation. | React + Vite + CSS | ✅ Completed |
| [02-customer-segmentation-ui](./02-customer-segmentation-ui) | Dynamic customer audience segmentation UI with status badges (`Satisfied`, `Underserved`). | React 19 + Tailwind CSS v4 + Vite | ✅ Completed |

---

## 💡 Best Practices for Props

- Props are **read-only** (immutable). A component should never modify its own props.
- Always provide a unique `key` prop when rendering lists of elements.
- Use meaningful prop names to make component APIs intuitive.

import { createRoot } from "react-dom/client";
import HelloIsland from "../components/HelloIsland";
import HomePage from "../components/HomePage";

type ComponentMap = {
    [key: string]: (props: any) => JSX.Element;
}

const componentsMap: ComponentMap = {
    HelloIsland,
    HomePage
}

document.addEventListener("DOMContentLoaded", () => {
  // Select all elements that should host a React component
    const elements = document.querySelectorAll(".react-component");

    elements.forEach((element) => {
        // Get the component name from the data attribute
        const componentName = element.getAttribute("data-component");
        if (!componentName) {
            console.error('Attribute "data-component" is missing or null.');
            return;
        }

        const Component = componentsMap[componentName];
        if (!Component) {
            console.error(`Component "${componentName}" not found in componentsMap.`);
            return;
        }

        // extract content props from data-content attribute
        const contentDataTitle = element.getAttribute("data-content-title");
        const contentDataDescription = element.getAttribute("data-content-description");
        const content = contentDataTitle ? {pageTitle : contentDataTitle, pageDescription: contentDataDescription }: {};

        // Render the component into the element and pass content props
        const root = createRoot(element);
        root.render(<Component {...content} />);
    });
});
# Architecture Design

1.  **Core**: `core.mjs` handles the state (tasks array) and storage logic.
2.  **Utilities**: `utils.mjs` provides DOM abstraction.
3.  **Static Imports**: Used for critical modules (`core`, `utils`, `constants`) required immediately on load.
4.  **Dynamic Imports**:
    * **On Interaction**: `advanced_feature.mjs` loads only when the user clicks "Clear All". This saves resources if the user never deletes data.
    * **On Visibility**: `lazy_component.mjs` loads only when the user scrolls to the bottom, using the IntersectionObserver API.
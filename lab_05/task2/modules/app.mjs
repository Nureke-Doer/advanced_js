import { TodoManager } from './core.mjs';
import { $, createElement } from './utils.mjs';
import { APP_TITLE } from './constants.mjs';

const initApp = () => {
    $('h1').textContent = APP_TITLE;
    const manager = new TodoManager();
    const list = $('#todo-list');
    const input = $('#todo-input');
    const addBtn = $('#add-btn');

    // Render initial tasks
    manager.getTasks().forEach(task => {
        list.appendChild(createElement('li', 'task', task.text));
    });

    // Add Task Logic
    addBtn.addEventListener('click', () => {
        if (input.value.trim()) {
            const task = manager.addTask(input.value);
            list.appendChild(createElement('li', 'task', task.text));
            input.value = '';
        }
    });

    // 1. Dynamic Import on Interaction (Clicking "Clear All")
    $('#clear-btn').addEventListener('click', async () => {
        try {
            // Dynamically import the module
            const module = await import('./advanced_feature.mjs');
            // Execute the default export
            module.default();
        } catch (error) {
            console.error("Failed to load module", error);
        }
    });

    // 2. Dynamic Import on Visibility (Scroll to bottom)
    const footerPlaceholder = $('#footer-placeholder');
    const observer = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting) {
            try {
                const module = await import('./lazy_component.mjs');
                module.renderFooter(footerPlaceholder);
                observer.disconnect(); // Load only once
            } catch (err) {
                console.error("Lazy load failed", err);
            }
        }
    });
    
    observer.observe(footerPlaceholder);
};

document.addEventListener('DOMContentLoaded', initApp);
import { STORAGE_KEY } from './constants.mjs';

export class TodoManager {
    #tasks;

    constructor() {
        this.#tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    }

    addTask(text) {
        const task = { id: Date.now(), text, completed: false };
        this.#tasks.push(task);
        this.#save();
        return task;
    }

    getTasks() {
        return this.#tasks;
    }

    #save() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.#tasks));
    }
}
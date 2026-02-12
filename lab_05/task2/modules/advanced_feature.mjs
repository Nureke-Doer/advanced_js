import { STORAGE_KEY } from './constants.mjs';

export default function clearAllTasks() {
    if(confirm("Are you sure you want to delete all tasks?")) {
        localStorage.removeItem(STORAGE_KEY);
        location.reload();
    }
}
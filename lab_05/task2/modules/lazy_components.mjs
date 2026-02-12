export function renderFooter(container) {
    container.innerHTML = `<p style="text-align:center; color: #666; padding: 20px;">
        Loaded dynamically: You reached the bottom!
    </p>`;
    console.log("Lazy component loaded!");
}
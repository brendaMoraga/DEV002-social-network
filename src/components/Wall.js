export const Wall = () => {
    const div = document.createElement('div');
    const title = document.createElement('h2');

    title.textContent = 'Welcome to the Wall';

    div.append(title);

    return div;
};
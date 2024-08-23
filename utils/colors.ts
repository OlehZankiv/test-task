const MAX_COLOR = 16777215

export const generateRandomColor = () => {
    return "#" + (MAX_COLOR - (Math.floor(Math.random() * MAX_COLOR))).toString(16).padStart(6, '0')
}
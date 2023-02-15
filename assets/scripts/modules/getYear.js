

export function getYear() {
    const year = new Date();
    document.getElementById("year").innerHTML += year.getFullYear() + " ";
}
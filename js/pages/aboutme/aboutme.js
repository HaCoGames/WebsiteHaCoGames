document.addEventListener("DOMContentLoaded", () => {
    setAge();
});

function setAge() {
    let age_ref = document.querySelector("#years");
    let current_date = new Date();
    let birth_date = new Date("2006-03-22T00:00:00.000Z");

    let dates_subtracted = (current_date.getTime() - birth_date.getTime()) / 1000;
        dates_subtracted /= (60 * 60 * 24 * 365.25);
    age_ref.innerHTML = `I am ${parseInt(dates_subtracted)} years old.`;
}
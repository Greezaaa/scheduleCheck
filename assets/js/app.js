

let dayOfTheWeek = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
];
// indicamos horario para cada dia donde 0 es domingo, 1 es lunes etc...
let schedule = [
    { start: 09 * 60, end: 15 * 60 }, // dimingo 09:00 - 15:00
    { start: 09 * 60, end: 16 * 60 }, // lunes 09:00 - 16:00
    { start: 0, end: 0 }, // martes, cerrado
    { start: 09 * 60, end: 16 * 60 }, // miércoles 09:00 - 16:00 
    { start: 09 * 60, end: 16 * 60 }, // jueves 09:00 - 16:00 
    { start: 09 * 60, end: 16 * 60 }, // viernes 09:00 - 16:00 
    { start: 09 * 60, end: 16 * 60 }, // sábado 09:00 - 16:00 
];
// recibimos dia y hora actual "today"
function comprobarHora(today) {
    // separamos dia de la fecha
    let day = today.getDay();
    // selecionamos el dia del objeto "dayOfTheWeek"
    let dayName = dayOfTheWeek[day];
    // adaptamos hora actual con minutos a nuestro formato "time"
    let time = today.getHours() * 60 + today.getMinutes();
    // comparamos resultado "time"  con el horario del dia schedule[day].start y schedule[day].end
    let isOpen = (time >= schedule[day].start && time < schedule[day].end) ? true : false;
    // creamos sugerencias sobre proxima apertura o cierre 
    let sug1 = ((minLeft = (schedule[day].end - time)) <= 60) ? `pero cerramos en ${minLeft} minutos` : "";
    // guardamos resultado en una variable
    let result = (isOpen ? `Abiertos <span>${sug1}</span>` : ' Cerrado');
    // si mañana es dia libre, no abrimos 
    let freeDay = ((day + 1 === 2) ? ` ${dayOfTheWeek[2]} cerrado` : `Abre mañana`);
    // si ya esta cerrado elegir si se abre hoy o mañana 
    let sug2 = (whenOpen = (time > schedule[day].end)) ? `${freeDay}` : ((isOpen) ? "" : `Abre a las 09:00`);
    // imprimimos resultado
    document.getElementById("schedule").innerHTML = result;
    // imprimimos sugerencias
    document.getElementById("sugestions").innerHTML = sug2;
    // imprimimos la fecha actual
    let printH = (today.getHours() < 10) ? `0` + today.getHours() : today.getHours();
    let printM = (today.getMinutes() < 10) ? `0` + today.getMinutes() : today.getMinutes();
    document.getElementById("today").innerHTML = dayName + "  " + printH + " : " + printM;

}
function setToday() {
    // let today = new Date(2022, 04, 16, 15, 45); // Día de prueba
    let today = new Date(); // Día y hora actual
    comprobarHora(today);
};
setInterval(setToday, 1000);
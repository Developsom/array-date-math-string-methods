/* Opdracht 0: voorbeeld */
// Maak een nieuw date-object aan voor dit huidige moment en log dit in de terminal
// ---- Verwachte uitkomst: 2021-04-06T14:54:34.062Z (afhankelijk van het moment)

const currentDay = new Date();
console.log(currentDay);


/* Opdracht 1 */
// 1a. Maak een nieuw date-object aan voor dit huidige moment en log het aantal uren in de terminal
// 1b. Log daarna het aantal minuten in de terminal
// ---- Verwachte uitkomsten:
// Uren: 16 (als er een vier in de klok zit op het moment van aanroepen)
// Minuten: 36 (als het 16:36 is op het moment van aanroepen)

const currentMoment = new Date();
//Je maakt een nieuw object aan zodat je straks met je console een variabele met betreffend object hebt om je informatie uit op te vragen
console.log('Uren: ' + currentMoment.getHours());
// Je gebruikt simpelweg consolelog om de betreffende functie op te vragen
console.log('Minuten: ' + currentMoment.getMinutes());
// Je gebruikt simpelweg consolelog om de betreffende functie op te vragen

/* Opdracht 2 */
// Format het date-object dat je bij de vorige vraag hebt gemaakt naar een leesbare datum
// ---- Verwachte uitkomst: Tue Apr 06 2021 (afhankelijk van het moment)
const readableDate = currentMoment.toDateString();
// Wederom weer een nieuwe variabele gemaakt zodat ik de gewenste functie kan oproepen in het eerder gemaakte object
console.log(readableDate);
// Hier log ik de nieuw-gemaakte variabele. De variabele roept de gewenste functie en log.
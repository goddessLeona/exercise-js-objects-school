
//Uppgift 1

const skola = {
    name: "Greatschool",
    students: [],
    teachers: [],
    type: "high shoole",
    city: "Tuva",
    addres: "small road 7",
    zipCode: 23679,

}

// Uppgift 2

const matematic = {
    name: "Math",
    students: [],
    teachers: [],
}

const english = {
    name: "English",
    students: [],
    teachers: [],
}

const gym = {
    name: "Gym",
    students: [],
    teachers: [],
}

// Uppgift 3

const student ={
    name:"Sofia",
    age:16,
    gender: "female",
    subjects:[],
}

// Uppgift 4 ?

/*Skapa två stycken lärare med namnet som variabel och egenskaperna name 
och subjects som en tom array.*/

const pia= {
    name: "pia",
    subjects: [],
}

const tina= {
    name: "tina",
    subjects: [],
}

// Uppgift 5 

/*Skriv en kodrad där du lägger till ett ämne i en lärares ämnesarray. 
push() eller unshift() Kommer du ihåg skillnaden på dem två? Skriv sen 
ut både läraren och ämnet du valde i konsolen och inspektera dem. Resonera, 
hur kan man använda den datan ur ett admins perspektiv på en skola, och tycker du 
den är komplett? Vad saknas?*/

pia.subjects.push("math");
console.log(pia.name + " " + pia.subjects)

// Uppgift 6

//Lägg till en student i ett ämnes studentarray. Skriv ut och inspektera i konsolen.//

matematic.students.push("Sara");
console.log(`The name of the student is ${matematic.students} she study ${matematic.name}`)

// Uppgift 7

/*För att lösa problematiken i de två senaste uppgifterna så bör man i sådana här fall 
lägga till kopplingen i båda objekten. Alltså vi börjar med att lägga till ett ämne i en 
lärarens ämnesarray, och sen byter vi ut det tomma lärarobjekten i ämnet mot läraren. 
Då har vi en referens på båda sidorna. Egentligen är detta något som kallas för en cirkulär 
referens vilket vi helst vill undvika när vi programmerar, då kan orsaka krashar i vissa fall, 
men i syftet för uppgiften så är det ingen fara. Skapa nu en funktion som heter 
addSubjectToTeacher som tar emot ett ämne och en lärare, och parar ihop dessa. 
Returnera sen läraren så du kan se förändringen i lärarens ämnesarray.
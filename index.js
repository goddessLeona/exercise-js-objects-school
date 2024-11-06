
//Uppgift 1

const skola = {
    name: "Greatschool",
    students: [],
    addstudents: function (student){
        this.students.push(student);
    },
    teachers: [],
    addTeachers: function (teacher){
        this.teachers.push.teacher;
    },
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

const sofia = {
    name:"Sofia",
    age:16,
    gender: "female",
    subjects:[],
    enlistToSubjec: function (subject){
        this.subjects.push(subject)
    },
}

const mia = {
    name:"Mia",
    age:16,
    gender: "female",
    subjects:[],
    enlistToSubjec: function (subject){
        this.subjects.push(subject)
    },
}


const anna = {
    name:"Anna",
    age:16,
    gender: "female",
    subjects:[],
    enlistToSubjec: function (subject){
        this.subjects.push(subject)
    },
}

const per = {
    name:"Per",
    age:16,
    gender: "female",
    subjects:[],
    enlistToSubjec: function (subject){
        this.subjects.push(subject)
    },
}

const lars = {
    name:"Lars",
    age:16,
    gender: "female",
    subjects:[],
    enlistToSubjec: function (subject){
        this.subjects.push(subject)
    },
}

// Uppgift 4 ?

/*Skapa två stycken lärare med namnet som variabel och egenskaperna name 
och subjects som en tom array.*/

const teacher1= {
    name: "pia",
    subjects: [],
    addSubjects: function (subject){
        this.subjects.push(subject);
    },
}

const teacher2= {
    name: "tina",
    subjects: [],
    addSubjects: function (subject){
        this.subjects.push(subject);
    },
}

// Uppgift 5 

/*Skriv en kodrad där du lägger till ett ämne i en lärares ämnesarray. 
push() eller unshift() Kommer du ihåg skillnaden på dem två? Skriv sen 
ut både läraren och ämnet du valde i konsolen och inspektera dem. Resonera, 
hur kan man använda den datan ur ett admins perspektiv på en skola, och tycker du 
den är komplett? Vad saknas?*/

teacher1.subjects.push("math");
console.log(teacher1.name + " " + teacher1.subjects)

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
Returnera sen läraren så du kan se förändringen i lärarens ämnesarray.*/

function addSubjectToTeacher (subject, teacher){
    if(teacher === "tina"){
        tina.subjects.push(subject);
    }
    console.log(tina)
    console.log(`#7`)
}


// Uppgift 8

/*Varför ha en fristående funktion som lägger till ämne till en lärare? Varför 
inte bara lägga till en funktion (alltså en metod eftersom funktionen då är kopplad till ett specifikt objekt)
 i lärarnas objekt som en egenskap? Till exempel:*/


 let niklas = {
    name: "niklas",
    subjects: [],
    addSubject: function (subject) {
      this.subjects.push(subject);
    },
  };

    console.log(niklas);
    console.log(`#8 what a strange uppgft, fattar inget`)
  
  // Tänk på att "this" måste användas för att referera till det egna objektets egenskaper.
  
  // Andra sättet är att helt enkelt lägga till en egenskap med hjälp av punktnotation:
  niklas.addSubject = function (subject) {
    niklas.subjects.push(subject);
  };
  



 // vet inte varför ? värkar smidigare att göra det inanför samma scop



// Uppgift 9


/*Skapa följande metoder (Någon eller ett par av metoderna kan förekomma flera gånger fast på olika 
objekt med olika logik) och lägg in de i rätt typ av objekt: addTeacher, enlistToSubject, 
addStudent, addSubject*/

//Uppgift 10

/*Prova att leka runt med alla de skapade metoderna i konsolen och försöka lägga till i de olika objekten. 
Skriv ut objekten hela tiden och inspektera dem. Kan du tänka dig någon likhet med ett riktigt adminprogram 
för en skola där en admin till exempel skriver ut en lista på alla ämnen för att se vilka respektive lärare 
som är ansvariga för respektive kurs.*/

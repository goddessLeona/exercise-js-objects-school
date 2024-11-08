
//Uppgift 1,   school

const skola = {
    name: "Greatschool",
    students: [],
    regulatedStudents:[],
    addStudents: function (student){
        this.students.push(student);
    },
    teachers: [],
    addTeachers: function (teacher){
        this.teachers.push(teacher);
    },
    removeteacher: function (nameTeacher){
        if(skola.teachers.includes(nameTeacher)){
            this.teachers.splice(0.1.nameTeacher);
        }else{
            console.log(`there are no teacher with the name ${nameTeacher}`)
        }
    },
    type: "high shoole",
    city: "Tuva",
    addres: "small road 7",
    zipCode: 23679,
    regulateStudent: function (studentR){
        if(skola.students.includes(studentR)){
            this.students.splice(0.1.studentR);
            this.regulatedStudents.push(studentR);
            console.log(`student ${studentR} are temporary not in school`)
        }else{
            console.log(`there are no student with the name ${studentR}`)
        }
    },
    fireTeacher: function (teacherfired){
        if(skola.teachers.includes(teacherfired)){
            this.teachers.splice(0.1.teacherfired);
            matematic.teachers.splice(0.1.teacherfired);
            console.log(`${teacherfired} is now fired and removed`);

        }else{
            console.log(`there are no teacher with the name ${teacherfired} working in the school`)
        }
    },

}

// Uppgift 2, subjects

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

// Uppgift 3, students

const sofia = {
    name:"Sofia",
    age:16,
    gender: "female",
    subjects:[],
    enlistToSubjec: function (subject){
        this.subjects.push(subject)
    },
    quitSubject: function (subject){
        if(sofia.subjects.includes(subject)){
            this.subjects.splice(0.1.subject);
            console.log(`${sofia.name} have now quit ${subject}`)
        }else{
            console.log(`this class: ${subject} do not excist` )
        }
    }
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

// Uppgift 4, teachers

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

 // vet inte varför ? värkar smidigare att göra det inanför samma scop



// Uppgift 9 (done adda functionerna på objecten som gjordes i de tidigare uppgifterna)


/*Skapa följande metoder (Någon eller ett par av metoderna kan förekomma flera gånger fast på olika 
objekt med olika logik) och lägg in de i rätt typ av objekt: addTeacher, enlistToSubject, 
addStudent, addSubject*/

//Uppgift 10 (done, medan jag prövde att lösa Uppgift 11)

/*Prova att leka runt med alla de skapade metoderna i konsolen och försöka lägga till i de olika objekten. 
Skriv ut objekten hela tiden och inspektera dem. Kan du tänka dig någon likhet med ett riktigt adminprogram 
för en skola där en admin till exempel skriver ut en lista på alla ämnen för att se vilka respektive lärare 
som är ansvariga för respektive kurs.*/

// Uppgift 11 (not sure if this was the right way to do this, but kind of work)

/*Skapa fler metoder, quitSubject, removeTeacher, relegateStudent, fireTeacher. I vilka objekt hör dessa metoder
 hemma? Och om vi till exempel sparkar en lärare, så måste vi ju ta bort lärarens koppling med skolan, 
 och ämnet/ämnerna som läraren undervisar i. Hur löser vi detta i våra metoder, nu får vi börja tänka oss för lite.*/

 // quitSubject - used in the sofia (student) object, using include & splice, function under
 
 // removeTeacher -  used in the skol object, using include & splice, function under. 
 
 /* relegateStudent - added a emty array named regulatedstudents[] in the school object, added a metod
 inside the object, function under. one to remove the student from one list and one to add to new list. */
 
 // fireTeacher - solved but not sure if right way of solving it, function under

/*quitSubject: function (subject){
        if(sofia.subjects.includes(subject)){
            this.subjects.splice(0.1.subject);
            console.log(`${sofia.name} have now quit ${subject}`)
        }else{
            console.log(`this class: ${subject} do not excist` )
        }
    }
}*/

 /*removeteacher: function (nameTeacher){
        if(skola.teachers.includes(nameTeacher)){
            this.teachers.splice(0.1.nameTeacher);
        }else{
            console.log(`there are no teacher with the name ${nameTeacher}`)
        }
    },*/

    /*regulateStudent: function (studentR){
        if(skola.students.includes(studentR)){
            this.students.splice(0.1.studentR);
            this.regulatedStudents.push(studentR);
            console.log(`student ${studentR} are temporary not in school`)
        }else{
            console.log(`there are no student with the name ${studentR}`)
        }
    },*/

    /*fireTeacher: function (teacherfired){
        if(skola.teachers.includes(teacherfired)){
            this.teachers.splice(0.1.teacherfired);
            matematic.teachers.splice(0.1.teacherfired);
            console.log(`${teacherfired} is now fired and removed`);

        }else{
            console.log(`there are no teacher with the name ${teacherfired} working in the school`)
        }
    },*/

    // Uppgift 12
    //Lek runt med dessa metoder i konsolen. Lägg till lite här och ta bort lite där. Rätt smidigt va?

    // Uppgift 13

    /*Ny bygger vi på det lite. För att undvika att behöva anropa massa metoder i konsolen när vi startar
     om programmet (vilket händer vid varje redigering av script-filen) så kan vi längst ner i script-filen 
     skapa (alltså den koden läses in sist hela tiden) logik för att koppla några studenter till skolan, 
     några ämnen till studenterna och några lärare till ämnena och så vid are. Skapa sån logik nu.*/ 

     //dummy data

     skola.addTeachers(teacher1);
     skola.addTeachers(teacher2);
     skola.addStudents(sofia);
     skola.addStudents(mia);
     skola.addStudents(per);
     skola.addStudents(lars);
     sofia.enlistToSubjec(english);
     mia.enlistToSubjec(gym);
     per.enlistToSubjec(matematic);

     //Uppgift 14

     /*Skapa en funktion (OBS, en fristående funktion) , displayAllStudents som loopar igenom skolans alla
    studenter med hjälp av en for-loop. Tänk på att en vanlig for..of loop inte fungerar här (varför är det så?).
    Vi måste använda en for..IN loop, och en for..in loop låter oss loopa igenom ett objekts egenskaper 
    (även kallad nycklar, keys) och på så sätt kunna koppa åt alla egenskaperna värde. Syntax:*/

  /*  for (keys in medieinstitutet.students) {
        logik för att printa ut studenterna
      }*/

    function studentsSchool (){
        for (let allStudents in skola.students){
            console.log(`${allStudents} => ${skola.students[allStudents]}`);
        } 
    }

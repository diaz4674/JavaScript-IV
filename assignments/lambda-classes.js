// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(instructAttributes){
        super(instructAttributes);
        this.specialty = instructAttributes.specialty;
        this.favLanguage = instructAttributes.favLanguage;
        this.catchPhrase = instructAttributes.catchPhrase;
    }

    demo(subject){

            return `Today we are learning about ${subject}`
        }
    

    grade(student, subject){
      
          return `${student} receives a perfect score on ${subject}`;
        
    }
}

class Student extends Person {
    constructor(StudentAttributes){ 
        super(StudentAttributes);
        this.previousBackground = StudentAttributes.previousBackground;
        this.className = StudentAttributes.className;
        this.favSubjects = StudentAttributes.favSubjects;
    }

    listsSubjects(){
        console.log(this.favSubjects);
    }
    
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManagers extends Instructor {
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }

    standUp(channel){
          return `${this.name} announces to ${channel}, @channel standy times!`
    }

    debugsCode(student, subject){
           return `${this.name} debugs ${student}'s code on ${subject}`;
    }
}

const bruce = new Instructor({
    name: 'Bruce',
    location: "Gotham City",
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });


const robin = new Student ({
    name: "Robin",
    location: "Gotham City",
    age: 14, 
    gender: 'male',
    previousBackground: 'Assassin',
   className: 'CS132',
   favSubjects: 'React'
})



const alfred = new ProjectManagers ({
    name: 'Alfred',
    location: "Gotham City",
    age: 50,
    gender: 'male',
    gradClassName: "CS1",
    favInstructor: "Bruce"
})


console.log(bruce.grade(robin.name, bruce.favLanguage))
console.log(bruce.demo('Javascript'))

console.log(robin.listsSubjects());
console.log(robin.PRAssignment("React"));
console.log(robin.sprintChallenge("Python"))

console.log(alfred.standUp("webpt4"))
console.log(alfred.debugsCode(robin.name, "Python"))
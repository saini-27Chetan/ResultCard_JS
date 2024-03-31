let studentName = prompt("Enter your name");
let marksScoredVal = document.getElementsByClassName('marks-scored')[0];
let gradeVal = document.getElementsByClassName('grade')[0];
let percentileVal = document.getElementsByClassName('percentile')[0];
let reactionVal = document.getElementById('reactionScore');
let memoryVal = document.getElementById('memoryScore');
let verbalVal = document.getElementById('verbalScore');
let visualVal = document.getElementById('visualScore');

students.forEach(element => {
    if(studentName === element.name){
        marksScoredVal.innerText=element.marksScored;
        gradeVal.innerText=element.grade;
        percentileVal.innerText=element.percentile;
        reactionVal.innerText=element.reaction;
        memoryVal.innerText=element.memory;
        verbalVal.innerText=element.verbal;
        visualVal.innerText=element.visual;
    }
});

// If student name is not present in the data.js then the result will be 0

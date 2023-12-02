function schoolRegister(arrayOfStudents) {
    let objOfStudents = [];
    for (student of arrayOfStudents) {
        let nameStartIndex = student.indexOf("Student name: ") + "Student name:".length;
        let nameEndIndex = student.indexOf(",", nameStartIndex);
        let studentName = student.slice(nameStartIndex, nameEndIndex).trim();

        let gradeStartIndex = student.indexOf("Grade: ") + "Grade:".length;
        let gradeEndIndex = student.indexOf(",", gradeStartIndex);
        let grade = parseInt(student.slice(gradeStartIndex, gradeEndIndex).trim(), 10);

        let scoreStartIndex = student.indexOf("average score: ") + "average score: ".length;
        let averageScore = parseFloat(student.slice(scoreStartIndex).trim());

        objOfStudents.push({
            studentName: studentName,
            grade: grade,
            averageScore: averageScore
        })
    }

    for (i in objOfStudents) {
        if (objOfStudents[i].averageScore >= 3) {
            objOfStudents[i].grade += 1;
        }
    }
    objOfStudents.sort((a, b) => a.grade - b.grade);
    objOfStudents = objOfStudents.filter(student => student.averageScore >= 3);

    let gradeInfo = {};

    objOfStudents.forEach(student => {
        if (!gradeInfo[student.grade]) {
            gradeInfo[student.grade] = {
                students: [],
                averageScore: 0,
                count: 0
            };
        }

        gradeInfo[student.grade].students.push(student.studentName);
        gradeInfo[student.grade].averageScore += student.averageScore;
        gradeInfo[student.grade].count++;
    });

    for (let grade in gradeInfo) {
        gradeInfo[grade].averageScore /= gradeInfo[grade].count;
    }

    for (let grade in gradeInfo) {
        console.log(`${grade} Grade`);
        console.log(`List of students: ${gradeInfo[grade].students.join(', ')}`);
        console.log(`Average annual score from last year: ${gradeInfo[grade].averageScore.toFixed(2)}\n`);
      }
}
schoolRegister([ "Student name: Mark, Grade: 8, Graduated with an average score: 4.75", "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66", "Student name: George, Grade: 8, Graduated with an average score: 2.83", "Student name: Steven, Grade: 10, Graduated with an average score: 4.20", "Student name: Joey, Grade: 9, Graduated with an average score: 4.90", "Student name: Angus, Grade: 11, Graduated with an average score: 2.90", "Student name: Bob, Grade: 11, Graduated with an average score: 5.15", "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95", "Student name: Bill, Grade: 9, Graduated with an average score: 6.00", "Student name: Philip, Grade: 10, Graduated with an average score: 5.05", "Student name: Peter, Grade: 11, Graduated with an average score: 4.88", "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00" ])
function softUniStudents(info) {
    let courses = [];
    for (command of info) {
        if (command.includes(': ')) {
            let part = command.split(': ');
            let courseName = part[0];
            let capacity = parseInt(part[1]);
            const existingCourseIndex = courses.findIndex(course => course.name === courseName);
            if (existingCourseIndex !== -1) {
                courses[existingCourseIndex].capacity += parseInt(capacity);
            } else {
                courses.push({ name: courseName, capacity: parseInt(capacity), students: [] });
            }
        } else if (command.includes('with email')) {
            let part = command.split(' with email ')
            const string = part[0];
            const match = string.match(/([a-zA-Z0-9]+)\[(\d+)\]/);
            const username = match[1];
            const creditsCount = parseInt(match[2]);
            let part2 = part[1].split(' joins ');
            const email = part2[0];
            const courseName = part2[1];
            let course = courses.find(c => c.name === courseName);
            if (course) {
                if (course.students && course.students.length < course.capacity) {
                    course.students.push({ username, creditsCount, email });
                }
            }
        }
    }
    courses.sort((a, b) => b.students.length - a.students.length);
    courses.forEach(course => {
        console.log(`${course.name}: ${course.capacity - course.students.length} places left`);
        course.students.sort((a, b) => b.creditsCount - a.creditsCount);
        course.students.forEach(student => {
            console.log(`--- ${student.creditsCount}: ${student.username}, ${student.email}`);
        });
    });
}
softUniStudents(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore']);
softUniStudents(['JavaBasics: 15', 'user1[26] with email user1@user.com joins JavaBasics', 'user2[36] with email user11@user.com joins JavaBasics', 'JavaBasics: 5', 'C#Advanced: 5', 'user1[26] with email user1@user.com joins C#Advanced', 'user2[36] with email user11@user.com joins C#Advanced', 'user3[6] with email user3@user.com joins C#Advanced', 'C#Advanced: 1', 'JSCore: 8', 'user23[62] with email user23@user.com joins JSCore']);
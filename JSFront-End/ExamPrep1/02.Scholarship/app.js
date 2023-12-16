window.addEventListener("load", solve);

function solve() {

  const studentName = document.getElementById("student");
  const university = document.getElementById("university");
  const score = document.getElementById("score");
  const nextButton = document.getElementById("next-btn");
  const ul = document.getElementById("preview-list")
  const ulCandidate = document.getElementById("candidates-list")
  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (studentName.value == "" || university.value == "" || score.value == "") {
      return;
    }
    li = createApplication(studentName.value, university.value, score.value);
    ul.appendChild(li);

    studentName.value = "";
    university.value = "";
    score.value = "";

    nextButton.disabled = true;

  });

  function createApplication(student, university, score) {

    const li = document.createElement("li");
    li.className = "application";

    const article = document.createElement("article");

    const h4 = document.createElement("h4");
    h4.textContent = student;

    const universityP = document.createElement("p");
    universityP.textContent = `University: ${university}`;

    const scoreP = document.createElement("p");
    scoreP.textContent = `Score: ${score}`;

    article.appendChild(h4);
    article.appendChild(universityP);
    article.appendChild(scoreP);

    const editButton = document.createElement("button");
    editButton.textContent = "edit";
    editButton.className = "action-btn edit";

    const applyButton = document.createElement("button");
    applyButton.textContent = "apply";
    applyButton.className = "action-btn apply";

    li.appendChild(article);
    li.appendChild(editButton);
    li.appendChild(applyButton);


    editButton.addEventListener("click", () => {
      document.getElementById("student").value = student;
      document.getElementById("university").value = university;
      document.getElementById("score").value = score;
      li.remove();
      nextButton.disabled = false;
    });

    applyButton.addEventListener("click", () => {
      ulCandidate.appendChild(li);
      li.removeChild(editButton);
      li.removeChild(applyButton);
      nextButton.disabled = false;
    })

    return li;

  }

}
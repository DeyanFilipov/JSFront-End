function attachEvents() {
  window.addEventListener("load", listStudents);
  const studentsContainer = document.querySelector('tbody');
  const [firstName, lastName, facultyNumber, grade] = Array.from(document.querySelectorAll('.inputs > input'));
  const submitBtn = document.getElementById('submit');
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';

  submitBtn.addEventListener('click', addStudent);

  async function listStudents() {
      try {
          studentsContainer.innerHTML = ''
          const response = await fetch(BASE_URL);
          const data = await response.json();
          const dataValues = Object.values(data)
          for (const { firstName, lastName, facultyNumber, grade, _id } of dataValues) {
              const tr = createElement('tr', '', studentsContainer)
              const thFirstName = createElement('th', firstName, tr)
              const thLastName = createElement('th', lastName, tr)
              const thFacNum = createElement('th', facultyNumber, tr)
              const thGrade = createElement('th', grade, tr)
          }
      } catch (e) {
      }
  }

  async function addStudent() {
      try {
          const firstNameValue = firstName.value
          const lastNameValue = lastName.value
          const facNumberValue = facultyNumber.value
          const gradeVale = grade.value

          const httpHeaders = {
              method: 'POST',
              body: JSON.stringify({
                  'firstName': firstNameValue,
                  'lastName': lastNameValue,
                  'facultyNumber': facNumberValue,
                  'grade': gradeVale
              })
          }

          const response = await fetch(BASE_URL, httpHeaders)

      } catch (e) {
      }
  }

  function createElement(type, content, parentNode, id, classes, attrs) {
      const htmlElement = document.createElement(type);

      if (content && type !== 'input') {
          htmlElement.textContent = content;
      }

      if (content && type === 'input') {
          htmlElement.value = content;
      }

      if (id) {
          htmlElement.id = id;
      }

      if (classes) {
          htmlElement.classList.add(...classes);
      }

      if (parentNode) {
          parentNode.appendChild(htmlElement);
      }

      if (attrs) {
          for (const key in attrs) {
              htmlElement.setAttribute(key, attrs[key]);
          }
      }

      return htmlElement;

  }
}

attachEvents();
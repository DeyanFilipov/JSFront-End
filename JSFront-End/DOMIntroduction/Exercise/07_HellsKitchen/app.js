function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const resurantsArr = JSON.parse(document.querySelector("#inputs textarea").value);
      
      let resturants = [];
      let bestResturant;
      let averageSalary = 0;

      let bestResturantResult = document.querySelector("#bestRestaurant p");
      let bestResturantWorkersResult = document.querySelector("#workers p");

      bestResturantWorkersResult.textContent = "";

      for (const resturantData of resurantsArr) {
         const resturantAndWorkers = resturantData.split(" - ");
         const resturantName = resturantAndWorkers[0];
         const workersString = resturantAndWorkers[1];
         const workersArr = workersString.split(", ");

         let resturant = resturants.find(r => r.resturantName === resturantName);

         console.log(resturant);

         if (!resturant) {
            resturant = {
               resturantName
            };
            resturant.workers = [];
         }

         for (const workersAndSalary of workersArr) {
            const workerAndSalary = workersAndSalary.split(" ");

            let worker = {
               name: workerAndSalary[0],
               salary: workerAndSalary[1]
            }

            resturant.workers.push(worker);
         }

         resturants.push(resturant);
      }

      for (const resturant of resturants) {
         let currentAverageSalary = 0;
         let bestSalary = 0;

         for (const worker of resturant.workers) {
            let salary = Number(worker.salary);
            
            currentAverageSalary += salary;

            if (salary > bestSalary) {
               bestSalary = salary;
            }
         }

         currentAverageSalary = currentAverageSalary / resturant.workers.length;

         if (currentAverageSalary > averageSalary) {
            averageSalary = currentAverageSalary;

            bestResturant = {
               resturantName: resturant.resturantName,
               averageSalary: currentAverageSalary,
               bestSalary: bestSalary,
               workers: []
            }

            for (const worker of resturant.workers) {
               bestResturant.workers.push(worker);
            }
         }
      }
      bestResturant.workers = bestResturant.workers.sort((a, b) => b.salary - a.salary);

      bestResturantResult.textContent = `Name: ${bestResturant.resturantName} Average Salary: ${bestResturant.averageSalary.toFixed(2)} Best Salary: ${bestResturant.bestSalary.toFixed(2)}`;

      bestResturant.workers.forEach(worker => {
         bestResturantWorkersResult.textContent += `Name: ${worker.name} With Salary: ${worker.salary} `;
      });
   }
}
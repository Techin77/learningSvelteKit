/** Arrow function and filter method

Structure: (var)=>{statement;}

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const activeJobsOld = jobs.filter(function (job) {
  return job.isActive;
});
const activeJobs = jobs.filter((job) => job.isActive);
console.log(activeJobs);


const person = {
  talk() {
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  },
};

person.talk();
*/

/** arrey.map: return all items in arrey

const colors = ["red", "green", "blue"];
const items = colors.map((color) => `<li>${color}</li>`); // replace (color) => '<li>' + color + '</li>'
console.log(items);
*/

/*... for cloning any object into another object

const first = [1, 2, 3];
const second = [4, 5, 6];

const firstAndSecond = [...first, "and", ...second];
console.log(firstAndSecond);
*/

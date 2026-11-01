/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function generateFreeLancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const price =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;
  return {
    name: name,
    occupation: occupation,
    rate: price,
  };
}

const freelancers = [];

for (let i = 0; i < NUM_FREELANCERS; i++) {
  freelancers.push(generateFreeLancer());
}

function getAverageRate() {
  let total = 0;
  for (let i = 0; i < freelancers.length; i++) {
    total += freelancers[i].rate;
  }
  return total / freelancers.length;
}
const average = getAverageRate();

const averageElement = document.querySelector("#average");
averageElement.textContent = `Average hourly rate: $${average}`;

function Freelancer(freelancer) {
  const freelancerElement = document.createElement("li");

  freelancerElement.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.rate}/hr`;

  return freelancerElement;
}

function FreelancerList() {
  const freelancerList = document.createElement("ul");

  for (let i = 0; i < freelancers.length; i++) {
    freelancerList.append(Freelancer(freelancers[i]));
  }

  return freelancerList;
}

function AverageRate() {
  const averageElement = document.createElement("p");

  averageElement.textContent = `Average hourly rate: $${average.toFixed(2)}`;

  return averageElement;
}

function render() {
  const averageContainer = document.querySelector("#average");
  const freelancerContainer = document.querySelector("#freelancer-list");

  averageContainer.replaceWith(AverageRate());
  freelancerContainer.replaceWith(FreelancerList());
}

render();

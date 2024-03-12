const Queue = require("./queue");

const main = () => {
  const graph = {};
  graph["you"] = ["alice", "bob", "claire"];
  graph["bob"] = ["anuj", "peggy"];
  graph["alice"] = ["peggy"];
  graph["claire"] = ["thom", "jonny"];
  graph["anuj"] = [];
  graph["peggy"] = ["bob"];
  graph["thom"] = [];
  graph["jonny"] = [];

  const searchQueue = new Queue();
  searchQueue.enqueue(graph["you"]);
  const searched = new Set();

  while (searchQueue.head) {
    searchQueue.print();
    person = searchQueue.dequeue();

    if (!searched.has(person)) {
      if (personIsSeller(person)) {
        console.log(`${person} is a seller!`);
        return person;
      } else {
        searchQueue.enqueue(graph[person]);
        searched.add(person);
      }
    }
  }
  return null;
};

// dummyfunction for test purpose
function personIsSeller(name) {
  return name === "thom";
}

console.log("-> result:", main());

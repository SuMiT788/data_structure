const Queue = require("./queue");

const main = () => {
  const graph = {};
  graph["you"] = ["alice", "bob", "claire"];
  graph["bob"] = ["anuj", "peggy"];
  graph["alice"] = ["peggy"];
  graph["claire"] = ["thom", "jonny"];
  graph["anuj"] = [];
  graph["peggy"] = [];
  graph["thom"] = [];
  graph["jonny"] = [];

  const searchQueue = new Queue();
  searchQueue.enqueue(graph["you"]);

  while (searchQueue) {
    searchQueue.print();
    person = searchQueue.dequeue();

    if (personIsSeller(person)) {
      console.log(`${person} is a seller!`);
      return true;
    } else {
      searchQueue.enqueue(graph[person]);
    }
  }
  return false;
};

// dummyfunction for test purpose
function personIsSeller(name) {
  return name === "thom";
}

main();

const main = () => {
  try {
    while (true) {
      const option = 5;

      console.log("-------------------------------");
      console.log("1) Traverse");
      console.log("2) Insertion");
      console.log("3) Deletion");
      console.log("4) Search");
      console.log("5) Exit");
      console.log("Choose any option:");

      if (option === 5) {
        break;
      } else {
        console.log("** Invalid option selected");
      }
    }
  } catch (error) {
    console.log("-> error:", error);
  }
};

main();

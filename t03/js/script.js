function addWords(obj, wrds) {
    let arr = obj.words.trim().split(/ +/);
  
    obj.words = '';
    arr = arr.concat(wrds.trim().split(/ +/));
    for (let i = 0; i < arr.length; i++) {
      if (obj.words.search(arr[i]) == -1) {
        obj.words += " " + arr[i];
      }
    }
    obj.words = obj.words.trim();
  }
  
  function removeWords(obj, wrds) {
    let arr = wrds.trim().split(/ +/);
  
    for (let i = 0; i < arr.length; i++) {
      while (obj.words.search(arr[i]) != -1) {
        obj.words = obj.words.replace(arr[i], '');
      }
    }
    obj.words = obj.words.trim();
  }
  
  function changeWords(obj, oldWrds, newWrds) {
    removeWords(obj, oldWrds);
    addWords(obj, newWrds);
  }

  let obj = {words: "text     string blank"};
  console.log(obj);

  addWords(obj, "numbers");
  console.log(obj);

  removeWords(obj, "blank");
  console.log(obj);

  changeWords(obj, " numbers", "pargraph");
  console.log(obj);
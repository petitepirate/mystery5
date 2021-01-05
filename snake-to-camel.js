const snakeToCamel = (str) => {
    

    return str.replace(/([_][a-z])/ig, (snakeGroup) => {  //regex replace on the string searching for underscore
        //i ignores case, g makes it global so doesnt return first match.  Turns into matched group and assigned as a variable snakeGroup
      return snakeGroup.toUpperCase()  //makes letter uppercase
        .replace('_', '');  // deletes
    });
  };


  console.log(snakeToCamel("__awesome_sauce__"));

/* 
  Zip Arrays into Map
  
  
  Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
  Associative arrays are sometimes called maps because a key (string) maps to a value 
 */

  const keys1 = ["abc", 3, "yo"];
  const vals1 = [42, "wassup", true];

    

// for (var i=0; i<keys.length; i++):
// inserts into a new dict
//     for (var j=i; j=values[j];)


    /**
     * Converts the given arrays of keys and values into an object.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Array<string>} keys
     * @param {Array<any>} values
     * @returns {Object} The object with the given keys and values.
     */
  function zipArraysIntoMap(keys, values) {
      var dict = {};
      for(var i=0; i<keys.length; i++){
          dict += ({key: keys[i], value: values[i]});
        }
       return dict
    }
            
  console.log(zipArraysIntoMap(keys1, vals1))
  //doesn't work
  
  
    //-------------------------------------------------------------------------------------------
  
  
  
  /* 
    Invert Hash
    A hash table / hash map is an obj / dictionary
    Given an object / dict,
    return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
  */
  
  const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
  const expected2 = { Zaphod: "name", high: "charm", dicey: "morals" };
  
  /**
   * Inverts the given object's key value pairs so that the original values
   * become the keys and the original keys become the values.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Object<string, string>} obj An object with string keys and string values.
   * @return The given object with key value pairs inverted.
   */
   function invertObj(obj){
    var ret = {};
    for(var key in obj){
      ret[obj[key]] = key;
    }
    return ret;
  }
  
 console.log(invertObj(obj1))
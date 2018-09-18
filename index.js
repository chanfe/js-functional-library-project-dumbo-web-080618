fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (a in collection){
        callback(collection[a])
      }
      return collection
    },

    map: function(collection, callback) {
      let arr = []
      for (a in collection){
        arr.push(callback(collection[a]))
      }
      return arr
    },

    reduce: function(collection, callback, acc=0) {
      for (a in collection){
        acc = callback(acc, collection[a], collection)
      }
      return acc

    },

    find: function(collection, predicate) {
      for (a in collection){
        if (predicate(collection[a])){
          return collection[a]
        }
      }
    },

    filter: function(collection, predicate) {
      let arr = []
      for (a in collection){
        if (predicate(collection[a])){
          arr.push(collection[a])
        }
      }
      return arr
    },

    size: function(collection) {
      let counter = 0
      for (a in collection){
        counter += 1
      }
      return counter
    },

    first: function(array, n = 1) {
      let arr = []
      if(n == 1){
        return array[0]
      }
      for (let i = 0; i < n; i++){
        arr.push(array[i])
      }
      return arr
    },

    last: function(array, n = 1) {
      let arr = []
      if(n == 1){
        return array[array.length-1]
      }
      for (let i = 0; i < n; i++){
        arr.unshift(array[array.length-1-i])
      }
      return arr
    },

    compact: function(array) {
      let arr = []
      for (a in array){
        if (!!array[a]){
          arr.push(array[a])
        }
      }
      return arr
    },

    sortBy: function(array, callback) {
      let arr = array.slice()
      return arr.sort(function(a,b){return callback(a) - callback(b)})
    },

    flatten: function(array, shallow = false) {
      if (shallow){
        return 0
      }
      return 0

    },

    unpack: function(receiver, arr) {
     for (let val of arr)
       receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
        if (!Array.isArray(collection)) {
          return newArr.push(collection)
        }
        if (shallow) {
          for (let val of collection){
            if(Array.isArray(val)){
              this.unpack(newArr, val)
            }
            else{
              newArr.push(val)
            }
          }
        } else {
          for (let val of collection) {
            this.flatten(val, false, newArr)
          }
        }
        return newArr
      },

    uniq: function(array, isSorted = false, callback) {
      let arr = array.slice().sort()
      let answer = []
      let temp = 0
      for (a in arr){
        if (!!callback) {
          if (callback(array[a]) == 0){
            if(temp == 0){
              temp = array[a]
            }
            if(array.indexOf(callback(array[a]) + temp) == parseInt(a)){
              answer.push(array[a])
            }
          }
          else{
            if(array.indexOf(callback(array[a])) == parseInt(a)){
              answer.push(array[a])
            }
          }
        }
        else {
          if(array.indexOf(array[a]) === parseInt(a)){
            answer.push(array[a])
          }
        }
      }
      return answer
    },

    keys: function(object) {
      let answer = []
      for(obj in object){
        answer.push(obj)
      }
      return answer
    },

    values: function(object) {
      let answer = []
      for(obj in object){
        answer.push(object[obj])
      }
      return answer
    },

    functions: function(object) {
      let answer = []
      for(obj in object){
        if(object[obj]){
          answer.push(obj)
        }
      }
      return answer
    },

    giveMeMore: function() {
      return true
    },


  }
})()

fi.libraryMethod()

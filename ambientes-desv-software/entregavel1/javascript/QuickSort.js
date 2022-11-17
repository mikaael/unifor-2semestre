    function quicksort(array){
      if (array.length <= 1){
        return array;
      }
    
      var pivo = array[0];
      var esquerda = []; 
      var direita = [];
    
      for (var i = 1; i < array.length; i++) {
        array[i] < pivo ? esquerda.push(array[i]) : direita.push(array[i]);
      } return quicksort(esquerda).concat(pivo, quicksort(direita));
    
    };
    var unsorted = [1, 700, 84, 3, 9, 45, 12];
    var sorted = quicksort(unsorted);
    console.log('Sorted array', sorted);

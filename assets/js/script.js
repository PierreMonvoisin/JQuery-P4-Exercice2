$(function() {
  $(document).keypress(function(e) {
    //Check si la touche appuyé est la touche Entrée
    let validate = e.which;
    if (validate == 13){
      //Récupère les notes dans un array
      let arrayNotes = [$('#input1').val(), $('#input2').val(), $('#input3').val(), $('#input4').val(), $('#input5').val()]
      for (var i = 0; i < arrayNotes.length; i++){
        //Vérification de la valeur de l'input
        if (isNaN(arrayNotes[i]) || arrayNotes[i] < 0 || arrayNotes[i] > 20 || arrayNotes[i].trim() == ''){
          $('#input'+(i+1)).css({'border' : '3px solid red'})
          arrayNotes[i] = '-1';
        } else {
          $('#input'+(i+1)).css({'border' : '2px solid green'})
        }
      };
      if (arrayNotes.includes('-1')){
        alert('Veuillez entrer vos notes correctement')
        return false;
      } else {
        // Après vérification, transforme l'array de String en array de Number
        arrayNotes = arrayNotes.slice(',').map(Number)
        console.log(arrayNotes)
      }
    };
    
  });
});

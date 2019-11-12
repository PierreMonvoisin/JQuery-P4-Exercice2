$(function() {
  $(document).keypress(function(e) {
    //Check si la touche appuyé est la touche Entrée
    let validate = e.which;
    if (validate == 13){
      //Récupère les notes dans un array
      let arrayNotes = [$('#input1').val(), $('#input2').val(), $('#input3').val(), $('#input4').val(), $('#input5').val()]
      var somme = 0, result = 0;
      for (var i = 0; i < arrayNotes.length; i++){
        //Vérification de la valeur de l'input
        if (isNaN(arrayNotes[i]) || arrayNotes[i] < 0 || arrayNotes[i] > 20 || arrayNotes[i].trim() == ''){
          $('#input'+(i+1)).css({'border' : '3px solid red'})
          arrayNotes[i] = 'x';
        } else {
          $('#input'+(i+1)).css({'border' : '2px solid green'})
        }
      };
      if (arrayNotes.includes('x')){
        alert('Veuillez entrer vos notes correctement')
      } else {
        // Après vérification, transforme l'array de String en array de Number
        arrayNotes = arrayNotes.slice(',').map(Number)
        console.log(arrayNotes)
        // Somme des valeurs de l'array
        for (var i = 0; i < arrayNotes.length; i++) {
          somme += arrayNotes[i];
        }
        result = (somme/arrayNotes.length).toFixed(2)
        console.log('Moyenne : ' + result)
        // Affichage du résultat
        if (result >= 0 && result < 10){
          alert('Appréciation : En dessous de la moyenne' + '\nMoyenne : ' + result)
        } else if (result >= 10 && result < 13){
          alert('Appréciation : Moyen' + '\nMoyenne : ' + result)
        } else if (result >= 13 && result < 16){
          alert('Appréciation : Bien' + '\nMoyenne : ' + result)
        } else if (result >= 16 && result < 20){
          alert('Appréciation : Très bien' + '\nMoyenne : ' + result)
        } else {
          alert('Appréciation : Excellent' + '\nMoyenne : ' + result)
        }
      };
    };
  });
});

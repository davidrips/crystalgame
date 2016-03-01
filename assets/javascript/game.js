
  function getRandomArbitrary(min, max){
     return Math.floor(Math.random() * (max-min))+min};

  var numberToGuess = getRandomArbitrary(19, 121);

  var numbers = [];
 
  var crystals = ["crystal1.jpeg", "crystal2.jpg", "crystal3.jpg", "crystal4.jpg"];

  $( document ).ready(function() {

    var reset = function(){
      numberToGuess= getRandomArbitrary(19,121);
      counter=0;
      
      $('#yourNumber').text(counter);
      $('#number').text(numberToGuess);
      $('#wins').text(wins);
      $('#losses').text(losses);
      
      numbers = [];
      for (var i = 1; i <= 4; i++) {
      numbers.push(Math.floor(Math.random()*(13-1)+1))
      };

      $('#crystals').html("");

      for (var i=0; i< numbers.length; i++){
        var imageCrystal = $('<img>'); 
        imageCrystal.attr('data-num', numbers[i]);
        imageCrystal.attr('src', "assets/images/"+crystals[i]);
        imageCrystal.attr('alt', 'crystals');
        imageCrystal.addClass('crystalImage');
        $('#crystals').append(imageCrystal);
      } 

      console.log(numbers)
      console.log(numberToGuess);
     
      $('.crystalImage').on('click', function(){
        counter = counter + parseInt($(this).data('num'));
        $('#yourNumber').text(counter);
        if (counter == numberToGuess){
          // alert('You won!!!!');
          // var dialog = '<div id="dialogWin" title="You won!" style="display:none"><p>You won!</p></div>'; 
          // $('body').append(dialog);
          // $("#dialogwin").dialog({
          //   height: 140,
          //     modal: true,
          //     open: function(event, ui){
          //         setTimeout("$('#dialogwin').dialog('close)",3000);
          //     }
          // });

          wins++; reset(); 
        }else if( counter > numberToGuess){
          // alert('You lost!'); 

        // var dialogLose = '<div id="dialogLose" title="You lost!" style="display:none"><p>You lost!</p></div>'; 
        //   $('body').append(dialogLose);
        //   $("#dialogLose").dialog({
        //     height: 140,
        //       modal: true,
        //       open: function(event, ui){
        //           setTimeout("$('#dialogLose').dialog('close)",3000);
        //       }
        //   });

          losses++; reset(); 
        }
        $('#yourNumber').text(counter);

      });

    };

    reset();

    
    var counter = 0;
      
    var wins = 0;
    var losses = 0;
    $('#number').text(numberToGuess);
    $('#wins').text(wins);
    $('#losses').text(losses);
     
    });


    
  
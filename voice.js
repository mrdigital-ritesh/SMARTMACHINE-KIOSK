document.addEventListener('DOMContentLoaded', function() {
    function playClickSound() {
        var audio = new Audio('sound atm/click.MP3');
        audio.addEventListener('canplay', function() {
            audio.play();
        });
    }

    function playTypingSound() {
        var audio = new Audio('sound atm/click.MP3');
        audio.play();
    }

    document.addEventListener('click', playClickSound);

    document.addEventListener('keydown', function(event) {
        if (/^[a-zA-Z0-9]$/.test(event.key)) {
            playTypingSound();
        }
    });
//cash buttons ke liyes
    function handleButtonClick(buttonId) {
        var button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', function() {
                playClickSound();
                // Redirect to 'cashcollect.html' 
                setTimeout(function() {
                    window.location.href = 'payment.html';
                }, 500); 
            });
        }
    }

    for (var i = 1; i <= 6; i++) {
        handleButtonClick('myButton' + i);
    }

    //cash end button

//cash wala payment
    document.getElementById('B1').addEventListener('click', function() {
      
        playClickSound();
    
       
        setTimeout(function() {
            window.location.href = 'cashcollect.html';
        }, 500); 
    });

    
    document.getElementById('B2').addEventListener('click', function() {
      
        playClickSound();
    
       
        setTimeout(function() {
            window.location.href = 'cashcollect.html';
        }, 500); 
    });
    //yaha tak

    

    


    






    
});

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

//window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var grammar = '#JSGF V1.0;'; 

      const recognition = new SpeechRecognition();
      var speechRecognitionList = new SpeechGrammarList();
      speechRecognitionList.addFromString(grammar, 1);
      recognition.grammars = speechRecognitionList;
      recognition.lang = 'en-US';
      recognition.interimResults = true;

      let p = document.createElement('p');
      const words = document.querySelector('.words');
      words.appendChild(p);

      recognition.addEventListener('result', e=> {
        const transcript = Array.from(e.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('')

          p.textContent = transcript;
          if(e.results[0].isFinal) {
              p = document.createElement('p');
              words.appendChild(p);
          }
        console.log(transcript);
      });
      recognition.addEventListener('end', recognition.start);

recognition.start();
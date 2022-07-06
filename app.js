const quoteText = document.querySelector(".quote"),
authorName =document.querySelector(".author .authorName")
quoteBtn = document.querySelector('button');
const soundbtn = document.querySelector('.sound'),
copybtn = document.getElementById('sita'),
twitterbtn = document.querySelector('.twitter')
;


function randomQuote(){
    quoteBtn.innerText = 'Loading Quote....'
  
    fetch("http://api.quotable.io/random").then(res=>res.json()).then(result=>{

        quoteBtn.classList.add("loading");

       
        quoteText.innerText = result.content;
        authorName.innerText = result.author

        quoteBtn.innerText = 'New Quote';
        quoteBtn.classList.remove("loading");

        
    });
}soundbtn.addEventListener('click',()=>{
 let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
 speechSynthesis.speak(utterance)
});

copybtn.addEventListener('click',()=>{
  
     navigator.clipboard.writeText(quoteText.innerText)
   });

   twitterbtn.addEventListener('click',()=>{
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;

    window.open(tweetUrl,"_blank");
  });


quoteBtn.addEventListener("click",randomQuote);

const quoteContent = document.getElementById("quote-content")
const quoteAuthor = document.getElementById("quote-author")

const soundBtn = document.getElementById("sound-btn")
const copyBtn = document.getElementById("copy-btn")
const tweetBtn = document.getElementById("tweet-btn")

const btn = document.getElementById("button")


const getQuote = () => {
    btn.textContent = 'Loading...'
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(res => {
        quoteContent.textContent = res.content
        quoteAuthor.textContent = res.author
        btn.textContent = 'Get Quote'
    }
    )
}
    
    const handleSound = () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteContent.textContent} by ${quoteAuthor.textContent}`)
    speechSynthesis.speak(utterance)
}

const handleCopy = () => {
    navigator.clipboard.writeText(quoteContent.textContent)
}

const handleTweet = () => {
    let url = `https://twitter.com/intent/tweet?url=${quoteContent.textContent}`
    window.open(url, "_blank")
}

document.addEventListener("DOMContentLoaded", getQuote)
soundBtn.addEventListener("click", handleSound)
copyBtn.addEventListener("click", handleCopy)
tweetBtn.addEventListener("click", handleTweet)
btn.addEventListener("click", getQuote)

const JournalEntryList = (allEntries) =>{
    for (const entry of allEntries ){
    const journalHTML = journalEntryConverter(entry)
    const journalEntryArticleElement= document.querySelector(".journalEntries")
    journalEntryArticleElement.innerHTML += journalHTML
}
}



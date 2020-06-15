

const journalEntryConverter = (journalEntryObject)=>{
    const journalHTMLReresentation =`
        <section>Entries
        <div>${journalEntryObject.date}</div>
        <div>${journalEntryObject.concept}</div>
        <div>${journalEntryObject.Entry}</div>
        <div>${journalEntryObject.mood}</div>
        <br><br>
        </section>
        `
        return journalHTMLReresentation
    
}

const JournalEntryList = (allEntries) =>{
    for (const entry of allEntries ){
    const journalHTML = journalEntryConverter(entry)
    const journalEntryArticleElement= document.querySelector(".journalEntries")
    journalEntryArticleElement.innerHTML += journalHTML
   // console.log(entry)
}
}

JournalEntryList(journalEntries)

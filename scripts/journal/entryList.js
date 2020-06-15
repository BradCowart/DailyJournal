let entriesArray = []
 const entriesList = (entries) =>{
    entriesArray = entries
    const entriesdivelement= document.querySelector(".journalEntries")
    entriesdivelement.innerHTML = "";
    for (const currentEntriesObject of entries){
        
            const entriesHTML= journalEntryConverter(currentEntriesObject)
            entriesdivelement.innerHTML += entriesHTML
            
        }
    }



const JournalEntryList = (allEntries) =>{
    for (const entry of allEntries ){
    const journalHTML = journalEntryConverter(entry)
    const journalEntryArticleElement= document.querySelector(".journalEntries")
    journalEntryArticleElement.innerHTML += journalHTML
}
}




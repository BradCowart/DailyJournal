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


let entriesArray = []
 const entriesList = (entries) =>{
    entriesArray = entries
    const entriesdivelement= document.querySelector(".journalEntries")
    entriesdivelement.innerHTML = "";
    for (const currententriesobject of entries.daily){
        
            const entriesHTML= entriesConverter(currententriesobject,dayCnt)
            entriesdivelement.innerHTML += entriesHTML
            
        }
    }

}
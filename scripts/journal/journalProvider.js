const getEntries = () => { 
    return fetch(`http://localhost:3000/journalEntries`)
    .then((response) => response.json())
    .then((parsedEntries) => {
        entries = parsedEntries
        return entries
      })
     .then((entries)=>{
         entriesList(entries)
     })
  }
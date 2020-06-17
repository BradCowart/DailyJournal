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

export default journalEntryConverter
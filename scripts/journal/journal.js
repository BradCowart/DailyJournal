
const journalEntries =[ 
{
    date:"6/1/2020",
    concept:"Concept 1",
    Entry:"Entry 1",
    mood:"Happy" 
},
{
    date:"6/2/2020",
    concept:"Concept 2",
    Entry:"Entry 2",
    mood:"Tired",
},
{
    date:"6/3/2020",
    concept:"Concept 3",
    Entry:"Entry 3",
    mood:"Happy"
}
]

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

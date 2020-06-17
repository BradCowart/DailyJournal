//import getJournalEntries from "./journal/data.js"
import journalEntryConverter from "./journal/entryComponent.js"

API.getJournalEntries().then((response)=>
JournalEntryList(response)
)
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(
	localStorage.getItem("myLeads", myLeads)
)
const tabBtn = document.getElementById("tab-btn")

let render = (dataOfarray) => {
	let listItems = ""
	for (i = 0; i < dataOfarray.length; i++) {
		listItems += `
		<li>
			<a target='_blank' href='${dataOfarray[i]}'>
				${dataOfarray[i]}
			</a>
		</li>
		`
	}
	ulEl.innerHTML = listItems
}

if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage
	render(myLeads)
}

tabBtn.addEventListener("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		myLeads.push(tabs[0].url)
		localStorage.setItem("myleads", JSON.stringify(myLeads))
		render(myLeads)
	})
})

deleteBtn.addEventListener("click", () => {
	localStorage.clear()
	myLeads = []
	render(myLeads)
})

inputBtn.addEventListener("click", () => {
	myLeads.push(inputEl.value)
	inputEl.value = ""
	localStorage.setItem("myLeads", JSON.stringify(myLeads))
	render(myLeads)
})

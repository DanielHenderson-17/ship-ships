import { getDocks, getHaulingShips } from "./database.js"

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target

    if (itemClicked.dataset.type === "dock") {
        const dockId = parseInt(itemClicked.dataset.id)
        const haulers = getHaulingShips()
        const haulersAtDock = haulers.filter(hauler => hauler.dock_id === dockId)

        let message
        if (haulersAtDock.length === 0) {
            message = `The ${itemClicked.textContent} dock is currently unloading nothing`
        } else if (haulersAtDock.length === 1) {
            message = `The ${itemClicked.textContent} dock is currently unloading ${haulersAtDock[0].name}`
        } else {
            const haulerNames = haulersAtDock.map(hauler => hauler.name).join(", ")
            message = `The ${itemClicked.textContent} dock is currently unloading ${haulerNames}`
        }
        window.alert(message)
    }
})

export const DockList = () => {
    const docks = getDocks()

    // Sort the docks by location
    docks.sort((a, b) => a.location.localeCompare(b.location))

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li data-id="${dock.id}" data-type="dock">${dock.location} - Volume: ${dock.volume} million tons</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}

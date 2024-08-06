import { getHaulingShips, getShippingShips } from "./database.js"

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target

    if (itemClicked.dataset.type === "hauler") {
        const haulerId = parseInt(itemClicked.dataset.id)
        let shipCount = 0

        const shippingShips = getShippingShips()

        for (const ship of shippingShips) {
            if (ship.hauler_ship_id === haulerId) {
                shipCount++
            }
        }
        window.alert(`Hauler ${itemClicked.textContent} is carrying ${shipCount} ship(s).`)
    }
})

export const HaulerList = () => {
    const haulers = getHaulingShips()

    // Sort the haulers by name
    haulers.sort((a, b) => a.name.localeCompare(b.name))

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li data-id="${hauler.id}" data-type="hauler">${hauler.name} - Dock ID: ${hauler.dock_id}</li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}

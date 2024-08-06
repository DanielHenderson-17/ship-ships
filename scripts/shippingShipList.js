import { getShippingShips, getHaulingShips } from "./database.js"

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.dataset.type === "shippingShip") {
        const haulerId = parseInt(itemClicked.dataset.haulerId)

        let haulingShip = { name: "Incorrect" }

        const haulers = getHaulingShips()

        for (const hauler of haulers) {
            if (hauler.id === haulerId) {
                haulingShip = hauler
                break
            }
        }
        window.alert(`${itemClicked.textContent} is being hauled by ${haulingShip.name}`)
    }
})

export const ShippingShipList = () => {
    const ships = getShippingShips()

    // Sort the shipping ships by name
    ships.sort((a, b) => a.name.localeCompare(b.name))

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML += `<li data-id="${ship.id}" data-hauler-id="${ship.hauler_ship_id}" data-type="shippingShip" class="bg-primary my-2">${ship.name}</li>`
    }

    shipsHTML += "</ul>"

    return shipsHTML
}

export const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Hauler One", dock_id: 1 },
        { id: 2, name: "Hauler Two", dock_id: 2 },
        { id: 3, name: "Hauler Three", dock_id: 3 },
        { id: 4, name: "Hauler Four", dock_id: 4 }
    ],
    shippingShips: [
        { id: 1, name: "Shipping One", hauler_ship_id: 1 },
        { id: 2, name: "Shipping Two", hauler_ship_id: 2 },
        { id: 3, name: "Shipping Three", hauler_ship_id: 3 },
        { id: 4, name: "Shipping Four", hauler_ship_id: 4 },
    ]
}

export const getDocks = () => {
    return database.docks.map((dock) => ({ ...dock }));
};

export const getHaulingShips = () => {
    return database.haulers.map(hauler => ({ ...hauler }))
};

export const getShippingShips = () => {
    return database.shippingShips.map(ship => ({ ...ship }))
};
import { DockList } from "./dockList.js"
import { HaulerList } from "./haulerList.js"
import { ShippingShipList } from "./ShippingShipList.js"

const dockContainer = document.getElementById("dockListContainer")
dockContainer.innerHTML = DockList()

const haulerContainer = document.getElementById("haulerListContainer")
haulerContainer.innerHTML = HaulerList()

const shipContainer = document.getElementById("shipListContainer")
shipContainer.innerHTML = ShippingShipList()

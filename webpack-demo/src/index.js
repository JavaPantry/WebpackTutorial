/*
const root = document.createElement("div")
root.innerHTML = `<p>Hello my first Webpack.</p>`
document.body.appendChild(root)
*/
import { groupBy } from "lodash-es"
import people from "./people"

import "./style.scss"
import './image-example'

const managerGroups = groupBy(people, "manager")

const root = document.createElement("div")
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`
document.body.appendChild(root)
import Menu, { MenuProps } from "./menu"
import MenuItem, { MenuItemProps } from "./menuItem"
import { FC } from "react"
import { type } from "@testing-library/user-event/dist/type"

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>
}
const TransMenu = Menu as IMenuComponent
TransMenu.Item = MenuItem

export default TransMenu
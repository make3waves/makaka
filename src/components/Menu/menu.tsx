import React, { createContext, useState } from "react";
import classNames from "classnames";

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIdex: number) => void


export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onSelect?: SelectCallback
}

interface IMenuContext {
  index?: number;
  onSelect?: SelectCallback;
}

export const MenuContenxt = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, defaultIndex, onSelect, children } = props
  const [currActive, setActive] = useState(defaultIndex)
  const classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical'
  })

  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currActive || 0,
    onSelect: handleClick
  }
  return (
    <ul className={classes} style={style}>
      <MenuContenxt.Provider value={passedContext}>
        {children}
      </MenuContenxt.Provider>
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}
export default Menu
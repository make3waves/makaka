import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button, { ButtonType, ButtonSize } from './button'
import '../../styles/index.scss'

const defaultButton = () => <Button onClick={action('clicked')}>Default button</Button>

const buttonWithSize = () => (
  <>
    <Button size={ButtonSize.Large}>Large button</Button>
    <Button size={ButtonSize.Small}>Small button</Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button btnType={ButtonType.Primary}>Primary button</Button>
    <Button btnType={ButtonType.Default}>Default Button</Button>
    <Button btnType={ButtonType.Danger}>Danger button</Button>
    <Button btnType={ButtonType.Link} href="https://google.com">
      Link button
    </Button>
  </>
)

storiesOf('Button Component', module)
  .add('Button', defaultButton)
  .add('不同尺寸的 Button', buttonWithSize)
  .add('不同类型的 Button', buttonWithType)

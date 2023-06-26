import {applyVueInReact} from 'veaury'
import { Button } from '@varlet/ui'

const ButtonVue = applyVueInReact(Button)

const Header = () => {
  return (
    <div>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore*/}
      <ButtonVue type={'primary'}>Button</ButtonVue>
      <span>header</span>
    </div>
  )
}

export default Header

import { Icon } from "@iconify/react"
import locationIcon from '@iconify/icons-mdi/fire-alert'
const Header = () => {
  return (
    <header className="header">
        <h2><Icon icon={locationIcon} /> Wildfire Tracker (Powered By NASA)</h2>
    </header>
  )
}

export default Header

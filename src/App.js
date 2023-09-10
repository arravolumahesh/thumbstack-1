import './App.css'

import Dashboard from './components/Dashboard'
import Header from './components/Header'
import History from './components/History'
import Management from './components/Management'
import Chart from './components/Chart'
import Transaction from './components/Transaction'

const App = () => (
  <>
    <div className="app-container">
      <Dashboard />
      <div className="app-container-1">
        <Header />
        <History />
        <div className="app-container-2">
          <Management />
          <Chart />
          <Transaction />
        </div>
      </div>
    </div>
  </>
)

export default App

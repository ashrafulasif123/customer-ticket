import { Suspense } from 'react'
import './App.css'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import { ToastContainer } from 'react-toastify'


function App() {

  const ticketsFetch = async () => {
    const res = await fetch('ticket.json')
    return res.json()
  }
  const ticketPromise = ticketsFetch()

  return (
    <>
      
        <Suspense fallback={<p>Customer Tickets are Loading....</p>}>
          <CustomerTickets ticketPromise={ticketPromise}></CustomerTickets>
        </Suspense>
        <ToastContainer />
    </>
  )
}

export default App

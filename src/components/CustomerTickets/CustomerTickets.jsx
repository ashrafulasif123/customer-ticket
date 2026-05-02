import { use, useState } from "react";
import CustomerTicket from "../CustomerTicket/CustomerTicket";
import Navbar from '../Navbar/Navbar'
import Progress from '../Progress/Progress'
import ProgressTickets from "../ProgressTickets/ProgressTickets";
import { toast } from "react-toastify";
import ResolvedTickets from "../ResolvedTickets/ResolvedTickets";

const CustomerTickets = ({ ticketPromise }) => {


    const fetchingTickets = use(ticketPromise)
    const [customerTickets, setCustomerTickets] = useState(fetchingTickets)
    const [progressTickets, setProgressTickets] = useState([])
    const [resolvedTickets, setResolvedTickets] = useState([])

    const handleTicketInProgress = (ticket) => {

        const progressExists = progressTickets.find(progressTicket => progressTicket.id === ticket.id)
        if (!progressExists) {
            setProgressTickets([...progressTickets, ticket])
            const updateCustomerTickets = customerTickets.map(customerTicket => {
                // const customerExists = customerTicket.id === ticket.id
                if (customerTicket.id === ticket.id) {
                    return { ...customerTicket, status: 'In-Progress' }
                }
                return customerTicket
            })
            setCustomerTickets(updateCustomerTickets)
        }
        else {
            toast("Your ticket already in progress")
            return
        }
    }

    const handleResolvedTicket = (ticket) => {
        console.log(ticket)
        setResolvedTickets([...resolvedTickets, ticket])
        const updateCustomerTickets = customerTickets.filter(customerTicket => customerTicket.id !== ticket.id)
        setCustomerTickets(updateCustomerTickets)
        const updateProgressTickets = progressTickets.filter(progressTicket => progressTicket.id !== ticket.id)
        setProgressTickets(updateProgressTickets)
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="bg-gray-100">
                <div className='max-w-[1300px] m-auto'>
                    <div className='grid grid-cols-2 gap-4'>
                        <Progress progress='In Progress' progressTickets={progressTickets}></Progress>
                        <Progress progress="Resolved" resolvedTickets={resolvedTickets}></Progress>
                    </div>
                    <div className='grid grid-cols-12 gap-4 mb-4'>
                        <div className='col-span-9'>
                            <h1 className='text-xl font-bold'>Customer Ticket: {customerTickets.length}</h1>
                            <div className="grid grid-cols-2 gap-3 mt-4">
                                {
                                    customerTickets.map(customerTicket => <CustomerTicket key={customerTicket.id} customerTicket={customerTicket} handleTicketInProgress={handleTicketInProgress}></CustomerTicket>)
                                }
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className="mb-4">
                                {
                                    <ProgressTickets progressTickets={progressTickets} handleResolvedTicket={handleResolvedTicket} resolvedTickets={resolvedTickets}></ProgressTickets>
                                }
                            </div>
                            <div className="">
                                {
                                    <ResolvedTickets resolvedTickets={resolvedTickets}></ResolvedTickets>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerTickets;
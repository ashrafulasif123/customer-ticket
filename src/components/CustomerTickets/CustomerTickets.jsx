import { use, useState } from "react";
import CustomerTicket from "../CustomerTicket/CustomerTicket";
import Navbar from '../Navbar/Navbar'
import Progress from '../Progress/Progress'
import ProgressTickets from "../ProgressTickets/ProgressTickets";
import { toast } from "react-toastify";

const CustomerTickets = ({ ticketPromise }) => {


    const fetchingTickets = use(ticketPromise)
    const [customerTickets, setCustomerTickets] = useState(fetchingTickets)
    const [progressTickets, setProgressTickets] = useState([])

    const handleTicketInProgress = (ticket) => {

        const exists = progressTickets.find(progressTicket => progressTicket.id === ticket.id)
        if (!exists) {
            setProgressTickets([...progressTickets, ticket])
            const updateCustomerTickets = customerTickets.map(customerTicket =>{
                if(!exists){
                    return {...customerTicket, status: 'In-Progress'}
                }
                return customerTicket
            })
            return
        }
        toast("This ticket already in Pending")
        return
    }

    return (
        <>
            <Navbar></Navbar>
            <div className='max-w-[1300px] m-auto'>

                <div className='grid grid-cols-2 gap-4'>
                    <Progress progress='In Progress'></Progress>
                    <Progress progress="Resolved"></Progress>
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
                        <h1 className='text-xl font-bold'>Task Status</h1>
                        <div className="">
                            {
                                <ProgressTickets progressTickets={progressTickets}></ProgressTickets>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerTickets;
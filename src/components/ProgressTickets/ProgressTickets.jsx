import ProgressTicket from "../ProgressTicket/ProgressTicket";

const ProgressTickets = ({ progressTickets, handleResolvedTicket, resolvedTickets }) => {
    // console.log(progressTickets)
    return (
        <div className="bg-white p-4 rounded-lg">
            <h1 className='text-xl font-bold'>Task Status</h1>
            
            {
                progressTickets.length > 0 
                ?
                progressTickets.map(progressTicket => <ProgressTicket key={progressTicket.id} progressTicket={progressTicket} handleResolvedTicket={handleResolvedTicket} resolvedTickets={resolvedTickets}></ProgressTicket>)
                :
                <>
                   <div className="mt-3">
                        <h3>There is no task in Progress</h3>
                    </div> 
                </>
            }
        </div>
    );
};

export default ProgressTickets;
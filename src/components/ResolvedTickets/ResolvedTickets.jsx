import ResolvedTicket from "../ResovedTicket/ResolvedTicket";

const ResolvedTickets = ({ resolvedTickets }) => {
    console.log(resolvedTickets)
    return (
        <div className="bg-white p-4 rounded-lg">
            <h1 className='text-xl font-bold'>Resolved Status</h1>
            {
                resolvedTickets.length > 0
                    ?
                    resolvedTickets.map(resolvedTicket => <ResolvedTicket key={resolvedTicket.id} resolvedTicket={resolvedTicket}></ResolvedTicket>)
                    :
                    <>
                        <div className="mt-3">
                            <h3>There is no task in Resolved</h3>
                        </div>
                    </>
            }
        </div>
    );
};

export default ResolvedTickets;
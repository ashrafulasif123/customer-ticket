import ProgressTicket from "../ProgressTicket/ProgressTicket";

const ProgressTickets = ({ progressTickets, handleResolvedTicket, resolvedTickets }) => {
    // console.log(progressTickets)
    return (
        <div>
            {
                progressTickets.map(progressTicket => <ProgressTicket key={progressTicket.id} progressTicket={progressTicket} handleResolvedTicket={handleResolvedTicket} resolvedTickets={resolvedTickets}></ProgressTicket>)
            }
        </div>
    );
};

export default ProgressTickets;
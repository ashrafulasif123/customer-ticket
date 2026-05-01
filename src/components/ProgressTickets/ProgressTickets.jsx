import ProgressTicket from "../ProgressTicket/ProgressTicket";

const ProgressTickets = ({progressTickets}) => {
    // console.log(progressTickets)
   return (
        <div>
            {
                progressTickets.map(progressTicket => <ProgressTicket key={progressTicket.id} progressTicket={progressTicket}></ProgressTicket>)
            }
        </div>
    );
};

export default ProgressTickets;
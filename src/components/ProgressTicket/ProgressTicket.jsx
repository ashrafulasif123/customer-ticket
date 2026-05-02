const ProgressTicket = ({ progressTicket, handleResolvedTicket, resolvedTickets }) => {
    const { id, title } = progressTicket
    const isResolved = resolvedTickets.find(resolvedTicket => resolvedTicket.id === id)
    return (
        <div class="bg-white p-6 rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-gray-400 w-[350px] my-4">
            <h2 class="text-lg font-semibold text-gray-900 mb-5">
                {title}
            </h2>
            <button disabled={isResolved} onClick={() => handleResolvedTicket(progressTicket)} class="w-full bg-[#10a37f] text-white font-medium py-3 rounded-lg hover:bg-[#0e8c6c] transition-colors">
                Complete
            </button>
        </div>
    );
};

export default ProgressTicket;
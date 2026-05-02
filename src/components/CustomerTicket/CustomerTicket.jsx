const CustomerTicket = ({ customerTicket, handleTicketInProgress }) => {
    // console.log(customerTicket)
    const { id, customerName, description, createdDate, priority, status, title } = customerTicket
    return (
        <div onClick={() => handleTicketInProgress(customerTicket)} className="max-w-xl p-5 bg-white border border-gray-400 rounded-lg shadow-sm font-sans hover:cursor-pointer">
            <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-bold text-slate-800">{title}</h3>
                <div class="flex items-center gap-2 bg-yellow-100 px-3 py-1.5 rounded-full">
                    <span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span class="text-yellow-800 text-sm font-medium">{status}</span>
                </div>
            </div>

            <p class="text-slate-500 text-base leading-relaxed mb-6">
                {description}
            </p>

            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <div class="flex items-center gap-4">
                    <span class="text-slate-500 font-medium">{id}</span>
                    <span class="text-amber-500 font-bold text-sm tracking-wide">{priority}</span>
                </div>

                <div class="flex items-center gap-6">
                    <span class="text-slate-500 font-medium">{customerName}</span>
                    <div class="flex items-center gap-2 text-slate-500">

                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
                        </svg>
                        <span class="font-medium">{createdDate}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerTicket;
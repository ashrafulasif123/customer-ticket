import { FaCheck } from "react-icons/fa";

const ResolvedTicket = ({resolvedTicket}) => {
    const {title} = resolvedTicket
    return (
        <div class="bg-green-100 p-2 rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] my-4">
            <h2 class="text-lg font-semibold text-gray-900 mb-5">
                {title}
            </h2>
            <span><FaCheck className="inline-block text-green-600"/>Completed</span>
        </div>
    );
};

export default ResolvedTicket;
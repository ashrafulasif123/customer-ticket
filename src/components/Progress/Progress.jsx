import bgImage from '../../assets/hero.png'

/* const Progress = ({ progress }) => {
    let gradient;
    if(progress === 'In Progress'){
        gradient = 'bg-[linear-gradient(to_bottom_right,rgba(99,46,227,1),rgba(159,98,242,1))]';
    }
    else{
        gradient = 'bg-[linear-gradient(to_bottom_right,rgba(84,207,104,1),rgba(0,130,122,10))]'
    }

    return (
        <div className={`h-[200px] border flex justify-center items-center ${gradient} bg-cover bg-center`}>
            <div className="text-center flex flex-col space-y-2">
                <h2 className="text-2xl text-white">{progress}</h2>
                <span className="text-3xl text-white">0</span>
            </div>
        </div>
    );
};
 */


const Progress = ({ progress, progressTickets, resolvedTickets }) => {
    // console.log(progressTickets.length)
    let total;
    let gradient;
    if (progress === 'In Progress') {
        gradient = `linear-gradient(to bottom right, rgba(99,46,227,0.9), rgba(159,98,242,0.9)), url('${bgImage}')`;
        total = progressTickets.length
    }
    else {
        gradient = `linear-gradient(to bottom right, rgba(84,207,104,0.9), rgba(0,130,122,0.9)), url('${bgImage}')`;
        total = resolvedTickets.length
    }

    return (
        <div
            style={{
                backgroundImage: gradient
            }}
            className='h-[200px] border flex justify-center items-center ${gradient} bg-cover bg-center my-10'>
            <div className="text-center flex flex-col space-y-2">
                <h2 className="text-2xl text-white">{progress}</h2>
                <span className="text-3xl text-white">{total}</span>
            </div>
        </div>
    );
};

export default Progress;
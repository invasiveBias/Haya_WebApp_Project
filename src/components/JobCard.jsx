import PropType from "prop-types"

const JobCard = ({ title = '', rating = '', skillCount = '' }) => {
    return (
        <div className="bg-white text-black text-left p-2 rounded-xl">
            <b className="text-[1.2rem]">{title}</b>
            <div className="flex justify-between items-center text-sm">
                <span>{rating}/5</span>
                <span>{skillCount} skills</span>
            </div>
        </div>
    );
}

JobCard.propTypes = {
    title: PropType.string,
    rating: PropType.string,
    skillCount: PropType.string,
}

export default JobCard;
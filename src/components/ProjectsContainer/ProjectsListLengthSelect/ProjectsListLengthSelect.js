function ProjectsListLengthSelect(props) {
    const { numToDisplayOptions, handleSelectChange } = props;

    return (
        <div className='filter-results text-center mb-15'>
            <span>displaying </span>
            <select onChange={handleSelectChange}>
                {numToDisplayOptions.map(option => {
                    return <option key={option} value={option}>{option}</option>;
                })}
            </select>
            <span> projects per page</span>
        </div>
    );
}

export default ProjectsListLengthSelect;
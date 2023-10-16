import "./PaginationControls.css";

function PaginationControls(props) {
    const { handlePageTraversal, currentPage, totalPages } = props;

    return (
        <>
            <div className='pagination-console mb-5'>
                <button className={"pagination-btn secondary-btn" + (currentPage === 1? " disabled": "")} value="first" onClick={handlePageTraversal}>First</button>
                <button className={"pagination-btn secondary-btn" + (currentPage === 1? " disabled": "")} value="back" onClick={handlePageTraversal}>Back</button>
                <button className={"pagination-btn secondary-btn" + (currentPage === totalPages? " disabled": "")} value="next" onClick={handlePageTraversal}>Next</button>
                <button className={"pagination-btn secondary-btn" + (currentPage === totalPages? " disabled": "")} value="last" onClick={handlePageTraversal}>Last</button>
            </div>
            <p className='filter-results text-center mt-0 mb-25'>Page {currentPage} of {totalPages}</p>
        </>
    );
}

export default PaginationControls;
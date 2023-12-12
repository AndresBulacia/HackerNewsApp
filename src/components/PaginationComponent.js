import React from 'react'

const PaginationComponent = ({currentPage, totalPages, onPageChange}) => {
    const visiblePages = 9;
    let startPage = 1;
    let endPage = totalPages > visiblePages ? visiblePages : totalPages;

    if (totalPages > visiblePages) {
        if(currentPage > Math.floor(visiblePages / 2)) {
            startPage = currentPage - Math.floor(visiblePages / 2);
            endPage = currentPage + Math.floor(visiblePages / 2);

            if(endPage > totalPages) {
                endPage = totalPages;
                startPage = totalPages - visiblePages +1;
            }
        }
    }

    return(
        <div className='pagination'>
            <button
            disabled = {currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            >
                {'<'}
            </button>
            {startPage !== 1 && (
                <button onClick={() => onPageChange(startPage - 1)}>{'...'}</button>
            )}
            {Array.from({length: endPage - startPage + 1}, (_, index) => startPage + index).map((page) =>(
                <button
                key={page}
                className={currentPage === page ? 'active' : ''}
                onClick={() => onPageChange(page)}>
                {page}    
                </button>
            ))}
            {endPage !== totalPages && (
                <button onClick={() => onPageChange(endPage + 1)}>{'...'}</button>
            )}
            <button
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            >
                {'>'}
            </button>
        </div>
    )
}

export default PaginationComponent;
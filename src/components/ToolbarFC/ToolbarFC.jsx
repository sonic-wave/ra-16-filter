import './ToolbarFC.css'

export const ToolbarFC = ({ filters, selected, onSelectFilter }) => {
    return (
        <>
            {filters.map(filter => (
                <button
                    key={filter}
                    className={filter === selected ? 'active' : ''}
                    onClick={() => onSelectFilter(filter)}
                >
                    {filter}
                </button>
            ))}
        </>
    )
}

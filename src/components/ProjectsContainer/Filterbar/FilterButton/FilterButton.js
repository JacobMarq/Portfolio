function FilterButton(props) {
    const { pgLanguage, buttonClass, click } = props;

    return (
        <button id={pgLanguage.identifier} className={buttonClass} onClick={click}>
            <img src={pgLanguage.image} alt={pgLanguage.identifier + " logo"} />
            <span className="pglanguage-label">{pgLanguage.identifier}</span>
        </button>
    );
}

export default FilterButton;
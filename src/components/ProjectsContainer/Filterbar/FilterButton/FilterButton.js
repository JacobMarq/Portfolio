function FilterButton(props) {
    const { pgLanguage, buttonClass, click } = props;

    return (
        <button id={pgLanguage.identifier} className={buttonClass} onClick={click}>
        <img src={pgLanguage.image} alt={pgLanguage.identifier + " logo"} />
        {pgLanguage.identifier}
        </button>
    );
}

export default FilterButton;
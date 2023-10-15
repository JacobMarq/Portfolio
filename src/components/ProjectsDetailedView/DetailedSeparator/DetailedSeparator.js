import './DetailedSeparator.css';

function DetailedSeparator(props) {
    const { index, length } = props;
    const orbClassName = "orb";
    const topOrbClassName = orbClassName + " " + (index === 1 || length < 3 ? "mt-5p":"mt-10p");
    const bottomOrbClassName = orbClassName + " " + (!(length < 3) || index === 1 || index !== (length - 1) ? "mb-10p":"mb-5p");

    if (index === 0) {
        return <></>;
    }

    return (
        <>
            <span className={topOrbClassName}/>
            <span className={orbClassName}/>
            <span className={bottomOrbClassName}/>
        </>
    );
}

export default DetailedSeparator;
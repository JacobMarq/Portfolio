import './DetailedSection.css';

function DetailedSection(props) {
    const { index, length, section } = props;
    const rowClassName = "detailed-row " + (index === (length - 1) ? "mt-5p mb-10p":(index <= 1 ? "mt-5p mb-5p":"mt-10p mb-10p"));

    if (index === 0) {
        return (
            <>
                <div className={rowClassName}>
                    <div className="d-flex flex-column detailed-p">
                        <h2>What is {section.header}?</h2>
                        <p className="color-white detailed-desc">{section.paragraph}</p>
                    </div>
                    <img className="desc-img" src={section.image} alt='description'/>
                </div>            
            </>
        );
    } 
    else if (index === 1) {
        return (
            <>
                <div className={rowClassName}>
                    <img className="body-img1" src={section.image} alt={"section " + index}/>
                    <div className="d-flex flex-column detailed-p">
                        <h2>{section.header}</h2>
                        <p className="color-white detailed-desc">{section.paragraph}</p>
                    </div>
                </div>              
            </>
        );
    } 
    else {
        if (index % 2 === 0) {
            return (
                <>
                    <div className={rowClassName}>
                        <div className="d-flex flex-column detailed-p">
                            <h2>{section.header}</h2>
                            <p className="color-white detailed-desc">{section.paragraph}</p>
                        </div>
                        <img className="body-img2" src={section.image} alt={"section " + index}/>
                    </div>
                </>
            );

        }
        return (
            <>
                <div className={rowClassName}>
                    <img className="body-img1" src={section.image} alt={"section " + index}/>
                    <div className="d-flex flex-column detailed-p">
                        <h2>{section.header}</h2>
                        <p className="color-white detailed-desc">{section.paragraph}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default DetailedSection;
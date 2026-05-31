import './DetailedSection.css';

function DetailedSection(props) {
    const { index, length, section } = props;
    const pClassName = "detailed-desc " + (section.image.type === "" ? "ml-0 maxw-delimit" : "");
    const rowClassName = "detailed-row " + (section.image.type === "" ? "mt-0p mb-5p" : (index === (length - 1) ? "mt-5p mb-10p" : (index <= 1 ? "mt-5p mb-5p" : "mt-10p mb-5p")));
    const imgClassName = (section.image.type === "" ? "" : (section.image.type === "M" ? "detailed-mobile-img" : (section.image.type === "P" ? "detailed-portrait-img" : (section.image.type === "L" ? "detailed-landscape-img" : "detailed-square-img"))));
    const Diagram = section.diagrams && section.diagrams.length != 0 ? section.diagrams[0] : ""; 

    return (
        <div>
            <div className="detailed-row mt-10 mb-10">
                <div className="d-flex flex-column detailed-p">
                    <h2 className='mb-0'>{section.header}</h2>
                    <p className={pClassName}>{section.paragraph}</p>
                </div>
                {(section.image.type === "" ? (Diagram !== ""? <Diagram/> : <></>) : <img className={imgClassName} src={section.image.src} alt='description'/>)}

            </div>
            {!section.subsections ? <></> : <>
                {section.subsections.map((subsection, subsectionIndex) => {
                    return (
                        <DetailedSection key={subsection.header} index={subsectionIndex} length={1} section={subsection}/>
                    );
                })}
            </>}
        </div>
    );

    // if (index === 0) {
    //     return (
    //         <>
    //             <div className={rowClassName}>
    //                 <div className="d-flex flex-column detailed-p">
    //                     <h2>{section.header}</h2>
    //                     <p className={pClassName}>{section.paragraph}</p>
    //                 </div>
    //                 {(section.image.type === "" ? <div/> : <img className={imgClassName} src={section.image.src} alt='description'/>)}
    //             </div>            
    //         </>
    //     );
    // } 
    // else if (index === 1) {
    //     return (
    //         <>
    //             <div className={rowClassName}>
    //                 {(section.image.type  === "" ? <div/> : <img className={imgClassName} src={section.image.src} alt={"section " + index}/>)}
    //                 <div className="d-flex flex-column detailed-p">
    //                     <h2>{section.header}</h2>
    //                     <p className={pClassName}>{section.paragraph}</p>
    //                 </div>
    //             </div>              
    //         </>
    //     );
    // } 
    // else {
    //     if (index % 2 === 0) {
    //         return (
    //             <>
    //                 <div className={rowClassName}>
    //                     <div className="d-flex flex-column detailed-p">
    //                         <h2>{section.header}</h2>
    //                         <p className={pClassName}>{section.paragraph}</p>
    //                     </div>
    //                     {(section.image.type  === "" ? <div/> : <img className={imgClassName} src={section.image.src} alt={"section " + index}/>)}
    //                 </div>
    //             </>
    //         );

    //     }
    //     return (
    //         <>
    //             <div className={rowClassName}>
    //                 {(section.image.type  === "" ? <div/> : <img className={imgClassName} src={section.image.src} alt={"section " + index}/>)}
    //                 <div className="d-flex flex-column detailed-p">
    //                     <h2>{section.header}</h2>
    //                     <p className={pClassName}>{section.paragraph}</p>
    //                 </div>
    //             </div>
    //         </>
    //     );
    // }
}

export default DetailedSection;
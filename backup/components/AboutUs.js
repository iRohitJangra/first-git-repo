import React from 'react'

export default function AboutUs(props) {

    // const [myStyle, newStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [buttonStyle, newButtonStyle] = useState({
    //     borderRadius: '50%',
    //     backgroundColor: 'white'
    // })
    // const [isChecked, setIsChecked] = useState(false);
    // const [btnText, newBtnText] = useState('Enable Dark Mode');

    // const handleCheckboxChange = (event) => {
    //     if (myStyle.color === 'black') {
    //         newStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setIsChecked(event.target.checked);
    //         newButtonStyle({
    //             backgroundColor: 'black'
    //         })
    //         newBtnText('Disable Dark Mode')
    //     } else {
    //         newStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setIsChecked(event.target.unChecked);
    //         newButtonStyle({
    //             backgroundColor: 'white'
    //         })
    //         newBtnText('Enable Dark Mode')
    //     }
    // };
    // let right = {
    //     float: 'right'
    // }

    return (
        <div className="container" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} >
            {/* <div className="form-check form-switch" style={right}>
                <input className="form-check-input" style={buttonStyle} type="checkbox" onClick={handleCheckboxChange} role="switch" id="flexSwitchCheckDefault" checked={isChecked} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btnText}</label>
            </div> */}
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} >
                    <h2 className="accordion-header" >
                        <button className="accordion-button" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }}   type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne"  className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code> </code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} >
                    <h2 className="accordion-header" >
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }}   type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo"   className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code> </code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }}   type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree"   className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code> </code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

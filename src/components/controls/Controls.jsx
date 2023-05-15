/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/prop-types
export default function Controls({editing, handleClick}){
    let btn = "Edit"
    if (editing) {
        btn = "Save";
    } else {
        btn = "Edit"
    }

    function handlePrint() {
        const controls = document.getElementById("control-menu");
        controls.classList.add("printing")
        window.print();
        controls.classList.remove("printing")
    }
    return (
        <div className="buttons">
            <button onClick={handleClick}>{btn}</button>
            <button onClick={handlePrint}>Print</button>
            <div className="instructions">
                <p>Input your details and once ready click on "Save".</p>
                <p>To make any updates click on "Edit".</p>
                <p>Once ready, you can print your CV by clicking on "Print".</p>
            </div>
        </div>
    )
}
import "./Subheaderstyles.css";

function Subheader(text){

    return (

        <div className = "Ideas">
            <div>
                <h3><br/></h3>
                <h3>
                    {text.big}
                </h3>
                <h4>
                    {text.small}
                </h4>
                <h3><br/></h3>
            </div>
        </div>

    );

} export default Subheader;
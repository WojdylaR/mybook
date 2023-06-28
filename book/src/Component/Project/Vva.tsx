import VvaStyle from "../../Style/Project/VvaStyle";

function Vva() {
    return (
        <VvaStyle id="vva">
            <div id="container">
                <h1>Va Voir Ailleurs</h1>
                <iframe id='frame' src='https://www.vavoirailleurs.org' />
            </div>
        </VvaStyle>
    )
}

export default Vva
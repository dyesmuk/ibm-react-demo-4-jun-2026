
const Child = (props) => {

    const childData: string = 'Monu';
    const dataFromParent: string = props.abc;

    const sendData = () => {
        console.log(childData);
        props.def(childData);
    };

    return (<>
        <h1>Child Component </h1>
        <p>Parent data in child: {dataFromParent}</p>
        <p>Child data in child: {childData}</p>
        <button onClick={sendData}>Send data to parent</button>
    </>);
};

export default Child;



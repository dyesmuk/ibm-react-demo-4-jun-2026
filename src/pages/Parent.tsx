
import { useState } from "react";
import Child from "./Child";

const Parent = () => {

    const parentData: string = 'Sonu';
    const [dataFromChild, setDataFromChild] = useState('');

    const getData = (data: string) => {
        console.log(data);
        setDataFromChild(data);
    };

    return (<>
        <h1>Parent Component </h1>
        <p>Parent data in parent: {parentData}</p>
        <p>Child data in parent: {dataFromChild}</p>
        <Child def={getData} abc={parentData} />
    </>);
};

export default Parent;




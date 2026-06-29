import Child from "./Child";

const Parent = () => {

    const parentData = 'Sonu';

    return (<>
        <h1>Parent Component </h1>
        <p>Parent data: {parentData}</p>
        <Child />
    </>);
};

export default Parent;



const Home = () => {

    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
    ];
    console.log(products);

    const listItems = products.map(product =>
        <li key={product.id}>
            {product.title}
        </li>
    );
    return (
        <>
            <h1>Home Component</h1>
            <p>This is home component.</p>
            {/* <>{products} </> */}
            <> {listItems} </>
        </>
    );
};
export default Home;

// import Login from "./Login";
// import Register from "./Register";

// const Home = () => {

//     const salary: number = 10.25;
//     const isLoggedIn = false;
//     return (
//         <>
//             <h1>Home Component</h1>
//             <p>This is home component.</p>
//             <p>My salary is ₹{salary}/-</p>
//             <> {isLoggedIn && <Login />}
//             </>
//             <> {!isLoggedIn && <Register />}
//             </>
//         </>
//     );
// };
// export default Home;

// import Login from "./Login";
// import Register from "./Register";

// const Home = () => {

//     const salary: number = 10.25;
//     const isLoggedIn = true;
//     let content: any;

//     if (isLoggedIn)
//         content = <Login />;
//     else
//         content = <Register />

//     return (
//         <>
//             <h1>Home Component</h1>
//             <p>This is home component.</p>
//             <p>My salary is ₹{salary}/-</p>
//             <>
//                 {content}
//             </>
//         </>
//     );
// };
// export default Home;



// // const Home = () => {

// //     const salary: number = 10.25;
// //     const getData = (data: number) => data * 2;

// //     return (
// //         <>
// //             <h1>Home Component (Child)</h1>
// //             <p>This is home component.</p>
// //             <p>My salary is ₹{salary}/-</p>
// //             <p> {10 + 2} </p>
// //             <p> {getData(10)} </p>
// //         </>
// //     );
// // };
// // export default Home;


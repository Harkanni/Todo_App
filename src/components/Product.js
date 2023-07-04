export default function Product () {
    const products = ["Laptop", "IPhone", "Modem", "Computer"]
    const productList = products.map((product) => (<h3>{product}</h3>
    ))
    return (<div> {productList} </div>)
}
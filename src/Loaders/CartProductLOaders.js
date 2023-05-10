import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader =async () =>{
    const lodedProducts = await fetch('products.json');
    const products = await lodedProducts.json();

    // if cart data is in dataBase you have to use async await

    const storedCart = getShoppingCart();
    const savedCart = [];
    for(const id in storedCart ){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id]
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    // console.log(products);
    /* 
    if you need to send tow things
    return [products , savedCart]
    another Option
    {products , savedCart}
    */
    return savedCart;
}

export default cartProductsLoader;
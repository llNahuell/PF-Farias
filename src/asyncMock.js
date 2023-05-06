const products=[
    {id: 1,name: "Teclado ",price: 9897,img: ":3",stock: 8}, 
    {id: 2,name: "mousepad",price: 3113,img: ":3",stock: 2}, 
    {id: 3,name: "teclado",price: 6896,img: ":3",stock: 8}, 
    {id: 4,name: "placa de video",price: 7445,img: ":3",stock: 4}, 
    {id: 5,name: "placa de video",price: 8255,img: ":3",stock: 4}, 
    {id: 6,name: "teclado",price: 8249,img: ":3",stock: 6}, 
    {id: 7,name: "placa de video",price: 6490,img: ":3",stock: 4}, 
    {id: 8,name: "keycaps",price: 6885,img: ":3",stock: 4}, 
    {id: 9,name: "camara",price: 3978,img: ":3",stock: 9}, 
    {id: 10,name: "mousepad",price: 4016,img: ":3",stock: 10}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}
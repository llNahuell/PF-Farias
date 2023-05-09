const products=[
    {id: '1',name: "Teclado ",description:'teclado 100% con rgb',price: 9897,category: 'teclados',img:'../img/teclado_1.png' ,stock: 10}, 
    {id: '2',name: "mousepad",description:'mousepad logi 36x25 cm',price: 3113,category: 'accesorios',img: "../img/mousepad_1.png",stock: 10}, 
    {id: '3',name: "teclado",description:'teclado 100% con rgb',price: 6896,category: 'teclados',img: "../img/teclado_2.png",stock: 10}, 
    {id: '4',name: "placa de video",description:'placa de video msi geforce GTX 1050Ti',price: 7445,category: 'placasDeVideo',img: "../img/video_1.png",stock: 10}, 
    {id: '5',name: "placa de video",description:'placa de video AMD radeon RX 6800',price: 8255,category: 'placasDeVideo',img: "../img/video_2.png",stock: 10}, 
    {id: '6',name: "teclado",description:'teclado 100% con rgb',price: 8249,category: 'teclados',img: "../img/teclado_3.png",stock: 10}, 
    {id: '7',name: "placa de video",description:'placa de video GEFORCE RTX 3050',price: 6490,category: 'placasDeVideo',img: "../img/video_3.png",stock: 10}, 
    {id: '8',name: "keycaps",description:'key caps verdes con puller incluido',price: 6885,category: 'accesorios',img: "../img/key_caps.png",stock: 10}, 
    {id: '9',name: "camara",description:'camara logi 1080p',price: 3978,category: 'accesorios',img: "../img/cam.png",stock: 10}, 
    {id: '10',name: "mousepad",description:'mousepad XXL gxt con rgb',price: 4016,category: 'accesorios',img: "../img/mousepad_2.png",stock: 10}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}

import axios from 'axios'

export function allProducts(){
    return {
        type: "ALL_PRODUCTS",
        payload: axios.get('http:192.168.0.7:3333/products')
    }
}
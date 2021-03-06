import instance from "./instance";

export const add = (product:any) => {
    return instance.post("/products",product);
}
export const removeItem = (id:any) => {
    return instance.delete(`/products/${id}`);
}
export const detailItem = (id:any) => {
    return instance.get(`/products/${id}`);
}

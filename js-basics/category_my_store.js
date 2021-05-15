

sort_tovar_from_category({name: 'Shtany', price: 1000, size: 'L'})
sort_tovar_from_category({name: 'Shtany', price: 1000, size: 'XL'})

sort_tovar_from_category({name: 'Shtany', price: 1000, size: 'M', category: 'mans'})
sort_tovar_from_category({name: 'Shtany', price: 1000, size: 'S', category: 'mans'})
sort_tovar_from_category({name: 'Dress', price: 1500, size: 'S', category: 'women'})
sort_tovar_from_category({name: 'Dress', price: 1500, size: 'M', category: 'women'})
sort_tovar_from_category({name: 'Dress', price: 1500, size: 'L', category: 'women'})

const womenGoods = get_tovar('women')
console.log(womenGoods)




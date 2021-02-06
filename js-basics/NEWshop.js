const sshop = require ('./NEWshopEX.js')



sshop.addStoreItem({size: "XL", price: 1000, name: "Dress" }),
sshop.addStoreItem({size: "ML", price: 1000, name: "T-Short" }),
sshop.addStoreItem({size: "L", price: 1000, name: "T-Short" }),
sshop.addStoreItem({size: "XL", price: 1000, name: "T-Short" })

console.log(sshop.findItems({size:"XL", price:1000}))
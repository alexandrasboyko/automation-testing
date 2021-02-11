const sshop = require ('./NEWshopEX.js')



sshop.addStoreItem({size: "XL", price: 1000, name: "Dress" }),
sshop.addStoreItem({size: "ML", price: 1000, name: "T-Short" }),
sshop.addStoreItem({size: "L", price: 1000, name: "T-Short" }),
sshop.addStoreItem({size: "XL", price: 1000, name: "Sweater" })

console.log(sshop.findItem({size:"L", name:"T-Short"}))
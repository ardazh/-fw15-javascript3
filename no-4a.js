const cekBarang = (stock) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataStock = ['Pensil', 'Buku', 'Penggaris', 'Penghapus','Crayon', 'Pulpen']
            let cek = dataStock.find((item) => {
                return item == stock
            })
            if (cek){
                resolve(cek)
            }else {
                reject(new Error('Stock Habis'))
            }
        }, 3000)
    })
}

cekBarang('Pensil').then((result) => {
    console.log(`Stock ${result} Ada`)
}).catch((error) => {
    console.log(error.message)
})
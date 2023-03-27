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

async function getBarang() {
    try {
      // "await" will wait for the promise to resolve or reject
      // if it rejects, an error will be thrown, which you can
      // catch with a regular try/catch block
      const someValue = await cekBarang('Buku');
      console.log(someValue);
    } catch (error) {
      console.log(error.message);
    }
  }
  getBarang();
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']
            let cek = dataDay.find((item) => {
                return item == day
            })
            if (cek){
                resolve(cek)
            }else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

cekHariKerja('Sabtu').then((result) => {
    console.log(`Hari ${result} hari kerja`)
}).catch((error) => {
    console.log(error.message)
})
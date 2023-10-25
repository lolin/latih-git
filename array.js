const hari = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu']
hari.forEach(function (item) {
    console.log(`foreach data :`, item)
});
console.log('nama hari :', hari)
hari.pop('minggu')
console.log('\n hapus minggu :', hari)
hari.shift('senin')
console.log('\n hapus senin :', hari)
hari.push('minggu')
console.log('\ttambah hari minggu :', hari)
hari.unshift('senin')
console.log('\n tambah hari senin :', hari)
console.log(hari.length)
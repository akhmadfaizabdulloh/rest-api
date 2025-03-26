// $.getJSON('data/pizza.json', function (data) {
//     console.log(data);
// });

// $.getJSON() sebenarnya untuk menyingkat $.ajax (lengkapnya sebenarnya)
// cuman khusus JSON boleh pakai $.getJSON()

function tampilkanSemuaMenu() {
    $.getJSON('data/pizza.json', function (data) {
        // console.log(data);
        let menu = data.menu;
        // console.log(menu);
    
        $.each(menu, function(i, data) {
            // console.log(i);
            // console.log(data);
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3 "><img src="img/menu/' + data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama +'</h5><p class="card-text">' + data.deskripsi +'</p><h5 class="card-title">Rp. ' + data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
        })
    });
}
// jalankan fungsinya dulu
tampilkanSemuaMenu();


$('.nav-link').on('click', function (){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    // console.log(kategori);
    $('h1').html(kategori);  //karena kita hanya punya 1 <h1>

    if (kategori == 'All Menu') {
        tampilkanSemuaMenu();
        return;
        // kita return (tanpa true/false) supaya keluar dari fungsi-nya
        // supaya kode di bawah ini tidak dijalankan
    }

    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function(i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3 "><img src="img/menu/' + data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama +'</h5><p class="card-text">' + data.deskripsi +'</p><h5 class="card-title">Rp. ' + data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
            }
        });

        // html = timpa apapun isinya #daftar-menu dengan (content)
        $('#daftar-menu').html(content)
    });
});
// Button Reload Data
var rld = $('.r-data');
// Datanya
var tdata = $('.t-data');
// Jumlah Data
var jdata = $('.j-data');
// mencari nis
var mnis = $('[name="mnis"]');
// Ajax Mengambil Data
var url = window.location.href;
// form nya
var fwajib = $('form.fwajib');
// alert
var alertnya = $('.alert');
var alert_sukses = $('.p-sukses');
var alert_gagal = $('.p-gagal');
var pesan = $('.pesan');
// Untuk Mengambil datanya,
var simpan_btn = $('.btn-simpan');
var mengambilData = () => {
    var ls = '<tr>' + '<td colspan="5" class="text-center">Tunggu Sebentar</td>' + '</tr>';
    jdata.text('Tunggu.');
    tdata.html(ls);
    $.ajax({
        url: url + 'method.php',
        data: {
            mengambil_nis: true,
            mnis: mnis.val(),
        },
        type: "GET",
        dataType: "JSON",
        success: (e) => {
            ls = '';
            if (e.status == 'ok') {
                var l = 1;
                for (var i = 0; i < e.data.length; i++) {
                    ls += '<tr>' + '<td>' + (l++) + '</td>' + '<td>' + (e.data[i].nis) + '</td>' + '<td>' + (e.data[i].nama_siswa) + '</td>' + '<td>' + (e.data[i].ttl) + '</td>' + '<td>' + (e.data[i].jurusan) + '</td>' + '</tr>';
                }
            } else {
                ls = '<tr>' + '<td colspan="5" class="text-center">Belum Ada data</td>' + '</tr>';
            }
            jdata.text(e.jumlah_data);
            tdata.html(ls);
        }
    })
}
$(() => {
    mengambilData();
    mnis.on('keyup', (e) => {
        mengambilData();
    });
    rld.on('click', (e) => {
        mengambilData();
    });
    fwajib.submit((e) => {
        return false;
    });
    alertnya.hide();
    simpan_btn.on('click', (e) => {
        if ($('[name="niswe"]').val() == '') {
            $('[name="niswe"]').focus();
            alert('Nis Harus diisi');
        } else if ($('[name="nama_siswa"]').val() == '') {
            $('[name="nama_siswa"]').focus();
            alert('Nama Siswa Harus diisi');
        } else if ($('[name="ttl"]').val() == '') {
            $('[name="ttl"]').focus();
            alert('Ttl Harus diisi');
        } else if ($('[name="jurusan"]').val() == '') {
            $('[name="jurusan"]').focus();
            alert('Jurusan Harus diisi');
        } else {
            menyimpan();
        }
    });
});
var menyimpan = () => {
    alert_gagal.slideDown('slow');
    pesan.text('Tunggu sebentar..');
    setTimeout(() => {
        if (alertnya.slideUp('slow')) {
            menyimpan_asli();
        }
    }, 3000);
}
var menyimpan_asli = () => {
    $.ajax({
        url: url + 'method.php?menyimpan_nis=true',
        data: fwajib.serialize(),
        dataType: "JSON",
        type: "POST",
        success: (e) => {
            if (e.status == 'berhasil') {
                alert_sukses.slideDown('slow');
                pesan.text(e.pesan);
            } else {
                alert_gagal.slideDown('slow');
                pesan.text(e.pesan);
            }
            setTimeout(() => {
                alertnya.slideUp('slow');
            }, 5000);
            mengambilData();
        }
    });
}
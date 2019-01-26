<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Revisi</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	</head>
	<body class="container">
		<div class="row">
			<div class="col-lg-12">
				<h3 class="text-center">Aplikasi Duka</h3>
				<br>
				<div class="alert alert-success p-sukses" style="display: none;">
					<div class="pesan"></div>
				</div>
				<div class="alert alert-danger p-gagal" style="display: none;">
					<div class="pesan"></div>
				</div>
				<ul class="nav nav-tabs">
					<li class="active"><a data-toggle="tab" href="#home">List</a></li>
					<li><a data-toggle="tab" href="#menu1">Tambah</a></li>
					<li><a href="javascript:void(0)" class="r-data">Reload</a></li>
				</ul>
				<div class="tab-content">
					<div id="home" class="tab-pane fade in active">
						<br>
						<div class="form-group">
							<input type="text" name="mnis" class="form-control" placeholder="Cari Disini">
						</div>
						<br>
						<div class="table-responsive">
							<table class="table" cellpadding="0" style="width: 100%">
								<thead>
									<tr>
										<th width="10">No</th>
										<th width="20">Nis</th>
										<th width="20">Nama</th>
										<th width="30">Ttl</th>
										<th width="20">Jurusan</th>
										<!-- <th width="5">Aksi</th> -->
									</tr>
								</thead>
							<tbody class="t-data"></tbody>
							<tfoot>
							<tr>
								<th colspan="4" class="text-right">Jumlah:</th>
								<th class="j-data text-right"></th>
							</tr>
							</tfoot>
						</table>
					</div>
				</div>
				<div id="menu1" class="tab-pane fade">
					<h3>Tambah Siswa</h3>
					<form class="fwajib">
						<div class="row">
							<div class="col-lg-6">
								<div class="form-group">
									<label>Nis</label>
									<input type="text" class="form-control" name="niswe" value="" placeholder="Masukan Nis">
								</div>
							</div>
							<div class="col-lg-6">
								<div class="form-group">
									<label>Nama</label>
									<input type="text" class="form-control" name="nama_siswa" value="" placeholder="Masukan Nama">
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-lg-6">
								<div class="form-group">
									<label>Ttl</label>
									<input type="text" class="form-control" name="ttl" value="" placeholder="Masukan Tempat, Tanggal Lahir (t,dd-mm-yyyy)">
								</div>
							</div>
							<div class="col-lg-6">
								<div class="form-group">
									<label>Jurusan</label>
									<select name="jurusan" class="form-control">
										<option value="">Pilih Jurusan</option>
										<option value="RPL">RPL</option>
										<option value="TKJ">TKJ</option>
									</select>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-3 col-xs-12">
								<button  class="btn btn-success btn-block btn-simpan">Simpan</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</body>
<script src="./assets/penting.js"></script>
</html>
<?php  
include './config/Koneksi.php';

$data = new koneksi();
$method_get = $_GET;
if (@$method_get['mengambil_nis']) {
	$sql = 'SELECT * FROM siswa ';
	if (@$method_get['mnis'] != null) {
		$sql .= 'WHERE nama_siswa LIKE '."'%".@$method_get['mnis']."%'";
		$sql .= " OR nis LIKE "."'%".@$method_get['mnis']."%'";	
		$sql .= " OR ttl LIKE "."'%".@$method_get['mnis']."%'";	
		$sql .= " OR jurusan LIKE "."'%".@$method_get['mnis']."%'";	
	}
	$waw = $data->manual($sql);
	$json = array();
	if ($waw->num_rows == true) {
		$status = 'ok';
			while ($row = $waw->fetch_array()){
			$r = array();
			$r['nama_siswa'] = $row['nama_siswa'];
			$r['nis'] = $row['nis'];
			$r['ttl'] = $row['ttl'];
			$r['jurusan'] = $row['jurusan'];
			$json[] = $r;
		}
	}else{
		$status = 'gagal';
	}

	echo json_encode(array(
		'jumlah_data'=>$waw->num_rows,
		'status'=>$status,
		'data'=>$json,
	));
}

if (@$method_get['menyimpan_nis'] != null) {
	$niswe = $_POST['niswe'];
	$sql = 'SELECT * from siswa where nis = '."'".$niswe."'";
	$cek = $data->manual($sql);
	if ($cek->num_rows == true) {
		$status = 'gagal';
		$pesan = 'Nis Sudah digunakan.';
	}else{
		$method_post = $_POST;
		$sql = 'INSERT INTO siswa ';
		$sql .= '(nis,nama_siswa,ttl,jurusan)';
		$sql .= 'VALUES ('."'".$method_post['niswe']."'".","."'".$method_post['nama_siswa']."'".","."'".$method_post['ttl']."'".","."'".$method_post['jurusan']."'".')';
		$data->manual($sql);
		$status = 'berhasil';
		$pesan = 'Berhasil Menambah data siswa';
	}

	echo json_encode(array(
		'status'=>$status,
		'pesan'=>$pesan,
	));
}
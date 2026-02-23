<?php
// Izinkan akses dari browser (CORS)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// 1. Ambil data JSON yang dikirim dari HTML
$inputData = file_get_contents('php://input');
$data = json_decode($inputData, true);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "Tidak ada data yang dikirim"]);
    exit;
}

// 2. Setup Request ke API Jagel menggunakan cURL (Server-to-Server)
$url = 'https://api.jagel.id/v1/balance/adjust';
$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json'
]);

// 3. Eksekusi dan ambil hasilnya
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    echo json_encode(["status" => "error", "message" => curl_error($ch)]);
} else {
    // 4. Kembalikan jawaban Jagel ke HTML
    echo $response;
}

curl_close($ch);
?>
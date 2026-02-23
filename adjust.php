<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') { exit; }

$inputData = file_get_contents('php://input');
$data = json_decode($inputData, true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Data tidak ditemukan"]);
    exit;
}

// KONFIGURASI API KEY DI SINI (Lebih Aman)
$apiKeyJagel = "c6wA9HlUkN2PYEpEOYmDwiehrw7QMIVAvPETMpR2NRN4jjnYPO";

// Susun ulang payload agar bersih
$payload = [
    "type"   => "username",
    "value"  => $data['value'],
    "amount" => (int)$data['amount'],
    "note"   => $data['note'],
    "apikey" => $apiKeyJagel // API Key ditempel di sini
];

$ch = curl_init('https://api.jagel.id/v1/balance/adjust');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); 

$response = curl_exec($ch);
$info = curl_getinfo($ch);
curl_close($ch);

// Jika Jagel menolak IP, kita tampilkan juga IP VPS kita untuk mempermudah whitelist
$resArray = json_decode($response, true);
if (isset($resArray['message']) && $resArray['message'] == "IP Ditolak") {
    // Mencoba mengambil IP Server/VPS Anda
    $vpsIP = $_SERVER['SERVER_ADDR'] ?? 'Cek di dashboard VPS';
    $resArray['debug_vps_ip'] = $vpsIP; 
    echo json_encode($resArray);
} else {
    echo $response;
}
?>
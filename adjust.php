<?php
header('Content-Type: application/json');

// Ambil data dari request HTML
$input = json_decode(file_get_contents('php://input'), true);

$url = 'https://api.jagel.id/v1/balance/adjust';
$options = [
    'http' => [
        'header'  => "Content-type: application/json\r\n",
        'method'  => 'POST',
        'content' => json_encode($input),
    ],
];

$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

// Teruskan response dari Jagel kembali ke HTML
echo $result;
?>
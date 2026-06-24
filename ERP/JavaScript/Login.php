<?php

$serverName = "Jucelbia-hp\SQLDEVELOPER";
$connectionOptions = [
    "Database" => "Nobre.Log",
    "Uid" => "sa",
    "PWD" => "@t1v0erp"
];

$conn = sqlsrv_connect($serverName, $connectionOptions);

if ($conn) {
    echo "Conectado!";
} else {
    echo "Erro na conexão";
    die(print_r(sqlsrv_errors(), true));
}

?>
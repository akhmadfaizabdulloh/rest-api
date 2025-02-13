<?php

$mahasiswa = [
    "nama" => "Sandhika Galih",
    "nrp" => "043040023",
    "email" => "sandhikagalih@unpas.ac.id"
];

// var_dump($mahasiswa);

$data = json_encode($mahasiswa);
echo $data;

$mahasiswa_banyak = [
    [
        "nama" => "Sandhika Galih",
        "nrp" => "043040023",
        "email" => "sandhikagalih@unpas.ac.id"
    ],
    [
        "nama" => "Erik Doank",
        "nrp" => "023040001",
        "email" => "erik@gmail.com"
    ]
];

$data2 = json_encode($mahasiswa_banyak);
echo $data2;

?>
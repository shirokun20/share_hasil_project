<?php

/**
 *
 */
class Koneksi
{

    private $waw;
    // Database
    private $db = 'biodata';
    // User
    private $us = 'root';
    // Password
    private $pw = '';
    // host
    private $hs = 'localhost';

    public function __construct()
    {
        $this->waw = new mysqli($this->hs, $this->us, $this->pw, $this->db);
        ini_set('memory_limit', '-1');
    }

    public function manual($sql)
    {
    	return $this->waw->query($sql);
    }

}

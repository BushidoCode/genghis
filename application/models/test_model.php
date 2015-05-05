<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Test_Model extends CI_Model{

  /**
  * Get all Links for About Page
  */
  public function getLinks(){
    $result = $this->db->get('about')->result_array();
    return $result;
  }
}

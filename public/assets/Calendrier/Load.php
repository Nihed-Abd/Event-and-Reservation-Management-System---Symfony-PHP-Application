<?php

include_once '../../../config.php';

$connect = config::getConnexion();

$data = array();

$query = "SELECT * FROM event ORDER BY idEvent";

$statement = $connect->prepare($query);

$statement->execute();

$result = $statement->fetchAll();

foreach($result as $row)
{

    $date = $row["date"];
    $time = $row["time"];
    $datetime = date('Y-m-d H:i:s', strtotime("$date $time"));
    $newTime = date('H:i:s', strtotime($time . '+2 hours'));
    $datetimeEnd = date('Y-m-d H:i:s', strtotime("$date $newTime"));


 $data[] = array(
  'id'   => $row["idEvent"],
  'title'   => $row["name"],
  'start'   => $datetime,
  'end'   => $datetimeEnd
 );
}

echo json_encode($data);

?>
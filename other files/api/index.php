<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods', "GET");

$conn = new mysqli('localhost', 'root', '', 'projects_todo');

$input = json_decode(file_get_contents("php://input"));
$method = $_SERVER['REQUEST_METHOD'] == "GET" ? "GET" : $input->method;
$response = array('status'=>true, 'data'=> array());
$result = array();

if ($method == "GET") {
    $rows = $conn->query("SELECT * FROM tasks ORDER BY on_date DESC, id DESC");
    $result = $rows->fetch_all(MYSQLI_ASSOC);
} 

else if ($method == "POST") {
    $title = $input->title;
    $date = $input->date;
    
    $insert = $conn->query("INSERT INTO tasks (title, on_date) VALUES ('$title', '$date')");
    if ($insert) {
        $result = $conn->query("SELECT * FROM tasks WHERE id=". $conn->insert_id)->fetch_assoc();
    } else {
        $response['status'] = false;
    }
}

else if ($method == "PUT") {
    $id = $input->id;
    $task = $conn->query("SELECT * FROM tasks WHERE id=". $id)->fetch_assoc();
    $is_done = $task['is_done'] == 0 ? 1 : 0;
    $conn->query("UPDATE tasks SET is_done=$is_done WHERE id=" . $id);
    $result = $is_done;
}

else if ($method == "DELETE") {
    $id = $input->id;
    $conn->query("DELETE FROM tasks WHERE id=" . $id);
}

$response['data'] = $result;
echo json_encode($response, JSON_PRETTY_PRINT);

?>
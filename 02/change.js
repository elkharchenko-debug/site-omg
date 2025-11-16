function find_edit(){
    const surname_node = document.getElementById('surname')
    surname_node.innerHTML=" Fox"

    const name_node = document.getElementById('name')
    name_node.innerHTML="Silver"
}

const node_for_click = document.getElementById("for_click")

node_for_click.addEventListener("click",find_edit)

$(document).ready(() => {
    CargarAnimales();

    // $("menu-principal").load("components/menutppal.html");
    // $("#btnCargar").click(ClickBtnCargar);
    // $("#enviarFrm").click((event) => {
    //     event.preventDefault();
    //     const txtNombre = $("#nombre");
    //     const txtPwd = $("#txtPwd");
    //     let p = {
    //         Nombre: txtNombre.val(),
    //         Password: txtPwd.val()
    //     };
    //     $.post("https://dummyjson.com/products/add", p,
    //         (rs) => {
    //             console.log(rs);
    //          })
    // })
});


function CargarAnimales() {
    $.get("http://localhost:3000/api/animal", (rs) => {
        let tbl = $("#tablita");
        console.log(rs)
        rs.forEach(p => {
            tbl.append(`<tr>
            <td>${p.NOMBRE_ANIMAL}</td>
            <td>${p.title}</td>
            <td></td>
            </tr>`);
        });
    });
}
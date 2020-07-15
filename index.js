/*
1.	BASE DE DATOS (SQL): Dadas las tablas DIVISIONES (Campo: ID_DIVISION,NOMBRE),
 GRUPOS(ID_GRUPO, ID DIVISION, NOMBRE) y SUBGRUPO(ID_SUBG, ID_GRUPO, NOMBRE), 
 elaborar un query en el cual se cuente cuantos subgrupos hay en una DIVISION? 
 Las Divisiones tienen Grupos y estos a su vez tienen Subgrupos.

 */

/*----------------------------------------*/
/*----------------------------------------*/
/*----------------------------------------*/
/*----------------------------------------*/
/*----------------------------------------*/

 /*2.	.NET: En C#, Crear una Lista con la clase ALUMNOS 
 (ID, NOMBRE) y añadir datos a dicha Lista. Si su habilidad no es C#, use Javascript.
*/
/*----------------------------------------*/
let alumnos = class {
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}
}
let hoola = new alumnos(1, 'Oscar');

console.log(hoola)


/*----------------------------------------*/
/*----------------------------------------*/
/*----------------------------------------*/
/*----------------------------------------*/
/*----------------------------------------*/
/*----------------------------------------*/
/*----------------------------------------*/



// 
// 
// 
// 
// 
function operation(value) {
	switch (value) {
		case 1:
			alert('hola1')
			break;
		case 2:
			alert('hola2')

			break;
		case 3:
			alert('hola3')

			break;
		case 4:
			alert('hola4')

			break;
		default:
			break;
	}

	
}

$(document).ready(function () {
    let html = "";
    $.ajax({ 
        type: 'GET', 
        url: 'https://server.mysuccessu.com/cursos', 
        data: { get_param: 'value' }, 
        success: function (data) { 
            var data = data.data
            // $('#cand').html(data);
       html += `
	<table class="table">
    	<thead>
      	<tr>
        	<th>title</th>
        	<th>description </th>
        <th>Categoría</th>
      </tr>
    </thead>
    <tbody>`

data.forEach(resp => {
    html += `
      <tr>
        <td>${resp.Course_title}</td>
        <td>${resp.Short_description}</td>
        <td>`
        	resp.categories.forEach(data => {
        	html += data.name
        	})
        html += `</td>
      </tr>
    `
});
           

 html += `
    </tbody>
  </table>`
		$(".listAjax").html(html);
        }
    });
});
// this requests the file and executes a callback with the parsed result once
//   it is available

// fetchJSONFile(chrome.extension.getURL('./test.json'), function(data){
// 	// do something with your data
// 	console.log(data);
// });
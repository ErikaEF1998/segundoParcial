
// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyBN45lTXqg4fSGvarBBu4WvaegYBYnyax8",
authDomain: "segundoparcial-f1ec4.firebaseapp.com",
databaseURL: "https://segundoparcial-f1ec4.firebaseio.com",
projectId: "segundoparcial-f1ec4",
storageBucket: "segundoparcial-f1ec4.appspot.com",
messagingSenderId: "570162963725",
appId: "1:570162963725:web:1c7e932812b0dbdaf97c44"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var idus = document.getElementById('id');
var txtnombre = document.getElementById('nombre');
var txtapellido = document.getElementById('apellido');
var txtedad = document.getElementById('edad');
var txtsexo = document.getElementById('sexo');
var txtprofesion = document.getElementById('profesion');
var txttelefono = document.getElementById('telefono');
var txtemail = document.getElementById('email');
var txtperfil = document.getElementById('perfil');
var txtproyectos1 = document.getElementById('proyectos1');
var txtproyectos2 = document.getElementById('proyectos2');
var txtproyectos3 = document.getElementById('proyectos3');
var txttrabajos1 = document.getElementById('trabajos1');
var txttrabajos2 = document.getElementById('trabajos2');
var txttrabajos3 = document.getElementById('trabajos3');
var txttrabajos4 = document.getElementById('trabajos4');
var ListadoPersona = document.getElementById('ListadoPersona');


function agegarDatos(){
    db.collection("persona").add({
        nombre: txtnombre.value,
        apellido: txtapellido.value,
        edad: txtedad.value,
        sexo: txtsexo.value,
        profesion: txtprofesion.value,
        telefono: txttelefono.value,
        email: txtemail.value,
        perfil: txtperfil.value,
        proyectos1: txtproyectos1.value,
        proyectos2: txtproyectos2.value,
        proyectos3: txtproyectos3.value,
        trabajos1: txttrabajos1.value,
        trabajos2: txttrabajos2.value,
        trabajos3: txttrabajos3.value,
        trabajos4: txttrabajos4.value
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        limpiarDatos();
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

function limpiarDatos(){
    txtnombre.value = "";
    txtapellido.value = "";
    txtedad.value = "";
    txtsexo.value = "";
    txtprofesion.value = "";
    txttelefono.value = "";
    txtemail.value = "";
    txtperfil.value = "";
    txtproyectos1.value = "";
    txtproyectos2.value = "";
    txtproyectos3.value = "";
    txttrabajos1.value = "";
    txttrabajos2.value = "";
    txttrabajos3.value = "";
    txttrabajos4.value = "";
}

leerDatos();
function leerDatos(){
    ListadoPersona.innerHTML ="";
    db.collection("persona").get()
    .then((querySnapshot)=> {
        querySnapshot.forEach((doc) => {
            ListadoPersona.innerHTML +=`    
                <tr>
				<td>${doc.data().nombre}</td>
				<td> ${doc.data().apellido}</td>
				<td>${doc.data().edad} </td>
				<td>${doc.data().sexo}</td>
				<td>${doc.data().profesion}</td>
                <td>${doc.data().telefono}</td>
                <td>${doc.data().email} </td>
                <td>${doc.data().perfil} </td>
                <td>${doc.data().proyectos1} </td>
                <td>${doc.data().proyectos2} </td>
                <td>${doc.data().proyectos3} </td>
                <td>${doc.data().trabajos1} </td>
                <td>${doc.data().trabajos2} </td>
                <td>${doc.data().trabajos3} </td>
                <td>${doc.data().trabajos4} </td>

                <td>
                <button id="caja"onclick="editar('${doc.id}')" class="info"></i>Editar</button>
                <button onclick="eliminar('${doc.id}')" class="danger"></i>Eliminar</button>
                <button id="actualizar(${doc.id})" onclick="actualizar()" >Actualizar</button>                
                </td>
			  </tr>            
            `;
        });
    })
    .catch((error) =>{
       console.log("Error: ", error);
    });
}

function editar(id){
    db.collection("persona").doc(id).get()
    .then((doc)=> {
        idus.value=id;
        txtnombre.value = doc.data().nombre;
        txtapellido.value = doc.data().apellido;
        txtedad.value = doc.data().edad;
        txtsexo.value = doc.data().sexo;
        txtprofesion.value = doc.data().profesion;
        txttelefono.value = doc.data().telefono;
        txtemail.value = doc.data().email;
        txtperfil.value = doc.data().perfil;
        txtproyectos1.value = doc.data().proyectos1;
        txtproyectos2.value = doc.data().proyectos2;
        txtproyectos3.value = doc.data().proyectos3;
        txttrabajos1.value = doc.data().trabajos1;
        txttrabajos2.value = doc.data().trabajos2;
        txttrabajos3.value = doc.data().trabajos3;
        txttrabajos4.value = doc.data().trabajos4;
       
    })
    .catch((error)=> {
        console.error("Error: ", error);
    });

}

function eliminar(id){
    db.collection("persona").doc(id).delete()
    .then(()=> {
        console.log("Documento ELIMINADO");
        leerdatos();
    }).catch((error)=> {
        console.error("Error: ", error);
    });
}

function actualizar(){
    db.collection("persona").doc(id).get()        
        .then( ()=> {
            txtnombre.value = doc.data().nombre;
            txtapellido.value = doc.data().apellido;
            txtedad.value = doc.data().edad;
            txtsexo.value = doc.data().sexo;
            txtprofesion.value = doc.data().profesion;
            txttelefono.value = doc.data().telefono;
            txtemail.value = doc.data().email;
            txtperfil.value = doc.data().perfil;
            txtproyectos1.value = doc.data().proyectos1;
            txtproyectos2.value = doc.data().proyectos2;
            txtproyectos3.value = doc.data().proyectos3;
            txttrabajos1.value = doc.data().trabajos1;
            txttrabajos2.value = doc.data().trabajos2;
            txttrabajos3.value = doc.data().trabajos3;
            txttrabajos4.value = doc.data().trabajos4;
            console.log("Document successfully updated!");
            window.location.reload();
        })
        .catch((error)=> {
            console.error("Error: ", error);
        });
        
}

mostrarProyecto1();
function mostrarProyecto1(){
    Listarproyecto1.innerHTML ="";
    db.collection("persona").get()
    .then((querySnapshot)=> {
        querySnapshot.forEach((doc) => {
            Listarproyecto1.innerHTML +=`    
                <tr>
                <p>${doc.data().proyectos1} </p>
			  </tr>            
            `;
        });
    })
    .catch((error) =>{
       console.log("Error: ", error);
    });
}

mostrarNombre();
function mostrarNombre(){
    Listarnombre.innerHTML ="";
    db.collection("persona").get()
    .then((querySnapshot)=> {
        querySnapshot.forEach((doc) => {
            Listarnombre.innerHTML +=`    
                <tr>
                <h2>${doc.data().nombre} </h2>
			  </tr>            
            `;
        });
    })
    .catch((error) =>{
       console.log("Error: ", error);
    });
}

mostrarProyecto2();
function mostrarProyecto2(){
    Listarproyecto2.innerHTML ="";
    db.collection("persona").get()
    .then((querySnapshot)=> {
        querySnapshot.forEach((doc) => {
            Listarproyecto2.innerHTML +=`    
                <tr>
                <p>${doc.data().proyectos2} </p>
			  </tr>            
            `;
        });
    })
    .catch((error) =>{
       console.log("Error: ", error);
    });
}

mostrarProyecto3();
function mostrarProyecto3(){
    Listarproyecto3.innerHTML ="";
    db.collection("persona").get()
    .then((querySnapshot)=> {
        querySnapshot.forEach((doc) => {
            Listarproyecto3.innerHTML +=`    
                <tr>
                <p>${doc.data().proyectos3} </p>
			  </tr>            
            `;
        });
    })
    .catch((error) =>{
       console.log("Error: ", error);
    });
}

mostrarTrabajo1();
function mostrarTrabajo1(){
    Listartrabajo1.innerHTML ="";
    db.collection("persona").get()
    .then((querySnapshot)=> {
        querySnapshot.forEach((doc) => {
            Listartrabajo1.innerHTML +=`    
                <tr>
                <p>${doc.data().trabajos1} </p>
			  </tr>            
            `;
        });
    })
    .catch((error) =>{
       console.log("Error: ", error);
    });
}

mostrarTrabajo2();
function mostrarTrabajo2(){
    Listartrabajo2.innerHTML ="";
    db.collection("persona").get()
    .then((querySnapshot)=> {
        querySnapshot.forEach((doc) => {
            Listartrabajo2.innerHTML +=`    
                <tr>
                <p>${doc.data().trabajos2} </p>
			  </tr>            
            `;
        });
    })
    .catch((error) =>{
       console.log("Error: ", error);
    });
}

mostrarTrabajo3();
function mostrarTrabajo3(){
    Listartrabajo3.innerHTML ="";
    db.collection("persona").get()
    .then((querySnapshot)=> {
        querySnapshot.forEach((doc) => {
            Listartrabajo3.innerHTML +=`    
                <tr>
                <p>${doc.data().trabajos3} </p>
			  </tr>            
            `;
        });
    })
    .catch((error) =>{
       console.log("Error: ", error);
    });
}

mostrarTrabajo4();
function mostrarTrabajo4(){
    Listartrabajo4.innerHTML ="";
    db.collection("persona").get()
    .then((querySnapshot)=> {
        querySnapshot.forEach((doc) => {
            Listartrabajo4.innerHTML +=`    
                <tr>
                <p>${doc.data().trabajos4} </p>
			  </tr>            
            `;
        });
    })
    .catch((error) =>{
       console.log("Error: ", error);
    });
}
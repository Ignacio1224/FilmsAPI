let user;
let database;




function AddImageDatabase(vehicle, url) {
    database.transaction((tx) => {
        tx.executeSql('INSERT INTO VehicleImage VALUES (?,?)', [vehicle, url]);
    });
}


function GetVehicleImage(veh) {
    let vehicleImage = null;
    return new Promise((resolve, reject) => {
        database.transaction(
            (tx) => {
                tx.executeSql("SELECT Url FROM VehicleImage WHERE VehicleRegistration=?", [veh], (tx, result) => {
                    if (result.rows[0]) {
                        vehicleImage = (`data:image/jpeg;base64,${result.rows[0].Url}`);
                    }
                    resolve(vehicleImage);
                });
            }
        );
    });
}


function ClearInputs(place) {
    const inputs = $(`#${place} :input`);

    for (i of inputs) {
        $(i).val('');
    }
}


function InitDatabase() {
    database.transaction(
        (tx) => {
            tx.executeSql("CREATE TABLE IF NOT EXISTS FavouriteWorkshop (Email, Id)", []);
            tx.executeSql("CREATE TABLE IF NOT EXISTS VehicleImage (VehicleRegistration, Url)", []);
        }
    );
}


function IntroAction(el, fn, fnArgs = null) {
    $(`#${el}`).keyup(function (event) {
        if (event.keyCode === 13) {
            if (fnArgs) {
                fn(fnArgs);
            } else {
                fn();
            }
        }
    });
}


function LogIn() {

    // database = window.openDatabase('Favourites', '1.0', 'Database for favourite workshops', 1024 * 1024 * 4);

    // if (email !== '' && password !== '' && ValidateEmail(email)) {

        user = new User('icabrera', null, null, '//122418');

        const resAjax = AjaxPOST('http://127.0.0.9/login.php', user.GenerateLogInJSON());

        if (resAjax) {
            resAjax
            .done((response) => {
                user = new User(response.userName, response.userId, response.userEmail, null, response.userToken);
                console.log(user);
            })

            .fail((error) => {
                console.log("Error",error);
            });
        } else {
            alert('Error');
        }

    // } else {

    //     alert('Usuario o clave incorrecto');

    // }
}


function LogOut() {
    const resAjax = AjaxPOST('http://127.0.0.9/logout.php');
    
    if(resAjax){
        resAjax

        .done((success) => {
            user = null;
            database = null;
            console.log(success);
        })
        
        .fail((error) => {
            alert(error);
        });

    } else {
        alert('Error');
    }
}


function SaveFavouriteWorkshop(wrk, add = false) {

    if (add) {

        database.transaction((tx) => {
            tx.executeSql("INSERT INTO FavouriteWorkshop VALUES (?,?)", [user.GetEmail(), wrk], () => {
                ShowModal('Añadido a favoritos');
            }, () => {
                ShowModal('No se pudo añadir a favoritos');
            });
        });
    } else {

        database.transaction((tx) => {
            tx.executeSql("DELETE FROM FavouriteWorkshop WHERE Id=? AND Email=?", [wrk, user.GetEmail()], () => {
                ShowModal('Removido de favoritos');
            }, () => {
                ShowModal('No se pudo remover de favoritos');
            });
        });
    }

    LoadFavouriteWorkshops();
}


function ValidateEmail(mail) {
    let valid = false;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        valid = true;
    }
    return (valid);
}


function AjaxPOST (url, data = null) {
    let ajax = null;

    try {
        ajax = $.ajax({

            type: "POST",
    
            url,
    
            headers: {
                Authorization: user.GetToken()
            },
    
            contentType: 'application/x-www-form-urlencoded',
    
            dataType : 'JSON',
    
            data

        });
                
    } catch (error) {
        ajax = null;
    }

    return ajax;
}

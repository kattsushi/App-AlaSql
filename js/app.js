var app = angular.module("app", ['ngRoute', 'ngResource']);
 
 
app.config(['$routeProvider',function($routeProvider) {
/*    
app.factory('JsonService', function($resource){

return $resource('js/menu.json',{ }, {
    getData: {method:'GET', isArray: true}
    });
    });    
    
    
    
 
app.factory('MenuServ' function(){
    var menu = [];
    
    var OtroMenu = [
         { 
             "id" : 006 , "name" : "Mantenimiento Talleres" , "iconf": "fa fa-globe", "categoria" : "M",
                "ruta" : " ", 
                "submenu" : [{
                    "id" : 002, "name" : "Reporte 1" , "categoria" : "L",
                    "ruta" : "reporte1"} ,{
                    "id" : 003, name : "Reporte 2" , "categoria" : "L",
                    "ruta" : "reporte2"}]
         } 
                        ];
    

    }); */
  $routeProvider.when('/index.html', {
    templateUrl: "reporte1.html",
    controller: "MainController"
  });
   
  $routeProvider.when('/reporte1', {
    templateUrl: "reporte1.html",
    controller: "Pagina1Controller"
  });
   
  $routeProvider.when('/reporte2', {
    templateUrl: "reporte2.html",
    controller: "Pagina2Controller"
  }); 

  $routeProvider.when('/reporte3', {
    templateUrl: "reporte3.html",
    controller: "Pagina3Controller"
  }); 
  $routeProvider.when('/reporte4', {
    templateUrl: "reporte4.html",
    controller: "Pagina4Controller"
  }); 

   
  $routeProvider.otherwise({
        redirectTo: '/'
  });   
 
}]);
 
 
app.controller("Pagina1Controller", ["$scope", function($scope) {
    $scope.mensaje="Texto cargado desde el controlador Pagina1Controller";
     
    $scope.menus = [{"id" : 001 , "name" : "Automovil" , "iconf" : "fa fa-car", "categoria" : "M",
           "ruta" : " ", 
            "submenu" : [{
                "id" : 002, "name" : "Pre-listado Ind" , "categoria" : "L",
                "ruta" : "reporte1"} ,{
                "id" : 003, "name" : "Pre-listado flota" , "categoria" : "L",
                "ruta" : "reporte2"} , {
                "id" : 004, "name" : "Tarifas" , "categoria" : "L",
                "ruta" : "reporte3"} , {   
                "id" : 005, "name" : "Tarifas" , "categoria" : "L",
                "ruta" : "reporte3"         
                        }]
       },
       {
           "id" : 006 , "name" : "Siniestros" , "iconf" : "fa fa-plus-square", "categoria" : "M",
            "ruta" : " ", 
            "submenu" : [{
                "id" : 002, "name" : "Ordenes de Pago" , "categoria" : "L",
                "ruta" : "reporte1"} ,{
                "id" : 003, "name" : "Ordenes de Compra" , "categoria" : "L",
                "ruta" : "reporte2"} , {
                "id" : 004, "name" : "Declaracion de Siniestros" , "categoria" : "L",
                "ruta" : "reporte3"}],
       },
        {
            "id" : 010 , "name" : "Personas" ,  "iconf" : "fa fa-male", "categoria" : "M",
            "ruta" : " ", 
            "submenu" : [{
                "id" : 002, "name" : "HCM individual" , "categoria" : "L",
                "ruta" : "reporte1"} ,{
                "id" : 003, "name" : "Solidarios" , "categoria" : "L",
                "ruta" : "reporte2"} , {
                "id" : 004, "name" : "GEH" , "categoria" : "L",
                "ruta" : "reporte3"} , {   
                "id" : 005, "name" : "Declaracion" , "categoria" : "L",
                "ruta" : "reporte3"         
                        }],
        
        },
        {
           "id" : 006 , "name" : "Intranet" , "iconf": "fa fa-globe", "categoria" : "M",
            "ruta" : " ", 
            "submenu" : [{
                "id" : 002, "name" : "Reporte 1" , "categoria" : "L",
                "ruta" : "reporte1"} ,{
                "id" : 003, "name" : "Reporte 2" , "categoria" : "L",
                "ruta" : "reporte2"}]
              } ] ;


          }]);
 

 
app.controller("Pagina3Controller", ["$scope", function($scope) {
   $scope.mensaje="Texto cargado desde el controlador Pagina3Controller";
    post = $resource('http://jsonplaceholder.typicode.com/posts'), {});
    $scope.menu= Post.query();
    
 /*
    $scope.menu = [];
     var OtroMenu = [
         { 
             "id" : 006 , "name" : "Mantenimiento Talleres" , "iconf": "fa fa-globe", "categoria" : "M",
                "ruta" : " ", 
                "submenu" : [{
                    "id" : 002, "name" : "Reporte 1" , "categoria" : "L",
                    "ruta" : "reporte1"} ,{
                    "id" : 003, name : "Reporte 2" , "categoria" : "L",
                    "ruta" : "reporte2"}]
         } 
                        ];
    JsonService.getData(function(data){
    console.log(data);
    })
    .error(function (err) {
            alert(err);
        });
    
    
   
    $http.get('js/menu.asp')
        .success(function (response) {
        for (var i =0,ii =response.length; i < ii; i++){
            menu.push(response[i]);
            }
        })
        .error(function (err) {
            alert(err);
        });
                  
    $scope.guardar = function (id) {
        $http.post('/js/menu.json', id)
            .success(function(response){
                alert('Hecho, menu guardado');                         
            })
            .error(function(err){
                 alert(err);                        
            });
        } 
        */
}]);

app.controller("Pagina4Controller", ["$scope",function($scope) {
   $scope.mensaje="Texto cargado desde el controlador Pagina3Controller";
}]);

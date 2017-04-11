/**
 * Created by Xander on 4/11/2017.
 */

angular.module("cardBoards").service('apiService', function($http, $q) {

    //UTILITY METHODS   =   =   =   =   =   =   =   =   =

    function genericGet(url) {
        var deferred = $q.defer();
        $http.get(url)
            .success(response => {
                deferred.resolve(response);
            });
        return deferred.promise
    }

    function genericPost(url, data) {
        var deferred = $q.defer();
        $http.post(url, data)
            .success(response => {
            deferred.resolve(response);
    });
        return deferred.promise;
    }

    //PRODUCTS  =   =   =   =   =   =   =   =   =   =   =
    this.getProductList = () => {
        return genericGet("/api/product/list");
    };

    this.getProductById = (productId) => {
        return genericGet("/api/product/" + productId)
    };

    this.getProductGallery = () => {
        return genericGet("/api/product/gallery")
    };

    this.updateProduct = (updatedProduct) => {
        let deferred = $q.defer();
        $http.put(url,updatedProduct)
            .success(response => {
                deferred.resolve(response)
            });
        return deferred.promise;
    };

    //SALES =   =   =   =   =   =   =   =   =   =   =   =


    //REVIEWS   =   =   =   =   =   =   =   =   =   =   =



});
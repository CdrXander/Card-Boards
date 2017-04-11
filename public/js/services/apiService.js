/**
 * Created by Xander on 4/11/2017.
 */

angular.module("cardBoards").service('apiService', function($http, $q) {

    //UTILITY METHODS   =   =   =   =   =   =   =   =   =

    function genericGet(url) {
        let deferred = $q.defer();
        $http.get(url)
            .success(response => {
                deferred.resolve(response);
            });
        return deferred.promise
    }

    function genericPost(url, data) {
        let deferred = $q.defer();
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
        let url = "/api/product";
        $http.put(url,updatedProduct)
            .success(response => {
                deferred.resolve(response)
            });
        return deferred.promise;
    };

    //SALES =   =   =   =   =   =   =   =   =   =   =   =
    this.createSaleRecord = (saleRecord) => {
        return genericPost("/api/sale", saleRecord)
    };

    this.updateOrder = (updatedOrder) => {
        let deferred = $q.defer();
        let url = "/api/order";
        $http.put(url, updatedOrder)
            .success(response => {
                deferred.resolve(response);
            });
        return deferred.promise;
    };

    this.getSaleList = () => {
        return genericGet("/api/sale/list");
    };

    this.getOrderList = () => {
        return genericGet("/api/order/list")
    };

    this.getOpenOrderList = () => {
        return genericGet("/api/order/list/open")
    };

    //REVIEWS   =   =   =   =   =   =   =   =   =   =   =

    this.createReview = (newReview) => {
        return genericPost("/api/review", newReview)
    };

    this.getReviewList = () => {
        return genericGet("/api/review/list");
    };

    this.getReviewById = (review_id) => {
        return genericGet("/api/review/" + review_id);
    };
});